import User_Model from '../models/user.schema';
import MasterDAO from './master.dao';

export default class UserDao {
    private master_dao: any;
    constructor(){
        this.master_dao = new MasterDAO(User_Model, 'user_model');
    }

    public async save_user_details(dto: any) {
        console.log(dto);
        const createModel = new User_Model(dto);
        return await createModel.save();
    } 

    public async get_user_by_email(email: any) {
        return this.master_dao.findByCond('user_model', { "email" : email })
    }
}