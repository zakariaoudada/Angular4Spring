import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
  commentaire={date:null,message:""};
  constructor() { }

  ngOnInit() {
  }

  onAddCommentaire() {
    this.commentaire.date=new Date();
    this.comentaires.push(this.commentaire);
    this.commentaire={date:null,message:""};
  }
}
