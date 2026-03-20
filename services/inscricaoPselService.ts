import { InscricaoPsel, SubmissionPayload } from "@/types/InscricaoPsel";

export async function InscricaoPselService(payload: SubmissionPayload) {
  const url = "http://localhost:5235/forms/a012ee38-29cf-4cf6-9193-3284aa44bec4/submissions";

  const response = await fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
      // Isso vai imprimir no seu console os erros que o backend devolveu
      console.error("Erro do servidor:", data);
      throw new Error(data.errors?.join(", ") || "Erro ao enviar");
  }

  return data;
}