import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-faq-s',
  templateUrl: './faq-s.component.html',
  styleUrls: ['./faq-s.component.css']
})
export class FaqSComponent implements OnInit {

  faq ;
  constructor(private getmyfaq:GetDataService) { }
  
  ngOnInit() {
// get request on myfaq
    this.getmyfaq.getfaq().subscribe(result =>{
    
      this.faq = result;
      
    });
  }



}
