#!/bin/bash

echo "Generating Files"
rm -rf build/
yarn build && wget https://github.com/Teams-cs/cucekhackclubServer/archive/refs/heads/main.zip &&
    unzip main.zip && rm main.zip && mv cucekhackclubServer-main build/ &&
    mv build/cucekhackclubServer-main build/server
