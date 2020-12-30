package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Context struct {
	w http.ResponseWriter
	r *http.Request
}

func NewContext(w http.ResponseWriter, r *http.Request) Context {
	return Context{w, r}
}

func (c *Context) JSON(code int, i interface{}) (err error) {
	b, err := json.Marshal(i)
	if err != nil {
		return
	}
	fmt.Fprint(c.w, string(b))
	return
}
