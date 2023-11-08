"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 3000);
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get('/', (req, res, next) => {
    res.send(`Te api is in the port: 3000`);
});
app.use(user_routes_1.default);
exports.default = app;
