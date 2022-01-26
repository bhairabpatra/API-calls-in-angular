import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneComponent } from './components/phone/phone.component';
import { NewsComponent } from './news/news/news.component';
import { NewsaddComponent } from './news/newsadd/newsadd.component';
import { NewsdeleteComponent } from './news/newsdelete/newsdelete.component';
import { NewsdetailsComponent } from './news/newsdetails/newsdetails.component'
import { FormsModule } from '@angular/forms';
import { NewsService } from './news/news-service/news.service';
import { NewseditComponent } from './news/newsedit/newsedit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PhoneComponent,
    NewsComponent,
    NewsaddComponent,
    NewsdeleteComponent,
    NewsdetailsComponent,
    NewseditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
