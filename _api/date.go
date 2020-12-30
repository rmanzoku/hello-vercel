package handler

import (
	"net/http"
	"time"
)

func DateHandler(w http.ResponseWriter, r *http.Request) {
	ctx := NewContext(w, r)
	currentTime := time.Now().Format(time.RFC850)
	_ = ctx.JSON(200, currentTime)
}
