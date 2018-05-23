# !/bin/sh

RED='\033[0;31m' # Red color
NC='\033[0m' # No color
# Usage
if [ $# != 1 ];then
echo "USAGE: ./generateAPK [NAME OF APK]";exit 1
fi

# Build release
ionic cordova build --release android

cd platforms/android/build/outputs/apk/release/

# Sign apk
if [ ! -f ./my-release-key.keystore ];then
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
fi
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk alias_name

# Optimize APK
zipalign -v 4 android-release-unsigned.apk $1.apk

# Get current DIR
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Return home
cd ../../../../../../

echo "${RED} APK $1.apk built in $DIR ${NC}"