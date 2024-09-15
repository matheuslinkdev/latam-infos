package main

import (
	"github.com/gin-gonic/gin"
	"github.com/matheuslinkdev/lataminfos/api/handlers"
	"log"
)

func main() {

	r := gin.Default()

		r.GET("/countries", func(c *gin.Context) {
		sortBy := c.Query("sort_by")
		if sortBy != "" {
			handlers.SortCountriesBy(c)
		} else {
			handlers.GetAllCountries(c)
		}
	})
	
	r.GET("countries/:name", handlers.GetCountryHandler)

	port := ":8081"
	log.Printf("Server listening on port %s", port)
	log.Fatal(r.Run(port))
}
