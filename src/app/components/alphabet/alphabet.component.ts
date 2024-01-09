import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alphabet.component.html',
  styleUrl: './alphabet.component.scss',
})
export class AlphabetComponent {
  alphabet: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  result = signal<string | null>(null);
  values: { [index: string]: string } = {};

  onChangeValue(event: any, id: string): void {
    this.values[id] = event.target.value;
  }

  collectWords() {
    let rst = 'Words Collected:\n';

    this.alphabet.forEach((letter) => {
      const word = (this.values[letter] ?? '').toUpperCase();
      rst += `<p><span class="red">${letter}:</span> ${word}</p>\n`;
    });

    this.result.set(rst);
  }
}
