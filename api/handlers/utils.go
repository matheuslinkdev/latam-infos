package handlers

import (
	"os"
	"path/filepath"
)

var FilePath = filepath.Join("data", "countries.json")

func ReadJSONFile() ([]byte, error) {
	return os.ReadFile(FilePath)
}
