import {mongoose, Schema, model} from "mongoose";

const ciclistasSchema = mongoose.Schema(
    {
        nombre:{
            type: String,
            required: true,
            trim:true,
        },
        edad:{
            type: String,
            required: true,
            trim:true,
        },
        país:{
            type: String,
            required: true,
            trim:true,
        },
        equipo:{
            type: String,
            required: true,
            trim:true,
        },
        victorias:{
            type: String,
            required: true,
            trim:true,
        }
    },
    {
        timestamps:true
    }
)

const Ciclistas = mongoose.model("Ciclistas", ciclistasSchema, "Ciclistas");

export default Ciclistas;