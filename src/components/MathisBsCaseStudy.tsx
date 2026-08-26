"use client";

import { Building2, Calculator, Compass, Layers, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { FadeUp } from "./motion/Reveal";
import { useLanguage } from "@/lib/LanguageContext";

const content = {
  fr: {
    subtitle: "Automatisation et fiabilisation de la fiscalité immobilière des bailleurs sociaux",
    intro:
      "Comment j'ai porté, seule designer, la stratégie et la conception d'un produit SaaS qui simplifie une gestion fiscale complexe pour les bailleurs sociaux de taille moyenne.",
    meta: [
      { icon: Users, label: "Rôle", value: "UX/UI Designer & Product Designer (seule designer sur le produit)" },
      {
        icon: Layers,
        label: "Périmètre",
        value: "Stratégie produit, audit concurrentiel, architecture de l'information, spécification fonctionnelle, design Figma",
      },
      {
        icon: Building2,
        label: "Équipe",
        value: "Product Manager, Développeurs, Expert métier fiscalité en interne (cadrage utilisateur porté par le PO)",
      },
      { icon: Target, label: "Secteur / Cible", value: "SaaS B2B · Bailleurs sociaux de taille moyenne (1 000 à 15 000 logements)" },
      { icon: Compass, label: "Statut", value: "Phase de conception, avant développement (pre-production)" },
    ],
    sections: [
      {
        number: "01",
        title: "Le contexte et le défi produit",
        blocks: [
          {
            label: "La problématique métier",
            body: "Les bailleurs sociaux doivent suivre leurs taxes foncières, analyser leurs charges fiscales, simuler l'impact d'événements patrimoniaux futurs et gérer des traitements comptables et déclaratifs. Ces tâches restent aujourd'hui fragmentées entre plusieurs outils, dans un domaine dense sur le plan réglementaire.",
          },
          {
            label: "L'opportunité de marché",
            body: "Mathis BS se positionne spécifiquement sur les bailleurs sociaux de taille moyenne — un segment aujourd'hui mal desservi par l'acteur principal du marché. Ce n'est pas un outil généraliste de plus : c'est un choix de positionnement délibéré sur un segment sous-équipé, plutôt qu'une tentative de concurrencer frontalement le leader sur l'ensemble du marché.",
          },
          {
            label: "L'enjeu UX/UI",
            body: "Transformer une donnée fiscale austère et fragmentée en un outil que des équipes non-spécialistes du logiciel (gestionnaires patrimoniaux, comptables) peuvent utiliser avec confiance, sans sacrifier la précision réglementaire qu'exige le domaine.",
          },
        ],
      },
      {
        number: "02",
        title: "Mon rôle et mon positionnement",
        blocks: [
          {
            label: "L'autonomie sur le produit",
            body: "Être seule designer sur Mathis BS signifie porter l'ensemble de la chaîne : la stratégie produit, l'architecture de l'information, la spécification fonctionnelle et le design Figma, sans partager ce périmètre avec une équipe design.",
          },
          {
            label: "La chaîne de collaboration",
            body: "Le besoin utilisateur me parvient via le Product Owner, qui porte le cadrage initial. Mon rôle est de le traduire en logique produit : arbitrages d'architecture de l'information, spécifications fonctionnelles actionnables pour les développeurs, et décisions de vocabulaire produit.",
          },
          {
            label: "La posture avec l'expertise métier",
            body: "Je travaille en lien direct avec un expert métier fiscalité en interne pour m'approprier une donnée réglementaire complexe, plutôt que de concevoir des interfaces déconnectées des contraintes réelles du domaine — un point d'autant plus important que la fiscalité immobilière n'admet pas d'approximation.",
          },
        ],
      },
      {
        number: "03",
        title: "Stratégie produit & audit concurrentiel",
        blocks: [
          {
            label: "Ce qui a été fait",
            body: "J'ai mené un audit structuré du principal concurrent du marché : un audit fonctionnel documenté, une analyse interactive, et un backlog produit d'environ 95 fonctionnalités réparties sur 16 modules, avec une analyse des écarts (gap analysis) entre l'offre existante et les axes de différenciation possibles pour Mathis BS.",
          },
          {
            label: "Impact sur le produit",
            body: "Ce travail alimente directement les priorités du backlog et les axes de différenciation retenus pour le produit — notamment le choix de cibler le segment des bailleurs de taille moyenne plutôt que l'ensemble du marché.",
          },
        ],
      },
    ],
    engineFocus: {
      number: "04",
      title: "Focus conception #1 — L'architecture du moteur de simulation",
      constatLabel: "Le constat",
      constat: "Un outil de simulation générique unique ne suffisait pas à couvrir les deux usages fiscaux distincts identifiés dans le produit.",
      solutionLabel: "La solution retenue — deux moteurs distincts",
      engines: [
        { name: "Projection Fiscale", description: "Projection continue de la fiscalité du patrimoine existant, pour un suivi régulier." },
        { name: "Simulateur de Projet", description: "Aide à la décision pour un événement patrimonial ponctuel (destruction, vente d'un bien)." },
      ],
      whyLabel: "Pourquoi cette séparation",
      why: "Les logiques de calcul diffèrent fondamentalement entre les deux usages. Une projection continue du patrimoine existant n'obéit pas aux mêmes mécaniques qu'une simulation ponctuelle déclenchée par une décision. Un outil unique aurait mélangé deux modèles de calcul incompatibles dans une même interface.",
      differentiatorsLabel:
        "Axes de différenciation identifiés — deux fonctionnalités qui répondent à des besoins de décision que l'audit concurrentiel a mis en évidence",
      differentiators: ["Simulation d'événements Destruction / Vente", "Comparaison croisée entre plusieurs simulations"],
    },
    iaFocus: {
      number: "05",
      title: "Focus conception #2 — Architecture de l'information et vocabulaire",
      decisions: [
        {
          title: "Décision 1 — Simplification de la navigation",
          body: "Retrait de « Parcelles » comme entrée de menu autonome. Les références de parcelles sont désormais intégrées directement dans la fiche Local plutôt que dans une page séparée.",
        },
        {
          title: "Décision 2 — Alignement du vocabulaire produit (UX Writing)",
          body: "Renommage du module « Réclamations » en « Optimisations fiscales ». Ce choix aligne le vocabulaire du produit sur celui que les utilisateurs métier emploient eux-mêmes, plutôt que sur une terminologie interne ou générique — le travail ne s'arrête pas à l'interface, il s'étend au langage du produit.",
        },
      ],
    },
    outcome: {
      number: "06",
      title: "État actuel, limites et enseignements",
      blocks: [
        {
          label: "Où en est le produit",
          body: "Mathis BS est actuellement en phase de conception, avant son passage en développement. La spécification du module Simulation, l'audit concurrentiel priorisé, et les arbitrages d'architecture et de vocabulaire posent les fondations structurantes du produit.",
        },
        {
          label: "Limites assumées",
          body: "Le produit n'étant pas encore déployé, il n'y a pas de métrique d'impact mesurée à ce stade. La recherche utilisateur reste indirecte : le besoin me parvient via le Product Owner et l'expert métier fiscalité plutôt que par des entretiens que je mènerais moi-même.",
        },
        {
          label: "Ce que ce projet démontre",
          body: "La capacité à porter, seule, la conception d'un produit B2B dans un domaine réglementaire dense — depuis le positionnement stratégique et l'audit concurrentiel jusqu'aux arbitrages d'architecture de l'information et de vocabulaire produit.",
        },
      ],
    },
  },
  en: {
    subtitle: "Automating and hardening real-estate tax management for social housing providers",
    intro:
      "How I drove, as the sole designer, the strategy and design of a SaaS product that simplifies complex tax management for mid-sized social housing providers.",
    meta: [
      { icon: Users, label: "Role", value: "UX/UI Designer & Product Designer (sole designer on the product)" },
      {
        icon: Layers,
        label: "Scope",
        value: "Product strategy, competitive audit, information architecture, functional specification, Figma design",
      },
      {
        icon: Building2,
        label: "Team",
        value: "Product Manager, Developers, in-house tax domain expert (user scoping led by the PO)",
      },
      { icon: Target, label: "Sector / Target", value: "B2B SaaS · Mid-sized social housing providers (1,000 to 15,000 units)" },
      { icon: Compass, label: "Status", value: "Design phase, ahead of development (pre-production)" },
    ],
    sections: [
      {
        number: "01",
        title: "Context and product challenge",
        blocks: [
          {
            label: "The business problem",
            body: "Social housing providers need to track property taxes, analyze tax charges, simulate the impact of future asset events, and manage accounting and filing workflows. Today these tasks remain fragmented across multiple tools, in a domain that is dense on the regulatory side.",
          },
          {
            label: "The market opportunity",
            body: "Mathis BS positions itself specifically for mid-sized social housing providers — a segment currently underserved by the market's leading player. It isn't one more generalist tool: it's a deliberate positioning choice on an under-equipped segment, rather than an attempt to compete head-on with the market leader across the board.",
          },
          {
            label: "The UX/UI stake",
            body: "Turning austere, fragmented tax data into a tool that non-specialist teams (asset managers, accountants) can use with confidence, without sacrificing the regulatory precision the domain demands.",
          },
        ],
      },
      {
        number: "02",
        title: "My role and positioning",
        blocks: [
          {
            label: "Ownership of the product",
            body: "Being the sole designer on Mathis BS means owning the full chain: product strategy, information architecture, functional specification and Figma design, without sharing that scope with a design team.",
          },
          {
            label: "The collaboration chain",
            body: "User needs reach me through the Product Owner, who leads the initial scoping. My role is to translate that into product logic: information architecture trade-offs, functional specifications actionable for developers, and product vocabulary decisions.",
          },
          {
            label: "Working with domain expertise",
            body: "I work directly with an in-house tax domain expert to internalize complex regulatory data, rather than designing interfaces disconnected from the domain's real constraints — a point that matters even more given that real-estate taxation leaves no room for approximation.",
          },
        ],
      },
      {
        number: "03",
        title: "Product strategy & competitive audit",
        blocks: [
          {
            label: "What was done",
            body: "I led a structured audit of the market's leading competitor: a documented functional audit, an interactive analysis, and a product backlog of roughly 95 features spread across 16 modules, with a gap analysis between the existing offer and the possible differentiation angles for Mathis BS.",
          },
          {
            label: "Impact on the product",
            body: "This work directly feeds the backlog priorities and the differentiation angles chosen for the product — in particular the decision to target mid-sized providers rather than the market as a whole.",
          },
        ],
      },
    ],
    engineFocus: {
      number: "04",
      title: "Design focus #1 — The simulation engine architecture",
      constatLabel: "The finding",
      constat: "A single, generic simulation tool wasn't enough to cover the two distinct tax use cases identified in the product.",
      solutionLabel: "The solution — two distinct engines",
      engines: [
        { name: "Tax Projection", description: "Continuous projection of the existing asset portfolio's taxation, for ongoing monitoring." },
        { name: "Project Simulator", description: "Decision support for a one-off asset event (demolition, sale of a property)." },
      ],
      whyLabel: "Why the split",
      why: "The calculation logic fundamentally differs between the two use cases. A continuous projection of the existing portfolio doesn't follow the same mechanics as a one-off simulation triggered by a decision. A single tool would have mixed two incompatible calculation models in the same interface.",
      differentiatorsLabel:
        "Differentiation angles identified — two features that answer decision-making needs the competitive audit brought to light",
      differentiators: ["Demolition / sale event simulation", "Cross-comparison between multiple simulations"],
    },
    iaFocus: {
      number: "05",
      title: "Design focus #2 — Information architecture and vocabulary",
      decisions: [
        {
          title: "Decision 1 — Simplifying navigation",
          body: "Removed \"Parcels\" as a standalone menu entry. Parcel references are now embedded directly in the unit record instead of living on a separate page.",
        },
        {
          title: "Decision 2 — Aligning product vocabulary (UX writing)",
          body: "Renamed the \"Claims\" module to \"Tax Optimizations.\" This choice aligns the product's vocabulary with the language business users actually use themselves, rather than internal or generic terminology — the work doesn't stop at the interface, it extends to the product's language.",
        },
      ],
    },
    outcome: {
      number: "06",
      title: "Current state, limitations and takeaways",
      blocks: [
        {
          label: "Where the product stands",
          body: "Mathis BS is currently in the design phase, ahead of its move into development. The Simulation module's specification, the prioritized competitive audit, and the architecture and vocabulary trade-offs lay the product's structuring foundations.",
        },
        {
          label: "Limitations, acknowledged",
          body: "Since the product isn't deployed yet, there's no measured impact metric at this stage. User research remains indirect: needs reach me through the Product Owner and the tax domain expert rather than through interviews I would conduct myself.",
        },
        {
          label: "What this project demonstrates",
          body: "The ability to single-handedly drive the design of a B2B product in a dense regulatory domain — from strategic positioning and competitive audit through to information architecture and product vocabulary trade-offs.",
        },
      ],
    },
  },
} as const;

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-display text-sm text-violet">{number}</span>
      <span className="h-px w-8 bg-gradient-to-r from-violet to-transparent" />
      <h2 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">{title}</h2>
    </div>
  );
}

function TextBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-violet">{label}</p>
      <p className="mt-2 max-w-3xl text-base leading-relaxed text-muted">{body}</p>
    </div>
  );
}

export default function MathisBsCaseStudy() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <div className="mt-8">
      <FadeUp>
        <p className="max-w-2xl text-lg font-light leading-relaxed text-foreground sm:text-xl">
          {c.subtitle}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{c.intro}</p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-surface/50 p-6 sm:grid-cols-2 sm:p-8">
          {c.meta.map((m) => (
            <div key={m.label} className="flex gap-3">
              <m.icon className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
              <div>
                <p className="text-xs uppercase tracking-wide text-muted/70">{m.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground">{m.value}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>

      {c.sections.map((section) => (
        <FadeUp key={section.number} delay={0.05} className="mt-16">
          <SectionHeading number={section.number} title={section.title} />
          <div className="space-y-6">
            {section.blocks.map((b) => (
              <TextBlock key={b.label} label={b.label} body={b.body} />
            ))}
          </div>
        </FadeUp>
      ))}

      <FadeUp delay={0.05} className="mt-16">
        <SectionHeading number={c.engineFocus.number} title={c.engineFocus.title} />
        <TextBlock label={c.engineFocus.constatLabel} body={c.engineFocus.constat} />

        <p className="mt-8 text-sm font-medium text-violet">{c.engineFocus.solutionLabel}</p>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {c.engineFocus.engines.map((engine, i) => (
            <div
              key={engine.name}
              className={`rounded-2xl border p-6 ${
                i === 0 ? "border-violet/40 bg-violet/5" : "border-yellow/40 bg-yellow/5"
              }`}
            >
              <span
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${
                  i === 0 ? "bg-violet/15 text-violet" : "bg-yellow/15 text-yellow"
                }`}
              >
                {i === 0 ? <Calculator className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}
              </span>
              <h3 className="mt-4 font-display text-lg text-foreground">{engine.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{engine.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <TextBlock label={c.engineFocus.whyLabel} body={c.engineFocus.why} />
        </div>

        <div className="mt-8">
          <p className="text-sm font-medium text-violet">{c.engineFocus.differentiatorsLabel}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {c.engineFocus.differentiators.map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted"
              >
                <Sparkles className="h-3 w-3 text-violet" /> {d}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={0.05} className="mt-16">
        <SectionHeading number={c.iaFocus.number} title={c.iaFocus.title} />
        <div className="space-y-4">
          {c.iaFocus.decisions.map((d) => (
            <div key={d.title} className="rounded-2xl border border-border bg-surface/50 p-6">
              <p className="font-display text-base text-foreground">{d.title}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{d.body}</p>
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={0.05} className="mt-16">
        <SectionHeading number={c.outcome.number} title={c.outcome.title} />
        <div className="space-y-6">
          {c.outcome.blocks.map((b) => (
            <TextBlock key={b.label} label={b.label} body={b.body} />
          ))}
        </div>
      </FadeUp>
    </div>
  );
}
