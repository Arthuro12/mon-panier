# Les composables

## Définition

Les composables en Vue.js sont un concept qui contribue à la réutilisabilité dans une application. Les composables
permettent d´encapsuler une logique réactive et réutilisable à différents endroits d´une application. Par exemple, la méthode `useFetch` dans l´environnement de
Nuxt permet d´encapsuler la logique réactive responsable de charger des données depuis un serveur. La méthode offre un avantage dans le sens, où elle peut être utilisée
dans tous les endroits d´une application où on a besoin de charger les données avec un comportement réactif.

## Remarque

Les stores comme Pinia sont un magasin (conteneur) qui permettent de stocker des données, qui sont partagées par différents modules d´une application. 
Ils contribuent à la centralisation des opérations effectuées sur ces données, et permettent d´avoir une communication et une gestion synchronisée dans les différents modules, où ces données sont manipulées.