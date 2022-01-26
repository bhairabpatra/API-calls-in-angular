import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import { Smartphone } from '../../modle/Smartphone';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  smartphone: Smartphone[] = [];
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getSmartphones()
  }

  public getSmartphones() : void{
     this.apiService.getSmartphone().subscribe((data) =>{
         this.smartphone = data
     })
  }
}
