package handlers

import (
	"os"
	"path/filepath"
)

var FilePath = filepath.Join("data", "countries.json")

// Função para ler o arquivo JSON
func ReadJSONFile() ([]byte, error) {

	return os.ReadFile(FilePath)
}
