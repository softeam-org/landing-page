import { InscricaoPsel } from "@/types/InscricaoPsel";

const API_URL = "URL_DA_API";

export async function InscricaoPselService(
  data: InscricaoPsel
): Promise<void> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar inscrição");
  }
}
