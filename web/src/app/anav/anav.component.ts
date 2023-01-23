import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anav',
  templateUrl: './anav.component.html',
  styleUrls: ['./anav.component.css']
})
export class AnavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navbarOpen=false;
  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }
  currentRate=0;
}
