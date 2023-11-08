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
exports.SignIn = exports.CreateUser = void 0;
const user_models_1 = __importDefault(require("../models/user.models"));
const CreateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password, mail } = req.body;
    try {
        const newUser = new user_models_1.default({
            userName: userName,
            password: password,
            mail: mail
        });
        yield newUser.save();
        res.status(201).send({ message: 'User created successfully', newUser });
    }
    catch (error) {
        next(error);
    }
});
exports.CreateUser = CreateUser;
const SignIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = req.body;
    try {
        const user = yield user_models_1.default.findOne({ userName });
        if (user) {
            if (user.password === password) {
                res.status(201).send({ message: "Login success", user });
            }
            else {
                res.status(404).send({ message: "Password error" });
            }
        }
    }
    catch (error) {
        next(error);
    }
});
exports.SignIn = SignIn;
