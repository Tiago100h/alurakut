import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  if (request.method === 'POST') {
    const client = new SiteClient(process.env.DATO_FULL_ACCESS_API_TOKEN);
  
    const record = await client.items.create({
      itemType: "977061", // model ID
      ...request.body
    });
    
    response.json({
      dados: 'Algum dado qualquer',
      registroCriado: record
    })

    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!'
  })
}