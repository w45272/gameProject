package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
	"github.com/gofiber/websocket/v2"
)

func newWebsocket(c *fiber.Ctx) error {
	if c.Get("host") == "localhost:3000" {
		c.Locals("Host", "Localhost:3000")
		return c.Next()
	}
	return c.Status(403).SendString("Request origin not allowed")
}

func upgradedWebSocket(c *websocket.Conn) {
	fmt.Println(c.Locals("Host")) // "Localhost:3000"
	for {
		mt, msg, err := c.ReadMessage()
		if err != nil {
			log.Println("read:", err)
			break
		}
		log.Printf("recv: %s", msg)
		err = c.WriteMessage(mt, msg)
		if err != nil {
			log.Println("write:", err)
			break
		}
	}
}

func main() {
	app := fiber.New()
	app.Get()
	app.Use(filesystem.New(filesystem.Config{Root: http.Dir("../TestGame/")}))
	app.Static("/", "../TestGame/")
	app.Listen(":3000")
}
