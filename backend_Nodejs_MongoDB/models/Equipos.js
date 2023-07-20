import {mongoose, Schema, model} from "mongoose";

const equiposSchema = mongoose.Schema(
    {
        equipo:{
            type: String,
            required: true,
            trim:true,
        },
        país:{
            type: String,
            required: true,
            trim:true,
        },
        patrocinador:{
            type: String,
            required: true,
            trim:true,
        },
        director:{
            type: String,
            required: true,
            trim:true,
        },
        ciclistas:{
            type: String,
            required: true,
            trim:true,
        }
    },
    {
        timestamps:true
    }
)

const Equipos = mongoose.model("Equipos", equiposSchema, "Equipos");

export default Equipos;