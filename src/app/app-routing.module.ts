import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneComponent } from './components/phone/phone.component';
import { ProductsComponent } from './components/products/products.component';
import { NewsComponent } from './news/news/news.component';
import { NewsaddComponent } from './news/newsadd/newsadd.component';
import { NewsdeleteComponent } from './news/newsdelete/newsdelete.component';
import { NewsdetailsComponent } from './news/newsdetails/newsdetails.component';
import { NewseditComponent } from './news/newsedit/newsedit.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'mobile',
    component:PhoneComponent,
    data: { title: 'Mobile Details' }
  },
  {
    path: 'news',
    component:NewsComponent,
    data: { title: 'News' }
  },
  {
    path: 'news-add',
    component: NewsaddComponent,
    data: { title: 'News Add' }
  },
  {
    path: 'news-details/:id',
    component: NewsdetailsComponent,
    data: { title: 'News Details' }
  },
  {
    path: 'news-edit/:id',
    component: NewseditComponent,
    data: { title: 'News Details' }
  },

  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
