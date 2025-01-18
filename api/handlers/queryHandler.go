package handlers

import (
	"encoding/json"
	"net/http"
	"sort"

	"github.com/gin-gonic/gin"
)

func sortCountries(countries []Country, sortBy string) {
	switch sortBy {
	case "gdp":
		sort.Slice(countries, func(i, j int) bool {
			return countries[i].TotalGDP > countries[j].TotalGDP
		})
	case "area":
		sort.Slice(countries, func(i, j int) bool {
			return countries[i].AreaSqKm > countries[j].AreaSqKm
		})
	case "population":
		sort.Slice(countries, func(i, j int) bool {
			return countries[i].Population > countries[j].Population
		})
	case "inflation":
		sort.Slice(countries, func(i, j int) bool {
			return countries[i].InflationRate < countries[j].InflationRate
		})
	case "global_rank":
		sort.Slice(countries, func(i, j int) bool {
			return countries[i].GlobalRank < countries[j].GlobalRank
		})
	case "latam_rank":
		sort.Slice(countries, func(i, j int) bool {
			return countries[i].LATAMRank < countries[j].LATAMRank
		})
	}
}

func SortCountriesBy(c *gin.Context, page int, pageSize int, sortBy string) {
	data, err := ReadJSONFile()
	if err != nil {
		c.JSON(http.StatusInternalServerError, map[string]string{"error": "Unable to open file"})
		return
	}

	var countries []Country
	if err := json.Unmarshal(data, &countries); err != nil {
		c.JSON(http.StatusInternalServerError, map[string]string{"error": "Error parsing JSON"})
		return
	}

	if sortBy != "" {
		sortCountries(countries, sortBy)
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
