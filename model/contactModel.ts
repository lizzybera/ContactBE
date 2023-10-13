import mongoose from "mongoose";

interface iContact{
    name : string,
    phoneNumber : String,
    category : string,
    image : string
}

interface iContactData extends iContact, mongoose.Document {}

const contactModel = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    phoneNumber : {
        type : String,
        require : true,
        trim : true,
        toLowerCase : true
    },
    category : {
        type : String,
        require : true
    },
    image : {
        type : String,
        toUpperCase : true
    },
}, {timestamps : true})

export default mongoose.model<iContactData>("contacts", contactModel)