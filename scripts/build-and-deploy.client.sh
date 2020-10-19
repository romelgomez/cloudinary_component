#!/bin/bash

. ./scripts/build.sh

(cd service && firebase deploy)
