import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import { Product } from '../../modle/product/product.module';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  posts:any=[];
  title="Products table";
  showImage = true;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
      this.getPost()
  }

  getPost(){
      this.apiService.getPosts().subscribe((res) => {
          this.posts = res;
          this.showImage = !this.showImage;
      })
  }
}
