import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  info:any;
  commentaires=[];
  commentaire={date:null,message:""};
  constructor(private aboutService:AboutService) { }

  ngOnInit() {
    this.info=this.aboutService.info;
    this.commentaires=this.aboutService.getCommentaires();
    console.log("coms");
    console.log(this.commentaires);
  }

  onAddCommentaire(c) {
    this.commentaire.message=c.message;
    this.commentaire.date=new Date();
    this.aboutService.ajouterCommentaire(this.commentaire);
    this.commentaire={date:null,message:""};
    console.log(this.commentaires);
  }
}
