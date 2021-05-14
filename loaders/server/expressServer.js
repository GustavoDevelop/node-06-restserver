const express = require('express');
const config = require('../../config');

class ExpressServer {

    constructor() {

        this.app = express();
        this.port = config.port;

        this._middlewares();
     }
     _middlewares(){
        app.use(express.json());
     }
     async start() {
         
         this.app.listen(this.port, (error) => {
            if(error) {
                console.log(err);
                process.exit(1);
                return;
            }
        });
     }



}

module.exports = ExpressServer