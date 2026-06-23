/* =========================================================
   ÉPI — Données dynamiques modifiables (v169)
   Vous pouvez modifier les questions pratiques ici sans toucher app.js.
   Format des questions : { task: "...", expected: "..." }
========================================================= */
window.EPI_CONTENT_LIBRARY = window.EPI_CONTENT_LIBRARY || {};
window.EPI_CONTENT_LIBRARY.v169 = {
  tableur: {
    scenario: "Le professeur demande de préparer un petit bulletin de notes pour une classe. Tu dois créer un classeur, organiser les données, calculer les moyennes, présenter les résultats et préparer le fichier pour l’impression.",
    mindmapExamples: {
      "Classeur": "Exemple : Notes_classe.xlsx contient plusieurs feuilles.",
      "Feuille": "Exemple : une feuille nommée Notes et une autre nommée Graphique.",
      "Cellule": "Exemple : B2 contient la première note d’un élève.",
      "Adresse": "Exemple : C5 signifie colonne C, ligne 5.",
      "Formule": "Exemple : =B2+C2+D2 calcule une somme.",
      "Fonction": "Exemple : =MOYENNE(B2:D2) calcule automatiquement la moyenne.",
      "Graphique": "Exemple : un graphique en colonnes compare les moyennes.",
      "Impression": "Exemple : vérifier l’aperçu avant d’imprimer."
    },
    questions: [
      { task: "Ouvre un nouveau classeur et enregistre-le avec un nom clair lié aux notes de la classe.", expected: "Le fichier est enregistré avec un nom significatif, par exemple Notes_classe.xlsx." },
      { task: "Renomme la feuille principale avec un nom compréhensible.", expected: "La feuille porte un nom clair, par exemple Notes ou Bulletin." },
      { task: "Construis un tableau contenant : Nom, Note 1, Note 2, Note 3, Moyenne et Résultat.", expected: "Le tableau contient toutes les colonnes demandées et les titres sont bien visibles." },
      { task: "Saisis les données de quatre élèves, puis calcule la moyenne du premier élève avec une formule ou une fonction.", expected: "Exemple possible : =MOYENNE(B2:D2)." },
      { task: "Recopie la formule de moyenne pour les autres élèves avec la poignée de recopie.", expected: "Les moyennes des autres élèves sont calculées automatiquement sans réécrire toute la formule." },
      { task: "Ajoute une formule qui affiche Admis si la moyenne est supérieure ou égale à 10, sinon Non admis.", expected: "Exemple possible : =SI(E2>=10;\"Admis\";\"Non admis\")." },
      { task: "Mets en forme le tableau pour le rendre lisible : bordures, alignement, titre et largeur des colonnes.", expected: "Le tableau est propre, lisible et les données sont bien organisées." },
      { task: "Insère un graphique pour comparer les moyennes des élèves.", expected: "Le graphique affiche les noms des élèves et leurs moyennes." },
      { task: "Prépare l’impression : orientation, marges et aperçu avant impression.", expected: "Le tableau est prêt à être imprimé sans coupure importante." }
    ]
  },
  logo: {
    scenario: "Le professeur demande de programmer un dessin géométrique avec LOGO. Tu dois utiliser les instructions de déplacement, les rotations, la répétition et une procédure pour obtenir un dessin clair et réutilisable.",
    mindmapExamples: {
      "Tortue": "Exemple : la tortue se déplace sur l’écran pour tracer le dessin.",
      "Instruction": "Exemple : AV 80 fait avancer la tortue de 80 pas.",
      "Rotation": "Exemple : TD 90 tourne à droite de 90 degrés.",
      "Répétition": "Exemple : REPETE 4 [AV 80 TD 90] trace un carré.",
      "Procédure": "Exemple : POUR CARRE ... FIN permet de réutiliser le dessin.",
      "Erreur": "Exemple : un angle 80 au lieu de 90 déforme le carré."
    },
    questions: [
      { task: "Efface l’écran et place la tortue dans une position de départ correcte.", expected: "L’espace de dessin est prêt avant de commencer le programme." },
      { task: "Écris une instruction qui fait avancer la tortue de 80 pas.", expected: "Exemple attendu : AV 80." },
      { task: "Écris deux instructions pour avancer puis tourner à droite de 90 degrés.", expected: "Exemple attendu : AV 80 puis TD 90." },
      { task: "Trace un carré en utilisant une répétition au lieu d’écrire quatre fois les mêmes instructions.", expected: "Exemple attendu : REPETE 4 [AV 80 TD 90]." },
      { task: "Change la couleur ou l’épaisseur du crayon avant de tracer une deuxième figure.", expected: "Le dessin montre une différence visible de couleur ou d’épaisseur." },
      { task: "Crée une procédure appelée CARRE qui permet de tracer un carré.", expected: "La procédure contient les instructions nécessaires entre POUR CARRE et FIN." },
      { task: "Utilise la procédure CARRE deux fois pour éviter la répétition inutile du code.", expected: "La procédure est appelée plusieurs fois pour reproduire la figure." },
      { task: "Corrige une erreur dans un dessin qui ne ressemble pas à un carré.", expected: "L’élève repère l’erreur, par exemple l’angle, puis corrige le programme." }
    ]
  },
  systeme: {
    scenario: "La salle informatique doit être préparée avant une activité. Tu dois vérifier les postes, reconnaître les composants, classer les périphériques et expliquer le chemin de l’information dans un système informatique.",
    mindmapExamples: {
      "Système informatique": "Exemple : utilisateur + matériel + logiciels.",
      "Matériel": "Exemple : écran, unité centrale, clavier, souris.",
      "Logiciel": "Exemple : traitement de texte, navigateur, tableur.",
      "Entrée": "Exemple : clavier et souris permettent de saisir des données.",
      "Sortie": "Exemple : écran et imprimante donnent un résultat.",
      "Stockage": "Exemple : clé USB ou disque dur conserve les fichiers.",
      "Traitement": "Exemple : l’ordinateur calcule une moyenne à partir des notes."
    },
    questions: [
      { task: "Observe le poste informatique et cite quatre composants matériels.", expected: "Exemples : unité centrale, écran, clavier, souris, imprimante." },
      { task: "Classe les périphériques observés en entrée, sortie ou stockage.", expected: "Clavier/souris : entrée ; écran/imprimante : sortie ; clé USB/disque : stockage." },
      { task: "Ouvre un logiciel simple et saisis une phrase courte.", expected: "L’élève utilise un logiciel pour introduire une donnée." },
      { task: "Explique le chemin de cette phrase : entrée, traitement, sortie, stockage.", expected: "Entrée : saisie ; traitement : logiciel/ordinateur ; sortie : affichage ; stockage : enregistrement." },
      { task: "Donne un exemple de logiciel et précise son rôle.", expected: "Exemple : un traitement de texte permet d’écrire et modifier un texte." },
      { task: "Propose deux règles pour utiliser correctement le poste informatique.", expected: "Exemples : ne pas débrancher sans autorisation, sauvegarder le travail, manipuler le matériel avec soin." }
    ]
  },
  os: {
    scenario: "Un élève doit organiser son espace de travail sur l’ordinateur. Il doit ouvrir une session, manipuler les fenêtres, créer des dossiers, classer des fichiers et arrêter correctement le poste.",
    mindmapExamples: {
      "Système d’exploitation": "Exemple : Windows gère les fichiers, les logiciels et le matériel.",
      "Bureau": "Exemple : espace visible après l’ouverture de session.",
      "Icône": "Exemple : symbole qui représente une application ou un fichier.",
      "Fenêtre": "Exemple : une application ouverte dans un cadre déplaçable.",
      "Dossier": "Exemple : TP_Unité contient les fichiers du travail.",
      "Fichier": "Exemple : exercice.docx est un document numérique.",
      "Corbeille": "Exemple : elle reçoit les éléments supprimés."
    },
    questions: [
      { task: "Ouvre ta session et repère le bureau, les icônes et la barre des tâches.", expected: "L’élève identifie les éléments principaux de l’espace de travail." },
      { task: "Crée un dossier nommé TP_Unité dans un emplacement connu.", expected: "Le dossier est créé au bon endroit avec le nom demandé." },
      { task: "Ouvre une application puis réduis, agrandis, déplace et ferme sa fenêtre.", expected: "L’élève manipule correctement les boutons et la fenêtre." },
      { task: "Crée ou enregistre un fichier dans le dossier TP_Unité.", expected: "Le fichier est bien enregistré dans le dossier demandé." },
      { task: "Renomme le fichier avec un nom clair.", expected: "Exemple : exercice_unite ou travail_informatique." },
      { task: "Copie ou déplace le fichier dans un autre dossier, puis retrouve-le.", expected: "L’élève sait organiser et retrouver un fichier." },
      { task: "Explique pourquoi il faut vérifier avant de supprimer un fichier.", expected: "Pour éviter de perdre un travail important." },
      { task: "Ferme les programmes et arrête correctement l’ordinateur.", expected: "L’élève enregistre, ferme les applications puis utilise la commande Arrêter." }
    ]
  },
  default: {
    scenario: "Tu dois réaliser une tâche informatique complète en mobilisant les notions étudiées dans toute l’unité.",
    mindmapExamples: {},
    questions: [
      { task: "Réalise une action pratique liée à la première notion importante de l’unité.", expected: "L’action montre que l’élève comprend la notion et sait l’appliquer." },
      { task: "Présente le résultat obtenu de manière claire.", expected: "Le résultat est observable, lisible et lié à la consigne." },
      { task: "Explique oralement ou sur cahier les étapes suivies.", expected: "L’explication montre une démarche logique." }
    ]
  }
};
