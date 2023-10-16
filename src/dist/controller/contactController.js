"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.updateContact = exports.searchCategory = exports.viewContact = exports.createContact = void 0;
const contactModel_1 = __importDefault(require("../model/contactModel"));
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, phoneNumber, category } = req.body;
        let image = yield name.charAt().toUpperCase();
        const contacts = yield contactModel_1.default.create({ name, phoneNumber, category,
            image
        });
        return res.status(201).json({
            message: "Contact created",
            data: contacts
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error",
            data: error.message
        });
    }
});
exports.createContact = createContact;
const viewContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contacts = yield contactModel_1.default.find().sort({ createdAt: -1 });
        return res.status(200).json({
            message: "Contact viewed",
            data: contacts
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error",
            data: error.message
        });
    }
});
exports.viewContact = viewContact;
const searchCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.body;
        const contacts = yield contactModel_1.default.find({ category }).sort({ createdAt: -1 });
        return res.status(201).json({
            message: "Contact searched",
            data: contacts
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error",
            data: error.message
        });
    }
});
exports.searchCategory = searchCategory;
const updateContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactID } = req.params;
        const { phoneNumber, name } = req.body;
        const image = name.charAt().toUppercase();
        const contacts = yield contactModel_1.default.findByIdAndUpdate(contactID, { phoneNumber, name, image }, { new: true });
        return res.status(201).json({
            message: "Contact updated",
            data: contacts
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error",
            data: error.message
        });
    }
});
exports.updateContact = updateContact;
const deleteContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactID } = req.params;
        const contacts = yield contactModel_1.default.findByIdAndDelete(contactID);
        return res.status(201).json({
            message: `${contacts === null || contacts === void 0 ? void 0 : contacts.name} deleted`,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error",
            data: error.message
        });
    }
});
exports.deleteContact = deleteContact;
