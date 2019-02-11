#!/bin/bash

CNAMEFILE="dist/CNAME";

yarn run build;
echo "frontinsm.com.br" > $CNAMEFILE ;
mv .gitignore _.gitignore;
git push origin :gh-pages;
git add dist && git commit -m "Static site release";
git subtree push --prefix dist origin gh-pages;
mv _.gitignore .gitignore;