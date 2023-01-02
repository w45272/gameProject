#!/bin/bash

build_client_dev()
{
  npm run build --prefix "../client"  
}
build_server_dev()
{
  cd ../server/
  go run .
}
build_client_dev
build_server_dev