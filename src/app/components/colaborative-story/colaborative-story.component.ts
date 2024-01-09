import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-colaborative-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colaborative-story.component.html',
  styleUrl: './colaborative-story.component.scss',
})
export class ColaborativeStoryComponent {
  storySelector = document.getElementById('storySelector');
  values: { [index: string]: string } = {};
  stories = [
    'mystical_metropolis.json',
    'fading_choes.json',
    'ephemeral_symphony.json',
  ];
  story: string | null = null;
  data: any = null;

  loadStory(selectedStory: string) {
    this.data = null;
    this.story = null;
    fetch(`./assets/colaborative-story/${selectedStory}`)
      .then((response) => response.json())
      .then((storyData) => {
        this.data = storyData;
      })
      .catch((error) => {
        this.data = null;
        console.error('Error fetching JSON:', error.message);
        alert('Error fetching JSON. Please try again.');
      });
  }

  onChangeValue(event: any, id: string): void {
    this.values[id] = event.target.value;
  }

  showStory() {
    this.story = this.data?.story + '';
    this.data.inputs.forEach(
      (value: { id: string; default: any }, index: any) => {
        const regex = new RegExp(`\\{${value.id}\\}`, 'g');
        this.story =
          this.story?.replace(
            regex,
            `
        ${this.values[value.id] ?? value.default}
        `
          ) ?? '';
      }
    );
  }
}
