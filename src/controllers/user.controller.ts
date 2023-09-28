import express from 'express'
export default class UserController{
    constructor(){

    }

    public user_reg = async(req: express.Request, res: express.Response, next: express.NextFunction) => {
        try{
            console.log('user_reg');
        }catch(e){
            res.status(500).send({"Message": "internal server error"})
        }
    }
}