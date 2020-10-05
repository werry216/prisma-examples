#!/bin/sh

set -eu

yarn dev &
pid=$!

sleep 15

curl --fail 'http://localhost:3001/filterPosts?searchString=Prisma'

kill "$pid" || true
