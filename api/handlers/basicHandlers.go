package handlers

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"net/http"
	"strings"
)

func GetAllCountries(c *gin.Context, page int, pageSize int) {
	data, err := ReadJSONFile()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to open file"})
		return
	}

	var countries []Country
	if err := json.Unmarshal(data, &countries); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error parsing JSON"})
		return
	}

	start := (page - 1) * pageSize
	end := start + pageSize

	if start >= len(countries) {
		c.JSON(http.StatusOK, []Country{})
		return
	}
	if end > len(countries) {
		end = len(countries)
	}

	c.JSON(http.StatusOK, countries[start:end])
}

func GetCountryHandler(c *gin.Context) {
	countryName := c.Param("name")

	data, err := ReadJSONFile()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to open file"})
		return
	}

	var countries []Country
	if err := json.Unmarshal(data, &countries); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error parsing JSON"})
		return
	}

	for _, country := range countries {
		if strings.EqualFold(country.Name, countryName) {
			c.JSON(http.StatusOK, country)
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "Country not found"})
}
