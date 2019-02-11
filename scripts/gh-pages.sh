#!/bin/bash

CNAMEFILE="dist/CNAME";

npm run build;
if [ -e "$CNAMEFILE" ]
then
  echo "CNAME file has been already created";
else
  echo "frontinsm.com.br" >> $CNAMEFILE ;
fi
mv .gitignore _.gitignore;
git push origin :gh-pages;
git add dist && git commit -m "Static site release";
git subtree push --prefix dist origin gh-pages;
mv _.gitignore .gitignore;