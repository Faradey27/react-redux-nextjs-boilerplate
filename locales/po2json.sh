#!/bin/bash

pushd `dirname $0` > /dev/null;
ROOT_DIR=`pwd`'/..';
popd > /dev/null;

IFS=$'\n' read -r -d '' -a locales < ${ROOT_DIR}/locales/supportedLocales.txt  # read into an array

for locale in "${locales[@]}"
do
   :
   path=${ROOT_DIR}/locales/resources/po/${locale}.po
   newPath=${ROOT_DIR}/src/assets/locales/${locale}
   [ -f ${path} ] && node "${ROOT_DIR}/node_modules/po2json/bin/po2json" "${path}" -f jed1.x -p "${newPath}.json" || echo "Run extract_lang.sh first" ;
done
