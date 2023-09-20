import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default class HashingHandler {
  constructor() {}
  
  public generateHash = async(password: string) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  public password_compare = async(password: string, hash_password: string) => {
    return bcrypt.compareSync(password, hash_password);
  }

  public generate_token = async (json: any) => {
    console.log(json);
    const private_key = 'paritosh_node_server';
    return jwt.sign(json, private_key, { expiresIn: '120s' });
  }
}