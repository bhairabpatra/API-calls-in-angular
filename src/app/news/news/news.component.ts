import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news-service/news.service';
import { Router } from '@angular/router';
import { News} from '../new-model/news'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: News[] = [];
  constructor(private newsService:NewsService , private router: Router) { }

  ngOnInit(): void {
    this.getNews()
  }

   getNews(): void{
      this.newsService.getNews().subscribe( (resp) =>{
              this.news = resp
      })
   }
   add() :void{
         this.router.navigate(['/news-add'])
   }

   delete(id: number): void {
    this.newsService.deleteProduct(id)
      .subscribe(() => {
          this.getNews();
        }, (err) => {
          console.log(err);
        }
      );
  }
}
