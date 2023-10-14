"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const contactModel = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true,
        trim: true,
        toLowerCase: true
    },
    category: {
        type: String,
        require: true
    },
    image: {
        type: String,
        toUpperCase: true
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("contacts", contactModel);
