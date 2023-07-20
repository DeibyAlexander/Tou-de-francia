import Podiums from "../models/Podiums.js";

const obtainPodiums= async (req,res)=>{
    try {
        const podium= await Podiums.find();
        res.json(podium)

    } catch (error) {
        console.log("error");
    }
}


const obtainOnePodium = async(req,res)=>{
    try {
        const podium = await Podiums.findOne({_id:req.params.id});
        res.json(podium)
    } catch (error) {
        console.log(error);
    }
}


const insertPodium= async(req,res)=>{
    const podium = new Podiums(req.body);
    
    try {
        const newPodium= await podium.save();
        res.json(newPodium);

    } catch (error) {
        console.log(error);
    }
}


const deletePodium = async (req, res)=>{
    try {
        await Podiums.deleteOne({_id:req.params.id});
        res.status(200).send({
            response:"A la verga la info"
        })
    } catch (error) {
        console.log("error4");
    }
}

const updatePodium= async (req, res)=>{{
    try {
        const podium = await Podiums.findOne({_id:req.params.id})

        if (req.body.carrera) {
            podium.carrera = req.body.carrera;
            
        }
        if (req.body.año) {
            podium.año = req.body.año;
            
        }

        if (req.body.primer_lugar) {
            podium.primer_lugar = req.body.primer_lugar;
            
        }
        if (req.body.segundo_lugar) {
            podium.segundo_lugar = req.body.segundo_lugar;
            
        }
        if (req.body.tercer_lugar) {
            podium.tercer_lugar = req.body.tercer_lugar;
            
        }
  

        await podium.save();
        res.send(podium);

    } catch (error) {
        console.log(error);
    }
}}

export {
    obtainPodiums,
    obtainOnePodium,
    insertPodium,
    deletePodium,
    updatePodium
}