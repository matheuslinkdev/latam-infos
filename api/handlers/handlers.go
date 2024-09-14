package handlers

import (
	"encoding/json"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"github.com/gin-gonic/gin"
)

type Country struct {
	Name              string   `json:"name"`
	Capital           string   `json:"capital"`
	FlagURL           string   `json:"flag_url"`
	Languages         []string `json:"languages"`
	Currencies        []string `json:"currencies"`
	EconomicStrengths []string `json:"economic_strengths"`
	TotalGDP          string   `json:"total_gdp"`
	GDPPerCapita      string   `json:"gdp_per_capita"`
	Population        string   `json:"population"`
	AreaSqKm          string   `json:"area_sq_km"`
	Borders           []struct {
		Name    string `json:"name"`
		FlagURL string `json:"flag_url"`
	} `json:"borders"`
	BorderLengthKm   string   `json:"border_length_km"`
	InflationRate    string   `json:"inflation_rate"`
	GlobalRank       string   `json:"global_rank"`
	LATAMRank        string   `json:"latam_rank"`
	Climates         []string `json:"climates"`
	GovernmentSystem string   `json:"government_system"`
	CurrentLeader    string   `json:"current_leader"`
}

func GetAllCountries(c *gin.Context) {
	filePath := filepath.Join("data", "countries.json")

	// Lê o arquivo JSON
	data, err := readJSONFile(filePath)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to open file"})
		return
	}

	var countries []Country
	if err := json.Unmarshal(data, &countries); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error parsing JSON"})
		return
	}

	// Ordenação (caso queira implementar no futuro)
	sortBy := c.Query("sort_by")
	_ = sortBy

	c.JSON(http.StatusOK, countries)
}

func GetCountryHandler(c *gin.Context) {
	countryName := c.Param("name")

	filePath := filepath.Join("data", "countries.json")

	data, err := readJSONFile(filePath)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to open file"})
		return
	}

	var countries []Country
	if err := json.Unmarshal(data, &countries); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error parsing JSON"})
		return
	}

	// Procurar o país
	for _, country := range countries {
		if strings.EqualFold(country.Name, countryName) {
			c.JSON(http.StatusOK, country)
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "Country not found"})
}

// Função para ler o arquivo JSON
func readJSONFile(filePath string) ([]byte, error) {
	return os.ReadFile(filePath)
}
