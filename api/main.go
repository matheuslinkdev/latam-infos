package main

import (
	"github.com/gin-gonic/gin"
	"github.com/matheuslinkdev/lataminfos/api/handlers"
	"log"
)

func main() {

	r := gin.Default()

	r.GET("/countries", handlers.GetAllCountries)
	r.GET("countries/:name", handlers.GetCountryHandler)

	port := ":8081"
	log.Printf("Server listening on port %s", port)
	log.Fatal(r.Run(port))
}
