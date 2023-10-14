"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const contactRouter_1 = __importDefault(require("./router/contactRouter"));
const mainApp = (app) => {
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/api", contactRouter_1.default);
    app.get("/", (req, res) => {
        try {
            return res.status(200).json({
                message: "Welcome"
            });
        }
        catch (error) {
            return res.status(404).json({
                message: "Error"
            });
        }
    });
};
exports.mainApp = mainApp;
