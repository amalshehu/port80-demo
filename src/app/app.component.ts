import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: any;
  title = 'app';
  searchInput: string;
  searchUrl = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  constructor(public service: AppService) {}
  performSearch() {
    const apiLink = this.searchUrl + this.searchInput + '&limit=5';
    this.service.search(apiLink).subscribe(
      (data: any) => this.result = data
    )
  }

}
