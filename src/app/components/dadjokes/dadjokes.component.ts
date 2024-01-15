import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dadjokes',
  standalone: true,
  imports: [],
  templateUrl: './dadjokes.component.html',
  styleUrl: './dadjokes.component.scss',
})
export class DadjokesComponent {
  currentJokeIndex = 0;
  jokes = signal<any[]>([]);
  currentJoke = signal<string>('');
  constructor() {
    this.fetchJokes();
  }

  async fetchJokes() {
    try {
      const response = await fetch(
        'https://icanhazdadjoke.com/search?limit=500',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const data = await response.json();

      if (data.results) {
        this.jokes.set(data.results);
        this.setCurrent();
      }
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  }

  getCurrentJoke(): string {
    return this.jokes()[this.currentJokeIndex].joke;
  }

  fetchNextJoke() {
    this.currentJokeIndex = (this.currentJokeIndex + 1) % this.jokes().length;
    this.setCurrent();
  }

  setCurrent(): void {
    this.currentJoke.set(this.getCurrentJoke());
  }
}
