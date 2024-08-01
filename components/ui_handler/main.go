package main

import (
	"encoding/json"
	"log"
	"net/http"
	// "os"
	"time"
	// "path/filepath"
)

type Balance struct {
    CurrentBalance float64 `json:"currentBalance"`
}

var balance = Balance{CurrentBalance: 10.0}
// FileServer sets up a file server to serve static files from the build directory

func FileServer(root http.Dir) http.Handler {
    fs := http.FileServer(root)
    return http.StripPrefix("/", fs)
}

func main() {
    // Serve static files from the React app
    buildPath := "../../ui/build"
    fs := FileServer(http.Dir(buildPath))

    // Serve static React files
    http.Handle("/", fs)

    // Handle API routes
    http.HandleFunc("/api/balance", func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        w.Header().Set("Access-Control-Allow-Origin", "*")
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(balance)
    })

    go func() {
        for {
            time.Sleep(10 * time.Second)
            balance.CurrentBalance += 10.0
        }
    }()

    // Get port from environment or set default
    port := "5000"

    log.Printf("Server starting on port %s\n", port)
    if err := http.ListenAndServe(":"+port, nil); err != nil {
        log.Fatalf("Could not start server: %s\n", err)
    }
}

