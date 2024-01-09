import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tonguetwister',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tonguetwister.component.html',
  styleUrl: './tonguetwister.component.scss',
})
export class TonguetwisterComponent {
  tongueTwisters: string[] = [
    'She sells seashells by the seashore.',
    'How can a clam cram in a clean cream can?',
    'Unique New York, Unique New York.',
    'Red lorry, yellow lorry.',
    'Black bug bleeds black blood.',
    'Six slippery snails slid slowly seaward.',
    'Peter Piper picked a peck of pickled peppers.',
    'Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair.',
    'Irish wristwatch, Swiss wristwatch.',
    'A proper copper coffee pot.',
    'Sally sells sea shells by the sea shore.',
    'The great Greek grape growers grow great Greek grapes.',
    'Three thin thinkers thinking thick thoughtful thoughts.',
    'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
    'I saw Susie sitting in a shoeshine shop.',
    'A black bug bleeds black blood.',
    'Red lorry, green lorry.',
    'Sheena leads, Sheila needs.',
    'Six slippery snails, slid slowly seaward.',
    'I wish to wish the wish you wish to wish.',
    'Unique New York, blue bugs bleed blue blood.',
    'Red rubber baby buggy bumpers.',
    'Six sharp smart sharks.',
    'Crisp crusts crackle and crunch.',
    'Eddie edited it.',
    'Betty Botter bought some butter, but she said the butter’s bitter.',
    'I saw a saw that could out saw any other saw I ever saw.',
    'A box of mixed biscuits and a biscuit mixer.',
    'Tom threw Tim three thumbtacks.',
    'How many cans can a canner can if a canner can can cans?',
  ];

  currentTwisterIndex = 0;
  current = signal(this.getNext());

  next() {
    this.current.set(this.getNext());
  }

  getNext(): string {
    const index = this.currentTwisterIndex;
    this.currentTwisterIndex = (this.currentTwisterIndex + 1) % this.tongueTwisters.length;
    return this.tongueTwisters[index];
  }
}
