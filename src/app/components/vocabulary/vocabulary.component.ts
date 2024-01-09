import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vocabulary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.scss',
})
export class VocabularyComponent {
  carJson: any;

  loadSelectedJson(selected: string) {
    fetch(`/assets/vocabulary/${selected}`)
      .then((response) => response.json())
      .then((carJson) => (this.carJson = carJson))
      .catch((error) => console.error(`Error loading ${selected}:`, error));
  }
}
