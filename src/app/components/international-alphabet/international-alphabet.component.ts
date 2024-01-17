import { Component, signal } from '@angular/core';
import { BlankComponent } from '../blank/blank.component';
import { CommonModule } from '@angular/common';

export type InternationalAlphabetLetter = {
  char: string; word: string
}

@Component({
  selector: 'app-international-alphabet',
  standalone: true,
  imports: [CommonModule, BlankComponent],
  templateUrl: './international-alphabet.component.html',
  styleUrl: './international-alphabet.component.scss',
})
export class InternationalAlphabetComponent {
  show = signal(false);

  alphabet: InternationalAlphabetLetter[] = [
    { char: 'A', word: 'Alpha' },
    { char: 'B', word: 'Bravo' },
    { char: 'C', word: 'Charlie' },
    { char: 'D', word: 'Delta' },
    { char: 'E', word: 'Echo' },
    { char: 'F', word: 'Foxtrot' },
    { char: 'G', word: 'Golf' },
    { char: 'H', word: 'Hotel' },
    { char: 'I', word: 'India' },
    { char: 'J', word: 'Juliet' },
    { char: 'K', word: 'Kilo' },
    { char: 'L', word: 'Lima' },
    { char: 'M', word: 'Mike' },
    { char: 'N', word: 'November' },
    { char: 'O', word: 'Oscar' },
    { char: 'P', word: 'Papa' },
    { char: 'Q', word: 'Quebec' },
    { char: 'R', word: 'Romeo' },
    { char: 'S', word: 'Sierra' },
    { char: 'T', word: 'Tango' },
    { char: 'U', word: 'Uniform' },
    { char: 'V', word: 'Victor' },
    { char: 'W', word: 'Whiskey' },
    { char: 'X', word: 'X-ray' },
    { char: 'Y', word: 'Yankee' },
    { char: 'Z', word: 'Zulu' }
];
}
