import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { filter, switchMap } from 'rxjs';
import { Story } from '../../models/story';

@Component({
  selector: 'app-colaborative-story',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './colaborative-story.component.html',
  styleUrl: './colaborative-story.component.scss',
})
export class ColaborativeStoryComponent {
  http = inject(HttpClient);

  values: { [index: string]: string } = {};
  stories = [
    'mystical_metropolis.json',
    'fading_choes.json',
    'ephemeral_symphony.json',
  ];

  selected = signal<string | null>(null);
  showText = signal(false);
  private stories$ = toObservable(this.selected).pipe(
    filter((x) => x !== null),
    switchMap((selected) =>
      this.http.get<Story>(`./assets/colaborative-story/${selected}`)
    )
  );
  story = toSignal(this.stories$);
  text = computed<string | null>(() => {
    let text = this.story()?.story ?? '';
    this.story()?.inputs.forEach(
      (value: { id: string; default: any }, index: any) => {
        const regex = new RegExp(`\\{${value.id}\\}`, 'g');
        text =
          text.replace(regex, `${this.values[value.id] ?? value.default}`) ??
          '';
      }
    );
    return text;
  });

  onChangeValue(event: any, id: string): void {
    this.values[id] = event.target.value;
  }
}
