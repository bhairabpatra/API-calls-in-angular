import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../news-service/news.service';
import { News} from '../new-model/news'

@Component({
  selector: 'app-newsadd',
  templateUrl: './newsadd.component.html',
  styleUrls: ['./newsadd.component.scss']
})
export class NewsaddComponent implements OnInit {

  constructor(public rest: NewsService, private route: ActivatedRoute, private router: Router) { }

  @Input() newsData = { name: '', desc: ''};

  ngOnInit(): void {
  }

  addNews(): void {
    this.rest.addNews(this.newsData).subscribe((result) => {
      this.router.navigate(['news']);
    }, (err: any) => {
      console.log(err);
    });
  }

}
