FROM golang:1.23-alpine AS builder

WORKDIR /app
COPY . .

RUN go mod tidy
RUN go build -o main .

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/main .
COPY data/countries.json ./data/countries.json

ENV PORT=8080

CMD ["./main"]
