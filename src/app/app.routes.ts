import { Routes } from '@angular/router';
import { BlankComponent } from './components/blank/blank.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { HomeComponent } from './components/home/home.component';
import { DescribeComponent } from './components/describe/describe.component';
import { RandomTopicComponent } from './components/random-topic/random-topic.component';
import { RadioTheaterComponent } from './components/radio-theater/radio-theater.component';
import { DadjokesComponent } from './components/dadjokes/dadjokes.component';
import { TonguetwisterComponent } from './components/tonguetwister/tonguetwister.component';
import { WordchainComponent } from './components/wordchain/wordchain.component';
import { ColaborativeStoryComponent } from './components/colaborative-story/colaborative-story.component';
import { RouletteComponent } from './components/roulette/roulette.component';
import { AlphabetComponent } from './components/alphabet/alphabet.component';
import { WordsStatsEndComponent } from './components/words-stats-end/words-stats-end.component';
import { VocabularyComponent } from './components/vocabulary/vocabulary.component';
import { AbreviationsComponent } from './components/abreviations/abreviations.component';

export const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: HomeComponent,
  },
  {
    title: 'Presentation',
    path: 'presentation',
    component: PresentationComponent,
  },
  { title: 'Describe', path: 'describe', component: DescribeComponent },
  {
    title: 'Random Topics',
    path: 'random_topics',
    component: RandomTopicComponent,
  },
  {
    title: 'Radio Theater',
    path: 'radiotheater',
    component: RadioTheaterComponent,
  },
  { title: 'Dad Jokes', path: 'dadjokes', component: DadjokesComponent },
  {
    title: 'Tongue Twister',
    path: 'tonguetwister',
    component: TonguetwisterComponent,
  },
  { title: 'Word Chain', path: 'wordchain', component: WordchainComponent },
  {
    title: 'Collaborative Story',
    path: 'colaborative_story/index',
    component: ColaborativeStoryComponent,
  },
  { title: 'Roulette', path: 'roulette', component: RouletteComponent },
  { title: 'Alphabet Words', path: 'alphabet', component: AlphabetComponent },
  {
    title: 'Words that start with the previous ending',
    path: 'words_stats_end',
    component: WordsStatsEndComponent,
  },
  {
    title: 'Vocabulary',
    path: 'vocabulary/index',
    component: VocabularyComponent,
  },
  {
    title: 'Abbreviations',
    path: 'abreviations',
    component: AbreviationsComponent,
  },
];
