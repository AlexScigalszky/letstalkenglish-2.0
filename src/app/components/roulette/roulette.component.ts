import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roulette',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './roulette.component.html',
  styleUrl: './roulette.component.scss',
})
export class RouletteComponent {
  inputNames = signal('');
  selectedPerson = signal<string | null>(null);

  selectRandomPerson() {
    let people = this.inputNames()
      .toUpperCase()
      .split(',')
      .map((name) => name.trim());

    if (people.length === 0 || (people.length === 1 && people[0] === '')) {
      alert('Please enter at least one name.');
      return;
    }

    const randomIndex = Math.floor(Math.random() * people.length);
    this.selectedPerson.set(people[randomIndex]);

    // Remove the selected person from the list
    people = people.filter((_, index) => index !== randomIndex);

    this.inputNames.set(people.join(', '));
  }
}
