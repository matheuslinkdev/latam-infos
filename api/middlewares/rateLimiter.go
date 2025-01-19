package middlewares 

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/time/rate"
)

type Message struct {
	Status string `json:"status"`
	Body   string `json:"body"`
}

var limiter = rate.NewLimiter(4, 6)

func RateLimiter() gin.HandlerFunc {
	return func(c *gin.Context) {
		if !limiter.Allow() {
			c.JSON(http.StatusTooManyRequests, gin.H{
				"status":  "error",
				"message": "Too many requests. Try again later.",
			})
			c.Abort()
			return
		}
		c.Next()
	}
}
