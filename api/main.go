package main

import (
	"log"
	"time"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/matheuslinkdev/lataminfos/api/handlers"
	"os"
)

func main() {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge: 12 * time.Hour,
	}))

	r.GET("/countries", func(c *gin.Context) {
		sortBy := c.Query("sort_by")
		if sortBy != "" {
			handlers.SortCountriesBy(c)
		} else {
			handlers.GetAllCountries(c)
		}
	})

	r.GET("/countries/:name", handlers.GetCountryHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8081"
	}

	log.Printf("Server listening on port %s", port)
	log.Fatal(r.Run(":" + port))
}
