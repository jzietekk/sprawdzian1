import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ScrolldivComponent } from './scrolldiv/scrolldiv.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="flex">
      <app-scrolldiv
        [newsList]="newsList"
        (selectNews)="selectNews($event)"
      ></app-scrolldiv>
      <app-details [selectedNews]="selectedNews"></app-details>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  newsList: any[] = [];
  selectedNews: any;
  title = 'sprawdzian1';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.http
      .get<any>('https://run.mocky.io/v3/93deb50f-6548-48e2-9da7-457b1a324a92')
      .subscribe((data) => {
        this.newsList = data.news; // Adjusted to match the structure of the response data
        if (this.newsList.length > 0) {
          this.selectedNews = this.newsList[0];
        }
      });
  }

  selectNews(news: any): void {
    this.selectedNews = news;
  }
}
