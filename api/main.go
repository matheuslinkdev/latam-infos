package main

import (
	"log"
	"time"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/matheuslinkdev/lataminfos/api/handlers"
	_ "github.com/matheuslinkdev/lataminfos/docs"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"os"
)

// @title LATAM Info API
// @version 1.0
// @description This API provides country information and allows sorting by various parameters.
// @host localhost:8081
// @BasePath /

func main() {
	
	r := gin.Default()

	// Swagger documentation route
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge: 12 * time.Hour,
	}))
	
	// @Summary Get countries
	// @Description Retrieve a list of all countries, optionally sorted by a specific parameter.
	// @Param sort_by query string false "Sort by: gdp, area, population, inflation, global_rank, latam_rank"
	// @Success 200 {array} handlers.Country
	// @Failure 500 {object} gin.H{"error": string}
	// @Router /countries [get]
	r.GET("/countries", func(c *gin.Context) {
		sortBy := c.Query("sort_by")
		if sortBy != "" {
			handlers.SortCountriesBy(c)
		} else {
			handlers.GetAllCountries(c)
		}
	})

	// @Summary Get country by name
	// @Description Retrieve information for a specific country by its name.
	// @Param name path string true "Country name"
	// @Success 200 {object} handlers.Country
	// @Failure 404 {object} gin.H{"error": string}
	// @Router /countries/{name} [get]
	r.GET("/countries/:name", handlers.GetCountryHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8081"
	}

	log.Printf("Server listening on port %s", port)
	log.Fatal(r.Run(":" + port))
}
