import { Request, Response } from "express";
import contactModel from "../model/contactModel";

export const createContact = async(req : Request, res : Response) =>{
    try {
        const {name, phoneNumber, category} = req.body

        let image = await name.charAt().toUpperCase()

        const contacts = await contactModel.create({name, phoneNumber, category, 
            image
        })

        return res.status(201).json({
            message: "Contact created",
            data : contacts 
        })

    } catch (error) {
        return res.status(404).json({
            message: "Error",
            data : error.message 
        })
    }
}

export const viewContact = async(req : Request, res : Response) =>{
    try {
        const contacts = await contactModel.find().sort({name : 1}) 
       
        return res.status(200).json({
            message: "Contact viewed",
            data : contacts
        })

    } catch (error) {
        return res.status(404).json({
            message: "Error",
            data : error.message 
        })
    }
}

export const searchCategory = async(req : Request, res : Response) =>{
    try {
        const {category} = req.body

        const contacts = await contactModel.find({category}).sort({createdAt : -1})

        return res.status(200).json({
            message: "Contact searched",
            data : contacts 
        })

    } catch (error) {
        return res.status(404).json({
            message: "Error",
            data : error.message 
        })
    }
}

export const updateContact = async(req : Request, res : Response) =>{
    try {
        const {contactID} = req.params
        const {phoneNumber, name} = req.body

        const image = name.charAt().toUppercase()

        const contacts = await contactModel.findByIdAndUpdate( contactID,
            {phoneNumber, name, image}, {new : true}
        )

        return res.status(201).json({
            message: "Contact updated",
            data : contacts
        })

    } catch (error) {
        return res.status(404).json({
            message: "Error",
            data : error.message 
        })
    }
}

export const deleteContact = async(req : Request, res : Response) =>{
    try {
        
        const {contactID} = req.params

        const contacts = await contactModel.findByIdAndDelete(contactID)

        return res.status(201).json({
            message: `${contacts?.name} deleted`,
        })

    } catch (error) {
        return res.status(404).json({
            message: "Error",
            data : error.message 
        })
    }
}

