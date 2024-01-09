import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-radio-theater',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-theater.component.html',
  styleUrl: './radio-theater.component.scss',
})
export class RadioTheaterComponent {
  scriptFiles = [
    { name: '2', file: '2.json' },
    { name: '4', file: '4.json' },
    { name: '4 Simple', file: '4_simple.json' },
    { name: '5', file: '5.json' },
    { name: '6', file: '6.json' },
    { name: '7', file: '7.json' },
    { name: '8', file: '8.json' },
    { name: '10', file: '10.json' },
  ];
  characters = signal<any[]>([]);
  scenes = signal<any[]>([]);

  createScript(filename: string) {
    fetch(`./assets/radio-theater/${filename}`)
      .then((response) => response.json())
      .then((scriptData) => {
        this.characters.set(scriptData.characters);
        this.scenes.set(scriptData.scenes);
      })
      .catch((error) => {
        console.error('Error fetching JSON:', error.message);
        alert('Error fetching JSON. Please try again.');
      });
  }
}
