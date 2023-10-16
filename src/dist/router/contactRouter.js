"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactController_1 = require("../controller/contactController");
const Router = express_1.default.Router();
Router.route("/contacts").post(contactController_1.createContact);
Router.route("/view-contacts").get(contactController_1.viewContact);
Router.route("/search").get(contactController_1.searchCategory);
Router.route("/:contactID/update").patch(contactController_1.updateContact);
Router.route("/:contactID/delete").delete(contactController_1.deleteContact);
exports.default = Router;
