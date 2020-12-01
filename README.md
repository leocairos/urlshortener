# URL SHORTENER

URL Shortener Project (Backend and Frontend)

API Demo in http://api.rdlsc.ml:8001

Web Demo in http://www.rdlsc.ml

## To run

  * git clone git@github.com:leocairos/urlshortener.git
  * cd urlshortener 

* Backend
  * cd backend 
  * yarn (install packages)
  * Create database
  * Configure database in src/database.ts
  * yarn dev:server (dev in Unix)
  * yarn dev:serverwin (dev in Windows)
  * yarn prod:server (dev in Unix)

* Frontend
  * cd backend 
  * yarn (install packages)
  * yarn start

### Tips

* https://www.freenom.com/
  * Free domain

* PM2
  * pm2 start ./dist/server.js --env prod --name urlshortener_api

* Insomnia (https://insomnia.rest/)
  * Design, debug, and test APIs like a human, not a robot.
  * File avaliable in this repository (insomnia.json)