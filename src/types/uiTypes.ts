
export interface Questions {
  questions: QuestionOption[]
}

export interface QuestionOption {
  category: string;
  tag: string;
  type: string;
  title: string;
  answers: Answer[];
  hint: Hint;
  validation_rules: ValidationRules;
}

export interface Answer {
  value: number;
  label: string;
}

export interface Hint {
  title: string;
  content: string;
}
export interface ValidationRules {
  min: number;
  max?: number;
}
