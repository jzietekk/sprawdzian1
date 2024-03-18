import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  template: `
    <div class="details">
      <h2>Szczegóły newsa</h2>
      <div *ngIf="selectedNews">
        <h3>{{ selectedNews.author }} - {{ selectedNews.headline }}</h3>
        <p>{{ selectedNews.body }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() selectedNews: any;
}
