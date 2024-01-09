import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-words-stats-end',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './words-stats-end.component.html',
  styleUrl: './words-stats-end.component.scss',
})
export class WordsStatsEndComponent {
  lastLetter = '';
  word = signal('');
  wordAdded = signal('');
  currentLabel = signal('WORD:');
  words: string[] = [];

  restrictNextWord() {
    const word = this.word().toUpperCase();

    if (
      word.length > 0 &&
      (word[0] === this.lastLetter || this.lastLetter === '')
    ) {
      this.wordAdded.set(word);

      this.lastLetter = word[word.length - 1];
      this.currentLabel.set(`WORD THAT STARTS WITH ${this.lastLetter}:`);

      this.words.push(word);
      this.word.set('');
    } else {
      alert('The word must start with the same letter as the previous one.');
    }
  }
}
