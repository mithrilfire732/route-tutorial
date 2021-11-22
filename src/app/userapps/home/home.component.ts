import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  abjs: any[] = [
    {id: 1, title: "ABC", count: 8},
    {id: 2, title: "FRH", count: 5},
    {id: 3, title: "NOLO", count: 12},
    {id: 4, title: "JHYR", count: 1},
    {id: 5, title: "aNP", count: 9}
  ]

  searchCriteria = "";

  aBool: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
