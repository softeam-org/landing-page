import { QuestionResponse, Question } from "@/types/Question"

export async function gerarFormService() {
    const url = "http://localhost:5235/forms/a012ee38-29cf-4cf6-9193-3284aa44bec4/questions"
  
    console.log("Chamando API:", url)
  
    const response = await fetch(url)
  
    console.log("Response:", response)
  
    const data = await response.json()
  
    return data.items
  }