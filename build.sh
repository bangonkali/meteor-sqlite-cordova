#!/bin/bash
echo Going to meteor directory.
cd agus-mobile
echo Deleting previous build directory and creating new debug directory.
rm -rf ../bin-mobile
mkdir -p ../bin-mobile/debug-mobile
echo Building debug.
meteor build ../bin-mobile/debug-mobile --server='http://192.168.1.23:3000' --debug
echo Going to debug directory.
cd ../bin-mobile/debug-mobile
echo Extracting meteor binary.
tar xf agus-mobile.tar.gz
echo Going to meteor build directory.
cd bundle/programs/server
echo Install all NPM Dependency.
npm install
echo Going back to project root directory.
cd ../../../../../
cd agus-mobile
echo Creating release directory.
mkdir -p ../bin-mobile/release-mobile
echo Building release version.
meteor build ../bin-mobile/release-mobile --server='http://192.168.1.23:3000'
echo Going to release directory.
cd ../bin-mobile/release-mobile
echo Extracting meteor binary.
tar xf agus-mobile.tar.gz
echo Going to meteor build directory.
cd bundle/programs/server
echo Install all NPM Dependency.
npm install
echo Going back to project root directory.
cd ../../../../../
echo Success.
