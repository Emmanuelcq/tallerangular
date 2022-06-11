import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input()titulo_nav:any;

  constructor() { }

  ngOnInit(): void {
  }

}
