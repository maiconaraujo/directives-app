import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: string = "123";
  name2: string = "567";

  client = {
    firstName: "John",
    lastName: "Prosper",
    address: "Av.Paulista",
    age: 0 
  };

  constructor() { }

  ngOnInit(): void {
  }

}
