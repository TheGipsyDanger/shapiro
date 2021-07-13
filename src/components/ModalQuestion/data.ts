export interface IModalQuestion {
  data?: any;
}

export interface IModalQuestionLayout extends IModalQuestion {
  cancel(): void;
  remove(): void;
}
