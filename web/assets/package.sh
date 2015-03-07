#!/bin/sh

cd "$4/"
pwd
./create-dmg.sh \
  --volname $1 \
  --volicon "$4/app.icns" \
  --window-size 700 400 \
  --background "$4/background.png" \
  --icon-size 128 \
  --app-drop-link 600 190 \
  --icon $1 340 200 \
  --hide-extension "$1.app" \
  "$3/$2-$5$6.dmg" \
  "$3/$1.app"
