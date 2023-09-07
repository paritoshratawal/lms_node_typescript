import express from 'express';

export default class UserRouter {
    public router = express.Router();
    constructor(){
        console.log('User Router Loaded')
        this.initiate_routes();
    }

    private initiate_routes(){
        this.router.get('/user/test', (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try{
                res.status(200).send({msg:"success her"});
            }catch(e){
                res.send(500);
            }
        })
    }
}