Bonjour 👋,

petit readme à destination des personnes qui examineront le repo.

## Initialisation

un `npm install` puis `npm run dev` devrait faire l'affaire

## Todo

Je vais lister quelques choses que je n'ai pas eu le temps de faire, même certaines toutes petites, mais le cumul m'aurait fait dépasser le temps.

- utiliser les icons pour les "watchers" et les "forks"
  - placer ces icons au même niveau que le titre ?
- mettre le formulaire dans son propre composant
- créer un composant wrapper qui import le formulaire et la liste
- améliorer le design des cards, actuellement on peut dire que c'est "minimaliste"
  - ça inclut ajouter au moins une média queries pour les plus petits écrans
- mieux gérer et afficher les erreurs qui peuvent survenir

## Typescript

J'ai déjà joué un peu avec mais actuellement je ne maîtrise pas typescript. J'en ai inclus un peu mais ce n'est pas complet.

J'ai un petit projet perso que j'avais mentionné pendant l'entretien avec Olivier, Claire et Sarah (en react et apollo) que j'ai prévu d'utiliser pour progresser aussi sur typescript.

## Vue 3 et Pinia

Lorsque j'ai travaillé à Check24 on utilisait vue 2 et vuex. Même si je suis moins à l'aise avec vue 3 et pinia (première fois) je préférais les utiliser parce que si je devais commencer un nouveau projet sur vue, ce serait ces technos que j'utiliserai pour bénéficier des dernières fonctionnalités et optimisation qu'elles offrent.

## API calls

Il était demandé d'optimiser le nombre d'appels à l'api.
J'ai hésité mais avec la manière dont j'utilisais pinia il était plus simple de charger les contributeurs et les languages dès la recherche validée.

Cela veut dire que potentiellement des appels sont faits alors que les infos ne seront pas visualisées.
En revanche ça permet de les stocker directement.

Une solution pourrait être de retourner des fonctions qui seront appelées seulement lorsque l'utilisateur déplie le contenu.

## stockage

Pour vraiment maximiser le stockage et son utilisation, j'ai choisi de construire petit à petit un objet qui contient toutes les recherches précédentes.

Ca signifie que c'est ici que le nombre de requêtes à l'api est optimisé, mais peut se poser la question de la mémoire utilisée si les recherches venaient à être très nombreuses.

