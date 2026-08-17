export type ProjectCategory =
  | "Produit SaaS"
  | "Plateformes & Produits"
  | "Sites web"
  | "Apps mobiles";

export type Project = {
  slug: string;
  title: string;
  employer: string;
  category: ProjectCategory;
  role: string;
  duration: string;
  description: string;
  longDescription: string[];
  tags: string[];
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "mathis-bs",
    title: "Mathis BS",
    employer: "Neoshore",
    category: "Produit SaaS",
    role: "UX/UI Designer & Product Designer",
    duration: "Depuis mars 2026",
    description: "Plateforme SaaS de gestion fiscale immobilière pour bailleurs sociaux.",
    longDescription: [
      "Mathis BS est une solution SaaS dédiée aux bailleurs sociaux pour simplifier et automatiser la gestion de leur fiscalité immobilière. La plateforme centralise les données patrimoniales, cadastrales et fiscales afin de faciliter le suivi des taxes foncières, l'analyse des charges fiscales, la simulation des impacts futurs et les traitements comptables et déclaratifs.",
      "L'objectif : fiabiliser les données, automatiser les processus métier et offrir aux équipes une vision consolidée de leur patrimoine et de leurs obligations fiscales — un sujet complexe rendu lisible par un dashboard clair et une hiérarchie visuelle pensée pour des utilisateurs métier, pas seulement techniques.",
    ],
    tags: ["SaaS B2B", "Fiscalité immobilière", "Product Design", "Design System", "Data Visualization"],
    image: "/images/mathis-bs-dashboard.jpg",
    featured: true,
  },
  {
    slug: "attunea",
    image: "/images/projects/attunea.jpg",
    title: "Attunea",
    employer: "Satoripop",
    category: "Plateformes & Produits",
    role: "UX/UI Designer",
    duration: "8 mois",
    description: "Unifier technologie, design et besoins utilisateurs dans une expérience fluide, pour l'app web (CRM) et le site.",
    longDescription: [
      "Attunea réunit technologie, design et besoins utilisateurs au sein d'une expérience digitale cohérente. J'ai travaillé à la fois sur l'application web (CRM) et sur le site, en structurant l'information et en unifiant les parcours entre les deux surfaces.",
      "La phase de recherche a mis en évidence plusieurs axes clés : parité fonctionnelle entre les surfaces, modèle de données unifié et composants réutilisables — des insights qui ont guidé la construction d'un design system partagé. Le résultat couvre la gestion des routines, des projets et des réunions dans une interface claire et modulaire.",
    ],
    tags: ["UI/UX", "Dashboard", "Design System", "Web Design", "Benchmarking"],
  },
  {
    slug: "five-guys",
    image: "/images/projects/five-guys.jpg",
    title: "Five Guys",
    employer: "Satoripop",
    category: "Plateformes & Produits",
    role: "UX/UI Designer",
    duration: "4 mois",
    description: "Optimiser le workflow et la gestion des formulaires pour fluidifier les processus organisationnels.",
    longDescription: [
      "Ce projet visait à optimiser le workflow et la gestion des formulaires internes, en simplifiant des processus organisationnels jusque-là fragmentés.",
      "Le travail de recherche (cartographie des flux, interviews utilisateurs, benchmark) a nourri un audit complet de la plateforme existante avant refonte. La solution finale introduit un constructeur de workflows visuel et un panneau de suivi détaillé des demandes, pensés pour réduire la charge cognitive des équipes opérationnelles.",
    ],
    tags: ["Dashboard", "Design System", "Audit"],
  },
  {
    slug: "travel-shaper",
    image: "/images/projects/travel-shaper.jpg",
    title: "Travel Shaper",
    employer: "Satoripop",
    category: "Plateformes & Produits",
    role: "UX/UI Designer",
    duration: "10 mois",
    description: "Plateforme de voyage propulsée par l'IA centralisant réservation, découverte et planification.",
    longDescription: [
      "Travel Shaper est une plateforme propulsée par l'IA qui centralise la réservation, la découverte et la planification de voyages en un seul endroit.",
      "La phase d'idéation s'est appuyée sur une User Story Map détaillant le MVP et les parcours prioritaires. Le résultat est une expérience mobile-first et conversationnelle : un assistant de chat guide l'utilisateur du choix de destination jusqu'à la réservation, avec une attention particulière portée au voyage éco-responsable.",
    ],
    tags: ["Dashboard", "Design System", "Audit"],
  },
  {
    slug: "carrefour-tn",
    image: "/images/projects/carrefour-tn.jpg",
    title: "Carrefour.tn",
    employer: "Satoripop",
    category: "Plateformes & Produits",
    role: "UX/UI Designer",
    duration: "3 mois",
    description: "Refonte du site Carrefour Tunisie pour une expérience d'achat digitale moderne et fluide.",
    longDescription: [
      "Carrefour Tunisie avait besoin d'un site reflétant son innovation, sa qualité et sa praticité. La refonte s'est concentrée sur la navigation, le design visuel et l'utilisabilité pour renforcer la présence en ligne de l'enseigne.",
      "L'approche a été pensée mobile-first, avec une nouvelle page d'accueil et un système de localisation des magasins repensé pour guider les clients du parcours en ligne jusqu'au point de vente.",
    ],
    tags: ["UI/UX", "Dashboard", "Audit"],
  },
  {
    slug: "planet-tax-solution",
    image: "/images/projects/planet-tax-solution.jpg",
    title: "Planet Tax Solution",
    employer: "Satoripop",
    category: "Plateformes & Produits",
    role: "UX/UI Designer",
    duration: "5 mois",
    description: "Expérience fluide et intuitive pour les marchands, du back-office au front-office fiscal.",
    longDescription: [
      "En tant que designer UX/UI sur Planet Tax Solution, j'ai conçu une expérience fluide et intuitive pour les marchands, couvrant à la fois le back-office et le front-office fiscal.",
      "Le travail est parti de wireframes en mode skeleton pour valider rapidement l'architecture de l'information, avant d'aboutir à un dashboard complet incluant statistiques de vente et une déclinaison mobile pour un usage en point de vente.",
    ],
    tags: ["Wireframes", "Backoffice", "Front office"],
  },
  {
    slug: "clever-harvest",
    image: "/images/projects/clever-harvest.jpg",
    title: "Clever Harvest",
    employer: "Satoripop",
    category: "Plateformes & Produits",
    role: "UX/UI Designer",
    duration: "5 mois",
    description: "Plateforme de traçabilité intuitive pour des produits agricoles comme l'olive, le café et le cacao.",
    longDescription: [
      "Sur Clever Harvest, j'ai contribué à façonner une plateforme de traçabilité intuitive pour des filières agricoles comme l'olive, le café ou le cacao.",
      "Le design system responsive mis en place permet de suivre chaque produit via des écrans de traçabilité par QR code, dans une identité visuelle inspirée du monde agricole.",
    ],
    tags: ["Design System", "Dashboard", "Responsive"],
  },
  {
    slug: "demco",
    image: "/images/projects/demco.jpg",
    title: "Demco",
    employer: "WeAre Moon",
    category: "Plateformes & Produits",
    role: "UX/UI Designer",
    duration: "7 mois",
    description: "Plateforme B2B pour la fabrication durable, simplifiant lancement de collections et collaborations.",
    longDescription: [
      "Demco est une plateforme B2B pensée pour des clients de la fabrication durable, simplifiant le lancement de nouvelles collections, les demandes de collaboration et la planification de réunions.",
      "Le projet a démarré par une phase de wireframing et de recherche pour cartographier les besoins des équipes commerciales et de production, avant d'aboutir à des grilles produits et des formulaires de commande directe pensés pour un usage B2B exigeant.",
    ],
    tags: ["Wireframes", "B2B Platform", "Research"],
  },
  {
    slug: "rizouya",
    image: "/images/projects/rizouya.jpg",
    title: "Rizouya",
    employer: "WeAre Moon",
    category: "Plateformes & Produits",
    role: "UX/UI Designer",
    duration: "4 mois",
    description: "Plateforme tunisienne connectant chercheurs d'emploi et employeurs.",
    longDescription: [
      "Rizouya connecte chercheurs d'emploi et employeurs sur le marché tunisien.",
      "Après une phase de wireframing et de benchmark concurrentiel, l'interface finale met l'accent sur la mise en relation : recherche d'offres, mise en avant des profils et suivi des candidatures dans une identité visuelle sobre et professionnelle.",
    ],
    tags: ["Wireframes", "Benchmark"],
  },
  {
    slug: "avs-vip-services",
    image: "/images/projects/avs-vip-services.jpg",
    title: "AVS VIP Services",
    employer: "WeAre Moon",
    category: "Plateformes & Produits",
    role: "UX/UI Designer",
    duration: "6 mois",
    description: "Gestion des contrats membres et suivi des commandes pour un club VIP.",
    longDescription: [
      "Pour l'équipe AVS, la plateforme offre des capacités robustes pour gérer efficacement les contrats des membres et suivre le flux des commandes.",
      "La recherche et le benchmark menés en amont ont permis de concevoir un back-office couvrant la gestion des contrats, la planification et le suivi des places de parking, dans une identité visuelle sombre et premium assortie d'accents dorés.",
    ],
    tags: ["Wireframes", "Research"],
  },
  {
    slug: "clinique-veterinaire-hammamet",
    image: "/images/projects/clinique-veterinaire-hammamet.jpg",
    title: "Clinique Vétérinaire Hammamet",
    employer: "Freelance",
    category: "Plateformes & Produits",
    role: "UX/UI Designer",
    duration: "3 mois",
    description: "Site et app pour aider les propriétaires d'animaux à trouver soins, toilettage et adoption.",
    longDescription: [
      "Ce site et cette application aident les propriétaires d'animaux à trouver facilement tout ce dont leurs compagnons ont besoin : soins vétérinaires, toilettage, produits et adoption.",
      "Le travail de branding et de benchmark a nourri une identité chaleureuse et rassurante, portée par la photographie animalière, pour humaniser une prise de rendez-vous vétérinaire souvent perçue comme austère.",
    ],
    tags: ["Branding", "Benchmark"],
  },
  {
    slug: "bridge-global-funding",
    image: "/images/projects/bridge-global-funding.jpg",
    title: "Bridge Global Funding",
    employer: "Satoripop",
    category: "Plateformes & Produits",
    role: "UX/UI Designer",
    duration: "6 mois",
    description: "Plateforme data-driven connectant des femmes entrepreneures à des investisseurs.",
    longDescription: [
      "The Bridge Funding Global est une plateforme data-driven qui donne aux femmes entrepreneures les moyens d'optimiser leur levée de fonds et de se connecter à des investisseurs proactifs.",
      "Le design system et le back-office construits pendant ce projet couvrent la prise de rendez-vous et la planification d'événements, dans une identité visuelle marine et or pensée pour inspirer confiance auprès d'un public d'investisseurs.",
    ],
    tags: ["Design System", "Research", "Back office"],
  },
  {
    slug: "convergence",
    image: "/images/projects/convergence.jpg",
    title: "Convergence",
    employer: "Satoripop",
    category: "Sites web",
    role: "UX/UI Designer",
    duration: "6 mois",
    description: "Transformation digitale pour l'assurance, la banque et la finance, avec chatbot intégré.",
    longDescription: [
      "Convergence accompagne la transformation digitale des acteurs de l'assurance, de la banque et de la finance en délivrant des solutions innovantes, chatbot inclus.",
      "La page \"Solutions & Interfaces\" met en avant une promesse claire — construire des liens forts avec ses clients — appuyée par un dashboard de suivi et des graphiques de performance, dans une identité violette engageante.",
    ],
    tags: ["Chatbot", "Design System", "Mobile App"],
  },
  {
    slug: "fuze-digital-africa",
    image: "/images/projects/fuze-digital-africa.jpg",
    title: "Fuzé Digital Africa",
    employer: "Satoripop",
    category: "Sites web",
    role: "UX/UI Designer",
    duration: "1 mois",
    description: "Démocratiser l'accès au financement en Afrique francophone.",
    longDescription: [
      "Fuzé vise à démocratiser l'accès au financement en Afrique francophone, un territoire où l'accès aux liquidités reste un frein majeur pour de nombreux entrepreneurs.",
      "En un mois, la landing page conçue mise sur une identité colorée et des illustrations engageantes pour rendre accessible un sujet financier souvent perçu comme complexe.",
    ],
    tags: ["Landing page", "Visual design"],
  },
  {
    slug: "ess-identity",
    image: "/images/projects/ess-identity.jpg",
    title: "ESS Identity",
    employer: "Satoripop",
    category: "Sites web",
    role: "UX/UI Designer",
    duration: "1 mois",
    description: "Plateforme de billetterie en ligne pour les matchs de football du club ESS.",
    longDescription: [
      "ESS Identity est une plateforme dédiée à la billetterie en ligne pour les matchs de football du club ESS.",
      "L'identité rouge et marine du club structure l'ensemble du site, de la mise en avant des résultats sportifs jusqu'à la boutique de maillots, pour une expérience fluide de l'achat de billet au jour de match.",
    ],
    tags: ["Landing page", "Visual design"],
  },
  {
    slug: "masaya",
    image: "/images/projects/masaya.jpg",
    title: "Masaya",
    employer: "Satoripop",
    category: "Apps mobiles",
    role: "UX/UI Designer",
    duration: "4 mois",
    description: "Destination tout-en-un pour séjours, activités et événements hôteliers.",
    longDescription: [
      "Masaya est une destination tout-en-un pour réserver séjours, activités et événements hôteliers.",
      "Pensée mobile-first, l'application s'appuie sur un design system dédié pour guider l'utilisateur de la découverte d'une destination jusqu'à la réservation, dans une identité chaleureuse à dominante orange.",
    ],
    tags: ["Design System", "Mobile First"],
  },
  {
    slug: "comptat-credit-debit",
    image: "/images/projects/comptat-credit-debit.jpg",
    title: "Comptat Crédit Débit",
    employer: "Diginov / Design code",
    category: "Apps mobiles",
    role: "UX/UI Designer",
    duration: "1 mois",
    description: "Consulter revenus et dépenses en toute simplicité, depuis son mobile.",
    longDescription: [
      "Cette application mobile permet aux utilisateurs de consulter leurs transactions de revenus et de dépenses en toute simplicité.",
      "Le design system mis en place privilégie la lisibilité des données financières au quotidien, avec un système de notifications pensé pour garder l'utilisateur informé sans le submerger.",
    ],
    tags: ["Design System", "Visual design"],
  },
  {
    slug: "sheikh-zayed-grand-mosque",
    image: "/images/projects/sheikh-zayed-grand-mosque.jpg",
    title: "Sheikh Zayed Grand Mosque",
    employer: "Freelance",
    category: "Apps mobiles",
    role: "UX/UI Designer",
    duration: "3 mois",
    description: "App visiteurs pour découvrir histoire, architecture et horaires de prière.",
    longDescription: [
      "Cette application mobile vise à enrichir l'expérience des visiteurs de la Grande Mosquée Cheikh Zayed : histoire, architecture, horaires de prière, événements et réservations.",
      "L'identité visuelle épurée et élégante s'efface au profit du contenu — galerie photo et informations architecturales — pour respecter la dimension patrimoniale et spirituelle du lieu.",
    ],
    tags: ["Design System", "Visual design"],
  },
  {
    slug: "kindeal",
    image: "/images/projects/kindeal.jpg",
    title: "Kindeal",
    employer: "WeAre Moon",
    category: "Apps mobiles",
    role: "UX/UI Designer",
    duration: "3 mois",
    description: "App de contrôle parental alliant neurosciences et éducation positive.",
    longDescription: [
      "KinDeal est une application de contrôle parental conçue par des parents, pour des parents, alliant principes de neurosciences et d'éducation positive.",
      "L'interface, ludique et bienveillante, transforme la gestion du temps d'écran en défis positifs pour toute la famille plutôt qu'en simples restrictions.",
    ],
    tags: ["Design System", "Visual design"],
  },
  {
    slug: "split",
    image: "/images/projects/split.jpg",
    title: "Split",
    employer: "WeAre Moon",
    category: "Apps mobiles",
    role: "UX/UI Designer",
    duration: "3 mois",
    description: "Première application de covoiturage nouvelle génération en Tunisie.",
    longDescription: [
      "Split est une application de covoiturage nouvelle génération, pensée pour le marché tunisien.",
      "L'expérience s'articule autour d'une carte de mise en relation en temps réel et d'un suivi de trajet clair, dans une identité marine et blanche qui inspire confiance et sécurité.",
    ],
    tags: ["Design System", "Visual design"],
  },
  {
    slug: "comptat-rh",
    image: "/images/projects/comptat-rh.jpg",
    title: "Comptat RH",
    employer: "Diginov / Design code",
    category: "Apps mobiles",
    role: "UX/UI Designer",
    duration: "3 mois",
    description: "Gestion des congés, du temps de travail et des documents RH pour les entreprises.",
    longDescription: [
      "Cette application mobile est dédiée aux entreprises pour la gestion de leurs employés : suivi des congés, pointage du temps de travail et documents RH.",
      "L'objectif était de simplifier des démarches RH souvent perçues comme fastidieuses, avec des parcours courts pour poser un congé, badger ou consulter une attestation depuis son mobile.",
    ],
    tags: ["Design System", "Visual design"],
  },
  {
    slug: "cash-money-soccer-tour",
    image: "/images/projects/cash-money-soccer-tour.jpg",
    title: "Cash Money Soccer Tour",
    employer: "Satoripop",
    category: "Sites web",
    role: "UX/UI Designer",
    duration: "1 mois",
    description: "Landing page événementielle pour le plus grand tournoi de foot amateur, avec cagnotte à gagner.",
    longDescription: [
      "Cash Money Soccer Tour est la landing page du plus grand tournoi de football amateur, mettant en avant une cagnotte à gagner et un parcours d'inscription simple pour les équipes participantes.",
      "L'identité visuelle sombre à dominante noir et or, portée par une photographie sportive dynamique, installe une tension compétitive dès l'arrivée sur le site — jusqu'au back-office de suivi des équipes, matchs et résultats.",
    ],
    tags: ["Landing page", "Visual design", "Dashboard"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const categories: ProjectCategory[] = [
  "Plateformes & Produits",
  "Sites web",
  "Apps mobiles",
];
