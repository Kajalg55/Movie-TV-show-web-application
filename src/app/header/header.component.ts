import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Movie and TV shows';
  ratingTitle = 'My Rating';

  constructor(
  ) { }

  ngOnInit() {
    
  }


}
