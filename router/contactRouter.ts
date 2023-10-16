import express from "express";
import { createContact, deleteContact, searchCategory, updateContact, viewContact } from "../controller/contactController";

const Router = express.Router()

Router.route("/contacts").post(createContact)
Router.route("/view-contacts").get(viewContact)

Router.route("/search").get(searchCategory)

Router.route("/:contactID/update").patch(updateContact)

Router.route("/:contactID/delete").delete(deleteContact)

export default Router