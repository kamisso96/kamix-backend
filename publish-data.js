const API_URL = 'http://localhost:1337';

/**
 * @param {string} collection
 */
async function publishCollection(collection) {
  const res = await fetch(`${API_URL}/api/${collection}?status=draft`);
  if (!res.ok) {
    console.error(`❌ Impossible de récupérer ${collection}: ${res.status}`);
    return;
  }
  const json = await res.json();
  const items = json.data || [];

  for (const item of items) {
    const id = item.id;
    const updateRes = await fetch(`${API_URL}/api/${collection}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          publishedAt: new Date().toISOString()
        }
      }),
    });
    if (updateRes.ok) {
      console.log(`✅ ${collection} id ${id} publié`);
    } else {
      const err = await updateRes.json();
      console.error(`❌ Erreur publication ${collection} id ${id}:`, err);
    }
  }
}

async function publishAll() {
  const collections = [
    'services',
    'why-uses',
    'testimonials',
    'education-services',
    'education-programs',
    'business-solutions',
    'abouts',
  ];

  for (const col of collections) {
    await publishCollection(col);
  }
  console.log('🎉 Publication terminée');
}

publishAll().catch(console.error);