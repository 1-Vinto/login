export default async function fazerPostDeJSON(dados) {
  const url = "https://geminiapi-services-x2awrs6jqq-rj.a.run.app/api/v1/auth/login";
  
  const data = dados

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("A resposta do servidor não foi bem-sucedida. Código de status: " + response.status);
    }
  })
  .then(data => {
    console.log("Resposta do servidor:", data);
    return { autenticado: true };
  })
  .catch(error => {
    console.error("Erro ao fazer post de JSON:", error);
    return { autenticado: false };
  });
}
