package main

import (
	"log"
	"os"
	"strconv"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/matheuslinkdev/lataminfos/api/docs"
	"github.com/matheuslinkdev/lataminfos/api/handlers"
	"github.com/matheuslinkdev/lataminfos/api/middlewares"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func main() {
	r := gin.Default()
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	r.GET("/countries", middlewares.RateLimiter(), func(c *gin.Context) {
		sortBy := c.Query("sort_by")

		pageParam := c.Query("page")
		pageSizeParam := c.Query("size")

		page := 1
		pageSize := 10

		if pageParam != "" {
			if p, err := strconv.Atoi(pageParam); err == nil && p > 0 {
				page = p
			}
		}

		if pageSizeParam != "" {
			if ps, err := strconv.Atoi(pageSizeParam); err == nil && ps > 0 {
				pageSize = ps
			}
		}

		if sortBy != "" {
			handlers.SortCountriesBy(c, page, pageSize, sortBy)
		} else {
			handlers.GetAllCountries(c)
		}
	})

	r.GET("/countries/:name", middlewares.RateLimiter(), handlers.GetCountryHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server listening on port %s", port)
	log.Fatal(r.Run(":" + port))
}
