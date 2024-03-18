import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scrolldiv',
  template: `
    <div class="scrolldiv">
      <h2>list</h2>
      <ul>
        <li *ngFor="let news of newsList" (click)="selectNews.emit(news)">
          {{ news.author }} - {{ news.headline }}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./scrolldiv.component.css'],
})
export class ScrolldivComponent {
  @Input() newsList: any[];
  @Output() selectNews: EventEmitter<any> = new EventEmitter();
}
