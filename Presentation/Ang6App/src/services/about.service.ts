import {Injectable} from '@angular/core';

@Injectable()
export  class  AboutService {
  info:any = {
    nom :"oudada zakaria",
    email : "zakaria.oudada@gmail.com",
    tel : "0657785970"
  };
  comentaires=[
    {date:new Date(), message:"A"},
    {date:new Date(), message:"B"},
    {date:new Date(), message:"C"}
  ];
  ajouterCommentaire(c)
  {
    this.comentaires.push(c);
  }
  getCommentaires()
  {
    return this.comentaires;
  }
  getInfo()
  {
    return this.info;
  }
}
