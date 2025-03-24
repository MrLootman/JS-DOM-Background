# JS - DOM : Background

---

![bgsandbox](https://github.com/user-attachments/assets/0ff75da6-b5aa-4c88-a650-3aea607dc0a2)

---

### Pré-requis

Si tu as bien installé l'extension VS Code **Live Server**, tu peux voir apparaître un bouton **Go Live** en bas à droite de ton interface. Cela te permettra **lancer facilement un **serveur local\*\*\*\* pour afficher des fichiers HTML, CSS et JavaScript dans ton navigateur 😊.

---

### Introduction

L'objectif de cet atelier est d'ajouter de l'intéractivité à cette page web.

C'est parce que nous souhaitons rendre notre page **interactive** que nous avons besoin de programmer certains comportements attendus. C'est à cet endroit que **JavaScript** entre en jeu !

Comme tu peux le constater, deux sections apparaissent. Tu vas donc devoir les rendre fonctionnelles !

---

### 🧠 Exercice n° 1

Concentre-toi sur la section de gauche. Tu vas devoir trouver le moyen, en cliquant sur le bouton, de changer la couleur d'arrière-plan de cette section !

<details open>
  <summary>Indice n° 1</summary>
  Tu peux déclarer deux variables, pour y stocker et l'élément `button`, et la `section`.
  Tu peux utiliser la méthode `document.querySelector()` pour parvenir à tes fins.
</details>

<details open>
  <summary>Indice n° 2</summary>
  Tu vas devoir ajouter un <i>event listener</i> (un écouteur d'événement) sur le bouton, et trouver le moyen pour changer la couleur de fond de la section !
</details>

#### Bonus 😈

Tu es parvenu à réaliser cette exercice ? Créé le code nécessaire pour que le bouton permette d'alterner entre la couleur d'origine (blanc) et la nouvelle couleur (rouge).

### 🧠 Exercice n° 2

Concentre-toi à présent sur la section de droite. Cette fois, ce n'est pas un bouton, mais un sélecteur. Ton objectif est de changer la couleur de fond en fonction de la couleur sélectionnée !

<details open>
  <summary>Indice n° 1</summary>
  Tu peux déclarer deux variables, pour y stocker et l'élément `select`, l'élément `section` et l'élément `button`.
  Tu peux utiliser la méthode `document.querySelector()` pour parvenir à tes fins.
</details>

<details open>
  <summary>Indice n° 2</summary>
  Tu vas devoir ajouter un <i>event listener</i> (un écouteur d'événement) sur l'élément `button`, et un autre <i>event listener</i> sur l'élément `select`.
  La sélection d'une couleur doit déclencher une fonction.
  Le clic sur le bouton doit déclencher une autre fonction.
  Dans cette fonction, tu vas devoir trouver le moyen de récupérer la valeur de l'élément `select`, et d'utiliser cette valeur pour mettre à jour la couleur d'arrière plan 😉
</details>
