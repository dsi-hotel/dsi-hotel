# DSI Hotel — Guide d'équipe

Guide complet pour modifier, déployer et maintenir le site **dsihotel.fr**.  
Aucune connaissance technique avancée requise pour les modifications courantes.

---

## Table des matières

1. [Vue d'ensemble](#1-vue-densemble)
2. [Prérequis](#2-prérequis)
3. [Lancer le site en local](#3-lancer-le-site-en-local)
4. [Modifier le site avec Claude Code](#4-modifier-le-site-avec-claude-code)
5. [Publier les modifications sur GitHub](#5-publier-les-modifications-sur-github)
6. [Déploiement automatique sur Vercel](#6-déploiement-automatique-sur-vercel)
7. [Variables d'environnement (.env.local)](#7-variables-denvironnement-envlocal)
8. [Système d'emails (Resend)](#8-système-demails-resend)
9. [Traductions (FR / EN / ES)](#9-traductions-fr--en--es)
10. [Carte des fichiers importants](#10-carte-des-fichiers-importants)
11. [FAQ — Problèmes courants](#11-faq--problèmes-courants)

---

## 1. Vue d'ensemble

| Élément | Outil | Lien |
|---|---|---|
| Framework | Next.js 16 | — |
| Hébergeur | Vercel | https://vercel.com/dashboard |
| Code source | GitHub | *(lien repo à compléter)* |
| Emails formulaire | Resend | https://resend.com/dashboard |
| Modifications IA | Claude Code | https://claude.ai/code |

**Flux simplifié :**
```
Modifier le code (local + Claude Code)
        ↓
Pousser sur GitHub (git push)
        ↓
Vercel déploie automatiquement (2–3 min)
        ↓
Site mis à jour sur dsihotel.fr
```

---

## 2. Prérequis

Installer une seule fois sur le PC :

### Node.js
Télécharger et installer depuis **https://nodejs.org** (version LTS recommandée).  
Vérifier l'installation : ouvrir un terminal et taper `node --version` → doit afficher `v20.x.x` ou supérieur.

### Git
Télécharger depuis **https://git-scm.com**.  
Vérifier : `git --version`

### Claude Code
Suivre les instructions d'installation sur **https://claude.ai/code**.

---

## 3. Lancer le site en local

```bash
# 1. Cloner le projet (première fois seulement)
git clone https://github.com/VOTRE-ORG/dsi-hotel.git
cd dsi-hotel

# 2. Installer les dépendances (première fois ou après un git pull)
npm install

# 3. Créer le fichier de configuration (première fois seulement)
# → Copier .env.local.example en .env.local et remplir les valeurs

# 4. Démarrer le serveur de développement
npm run dev
```

Le site est ensuite accessible sur **http://localhost:1660**.

> **Arrêter le serveur :** `Ctrl + C` dans le terminal.

---

## 4. Modifier le site avec Claude Code

Claude Code est l'outil recommandé pour toutes les modifications du site, même sans connaissances en code.

### Lancer Claude Code

```bash
# Dans le dossier du projet
claude
```

### Exemples de demandes à Claude

On parle à Claude en langage naturel, comme à un collègue :

```
"Change le texte du hero en '...'"
"Ajoute une nouvelle section après les services"
"Met à jour l'email de contact vers support@dsihotel.com"
"Traduis ce nouveau texte en anglais et en espagnol"
"Corrige l'affichage sur mobile de la section clients"
```

### Bonnes pratiques

- **Toujours vérifier visuellement** sur http://localhost:1660 avant de pousser sur GitHub
- **Demandes précises** = meilleures modifications (mentionner la section, la couleur, le texte exact)
- En cas de doute, demander à Claude d'**expliquer** ce qu'il va faire avant de le faire

---

## 5. Publier les modifications sur GitHub

Une fois satisfait des modifications en local :

```bash
# Voir ce qui a changé
git status

# Ajouter les fichiers modifiés
git add .

# Créer un commit avec un message descriptif
git commit -m "Mise à jour texte hero + nouvelles horaires support"

# Pousser vers GitHub
git push
```

> Vercel détecte automatiquement le push et lance un nouveau déploiement.

### Branches recommandées

| Branche | Usage |
|---|---|
| `main` | Production — ce qui est en ligne sur dsihotel.fr |
| `dev` | Développement — tester avant de mettre en ligne |

```bash
# Travailler sur une branche dev
git checkout -b dev
# ... modifications ...
git push origin dev

# Fusionner sur main quand c'est prêt
git checkout main
git merge dev
git push
```

---

## 6. Déploiement automatique sur Vercel

### Comment ça marche

Chaque `git push` sur la branche `main` déclenche automatiquement un déploiement.  
Durée : **2 à 3 minutes**.

### Suivre un déploiement

1. Aller sur https://vercel.com/dashboard
2. Cliquer sur le projet **dsi-hotel**
3. Onglet **Deployments** — voir l'état en temps réel

### Variables d'environnement sur Vercel

Les variables de `.env.local` (secrets) **ne sont pas sur GitHub** pour des raisons de sécurité.  
Il faut les renseigner manuellement dans Vercel :

1. Vercel Dashboard → Projet → **Settings** → **Environment Variables**
2. Ajouter chaque variable :

| Nom | Valeur | Environnement |
|---|---|---|
| `RESEND_API_KEY` | `re_xxxxx...` | Production + Preview |
| `CONTACT_EMAIL` | `support@dsihotel.com` | Production |
| `CONTACT_EMAIL` | `gbrljacquemin@gmail.com` | Preview |

---

## 7. Variables d'environnement (.env.local)

Ce fichier contient les **secrets** du projet. Il ne doit **jamais** être poussé sur GitHub (il est dans `.gitignore`).

```env
# Resend — envoi des emails du formulaire de contact
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Adresse de réception des formulaires
# En test : ton adresse Gmail du compte Resend
# En production : support@dsihotel.com
CONTACT_EMAIL=support@dsihotel.com
```

> Si le fichier `.env.local` n'existe pas, copier `.env.local.example` et remplir les valeurs.

---

## 8. Système d'emails (Resend)

### Fonctionnement

Quand un visiteur soumet le formulaire de contact → Resend envoie un email HTML formaté à `CONTACT_EMAIL`.

### Vérification du domaine (pour envoyer depuis @dsihotel.fr)

Actuellement les emails partent depuis `onboarding@resend.dev` (domaine Resend par défaut).  
Pour envoyer depuis `noreply@dsihotel.fr` :

1. Aller sur https://resend.com/domains
2. Ajouter `dsihotel.fr`
3. Ajouter les 3 enregistrements DNS indiqués chez le registrar du domaine
4. Attendre la vérification (quelques minutes à quelques heures)
5. Modifier dans `app/api/contact/route.ts` :
   ```ts
   from: 'DSI Hotel <noreply@dsihotel.fr>',
   ```
6. Modifier dans `.env.local` et dans Vercel :
   ```env
   CONTACT_EMAIL=support@dsihotel.com
   ```

### Tester l'envoi d'email

En mode test (sans domaine vérifié), Resend n'accepte que les envois vers l'adresse email du compte propriétaire.  
Mettre cette adresse dans `CONTACT_EMAIL` pour tester.

---

## 9. Traductions (FR / EN / ES)

Tous les textes du site sont centralisés dans trois fichiers :

```
lib/i18n/
  fr.ts   ← Français (langue par défaut)
  en.ts   ← English
  es.ts   ← Español
```

### Modifier un texte existant

Ouvrir le fichier de la langue concernée et modifier la valeur. Exemple dans `lib/i18n/fr.ts` :

```ts
hero: {
  subtitle: 'Nouveau texte de description ici...',
}
```

Répéter la même modification dans `en.ts` et `es.ts` avec la traduction correspondante.

### Ajouter une nouvelle clé de traduction

1. Ajouter la clé dans les 3 fichiers (`fr.ts`, `en.ts`, `es.ts`)
2. Utiliser la clé dans le composant avec le hook `useLanguage` :
   ```tsx
   const { t } = useLanguage()
   // ...
   <p>{t.section.maCle}</p>
   ```

> Pour les traductions, Claude Code peut générer automatiquement les versions EN et ES à partir du français.

---

## 10. Carte des fichiers importants

```
dsi-hotel/
│
├── app/                          Pages du site (Next.js App Router)
│   ├── page.tsx                  Page d'accueil
│   ├── contact/
│   │   └── ContactClient.tsx     Formulaire de contact (logique + UI)
│   ├── api/contact/route.ts      API d'envoi d'email (Resend)
│   ├── mentions-legales/         Page mentions légales
│   └── politique-de-confidentialite/
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            Header / navigation
│   │   └── Footer.tsx            Pied de page
│   ├── sections/                 Sections de la page d'accueil
│   │   ├── Hero.tsx              Section principale (haut de page)
│   │   ├── SLAStrip.tsx          Bande 99,9% / <1h / 24/7
│   │   ├── Services.tsx          Grille des 6 services
│   │   ├── WhyUs.tsx             "Pourquoi DSI Hotel"
│   │   ├── Expertise.tsx         Logos technologiques (Oracle, Fortinet...)
│   │   ├── ClientsSection.tsx    Logos clients (Hilton, Marriott...)
│   │   └── CTASection.tsx        Appel à l'action final
│   └── ui/
│       └── LanguageSwitcher.tsx  Sélecteur de langue (tiroir)
│
├── lib/
│   ├── i18n/
│   │   ├── index.tsx             Contexte de langue (ne pas modifier)
│   │   ├── fr.ts                 ← TEXTES FRANÇAIS
│   │   ├── en.ts                 ← TEXTES ANGLAIS
│   │   └── es.ts                 ← TEXTES ESPAGNOL
│   └── data/
│       ├── services.ts           Données des 6 cartes de services
│       └── expertise.ts          Données des 4 technologies
│
├── public/
│   ├── logos/                    Logos clients et partenaires
│   └── dsi-logo-gold.png         Logo DSI Hotel
│
├── .env.local                    Secrets (NE PAS pousser sur GitHub)
├── .env.local.example            Modèle de .env.local
└── .claude/launch.json           Config de lancement Claude Code
```

---

## 11. FAQ — Problèmes courants

### Le site ne démarre pas (`npm run dev` échoue)

```bash
# Réinstaller les dépendances
npm install
# Relancer
npm run dev
```

### "Ce site est inaccessible" sur localhost:1660

Le serveur n'est pas démarré. Lancer `npm run dev` dans le terminal.

### Le formulaire affiche "Une erreur est survenue"

Vérifier que :
1. `RESEND_API_KEY` est bien défini dans `.env.local`
2. `CONTACT_EMAIL` correspond à l'adresse email du compte Resend (en mode test)
3. Redémarrer le serveur après toute modification de `.env.local`

### Mes modifications ne s'affichent pas sur le site en ligne

1. Vérifier que les fichiers ont bien été poussés : `git status` doit afficher "nothing to commit"
2. Vérifier le déploiement Vercel (onglet Deployments) — chercher une erreur en rouge
3. Si erreur de build, la corriger et repousser

### Je veux annuler une modification

```bash
# Voir les derniers commits
git log --oneline -5

# Annuler le dernier commit (en gardant les fichiers modifiés)
git revert HEAD
git push
```

### Ajouter un nouveau logo partenaire ou client

1. Placer l'image dans `public/logos/` (format PNG, fond transparent de préférence)
2. Modifier `components/sections/TechLogos.tsx` ou `ClientsSection.tsx`
3. Ajouter le nom et le chemin dans le tableau correspondant

---

*Dernière mise à jour : juin 2026 — DSI Hotel*
