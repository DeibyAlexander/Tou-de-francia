import Equipos from "../models/Equipos.js";

const obtainEquipos= async (req,res)=>{
    try {
        const equipo= await Equipos.find();
        res.json(equipo)

    } catch (error) {
        console.log("error");
    }
}


const obtainOneEquipos = async(req,res)=>{
    try {
        const equipo = await Equipos.findOne({_id:req.params.id});
        res.json(equipo)
    } catch (error) {
        console.log(error);
    }
}


const insertEquipos= async(req,res)=>{
    const equipo = new Equipos(req.body);
    
    try {
        const newEquipo = await equipo.save();
        res.json(newEquipo);

    } catch (error) {
        console.log(error);
    }
}


const deleteEquipos = async (req, res)=>{
    try {
        await Equipos.deleteOne({_id:req.params.id});
        res.status(200).send({
            response:"A la verga la info"
        })
    } catch (error) {
        console.log(error);
    }
}

const updateEquipos = async (req, res)=>{{
    try {
        const equipo = await Equipos.findOne({_id:req.params.id})

        if (req.body.equipo) {
            equipo.equipo = req.body.equipo;
            
        }
        if (req.body.país) {
            equipo.país = req.body.país;
            
        }

        if (req.body.patrocinador) {
            equipo.patrocinador = req.body.patrocinador;
            
        }
        if (req.body.director) {
            equipo.director = req.body.director;
            
        }
        if (req.body.ciclistas) {
            equipo.ciclistas = req.body.ciclistas;
            
        }
  

        await equipo.save();
        res.send(equipo);

    } catch (error) {
        console.log(error);
    }
}}

export {
    obtainEquipos,
    obtainOneEquipos,
    insertEquipos,
    deleteEquipos,
    updateEquipos
}