Devoxx FR 2018 - PWA
====================

## Cadre du projet

Devoxx FR 2018 est une application dévelopée par trois apprentis ingénieurs en informatique en dernière année à [Polytech' Paris-Sud](http://www.polytech.u-psud.fr/fr/index.html) dans le cadre de la matière "Algorithmes pour le Web".

Le sujet du projet était de créer une Progressive Web App utile. L'un d'entre nous participant à l'événement cette année, nous avons choisi de créer une application autour de [l'API de l'événement Devoxx 2018](https://cfp.devoxx.fr/api) de [Nicolas Martignole](https://twitter.com/nmartignole).

L'application a été développée grâce au framework Angular 5 en quelques jours. Il reste quelques évolutions à implémenter, du code à structurer ainsi que quelques logiques à mettre en place.

## Installation

Pour déployer ce projet, deux solutions :
- télécharger la dernière release
- builder depuis les sources

### Builder le projet

Les commandes suivantes permettent d'installer les dépendances et builder le projet :
```bash
npm install -g @angular/cli # installation d'Angular
npm install # installation des dépendances issues du package.json
ng build --prod # build du projet avec Service Workers actifs (mécanisme de cache)
```

### Lancer le projet en local

Si vous avez buildé le projet depuis les sources, rendez-vous dans le dossier `dist`. Sinon, extrayez l'archive release.

Pour lancer le projet sur un environnement local, `http-server` est requis :
```bash
npm install -g http-server
```

On lance le serveur web et on accède à `localhost:8080`
```bash
http-server
```

### Déployer le projet sur un serveur

Si vous souhaitez déployer le projet sur un environnement de production (notamment avec un nom de domaine), téléchargez les sources du projet puis éditez le fichier `fix-sw.js` et changez l'URL indiquée par l'URL cible. Buildez le projet puis exécutez ce script (`node fix-sw.js`) avant de lancer le serveur HTTP.

## Un petit coup de main ?

L'application s'adresse à vous, des personnes qui auront certainement un mot à dire. Que ce soit à propos de l'ergonomie, de l'architecture, du code ou encore des algorithmes, nous communiquer vos retours sera la meilleure façon de nous aider. Dans l'optique de monter en compétence nous serons ravi d'écouter vos retours ou vos idées !

Dans tous les cas, nous vous attendons sur le [GitHub du projet](https://github.com/MielPoPSCrew/DevoxxFR-2018-PWA) ;)

## Authors

*   [Thomas Cottin](https://twitter.com/ThomasCottin)
*   [Clément Garin](https://twitter.com/omnisnash)
*   [Léo Donny](https://twitter.com/LeoDonny_)

## Remerciements

Pour ses bons conseils, son encadrement et son dynamisme, nous adressons nos remerciements à [Tony Amirault](https://twitter.com/AmiraultTony) notre profresseur pour ce cours.

Egalement, remerciements à [Nicolas Martignole](https://twitter.com/nmartignole) pour la disponibilité de l'API :)
