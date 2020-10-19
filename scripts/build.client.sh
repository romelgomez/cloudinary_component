#!/bin/bash

# build the client app
(cd client && expo build:web)

# Sync files ref: https://stackoverflow.com/a/53349667/2513972
rsync -vh -a --delete client/web-build/ service/public/

