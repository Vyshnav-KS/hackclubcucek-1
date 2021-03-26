#!/bin/bash

yarn build && cp .htaccess ~/program/servers/hackclub/ && cp -r build/* ~/program/servers/hackclub/ &&
firefox "cuceksite.com"
