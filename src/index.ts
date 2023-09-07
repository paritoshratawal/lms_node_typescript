
import express, { Request, Response } from 'express';

import UserRouter from './routers/user.routers';

export default class App {

  public app: express.Application;
  private routingArray: any[] = [new UserRouter()]

  constructor(){
    console.log('App class loaded');
    this.app = express();
    // this.app.use(express.json());
    // this.app.use(express.urlencoded());
  }

  public listen() {
    this.app.listen(2000, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${2000}`);
      this.initiate_controllers();
    });
  }

  private initiate_controllers() {
    this.routingArray.forEach((route) => {
      this.app.use('/', route.router)
    })
  }
  
}