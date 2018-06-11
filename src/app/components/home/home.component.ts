import { Component, OnInit } from '@angular/core';
import { dataService } from "../../service/data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  room = null;
  class = null;

  constructor(private getDataService: dataService,
              private router: Router) {
  }

  ngOnInit() {
  }

  gotoDetail() {
    this.getDataService.class = this.class;
    this.getDataService.room = this.room;
    this.router.navigate(['/detail']);
  }

}
