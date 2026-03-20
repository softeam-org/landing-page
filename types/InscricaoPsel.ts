export interface InscricaoPsel{
    nome: string;
    email: string;
    telefone: string;
    curso: string;
    motivacao:string;
}

export interface Answer {
    QuestionId: string;
    Value: string;
  }
  
  export interface SubmissionPayload {
    Answers: Answer[];
  }