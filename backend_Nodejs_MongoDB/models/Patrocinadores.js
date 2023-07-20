import mongoose, { Mongoose, Schema, model } from "mongoose";

const patrocinadoresSchema =  mongoose.Schema(
    {
        patrocinador:{
            type: String,
            required:true,
            trim: true

        },
        industria:{
            type: String,
            required:true,
            trim: true

        },
        país:{
            type: String,
            required:true,
            trim: true

        },
        año_fundación:{
            type: String,
            required:true,
            trim: true

        }
    },
    {
        timestamps:true
    }
)

const Patrocinadores = mongoose.model('Patrocinadores', patrocinadoresSchema, 'Patrocinadores');

export default Patrocinadores;