#!/bin/bash

# Set clodinary keys
# 
# @example: cloudinary_keys 11110000 00000111110000 00000111110011
# @description: cloudinary_keys [cloud_name] [api_key] [api_secret]
# 
# Ref: https://firebase.google.com/docs/functions/config-env
# 
# (cd service && firebase functions:config:set cloudinary.cloud_name="$1" cloudinary.api_key="$2" cloudinary.api_secret="$3")
(cd service && firebase functions:config:set cloudinary.dev.cloud_name="$1" cloudinary.dev.api_key="$2" cloudinary.dev.api_secret="$3" cloudinary.dev.upload_preset="$4")
