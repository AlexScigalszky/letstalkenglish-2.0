export interface Story {
  title: string;
  inputs: Input[];
  story: string;
}

export interface Input {
  label: string;
  id: string;
  default: string;
}
