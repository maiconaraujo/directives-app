import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login: "bob", role:"admin", lastlogin: new Date('2/1/2021')},
    {login: "lia", role:"user", lastlogin: new Date('4/1/2021')},
    {login: "john", role:"admin", lastlogin: new Date('6/1/2021')},
    {login: "robin", role:"user", lastlogin: new Date('8/1/2021')}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
