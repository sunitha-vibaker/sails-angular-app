import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Article } from '../article';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
articles: Article[];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProducts()
    .subscribe(res => {
      this.articles = res;
      console.log(this.articles);
      //this.isLoadingResults = false;
    }, err => {
      console.log(err);
     // this.isLoadingResults = false;
    });
  }

}
