import Patrocinadores from "../models/Patrocinadores.js";

const obtainPatrocinadores = async (req,res)=>{
    try {
        const patrocinador = await Patrocinadores.find();
        res.json(patrocinador)
    } catch (error) {
        console.log("error1");
    }
}

const obtainOnePatrocinador = async (req, res)=>{
    try {
        const patrocinador = await Patrocinadores.findOne({_id:req.params.id});
        res.json(patrocinador);

    } catch (error) {
        console.log("error2");
    }
}

const insertPatrocinadores = async(req,res)=>{
    const patrocinador = new Patrocinadores(req.body)

    try {
        const newPatrocinador = await patrocinador.save();
        res.json(newPatrocinador);
        
    } catch (error) {
        console.log("error3");
    }
}

const deletePatrocinador = async(req,res)=>{
    try {
        await Patrocinadores.deleteOne({_id:req.params.id});
        res.status(400).send({
            response:"A la verga la info"
        })
    } catch (error) {
        console.log("error4");
    }
}

const updatePatrocinadores = async (req, res)=>{{
    try {
        const patrocinador = await Patrocinadores.findOne({_id:req.params.id})

        if (req.body.patrocinador) {
            patrocinador.patrocinador = req.body.patrocinador;
            
        }
        if (req.body.industria) {
            patrocinador.industria = req.body.industria;
            
        }

        if (req.body.país) {
            patrocinador.país = req.body.país;
            
        }
        if (req.body.año_fundación) {
            patrocinador.año_fundación = req.body.año_fundación;
            
        }

  

        await patrocinador.save();
        res.send(patrocinador);

    } catch (error) {
        console.log(error);
    }
}}


export{
    obtainPatrocinadores,
    obtainOnePatrocinador,
    insertPatrocinadores,
    deletePatrocinador,
    updatePatrocinadores
}
