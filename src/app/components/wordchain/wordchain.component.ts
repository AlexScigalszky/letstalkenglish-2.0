import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { distinctUntilChanged, from, map } from 'rxjs';

@Component({
  selector: 'app-wordchain',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wordchain.component.html',
  styleUrl: './wordchain.component.scss',
})
export class WordchainComponent {
  sentence = signal('');
  finalSentence: string | null = null;
  word = signal('');

  addWord() {
    const newWords = this.word().trim().split(/\s+/);

    if (newWords.length !== 1 || newWords[0] === '') {
      alert('Please enter a single valid word.');
      return;
    }

    const newWord = newWords[0];

    if (newWord === '') {
      alert('Please enter a valid word.');
      return;
    }

    const currentSentence = this.sentence();
    if (currentSentence !== '') {
      this.sentence.set(currentSentence + ' ');
    }

    this.sentence.set(currentSentence + ' ' + newWord);
    this.word.set('');
  }

  showSentence(): void {
    this.finalSentence = this.sentence();
  }

  onKeyDown(event: any): boolean {
    if (event.key === 'Enter') {
      this.addWord();
      return false;
    }
    return true;
  }
}
