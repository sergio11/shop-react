import request from 'superagent';

class CatalogService{

  static base_path = 'http://localhost:3000';

  constructor(){}

  loadMeals(){
    return new Promise((resolve, reject) => {
      request
        .get('http://localhost:3000/meals')
        .end(function(err, res){
          return err ? reject(err) : resolve(res.body)
        });
    });
 
  }

}

export default new CatalogService();
