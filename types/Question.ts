export interface QuestionOption {
    id: string
    texto: string
  }
  
  export interface Question {
    id: string
    titulo: string
    tipo: number
    obrigatorio: boolean
    opcoes: QuestionOption[]
  }
  
  export interface QuestionResponse {
    items: Question[]
    errors: string[]
  }

  