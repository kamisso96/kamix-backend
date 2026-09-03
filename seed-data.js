const API_URL = 'http://localhost:1337';

/**
 * @param {string} collection
 * @param {Record<string, unknown>} data
 */
async function createEntry(collection, data) {
  const res = await fetch(`${API_URL}/api/${collection}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  });
  if (!res.ok) {
    console.error(`Erreur ${collection}: ${res.status}`);
    const err = await res.json();
    console.error(err);
    return null;
  }
  console.log(`✅ ${collection} créé`);
  return res.json();
}

async function seed() {
  // Services
  await createEntry('services', { title: 'Consulting Business Chine-Afrique', description: 'On vous aide à éviter les erreurs classiques quand on se lance avec la Chine. On connaît les bons interlocuteurs, les pièges administratifs, et on vous met directement en relation avec les partenaires qu’il vous faut. Pas de théorie, on vous accompagne sur le terrain.', icon: '', link: '/contact', sort: 1, publishedAt: null });
  await createEntry('services', { title: 'Sourcing & Approvisionnement', description: 'Trouver un fournisseur chinois fiable, c’est un vrai casse-tête. Nous visitons les usines, vérifions les certifications, négocions les prix et suivons la production jusqu’à l’expédition. Vous recevez des échantillons, des rapports qualité, et vous savez exactement ce que vous achetez.', icon: '', link: '/contact', sort: 2, publishedAt: null });
  await createEntry('services', { title: 'Commerce International & Logistique', description: 'On s’occupe de toute la chaîne logistique : réservation du fret, dédouanement, documents, et suivi en temps réel. Fini les mauvaises surprises à l’arrivée. On a l’habitude des ports africains et on sait comment éviter les blocages.', icon: '', link: '/contact', sort: 3, publishedAt: null });
  await createEntry('services', { title: 'Conseil en Éducation', description: 'Étudier en Chine, c’est bien plus que choisir une université. On vous aide à construire un dossier solide, à trouver le programme qui correspond à votre profil et à préparer votre arrivée. On vous suit jusqu’à ce que vous soyez installé.', icon: '', link: '/education', sort: 4, publishedAt: null });
  await createEntry('services', { title: 'Bourses & Admissions', description: 'On vous aide à décrocher une bourse complète ou partielle. On connaît les critères des universités chinoises et on vous guide pas à pas dans la préparation des documents. On a aidé des dizaines d’étudiants africains à obtenir leur place.', icon: '', link: '/education', sort: 5, publishedAt: null });

  // Why Us
  await createEntry('why-uses', { icon: '🌐', title: 'Présence locale en Chine', description: 'Nous vivons et travaillons à Haikou. On ne fait pas de sous-traitance : c’est nous qui visitons les usines, rencontrons les partenaires et signons les contrats. Cette proximité change tout.' });
  await createEntry('why-uses', { icon: '🤝', title: 'Réseau vérifié', description: 'Nos fournisseurs et institutions partenaires sont audités. On ne recommande que des gens avec qui on a déjà travaillé et qui ont fait leurs preuves.' });
  await createEntry('why-uses', { icon: '🧩', title: 'Approche personnalisée', description: 'Chaque projet est différent. On écoute d’abord, on analyse ensuite, et on construit une stratégie qui correspond à votre budget et vos objectifs, pas un plan préfabriqué.' });
  await createEntry('why-uses', { icon: '🔒', title: 'Transparence totale', description: 'Pas de frais cachés, pas de jargon. Vous savez ce que vous payez et pourquoi. On vous envoie des rapports réguliers, avec des photos et des preuves de l’avancement.' });
  await createEntry('why-uses', { icon: '📈', title: 'Résultats concrets', description: 'On mesure notre succès au vôtre : un fournisseur trouvé, une bourse obtenue, un conteneur livré sans retard. C’est ce qui compte pour nous.' });

  // Témoignages
  await createEntry('testimonials', { quote: 'Avant KAMIX, on perdait des mois à chercher des fournisseurs sérieux. Avec eux, en trois semaines on avait trois usines visitées, des échantillons testés et un contrat signé. Je ne pensais pas que ce serait aussi simple.', author: 'Jean-Marc K.', role: 'CEO, West Africa Imports — Abidjan' });
  await createEntry('testimonials', { quote: 'Sans KAMIX, je n’aurais jamais osé postuler pour une bourse complète en Chine. Ils ont relu mon dossier, m’ont préparée aux entretiens et m’ont aidée pour le visa. Aujourd’hui je suis à Pékin, et c’est en grande partie grâce à eux.', author: 'Fatima D.', role: 'Étudiante en Master, Tsinghua University — Beijing' });
  await createEntry('testimonials', { quote: 'La logistique entre la Chine et l’Afrique de l’Est, c’est un enfer si on ne connaît pas. KAMIX a pris le relais et tout est devenu fluide. On sait toujours où est notre marchandise, et elle arrive sans mauvaise surprise.', author: 'Mohammed A.', role: 'Directeur Logistique, East African Trading Co. — Nairobi' });

  // Education Services
  await createEntry('education-services', { icon: '', title: 'University Admission', description: 'On vous aide à choisir l’université qui correspond à votre niveau et votre budget, pas celle qui paye le plus de commission. On monte le dossier avec vous et on suit la candidature jusqu’à la réponse.' });
  await createEntry('education-services', { icon: '', title: 'Scholarship Application', description: 'On connaît les bourses disponibles, leurs critères exacts et comment se démarquer. On vous aide à écrire la lettre de motivation, à rassembler les papiers et à respecter les délais.' });
  await createEntry('education-services', { icon: '', title: 'Student Guidance', description: 'Vous hésitez entre Pékin et Shanghai ? Entre ingénierie et commerce ? On vous donne des conseils concrets basés sur l’expérience d’anciens étudiants.' });
  await createEntry('education-services', { icon: '', title: 'Visa Assistance', description: 'Le visa étudiant chinois peut être stressant. On vous prépare à l’entretien, on vérifie chaque document et on vous suit jusqu’à l’obtention du précieux sésame.' });
  await createEntry('education-services', { icon: '', title: 'Arrival Support', description: 'On ne vous abandonne pas à l’aéroport. On organise votre accueil, votre logement temporaire et les démarches administratives des premiers jours.' });

  // Education Programs
  await createEntry('education-programs', { badge: 'Bourse complète', emoji: '🎓', title: 'Bourse complète', description: 'Couverture à 100% des frais de scolarité, logement sur le campus et allocation mensuelle. Pour les meilleurs dossiers.' });
  await createEntry('education-programs', { badge: 'Bourse partielle', emoji: '📚', title: 'Bourse partielle', description: 'Réduction des frais de scolarité (souvent 50-80%) pour les étudiants avec un bon dossier académique.' });
  await createEntry('education-programs', { badge: 'Autofinancé', emoji: '💼', title: 'Programme autofinancé', description: 'Pour ceux qui peuvent payer, mais veulent être sûrs de choisir une bonne université et d’être accompagnés.' });

  // Business Solutions
  await createEntry('business-solutions', { icon: '', title: 'Supplier Identification', description: 'On vous déniche les fabricants qui correspondent vraiment à votre produit, pas les premiers résultats d’internet. On vérifie leur existence, leur capacité de production et leur réputation.' });
  await createEntry('business-solutions', { icon: '', title: 'Factory Audits & Visits', description: 'On se rend physiquement dans les usines, on prend des photos, on pose les questions qui fâchent. Vous recevez un rapport détaillé avant de signer quoi que ce soit.' });
  await createEntry('business-solutions', { icon: '', title: 'Quality Control', description: 'Avant l’expédition, on inspecte les produits, on fait des tests en laboratoire si nécessaire, et on s’assure que tout correspond à votre commande.' });
  await createEntry('business-solutions', { icon: '', title: 'Product Sourcing', description: 'Électronique, textile, pièces détachées... on cherche le produit au meilleur rapport qualité/prix, en tenant compte des délais et des quantités.' });
  await createEntry('business-solutions', { icon: '', title: 'Import/Export Support', description: 'On gère la paperasse, le dédouanement, les certificats d’origine, et on vous évite les blocages en douane.' });
  await createEntry('business-solutions', { icon: '', title: 'Logistics Coordination', description: 'On organise le fret aérien, maritime ou ferroviaire, et on suit votre cargaison jusqu’à destination. Vous avez un interlocuteur unique, pas dix intermédiaires.' });

  // About
  await createEntry('abouts', { mission: 'On veut simplifier les opportunités internationales. Concrètement : aider une entreprise africaine à trouver le bon fournisseur chinois, ou un étudiant à obtenir une bourse. Pas de blabla, des connexions réelles.', vision: 'Devenir le partenaire de confiance pour toute personne ou entreprise qui veut travailler entre la Chine et l’Afrique.' });

  console.log('🎉 Toutes les données ont été insérées !');
}

seed().catch(console.error);