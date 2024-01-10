export interface Theater {
  characters: string[];
  scenes: Scene[];
}

export interface Scene {
  title: string;
  dialogues: Dialogue[];
}

export interface Dialogue {
  characterIndex: number;
  line: string;
}
