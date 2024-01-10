import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { VocabularyModel } from '../../models/vocabulary';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-vocabulary',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.scss',
})
export class VocabularyComponent {
  http = inject(HttpClient);

  selectedJson = signal<string | null>(null);

  private carJson$ = toObservable(this.selectedJson).pipe(
    filter((selected) => selected !== null),
    switchMap((selected) =>
      this.http.get<VocabularyModel>(`./assets/vocabulary/${selected}`)
    )
  );

  carJson = toSignal(this.carJson$, { initialValue: null });
}
