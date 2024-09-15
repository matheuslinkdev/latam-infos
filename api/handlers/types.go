package handlers

type Country struct {
	Name              string   `json:"name"`
	Capital           string   `json:"capital"`
	FlagURL           string   `json:"flag_url"`
	Languages         []string `json:"languages"`
	Currencies        []string `json:"currencies"`
	EconomicStrengths []string `json:"economic_strengths"`
	TotalGDP          int      `json:"total_gdp"`
	GDPPerCapita      int      `json:"gdp_per_capita"`
	Population        int      `json:"population"`
	AreaSqKm          int      `json:"area_sq_km"`
	Borders           []struct {
		Name    string `json:"name"`
		FlagURL string `json:"flag_url"`
	} `json:"borders"`
	BorderLengthKm   int      `json:"border_length_km"`
	InflationRate    float32  `json:"inflation_rate"`
	GlobalRank       int      `json:"global_rank"`
	LATAMRank        int      `json:"latam_rank"`
	Climates         []string `json:"climates"`
	GovernmentSystem string   `json:"government_system"`
	CurrentLeader    string   `json:"current_leader"`
}
