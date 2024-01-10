export interface VocabularyModel {
    imageSrc:    string;
    imageWidth:  number;
    imageHeight: number;
    parts:       Part[];
}

export interface Part {
    name:     string;
    position: Position;
}

export interface Position {
    top:  number;
    left: number;
}
