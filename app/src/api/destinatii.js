const API_URL = 'http://localhost:3002'
export async function getDestinatii(pagina) {
  const response = await fetch(
    `${API_URL}/destinatii?_page=${pagina}&_per_page=20`,
  )

  if (!response.ok) {
    throw new Error(`Serverul a răspuns cu ${response.status}`)
  }

  return response.json()
}
export async function postDestinatie(d) {
    const response = await fetch('http://localhost:3002/destinatii', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(d),
    })
    if(!response.ok) {
        throw new Error("Serverul a răspuns cu ${response.status}")
    }
    return response.json();
}

export async function patchVizitat(id, vizitat){
    const response = await fetch(`http://localhost:3002/destinatii/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({vizitat}),
    })
    if(!response.ok) {
        throw new Error("Serverul a răspuns cu ${response.status}")
    }
    return response.json();
}