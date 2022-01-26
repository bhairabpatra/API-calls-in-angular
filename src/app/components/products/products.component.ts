import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import { Product } from '../../modle/product/product.module';
import { Observable, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  posts:Product[]=[];
  title="Products table";
  showImage = true;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
      this.getPost()
  }

  getPost(){
      this.apiService.getPosts().pipe(takeUntil(this.destroy$)).subscribe((data:Product[]) => {
          this.posts = data;

      })
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
