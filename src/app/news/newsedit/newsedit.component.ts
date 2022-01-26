import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../news-service/news.service';
import { News} from '../new-model/news'

@Component({
  selector: 'app-newsedit',
  templateUrl: './newsedit.component.html',
  styleUrls: ['./newsedit.component.scss']
})
export class NewseditComponent implements OnInit {

  @Input() newsData: any = { name: '', desc: ''};

  constructor(public rest: NewsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getSinglenews(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.newsData = data;
    });
  }

  updateNews(): void {
    this.rest.updateNews(this.route.snapshot.params['id'], this.newsData).subscribe((result) => {
      this.router.navigate(['/news']);
    }, (err: any) => {
      console.log(err);
    });
  }
}
