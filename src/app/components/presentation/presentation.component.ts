import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
})
export class PresentationComponent {
  groups = [
    ['Name', 'Favorite Color', 'Favorite Food', 'Hobby'],
    ['Name', 'Favorite Destination', 'Preferred Music Genre', 'Favorite Movie'],
    ['Name', 'Book or Author', 'Favorite Sport', 'Preferred Pet'],
    ['Name', 'Creative Hobby', 'Preferred Clothing Style', 'Inspiring Quote'],
    ['Name', 'Favorite Animal', 'Preferred Season', 'Morning or Night Person'],
    ['Name', 'Favorite Beverage', 'Dream Job', 'Hidden Talent'],
    [
      'Name',
      'Preferred Superpower',
      'Favorite Childhood Memory',
      'Most Admired Person',
    ],
    ['Name', 'Favorite Quote', 'Dream Car', 'Favorite Board Game'],
    [
      'Name',
      'Preferred Outdoor Activity',
      'Bucket List Item',
      'Favorite Time of Day',
    ],
    ['Name', 'Favorite App', 'Spirit Animal', 'Hidden Talent'],
    [
      'Name',
      'Preferred Dessert',
      'Favorite Holiday',
      'Morning or Night Person',
    ],
    [
      'Name',
      'Preferred Exercise',
      'Favorite Childhood TV Show',
      'Dream Vacation',
    ],
    [
      'Name',
      'Favorite Social Media Platform',
      'Preferred Breakfast',
      'Most Admired Fictional Character',
    ],
    [
      'Name',
      'Preferred Mode of Transportation',
      'Favorite Seasonal Activity',
      'Favorite Board Game',
    ],
    ['Name', 'Favorite Music Artist', 'Preferred Style of Art', 'Dream Pet'],
    ['Name', 'Will do next week', 'I did last week', "I couldn't do"],
  ];

  currentIndex = 0;
  current = signal(this.getCurrent());

  changeValues() {
    this.current.set(this.getCurrent());

    this.currentIndex = (this.currentIndex + 1) % this.groups.length;
  }

  private getCurrent() {
    return this.groups[this.currentIndex];
  }
}
