import express from "express";
import cors from "cors";

import routerCiclistas from "../routes/ciclistas.routes.js";
import routerEquipos from "../routes/equipos.routes.js";
import routerPatrocinadores from "../routes/patrocinadores.routes.js";
import routerPodiums from "../routes/podiums.routes.js";



class Server{


    constructor(){
        this.app = express();
        
        this.port = process.env.PORT;

        this.ciclistasPatch = "/api/ciclistas";
        this.equiposPath = "/api/equipos";
        this.patrocinadoresPath = "/api/patrocinadores"
        this.podiumsPath = "/api/podiums"


        // ! Middleware
        this.middlewares();
 

        //! Routes
        this.routes();
    }

    middlewares(){

        //! Cors
        this.app.use(cors());

        // ? PUBLIC DIRECTORY
        this.app.use(express.static('public'));

        //! EXPRESS JSON
        this.app.use(express.json());

    }

    routes(){
        this.app.use(this.ciclistasPatch, routerCiclistas)
        this.app.use(this.equiposPath, routerEquipos)
        this.app.use(this.patrocinadoresPath, routerPatrocinadores)
        this.app.use(this.podiumsPath, routerPodiums)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server: ${this.port} `);
        })
    }
}

export default Server;