import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../news-service/news.service';
import { News} from '../new-model/news'
@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.scss']
})
export class NewsdetailsComponent implements OnInit {

  news: any;
  constructor(public rest: NewsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getSinglenews(this.route.snapshot.params['id']).subscribe((data) =>{
       this.news = data
    })
  }

}
