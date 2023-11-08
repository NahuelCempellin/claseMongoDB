"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb+srv://institutoantonucci:bzItQr0o1m21ntZT@cluster0.8avx0xh.mongodb.net/?retryWrites=true&w=majority');
const connetion = mongoose_1.default.connection;
connetion.once('open', () => {
    console.log('Mongodb connection stablished');
});
connetion.on('error', err => {
    console.log(err);
    process.exit(0);
});
