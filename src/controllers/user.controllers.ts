import { Response, Request, NextFunction } from "express";
import UserModel from "../models/user.models";


export const CreateUser = async (req: Request, res: Response, next:NextFunction)=>{
    const {userName, password, mail}= req.body;

    try{
        const newUser = new UserModel({
            userName: userName,
            password: password,
            mail: mail
        })

        await newUser.save()

        res.status(201).send({message:'User created successfully', newUser})

    }catch(error){
        next(error)
    }
}


export const SignIn =async (req: Request, res: Response, next:NextFunction) => {
    const {userName, password} = req.body


    try{

      const user = await UserModel.findOne({userName})
      
      if(user){
        if(user.password === password){
            res.status(201).send({message:"Login success", user})
        }else{
            res.status(404).send({message:"Password error"})
        }
      }


    }catch(error){
        next(error)
    }
}