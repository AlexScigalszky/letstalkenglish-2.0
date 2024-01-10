import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { filter, switchMap } from 'rxjs';
import { Theater } from '../../models/theater';

@Component({
  selector: 'app-radio-theater',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './radio-theater.component.html',
  styleUrl: './radio-theater.component.scss',
})
export class RadioTheaterComponent {
  http = inject(HttpClient);

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
  selected = signal<string|null>(null);
  private scriptData$ = toObservable(this.selected).pipe(
    filter(x => x!== null),
    switchMap((filename)=> this.http.get<Theater>(`./assets/radio-theater/${filename}`))
  )
  scriptData = toSignal(this.scriptData$);
}
