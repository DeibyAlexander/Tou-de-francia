import {mongoose, Schema, model} from "mongoose";

const podiumsSchema = mongoose.Schema(
    {
        carrera:{
            type: String,
            required: true,
            trim:true,
        },
        año:{
            type: String,
            required: true,
            trim:true,
        },
        primer_lugar:{
            type: String,
            required: true,
            trim:true,
        },
        segundo_lugar:{
            type: String,
            required: true,
            trim:true,
        },
        tercer_lugar:{
            type: String,
            required: true,
            trim:true,
        }
    },
    {
        timestamps:true
    }
)

const Podiums = mongoose.model("Podiums", podiumsSchema, "Podiums");

export default Podiums;