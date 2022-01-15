import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  name:string="";




  constructor() { }

  ngOnInit(): void {
    this.thisisafunction();
  }

  thisisafunction=()=>{
    this.name="hello";

      console.log(this.name);
  }  



    thisisanother(){

    }




}
