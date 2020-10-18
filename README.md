# Cloudinary Component - Work In Progress

Proof of concept: Part of the idea of this project is to create applications with segment components, which can be fully functional as one single component and also work together with a group of components as one unity.

## to-do

- [ ] slice component that can be integrate with any client app with a auth build in

## structured

- `client/` is a react app build with expo.io cli.

- `sevice/` is a firebase function and hosting build with firebase cli.

## install

Goal: install the dependencies of client, and service.

`. ./scripts/install.sh`

## Build

Goal: build the client app and copy the result in the firebase hosting service

`. ./scripts/build.sh`

## Build & Deploy in firebase hosting

Goal: build and deploy the client build in firebase hosting

`. ./scripts/build_and_deploy.sh`
