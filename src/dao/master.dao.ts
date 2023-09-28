export default class ParentDAO {
  private model_obj: any = {};
  constructor(model: any, model_name: any) {
    console.log('parent DAO constructor');
    if (!this.model_obj[model_name]) {
      this.model_obj[model_name] = model
    }
  }

  public async findByCond(model_name: any, cond: any): Promise<any>{
    return await this.model_obj[model_name].find(cond).exec();
  } 
  
}