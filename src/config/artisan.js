/**
 * ============================================================================
 *  CONFIG ACTIVE — C'EST CE FICHIER QU'ON ÉDITE POUR PERSONNALISER
 * ============================================================================
 *  Tout le site (textes, coordonnées, couleurs, photos, avis) est piloté
 *  depuis ici. Pour créer le site d'un nouvel artisan :
 *
 *   1. Renseigne/décommente les champs ci-dessous.
 *   2. Tout ce que tu ne renseignes PAS reprend automatiquement la démo
 *      neutre (voir src/config/demo.js pour la liste complète des champs).
 *   3. Pour les listes (services, avis, chantiers, communes) et les couleurs,
 *      copie le bloc entier depuis demo.js puis modifie-le ici.
 *   4. Pour de vraies photos : dépose-les dans src/assets/, importe-les en
 *      haut de ce fichier, puis utilise la variable (voir exemple plus bas).
 *
 *  Astuce : le `artisan.js` du design 1 est compatible — tu peux le recopier
 *  ici tel quel, puis compléter les champs « (design 2) ».
 *
 *  Voir PERSONNALISATION.md à la racine pour la marche à suivre complète.
 * ============================================================================
 */

import { demo } from "./demo.js";

// --- Exemple pour de vraies photos (à décommenter) -------------------------
// import portraitArtisan from "../assets/artisan/portrait.webp";
// import chantier1 from "../assets/artisan/chantier1.webp";
// ---------------------------------------------------------------------------

export const config = {
  // On part de la démo, et on écrase seulement ce qui change.
  ...demo,

  // ========================= IDENTITÉ =========================
  // nomEntreprise: "Plomberie Martin",
  // nomGerant: "Jean Martin",
  // metierLignes: "Plombier · Chauffagiste",
  // monogramme: "PM", // (design 2) facultatif, calculé sinon

  // tel: "06 12 34 56 78",
  // telLien: "0612345678",
  // email: "contact@plomberie-martin.fr",

  // ville: "Créteil",
  // codePostal: "94000",
  // villeProche: "Paris",
  // rayonKm: 25,
  // zoneIntervention: "Créteil et l'est parisien",
  // adressePostale: "12 rue des Lilas, 94000 Créteil",
  // siren: "123 456 789",
  // communes: ["Maisons-Alfort", "Saint-Maur", "Bonneuil", "Alfortville"], // (design 2)

  // ========================= HORAIRES (design 2) =========================
  // horaires: {
  //   texte: "Lun – Sam · 7 h 30 – 19 h",
  //   plages: { 1: [7.5, 19], 2: [7.5, 19], 3: [7.5, 19], 4: [7.5, 19], 5: [7.5, 19], 6: [7.5, 19] },
  // },
  // urgence24h: false,

  // ========================= COULEUR =========================
  // couleurs: {
  //   brand: "#B8501F",
  //   brandLight: "#D2703F",
  //   brandGlow: "#EDB08E",
  //   brandDeep: "#8A3914",
  // },

  // ========================= PHOTOS / VIDÉOS =========================
  // hero: "https://…",          // ou une image importée (format vertical)
  // heroLegende: "Salle de bain rénovée à Créteil", // (design 2)
  // heroVideoDesktop: "/hero.mp4",
  // heroVideoMobile: "/hero.mp4",
  // portrait: portraitArtisan,  // exemple avec un import local
  // portraitPosition: "center 30%", // cadrage du portrait (recadré en 4/5)
  // chantiers: [
  //   { src: chantier1, alt: "Description du chantier" },
  //   …
  // ],

  // ========================= TEXTES =========================
  // hero_titre: "Votre plombier",
  // hero_titre_fin: "à Créteil.",
  // hero_sous_titre: "…",
  // citation: "…",      // (design 2) la phrase de l'artisan
  // presentation: "…",  // (design 2)

  // ========================= AVIS (les vrais avis Google de l'artisan) =====
  // lienAvisGoogle: "https://g.page/r/…", // (design 2)
  // avis: [
  //   { name: "Prénom N.", initial: "P", when: "il y a 2 mois",
  //     visited: "Type de chantier", text: "…" },
  // ],
};

export default config;
