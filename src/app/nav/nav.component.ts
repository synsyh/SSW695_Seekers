import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string;
  menus = new Array<{ url: string; name: string }>();
  constructor() { }

  ngOnInit(): void {
    this.title = 'The Seeker';
    this.menus.push({url: 'account', name: 'Account'});
  }

}
