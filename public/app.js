const APP_VERSION = 'Espace pédagogique informatique';
const PROF_PASSWORD = "__SERVER_AUTH_ONLY__";
const UNITS = [
  {
    "id": "u3_tableur",
    "icon": "",
    "title": "Unité 1 : Tableur",
    "short": "Feuilles, cellules, formules, graphiques",
    "color": "green",
    "competence": "C12",
    "duration": "12 h",
    "officialResources": [
      "Gestion d’un fichier tableur",
      "Feuilles",
      "Cellules",
      "Adresses",
      "Saisie de données dans une cellule",
      "Saisie de formules",
      "Insertion de fonctions",
      "Mise en forme d’un tableau",
      "Graphiques",
      "Mise en page et impression"
    ],
    "intro": "Produire un document de calcul en utilisant un tableur : gérer un fichier, organiser les feuilles et cellules, saisir des données, utiliser formules et fonctions, présenter les résultats et préparer l’impression.",
    "dictionary": [
      [
        "Classeur",
        "مصنف"
      ],
      [
        "Feuille",
        "ورقة عمل"
      ],
      [
        "Cellule",
        "خلية"
      ],
      [
        "Adresse",
        "عنوان"
      ],
      [
        "Plage",
        "نطاق"
      ],
      [
        "Donnée",
        "معطى"
      ],
      [
        "Formule",
        "صيغة"
      ],
      [
        "Fonction",
        "دالة"
      ],
      [
        "Graphique",
        "مبيان"
      ],
      [
        "Impression",
        "طباعة"
      ]
    ],
    "lessons": [
      {
        "title": "Gestion d’un fichier tableur",
        "competence": "C12",
        "officialFocus": "Gestion d’un fichier tableur",
        "objective": "Créer, ouvrir, enregistrer et organiser un fichier tableur de manière correcte.",
        "officialObjectives": [
          "Créer un nouveau classeur tableur.",
          "Enregistrer le fichier avec un nom significatif.",
          "Ouvrir et retrouver un fichier tableur déjà enregistré."
        ],
        "visualType": "diagram",
        "visual": {
          "steps": [
            "Créer",
            "Nommer",
            "Enregistrer",
            "Retrouver"
          ]
        },
        "fr": "Un fichier tableur est souvent appelé classeur. Il sert à organiser des données sous forme de tableaux et à effectuer des calculs. Pour travailler correctement, il faut créer le fichier, lui donner un nom clair, l’enregistrer dans un dossier connu et le rouvrir au besoin.",
        "ar": "يسمى ملف الجدول غالبا مصنفا. يستعمل لتنظيم المعطيات في جداول وإنجاز الحسابات. للعمل بطريقة صحيحة يجب إنشاء الملف، إعطاؤه اسما واضحا، حفظه في مجلد معروف، ثم فتحه عند الحاجة.",
        "fill": [
          "Un fichier tableur est souvent appelé ____.",
          "classeur",
          [
            "classeur",
            "switch",
            "message"
          ]
        ],
        "drag": [
          [
            "Créer",
            "Commencer un nouveau fichier"
          ],
          [
            "Enregistrer",
            "Garder le travail"
          ],
          [
            "Nommer",
            "Donner un nom clair"
          ]
        ],
        "order": {
          "title": "Gérer un fichier tableur",
          "steps": [
            "Créer le classeur",
            "Saisir les données",
            "Enregistrer le fichier"
          ]
        }
      },
      {
        "title": "Feuilles, cellules et adresses",
        "competence": "C12",
        "officialFocus": "Feuilles, cellules et adresses",
        "objective": "Identifier les feuilles, les cellules et les adresses afin de se repérer dans un tableur.",
        "officialObjectives": [
          "Reconnaître une feuille de calcul dans un classeur.",
          "Définir une cellule comme intersection d’une ligne et d’une colonne.",
          "Lire et écrire correctement une adresse de cellule comme B3."
        ],
        "visualType": "mindmap",
        "visual": {
          "center": "Tableur",
          "items": [
            "Classeur",
            "Feuille",
            "Ligne",
            "Colonne",
            "Cellule",
            "Adresse"
          ]
        },
        "fr": "Un classeur peut contenir plusieurs feuilles. Chaque feuille est formée de lignes numérotées et de colonnes nommées par des lettres. L’intersection d’une ligne et d’une colonne forme une cellule. L’adresse B3 signifie colonne B et ligne 3.",
        "ar": "يمكن أن يحتوي المصنف على عدة أوراق. كل ورقة تتكون من أسطر مرقمة وأعمدة تحمل حروفا. تقاطع السطر والعمود يعطي خلية. العنوان B3 يعني العمود B والسطر 3.",
        "fill": [
          "L’adresse C5 signifie colonne C et ligne ____.",
          "5",
          [
            "5",
            "C",
            "tableur"
          ]
        ],
        "drag": [
          [
            "Feuille",
            "Page du classeur"
          ],
          [
            "Cellule",
            "Intersection ligne/colonne"
          ],
          [
            "Adresse",
            "Repère d’une cellule"
          ]
        ],
        "order": {
          "title": "Trouver une cellule",
          "steps": [
            "Repérer la colonne",
            "Repérer la ligne",
            "Lire l’adresse"
          ]
        }
      },
      {
        "title": "Saisie des données et mise en forme d’un tableau",
        "competence": "C12",
        "officialFocus": "Saisie de données dans une cellule et mise en forme d’un tableau",
        "objective": "Saisir des données dans les cellules et améliorer la lisibilité du tableau par une mise en forme adaptée.",
        "officialObjectives": [
          "Saisir correctement un texte, un nombre ou une date dans une cellule.",
          "Mettre en forme un tableau avec titres, bordures et alignements.",
          "Distinguer la mise en forme du contenu et des calculs."
        ],
        "visualType": "cards",
        "visual": {
          "items": [
            "Titre clair",
            "Bordures",
            "Alignement",
            "Format nombre",
            "Couleurs sobres"
          ]
        },
        "fr": "Dans un tableur, une cellule peut contenir un texte, un nombre, une date ou une formule. La mise en forme permet de rendre le tableau lisible : titre visible, bordures, alignement, largeur des colonnes et format des nombres. Elle ne doit pas remplacer les calculs.",
        "ar": "في الجدول يمكن أن تحتوي الخلية على نص أو عدد أو تاريخ أو صيغة. يساعد التنسيق على جعل الجدول مقروءا: عنوان واضح، حدود، محاذاة، عرض الأعمدة وصيغة الأعداد. التنسيق لا يعوض الحسابات.",
        "fill": [
          "La mise en forme sert à rendre le tableau plus ____.",
          "lisible",
          [
            "lisible",
            "faux",
            "caché"
          ]
        ],
        "drag": [
          [
            "Titre",
            "Indique le sujet"
          ],
          [
            "Bordures",
            "Séparent les cellules"
          ],
          [
            "Alignement",
            "Organise le texte"
          ]
        ],
        "order": {
          "title": "Présenter un tableau",
          "steps": [
            "Saisir les données",
            "Ajouter les bordures",
            "Mettre le titre en valeur"
          ]
        }
      },
      {
        "title": "Formules, fonctions et recopie",
        "competence": "C12",
        "officialFocus": "Saisie de formules et insertion de fonctions",
        "objective": "Utiliser des formules et des fonctions simples pour réaliser des calculs automatiques dans un tableur.",
        "officialObjectives": [
          "Écrire une formule commençant par le signe =.",
          "Utiliser des adresses de cellules dans les calculs.",
          "Insérer une fonction simple comme SOMME, MOYENNE, MAX ou MIN et recopier une formule."
        ],
        "visualType": "diagram",
        "visual": {
          "steps": [
            "Données",
            "Formule",
            "Fonction",
            "Résultat"
          ]
        },
        "fr": "Une formule commence par le signe égal et utilise souvent les adresses des cellules. Une fonction est une formule prête à l’emploi comme SOMME, MOYENNE, MAX ou MIN. Quand les données changent, le résultat se recalcule automatiquement. La recopie permet de réutiliser une formule dans d’autres lignes ou colonnes.",
        "ar": "تبدأ الصيغة بعلامة يساوي وتستعمل غالبا عناوين الخلايا. الدالة صيغة جاهزة مثل SOMME وMOYENNE وMAX وMIN. عندما تتغير المعطيات يعاد حساب النتيجة تلقائيا. تسمح النسخ باستعمال الصيغة في أسطر أو أعمدة أخرى.",
        "fill": [
          "Une formule commence par le signe ____.",
          "=",
          [
            "=",
            "@",
            "?"
          ]
        ],
        "drag": [
          [
            "Formule",
            "Calcul écrit par l’utilisateur"
          ],
          [
            "Fonction",
            "Calcul prêt à l’emploi"
          ],
          [
            "Recopie",
            "Réutilise une formule"
          ]
        ],
        "order": {
          "title": "Calculer un total",
          "steps": [
            "Sélectionner la cellule résultat",
            "Écrire la formule",
            "Valider par Entrée"
          ]
        }
      },
      {
        "title": "Graphiques, mise en page et impression",
        "competence": "C12",
        "officialFocus": "Graphiques, mise en page et impression",
        "objective": "Représenter les données par un graphique adapté et préparer correctement l’impression d’un tableau.",
        "officialObjectives": [
          "Choisir un graphique adapté aux données.",
          "Créer un graphique à partir d’un tableau sélectionné.",
          "Vérifier la mise en page, l’orientation et l’aperçu avant impression."
        ],
        "visualType": "table",
        "visual": {
          "headers": [
            "Action",
            "Utilité"
          ],
          "rows": [
            [
              "Graphique",
              "Comparer les données"
            ],
            [
              "Titre du graphique",
              "Comprendre le sujet"
            ],
            [
              "Mise en page",
              "Organiser l’impression"
            ],
            [
              "Aperçu",
              "Vérifier avant imprimer"
            ]
          ]
        },
        "fr": "Le graphique transforme les données en représentation visuelle pour faciliter la comparaison. Pour réussir, il faut choisir les données, sélectionner un type de graphique adapté et ajouter un titre. Avant d’imprimer, on vérifie l’orientation, les marges, la taille et l’aperçu.",
        "ar": "يحول المبيان المعطيات إلى تمثيل بصري يسهل المقارنة. لإنجازه يجب اختيار المعطيات، تحديد نوع مبيان مناسب وإضافة عنوان. قبل الطباعة نتحقق من الاتجاه والهوامش والحجم والمعاينة.",
        "fill": [
          "L’aperçu avant impression sert à ____ le résultat.",
          "vérifier",
          [
            "vérifier",
            "effacer",
            "cacher"
          ]
        ],
        "drag": [
          [
            "Graphique",
            "Représente les données"
          ],
          [
            "Mise en page",
            "Organise la feuille"
          ],
          [
            "Impression",
            "Sortie sur papier"
          ]
        ],
        "order": {
          "title": "Préparer une impression",
          "steps": [
            "Mettre en page",
            "Vérifier l’aperçu",
            "Lancer l’impression"
          ]
        }
      }
    ],
    "integration": {
      "title": "Situation d’intégration — Préparer le bulletin simplifié d’une classe",
      "scenario": "Le professeur veut préparer un petit tableau de notes pour suivre les élèves. Le travail commence par la création du classeur, puis la saisie des informations, la mise en forme, le calcul automatique et enfin la préparation d’un graphique clair pour présenter les résultats.",
      "tasks": [
            "Créer un classeur nommé Bulletin_Classe.xlsx et l’enregistrer dans le dossier demandé.",
            "Ajouter une feuille appelée Notes et saisir les colonnes : Nom, Prénom, Note 1, Note 2, Moyenne et Décision.",
            "Saisir les données de plusieurs élèves en respectant les types de données : texte, nombre, date et formule.",
            "Mettre en forme le tableau : en-têtes colorés, bordures, alignement et largeur des colonnes.",
            "Calculer la moyenne avec une formule ou une fonction adaptée, puis utiliser la poignée de recopie pour compléter les autres lignes.",
            "Afficher la décision : Admis si la moyenne est supérieure ou égale à 10, sinon Non admis.",
            "Créer un graphique simple des moyennes et préparer la feuille pour l’impression."
      ],
      "rubric": [
            [
                  "Classeur et feuilles organisés correctement",
                  3
            ],
            [
                  "Saisie correcte des données et respect des types",
                  4
            ],
            [
                  "Mise en forme lisible du tableau",
                  3
            ],
            [
                  "Formules/fonctions et recopie correctes",
                  5
            ],
            [
                  "Graphique et préparation d’impression",
                  3
            ],
            [
                  "Présentation générale et autonomie",
                  2
            ]
      ]
},
    "exam": [
      [
            "Un tableur sert principalement à :",
            [
                  "Écrire uniquement des paragraphes",
                  "Organiser des données, effectuer des calculs et créer des graphiques",
                  "Dessiner seulement des images",
                  "Naviguer sur Internet"
            ],
            1
      ],
      [
            "Dans un tableur, une cellule est :",
            [
                  "Un fichier complet",
                  "Une image insérée",
                  "L’intersection d’une ligne et d’une colonne",
                  "Un bouton d’impression"
            ],
            2
      ],
      [
            "L’adresse d’une cellule se compose généralement de :",
            [
                  "Le numéro de ligne seulement",
                  "La lettre de la colonne puis le numéro de la ligne",
                  "Le nom du professeur",
                  "La couleur de la cellule"
            ],
            1
      ],
      [
            "Pour ajouter une nouvelle feuille dans Excel, on clique sur :",
            [
                  "La touche Suppr",
                  "Le bouton plus (+) à côté des onglets de feuilles",
                  "Le bouton imprimer",
                  "La barre de formule"
            ],
            1
      ],
      [
            "Une formule dans Excel commence souvent par :",
            [
                  "Le signe =",
                  "Le signe ?",
                  "Le mot FIN",
                  "Une majuscule obligatoire"
            ],
            0
      ],
      [
            "La fonction =SOMME(A1:A5) permet de :",
            [
                  "Additionner les valeurs de A1 à A5",
                  "Changer la couleur du texte",
                  "Supprimer une feuille",
                  "Afficher la date seulement"
            ],
            0
      ],
      [
            "La fonction MOYENNE sert à :",
            [
                  "Calculer la plus grande valeur",
                  "Calculer la moyenne de plusieurs valeurs",
                  "Fusionner les cellules",
                  "Changer la police"
            ],
            1
      ],
      [
            "La poignée de recopie sert à :",
            [
                  "Éteindre l’ordinateur",
                  "Recopier rapidement une formule ou une série vers d’autres cellules",
                  "Renommer le fichier",
                  "Créer un mot de passe"
            ],
            1
      ],
      [
            "Les bordures servent à :",
            [
                  "Rendre les limites du tableau plus visibles",
                  "Calculer une moyenne automatiquement",
                  "Changer le nom du classeur",
                  "Insérer une vidéo"
            ],
            0
      ],
      [
            "Le remplissage d’une cellule permet de :",
            [
                  "Ajouter une couleur de fond à la cellule",
                  "Créer un nouveau fichier",
                  "Supprimer une colonne automatiquement",
                  "Modifier le mot de passe"
            ],
            0
      ],
      [
            "Une donnée de type date est par exemple :",
            [
                  "15/05/2026",
                  "=A1+B1",
                  "Bonjour",
                  "Colonne B"
            ],
            0
      ],
      [
            "Pour renommer une feuille, on utilise :",
            [
                  "L’onglet de la feuille",
                  "Le bouton du volume",
                  "La barre des tâches Windows",
                  "La corbeille"
            ],
            0
      ],
      [
            "Un graphique dans un tableur permet de :",
            [
                  "Représenter visuellement des données",
                  "Créer une nouvelle police",
                  "Fermer Excel",
                  "Remplacer toutes les formules"
            ],
            0
      ],
      [
            "Un graphique en secteurs est souvent utilisé pour :",
            [
                  "Montrer des parts ou des pourcentages",
                  "Écrire un texte long",
                  "Afficher la formule d’une cellule",
                  "Changer l’orientation de la page"
            ],
            0
      ],
      [
            "Avant d’imprimer une feuille, il est utile de vérifier :",
            [
                  "Le son de l’ordinateur",
                  "La mise en page, l’orientation et la zone d’impression",
                  "Le fond d’écran Windows",
                  "Le mot de passe Wi‑Fi"
            ],
            1
      ],
      [
            "Le classeur Excel est composé de :",
            [
                  "Une ou plusieurs feuilles",
                  "Un seul paragraphe",
                  "Des diapositives uniquement",
                  "Des commandes LOGO"
            ],
            0
      ],
      [
            "La barre de formule sert à :",
            [
                  "Afficher ou modifier le contenu de la cellule sélectionnée",
                  "Lancer une vidéo",
                  "Fermer le classeur",
                  "Changer l’heure de l’ordinateur"
            ],
            0
      ],
      [
            "Pour élargir une colonne, on peut :",
            [
                  "Glisser la limite entre deux lettres de colonnes",
                  "Cliquer sur le bouton lecture",
                  "Supprimer toutes les lignes",
                  "Écrire TD 90"
            ],
            0
      ],
      [
            "Une formule automatique est utile parce qu’elle :",
            [
                  "Se recalcule quand les valeurs changent",
                  "Efface le fichier",
                  "Empêche toute modification",
                  "Remplace le clavier"
            ],
            0
      ],
      [
            "Pour enregistrer un classeur, on utilise généralement :",
            [
                  "Fichier > Enregistrer ou Ctrl+S",
                  "Insérer > Image seulement",
                  "TD 90",
                  "Imprimer sans vérifier"
            ],
            0
      ]
]
  },
  {
    "id": "u4_logo",
    "icon": "",
    "title": "Unité 2 : Programmation LOGO",
    "short": "Langage, primitives, répétition, procédures",
    "color": "amber",
    "competence": "C13",
    "duration": "10 h",
    "officialResources": [
      "Programmation Logo",
      "Langages de programmation",
      "Environnement Logo",
      "Primitives de base",
      "Instruction de répétition",
      "Procédures"
    ],
    "intro": "S’initier à la programmation avec LOGO en écrivant des instructions précises, en utilisant les primitives de base, l’instruction de répétition et les procédures.",
    "dictionary": [
      [
        "Programme",
        "برنامج"
      ],
      [
        "Langage",
        "لغة"
      ],
      [
        "LOGO",
        "لوغو"
      ],
      [
        "Tortue",
        "سلحفاة"
      ],
      [
        "Primitive",
        "تعليمة أساسية"
      ],
      [
        "Instruction",
        "أمر"
      ],
      [
        "Répétition",
        "تكرار"
      ],
      [
        "Procédure",
        "إجراء"
      ],
      [
        "Exécution",
        "تنفيذ"
      ],
      [
        "Sauvegarde",
        "حفظ"
      ]
    ],
    "lessons": [
      {
        "title": "Langage de programmation et environnement LOGO",
        "competence": "C13",
        "officialFocus": "Langages de programmation et environnement Logo",
        "objective": "Reconnaître l’environnement LOGO et comprendre qu’un programme est une suite d’instructions ordonnées.",
        "officialObjectives": [
          "Identifier les zones principales de l’environnement LOGO.",
          "Définir un programme comme une suite d’instructions.",
          "Exécuter une instruction simple et observer son effet."
        ],
        "visualType": "cards",
        "visual": {
          "items": [
            "Programme",
            "Langage de programmation",
            "Programmation LOGO"
          ]
        },
        "fr": "Un programme est une suite d’instructions écrites dans un ordre précis pour demander à l’ordinateur d’effectuer une tâche. Un langage de programmation est un langage spécial qui permet d’écrire ces instructions d’une manière compréhensible par l’ordinateur. LOGO est un langage de programmation éducatif : l’élève écrit des commandes pour déplacer une tortue graphique, observer le résultat et comprendre progressivement la logique d’un programme.",
        "ar": "البرنامج هو مجموعة من التعليمات المكتوبة بترتيب دقيق لكي نطلب من الحاسوب إنجاز مهمة. لغة البرمجة هي لغة خاصة تسمح بكتابة هذه التعليمات بطريقة يفهمها الحاسوب. لوغو لغة برمجة تعليمية يكتب فيها المتعلم أوامر لتحريك السلحفاة الرسومية وملاحظة النتيجة وفهم منطق البرنامج تدريجيا.",
        "fill": [
          "Un programme est une suite d’____.",
          "instructions",
          [
            "instructions",
            "imprimantes",
            "feuilles"
          ]
        ],
        "drag": [
          [
            "LOGO",
            "Environnement de programmation"
          ],
          [
            "Tortue",
            "Exécute les commandes"
          ],
          [
            "Programme",
            "Suite d’instructions"
          ]
        ],
        "order": {
          "title": "Tester une instruction",
          "steps": [
            "Écrire l’instruction",
            "Exécuter",
            "Observer le résultat"
          ]
        }
      },
      {
        "title": "Primitives de base",
        "competence": "C13",
        "officialFocus": "Primitives de base",
        "objective": "Utiliser les primitives de base pour déplacer la tortue et construire des tracés simples.",
        "officialObjectives": [
          "Utiliser AV et RE pour déplacer la tortue.",
          "Utiliser TD et TG pour orienter la tortue.",
          "Associer les nombres aux distances ou aux angles."
        ],
        "visualType": "diagram",
        "visual": {
          "steps": [
            "AV 100",
            "TD 90",
            "AV 50",
            "TG 90"
          ]
        },
        "fr": "Les primitives de base sont des commandes simples comprises par LOGO. AV fait avancer la tortue, RE la fait reculer, TD tourne à droite et TG tourne à gauche. Les nombres indiquent la distance ou l’angle. L’ordre des commandes influence le dessin obtenu.",
        "ar": "التعليمات الأساسية هي أوامر بسيطة يفهمها لوغو. AV تجعل السلحفاة تتقدم، RE تجعلها تتراجع، TD للدوران يمينا، وTG للدوران يسارا. الأعداد تمثل المسافة أو الزاوية. ترتيب الأوامر يؤثر في الرسم الناتج.",
        "fill": [
          "La primitive AV 100 demande à la tortue d’____.",
          "avancer",
          [
            "avancer",
            "imprimer",
            "recevoir"
          ]
        ],
        "drag": [
          [
            "AV",
            "Avancer"
          ],
          [
            "RE",
            "Reculer"
          ],
          [
            "TD",
            "Tourner à droite"
          ]
        ],
        "order": {
          "title": "Tracer deux segments",
          "steps": [
            "Avancer",
            "Tourner",
            "Avancer encore"
          ]
        }
      },
      {
        "title": "Instruction de répétition",
        "competence": "C13",
        "officialFocus": "Instruction de répétition",
        "objective": "Utiliser l’instruction de répétition pour simplifier l’écriture de figures géométriques.",
        "officialObjectives": [
          "Repérer les instructions qui se répètent dans un dessin.",
          "Utiliser une répétition pour éviter d’écrire plusieurs fois les mêmes commandes.",
          "Tracer une figure simple comme le carré avec une structure répétitive."
        ],
        "visualType": "cards",
        "visual": {
          "items": [
            "REPETE 4",
            "[ AV 80 TD 90 ]",
            "Carré",
            "Programme court"
          ]
        },
        "fr": "La répétition permet de refaire automatiquement un groupe d’instructions. Par exemple, pour dessiner un carré, on peut répéter quatre fois : avancer puis tourner de 90 degrés. La répétition rend le programme plus court, plus clair et plus facile à corriger.",
        "ar": "يسمح التكرار بإعادة تنفيذ مجموعة من الأوامر تلقائيا. مثلا لرسم مربع يمكن تكرار أربع مرات: تقدم ثم دوران بزاوية 90 درجة. يجعل التكرار البرنامج أقصر وأوضح وأسهل في التصحيح.",
        "fill": [
          "Pour un carré, on peut répéter les mêmes commandes ____ fois.",
          "4",
          [
            "4",
            "2",
            "10"
          ]
        ],
        "drag": [
          [
            "Répétition",
            "Refaire plusieurs fois"
          ],
          [
            "Carré",
            "4 côtés égaux"
          ],
          [
            "90°",
            "Angle droit"
          ]
        ],
        "order": {
          "title": "Tracer un carré avec répétition",
          "steps": [
            "Écrire AV et TD",
            "Ajouter REPETE 4",
            "Exécuter le programme"
          ]
        }
      },
      {
        "title": "Procédures LOGO",
        "competence": "C13",
        "officialFocus": "Procédures",
        "objective": "Créer et réutiliser une procédure LOGO pour structurer un programme.",
        "officialObjectives": [
          "Écrire une procédure avec un nom clair.",
          "Sauvegarder une procédure pour la réutiliser.",
          "Appeler une procédure dans un programme plus long."
        ],
        "visualType": "table",
        "visual": {
          "headers": [
            "Élément",
            "Rôle"
          ],
          "rows": [
            [
              "Nom de procédure",
              "Identifier le programme"
            ],
            [
              "Instructions",
              "Décrire les actions"
            ],
            [
              "Sauvegarde",
              "Garder la procédure"
            ],
            [
              "Appel",
              "Réutiliser la procédure"
            ]
          ]
        },
        "fr": "Une procédure est un petit programme nommé. Elle regroupe des instructions qu’on peut réutiliser plusieurs fois. Elle aide à structurer le programme et à éviter les répétitions inutiles. Une bonne procédure porte un nom clair et contient des instructions ordonnées.",
        "ar": "الإجراء برنامج صغير له اسم. يجمع أوامر يمكن استعمالها عدة مرات. يساعد على تنظيم البرنامج وتجنب التكرار غير الضروري. الإجراء الجيد يحمل اسما واضحا ويحتوي على أوامر مرتبة.",
        "fill": [
          "Une procédure permet de ____ un groupe d’instructions.",
          "réutiliser",
          [
            "réutiliser",
            "perdre",
            "imprimer"
          ]
        ],
        "drag": [
          [
            "Procédure",
            "Programme nommé"
          ],
          [
            "Sauvegarder",
            "Garder le travail"
          ],
          [
            "Appeler",
            "Utiliser la procédure"
          ]
        ],
        "order": {
          "title": "Créer une procédure",
          "steps": [
            "Choisir un nom",
            "Écrire les commandes",
            "Sauvegarder et appeler"
          ]
        }
      }
    ],
    "integration": {
      "title": "Situation d’intégration — Programmer un dessin LOGO complet et expliqué",
      "scenario": "L’établissement prépare une affiche numérique pour une activité scolaire. Chaque élève doit créer un dessin avec LOGO en respectant une suite logique : préparer la tortue, tracer des formes simples, répéter des instructions, utiliser une procédure puis ajouter un petit message explicatif.",
      "tasks": [
            "Choisir un dessin simple à réaliser : maison, drapeau, fleur ou chemin géométrique.",
            "Écrire les instructions de déplacement de la tortue avec AV, RE, TD et TG.",
            "Utiliser au moins une répétition REPETE pour éviter d’écrire plusieurs fois les mêmes instructions.",
            "Créer une procédure qui porte un nom clair et l’appeler dans le programme principal.",
            "Utiliser correctement LC/BC et au moins une commande de couleur si elle est disponible.",
            "Expliquer brièvement le rôle de chaque partie du programme."
      ],
      "rubric": [
            [
                  "Utilisation correcte des commandes de déplacement",
                  4
            ],
            [
                  "Répétition utilisée de manière pertinente",
                  4
            ],
            [
                  "Procédure claire et réutilisable",
                  4
            ],
            [
                  "Dessin lisible et cohérent",
                  4
            ],
            [
                  "Explication du programme",
                  3
            ],
            [
                  "Autonomie et organisation",
                  1
            ]
      ]
},
    "exam": [
      [
            "En LOGO, la tortue représente :",
            [
                  "Le curseur qui se déplace et trace des dessins",
                  "Une cellule de tableur",
                  "Un bouton pour imprimer",
                  "Un fichier texte"
            ],
            0
      ],
      [
            "La commande AV 50 signifie :",
            [
                  "Avancer de 50 pas",
                  "Reculer de 50 pas",
                  "Tourner à droite de 50 degrés",
                  "Effacer tout"
            ],
            0
      ],
      [
            "La commande RE 30 signifie :",
            [
                  "Reculer de 30 pas",
                  "Avancer de 30 pas",
                  "Répéter 30 fois",
                  "Créer un fichier"
            ],
            0
      ],
      [
            "La commande TD 90 permet de :",
            [
                  "Tourner la tortue à droite de 90 degrés",
                  "Avancer de 90 pas",
                  "Lever le crayon",
                  "Créer une feuille"
            ],
            0
      ],
      [
            "La commande TG 90 permet de :",
            [
                  "Tourner la tortue à gauche de 90 degrés",
                  "Reculer de 90 pas",
                  "Changer une note",
                  "Créer un graphique"
            ],
            0
      ],
      [
            "La commande LC sert à :",
            [
                  "Lever le crayon pour déplacer la tortue sans tracer",
                  "Baisser le crayon",
                  "Effacer l’écran",
                  "Répéter une instruction"
            ],
            0
      ],
      [
            "La commande BC sert à :",
            [
                  "Baisser le crayon pour tracer",
                  "Lever le crayon",
                  "Tourner à gauche",
                  "Changer le nom du fichier"
            ],
            0
      ],
      [
            "L’instruction REPETE 4 [AV 50 TD 90] permet de tracer :",
            [
                  "Un carré",
                  "Une ligne seulement",
                  "Un cercle parfait sans répétition",
                  "Un tableau"
            ],
            0
      ],
      [
            "Une procédure en LOGO est :",
            [
                  "Un groupe d’instructions nommé que l’on peut réutiliser",
                  "Une note d’élève",
                  "Une image sans commande",
                  "Une cellule Excel"
            ],
            0
      ],
      [
            "Le mot POUR sert généralement à :",
            [
                  "Commencer la définition d’une procédure",
                  "Enregistrer un classeur",
                  "Créer une ligne Excel",
                  "Imprimer une feuille"
            ],
            0
      ],
      [
            "Le mot FIN sert généralement à :",
            [
                  "Terminer la définition d’une procédure",
                  "Avancer la tortue",
                  "Changer la couleur de fond Windows",
                  "Créer un compte"
            ],
            0
      ],
      [
            "Pour obtenir un dessin correct, il faut :",
            [
                  "Respecter l’ordre logique des instructions",
                  "Écrire les commandes au hasard",
                  "Utiliser uniquement la souris",
                  "Supprimer toutes les répétitions"
            ],
            0
      ],
      [
            "La commande VE ou NETTOIE sert généralement à :",
            [
                  "Effacer l’écran de dessin",
                  "Créer un graphique Excel",
                  "Enregistrer une note",
                  "Ajouter une feuille"
            ],
            0
      ],
      [
            "L’intérêt de REPETE est de :",
            [
                  "Raccourcir le programme et éviter les répétitions inutiles",
                  "Changer la taille de la fenêtre",
                  "Écrire un texte en gras",
                  "Ajouter une bordure au tableau"
            ],
            0
      ],
      [
            "Pour dessiner un triangle équilatéral, une répétition possible est :",
            [
                  "REPETE 3 [AV 60 TD 120]",
                  "REPETE 4 [AV 60 TD 90]",
                  "AV 60 AV 60 seulement",
                  "SOMME(A1:A3)"
            ],
            0
      ],
      [
            "La commande FCC ou une commande de couleur sert à :",
            [
                  "Changer la couleur du crayon",
                  "Calculer une moyenne",
                  "Nommer une feuille",
                  "Ajouter une bordure"
            ],
            0
      ],
      [
            "Une instruction LOGO doit être :",
            [
                  "Claire et écrite dans un ordre précis",
                  "Toujours en arabe uniquement",
                  "Toujours dans une cellule Excel",
                  "Sans espace obligatoire partout"
            ],
            0
      ],
      [
            "Pour déplacer la tortue sans laisser de trace puis reprendre le dessin, on utilise :",
            [
                  "LC puis BC",
                  "SOMME puis MOYENNE",
                  "Imprimer puis fermer",
                  "Nom puis prénom"
            ],
            0
      ],
      [
            "Un programme LOGO peut contenir :",
            [
                  "Des déplacements, des rotations, des répétitions et des procédures",
                  "Des notes finales seulement",
                  "Des feuilles de calcul uniquement",
                  "Des diapositives PowerPoint"
            ],
            0
      ],
      [
            "Un bon programme LOGO est :",
            [
                  "Organisé, réutilisable et facile à comprendre",
                  "Long sans raison",
                  "Sans procédure",
                  "Écrit au hasard"
            ],
            0
      ]
]
  }
];
const LESSON_MEDIA = {
  "Gestion d’un fichier tableur": [
    {
      "src": "assets/tableur-gestion-01-nouveau-classeur.jpg",
      "caption": "Définition : cette image montre comment créer un nouveau classeur dans Excel en choisissant Nouveau classeur. C’est la première étape pour commencer un travail sur un tableur.",
      "alt": "Créer un nouveau classeur Excel"
    },
    {
      "src": "assets/tableur-gestion-02-interface-classeur.jpg",
      "caption": "Définition : cette image présente l’interface d’un classeur Excel. On y observe la feuille de calcul, les colonnes, les lignes, les cellules et les menus de travail.",
      "alt": "Interface d’un classeur Excel"
    },
    {
      "src": "assets/tableur-gestion-03-enregistrer-sous.jpg",
      "caption": "Définition : cette image explique la commande Enregistrer sous. Elle permet de choisir l’emplacement du fichier en cliquant sur Parcourir.",
      "alt": "Enregistrer sous dans Excel"
    },
    {
      "src": "assets/tableur-gestion-04-nommer-enregistrer.jpg",
      "caption": "Définition : cette image montre comment nommer le classeur, choisir le dossier de sauvegarde puis cliquer sur Enregistrer pour garder le travail.",
      "alt": "Nommer et enregistrer le classeur"
    }
  ],
  "Feuilles, cellules et adresses": [
    {
      "src": "assets/tableur-feuilles-cellule-adresse.png",
      "caption": "Définition : cette image montre dans Excel la cellule active et la référence de la cellule. La cellule active est celle qui est sélectionnée dans la feuille, et sa référence apparaît dans la zone de nom, par exemple C3.",
      "alt": "Cellule active et référence de cellule dans Excel"
    },
    {
      "src": "assets/tableur-feuilles-ajouter-feuille.png",
      "caption": "Définition : cette image montre l’onglet de feuille en bas du classeur. Quand on clique sur le signe plus (+), on peut ajouter une nouvelle feuille. On peut ainsi créer plusieurs feuilles dans le même classeur.",
      "alt": "Ajouter plusieurs feuilles dans Excel"
    }
  ],
  "Saisie des données et mise en forme d’un tableau": [
    {
      "src": "assets/tableur-saisie-types-donnees-formule.png",
      "caption": "Définition : cette image montre plusieurs types de données que l’on peut saisir dans un tableur : du texte comme bonjour, un nombre comme 12345, une date comme 01/12/2026, une heure comme 1h et une formule comme =D3*D4. Une formule commence généralement par le signe = et permet de calculer automatiquement un résultat à partir des valeurs des cellules.",
      "alt": "Types de données et formule dans Excel"
    },
    {
      "src": "assets/tableur-saisie-bordures.png",
      "caption": "Définition : cette image montre l’ajout des bordures. On sélectionne le tableau, puis on choisit l’outil Bordures et l’option Toutes les bordures pour séparer clairement les cellules.",
      "alt": "Ajouter des bordures à un tableau Excel"
    },
    {
      "src": "assets/tableur-saisie-couleur-remplissage.png",
      "caption": "Définition : cette image montre comment changer la couleur de remplissage d’une cellule. On sélectionne d’abord la cellule, par exemple D1, puis on clique sur l’outil Couleur de remplissage pour colorer l’arrière-plan de la cellule.",
      "alt": "Changer la couleur de remplissage d’une cellule Excel"
    },
    {
      "src": "assets/tableur-saisie-styler-tableau.png",
      "caption": "Définition : cette image montre comment changer la couleur de police. On sélectionne l’en-tête du tableau, puis on utilise l’outil Couleur de police pour rendre les titres plus visibles.",
      "alt": "Styler un tableau Excel"
    },
    {
      "src": "assets/tableur-saisie-avant-apres.png",
      "caption": "Définition : cette image compare le tableau avant et après la mise en forme. Après l’ajout des bordures, des couleurs et d’une bonne présentation, les données deviennent plus claires et plus faciles à lire.",
      "alt": "Mise en forme du tableau avant et après"
    }
  ],
  "Formules, fonctions et recopie": [
    {
      "src": "assets/tableur-formules-01-definition-formule.png",
      "caption": "Définition : une formule est une expression de calcul écrite dans une cellule. Dans un tableur, elle commence généralement par le signe égal (=) et utilise des nombres, des opérateurs ou des adresses de cellules comme A1 et A2 pour obtenir automatiquement un résultat.",
      "alt": "Définition d’une formule dans un tableur"
    },
    {
      "src": "assets/tableur-formules-02-definition-fonction.png",
      "caption": "Définition : une fonction est une formule prédéfinie prête à l’emploi. Elle simplifie les calculs fréquents comme SOMME, MIN, MAX ou MOYENNE. Elle utilise souvent les adresses des cellules et renvoie directement un résultat.",
      "alt": "Définition d’une fonction dans un tableur"
    },
    {
      "src": "assets/tableur-formules-03-saisie-formule.png",
      "caption": "Démonstration dans Excel : cette image montre la saisie d’une formule dans une cellule et dans la barre de formule. Les cellules utilisées dans le calcul sont indiquées par leurs adresses, ce qui permet au tableur de calculer automatiquement.",
      "alt": "Saisie d’une formule dans Excel"
    },
    {
      "src": "assets/tableur-formules-04-resultat-formule.png",
      "caption": "Démonstration dans Excel : après la validation de la formule, le résultat s’affiche dans la cellule. Si les valeurs utilisées dans les cellules changent, le résultat peut se recalculer automatiquement.",
      "alt": "Résultat d’une formule dans Excel"
    },
    {
      "src": "assets/tableur-formules-05-recopie-poignee.png",
      "caption": "Poignée de recopie 1 : cette image montre la petite poignée de recopie située en bas à droite de la cellule sélectionnée. L’élève repère d’abord cette poignée avant de copier une formule.",
      "alt": "Poignée de recopie 1 dans Excel"
    },
    {
      "src": "assets/tableur-formules-06-recopie-tirer.png",
      "caption": "Poignée de recopie 2 : cette image montre qu’il faut tirer la poignée de recopie vers le bas pour copier la formule dans plusieurs lignes automatiquement.",
      "alt": "Poignée de recopie 2 : tirer vers le bas"
    },
    {
      "src": "assets/tableur-formules-07-recopie-resultat.png",
      "caption": "Poignée de recopie 3 : cette image montre le résultat final. Le tableur recopie la formule et calcule automatiquement les résultats dans les autres cellules.",
      "alt": "Poignée de recopie 3 : résultat de la recopie"
    }
  ],
  "Graphiques, mise en page et impression": [
    {
      "src": "assets/spreadsheet-charts.svg",
      "caption": "Observer un graphique, préparer une mise en page puis lancer l’impression du document.",
      "alt": "Graphiques et impression"
    }
  ],
  "Langage de programmation et environnement LOGO": [
    {
      "src": "assets/logo-environnement.png",
      "caption": "1. Environnement LOGO : cette image montre l’espace de travail. La grande zone sombre sert à afficher les dessins. La tortue se déplace dans cette zone selon les instructions écrites par l’élève. Les menus et les boutons en haut permettent d’ouvrir, enregistrer, exécuter ou accéder aux outils.",
      "alt": "Environnement LOGO"
    },
    {
      "src": "assets/logo-menu-configuration.png",
      "caption": "2. Accès à la configuration : cette image montre le chemin à suivre pour ouvrir la fenêtre de configuration. L’élève clique sur le menu Outils puis sur Configuration. Il comprend ainsi où trouver les réglages du logiciel avant d’écrire ou d’exécuter les commandes.",
      "alt": "Menu Outils puis Configuration"
    },
    {
      "src": "assets/logo-configuration-tortue.png",
      "caption": "3. Fenêtre de configuration : elle permet de choisir l’apparence de la tortue, de modifier la couleur du fond, la couleur du crayon, l’épaisseur du trait et la vitesse d’animation. Cette étape aide l’élève à préparer l’environnement avant de lancer le dessin.",
      "alt": "Configuration de la tortue"
    }
  ],
  "Primitives de base": [
    {
      "src": "assets/logo-instruction-av.png",
      "caption": "Instruction AV : avancer la tortue d’une distance donnée.",
      "alt": "Instruction AV"
    },
    {
      "src": "assets/logo-instruction-re.png",
      "caption": "Instruction RE : reculer la tortue d’une distance donnée.",
      "alt": "Instruction RE"
    },
    {
      "src": "assets/logo-angle-orientation.png",
      "caption": "Angle d’orientation : direction de la tortue avant les rotations TD et TG.",
      "alt": "Angle d’orientation"
    },
    {
      "src": "assets/logo-instruction-td.png",
      "caption": "Instruction TD : tourner la tortue vers la droite.",
      "alt": "Instruction TD"
    },
    {
      "src": "assets/logo-instruction-tg.png",
      "caption": "Instruction TG : tourner la tortue vers la gauche.",
      "alt": "Instruction TG"
    },
    {
      "src": "assets/logo-instruction-crayon.png",
      "caption": "Instructions BC et LC : baisser ou lever le crayon pour dessiner ou se déplacer sans tracer.",
      "alt": "Instructions BC et LC"
    },
    {
      "src": "assets/logo-instruction-ve.png",
      "caption": "Instruction VE : vider l’écran et préparer un nouveau dessin.",
      "alt": "Instruction VE"
    },
    {
      "src": "assets/logo-instruction-fcfg.png",
      "caption": "Instruction FCFG : changer la couleur du fond graphique. Exemple : FCFG 6 colore le fond en rouge.",
      "alt": "Instruction FCFG"
    }
  ],
  "Instruction de répétition": [
    {
      "src": "assets/logo-instruction-repetition-syntax.png",
      "caption": "Syntaxe de REPETE : cette image montre les trois parties importantes : le mot REPETE, le nombre de répétitions et les instructions entre crochets.",
      "alt": "Syntaxe de REPETE"
    },
    {
      "src": "assets/logo-instruction-repetition-repete3.png",
      "caption": "Exemple REPETE 3 : cette image montre une tortue qui répète trois fois AV 100 TD 50 pour tracer trois segments avec rotation.",
      "alt": "Exemple REPETE 3"
    }
  ],
  "Procédures LOGO": [
    {
      "src": "assets/logo-repeat-procedure-pour.png",
      "caption": "Procédure POUR ... FIN : cette image montre la structure d’une procédure et l’exemple POUR CARRE qui réutilise REPETE 4 [AV 60 TD 90].",
      "alt": "Procédure POUR FIN"
    },
    {
      "src": "assets/logo-repeat-ecris-message.png",
      "caption": "Instruction ECRIS : cette image montre comment afficher un message textuel dans LOGO avec la commande ECRIS.",
      "alt": "Instruction ECRIS"
    }
  ]  ,
  "Information": [
    {
      "src": "assets/information-donnee-information-connaissance.png",
      "caption": "Cette image montre le passage de la donnée vers l’information puis vers la connaissance. La donnée est la base brute. Quand la donnée reçoit un sens et un contexte, elle devient une information. Quand l’information est comprise et assimilée, elle devient une connaissance.",
      "alt": "Schéma donnée, information et connaissance"
    },
    {
      "src": "assets/information-type-message-sms.png",
      "caption": "Cette image montre un SMS. Un message est un type d’information transmis d’une personne à une autre. Ici, le message est envoyé par téléphone sous forme de texte court.",
      "alt": "Type d’information : message SMS"
    },
    {
      "src": "assets/information-type-image-reseau.png",
      "caption": "Cette image montre une information présentée sous forme d’image ou de schéma. Une image peut transmettre une information visuelle, par exemple ici un schéma de réseau entre plusieurs ordinateurs.",
      "alt": "Type d’information : image ou schéma"
    }
  ],
  "Informatique": [
    {
      "src": "assets/informatique-traitement-donnees.png",
      "caption": "Cette image illustre l’informatique comme traitement automatique des données par l’ordinateur. L’ordinateur reçoit des données, les traite à l’aide de logiciels, puis produit des informations utiles sous forme de résultats, tableaux, graphiques ou fichiers.",
      "alt": "Traitement des données par l’ordinateur"
    }
  ],
  "Système informatique": [
    {
      "src": "assets/systeme-informatique-interface.png",
      "caption": "Cette image présente le système informatique comme un ensemble organisé. L’utilisateur communique avec le système à travers une interface, puis le noyau fonctionnel réalise le traitement demandé. Le système informatique relie donc l’utilisateur, les moyens de communication et les fonctions de traitement.",
      "alt": "Schéma du système informatique avec utilisateur, interface et noyau fonctionnel"
    }
  ],
  "Connectivités": [
    {
      "src": "assets/connectivite-bluetooth.png",
      "caption": "Cette image montre une connectivité par Bluetooth. Le Bluetooth permet une connexion sans fil à courte distance entre plusieurs appareils, par exemple un téléphone, un ordinateur, un casque ou une imprimante.",
      "alt": "Connectivité Bluetooth"
    },
    {
      "src": "assets/connectivite-wifi.png",
      "caption": "Cette image montre une connectivité par Wi‑Fi. Le Wi‑Fi permet de connecter plusieurs appareils sans câble à un réseau local ou à Internet, comme un ordinateur, un téléphone, une télévision ou une tablette.",
      "alt": "Connectivité Wi-Fi"
    },
    {
      "src": "assets/connectivite-usb.png",
      "caption": "Cette image montre une connectivité par câble USB. Le câble USB sert à relier des appareils entre eux pour transférer des données ou pour recharger un appareil, par exemple un téléphone connecté à un ordinateur portable.",
      "alt": "Connectivité par câble USB"
    }
  ],
  "Les logiciels": [
    {
      "src": "assets/logiciels-suite-apps.png",
      "caption": "Cette image présente plusieurs logiciels ou applications de travail : messagerie, stockage, formulaires, traitement de texte, présentations, feuilles de calcul et communication. Le mot application ou app a presque le même sens que logiciel, surtout lorsqu’il s’agit d’un programme utilisé par l’utilisateur pour accomplir une tâche précise.",
      "alt": "Exemples de logiciels et d'applications"
    },
    {
      "src": "assets/logiciels-systemes-exploitation.png",
      "caption": "Cette image montre des systèmes d’exploitation comme Windows, Mac OS, Linux, iOS et Android. Ces logiciels sont essentiels au fonctionnement de l’ordinateur ou du téléphone, car ils permettent de démarrer l’appareil, de gérer le matériel et de lancer les autres logiciels.",
      "alt": "Exemples de systèmes d’exploitation"
    },
    {
      "src": "assets/application-smartphone.png",
      "caption": "Cette image illustre la notion d’application mobile. Une application est un logiciel léger, souvent installé sur un téléphone, qui permet de réaliser une tâche précise comme communiquer, écrire, écouter, calculer ou créer un document.",
      "alt": "Applications sur smartphone"
    }
  ]
  ,
  "Notion de système d’exploitation": [
    {
      "src": "assets/os-systemes-exploitation.png",
      "caption": "Cette image présente des exemples de systèmes d’exploitation : Windows, Mac OS, Linux, iOS et Android. Un système d’exploitation est le logiciel principal qui permet à l’appareil de fonctionner et de lancer les autres programmes.",
      "alt": "Exemples de systèmes d’exploitation"
    }
  ],
  "Gestion des fenêtres": [
    {
      "src": "assets/fenetre-exemple-explorateur.png",
      "caption": "Cette image montre un exemple de fenêtre dans l’explorateur de fichiers. Une fenêtre est une zone de l’écran qui affiche un programme, un dossier ou un document. Elle possède des boutons de commande en haut à droite.",
      "alt": "Exemple d’une fenêtre"
    },
    {
      "src": "assets/fenetre-fermer.png",
      "caption": "Cette image montre le bouton Fermer d’une fenêtre. Quand on clique sur ce bouton marqué par X, la fenêtre se ferme.",
      "alt": "Bouton Fermer d’une fenêtre"
    },
    {
      "src": "assets/fenetre-agrandir.png",
      "caption": "Cette image montre le bouton Agrandir. Quand on clique sur le carré, la fenêtre occupe une plus grande partie de l’écran ou passe en plein affichage.",
      "alt": "Bouton Agrandir d’une fenêtre"
    },
    {
      "src": "assets/fenetre-reduire.png",
      "caption": "Cette image montre le bouton Réduire d’une fenêtre. Réduire une fenêtre signifie la placer dans la barre des tâches sans la fermer.",
      "alt": "Bouton Réduire d’une fenêtre"
    }
  ]
  ,
  "Organisation du poste de travail (bureau)": [
    {
      "src": "assets/bureau-windows7-poste-travail.png",
      "caption": "Cette image montre le bureau de Windows 7. On y observe plusieurs éléments importants du poste de travail : le fond d’écran, les icônes, le bouton Démarrer, la barre des tâches et la zone de notification. Le bureau est l’espace principal de travail qui apparaît après l’ouverture de la session.",
      "alt": "Le bureau de Windows 7 et ses éléments"
    }
  ]

};
const STORAGE_KEY = 'edu_libre_current_student_v41';
const STUDENTS_DB_KEY = 'edu_libre_students_db_v41';
const RESULTS_DB_KEY = 'edu_libre_results_db_v41';
const state = { unitId:null, page:'intro', lessonIndex:0, tab:'visual' };

const dictGame = {unitId:null, index:0, score:0, answered:false, history:[]};
const DICTIONARY_EXTRA = {
  "u3_tableur": [
    [
      "Ligne",
      "سطر"
    ],
    [
      "Colonne",
      "عمود"
    ],
    [
      "Barre de formule",
      "شريط الصيغة"
    ],
    [
      "SOMME",
      "مجموع"
    ],
    [
      "MOYENNE",
      "متوسط"
    ],
    [
      "MAX",
      "أكبر قيمة"
    ],
    [
      "MIN",
      "أصغر قيمة"
    ],
    [
      "Recopie",
      "نسخ تلقائي"
    ],
    [
      "Mise en forme",
      "تنسيق"
    ],
    [
      "Bordure",
      "حدود"
    ],
    [
      "Alignement",
      "محاذاة"
    ],
    [
      "Format nombre",
      "تنسيق العدد"
    ],
    [
      "Total",
      "مجموع"
    ],
    [
      "Calcul automatique",
      "حساب تلقائي"
    ],
    [
      "Titre du tableau",
      "عنوان الجدول"
    ],
    [
      "Diagramme en colonnes",
      "مبيان بالأعمدة"
    ],
    [
      "Diagramme circulaire",
      "مبيان دائري"
    ],
    [
      "Mise en page",
      "إعداد الصفحة"
    ],
    [
      "Aperçu avant impression",
      "معاينة قبل الطباعة"
    ],
    [
      "Enregistrement",
      "حفظ"
    ],
    [
      "Sélection",
      "تحديد"
    ],
    [
      "Feuille active",
      "الورقة النشطة"
    ],
    [
      "Zone d’impression",
      "منطقة الطباعة"
    ],
    [
      "Donnée numérique",
      "معطى عددي"
    ],
    [
      "Donnée textuelle",
      "معطى نصي"
    ]
  ],
  "u4_logo": [
    [
      "AV",
      "تقدم"
    ],
    [
      "RE",
      "تراجع"
    ],
    [
      "TD",
      "استدر يمينا"
    ],
    [
      "TG",
      "استدر يسارا"
    ],
    [
      "LC",
      "ارفع القلم"
    ],
    [
      "BC",
      "أنزل القلم"
    ],
    [
      "Angle",
      "زاوية"
    ],
    [
      "Distance",
      "مسافة"
    ],
    [
      "Commande",
      "أمر"
    ],
    [
      "Bloc d’instructions",
      "كتلة تعليمات"
    ],
    [
      "Crochets",
      "معقوفات"
    ],
    [
      "Carré",
      "مربع"
    ],
    [
      "Rectangle",
      "مستطيل"
    ],
    [
      "Motif",
      "زخرفة"
    ],
    [
      "Boucle",
      "حلقة تكرار"
    ],
    [
      "Appel de procédure",
      "استدعاء إجراء"
    ],
    [
      "Nom de procédure",
      "اسم الإجراء"
    ],
    [
      "Paramètre",
      "وسيط"
    ],
    [
      "Dessin géométrique",
      "رسم هندسي"
    ],
    [
      "Erreur de syntaxe",
      "خطأ في الصياغة"
    ]
  ]
};
function getDictionaryEntries(unit){
  const base = Array.isArray(unit.dictionary) ? unit.dictionary : [];
  const extra = DICTIONARY_EXTRA[unit.id] || [];
  const map = new Map();
  [...base, ...extra].forEach(pair=>{
    if(Array.isArray(pair) && pair[0] && pair[1] && !map.has(pair[0])) map.set(pair[0], pair);
  });
  return [...map.values()];
}
function resetDictGame(unitId){dictGame.unitId=unitId; dictGame.index=0; dictGame.score=0; dictGame.answered=false; dictGame.history=[];}
function dictOptions(entries, index){
  const correct = entries[index][1];
  const wrongs = entries.filter((_,i)=>i!==index).map(x=>x[1]);
  const start = (index*2) % Math.max(1, wrongs.length);
  const picked = [];
  for(let k=0;k<wrongs.length && picked.length<2;k++){
    const val = wrongs[(start+k)%wrongs.length];
    if(val!==correct && !picked.includes(val)) picked.push(val);
  }
  while(picked.length<2 && wrongs.length){const val=wrongs[picked.length%wrongs.length]; if(!picked.includes(val)) picked.push(val); else break;}
  const opts = [correct, ...picked].slice(0,3);
  return opts.map((v,i)=>({v,sortKey:((index+1)*(i+3)+v.length)%17})).sort((a,b)=>a.sortKey-b.sortKey).map(o=>o.v);
}
const $ = sel => document.querySelector(sel);
function esc(s){return String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));}
function cleanAudioTitle(title){
  return String(title||'').replace(/^Petite audio\s*\d+\s*:\s*/i,'').trim();
}
function audioSpeakText(it){
  const title = cleanAudioTitle(it.title);
  const isImage = /image/i.test(title) || /image/i.test(it.title||'');
  return `${isImage ? 'Idée principale de l’image' : 'Idée principale de la notion'} : ${title}. ${it.fr}`;
}
function audioSpeakTextAr(it){
  const title = cleanAudioTitle(it.title);
  return `الفكرة الأساسية: ${title}. ${it.ar}`;
}
function audioOnlyCard(it, i, extraClass=''){
  const title = cleanAudioTitle(it.title || `Notion ${i+1}`);
  const frText = audioSpeakText({title, fr: it.fr || it.text || ''});
  const arText = audioSpeakTextAr({title, ar: it.ar || it.textAr || it.fr || it.text || ''});
  return `<article class="logo-audio-card audio-title-only audio-recording-card ${extraClass}"><div class="logo-audio-title"><span>${i+1}</span><h4>${esc(title)}</h4></div><div class="audio-row"><button class="btn small" data-speak="fr" data-text="${esc(frText)}" aria-label="Écouter la notion ${esc(title)} en français">▶ Audio FR</button><button class="btn green small" data-speak="ar" data-text="${esc(arText)}" aria-label="Écouter la notion ${esc(title)} en arabe">▶ صوت AR</button><button class="btn ghost small stop-audio-btn" data-action="stop-speech" aria-label="Arrêter l'audio">■</button></div></article>`;
}

function getStudent(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'null')}catch{return null}}
function setStudent(s){localStorage.setItem(STORAGE_KEY, JSON.stringify(s));}
function clearStudent(){localStorage.removeItem(STORAGE_KEY); renderLogin();}
function readJsonDb(key){try{const data=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(data)?data:[]}catch{return []}}
function writeJsonDb(key,data){localStorage.setItem(key, JSON.stringify(data));}

// Liste de secours intégrée : elle garantit l'accès même si le fichier eleves_autorises.js n'est pas chargé par le navigateur.
const AUTHORIZED_STUDENTS_FALLBACK = [
  { nom: "El Amrani", prenom: "Youssef", school: "École Moulay Ismail" },
  { nom: "Idrissi", prenom: "Salma", school: "École Moulay Ismail" },
  { nom: "Alaoui", prenom: "Amine", school: "École Moulay Ismail" },
  { nom: "Benkirane", prenom: "Imane", school: "École Moulay Ismail" },
  { nom: "Chraibi", prenom: "Aya", school: "École Moulay Ismail" },
  { nom: "Bennani", prenom: "Yassine", school: "École Moulay Ismail" }
];

function normalizeStudentName(value){
  return String(value || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^A-Za-z0-9]+/g, ' ')
    .trim()
    .toUpperCase()
    .replace(/\s+/g, ' ');
}
function getAuthorizedStudents(){
  const externalList = (typeof window !== 'undefined' && Array.isArray(window.AUTHORIZED_STUDENTS)) ? window.AUTHORIZED_STUDENTS :
    ((typeof AUTHORIZED_STUDENTS !== 'undefined' && Array.isArray(AUTHORIZED_STUDENTS)) ? AUTHORIZED_STUDENTS : []);
  const fallbackList = (typeof AUTHORIZED_STUDENTS_FALLBACK !== 'undefined' && Array.isArray(AUTHORIZED_STUDENTS_FALLBACK)) ? AUTHORIZED_STUDENTS_FALLBACK : [];
  const dbList = readJsonDb(STUDENTS_DB_KEY);
  const seen = new Set();
  return [...externalList, ...fallbackList, ...dbList].filter(st=>{
    const key = normalizeStudentName(st.fullName || `${st.nom||''} ${st.prenom||''}`);
    if(!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function getStudentFullName(st){
  return String(st?.fullName || `${st?.nom||''} ${st?.prenom||''}`).trim();
}
function splitStudentFullName(fullName){
  const clean = String(fullName||'').trim().replace(/\s+/g,' ');
  if(!clean) return {nom:'', prenom:'', fullName:''};
  const parts = clean.split(' ');
  if(parts.length === 1) return {nom:parts[0], prenom:'', fullName:clean};
  return {nom:parts[0], prenom:parts.slice(1).join(' '), fullName:clean};
}
function isAuthorizedFullName(fullName){
  const key = normalizeStudentName(fullName);
  if(!key) return false;
  return getAuthorizedStudents().some(st=>studentNamesForMatch(st).includes(key));
}
function authorizedOptionsHtml(selected=''){
  const current = normalizeStudentName(selected);
  return getAuthorizedStudents().map(st=>{
    const full = getStudentFullName(st);
    const sel = normalizeStudentName(full)===current ? ' selected' : '';
    return `<option value="${esc(full)}"${sel}>${esc(full)}</option>`;
  }).join('');
}
function studentNamesForMatch(st){
  const names = [];
  if(st.fullName) names.push(st.fullName);
  if(st.nom || st.prenom){
    names.push(`${st.nom||''} ${st.prenom||''}`);
    names.push(`${st.prenom||''} ${st.nom||''}`);
  }
  if(Array.isArray(st.aliases)) names.push(...st.aliases);
  return names.map(normalizeStudentName).filter(Boolean);
}
function isAuthorizedStudent(nom, prenom){
  const list = getAuthorizedStudents();
  if(!list.length) return false;
  const entered = [
    normalizeStudentName(`${nom||''} ${prenom||''}`),
    normalizeStudentName(`${prenom||''} ${nom||''}`),
    normalizeStudentName(`${nom||''}`),
    normalizeStudentName(`${prenom||''}`)
  ].filter(Boolean);
  return list.some(st=>{
    const possible = studentNamesForMatch(st);
    return entered.some(x=>possible.includes(x));
  });
}
function showAccessDenied(){
  alert("Authentification incorrecte.");
}
function saveStudentToLocalDb(student){
  if(!student || !student.nom || !student.prenom) return;
  const db = readJsonDb(STUDENTS_DB_KEY);
  const key = normalizeStudentName(`${student.prenom} ${student.nom}`);
  const item = {
    nom:String(student.nom||'').trim(),
    prenom:String(student.prenom||'').trim(),
    date_inscription:new Date().toISOString()
  };
  const idx = db.findIndex(x=>normalizeStudentName(`${x.prenom||''} ${x.nom||''}`)===key);
  if(idx>=0) db[idx] = {...db[idx], ...item};
  else db.push(item);
  writeJsonDb(STUDENTS_DB_KEY, db);
}
function getResults(){return readJsonDb(RESULTS_DB_KEY).sort((a,b)=>String(b.date_iso||'').localeCompare(String(a.date_iso||'')));}
function saveExamResult(result){
  const db = readJsonDb(RESULTS_DB_KEY);
  db.push({...result, id:Date.now()+ '-' + Math.random().toString(16).slice(2)});
  writeJsonDb(RESULTS_DB_KEY, db);
}
function formatDateFr(iso){
  try{return new Date(iso).toLocaleString('fr-FR')}catch{return iso||''}
}
function csvCell(value){
  const s = String(value??'');
  return '"' + s.replace(/"/g,'""') + '"';
}
function exportResultsToCsv(){
  const results = getResults();
  if(!results.length){alert('Aucun résultat à exporter pour le moment.');return;}
  const headers = ['Nom','Prénom','Unité','Note finale /20','Bonus ou sans bonus','Total avec bonus','Statut','Date'];
  const lines = ['sep=;', headers.map(csvCell).join(';')];
  results.forEach(r=>{
    lines.push([r.nom,r.prenom,r.unite,`${r.note_finale}/20`,r.bonus?'Avec bonus (+5 pts)':'Sans bonus',r.total_avec_bonus,r.statut,formatDateFr(r.date_iso)].map(csvCell).join(';'));
  });
  const blob = new Blob(['\ufeff' + lines.join('\n')], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const d = new Date();
  const pad=n=>String(n).padStart(2,'0');
  a.href = url;
  a.download = `resultats_edu_libre_${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
function clearResultsDb(){
  if(confirm('Voulez-vous vraiment supprimer les résultats enregistrés sur cet ordinateur ?')){
    localStorage.removeItem(RESULTS_DB_KEY);
    renderResultsPage();
  }
}
function openTeacherArea(){
  const code = prompt('Espace professeur — entrez le mot de passe :');
  if(code === null) return;
  if(code === PROF_PASSWORD){
    renderResultsPage();
  }else{
    alert('Accès refusé. Cette partie est réservée au professeur.');
  }
}
function appShell(content){
  const st=getStudent();
  return `<div class="app-shell"><header class="topbar"><div class="brand"><div class="logo"><img src="assets/logo.svg" alt="Espace pédagogique informatique"></div><div><h1>ÉPI</h1><p>${state.selectedLevel==='1ac' ? 'Informatique — 1ère année collégiale' : state.selectedLevel==='2ac' ? 'Informatique — 2ème année collégiale' : 'Informatique — cycle collégial'}</p></div></div><div class="nav-actions">${st?`<span class="pill">${esc(st.prenom)} ${esc(st.nom)}</span><button class="btn ghost small" data-action="home">Accueil</button><button class="btn secondary small" data-action="teacher">Espace professeur</button><button class="btn secondary small" data-action="logout">Déconnexion</button>`:''}</div></header>${content}<div class="footer-note"><span class="version-tag">${APP_VERSION}</span></div></div>`;
}
function renderLogin(){
  localStorage.removeItem(STORAGE_KEY);
  const studentOptions = authorizedOptionsHtml();
  $('#app').innerHTML = `<main class="access-v40">
    <section class="access-panel-v40">
      <section class="access-main-v40">
        <aside class="logo-frame-v40 accueil-logo-left-v48" aria-label="Logo Espace pédagogique informatique">
          <div class="logo-only-v40">
            <img src="assets/logo.svg" alt="Logo Espace pédagogique informatique">
          </div>
          <div class="logo-title-v48">ÉPI</div>
          <div class="logo-subtitle-v48">Informatique — cycle collégial</div>
        </aside>

        <section class="form-card-v40">
          <div class="form-top-v40">
            <span class="form-badge-v40">Accès élève</span>
            <h1>ÉPI</h1>
            <h2>Formulaire d’inscription</h2>
            <p>Complète tes informations pour accéder directement aux unités.</p>
          </div>
          <form id="loginForm" class="login-form-v40">
            <div class="field v40-field full-field-v52">
              <label>Choisir l’élève autorisé</label>
              <select name="studentFullName" id="studentFullName">
                <option value="">-- Sélectionner dans la liste --</option>
                ${studentOptions}
              </select>
            </div>
            <p class="form-help-v52">Le choix dans la liste évite les erreurs d’écriture du nom et du prénom.</p>
            <div class="field v40-field"><label>Nom</label><div class="input-icon-v40"><span>N</span><input name="nom" autocomplete="family-name" placeholder="Votre nom"></div></div>
            <div class="field v40-field"><label>Prénom</label><div class="input-icon-v40"><span>P</span><input name="prenom" autocomplete="given-name" placeholder="Votre prénom"></div></div>
            <div id="loginError" class="error"></div>
            <button class="btn access-submit-v40" type="submit">Entrer dans l’application <span>→</span></button>
          </form>
        </section>
      </section>

      <footer class="motivation-v40">
        <span class="motivation-badge-v40">Lettre de motivation</span>
        <h3>Pourquoi utiliser ÉPI ?</h3>
        <p>Cher élève, cette application a été conçue pour t’aider à apprendre l’informatique avec confiance. Elle te permet de comprendre chaque notion à travers des images, des explications audio et des activités pratiques. Avance étape par étape, révise régulièrement et utilise les entraînements pour renforcer ta mémoire avant le contrôle final.</p>
        <div class="contact-v40">Contact : <a href="mailto:youssrasaidi234@gmail.com">youssrasaidi234@gmail.com</a></div>
      </footer>
    </section>
  </main>`;
}
function renderHome(){
  const st = getStudent() || {prenom:'', nom:''};
  const displayedUnits = UNITS.filter(u => ['tableur','logo'].includes(u.id));
  const studentOptions = authorizedOptionsHtml(st.fullName || `${st.nom||''} ${st.prenom||''}`);
  const cards = displayedUnits.map(u=>`<button class="unit-card unit-card-simple no-icon-card unit-blue-v48" data-unit="${u.id}"><h3>${esc(u.title)}</h3><div class="unit-meta"><span class="pill">${esc(u.short)}</span><span class="mini-pill">${esc(u.duration||'')}</span></div></button>`).join('');
  $('#app').innerHTML = appShell(`<section class="home-page-v47">
    <section class="home-welcome-v47">
      <div>
        <span class="mini-pill">Accueil</span>
        <h2>Bienvenue dans ÉPI</h2>
        <p>Complète ou vérifie tes informations, puis choisis une unité pour commencer l’apprentissage.</p>
      </div>
    </section>

    <section class="home-forms-v47" aria-label="Formulaires de la page d’accueil">
      <form id="homeStudentForm" class="home-form-card-v47">
        <div class="home-form-head-v47">
          <span class="form-badge-v47">Formulaire élève</span>
          <h3>Informations de l’élève</h3>
          <p>Ces informations seront utilisées pour enregistrer les résultats des contrôles.</p>
        </div>
        <div class="field full-field-v52">
          <label>Choisir l’élève autorisé</label>
          <select name="studentFullName" id="homeStudentFullName">
            <option value="">-- Sélectionner dans la liste --</option>
            ${studentOptions}
          </select>
        </div>
        <div class="home-form-grid-v47">
          <div class="field"><label>Nom</label><input name="nom" value="${esc(st.nom)}" autocomplete="family-name"></div>
          <div class="field"><label>Prénom</label><input name="prenom" value="${esc(st.prenom)}" autocomplete="given-name"></div>
        </div>
        <button class="btn home-form-btn-v47" type="submit">Enregistrer mes informations</button>
        <p id="homeStudentMsg" class="home-form-msg-v47"></p>
      </form>

      <form id="teacherHomeAccessForm" class="home-form-card-v47 teacher-access-v47">
        <div class="home-form-head-v47">
          <span class="form-badge-v47 teacher-badge-v47">Espace enseignant</span>
          <h3>Accès professeur</h3>
          <p>Entrer le mot de passe pour ouvrir le tableau des notes et l’export Excel.</p>
        </div>
        <div class="field"><label>Mot de passe professeur</label><input name="password" type="password" placeholder="Mot de passe" required></div>
        <button class="btn secondary home-form-btn-v47" type="submit">Ouvrir l’espace professeur</button>
        <p id="teacherHomeMsg" class="home-form-msg-v47"></p>
      </form>
    </section>

    <section class="page-title short centered-title home-units-title-v47"><span class="mini-pill">Choisir une unité</span><h2>Unités de la 2e année collégiale</h2></section>
    <section class="unit-grid centered-units home-units-v47">${cards}</section>

    <footer class="home-motivation-v47">
      <span class="motivation-badge-v47">Lettre de motivation</span>
      <h3>Pourquoi utiliser ÉPI ?</h3>
      <p>Cher élève, cette application a été conçue pour t’aider à apprendre l’informatique avec confiance. Tu peux comprendre chaque notion avec des images, écouter l’explication, puis t’entraîner avec des activités pratiques avant le contrôle final.</p>
      <div class="contact-v47">Contact : <a href="mailto:youssrasaidi234@gmail.com">youssrasaidi234@gmail.com</a></div>
    </footer>
  </section>`);
}
function renderResultsPage(){
  const results = getResults();
  const students = readJsonDb(STUDENTS_DB_KEY);
  const unitOptions = UNITS.map(u=>`<option value="${esc(u.title)}">${esc(u.title)}</option>`).join('');
  const today = new Date().toISOString().slice(0,10);
  const rows = results.length ? results.map((r,i)=>`<tr><td>${i+1}</td><td>${esc(r.nom)}</td><td>${esc(r.prenom)}</td><td>${esc(r.unite)}</td><td><strong>${esc(r.note_finale)}/20</strong></td><td>${Number(r.bonus)>0?'Avec bonus':'Sans bonus'}</td><td>${esc(r.total_avec_bonus ?? r.note_finale)}/20</td><td><span class="status-badge ${r.reussi?'ok-status':'ko-status'}">${esc(r.statut)}</span></td><td>${esc(formatDateFr(r.date_iso))}</td></tr>`).join('') : `<tr><td colspan="9" class="empty-cell">Aucun résultat enregistré pour le moment.</td></tr>`;
  const studentRows = students.length ? students.map((s,i)=>`<tr><td>${i+1}</td><td>${esc(s.nom)}</td><td>${esc(s.prenom)}</td></tr>`).join('') : `<tr><td colspan="3" class="empty-cell">Aucun élève enregistré pour le moment.</td></tr>`;
  $('#app').innerHTML = appShell(`<section class="page-title"><span class="mini-pill">Accès professeur</span><h2>Espace professeur — Résultats et export Excel</h2><p>Cette page est réservée au professeur. Vous pouvez enregistrer manuellement une note ou exporter les résultats vers Excel.</p></section>
  <section class="results-actions"><button class="btn" data-action="export-results">Exporter vers Excel</button><button class="btn ghost" data-action="home">Retour aux unités</button><button class="btn red" data-action="clear-results">Supprimer les résultats</button></section>
  <section class="panel teacher-manual-panel">
    <div class="section-head compact-head"><div><span class="mini-pill">Saisie professionnelle</span><h3>Enregistrer la note d’un élève</h3><p class="subtle">Le bonus est accordé automatiquement si la note est supérieure à 10/20.</p></div></div>
    <form id="teacherResultForm" class="teacher-result-form">
      <div class="field"><label>Nom</label><input name="nom" placeholder="Ex. El Amrani" required></div>
      <div class="field"><label>Prénom</label><input name="prenom" placeholder="Ex. Youssra" required></div>
      
      <div class="field"><label>Unité</label><select name="unite" required>${unitOptions}</select></div>
      <div class="field"><label>Note /20</label><input name="note" type="number" min="0" max="20" step="0.25" placeholder="Ex. 14" required></div>
      <div class="field"><label>Date</label><input name="date" type="date" value="${today}" required></div>
      <div class="teacher-form-actions"><button class="btn" type="submit">Enregistrer la note</button><span id="teacherFormMsg" class="teacher-form-msg"></span></div>
    </form>
  </section>
  <section class="panel results-info"><h3>Liste des élèves inscrits sur cet ordinateur</h3><div class="table-scroll"><table class="results-table"><thead><tr><th>N°</th><th>Nom</th><th>Prénom</th></tr></thead><tbody>${studentRows}</tbody></table></div></section>
  <section class="panel results-info"><h3>Notes finales enregistrées</h3><div class="table-scroll"><table class="results-table"><thead><tr><th>N°</th><th>Nom</th><th>Prénom</th><th>Unité</th><th>Note</th><th>Bonus / Sans bonus</th><th>Total</th><th>Statut</th><th>Date</th></tr></thead><tbody>${rows}</tbody></table></div></section>`);
}
function currentUnit(){return UNITS.find(u=>u.id===state.unitId)||UNITS[0];}
function menu(unit){
  const lessonBtns = unit.lessons.map((l,i)=>`<button class="menu-btn ${state.page==='lesson'&&state.lessonIndex===i?'active':''}" data-menu="lesson" data-index="${i}"><span>${i+1}. ${esc(l.title)}</span><span>›</span></button>`).join('');
  return `<aside class="sidebar"><h3>${esc(unit.title)}</h3><button class="menu-btn ${state.page==='intro'?'active':''}" data-menu="intro">Présentation de l’unité</button>${lessonBtns}<button class="menu-btn ${state.page==='dictionary'?'active':''}" data-menu="dictionary">Jeu dictionnaire — 3 choix</button><button class="menu-btn ${state.page==='integration'?'active':''}" data-menu="integration">Situation d’intégration</button><button class="menu-btn ${state.page==='exam'?'active':''}" data-menu="exam">Contrôle final de l’unité</button></aside>`;
}
function renderUnit(){
  const unit = currentUnit();
  let content = '';
  if(state.page==='intro') content = renderUnitIntro(unit);
  if(state.page==='lesson') content = renderLesson(unit, unit.lessons[state.lessonIndex]);
  if(state.page==='dictionary') content = renderDictionary(unit);
  if(state.page==='integration') content = renderIntegration(unit);
  if(state.page==='exam') content = renderExam(unit);
  const levelClass = state.selectedLevel === '1ac' ? 'v125-unit-view v125-unit-view-1ac' : state.selectedLevel === '2ac' ? 'v125-unit-view v125-unit-view-2ac' : 'v125-unit-view';
  $('#app').innerHTML = appShell(`<section class="${levelClass}"><section class="page-title"><h2>${esc(unit.title)}</h2></section><div class="layout">${menu(unit)}<main class="content-card">${content}</main></div></section>`);
}
function renderUnitIntro(unit){
  const lessons = unit.lessons.map(l=>`<li><strong>${esc(l.title)}</strong><br><span class="subtle">Objectif : ${esc(l.objective)}</span></li>`).join('');
  const resources = (unit.officialResources||[]).map(r=>`<li>${esc(r)}</li>`).join('');
  return `<div class="section-head"><div><h2>Objectif de l’unité</h2><p>${esc(unit.intro)}</p></div><span class="pill">${esc(unit.duration||'')}</span></div><div class="official-box"><h3>Repères officiels</h3><p><strong>Compétence :</strong> ${esc(unit.competence||'')}</p><p><strong>Volume horaire :</strong> ${esc(unit.duration||'')}</p><h4>Ressources</h4><ul class="task-list">${resources}</ul></div><div class="panel"><h3>Cours et objectifs</h3><ul class="task-list">${lessons}</ul></div>`;
}
function renderLesson(unit, lesson){
  const objList = (lesson.officialObjectives||[]).map(o=>`<li>${esc(o)}</li>`).join('');
  return `<div class="section-head"><div><h2>${esc(lesson.title)}</h2><p><strong>Objectif :</strong> ${esc(lesson.objective)}</p></div><button class="btn secondary small" data-action="unit-intro">Retour unité</button></div><div class="official-box compact"><p><strong>Repère officiel :</strong> ${esc(lesson.competence||unit.competence||'')} — ${esc(lesson.officialFocus||'')}</p><h4>Objectifs</h4><ul class="objective-list">${objList}</ul></div><div class="tabs lesson-tabs-v129"><button class="tab ${state.tab==='visual'?'active':''}" data-tab="visual">1. Style visuel</button><button class="tab ${state.tab==='audio'?'active':''}" data-tab="audio">2. Style auditif</button><button class="tab ${state.tab==='kine'?'active':''}" data-tab="kine">3. Style kinesthésique</button></div><div class="learning-path-note"><strong>Enchaînement conseillé :</strong> commencer par le style visuel, poursuivre avec le style auditif, puis terminer par le style kinesthésique.</div>${state.tab==='visual'?visualPanel(lesson):state.tab==='audio'?audioPanel(lesson):kinePanel(lesson)}`;
}
function visualMediaForLesson(lesson){
  return LESSON_MEDIA[lesson.title] || [];
}

function visualExampleFor(item, lesson, index){
  const src = item && item.src ? String(item.src) : "";
  const file = src.split('/').pop();
  const exactVisualDetails = {
  "tableur-gestion-01-nouveau-classeur.jpg": {
    "title": "Créer un nouveau classeur",
    "definition": "L’image montre l’écran d’accueil d’Excel avec le choix « Nouveau classeur ». Un classeur est le fichier principal du tableur ; il contient une ou plusieurs feuilles de calcul.",
    "example": "Cliquer sur « Nouveau classeur » pour ouvrir une feuille vide et commencer le travail.",
    "action": "Ouvrir Excel → cliquer sur « Nouveau classeur » → vérifier que la grille de cellules apparaît.",
    "remember": "On commence un travail de tableur en créant ou en ouvrant un classeur."
  },
  "tableur-gestion-02-interface-classeur.jpg": {
    "title": "Repérer l’interface du tableur",
    "definition": "L’image montre les principales zones d’Excel : ruban, barre de formule, colonnes, lignes, cellules et onglet de feuille.",
    "example": "Identifier la colonne A, la ligne 1, la cellule A1, la barre de formule et l’onglet Sheet1.",
    "action": "Demander à l’élève de pointer chaque zone sur l’écran avant de commencer la saisie.",
    "remember": "Comprendre l’interface permet de retrouver rapidement les outils du tableur."
  },
  "tableur-gestion-03-enregistrer-sous.jpg": {
    "title": "Choisir Enregistrer sous",
    "definition": "L’image montre l’étape « Enregistrer sous ». Cette commande sert à choisir l’emplacement et le nom du fichier avant de le sauvegarder.",
    "example": "Cliquer sur Fichier → Enregistrer sous → Ce PC → Parcourir pour choisir le dossier de sauvegarde.",
    "action": "Lancer la commande « Enregistrer sous » avant de fermer le classeur.",
    "remember": "Enregistrer sous permet de sauvegarder le travail avec un nom précis et dans un dossier précis."
  },
  "tableur-gestion-04-nommer-enregistrer.jpg": {
    "title": "Nommer et sauvegarder le fichier",
    "definition": "L’image montre la fenêtre où l’on écrit le nom du classeur et où l’on choisit son emplacement de sauvegarde.",
    "example": "Dans la zone Nom du fichier, écrire « Tableau_Produits.xlsx », choisir le Bureau, puis cliquer sur « Enregistrer ».",
    "action": "Écrire un nom clair lié au contenu du travail, puis valider l’enregistrement.",
    "remember": "Un bon nom de fichier aide à retrouver facilement le travail plus tard."
  },
  "tableur-feuilles-cellule-adresse.png": {
    "title": "Comprendre l’adresse d’une cellule",
    "definition": "L’image met en évidence une cellule située à l’intersection d’une colonne et d’une ligne. L’adresse d’une cellule est formée par la lettre de la colonne et le numéro de la ligne.",
    "example": "Observer la cellule colorée à l’intersection de la colonne H et de la ligne 4 : son adresse est H4.",
    "action": "Cliquer sur une cellule, puis lire son adresse dans la zone de nom en haut à gauche.",
    "remember": "Une adresse de cellule ressemble à A1, B3 ou H4."
  },
  "tableur-feuilles-ajouter-feuille.png": {
    "title": "Ajouter une nouvelle feuille",
    "definition": "L’image montre le bouton « + » placé à côté de l’onglet de feuille. Ce bouton permet d’ajouter une feuille dans le même classeur.",
    "example": "Ajouter une feuille en cliquant sur le bouton « + » à côté de Sheet1.",
    "action": "Cliquer sur « + », puis vérifier qu’un nouvel onglet Sheet2 apparaît en bas du classeur.",
    "remember": "Le bouton « + » sert à créer une nouvelle feuille sans créer un nouveau fichier."
  },
  "tableur-saisie-types-donnees-formule.png": {
    "title": "Saisir plusieurs types de données",
    "definition": "L’image montre qu’une cellule peut contenir différents types de données : texte, nombre, date, heure ou formule.",
    "example": "Saisir « bonjour » comme texte, « 12345 » comme nombre, « 01/12/2026 » comme date, « 1h » comme heure, puis écrire une formule qui commence par =.",
    "action": "Cliquer dans chaque cellule vide, écrire la donnée demandée, puis valider avec Entrée.",
    "remember": "Le tableur ne traite pas tous les contenus de la même façon : texte, nombres, dates et formules ont des rôles différents."
  },
  "tableur-saisie-bordures.png": {
    "title": "Ajouter des bordures au tableau",
    "definition": "L’image montre la sélection d’un tableau et l’utilisation du menu Bordures pour tracer les limites des cellules.",
    "example": "Sélectionner le tableau des produits, cliquer sur l’outil Bordures, puis choisir « Toutes les bordures ».",
    "action": "Sélectionner la plage du tableau avant de cliquer sur le bouton Bordures.",
    "remember": "Les bordures rendent les lignes et les colonnes plus lisibles."
  },
  "tableur-saisie-couleur-remplissage.png": {
    "title": "Changer la couleur de remplissage",
    "definition": "L’image montre l’outil de couleur de remplissage. Il sert à colorer l’intérieur d’une cellule sélectionnée.",
    "example": "Sélectionner la cellule D1, cliquer sur le pot de peinture, puis choisir une couleur pour colorer l’en-tête « Total ».",
    "action": "Sélectionner d’abord la cellule, ensuite choisir la couleur de remplissage.",
    "remember": "La couleur de remplissage sert surtout à mettre en valeur les titres ou les informations importantes."
  },
  "tableur-saisie-styler-tableau.png": {
    "title": "Changer la couleur de police",
    "definition": "L’image montre l’outil Couleur de police. Il sert à changer la couleur du texte d’une cellule ou d’un en-tête.",
    "example": "Sélectionner l’en-tête du tableau, cliquer sur la lettre A soulignée, puis choisir le bleu pour colorer le texte des titres.",
    "action": "Sélectionner les cellules de l’en-tête avant de modifier la couleur du texte.",
    "remember": "La couleur de police modifie le texte, tandis que la couleur de remplissage modifie le fond de la cellule."
  },
  "tableur-saisie-avant-apres.png": {
    "title": "Comparer avant et après la mise en forme",
    "definition": "L’image compare un tableau brut et le même tableau après amélioration avec bordures, couleur d’en-tête et meilleure présentation.",
    "example": "Transformer le tableau simple de gauche en tableau organisé comme à droite : en-tête coloré, bordures visibles et données alignées.",
    "action": "Appliquer successivement les bordures, la couleur de l’en-tête et l’alignement des valeurs.",
    "remember": "La mise en forme ne change pas les données, elle améliore leur lisibilité."
  },
  "tableur-formules-01-definition-formule.png": {
    "title": "Reconnaître une formule",
    "definition": "L’image explique qu’une formule est un calcul écrit dans une cellule et qu’elle commence généralement par le signe =.",
    "example": "Dans une cellule de résultat, écrire =B2*C2 pour calculer le total à partir d’une quantité et d’un prix.",
    "action": "Commencer la saisie par =, puis utiliser les adresses des cellules au lieu d’écrire directement les nombres.",
    "remember": "Une formule permet au tableur de calculer automatiquement un résultat."
  },
  "tableur-formules-02-definition-fonction.png": {
    "title": "Reconnaître une fonction",
    "definition": "L’image présente la fonction comme une formule prête à l’emploi, par exemple SOMME, MOYENNE, MAX ou MIN.",
    "example": "Pour additionner les notes N1, N2 et N3, écrire =SOMME(A2:C2) dans la cellule Total.",
    "action": "Choisir une fonction adaptée au calcul : SOMME pour additionner, MOYENNE pour calculer une moyenne.",
    "remember": "Une fonction simplifie les calculs fréquents."
  },
  "tableur-formules-03-saisie-formule.png": {
    "title": "Saisir une fonction SOMME",
    "definition": "L’image montre la barre de formule et la saisie de la fonction =SOMME(A2,B2,C2) dans la cellule du total.",
    "example": "Dans D2, écrire exactement =SOMME(A2,B2,C2) pour additionner les valeurs 10, 12 et 11.",
    "action": "Cliquer sur D2, écrire la fonction dans la cellule ou dans la barre de formule, puis valider avec Entrée.",
    "remember": "La barre de formule permet de vérifier ou modifier la formule écrite dans la cellule active."
  },
  "tableur-formules-04-resultat-formule.png": {
    "title": "Afficher le résultat d’une formule",
    "definition": "L’image montre le résultat 33 obtenu après validation de la fonction SOMME. La formule reste visible dans la barre de formule.",
    "example": "Après avoir écrit =SOMME(A2,B2,C2), valider avec Entrée pour afficher 33 dans la cellule D2.",
    "action": "Cliquer sur la cellule D2 pour voir le résultat dans la cellule et la formule dans la barre de formule.",
    "remember": "La cellule affiche le résultat, mais la barre de formule affiche le calcul utilisé."
  },
  "tableur-formules-05-recopie-poignee.png": {
    "title": "Recopier une formule vers le bas",
    "definition": "L’image montre l’action de tirer la poignée de recopie pour appliquer la même formule aux lignes suivantes.",
    "example": "Sélectionner D2, placer la souris sur la petite poignée en bas à droite, puis tirer jusqu’à D6.",
    "action": "Tirer la poignée de recopie vers le bas pour compléter automatiquement les totaux des autres lignes.",
    "remember": "La recopie évite de réécrire la même formule plusieurs fois."
  },
  "tableur-formules-06-recopie-tirer.png": {
    "title": "Repérer la poignée de recopie",
    "definition": "L’image montre la petite poignée placée dans le coin inférieur droit de la cellule sélectionnée. Elle sert à copier le contenu ou la formule.",
    "example": "Cliquer sur D2, repérer le petit carré au coin inférieur droit, puis préparer le glissement vers les cellules du bas.",
    "action": "Attendre que le pointeur soit placé sur la poignée avant de tirer.",
    "remember": "La poignée de recopie apparaît quand une cellule est sélectionnée."
  },
  "tableur-formules-07-recopie-resultat.png": {
    "title": "Observer les résultats de la recopie",
    "definition": "L’image montre les résultats calculés automatiquement dans plusieurs lignes après la recopie de la formule.",
    "example": "Après la recopie de D2 vers D6, vérifier que les résultats obtenus sont 33, 20, 24, 23 et 25.",
    "action": "Comparer chaque total avec les valeurs de la même ligne pour vérifier le calcul.",
    "remember": "Après la recopie, le tableur adapte la formule à chaque ligne."
  },
  "spreadsheet-charts.svg": {
    "title": "Créer un graphique à partir d’un tableau",
    "definition": "L’image représente le passage des données du tableau vers un graphique. Un graphique sert à visualiser et comparer rapidement les valeurs.",
    "example": "Sélectionner les noms des produits et leurs totaux, puis insérer un graphique en colonnes pour comparer les ventes.",
    "action": "Sélectionner uniquement les données utiles avant de choisir le type de graphique.",
    "remember": "Un graphique doit correspondre aux données que l’on veut comparer."
  },
  "logo-environnement.png": {
    "title": "Découvrir l’environnement LOGO",
    "definition": "L’image montre l’espace de travail LOGO : la zone de dessin, la tortue et la zone de saisie des commandes.",
    "example": "Repérer la tortue au centre, puis repérer la ligne où l’on écrit une commande comme AV 50.",
    "action": "Observer les zones de l’interface avant d’écrire la première instruction.",
    "remember": "Dans LOGO, on écrit des commandes pour déplacer la tortue et dessiner."
  },
  "logo-menu-configuration.png": {
    "title": "Ouvrir la configuration",
    "definition": "L’image montre le menu qui permet d’accéder aux paramètres de LOGO, comme l’apparence de la tortue ou l’environnement.",
    "example": "Cliquer sur le menu de configuration affiché dans l’image pour ouvrir les paramètres de la tortue.",
    "action": "Ouvrir le menu, puis chercher l’option liée à la configuration de la tortue.",
    "remember": "La configuration sert à préparer l’environnement avant de travailler."
  },
  "logo-configuration-tortue.png": {
    "title": "Configurer la tortue",
    "definition": "L’image montre une fenêtre de configuration qui permet de modifier certains paramètres de la tortue LOGO.",
    "example": "Choisir une forme de tortue dans la fenêtre de configuration, puis valider avec OK.",
    "action": "Modifier un seul paramètre à la fois pour voir son effet dans l’espace de dessin.",
    "remember": "La configuration change l’apparence ou le comportement de l’environnement, pas l’algorithme lui-même."
  },
  "logo-instruction-av.png": {
    "title": "Avancer avec AV",
    "definition": "L’image montre l’instruction AV. Elle fait avancer la tortue dans la direction où elle regarde.",
    "example": "Écrire AV 50 pour faire avancer la tortue de 50 pas et tracer un segment.",
    "action": "Saisir AV 50 dans la zone de commande, puis appuyer sur Entrée.",
    "remember": "AV signifie avancer."
  },
  "logo-instruction-re.png": {
    "title": "Reculer avec RE",
    "definition": "L’image montre l’instruction RE. Elle fait reculer la tortue sans changer sa direction.",
    "example": "Écrire RE 50 pour faire reculer la tortue de 50 pas.",
    "action": "Saisir RE 50, puis observer que la tortue revient en arrière.",
    "remember": "RE signifie reculer."
  },
  "logo-angle-orientation.png": {
    "title": "Comprendre l’orientation et l’angle",
    "definition": "L’image explique que la tortue se déplace selon une direction et peut tourner d’un certain angle.",
    "example": "Pour faire un angle droit, utiliser 90 degrés avec TD 90 ou TG 90.",
    "action": "Comparer une rotation de 45 degrés et une rotation de 90 degrés pour voir la différence.",
    "remember": "L’angle indique de combien la tortue doit tourner."
  },
  "logo-instruction-td.png": {
    "title": "Tourner à droite avec TD",
    "definition": "L’image montre l’instruction TD. Elle fait tourner la tortue vers la droite selon l’angle indiqué.",
    "example": "Écrire AV 50 TD 90 pour avancer de 50 pas puis tourner à droite de 90 degrés.",
    "action": "Exécuter l’exemple, puis ajouter AV 50 pour dessiner un deuxième segment à droite.",
    "remember": "TD signifie tourner à droite."
  },
  "logo-instruction-tg.png": {
    "title": "Tourner à gauche avec TG",
    "definition": "L’image montre l’instruction TG. Elle fait tourner la tortue vers la gauche selon l’angle indiqué.",
    "example": "Écrire AV 50 TG 90 pour avancer de 50 pas puis tourner à gauche de 90 degrés.",
    "action": "Exécuter l’exemple, puis ajouter AV 50 pour dessiner un deuxième segment à gauche.",
    "remember": "TG signifie tourner à gauche."
  },
  "logo-instruction-crayon.png": {
    "title": "Lever et baisser le crayon",
    "definition": "L’image montre l’effet des commandes liées au crayon : quand le crayon est levé, la tortue se déplace sans tracer ; quand il est baissé, elle trace.",
    "example": "Écrire BC AV 20 pour tracer un petit segment, puis écrire LC AV 100 pour avancer sans tracer.",
    "action": "Comparer les deux déplacements visibles dans l’image : avec BC il y a une trace, avec LC il n’y a pas de trace.",
    "remember": "BC baisse le crayon ; LC lève le crayon."
  },
  "logo-instruction-ve.png": {
    "title": "Effacer l’écran avec VE",
    "definition": "L’image montre l’instruction VE. Elle efface le dessin et remet l’espace de travail propre.",
    "example": "Après avoir dessiné plusieurs segments, écrire VE pour vider l’écran.",
    "action": "Tracer un segment avec AV 50, puis écrire VE pour vérifier que le dessin disparaît.",
    "remember": "VE signifie vider l’écran."
  },
  "logo-instruction-fcfg.png": {
    "title": "Changer la couleur du fond",
    "definition": "L’image montre l’instruction FCFG qui modifie la couleur de fond de la zone de dessin.",
    "example": "Écrire FCFG 12 pour changer la couleur de fond selon le code couleur utilisé par LOGO.",
    "action": "Tester un code couleur, observer le changement, puis utiliser VE si nécessaire.",
    "remember": "Les couleurs sont souvent choisies avec des codes numériques."
  },
  "logo-instruction-repetition-syntax.png": {
    "title": "Comprendre la syntaxe de REPETE",
    "definition": "L’image montre la structure de l’instruction de répétition : REPETE nombre [instructions].",
    "example": "Écrire REPETE 4 [AV 60 TD 90] pour répéter quatre fois l’avancée et le virage afin de tracer un carré.",
    "action": "Respecter les crochets : les instructions à répéter doivent être placées entre [ et ].",
    "remember": "REPETE évite d’écrire plusieurs fois les mêmes instructions."
  },
  "logo-instruction-repetition-repete3.png": {
    "title": "Répéter une séquence trois fois",
    "definition": "L’image montre un exemple de répétition où une même séquence d’instructions est exécutée plusieurs fois.",
    "example": "Écrire REPETE 3 [AV 100 TD 50] pour répéter trois fois : avancer de 100 pas puis tourner à droite de 50 degrés.",
    "action": "Changer seulement le nombre 3 pour voir comment le dessin change.",
    "remember": "Le nombre après REPETE indique combien de fois la séquence sera exécutée."
  },
  "logo-repeat-procedure-pour.png": {
    "title": "Créer une procédure avec POUR",
    "definition": "L’image montre une procédure LOGO. Une procédure est un bloc d’instructions qui porte un nom, commence par POUR et se termine par FIN.",
    "example": "Créer la procédure CARRE avec : POUR CARRE, puis REPETE 4 [AV 60 TD 90], puis FIN.",
    "action": "Après avoir défini la procédure, écrire CARRE pour exécuter directement le dessin du carré.",
    "remember": "Une procédure permet de réutiliser facilement un ensemble d’instructions."
  },
  "logo-repeat-ecris-message.png": {
    "title": "Écrire un message avec ECRIS",
    "definition": "L’image montre l’instruction ECRIS. Elle affiche un texte dans la zone de dessin.",
    "example": "Écrire ECRIS \"bonjour je suis youssra \" pour afficher exactement ce message près de la tortue.",
    "action": "Mettre le message entre guillemets pour que LOGO le considère comme un texte à afficher.",
    "remember": "ECRIS sert à afficher un texte, pas à déplacer la tortue."
  }  ,
  "information-donnee-information-connaissance.png": {
    "title": "Comprendre donnée, information et connaissance",
    "definition": "L’image montre trois niveaux : la donnée, l’information et la connaissance. La donnée est brute. Quand on donne un contexte et un sens à la donnée, on obtient une information. Quand cette information est comprise et assimilée, elle devient une connaissance.",
    "example": "Exemple simple : le nombre 15 est une donnée. La phrase « 15 élèves sont présents aujourd’hui » est une information. Le fait de comprendre que la classe est presque complète correspond à une connaissance.",
    "action": "Lire le schéma du haut vers le bas, puis demander à l’élève de donner un exemple de donnée, d’information et de connaissance.",
    "remember": "La donnée est la base ; l’information est une donnée qui a du sens ; la connaissance est une information comprise."
  },
  "informatique-traitement-donnees.png": {
    "title": "L’informatique traite les données",
    "definition": "L’image illustre le rôle de l’informatique. L’ordinateur reçoit des données, les traite à l’aide de logiciels et produit des informations utiles sous forme de résultats visibles.",
    "example": "Un élève saisit des notes dans l’ordinateur. Le logiciel les traite et affiche un tableau ou un graphique. Les données de départ deviennent alors des informations utiles.",
    "action": "Observer les éléments visibles sur l’écran, puis expliquer que l’ordinateur transforme les données en résultats exploitables.",
    "remember": "L’informatique consiste à traiter automatiquement des données pour produire des informations."
  },
  "systeme-informatique-interface.png": {
    "title": "Identifier le système informatique",
    "definition": "L’image montre qu’un système informatique relie l’utilisateur à un noyau fonctionnel à travers une interface. L’utilisateur donne une commande, l’interface la transmet et le système réalise le traitement demandé.",
    "example": "Quand l’élève clique sur une icône, l’interface transmet l’action au système qui ouvre le programme demandé.",
    "action": "Demander à l’élève d’identifier les trois éléments visibles : l’utilisateur, l’interface et le noyau fonctionnel.",
    "remember": "Un système informatique organise la relation entre l’utilisateur, les moyens de communication et le traitement."
  },
  "connectivite-bluetooth.png": {
    "title": "Connexion par Bluetooth",
    "definition": "L’image montre une connectivité Bluetooth entre plusieurs appareils proches. Le Bluetooth est une liaison sans fil à courte distance.",
    "example": "On peut connecter un téléphone à une imprimante, un casque ou un autre ordinateur par Bluetooth pour échanger des données.",
    "action": "Repérer le symbole Bluetooth au centre, puis citer deux appareils qui peuvent être reliés sans câble.",
    "remember": "Le Bluetooth sert à connecter des appareils proches sans utiliser de câble."
  },
  "connectivite-wifi.png": {
    "title": "Connexion par Wi‑Fi",
    "definition": "L’image montre une connectivité Wi‑Fi. Le Wi‑Fi relie plusieurs appareils sans fil à un même réseau ou à Internet.",
    "example": "Un routeur Wi‑Fi peut connecter un ordinateur, une télévision, un téléphone et une tablette au même réseau.",
    "action": "Observer les appareils autour du symbole Wi‑Fi, puis expliquer qu’ils communiquent sans câble.",
    "remember": "Le Wi‑Fi permet une connexion sans fil entre plusieurs appareils et le réseau."
  },
  "connectivite-usb.png": {
    "title": "Connexion par câble USB",
    "definition": "L’image montre une connectivité par câble USB entre un téléphone et un ordinateur. Cette liaison peut servir au transfert de données ou à la recharge.",
    "example": "Relier un téléphone à un ordinateur par USB permet de copier des photos ou de recharger l’appareil.",
    "action": "Identifier le câble, puis demander à l’élève de citer son utilité principale dans cette situation.",
    "remember": "Le câble USB réalise une connexion physique entre deux appareils."
  },
  "logiciels-suite-apps.png": {
    "title": "Exemples de logiciels et d’applications",
    "definition": "L’image présente plusieurs logiciels ou applications utilisés pour des tâches précises : envoyer un mail, écrire un document, faire un tableau, stocker des fichiers ou communiquer.",
    "example": "Microsoft Word et Google Docs servent à écrire ; Excel et Google Sheets servent au tableur ; Gmail et Outlook servent à la messagerie.",
    "action": "Choisir deux exemples dans l’image et expliquer leur rôle. Préciser que le mot application ou app a presque le même sens que logiciel pour l’utilisateur.",
    "remember": "Un logiciel ou une application est un programme qui aide l’utilisateur à accomplir une tâche précise."
  },
  "logiciels-systemes-exploitation.png": {
    "title": "Systèmes d’exploitation essentiels",
    "definition": "L’image montre différents systèmes d’exploitation : Windows, Mac OS, Linux, iOS et Android. Ce sont des logiciels essentiels au fonctionnement des appareils.",
    "example": "Sans système d’exploitation, l’ordinateur ou le téléphone ne peut pas démarrer correctement ni lancer les autres logiciels.",
    "action": "Nommer les systèmes d’exploitation visibles, puis expliquer pourquoi ils sont nécessaires au fonctionnement du PC ou du téléphone.",
    "remember": "Le système d’exploitation est un logiciel essentiel qui fait fonctionner l’appareil et gère les autres logiciels."
  },
  "application-smartphone.png": {
    "title": "Comprendre la notion d’application mobile",
    "definition": "L’image montre plusieurs icônes d’applications installées sur un téléphone. Une application mobile est un logiciel léger conçu pour répondre à un besoin précis.",
    "example": "WhatsApp sert à communiquer, YouTube à regarder des vidéos, Canva à créer, et Google Maps à se repérer.",
    "action": "Demander à l’élève de choisir trois applications visibles et d’expliquer à quoi elles servent.",
    "remember": "Une application est un logiciel souvent installé sur le téléphone pour réaliser une tâche précise."
  }
  ,
  "os-systemes-exploitation.png": {
    "title": "Exemples de systèmes d’exploitation",
    "definition": "L’image montre plusieurs systèmes d’exploitation : Windows, Mac OS, Linux, iOS et Android. Un système d’exploitation est le logiciel principal qui fait fonctionner l’ordinateur, la tablette ou le téléphone.",
    "example": "Sur un ordinateur, Windows ou Linux peut être le système d’exploitation. Sur un téléphone, Android ou iOS joue le même rôle.",
    "action": "Observer les logos, puis demander à l’élève de citer deux systèmes d’exploitation pour ordinateur et deux pour téléphone.",
    "remember": "Le système d’exploitation est indispensable au fonctionnement de l’appareil."
  },
  "fenetre-exemple-explorateur.png": {
    "title": "Exemple d’une fenêtre",
    "definition": "L’image montre une fenêtre de l’explorateur de fichiers. Une fenêtre est un cadre affiché à l’écran qui permet de voir et de manipuler un programme, un document ou un dossier.",
    "example": "Quand l’élève ouvre le dossier Images, une fenêtre s’affiche avec la barre de titre, les menus, les dossiers et les boutons de commande.",
    "action": "Demander à l’élève d’identifier les parties visibles de la fenêtre et de repérer les boutons en haut à droite.",
    "remember": "Une fenêtre sert à afficher et manipuler le contenu d’un programme ou d’un dossier."
  },
  "fenetre-fermer.png": {
    "title": "Fermer une fenêtre",
    "definition": "L’image montre le bouton Fermer représenté par la lettre X. Ce bouton permet de quitter la fenêtre affichée.",
    "example": "Quand l’élève termine son travail dans une fenêtre, il peut cliquer sur X pour la fermer.",
    "action": "Repérer le bouton X en haut à droite, puis expliquer son rôle sans l’utiliser par erreur pendant le travail.",
    "remember": "Le bouton X sert à fermer la fenêtre."
  },
  "fenetre-agrandir.png": {
    "title": "Agrandir une fenêtre",
    "definition": "L’image montre le bouton Agrandir représenté par un carré. Ce bouton permet d’augmenter la taille de la fenêtre à l’écran.",
    "example": "Quand une fenêtre est trop petite, l’élève peut cliquer sur le carré pour l’agrandir et mieux voir le contenu.",
    "action": "Montrer le bouton carré, puis demander à l’élève d’expliquer quand il peut être utile d’agrandir la fenêtre.",
    "remember": "Le bouton carré sert à agrandir la fenêtre."
  },
  "fenetre-reduire.png": {
    "title": "Réduire une fenêtre",
    "definition": "L’image montre le bouton Réduire. Réduire une fenêtre permet de la cacher temporairement dans la barre des tâches sans la fermer.",
    "example": "Si l’élève veut revenir au bureau sans fermer l’explorateur, il peut réduire la fenêtre puis la rouvrir depuis la barre des tâches.",
    "action": "Repérer le bouton Réduire et expliquer qu’il masque la fenêtre sans supprimer le travail en cours.",
    "remember": "Réduire une fenêtre la cache temporairement sans la fermer."
  }
  ,
  "bureau-windows7-poste-travail.png": {
    "title": "Identifier les éléments du poste de travail",
    "definition": "L’image montre le bureau de Windows 7 avec ses éléments principaux : les icônes, le fond d’écran, le bouton Démarrer, la barre des tâches et la zone de notification.",
    "example": "Quand l’élève allume l’ordinateur et ouvre sa session, il voit le bureau. Il peut cliquer sur une icône pour ouvrir un programme, utiliser le bouton Démarrer pour accéder aux outils et lire l’heure dans la zone de notification.",
    "action": "Demander à l’élève d’identifier chaque élément visible sur l’image : les icônes, le fond d’écran, la barre des tâches, le bouton Démarrer et la zone de notification.",
    "remember": "Le poste de travail ou bureau regroupe les principaux éléments qui permettent à l’utilisateur d’accéder rapidement aux programmes et aux informations du système."
  }
  ,
  "information-type-message-sms.png": {
    "title": "Type d’information : message",
    "definition": "L’image montre un SMS. Un message est un type d’information transmis d’une personne à une autre. Il contient un contenu écrit qui a un sens pour le destinataire.",
    "example": "Le message « Rendez-vous à 10h » est une information écrite envoyée par téléphone.",
    "action": "Observer l’image, puis demander à l’élève de citer d’autres exemples de messages : SMS, e-mail ou message WhatsApp.",
    "remember": "Un message est un type d’information.",
  },
  "information-type-image-reseau.png": {
    "title": "Type d’information : image",
    "definition": "L’image montre un schéma de plusieurs ordinateurs reliés entre eux. Une image ou un schéma est aussi un type d’information, car il transmet une idée de façon visuelle.",
    "example": "Le schéma visible dans l’image informe l’élève qu’il existe des ordinateurs connectés entre eux dans un réseau.",
    "action": "Faire observer le dessin, puis demander à l’élève ce qu’il comprend à partir de cette image.",
    "remember": "Une image peut transmettre une information sans utiliser beaucoup de texte."
  }

};
  if(exactVisualDetails[file]) return exactVisualDetails[file];
  const lessonTitle = lesson && lesson.title ? lesson.title : "notion";
  const fallbackTitle = item && item.title ? item.title : `Image ${index + 1}`;
  return {
    title: fallbackTitle,
    definition: `Cette image illustre une notion de la leçon « ${lessonTitle} ».`,
    example: "Observer l’élément visible dans l’image, puis réaliser la même action dans le logiciel.",
    action: "Cliquer sur l’image pour lire la consigne, puis reproduire exactement l’action demandée.",
    remember: "L’exemple doit toujours correspondre à ce qui est visible dans l’image."
  };
}

function visualDetailHtml(item, lesson, index){
  const d = visualExampleFor(item, lesson, index);
  return `<div class="visual-example-box" aria-hidden="true">
    <h5>Exemple à lire</h5>
    <p><strong>Exemple :</strong> ${esc(d.example)}</p>
    <p><strong>Action :</strong> ${esc(d.action)}</p>
    <p><strong>À retenir :</strong> ${esc(d.remember)}</p>
  </div>`;
}


function tableurInteractiveVisualCard(item, index, lesson){
  const detail = visualExampleFor(item, lesson, index);
  const title = detail.title || item.title || `Image ${index + 1}`;
  return `<figure class="media-card image-description-card tableur-image-card clickable-visual-card" data-clickable-visual tabindex="0" role="button" aria-expanded="false">
    <div class="visual-definition-top"><span>Définition de l’image</span><strong>${esc(title)}</strong><p>${esc(detail.definition)}</p></div>
    <div class="visual-click-zone"><img src="${esc(item.src)}" alt="${esc(item.alt || title)}"><span class="visual-click-hint">Lire l’exemple</span></div>
    ${visualDetailHtml(item, lesson, index)}
  </figure>`;
}

function logoInteractiveVisualCard(item, index, lesson){
  const detail = visualExampleFor(item, lesson, index);
  const title = detail.title || item.title || `Image ${index + 1}`;
  return `<figure class="logo-image-card clickable-visual-card" data-clickable-visual tabindex="0" role="button" aria-expanded="false">
    <div class="logo-image-title"><span>${index + 1}</span><h4>${esc(title)}</h4></div>
    <div class="visual-definition-top"><span>Définition de l’image</span><p>${esc(detail.definition)}</p></div>
    <div class="visual-click-zone"><img src="${esc(item.src)}" alt="${esc(item.alt || title)}"><span class="visual-click-hint">Lire l’exemple</span></div>
    ${visualDetailHtml(item, lesson, index)}
  </figure>`;
}

function isTableurLesson(lesson){
  return !!lesson && [
    "Gestion d’un fichier tableur",
    "Feuilles, cellules et adresses",
    "Saisie des données et mise en forme d’un tableau",
    "Formules, fonctions et recopie",
    "Graphiques, mise en page et impression"
  ].includes(lesson.title);
}

function tableurImageOnlyVisualPanel(lesson){
  const media = visualMediaForLesson(lesson);
  const intro = lesson.title === "Gestion d’un fichier tableur" ? `
    <div class="visual-intro-card">
      <h4>Présentation des tableurs</h4>
      <p>Un tableur est un logiciel qui permet d’organiser les données dans des feuilles, des lignes, des colonnes et des cellules. Il existe plusieurs tableurs : <strong>Microsoft Excel</strong>, <strong>Google Sheets</strong>, <strong>LibreOffice Calc</strong>… Parmi eux, Excel est très utilisé pour saisir des données, appliquer des formules, créer des tableaux et obtenir des graphiques.</p>
    </div>` : "";
  const gallery = media.length
    ? media.map((item,i)=>tableurInteractiveVisualCard(item, i, lesson)).join("")
    : tableurInteractiveVisualCard({src:"assets/logo.svg", title:"Illustration", caption:"Image explicative liée au cours.", alt:"Illustration"}, 0, lesson);
  return `<section class="panel visual-panel"><div class="visual-layout"><div class="style-header"><div><span class="mini-pill">Style visuel</span><h3>${esc(lesson.title)}</h3></div><p class="subtle">Chaque image contient une définition claire en haut. Clique ensuite sur « Lire l’exemple » pour obtenir l’action exacte à réaliser.</p></div>${intro}<div class="visual-gallery image-only-grid clickable-visual-grid">${gallery}</div></div></section>`;
}
const VISUAL_DEFINITIONS = {
  "Système informatique":["Ensemble formé par le matériel, les logiciels et l’utilisateur pour traiter l’information.","مجموعة تتكون من العتاد والبرمجيات والمستعمل لمعالجة المعلومات."],
  "Unité centrale":["Boîtier principal qui contient les éléments essentiels de traitement et de stockage.","الصندوق الرئيسي الذي يحتوي على العناصر الأساسية للمعالجة والتخزين."],
  "Écran":["Périphérique de sortie qui affiche les textes, les images et les résultats.","ملحق للإخراج يعرض النصوص والصور والنتائج."],
  "Clavier":["Périphérique d’entrée utilisé pour saisir des lettres, des nombres et des commandes.","ملحق للإدخال يستعمل لكتابة الحروف والأرقام والأوامر."],
  "Souris":["Périphérique d’entrée utilisé pour pointer, sélectionner et cliquer.","ملحق للإدخال يستعمل للتوجيه والاختيار والنقر."],
  "Imprimante":["Périphérique de sortie qui produit un document sur papier.","ملحق للإخراج ينتج وثيقة على الورق."],
  "Mémoire":["Élément qui conserve temporairement ou durablement les données utilisées par l’ordinateur.","عنصر يحتفظ مؤقتا أو دائما بالمعطيات التي يستعملها الحاسوب."],
  "Périphériques":["Éléments connectés à l’unité centrale pour entrer, sortir ou stocker l’information.","عناصر متصلة بالوحدة المركزية لإدخال أو إخراج أو تخزين المعلومات."],
  "Branchements":["Connexions nécessaires entre l’ordinateur, les périphériques et l’alimentation.","الروابط الضرورية بين الحاسوب والملحقات ومصدر الكهرباء."],
  "Poste prêt":["État où les périphériques sont correctement branchés et le poste peut être utilisé.","حالة يكون فيها الحاسوب متصلا بشكل صحيح وجاهزا للاستعمال."],
  "Postes":["Ordinateurs connectés dans un même réseau local.","حواسيب متصلة داخل نفس الشبكة المحلية."],
  "Switch":["Équipement réseau qui relie plusieurs ordinateurs dans un réseau local.","جهاز شبكي يربط عدة حواسيب داخل شبكة محلية."],
  "Partage":["Action de rendre une ressource accessible à plusieurs utilisateurs du réseau.","عملية جعل مورد معين متاحا لعدة مستعملين في الشبكة."],
  "Utilisateur":["Personne qui accède au réseau avec un compte et des droits précis.","شخص يلج إلى الشبكة باستعمال حساب وصلاحيات محددة."],
  "Dossier partagé":["Dossier accessible depuis plusieurs postes selon les droits accordés.","مجلد يمكن الوصول إليه من عدة حواسيب حسب الصلاحيات المحددة."],
  "Imprimante partagée":["Imprimante utilisée par plusieurs postes à travers le réseau local.","طابعة يستعملها عدة حواسيب عبر الشبكة المحلية."],
  "Droits d’accès":["Autorisations qui précisent ce que l’utilisateur peut faire : lire, modifier ou imprimer.","صلاحيات تحدد ما يستطيع المستعمل القيام به: القراءة أو التعديل أو الطباعة."],
  "Poste A":["Ordinateur qui envoie l’information dans le réseau.","الحاسوب الذي يرسل المعلومة داخل الشبكة."],
  "Poste B":["Ordinateur qui reçoit l’information envoyée dans le réseau.","الحاسوب الذي يستقبل المعلومة المرسلة داخل الشبكة."],
  "Message ou fichier":["Information transmise d’un poste à un autre.","معلومة يتم إرسالها من حاسوب إلى آخر."],
  "Réseau local":["Réseau qui relie des ordinateurs dans un espace limité comme une salle ou un établissement.","شبكة تربط حواسيب داخل فضاء محدود مثل قاعة أو مؤسسة."],
  "Rédiger":["Écrire un message clair avant de l’envoyer.","كتابة رسالة واضحة قبل إرسالها."],
  "Choisir destinataire":["Sélectionner la personne ou le poste qui va recevoir le message.","اختيار الشخص أو الحاسوب الذي سيتوصل بالرسالة."],
  "Envoyer":["Transmettre le message ou le fichier à travers le réseau.","إرسال الرسالة أو الملف عبر الشبكة."],
  "Lire la réponse":["Consulter le message reçu et vérifier son contenu.","قراءة الرسالة المستقبلة والتحقق من محتواها."],
  "Envoyer un fichier":["Transférer un document à un autre utilisateur en utilisant un nom clair.","إرسال وثيقة إلى مستعمل آخر باستعمال اسم واضح."],
  "Écrire un message":["Rédiger un contenu poli, court et compréhensible.","كتابة محتوى مهذب ومختصر ومفهوم."],
  "Recevoir un fichier":["Télécharger ou ouvrir le fichier reçu puis vérifier son contenu.","تحميل أو فتح الملف المستلم ثم التحقق من محتواه."],
  "Travailler en groupe":["Collaborer avec les autres tout en respectant les règles.","التعاون مع الآخرين مع احترام القواعد."],
  "Créer":["Commencer un nouveau fichier ou document.","بدء ملف أو وثيقة جديدة."],
  "Nommer":["Donner un nom clair au fichier pour le retrouver facilement.","إعطاء اسم واضح للملف لتسهيل العثور عليه."],
  "Enregistrer":["Sauvegarder le fichier pour ne pas perdre le travail.","حفظ الملف حتى لا يضيع العمل."],
  "Retrouver":["Ouvrir le fichier sauvegardé depuis son emplacement.","فتح الملف المحفوظ من مكانه."],
  "Tableur":["Logiciel qui organise les données dans des feuilles, lignes, colonnes et cellules.","برنامج ينظم المعطيات في أوراق وصفوف وأعمدة وخلايا."],
  "Classeur":["Fichier tableur qui contient une ou plusieurs feuilles.","ملف جدول ممتد يحتوي على ورقة أو عدة أوراق."],
  "Feuille":["Page de travail du classeur composée de lignes et de colonnes.","صفحة عمل داخل المصنف تتكون من صفوف وأعمدة."],
  "Ligne":["Suite horizontale de cellules identifiée par un nombre.","مجموعة أفقية من الخلايا يرمز إليها برقم."],
  "Colonne":["Suite verticale de cellules identifiée par une lettre.","مجموعة عمودية من الخلايا يرمز إليها بحرف."],
  "Cellule":["Intersection d’une ligne et d’une colonne où l’on saisit une donnée.","تقاطع صف وعمود، وتكتب فيه المعطيات."],
  "Adresse":["Référence d’une cellule formée par la lettre de colonne et le numéro de ligne, comme A1.","مرجع الخلية ويتكون من حرف العمود ورقم الصف مثل A1."],
  "Titre clair":["Titre qui indique immédiatement le sujet du tableau.","عنوان يوضح مباشرة موضوع الجدول."],
  "Bordures":["Traits qui délimitent les cellules et rendent le tableau lisible.","خطوط تحدد الخلايا وتجعل الجدول أكثر وضوحا."],
  "Alignement":["Position du contenu dans la cellule : gauche, centre ou droite.","موضع المحتوى داخل الخلية: يسار أو وسط أو يمين."],
  "Format nombre":["Présentation adaptée aux nombres : décimales, monnaie ou pourcentage.","عرض مناسب للأعداد: أرقام عشرية أو عملة أو نسبة مئوية."],
  "Couleurs sobres":["Couleurs claires qui organisent le tableau sans gêner la lecture.","ألوان واضحة تنظم الجدول دون إزعاج القراءة."],
  "Données":["Valeurs saisies dans les cellules : texte, nombre ou date.","قيم تكتب داخل الخلايا: نص أو عدد أو تاريخ."],
  "Formule":["Expression qui commence par = ou + pour calculer un résultat.","تعبير يبدأ بـ = أو + لحساب نتيجة."],
  "Fonction":["Formule prête à l’emploi comme SOMME, MOYENNE, MAX ou MIN.","صيغة جاهزة للاستعمال مثل SOMME وMOYENNE وMAX وMIN."],
  "Résultat":["Valeur obtenue après le calcul d’une formule ou d’une fonction.","القيمة التي نحصل عليها بعد حساب صيغة أو دالة."],
  "Graphique":["Représentation visuelle qui facilite la comparaison des données.","تمثيل بصري يسهل مقارنة المعطيات."],
  "Titre du graphique":["Texte qui indique le sujet représenté par le graphique.","نص يوضح موضوع المبيان."],
  "Mise en page":["Organisation du document avant l’impression.","تنظيم الوثيقة قبل الطباعة."],
  "Aperçu":["Vérification visuelle du document avant de l’imprimer.","معاينة الوثيقة قبل طباعتها."],
  "LOGO":["Langage de programmation éducatif où la tortue exécute des commandes graphiques.","لغة برمجة تعليمية تنفذ فيها السلحفاة أوامر رسومية."],
  "Tortue":["Curseur graphique qui se déplace selon les instructions LOGO.","مؤشر رسومي يتحرك حسب أوامر LOGO."],
  "Zone de commandes":["Espace où l’on écrit les instructions à exécuter.","المكان الذي تكتب فيه التعليمات لتنفيذها."],
  "Programme":["Suite d’instructions écrites dans un ordre précis pour résoudre un problème ou obtenir un résultat.","مجموعة من التعليمات المكتوبة بترتيب دقيق لحل مشكل أو الحصول على نتيجة."],
  "Langage de programmation":["Langage spécial utilisé pour écrire des instructions que l’ordinateur peut comprendre et exécuter.","لغة خاصة نستعملها لكتابة تعليمات يستطيع الحاسوب فهمها وتنفيذها."],
  "Programmation LOGO":["Programmation éducative où l’élève commande une tortue graphique pour tracer des dessins et comprendre l’ordre des instructions.","برمجة تعليمية يوجه فيها المتعلم سلحفاة رسومية لرسم أشكال وفهم ترتيب التعليمات."],
  "Exécution":["Moment où l’ordinateur applique les instructions écrites.","لحظة تطبيق الحاسوب للتعليمات المكتوبة."],
  "AV 100":["Instruction LOGO qui fait avancer la tortue de 100 pas.","تعليمة LOGO تجعل السلحفاة تتقدم 100 خطوة."],
  "TD 90":["Instruction qui fait tourner la tortue à droite de 90 degrés.","تعليمة تجعل السلحفاة تدور يمينا بـ 90 درجة."],
  "AV 50":["Instruction qui fait avancer la tortue de 50 pas.","تعليمة تجعل السلحفاة تتقدم 50 خطوة."],
  "TG 90":["Instruction qui fait tourner la tortue à gauche de 90 degrés.","تعليمة تجعل السلحفاة تدور يسارا بـ 90 درجة."],
  "REPETE 4":["Instruction qui répète quatre fois le bloc placé entre crochets.","تعليمة تكرر أربع مرات الأوامر الموجودة بين المعقوفين."],
  "[ AV 80 TD 90 ]":["Bloc d’instructions à répéter pour dessiner un carré.","مجموعة أوامر يتم تكرارها لرسم مربع."],
  "Carré":["Figure obtenue par quatre côtés égaux et quatre angles droits.","شكل يتكون من أربعة أضلاع متساوية وأربع زوايا قائمة."],
  "Programme court":["Programme simplifié grâce à l’utilisation de la répétition.","برنامج مختصر بفضل استعمال التكرار."],
  "Nom de procédure":["Nom qui permet d’identifier et d’appeler la procédure.","اسم يسمح بتحديد الإجراء واستدعائه."],
  "Instructions":["Commandes placées à l’intérieur d’une procédure.","أوامر توضع داخل الإجراء."],
  "Sauvegarde":["Action de conserver la procédure pour l’utiliser plus tard.","عملية حفظ الإجراء لاستعماله لاحقا."],
  "Appel":["Utilisation du nom de la procédure pour l’exécuter.","استعمال اسم الإجراء لتنفيذه."],
  "default":["Élément important du cours. Clique sur les autres composants pour afficher leurs définitions.","عنصر مهم في الدرس. انقر على باقي المكونات لعرض تعريفاتها."]
};
function defFor(label){return VISUAL_DEFINITIONS[label] || VISUAL_DEFINITIONS.default;}
function visualNodes(lesson){
  const v=lesson.visual||{};
  if(v.center && Array.isArray(v.items)) return [v.center, ...v.items];
  if(Array.isArray(v.steps)) return v.steps;
  if(Array.isArray(v.items)) return v.items;
  if(Array.isArray(v.rows)) return v.rows.map(r=>r[0]);
  return lesson.drag ? lesson.drag.map(d=>d[0]) : [lesson.title];
}
function visualSteps(lesson){
  const v=lesson.visual||{};
  if(Array.isArray(v.steps)) return v.steps.map((s,i)=>({title:s, text:defFor(s)[0]}));
  if(Array.isArray(v.items)) return v.items.map((s,i)=>({title:s, text:defFor(s)[0]}));
  if(Array.isArray(v.rows)) return v.rows.map(r=>({title:r[0], text:r[1] + '. ' + defFor(r[0])[0]}));
  if(lesson.order && Array.isArray(lesson.order.steps)) return lesson.order.steps.map(s=>({title:s, text:defFor(s)[0]}));
  return visualNodes(lesson).slice(0,4).map(s=>({title:s, text:defFor(s)[0]}));
}
function uniqueByTitle(items){
  const seen = new Set();
  return items.filter(item=>{
    const key = String(item.title || item.q || '').toLowerCase();
    if(seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function teacherSheetHtml(lesson){
  const steps = uniqueByTitle(visualSteps(lesson)).slice(0,6);
  const objectiveItems = (lesson.officialObjectives||[]).slice(0,4).map(o=>`<li>${esc(o)}</li>`).join('');
  const pointCards = steps.map((st,i)=>`<article class="course-point"><span class="num">${i+1}</span><h4>${esc(st.title)}</h4><p>${esc(st.text)}</p></article>`).join('');
  const conclusion = lesson.order && Array.isArray(lesson.order.steps)
    ? `Pour réussir l’activité, l’apprenant doit respecter la démarche suivante : ${lesson.order.steps.join(' → ')}.`
    : `Pour réussir l’activité, l’apprenant doit identifier les notions, les relier à leurs rôles, puis les utiliser dans une situation simple.`;
  return `<article class="teacher-sheet"><div class="sheet-title"><span class="mini-pill">Fiche explicative</span><h3>Explication du cours par le professeur</h3></div><p class="explain"><strong>Idée générale :</strong> ${esc(lesson.fr)}</p><p class="explain"><strong>Objectif d’apprentissage :</strong> ${esc(lesson.objective)}</p>${objectiveItems?`<div class="teacher-objectives"><h4>Ce que l’élève doit savoir faire</h4><ul class="objective-list">${objectiveItems}</ul></div>`:''}<h4>Notions essentielles à comprendre</h4><div class="course-points">${pointCards}</div><p class="visual-conclusion">${esc(conclusion)}</p></article>`;
}
function audioScriptItems(lesson){
  const concepts = uniqueByTitle(visualSteps(lesson)).slice(0,5).map(st=>`${st.title} : ${st.text}`);
  const recap = concepts.length ? `Les mots clés à retenir sont : ${concepts.join(' ; ')}.` : `Les mots clés sont ceux affichés dans la fiche visuelle.`;
  return [
    `Bonjour. Dans cette leçon, nous allons travailler l’objectif suivant : ${lesson.objective}.`,
    lesson.fr,
    recap,
    `Pour vérifier la compréhension, l’élève doit expliquer les mots clés, les relier à leurs rôles et appliquer la démarche dans un exercice simple.`
  ].filter(Boolean);
}
function audioText(lesson){return audioScriptItems(lesson).join(' ');}
function guidedQuestionsFor(lesson){
  const questions = [];
  questions.push({q:'Quel est l’objectif principal de cette leçon ?', a:lesson.objective, hint:'Commence par repérer ce que l’élève doit savoir faire à la fin du cours.'});
  uniqueByTitle(visualSteps(lesson)).slice(0,5).forEach(st=>{
    questions.push({q:`Que signifie « ${st.title} » dans ce cours ?`, a:st.text, hint:'Utilise la carte mentale et la fiche explicative.'});
  });
  if(Array.isArray(lesson.fill) && lesson.fill.length>=2){
    questions.push({q:lesson.fill[0].replace('____','…'), a:`Le mot attendu est : ${lesson.fill[1]}.`, hint:'Cette question reprend la phrase clé du cours.'});
  }
  if(Array.isArray(lesson.drag)){
    lesson.drag.slice(0,3).forEach(pair=>{
      questions.push({q:`À quoi sert ou correspond « ${pair[0]} » ?`, a:pair[1], hint:'Cherche le rôle exact de ce composant ou de cette notion.'});
    });
  }
  if(lesson.order && Array.isArray(lesson.order.steps)){
    questions.push({q:`Quelle est la bonne démarche pour : ${lesson.order.title} ?`, a:lesson.order.steps.join(' → '), hint:'La démarche doit suivre un ordre logique.'});
  }
  return questions.slice(0,10);
}
function renderGuidedQuestions(lesson){
  return guidedQuestionsFor(lesson).map((qa,i)=>`<details class="guided-question"><summary><span class="num">${i+1}</span> ${esc(qa.q)}</summary><p class="subtle"><strong>Indice :</strong> ${esc(qa.hint)}</p><p><strong>Réponse attendue :</strong> ${esc(qa.a)}</p></details>`).join('');
}
function logoIntroVisualPanel(lesson){
  const definitions = [
    {
      title: "Définition de programme",
      text: "Un programme est une suite d’instructions écrites dans un ordre précis pour demander à l’ordinateur de réaliser une tâche. Dans LOGO, par exemple, si l’élève écrit des instructions de déplacement, la tortue les exécute dans le même ordre pour produire un dessin."
    },
    {
      title: "Définition de langage de programmation",
      text: "Un langage de programmation est un langage spécial utilisé pour communiquer avec l’ordinateur. Il contient des mots et des règles que l’ordinateur peut comprendre. L’élève doit donc écrire des instructions correctes pour obtenir le résultat attendu."
    },
    {
      title: "Définition de programmation LOGO",
      text: "La programmation LOGO est une programmation éducative basée sur une tortue graphique. L’élève commande la tortue avec des instructions simples pour tracer des formes, comprendre l’ordre des actions, la répétition et la logique d’un programme."
    }
  ];
  const definitionCards = definitions.map((d,i)=>`<article class="logo-definition-card"><span class="num">${i+1}</span><div><h4>${esc(d.title)}</h4><p>${esc(d.text)}</p></div></article>`).join('');
  const images = [
    {
      src: "assets/logo-environnement.png",
      alt: "Environnement Logo.Net",
      title: "Image 1 : Environnement LOGO",
      caption: "Définition courte : l’environnement LOGO est l’espace où l’élève écrit des commandes et observe les dessins de la tortue."
    },
    {
      src: "assets/logo-menu-configuration.png",
      alt: "Menu Outils puis Configuration",
      title: "Image 2 : Accès à la configuration",
      caption: "Définition courte : le menu Outils permet d’ouvrir la configuration pour régler l’environnement LOGO."
    },
    {
      src: "assets/logo-configuration-tortue.png",
      alt: "Fenêtre de configuration de la tortue",
      title: "Image 3 : Configuration de la tortue",
      caption: "Définition courte : la configuration sert à choisir la tortue, les couleurs, l’épaisseur du trait et la vitesse."
    }
  ];
  const imageCards = images.map((m,i)=>logoInteractiveVisualCard(m, i, lesson)).join('');
  return `<section class="panel visual-panel logo-visual-new"><div class="style-header logo-style-header"><div><span class="mini-pill">Style visuel</span><h3>Comprendre LOGO par définitions et images</h3></div><p class="subtle">Cette partie recommence l’explication depuis la base : programme, langage de programmation et programmation LOGO.</p></div><div class="logo-definitions-block">${definitionCards}</div><div class="logo-images-block">${imageCards}</div></section>`;
}


function logoPrimitivesVisualPanel(lesson){
  const intro = [
    {
      title: "Définition des instructions de base",
      text: "Les instructions de base, appelées aussi primitives LOGO, sont des commandes simples que la tortue comprend directement. Elles permettent de déplacer la tortue, de changer son orientation, de gérer le crayon et de préparer l’écran de dessin. Une instruction est souvent composée d’un mot de commande et d’un nombre : par exemple AV 50 signifie avancer de 50 pas."
    }
  ];
  const introCards = intro.map((d,i)=>`<article class="logo-definition-card"><span class="num">${i+1}</span><div><h4>${esc(d.title)}</h4><p>${esc(d.text)}</p></div></article>`).join('');
  const images = [
    {
      src: "assets/logo-instruction-av.png",
      alt: "Instruction AV 50 dans Logo.Net",
      title: "Image 1 : Instruction AV",
      caption: "Définition courte : AV fait avancer la tortue d’une distance donnée et peut tracer un segment."
    },
    {
      src: "assets/logo-instruction-re.png",
      alt: "Instruction RE 50 dans Logo.Net",
      title: "Image 2 : Instruction RE",
      caption: "Définition courte : RE fait reculer la tortue d’une distance donnée sans changer sa direction."
    },
    {
      src: "assets/logo-angle-orientation.png",
      alt: "Angle d’orientation de la tortue",
      title: "Image 3 : Angle d’orientation de la tortue",
      caption: "Définition courte : l’angle d’orientation indique la direction de la tortue avant une rotation."
    },
    {
      src: "assets/logo-instruction-td.png",
      alt: "Instruction TD 90 dans Logo.Net",
      title: "Image 4 : Instruction TD",
      caption: "Définition courte : TD fait tourner la tortue vers la droite selon un angle donné."
    },
    {
      src: "assets/logo-instruction-tg.png",
      alt: "Instruction TG 90 dans Logo.Net",
      title: "Image 5 : Instruction TG",
      caption: "Définition courte : TG fait tourner la tortue vers la gauche selon un angle donné."
    },
    {
      src: "assets/logo-instruction-crayon.png",
      alt: "Instructions BC et LC dans Logo.Net",
      title: "Image 6 : Instructions BC et LC",
      caption: "Définition courte : BC dessine pendant le déplacement ; LC déplace la tortue sans tracer."
    },
    {
      src: "assets/logo-instruction-ve.png",
      alt: "Instruction VE dans Logo.Net",
      title: "Image 7 : Instruction VE",
      caption: "Définition courte : VE efface le dessin et permet de recommencer avec un écran vide."
    },
    {
      src: "assets/logo-instruction-fcfg.png",
      alt: "Instruction FCFG 6 dans Logo.Net",
      title: "Image 8 : Instruction FCFG",
      caption: "Définition courte : FCFG change la couleur du fond graphique de l’espace de dessin."
    }
  ];
  const imageCards = images.map((m,i)=>logoInteractiveVisualCard(m, i, lesson)).join('');
  return `<section class="panel visual-panel logo-visual-new"><div class="style-header logo-style-header"><div><span class="mini-pill">Style visuel</span><h3>Instructions de base en LOGO</h3></div><p class="subtle">Chaque instruction est expliquée avec une image claire. L’angle d’orientation est placé avant TD et TG pour comprendre les rotations.</p></div><div class="logo-definitions-block">${introCards}</div><div class="logo-images-block">${imageCards}</div></section>`;
}


function logoRepeatVisualPanel(lesson){
  const definitions = [
    {
      title: "Définition de l’instruction de répétition",
      text: "L’instruction de répétition en LOGO permet d’exécuter plusieurs fois le même bloc d’instructions sans le réécrire. Elle sert à simplifier un programme, surtout lorsque les mêmes commandes reviennent plusieurs fois."
    },
    {
      title: "Syntaxe de REPETE",
      text: "La forme générale est : REPETE nombre [ instructions ]. Le mot REPETE indique la boucle, le nombre précise combien de fois répéter, et les crochets contiennent les instructions à refaire."
    },
    {
      title: "Exemple simple : dessiner un carré",
      text: "Pour tracer un carré, on peut écrire : REPETE 4 [AV 50 TD 90]. La tortue répète quatre fois l’action avancer de 50 pas puis tourner à droite de 90 degrés."
    }
  ];
  const definitionCards = definitions.map((d,i)=>`<article class="logo-definition-card"><span class="num">${i+1}</span><div><h4>${esc(d.title)}</h4><p>${esc(d.text)}</p></div></article>`).join('');
  const images = [
    {
      src: "assets/logo-instruction-repetition-syntax.png",
      alt: "Syntaxe de l’instruction REPETE et exemple d’un carré",
      title: "Image 1 : Syntaxe et exemple de REPETE",
      caption: "Définition courte : REPETE exécute plusieurs fois les instructions écrites entre crochets."
    },
    {
      src: "assets/logo-instruction-repetition-repete3.png",
      alt: "Exemple REPETE 3 [AV 100 TD 50] dans Logo.Net",
      title: "Image 2 : Exemple avec REPETE 3",
      caption: "Définition courte : REPETE 3 répète trois fois AV 100 puis TD 50 pour produire une ligne brisée."
    }
  ];
  const imageCards = images.map((m,i)=>logoInteractiveVisualCard(m, i, lesson)).join('');
  return `<section class="panel visual-panel logo-visual-new"><div class="style-header logo-style-header"><div><span class="mini-pill">Style visuel</span><h3>Instruction de répétition en LOGO</h3></div><p class="subtle">Cette partie explique uniquement l’instruction REPETE : sa définition, sa syntaxe et un exemple simple.</p></div><div class="logo-definitions-block">${definitionCards}</div><div class="logo-images-block">${imageCards}</div></section>`;
}

function logoProceduresVisualPanel(lesson){
  const definitions = [
    {
      title: "Définition d’une procédure LOGO",
      text: "Une procédure en LOGO est un petit programme qui porte un nom. Elle regroupe plusieurs instructions entre POUR et FIN. Après sa création, l’élève peut exécuter toute la procédure simplement en écrivant son nom. Cela permet de réutiliser un travail sans réécrire toutes les commandes."
    },
    {
      title: "Pourquoi utiliser une procédure ?",
      text: "Une procédure sert à organiser le programme, à éviter la répétition inutile des mêmes instructions et à construire des dessins plus complexes à partir de blocs simples. Par exemple, on peut créer une procédure CARRE puis l’utiliser dans une procédure MAISON."
    }
  ];
  const definitionCards = definitions.map((d,i)=>`<article class="logo-definition-card"><span class="num">${i+1}</span><div><h4>${esc(d.title)}</h4><p>${esc(d.text)}</p></div></article>`).join('');
  const images = [
    {
      src: "assets/logo-repeat-procedure-pour.png",
      alt: "Procédure LOGO contenant POUR et FIN",
      title: "Image 1 : Créer une procédure avec POUR et FIN",
      caption: "Définition courte : une procédure commence par POUR, contient des instructions, puis se termine par FIN."
    },
    {
      src: "assets/logo-repeat-ecris-message.png",
      alt: "Instruction ECRIS dans LOGO",
      title: "Image 2 : Utiliser ECRIS dans un programme LOGO",
      caption: "Définition courte : ECRIS affiche un message dans l’espace de dessin LOGO."
    }
  ];
  const imageCards = images.map((m,i)=>logoInteractiveVisualCard(m, i, lesson)).join('');
  return `<section class="panel visual-panel logo-visual-new"><div class="style-header logo-style-header"><div><span class="mini-pill">Style visuel</span><h3>Procédures LOGO</h3></div><p class="subtle">On commence par la définition, puis on observe les images une par une pour comprendre comment créer et utiliser une procédure.</p></div><div class="logo-definitions-block">${definitionCards}</div><div class="logo-images-block">${imageCards}</div></section>`;
}


function logoAudioItems(lesson){
  if(!lesson) return [];
  if(lesson.title === "Langage de programmation et environnement LOGO"){
    return [
      {
        title: "Petite audio 1 : Définition de programme",
        fr: `Un programme est une suite d’instructions placées dans un ordre précis. L’ordinateur exécute ces instructions une après l’autre pour réaliser une tâche. En LOGO, si l’élève écrit AV 50 puis TD 90, la tortue avance d’abord, puis elle tourne. L’ordre des instructions est donc très important.`,
        ar: `البرنامج هو مجموعة من التعليمات مرتبة بانتظام. الحاسوب ينفذ هذه التعليمات واحدة بعد الأخرى لإنجاز مهمة معينة. في لغة لوغو، إذا كتب المتعلم أمر التقدم ثم أمر الدوران، فإن السلحفاة تنفذ الأوامر بنفس الترتيب.`
      },
      {
        title: "Petite audio 2 : Définition de langage de programmation",
        fr: `Un langage de programmation est un langage spécial qui permet de communiquer avec l’ordinateur. Il contient des mots, des symboles et des règles. Si l’instruction est correcte, l’ordinateur comprend ce qu’il doit faire. Si elle est mal écrite, le résultat ne sera pas celui attendu.`,
        ar: `لغة البرمجة هي لغة خاصة نستعملها للتواصل مع الحاسوب. تحتوي على كلمات ورموز وقواعد. عندما نكتب التعليمة بطريقة صحيحة، يفهم الحاسوب المطلوب وينفذه.`
      },
      {
        title: "Petite audio 3 : Définition de la programmation LOGO",
        fr: `La programmation LOGO est une programmation éducative qui utilise une tortue graphique. L’élève donne des ordres simples à la tortue pour tracer des lignes, construire des formes et comprendre la logique d’un programme : l’ordre, les déplacements, les rotations, la répétition et les procédures.`,
        ar: `برمجة لوغو هي برمجة تعليمية تعتمد على سلحفاة رسومية. يعطي المتعلم أوامر بسيطة للسلحفاة من أجل رسم الخطوط والأشكال وفهم منطق البرنامج مثل الترتيب والحركة والدوران والتكرار والإجراءات.`
      },
      {
        title: "Petite audio 4 : Image de l’environnement LOGO",
        fr: `Observe l’image de l’environnement LOGO. En haut, il y a la barre de menus et la barre d’outils. Au centre, il y a l’espace de dessin où la tortue trace les formes. En bas, il y a la console pour écrire les instructions. L’historique permet de revoir les commandes utilisées.`,
        ar: `لاحظ صورة بيئة لوغو. في الأعلى توجد القوائم والأدوات. في الوسط توجد مساحة الرسم حيث تتحرك السلحفاة وترسم الأشكال. في الأسفل توجد وحدة الأوامر التي نكتب فيها التعليمات.`
      },
      {
        title: "Petite audio 5 : Image du menu Configuration",
        fr: `Cette image montre comment accéder aux réglages. On clique sur le menu Outils, puis sur Configuration. Cette étape permet de préparer l’espace de travail avant de programmer, par exemple pour modifier la forme de la tortue ou la couleur du fond.`,
        ar: `توضح هذه الصورة طريقة الدخول إلى الإعدادات. نضغط على قائمة الأدوات ثم نختار الإعدادات. هذه الخطوة تساعدنا على تهيئة فضاء العمل قبل كتابة الأوامر.`
      },
      {
        title: "Petite audio 6 : Image de configuration de la tortue",
        fr: `Dans cette fenêtre, l’élève peut choisir la forme de la tortue, changer sa couleur, modifier la couleur du fond, régler l’épaisseur du crayon et choisir la vitesse. Ces réglages rendent le travail plus clair et plus agréable.`,
        ar: `في هذه النافذة يمكن للمتعلم اختيار شكل السلحفاة وتغيير لونها ولون الخلفية وسمك القلم وسرعة الحركة. هذه الإعدادات تجعل العمل أوضح وأسهل.`
      }
    ];
  }
  if(lesson.title === "Primitives de base"){
    return [
      {
        title: "Petite audio 1 : Définition des instructions de base",
        fr: `Les instructions de base, ou primitives LOGO, sont les commandes simples que la tortue comprend directement. Elles servent à avancer, reculer, tourner, lever ou baisser le crayon, vider l’écran et changer certains réglages. Une instruction est souvent formée d’un mot et parfois d’un nombre, comme AV 50.`,
        ar: `التعليمات الأساسية في لوغو هي أوامر بسيطة تفهمها السلحفاة مباشرة. نستعملها للتقدم والتراجع والدوران ورفع أو إنزال القلم ومسح الشاشة وتغيير بعض الإعدادات.`
      },
      {
        title: "Petite audio 2 : Instruction AV",
        fr: `L’instruction AV signifie avancer. Dans l’image, AV 50 demande à la tortue d’avancer de cinquante pas dans la direction où elle regarde. Si le crayon est baissé, la tortue laisse une trace et dessine un segment.`,
        ar: `الأمر AV يعني التقدم إلى الأمام. في الصورة، AV 50 يطلب من السلحفاة أن تتقدم خمسين خطوة في الاتجاه الذي تنظر إليه. إذا كان القلم منخفضا فإنها ترسم خطا.`
      },
      {
        title: "Petite audio 3 : Instruction RE",
        fr: `L’instruction RE signifie reculer. RE 50 demande à la tortue de reculer de cinquante pas sans changer la direction de sa tête. Cette commande aide à revenir en arrière ou à compléter un tracé.`,
        ar: `الأمر RE يعني التراجع إلى الخلف. RE 50 يجعل السلحفاة تتراجع خمسين خطوة دون تغيير اتجاهها. نستعمله للرجوع أو لإكمال الرسم.`
      },
      {
        title: "Petite audio 4 : Angle d’orientation",
        fr: `L’angle d’orientation indique la direction de la tortue. Avant d’utiliser TD ou TG, il faut comprendre que la tortue tourne selon un angle mesuré en degrés. Si l’orientation change, le prochain déplacement AV changera aussi de direction.`,
        ar: `زاوية التوجه تبين الاتجاه الذي تنظر إليه السلحفاة. قبل استعمال TD أو TG يجب فهم أن السلحفاة تدور بزاوية تقاس بالدرجات. عندما يتغير الاتجاه، يتغير مسار الحركة التالية.`
      },
      {
        title: "Petite audio 5 : Instruction TD",
        fr: `TD signifie tourner à droite. TD 90 ne fait pas avancer la tortue ; il change seulement sa direction de quatre-vingt-dix degrés vers la droite. Après cela, AV tracera dans la nouvelle direction.`,
        ar: `الأمر TD يعني الدوران إلى اليمين. TD 90 لا يجعل السلحفاة تتقدم، بل يغير اتجاهها بتسعين درجة نحو اليمين. بعد ذلك، أمر التقدم يرسم في الاتجاه الجديد.`
      },
      {
        title: "Petite audio 6 : Instruction TG",
        fr: `TG signifie tourner à gauche. TG 90 change l’orientation de la tortue de quatre-vingt-dix degrés vers la gauche. Cette instruction est utile pour construire des angles et dessiner des formes fermées comme le carré.`,
        ar: `الأمر TG يعني الدوران إلى اليسار. TG 90 يغير اتجاه السلحفاة بتسعين درجة نحو اليسار. نحتاج إليه لبناء الزوايا ورسم الأشكال.`
      },
      {
        title: "Petite audio 7 : Instructions BC et LC",
        fr: `BC signifie baisser le crayon, et LC signifie lever le crayon. Quand le crayon est baissé, la tortue dessine pendant son déplacement. Quand il est levé, elle se déplace sans laisser de trace.`,
        ar: `الأمر BC يعني إنزال القلم، والأمر LC يعني رفع القلم. عندما يكون القلم منخفضا ترسم السلحفاة أثناء الحركة، وعندما يكون مرفوعا تتحرك بدون أثر.`
      },
      {
        title: "Petite audio 8 : Instruction VE",
        fr: `VE signifie vider l’écran. Cette instruction efface le dessin et permet de recommencer proprement. Elle est utile quand l’élève veut corriger son travail ou commencer un nouvel exercice.`,
        ar: `الأمر VE يعني مسح الشاشة. يمسح الرسم الموجود ويسمح بالبدء من جديد بشكل منظم. نستعمله عند تصحيح العمل أو بداية تمرين جديد.`
      },
      {
        title: "Petite audio 9 : Instruction FCFG",
        fr: `FCFG permet de fixer la couleur du fond graphique. Dans l’image, FCFG 6 rend le fond rouge. Cette instruction change la couleur de l’espace de dessin, mais elle ne change pas la forme de la tortue.`,
        ar: `الأمر FCFG يسمح بتغيير لون خلفية مساحة الرسم. في الصورة، FCFG 6 يجعل الخلفية حمراء. هذا الأمر يغير الخلفية فقط ولا يغير شكل السلحفاة.`
      }
    ];
  }
  if(lesson.title === "Instruction de répétition"){
    return [
      {
        title: "Petite audio 1 : Définition de REPETE",
        fr: `L’instruction REPETE est une instruction de répétition. Elle permet d’exécuter plusieurs fois le même bloc d’instructions sans les réécrire. Elle rend le programme plus court, plus clair et plus facile à corriger.`,
        ar: `الأمر REPETE هو تعليمة للتكرار. يسمح بتنفيذ مجموعة من الأوامر عدة مرات دون إعادة كتابتها. يجعل البرنامج أقصر وأسهل في الفهم والتصحيح.`
      },
      {
        title: "Petite audio 2 : Syntaxe de REPETE",
        fr: `La syntaxe est REPETE nombre crochet instructions crochet. Le nombre indique combien de fois la tortue répète. Les instructions placées entre crochets sont les actions à refaire. Exemple : REPETE 4 crochet AV 50 TD 90 crochet.`,
        ar: `صيغة الأمر هي REPETE ثم عدد مرات التكرار ثم الأوامر داخل معقوفين. العدد يبين كم مرة ستعيد السلحفاة نفس التعليمات. مثل REPETE 4 ثم AV 50 و TD 90 داخل المعقوفين.`
      },
      {
        title: "Petite audio 3 : Exemple du carré",
        fr: `Pour dessiner un carré, on peut écrire REPETE 4 [AV 50 TD 90]. La tortue avance puis tourne à droite, et elle répète cette action quatre fois. Comme le carré a quatre côtés, cette répétition produit une forme fermée.`,
        ar: `لرسم مربع يمكن كتابة REPETE 4 ثم AV 50 و TD 90. السلحفاة تتقدم ثم تدور إلى اليمين وتكرر ذلك أربع مرات. لأن المربع له أربعة أضلاع، نحصل على شكل مغلق.`
      },
      {
        title: "Petite audio 4 : Image REPETE 3",
        fr: `Dans l’image, la commande REPETE 3 [AV 100 TD 50] demande à la tortue de répéter trois fois : avancer de cent pas puis tourner à droite de cinquante degrés. On obtient une ligne brisée, car l’angle n’est pas celui d’un carré.`,
        ar: `في الصورة، الأمر REPETE 3 ثم AV 100 و TD 50 يجعل السلحفاة تكرر ثلاث مرات: تتقدم مئة خطوة ثم تدور يمينا بخمسين درجة. النتيجة خط منكسر لأن الزاوية ليست زاوية مربع.`
      }
    ];
  }
  if(lesson.title === "Procédures LOGO"){
    return [
      {
        title: "Petite audio 1 : Définition d’une procédure",
        fr: `Une procédure LOGO est un petit programme qui porte un nom. Elle commence par POUR, contient des instructions, puis se termine par FIN. Quand la procédure est créée, il suffit d’écrire son nom pour exécuter tout le bloc.`,
        ar: `الإجراء في لوغو هو برنامج صغير له اسم. يبدأ بكلمة POUR ويحتوي على تعليمات وينتهي بكلمة FIN. بعد إنشائه يكفي كتابة اسمه لتنفيذ كل الأوامر.`
      },
      {
        title: "Petite audio 2 : Utilité d’une procédure",
        fr: `Une procédure sert à organiser le programme et à éviter de réécrire les mêmes instructions. Elle permet aussi de construire un grand dessin à partir de petites parties, par exemple une procédure carré, puis une procédure maison.`,
        ar: `يفيد الإجراء في تنظيم البرنامج وتجنب إعادة كتابة نفس الأوامر. كما يسمح ببناء رسم كبير انطلاقا من أجزاء صغيرة، مثل إجراء لرسم مربع ثم إجراء لرسم منزل.`
      },
      {
        title: "Petite audio 3 : Image POUR et FIN",
        fr: `L’image montre la structure d’une procédure. POUR annonce le début de la procédure et son nom. Ensuite, on écrit les instructions. FIN annonce la fin. Dans l’exemple, la procédure CARRE contient REPETE 4 [AV 60 TD 90].`,
        ar: `تظهر الصورة بنية الإجراء. كلمة POUR تعلن بداية الإجراء واسمه. بعد ذلك نكتب التعليمات. كلمة FIN تعلن النهاية. في المثال، إجراء CARRE يحتوي على أمر التكرار لرسم مربع.`
      },
      {
        title: "Petite audio 4 : Image ECRIS",
        fr: `L’instruction ECRIS permet d’afficher un message dans LOGO. Dans l’image, le message bonjour je suis youssra apparaît dans l’espace de dessin. Cette instruction montre que LOGO peut produire du texte, pas seulement des formes.`,
        ar: `الأمر ECRIS يسمح بإظهار رسالة في لوغو. في الصورة تظهر رسالة bonjour je suis youssra في مساحة الرسم. هذا يبين أن لوغو يمكنه عرض النصوص وليس فقط رسم الأشكال.`
      }
    ];
  }
  return [];
}


function logoKineItems(lesson){
  if(!lesson) return [];
  const item = (title,intro,fillSentence,answer,choices,drag,orderTitle,steps)=>({title,intro,fillSentence,answer,choices,drag,orderTitle,steps});
  if(lesson.title === "Langage de programmation et environnement LOGO"){
    return [
      item(
        "Définition de programme",
        "Manipule l’idée principale : un programme est une suite d’instructions ordonnées. L’ordre change le résultat obtenu.",
        "Un programme est une suite d’____ exécutées dans un ordre précis.",
        "instructions",
        ["instructions","images","couleurs"],
        [["Programme","Suite d’instructions ordonnées"],["Instruction","Ordre donné à l’ordinateur"],["Ordre","Organisation des actions étape par étape"]],
        "Construire l’idée d’un programme",
        ["Choisir les instructions","Les placer dans le bon ordre","Exécuter le programme"]
      ),
      item(
        "Langage de programmation",
        "Tu vérifies que le langage de programmation possède des mots, des règles et une syntaxe comprise par l’ordinateur.",
        "Un langage de programmation permet de communiquer avec l’____.",
        "ordinateur",
        ["ordinateur","cahier","tableau"],
        [["Langage","Moyen de communication"],["Syntaxe","Règles d’écriture"],["Erreur","Instruction mal écrite ou mal placée"]],
        "Utiliser un langage de programmation",
        ["Apprendre les mots du langage","Respecter les règles d’écriture","Tester le résultat"]
      ),
      item(
        "Programmation LOGO",
        "Dans LOGO, l’élève apprend la programmation en commandant une tortue graphique pour tracer des formes.",
        "La programmation LOGO utilise une ____ graphique pour dessiner.",
        "tortue",
        ["tortue","cellule","feuille"],
        [["LOGO","Langage éducatif de programmation"],["Tortue","Objet qui exécute les commandes"],["Dessin","Résultat visible des instructions"]],
        "Programmer avec LOGO",
        ["Écrire une commande","Observer la tortue","Corriger si le résultat est faux"]
      ),
      item(
        "Environnement LOGO",
        "Repère les zones de l’interface : menus, outils, espace de dessin, tortue, console et historique.",
        "La console sert à écrire les ____ LOGO.",
        "instructions",
        ["instructions","notes","adresses"],
        [["Espace de dessin","Zone où le tracé apparaît"],["Console","Zone d’écriture des commandes"],["Historique","Liste des commandes déjà utilisées"]],
        "Se repérer dans l’environnement",
        ["Observer les menus","Écrire dans la console","Lire le résultat dans l’espace de dessin"]
      ),
      item(
        "Menu Configuration",
        "L’élève apprend le chemin d’accès : Outils puis Configuration pour régler l’environnement.",
        "Pour régler la tortue, on ouvre le menu ____ puis Configuration.",
        "Outils",
        ["Outils","Fichier","Edition"],
        [["Outils","Menu qui donne accès à la configuration"],["Configuration","Fenêtre de réglages"],["Réglage","Modification de l’apparence ou du comportement"]],
        "Accéder à la configuration",
        ["Cliquer sur Outils","Choisir Configuration","Modifier les réglages nécessaires"]
      ),
      item(
        "Configuration de la tortue",
        "L’élève manipule les réglages : forme, couleur, fond, épaisseur du crayon et vitesse.",
        "La configuration permet de changer la forme, la couleur et la ____ de la tortue.",
        "vitesse",
        ["vitesse","moyenne","formule"],
        [["Couleur de la tortue","Aspect visible de la tortue"],["Couleur du fond","Couleur de l’espace de dessin"],["Célérité","Vitesse de déplacement de la tortue"]],
        "Configurer la tortue",
        ["Choisir la forme","Choisir les couleurs","Appliquer les réglages"]
      )
    ];
  }
  if(lesson.title === "Primitives de base"){
    return [
      item("Définition des instructions de base","Les primitives sont les commandes simples que la tortue comprend directement.","Une primitive LOGO est une commande ____ que la tortue comprend.","simple",["simple","impossible","orale"],[["Primitive","Commande de base"],["Commande","Instruction donnée à la tortue"],["Paramètre","Nombre qui précise une distance ou un angle"]],"Comprendre une primitive",["Lire la commande","Identifier le nombre","Observer l’action de la tortue"]),
      item("Instruction AV","AV demande à la tortue d’avancer dans la direction où elle regarde.","AV 50 signifie avancer de ____ pas.","50",["50","90","0"],[["AV","Avancer"],["Distance","Nombre de pas à parcourir"],["Trait","Segment tracé si le crayon est baissé"]],"Utiliser AV",["Écrire AV","Ajouter une distance","Observer le segment obtenu"]),
      item("Instruction RE","RE demande à la tortue de reculer sans changer son orientation.","RE 50 signifie ____ de 50 pas.","reculer",["reculer","tourner","effacer"],[["RE","Reculer"],["Orientation","Direction conservée pendant le recul"],["Retour","Déplacement vers l’arrière"]],"Utiliser RE",["Écrire RE","Ajouter une distance","Observer le recul de la tortue"]),
      item("Angle d’orientation","L’angle d’orientation indique la direction de la tortue en degrés.","L’orientation de la tortue se mesure en ____.","degrés",["degrés","cellules","lignes"],[["Angle","Mesure d’une rotation"],["Orientation","Direction de la tortue"],["Degré","Unité de mesure de l’angle"]],"Comprendre l’orientation",["Observer la direction initiale","Modifier l’angle","Avancer dans la nouvelle direction"]),
      item("Instruction TD","TD fait tourner la tortue à droite sans la faire avancer.","TD 90 fait tourner la tortue à ____.","droite",["droite","gauche","reculons"],[["TD","Tourner à droite"],["90°","Angle droit"],["Pivoter","Changer seulement la direction"]],"Utiliser TD",["Écrire TD","Ajouter l’angle","Avancer après la rotation"]),
      item("Instruction TG","TG fait tourner la tortue à gauche sans dessiner un segment.","TG 90 fait tourner la tortue à ____.","gauche",["gauche","droite","avant"],[["TG","Tourner à gauche"],["Rotation","Changement d’orientation"],["Angle","Valeur de la rotation"]],"Utiliser TG",["Écrire TG","Ajouter l’angle","Observer la nouvelle orientation"]),
      item("Instructions BC et LC","BC baisse le crayon pour dessiner ; LC lève le crayon pour se déplacer sans trace.","Quand le crayon est levé avec LC, la tortue se déplace sans ____.","trace",["trace","vitesse","nom"],[["BC","Baisser le crayon"],["LC","Lever le crayon"],["Trace","Trait laissé par la tortue"]],"Gérer le crayon",["Baisser le crayon pour dessiner","Lever le crayon pour déplacer","Rebaisser le crayon pour continuer"]),
      item("Instruction VE","VE efface l’espace de dessin pour recommencer proprement.","VE signifie vider l’____.","écran",["écran","adresse","instruction"],[["VE","Vider l’écran"],["Effacer","Supprimer le dessin"],["Recommencer","Débuter un nouveau tracé propre"]],"Recommencer le dessin",["Écrire VE","Valider la commande","Dessiner de nouveau"]),
      item("Instruction FCFG","FCFG fixe la couleur du fond graphique de l’espace de dessin.","FCFG permet de changer la couleur du ____ graphique.","fond",["fond","crayon","clavier"],[["FCFG","Fixer la couleur du fond graphique"],["Fond","Couleur de l’espace de dessin"],["Code couleur","Nombre qui représente une couleur"]],"Changer le fond",["Écrire FCFG","Choisir le code couleur","Observer le changement du fond"])
    ];
  }
  if(lesson.title === "Instruction de répétition"){
    return [
      item("Définition de REPETE","REPETE permet d’exécuter plusieurs fois le même bloc d’instructions.","REPETE évite de réécrire plusieurs fois les mêmes ____.","instructions",["instructions","titres","images"],[["REPETE","Commande de répétition"],["Bloc","Instructions placées entre crochets"],["Boucle","Répétition d’une action"]],"Comprendre REPETE",["Repérer les actions identiques","Choisir le nombre de répétitions","Placer les actions entre crochets"]),
      item("Syntaxe de REPETE","La syntaxe est : REPETE nombre [ instructions ].", "Dans REPETE nombre [instructions], le nombre indique combien de ____ répéter.","fois",["fois","couleurs","fenêtres"],[["Nombre","Nombre de répétitions"],["Crochets","Limites du bloc répété"],["Instructions","Commandes exécutées plusieurs fois"]],"Écrire la syntaxe",["Écrire REPETE","Ajouter le nombre","Mettre les instructions entre crochets"]),
      item("Exemple du carré","Un carré peut être dessiné par REPETE 4 [AV 50 TD 90].", "Pour dessiner un carré, on répète l’action ____ fois.","4",["4","3","2"],[["AV 50","Tracer un côté"],["TD 90","Tourner d’un angle droit"],["REPETE 4","Répéter pour les quatre côtés"]],"Tracer un carré",["Avancer pour tracer un côté","Tourner à droite de 90°","Répéter quatre fois"]),
      item("Exemple REPETE 3","REPETE 3 [AV 100 TD 50] crée une ligne brisée en répétant trois fois la même suite d’actions.","REPETE 3 signifie que le bloc est exécuté ____ fois.","3",["3","50","100"],[["AV 100","Avancer de 100 pas"],["TD 50","Tourner à droite de 50°"],["REPETE 3","Répéter trois fois le bloc"]],"Lire REPETE 3",["Avancer de 100 pas","Tourner à droite de 50°","Refaire ces actions trois fois"])
    ];
  }
  if(lesson.title === "Procédures LOGO"){
    return [
      item("Définition d’une procédure","Une procédure est un petit programme nommé qui regroupe plusieurs instructions.","Une procédure LOGO commence par POUR et se termine par ____.","FIN",["FIN","AV","VE"],[["Procédure","Petit programme nommé"],["POUR","Début de la procédure"],["FIN","Fin de la procédure"]],"Créer une procédure",["Écrire POUR et le nom","Ajouter les instructions","Terminer par FIN"]),
      item("Utilité d’une procédure","Une procédure permet d’organiser le programme et de réutiliser un groupe d’instructions.","Une procédure permet de ____ un groupe d’instructions.","réutiliser",["réutiliser","supprimer","cacher"],[["Réutiliser","Appeler le même bloc plusieurs fois"],["Organiser","Rendre le programme clair"],["Nom de procédure","Mot utilisé pour lancer le bloc"]],"Utiliser une procédure",["Créer le bloc","Donner un nom clair","Appeler la procédure par son nom"]),
      item("Structure POUR et FIN","L’image montre qu’une procédure contient un nom, des instructions et une fin.","Le mot POUR annonce le ____ d’une procédure.","début",["début","résultat","fond"],[["POUR CARRE","Début d’une procédure nommée CARRE"],["REPETE 4 [AV 60 TD 90]","Instructions de la procédure"],["FIN","Fermeture de la procédure"]],"Lire la structure",["Lire le nom après POUR","Lire les instructions","Vérifier la présence de FIN"]),
      item("Instruction ECRIS","ECRIS permet d’afficher un message dans l’espace de dessin LOGO.","L’instruction ECRIS sert à afficher un ____.","message",["message","rectangle","fichier"],[["ECRIS","Afficher du texte"],["Message","Texte affiché"],["Guillemets","Signes qui encadrent le texte à écrire"]],"Afficher un message",["Écrire ECRIS","Ajouter le message entre guillemets","Observer le texte affiché"])
    ];
  }
  return [];
}

function logoPracticeItems(lesson){
  if(!lesson) return { title: "Jeu 3 — Défi pratique", intro: "Choisir la meilleure réponse pour appliquer le cours.", questions: [] };
  if(lesson.title === "Langage de programmation et environnement LOGO"){
    return {
      title: "Jeu 3 — Mission : se repérer dans l’environnement LOGO",
      intro: "Lire chaque situation, puis choisir la bonne zone ou le bon outil de l’environnement LOGO.",
      questions: [
        { prompt: "Pour écrire une commande comme AV 50, l’élève utilise la ____.", answer: "console", choices: ["console", "barre d’état", "corbeille"] },
        { prompt: "La zone qui affiche le dessin réalisé par la tortue est l’____.", answer: "espace de dessin", choices: ["espace de dessin", "historique", "nom du fichier"] },
        { prompt: "Pour ouvrir les réglages, on clique sur le menu ____ puis Configuration.", answer: "Outils", choices: ["Outils", "Aide", "Fenêtre"] },
        { prompt: "La fenêtre qui permet de régler la tortue, la couleur et la vitesse s’appelle ____.", answer: "Configuration", choices: ["Configuration", "Calculatrice", "Tableur"] }
      ]
    };
  }
  if(lesson.title === "Primitives de base"){
    return {
      title: "Jeu 3 — Mission : choisir la bonne instruction LOGO",
      intro: "Associer chaque action à l’instruction LOGO convenable.",
      questions: [
        { prompt: "Pour faire avancer la tortue, on utilise l’instruction ____.", answer: "AV", choices: ["AV", "VE", "TG"] },
        { prompt: "Pour faire reculer la tortue, on utilise l’instruction ____.", answer: "RE", choices: ["RE", "TD", "BC"] },
        { prompt: "Pour tourner la tortue vers la droite, on utilise ____.", answer: "TD", choices: ["TD", "TG", "LC"] },
        { prompt: "Pour tourner la tortue vers la gauche, on utilise ____.", answer: "TG", choices: ["TG", "AV", "FCFG"] },
        { prompt: "Pour effacer l’écran et recommencer, on utilise ____.", answer: "VE", choices: ["VE", "RE", "TD"] },
        { prompt: "Pour changer la couleur du fond graphique, on utilise ____.", answer: "FCFG", choices: ["FCFG", "BC", "AV"] },
        { prompt: "Pour déplacer la tortue sans dessiner, on utilise ____.", answer: "LC", choices: ["LC", "BC", "VE"] },
        { prompt: "Pour recommencer à dessiner après avoir levé le crayon, on utilise ____.", answer: "BC", choices: ["BC", "TG", "RE"] }
      ]
    };
  }
  if(lesson.title === "Instruction de répétition"){
    return {
      title: "Jeu 3 — Mission : choisir la bonne commande REPETE",
      intro: "Observer le besoin, puis choisir la commande qui correspond à la figure ou à l’action demandée.",
      questions: [
        { prompt: "Pour dessiner un carré de côté 50, la commande correcte est ____.", answer: "REPETE 4 [AV 50 TD 90]", choices: ["REPETE 4 [AV 50 TD 90]", "REPETE 3 [AV 50 TD 90]", "AV 50 TD 90"] },
        { prompt: "Pour répéter trois fois : avancer de 100 puis tourner à droite de 50°, on écrit ____.", answer: "REPETE 3 [AV 100 TD 50]", choices: ["REPETE 3 [AV 100 TD 50]", "REPETE 50 [AV 100 TD 3]", "REPETE 100 [AV 3 TD 50]"] },
        { prompt: "Pour dessiner un triangle équilatéral, la commande convenable est ____.", answer: "REPETE 3 [AV 80 TD 120]", choices: ["REPETE 3 [AV 80 TD 120]", "REPETE 4 [AV 80 TD 90]", "REPETE 6 [AV 80 TD 60]"] },
        { prompt: "Pour dessiner un hexagone, on peut utiliser ____.", answer: "REPETE 6 [AV 50 TD 60]", choices: ["REPETE 6 [AV 50 TD 60]", "REPETE 5 [AV 50 TD 90]", "REPETE 3 [AV 50 TD 60]"] }
      ]
    };
  }
  if(lesson.title === "Procédures LOGO"){
    return {
      title: "Jeu 3 — Mission : construire une procédure correcte",
      intro: "Choisir l’élément qui convient pour créer ou utiliser une procédure LOGO.",
      questions: [
        { prompt: "Une procédure LOGO commence par le mot ____.", answer: "POUR", choices: ["POUR", "VE", "TD"] },
        { prompt: "Une procédure LOGO se termine par le mot ____.", answer: "FIN", choices: ["FIN", "AV", "FCFG"] },
        { prompt: "Pour afficher un message dans LOGO, on utilise l’instruction ____.", answer: "ECRIS", choices: ["ECRIS", "REPETE", "LC"] },
        { prompt: "Après avoir créé une procédure nommée CARRE, pour l’exécuter on écrit ____.", answer: "CARRE", choices: ["CARRE", "POUR", "FIN"] },
        { prompt: "Le bloc qui regroupe plusieurs instructions sous un nom s’appelle une ____.", answer: "procédure", choices: ["procédure", "cellule", "feuille"] }
      ]
    };
  }
  return { title: "Jeu 3 — Défi pratique", intro: "Choisir la meilleure réponse pour appliquer le cours.", questions: [] };
}

function logoKinePanel(lesson){
  const items = logoKineItems(lesson);
  if(!items.length) return '';

  const allDrag = [];
  const seenDrag = new Set();
  items.forEach(it=>{
    (it.drag||[]).forEach(pair=>{
      const key = pair[0] + '|' + pair[1];
      if(!seenDrag.has(key)){
        seenDrag.add(key);
        allDrag.push(pair);
      }
    });
  });

  const fillQuestions = items.map((it,i)=>{
    const sentence = esc(it.fillSentence).replace('____','<strong>____</strong>');
    return `<div class="kine-fill-question"><div class="kine-question-number">${i+1}</div><div class="kine-question-body"><p>${sentence}</p><div class="choice-row">${it.choices.map(c=>`<button class="choice" data-fill-choice="${esc(c)}" data-answer="${esc(it.answer)}">${esc(c)}</button>`).join('')}</div></div></div>`;
  }).join('');

  const practice = logoPracticeItems(lesson);
  const practiceHtml = (practice.questions||[]).map((q,i)=>{
    const prompt = esc(q.prompt).replace('____','<strong>____</strong>');
    return `<div class="kine-fill-question practice-question"><div class="kine-question-number">${items.length+i+1}</div><div class="kine-question-body"><p>${prompt}</p><div class="choice-row">${q.choices.map(c=>`<button class="choice" data-fill-choice="${esc(c)}" data-answer="${esc(q.answer)}">${esc(c)}</button>`).join('')}</div></div></div>`;
  }).join('');

  const dragPairs = allDrag.map((d,i)=>`<div class="drop-target" data-target="${esc(d[0])}" data-definition="${esc(d[1])}"><span class="drop-index">${i+1}</span>${esc(d[1])}</div>`).join('');
  const dragItems = allDrag.map(d=>`<span class="drag-item" draggable="true" data-drag="${esc(d[0])}">${esc(d[0])}</span>`).join('');

  return `<section class="panel kine-panel logo-kine-panel logo-kine-global"><div class="style-header clean-style-header"><div><span class="mini-pill">Style kinesthésique</span><h3>Je pratique les notions essentielles</h3></div></div><div class="logo-kine-games global-games"><div class="game global-game" data-game="fill"><h5>Activité 1 — Compléter les phrases</h5><div class="kine-fill-list">${fillQuestions}${practiceHtml}</div><div class="feedback"></div></div><div class="game global-game"><h5>Activité 2 — Glisser chaque terme vers sa définition</h5><div class="drop-grid global-drop"><div class="drag-bank">${dragItems}</div><div class="drop-zone">${dragPairs}</div></div><div class="feedback"></div></div></div></section>`;
}

function logoAudioPanel(lesson){
  const items = logoAudioItems(lesson);
  const cards = items.map((it,i)=>`<article class="logo-audio-card audio-title-only"><div class="logo-audio-title"><span>${i+1}</span><h4>${esc(cleanAudioTitle(it.title))}</h4></div><div class="audio-row"><button class="btn small" data-speak="fr" data-text="${esc(audioSpeakText(it))}">▶ Écouter FR</button><button class="btn green small" data-speak="ar" data-text="${esc(audioSpeakTextAr(it))}">▶ استمع AR</button><button class="btn ghost small stop-audio-btn" data-action="stop-speech">■ Arrêter</button></div></article>`).join('');
  const fullFr = items.map((it,i)=>`Partie ${i+1}. ${audioSpeakText(it)}`).join(' ');
  const fullAr = items.map((it,i)=>`الجزء ${i+1}. ${audioSpeakTextAr(it)}`).join(' ');
  return `<section class="panel audio-card logo-audio-panel simplified-audio-panel"><div class="style-header"><div><span class="mini-pill">Style auditif</span><h3>Écouter l’idée principale de chaque image</h3></div></div><div class="audio-row master-audio-row"><button class="btn" data-speak="fr" data-text="${esc(fullFr)}">Écouter toutes les idées en français</button><button class="btn green" data-speak="ar" data-text="${esc(fullAr)}">استمع إلى كل الأفكار بالعربية</button><button class="btn ghost small stop-audio-btn" data-action="stop-speech">■ Arrêter</button></div><div id="voiceWarning" class="voice-warning">La voix arabe n’est pas disponible dans ce navigateur. Essayez Chrome/Edge ou installez une voix arabe.</div><div class="logo-audio-list">${cards}</div></section>`;
}

function tableurGestionVisualPanel(lesson){
  const media = visualMediaForLesson(lesson);
  const gallery = media.length
    ? media.map((m,i)=>`<figure class="media-card tableur-image-card"><img src="${esc(m.src)}" alt="${esc(m.alt||lesson.title)}"><figcaption><strong>Image ${i+1}</strong><br>${esc(m.caption||'')}</figcaption></figure>`).join('')
    : '';
  return `<section class="panel visual-panel"><div class="visual-layout"><div class="style-header"><div><span class="mini-pill">Style visuel</span><h3>Gestion d’un fichier tableur</h3></div><p class="subtle">Comme dans l’unité Programmation LOGO, chaque image est affichée une par une avec une petite définition qui explique son contenu.</p></div><div class="visual-gallery single-column">${gallery}</div></div></section>`;
}

function tableurFeuillesVisualPanel(lesson){
  const media = visualMediaForLesson(lesson);
  const gallery = media.length
    ? media.map((m,i)=>`<figure class="media-card tableur-image-card"><img src="${esc(m.src)}" alt="${esc(m.alt||lesson.title)}"><figcaption><strong>Image ${i+1}</strong><br>${esc(m.caption||'')}</figcaption></figure>`).join('')
    : '';
  return `<section class="panel visual-panel"><div class="visual-layout"><div class="style-header"><div><span class="mini-pill">Style visuel</span><h3>Feuilles, cellules et adresses</h3></div><p class="subtle">Comme dans l’unité Programmation LOGO, chaque image est affichée une par une avec une petite définition qui explique son contenu.</p></div><div class="visual-gallery single-column">${gallery}</div></div></section>`;
}

function tableurSaisieVisualPanel(lesson){
  const media = visualMediaForLesson(lesson);
  const gallery = media.length
    ? media.map((m,i)=>`<figure class="media-card tableur-image-card"><img src="${esc(m.src)}" alt="${esc(m.alt||lesson.title)}"><figcaption><strong>Image ${i+1}</strong><br>${esc(m.caption||'')}</figcaption></figure>`).join('')
    : '';
  return `<section class="panel visual-panel"><div class="visual-layout"><div class="style-header"><div><span class="mini-pill">Style visuel</span><h3>Saisie des données et mise en forme d’un tableau</h3></div><p class="subtle">Comme dans l’unité Programmation LOGO, chaque image est affichée une par une avec une petite définition qui explique son contenu.</p></div><div class="visual-gallery single-column">${gallery}</div></div></section>`;
}


function tableurAudioItems(lesson){
  if(!lesson) return [];
  if(lesson.title === "Gestion d’un fichier tableur"){
    return [
      {
        title: "Petite audio 1 : Définition du fichier tableur",
        fr: `Un fichier tableur est un document de calcul appelé souvent classeur. Il sert à organiser les données dans des tableaux, à effectuer des calculs automatiques et à présenter les résultats d’une manière claire. Dans Excel, ce fichier peut contenir plusieurs feuilles de calcul.`,
        ar: `ملف الجدول الممتد هو وثيقة للحساب تسمى غالبا مصنفا. نستعمله لتنظيم المعطيات داخل جداول، وإنجاز الحسابات تلقائيا، وعرض النتائج بطريقة واضحة.`
      },
      {
        title: "Petite audio 2 : Créer un nouveau classeur",
        fr: `Pour commencer un travail dans un tableur, on crée d’abord un nouveau classeur. Cette étape donne à l’élève une feuille vide où il peut saisir les données, écrire les formules et construire son tableau progressivement.`,
        ar: `لبداية العمل في برنامج الجدول، ننشئ أولا مصنفا جديدا. هذه الخطوة تعطينا ورقة فارغة لإدخال المعطيات وكتابة الصيغ وبناء الجدول تدريجيا.`
      },
      {
        title: "Petite audio 3 : L’interface du classeur",
        fr: `L’interface du tableur contient la barre de titre, le ruban des outils, la zone de nom, la barre de formule, les colonnes, les lignes, les cellules et les onglets des feuilles. Chaque partie aide l’élève à gérer son travail.`,
        ar: `واجهة برنامج الجدول تحتوي على شريط العنوان، شريط الأدوات، منطقة الاسم، شريط الصيغة، الأعمدة، الأسطر، الخلايا، وألسنة الأوراق. كل جزء يساعد المتعلم على تنظيم عمله.`
      },
      {
        title: "Petite audio 4 : Enregistrer le fichier",
        fr: `Enregistrer un fichier signifie garder le travail dans l’ordinateur. Pour bien travailler, il faut choisir un dossier connu, donner un nom clair au fichier, puis cliquer sur Enregistrer. Cela permet de retrouver le document plus tard.`,
        ar: `حفظ الملف يعني الاحتفاظ بالعمل داخل الحاسوب. يجب اختيار مجلد معروف، وإعطاء اسم واضح للملف، ثم الضغط على حفظ حتى نستطيع إيجاده لاحقا.`
      },
      {
        title: "Petite audio 5 : Nommer et retrouver le fichier",
        fr: `Le nom du fichier doit être court, clair et lié au contenu du travail. Par exemple, Dépenses_Classe est meilleur que Nouveau fichier. Un bon nom facilite la recherche et évite de confondre les documents.`,
        ar: `يجب أن يكون اسم الملف قصيرا وواضحا ومرتبطا بمحتوى العمل. الاسم الجيد يسهل البحث عن الملف ويجنب الخلط بين الوثائق.`
      }
    ];
  }
  if(lesson.title === "Feuilles, cellules et adresses"){
    return [
      {
        title: "Petite audio 1 : Définition du classeur et des feuilles",
        fr: `Un classeur est le fichier principal du tableur. Il peut contenir une ou plusieurs feuilles. Chaque feuille ressemble à une grande page composée de lignes et de colonnes où l’élève peut saisir et organiser les données.`,
        ar: `المصنف هو الملف الرئيسي في برنامج الجدول. يمكن أن يحتوي على ورقة أو عدة أوراق. كل ورقة تشبه صفحة كبيرة مكونة من أسطر وأعمدة لإدخال وتنظيم المعطيات.`
      },
      {
        title: "Petite audio 2 : Définition de la cellule",
        fr: `Une cellule est l’intersection d’une ligne et d’une colonne. C’est la petite case dans laquelle on peut écrire un texte, un nombre, une date ou une formule. La cellule sélectionnée est souvent entourée par une bordure visible.`,
        ar: `الخلية هي تقاطع سطر مع عمود. هي الخانة الصغيرة التي نكتب فيها نصا أو عددا أو تاريخا أو صيغة. الخلية المحددة تظهر غالبا بإطار واضح.`
      },
      {
        title: "Petite audio 3 : Définition de l’adresse",
        fr: `L’adresse d’une cellule sert à la repérer dans la feuille. Elle se compose de la lettre de la colonne et du numéro de la ligne. Par exemple, B3 signifie colonne B et ligne 3.`,
        ar: `عنوان الخلية يساعدنا على تحديد مكانها داخل الورقة. يتكون من حرف العمود ورقم السطر. مثلا B3 تعني العمود B والسطر 3.`
      },
      {
        title: "Petite audio 4 : Ajouter une nouvelle feuille",
        fr: `Pour organiser un travail long, on peut ajouter une nouvelle feuille dans le même classeur. Le bouton plus permet de créer une feuille supplémentaire afin de séparer les tableaux ou les activités.`,
        ar: `لتنظيم عمل طويل يمكن إضافة ورقة جديدة داخل نفس المصنف. زر الزائد يسمح بإنشاء ورقة إضافية لفصل الجداول أو الأنشطة.`
      }
    ];
  }
  if(lesson.title === "Saisie des données et mise en forme d’un tableau"){
    return [
      {
        title: "Petite audio 1 : Saisir des données dans une cellule",
        fr: `Saisir des données signifie écrire une information dans une cellule. Cette information peut être un texte, un nombre, une date, une heure ou une formule. L’élève clique sur la cellule, écrit la donnée, puis valide avec Entrée.`,
        ar: `إدخال المعطيات يعني كتابة معلومة داخل خلية. قد تكون هذه المعلومة نصا أو عددا أو تاريخا أو ساعة أو صيغة. نضغط على الخلية، نكتب المعطى، ثم نؤكد بزر الإدخال.`
      },
      {
        title: "Petite audio 2 : Types de données",
        fr: `Dans un tableur, il faut distinguer les types de données. Un texte sert à nommer, un nombre sert à calculer, une date indique un moment, une heure précise un temps, et une formule produit automatiquement un résultat.`,
        ar: `في برنامج الجدول يجب التمييز بين أنواع المعطيات. النص للتسمية، العدد للحساب، التاريخ لتحديد يوم، الساعة لتحديد وقت، والصيغة لإنتاج نتيجة تلقائية.`
      },
      {
        title: "Petite audio 3 : Mettre en forme un tableau",
        fr: `La mise en forme sert à rendre le tableau plus lisible. On peut modifier la taille du texte, choisir une couleur de remplissage, aligner les données, élargir les colonnes et mettre le titre en valeur.`,
        ar: `التنسيق يجعل الجدول أكثر وضوحا. يمكن تغيير حجم النص، اختيار لون التعبئة، محاذاة المعطيات، توسيع الأعمدة، وإبراز العنوان.`
      },
      {
        title: "Petite audio 4 : Ajouter des bordures",
        fr: `Les bordures permettent de séparer clairement les cellules du tableau. Elles aident le lecteur à suivre les lignes et les colonnes sans se tromper. Un tableau avec bordures est plus propre et plus facile à lire.`,
        ar: `الحدود تساعد على فصل خلايا الجدول بوضوح. إنها تمكن القارئ من تتبع الأسطر والأعمدة دون خطأ. الجدول ذو الحدود يكون منظما وسهل القراءة.`
      },
      {
        title: "Petite audio 5 : Couleur et lisibilité",
        fr: `La couleur peut attirer l’attention sur le titre ou sur des informations importantes. Mais il faut utiliser des couleurs sobres et cohérentes, car trop de couleurs rendent le tableau difficile à lire.`,
        ar: `يمكن للون أن يلفت الانتباه إلى العنوان أو المعلومات المهمة. لكن يجب استعمال ألوان هادئة ومنظمة لأن كثرة الألوان تجعل الجدول صعب القراءة.`
      }
    ];
  }
  if(lesson.title === "Formules, fonctions et recopie"){
    return [
      {
        title: "Petite audio 1 : Définition d’une formule",
        fr: `Une formule est un calcul écrit par l’utilisateur dans une cellule. Elle commence généralement par le signe égal. Par exemple, écrire égale B2 fois C2 permet de calculer automatiquement le produit des deux cellules.`,
        ar: `الصيغة هي حساب يكتبه المستعمل داخل خلية. تبدأ غالبا بعلامة يساوي. مثلا كتابة B2 مضروبة في C2 بعد علامة يساوي تسمح بحساب النتيجة تلقائيا.`
      },
      {
        title: "Petite audio 2 : Utiliser les adresses des cellules",
        fr: `Dans une formule, il est préférable d’utiliser les adresses des cellules au lieu d’écrire directement les nombres. Ainsi, si la valeur d’une cellule change, le résultat se met à jour automatiquement.`,
        ar: `في الصيغة من الأفضل استعمال عناوين الخلايا بدل كتابة الأعداد مباشرة. عندما تتغير قيمة خلية، تتغير النتيجة تلقائيا.`
      },
      {
        title: "Petite audio 3 : Définition d’une fonction",
        fr: `Une fonction est une formule prête à l’emploi. Elle facilite les calculs fréquents. Par exemple, SOMME additionne des valeurs, MOYENNE calcule la moyenne, MAX donne la plus grande valeur et MIN donne la plus petite.`,
        ar: `الدالة هي صيغة جاهزة للاستعمال. تسهل الحسابات المتكررة. مثلا SOMME تجمع القيم، وMOYENNE تحسب المتوسط، وMAX تعطي أكبر قيمة، وMIN تعطي أصغر قيمة.`
      },
      {
        title: "Petite audio 4 : Recopie d’une formule",
        fr: `La recopie permet de réutiliser une formule dans d’autres lignes ou colonnes. Le tableur adapte souvent les adresses automatiquement. Cela permet de gagner du temps et d’éviter de réécrire le même calcul.`,
        ar: `النسخ يسمح بإعادة استعمال نفس الصيغة في أسطر أو أعمدة أخرى. يقوم برنامج الجدول غالبا بتكييف عناوين الخلايا تلقائيا. هذا يوفر الوقت ويجنب إعادة كتابة نفس الحساب.`
      }
    ];
  }
  if(lesson.title === "Graphiques, mise en page et impression"){
    return [
      {
        title: "Petite audio 1 : Définition d’un graphique",
        fr: `Un graphique représente les données sous forme visuelle. Il permet de comparer rapidement les valeurs et de comprendre les résultats sans lire toutes les cellules du tableau. Le graphique doit être adapté au type de données.`,
        ar: `المبيان يمثل المعطيات بطريقة بصرية. يساعد على مقارنة القيم بسرعة وفهم النتائج دون قراءة كل خلايا الجدول. يجب اختيار المبيان المناسب لنوع المعطيات.`
      },
      {
        title: "Petite audio 2 : Sélectionner les données",
        fr: `Avant de créer un graphique, il faut sélectionner les données utiles : les titres et les valeurs. Une mauvaise sélection peut produire un graphique incomplet ou difficile à comprendre.`,
        ar: `قبل إنشاء المبيان يجب تحديد المعطيات المناسبة: العناوين والقيم. التحديد الخاطئ قد يعطي مبيانا ناقصا أو صعب الفهم.`
      },
      {
        title: "Petite audio 3 : Mise en page",
        fr: `La mise en page prépare le tableau pour l’impression. On peut choisir l’orientation de la page, les marges, la taille du papier et la zone à imprimer. L’objectif est d’obtenir une page claire.`,
        ar: `إعداد الصفحة يهيئ الجدول للطباعة. يمكن اختيار اتجاه الصفحة، الهوامش، حجم الورق، ومنطقة الطباعة. الهدف هو الحصول على صفحة واضحة.`
      },
      {
        title: "Petite audio 4 : Aperçu et impression",
        fr: `Avant d’imprimer, il faut utiliser l’aperçu avant impression. Cette étape permet de vérifier que le tableau n’est pas coupé, que le titre est visible et que le résultat sera propre sur papier.`,
        ar: `قبل الطباعة يجب استعمال المعاينة قبل الطباعة. هذه الخطوة تسمح بالتأكد من أن الجدول غير مقطوع، وأن العنوان واضح، وأن النتيجة ستكون منظمة على الورق.`
      }
    ];
  }
  return [];
}

function tableurAudioPanel(lesson){
  const items = tableurAudioItems(lesson);
  const cards = items.map((it,i)=>`<article class="logo-audio-card tableur-audio-card audio-title-only"><div class="logo-audio-title"><span>${i+1}</span><h4>${esc(cleanAudioTitle(it.title))}</h4></div><div class="audio-row"><button class="btn small" data-speak="fr" data-text="${esc(audioSpeakText(it))}">▶ Écouter FR</button><button class="btn green small" data-speak="ar" data-text="${esc(audioSpeakTextAr(it))}">▶ استمع AR</button><button class="btn ghost small stop-audio-btn" data-action="stop-speech">■ Arrêter</button></div></article>`).join('');
  const fullFr = items.map((it,i)=>`Partie ${i+1}. ${audioSpeakText(it)}`).join(' ');
  const fullAr = items.map((it,i)=>`الجزء ${i+1}. ${audioSpeakTextAr(it)}`).join(' ');
  return `<section class="panel audio-card logo-audio-panel tableur-audio-panel simplified-audio-panel"><div class="style-header"><div><span class="mini-pill">Style auditif</span><h3>Écouter l’idée principale de chaque image</h3></div></div><div class="audio-row master-audio-row"><button class="btn" data-speak="fr" data-text="${esc(fullFr)}">Écouter toutes les idées en français</button><button class="btn green" data-speak="ar" data-text="${esc(fullAr)}">استمع إلى كل الأفكار بالعربية</button><button class="btn ghost small stop-audio-btn" data-action="stop-speech">■ Arrêter</button></div><div id="voiceWarning" class="voice-warning">La voix arabe n’est pas disponible dans ce navigateur. Essayez Chrome/Edge ou installez une voix arabe.</div><div class="logo-audio-list">${cards}</div></section>`;
}

function visualPanel(lesson){
  if(isTableurLesson(lesson)) return tableurImageOnlyVisualPanel(lesson);
  if(lesson && lesson.title === "Langage de programmation et environnement LOGO") return logoIntroVisualPanel(lesson);
  if(lesson && lesson.title === "Primitives de base") return logoPrimitivesVisualPanel(lesson);
  if(lesson && lesson.title === "Instruction de répétition") return logoRepeatVisualPanel(lesson);
  if(lesson && lesson.title === "Procédures LOGO") return logoProceduresVisualPanel(lesson);
  const media = visualMediaForLesson(lesson);
  const nodes = visualNodes(lesson);
  const center = (lesson.visual && lesson.visual.center) ? lesson.visual.center : lesson.title;
  const first = nodes[0] || center;
  const firstDef = defFor(first);
  const nodeButtons = nodes.map((n,i)=>`<button class="map-node ${i===0?'active':''}" data-visual-title="${esc(n)}" data-visual-fr="${esc(defFor(n)[0])}" data-visual-ar="${esc(defFor(n)[1])}">${esc(n)}</button>`).join('');
  const gallery = media.length
    ? media.map((m,i)=>tableurInteractiveVisualCard(m, i, lesson)).join('')
    : `<figure class="media-card"><img src="assets/logo.svg" alt="Illustration"><figcaption>Illustration pédagogique liée au cours.</figcaption></figure>`;
  const steps = visualSteps(lesson).map((st,i)=>`<article class="step-card"><span class="num">${i+1}</span><h4>${esc(st.title)}</h4><p>${esc(st.text)}</p></article>`).join('');
  return `<section class="panel visual-panel"><div class="visual-layout"><div class="style-header"><div><span class="mini-pill">Style visuel</span><h3>Voir, lire et comprendre le cours</h3></div><p class="subtle">Cette partie contient une fiche explicative, des illustrations simples et une fiche mentale interactive.</p></div>${teacherSheetHtml(lesson)}<div class="visual-gallery ${media.length>1?'single-column':''}">${gallery}</div><article class="teacher-sheet mindmap-sheet"><div class="sheet-title"><span class="mini-pill">Fiche mentale interactive</span><h3>Carte mentale cliquable</h3></div><div class="visual-note">Clique sur chaque composant pour afficher sa définition en français et en arabe.</div><div class="visual-mindmap"><div class="map-center">${esc(center)}</div><div class="map-nodes">${nodeButtons}</div></div><div class="definition-box" id="visualDefinition"><h4>${esc(first)}</h4><p>${esc(firstDef[0])}</p><p class="ar">${esc(firstDef[1])}</p></div></article><h3>Explication par étapes</h3><div class="visual-steps">${steps}</div></div></section>`;
}
function audioPanel(lesson){
  if(tableurAudioItems(lesson).length) return tableurAudioPanel(lesson);
  if(logoAudioItems(lesson).length) return logoAudioPanel(lesson);
  const script = audioScriptItems(lesson);
  const fullText = audioText(lesson);
  const scriptHtml = script.map((p,i)=>`<li><strong>Partie ${i+1} :</strong> ${esc(p)}</li>`).join('');
  const listening = guidedQuestionsFor(lesson).slice(0,4).map((qa,i)=>`<li>${esc(qa.q)} <span class="subtle">Réponse : ${esc(qa.a)}</span></li>`).join('');
  return `<section class="panel audio-card"><div class="style-header"><div><span class="mini-pill">Style auditif</span><h3>Écouter, répéter et reformuler</h3></div><p class="subtle">L’élève peut écouter le cours, puis répondre oralement aux questions pour vérifier sa compréhension.</p></div><div class="audio-script"><h4>Script d’explication du professeur</h4><ol>${scriptHtml}</ol></div><div class="audio-listening"><h4>Questions d’écoute</h4><ol>${listening}</ol></div><div class="audio-row"><button class="btn" data-speak="fr" data-text="${esc(fullText)}">Écouter l’explication en français</button><button class="btn green" data-speak="ar" data-text="${esc(lesson.ar)}">استمع بالعربية</button><button class="btn secondary" data-speak-seq="1" data-fr="${esc(fullText)}" data-ar="${esc(lesson.ar)}">Français + العربية</button><button class="btn ghost small stop-audio-btn" data-action="stop-speech">■ Arrêter</button></div><div id="voiceWarning" class="voice-warning">La voix arabe n’est pas disponible dans ce navigateur. Essayez Chrome/Edge ou installez une voix arabe.</div></section>`;
}
function genericPracticeItems(lesson){
  const fallback = {
    title: "Questions d’application",
    intro: "Choisis la bonne réponse pour vérifier la compréhension du sous-titre.",
    questions: [
      { prompt: "La notion étudiée doit être utilisée de façon ____.", answer: "correcte", choices: ["correcte", "au hasard", "inutile"] }
    ]
  };
  if(!lesson) return fallback;
  if(lesson.title === "Gestion d’un fichier tableur"){
    return { title: "Questions d’application", intro: "Choisis l’action correcte pour gérer un classeur.", questions: [
      { prompt: "Pour garder ton travail, tu dois ____ le classeur.", answer: "enregistrer", choices: ["enregistrer", "effacer", "fermer sans sauvegarder"] },
      { prompt: "Un nom de fichier clair peut être ____.", answer: "Budget_Activite", choices: ["Budget_Activite", "aaaa", "nouveau nouveau"] },
      { prompt: "Pour retrouver facilement le fichier, il faut le placer dans un ____ connu.", answer: "dossier", choices: ["dossier", "message", "graphique"] }
    ] };
  }
  if(lesson.title === "Feuilles, cellules et adresses"){
    return { title: "Questions d’application", intro: "Lis chaque adresse et choisis ce qu’elle signifie.", questions: [
      { prompt: "L’adresse B3 signifie colonne ____ et ligne 3.", answer: "B", choices: ["B", "3", "feuille"] },
      { prompt: "L’intersection d’une ligne et d’une colonne donne une ____.", answer: "cellule", choices: ["cellule", "fonction", "impression"] },
      { prompt: "Une feuille de calcul contient des lignes et des ____.", answer: "colonnes", choices: ["colonnes", "tortues", "procédures"] }
    ] };
  }
  if(lesson.title === "Saisie des données et mise en forme d’un tableau"){
    return { title: "Questions d’application", intro: "Choisis la meilleure action pour améliorer un tableau.", questions: [
      { prompt: "Pour séparer clairement les cellules, on ajoute des ____.", answer: "bordures", choices: ["bordures", "erreurs", "câbles"] },
      { prompt: "Pour comprendre le sujet du tableau, il faut ajouter un ____.", answer: "titre", choices: ["titre", "mot de passe", "switch"] },
      { prompt: "La mise en forme sert surtout à rendre le tableau ____.", answer: "lisible", choices: ["lisible", "secret", "vide"] }
    ] };
  }
  if(lesson.title === "Formules, fonctions et recopie"){
    return { title: "Questions d’application", intro: "Choisis la formule ou la fonction correcte.", questions: [
      { prompt: "Pour additionner B2 et C2, on écrit ____.", answer: "=B2+C2", choices: ["=B2+C2", "B2+C2=", "B2 plus C2"] },
      { prompt: "Pour calculer automatiquement un total, on peut utiliser ____.", answer: "SOMME", choices: ["SOMME", "IMPRIMER", "LOGO"] },
      { prompt: "Pour réutiliser une formule dans plusieurs lignes, on utilise la ____.", answer: "recopie", choices: ["recopie", "suppression", "déconnexion"] }
    ] };
  }
  if(lesson.title === "Graphiques, mise en page et impression"){
    return { title: "Questions d’application", intro: "Choisis l’outil convenable pour présenter ou imprimer.", questions: [
      { prompt: "Pour comparer visuellement des données, on crée un ____.", answer: "graphique", choices: ["graphique", "mot de passe", "crayon"] },
      { prompt: "Avant d’imprimer, il faut vérifier l’____ avant impression.", answer: "aperçu", choices: ["aperçu", "adresse IP", "instruction TD"] },
      { prompt: "Pour organiser la feuille avant impression, on règle la ____.", answer: "mise en page", choices: ["mise en page", "tortue", "procédure"] }
    ] };
  }
  const questions = [];
  if(Array.isArray(lesson.drag)){
    lesson.drag.slice(0,4).forEach(pair=>{
      const wrong = lesson.drag.map(x=>x[0]).filter(x=>x!==pair[0]).slice(0,2);
      while(wrong.length<2) wrong.push("autre notion");
      questions.push({ prompt: `${pair[1]} correspond à ____ .`, answer: pair[0], choices: [pair[0], ...wrong].slice(0,3) });
    });
  }
  return { title:"Questions d’application", intro:"Réponds pour vérifier les notions essentielles du sous-titre.", questions: questions.slice(0,5) };
}

function kinePanel(lesson){
  const logoKine = logoKinePanel(lesson);
  if(logoKine) return logoKine;
  const [sentence,answer,choices]=lesson.fill;
  const practice = genericPracticeItems(lesson);
  const baseQuestion = `<div class="kine-fill-question"><div class="kine-question-number">1</div><div class="kine-question-body"><p>${esc(sentence).replace('____','<strong>____</strong>')}</p><div class="choice-row">${choices.map(c=>`<button class="choice" data-fill-choice="${esc(c)}" data-answer="${esc(answer)}">${esc(c)}</button>`).join('')}</div></div></div>`;
  const practiceHtml = (practice.questions||[]).map((q,i)=>{
    const prompt = esc(q.prompt).replace('____','<strong>____</strong>');
    return `<div class="kine-fill-question practice-question"><div class="kine-question-number">${i+2}</div><div class="kine-question-body"><p>${prompt}</p><div class="choice-row">${q.choices.map(c=>`<button class="choice" data-fill-choice="${esc(c)}" data-answer="${esc(q.answer)}">${esc(c)}</button>`).join('')}</div></div></div>`;
  }).join('');
  return `<section class="panel kine-panel"><div class="style-header clean-style-header"><div><span class="mini-pill">Style kinesthésique</span><h3>Je pratique les notions essentielles</h3></div></div><div class="games"><div class="game" data-game="fill"><h4>Activité 1 — Compléter les phrases</h4><div class="kine-fill-list">${baseQuestion}${practiceHtml}</div><div class="feedback"></div></div><div class="game"><h4>Activité 2 — Glisser chaque terme vers sa définition</h4><div class="drop-grid"><div class="drag-bank">${lesson.drag.map(d=>`<span class="drag-item" draggable="true" data-drag="${esc(d[0])}">${esc(d[0])}</span>`).join('')}</div><div class="drop-zone">${lesson.drag.map(d=>`<div class="drop-target" data-target="${esc(d[0])}" data-definition="${esc(d[1])}">${esc(d[1])}</div>`).join('')}</div></div><div class="feedback"></div></div></div></section>`;
}

function renderDictionary(unit){
  const entries = getDictionaryEntries(unit);
  if(dictGame.unitId !== unit.id) resetDictGame(unit.id);
  const total = entries.length;
  if(!total){return `<div class="section-head"><div><h2>Dictionnaire de l’unité</h2><p>Aucune question de dictionnaire n’est disponible pour cette unité.</p></div></div>`;}
  if(dictGame.index >= total){
    const good = dictGame.history.filter(x=>x.ok).map(x=>x.word);
    const weak = dictGame.history.filter(x=>!x.ok).map(x=>x.word);
    const goodHtml = good.length ? good.map(x=>`<li>${esc(x)}</li>`).join('') : '<li>Aucun mot maîtrisé pour le moment.</li>';
    const weakHtml = weak.length ? weak.map(x=>`<li>${esc(x)}</li>`).join('') : '<li>Aucun point faible dans ce jeu.</li>';
    return `<div class="section-head"><div><h2>Jeu du dictionnaire terminé</h2><p>Tous les mots de l’unité ont été traités.</p></div><span class="pill">${dictGame.score}/${total}</span></div><div class="dict-summary"><div class="score-circle"><strong>${dictGame.score}</strong><span>sur ${total}</span></div><div class="diagnostic-grid"><div><h4>Mots maîtrisés</h4><ul>${goodHtml}</ul></div><div><h4>Mots à revoir</h4><ul>${weakHtml}</ul></div><div><h4>Parties à réviser</h4><ul><li>Relire les mots à revoir dans les cours de l’unité.</li><li>Reprendre le style visuel et auditif des leçons liées.</li><li>Refaire le jeu jusqu’à obtenir un score complet.</li></ul></div></div><button class="btn" data-dict-reset="1">Recommencer le jeu</button></div>`;
  }
  const pair = entries[dictGame.index];
  const opts = dictOptions(entries, dictGame.index);
  const progress = Math.round((dictGame.index/total)*100);
  return `<div class="section-head"><div><h2>Jeu du dictionnaire de l’unité</h2><p>Choisis la bonne réponse parmi 3 propositions.</p></div><span class="pill">Question ${dictGame.index+1}/${total}</span></div><section class="dict-game"><div class="dict-progress"><span style="width:${progress}%"></span></div><div class="dict-score"><span>Total : <strong>${total}</strong></span><span>Score : <strong id="dictLiveScore">${dictGame.score}</strong>/${total}</span><span>Reste : ${total-dictGame.index-1}</span></div><article class="dict-question-card"><span class="mini-pill">Mot affiché</span><h3>${esc(pair[0])}</h3><p>Choisis la bonne traduction / signification.</p><div class="dict-options">${opts.map(o=>`<button class="dict-choice" data-dict-choice="${esc(o)}" data-dict-correct="${esc(pair[1])}" data-dict-word="${esc(pair[0])}">${esc(o)}</button>`).join('')}</div><div id="dictFeedback" class="feedback dict-feedback"></div><button class="btn dict-next" data-dict-next="1" style="display:none">${dictGame.index+1===total?'Voir le résultat':'Question suivante'}</button></article></section>`;
}
const INTEGRATION_DIAGNOSTICS = {
  "u3_tableur": [
    {
      "lesson": "Gestion d’un fichier tableur",
      "revise": "Réviser : classeur, feuille, création, nommage et enregistrement du fichier tableur.",
      "question": "Pour préparer le budget d’une activité, dans quel type de fichier travaille-t-on ?",
      "choices": [
        "Un classeur tableur",
        "Un message réseau",
        "Une procédure LOGO"
      ],
      "correct": 0
    },
    {
      "lesson": "Feuilles, cellules et adresses",
      "revise": "Réviser : feuille, lignes, colonnes, cellules, adresses comme A1, B3 et sélection d’une plage.",
      "question": "Dans un tableau de dépenses, que signifie l’adresse B3 ?",
      "choices": [
        "Colonne B et ligne 3",
        "Ligne B et colonne 3",
        "Trois feuilles nommées B"
      ],
      "correct": 0
    },
    {
      "lesson": "Saisie des données et mise en forme d’un tableau",
      "revise": "Réviser : saisie de textes/nombres/dates, bordures, titres, alignement, couleurs et lisibilité du tableau.",
      "question": "Pourquoi mettre en forme le tableau avant de le présenter ?",
      "choices": [
        "Pour améliorer sa lisibilité",
        "Pour supprimer les calculs",
        "Pour transformer le fichier en réseau"
      ],
      "correct": 0
    },
    {
      "lesson": "Formules, fonctions et recopie",
      "revise": "Réviser : formule commençant par =, fonctions SOMME/MOYENNE/MAX/MIN, recopie et recalcul automatique.",
      "question": "Quelle formule peut calculer le total de deux cellules B2 et C2 ?",
      "choices": [
        "=B2+C2",
        "B2+C2=",
        "Total B2 C2"
      ],
      "correct": 0
    },
    {
      "lesson": "Graphiques, mise en page et impression",
      "revise": "Réviser : choix d’un graphique adapté, titre du graphique, mise en page, orientation, marges et aperçu avant impression.",
      "question": "Pourquoi créer un graphique dans la mission du budget ?",
      "choices": [
        "Pour comparer les dépenses visuellement",
        "Pour cacher les montants",
        "Pour remplacer l’enregistrement"
      ],
      "correct": 0
    }
  ],
  "u4_logo": [
    {
      "lesson": "Langage de programmation et environnement LOGO",
      "revise": "Réviser : environnement LOGO, tortue, zone de commandes, programme comme suite ordonnée d’instructions.",
      "question": "Dans LOGO, qu’est-ce qu’un programme ?",
      "choices": [
        "Une suite d’instructions ordonnées",
        "Un câble réseau",
        "Une feuille de calcul"
      ],
      "correct": 0
    },
    {
      "lesson": "Primitives de base",
      "revise": "Réviser : AV, RE, TD, TG, distances, angles et effet de l’ordre des primitives sur le dessin.",
      "question": "Quelle primitive permet de faire avancer la tortue ?",
      "choices": [
        "AV",
        "TD",
        "MAX"
      ],
      "correct": 0
    },
    {
      "lesson": "Instruction de répétition",
      "revise": "Réviser : REPETE, bloc entre crochets, figure répétitive et simplification du programme.",
      "question": "Pourquoi utiliser REPETE 4 [ AV 80 TD 90 ] pour un carré ?",
      "choices": [
        "Pour éviter de réécrire quatre fois les mêmes commandes",
        "Pour envoyer un message réseau",
        "Pour calculer une moyenne"
      ],
      "correct": 0
    },
    {
      "lesson": "Procédures LOGO",
      "revise": "Réviser : procédure nommée, sauvegarde, appel d’une procédure et réutilisation dans un programme.",
      "question": "Quel est l’intérêt d’une procédure nommée MOTIF ?",
      "choices": [
        "Réutiliser un groupe d’instructions",
        "Changer le mot de passe",
        "Créer une cellule"
      ],
      "correct": 0
    }
  ]
};
function integrationExercisesFor(unit){
  return INTEGRATION_DIAGNOSTICS[unit.id] || unit.lessons.map((l,i)=>({
    lesson:l.title,
    revise:'Réviser : '+l.title+' — '+(l.objective||''),
    question:'Quelle connaissance du cours faut-il mobiliser pour réussir cette partie de la situation ?',
    choices:[l.title,'Un contenu d’une autre unité','Une information sans lien avec le cours'],
    correct:0
  }));
}
function renderIntegration(unit){
  const exercises = integrationExercisesFor(unit);
  const knowledge = unit.lessons.map((l,i)=>`<li><strong>${i+1}. ${esc(l.title)}</strong><br><span class="subtle">${esc(l.objective||'')}</span></li>`).join('');
  const guided = exercises.map((ex,i)=>{
    const goodAnswer = ex.answer || (ex.choices && ex.choices[ex.correct]) || '';
    return `<article class="integration-exercise open-question-card"><div class="exercise-head"><span class="mini-pill">Cours ${i+1}</span><strong>${esc(ex.lesson)}</strong></div><p class="exercise-question">${esc(ex.question)}</p><textarea name="intq${i}" rows="4" placeholder="Saisis ta réponse ici..." data-answer="${esc(goodAnswer)}" data-lesson="${esc(ex.lesson)}" data-revise="${esc(ex.revise)}"></textarea></article>`;
  }).join('');
  const openQuestions = (unit.integration.questions||[]).map((x,i)=>`<div class="question open-question"><p>${i+1}. ${esc(x[0])}</p><textarea name="openq${i}" rows="3" placeholder="Réponds avec tes propres mots..." data-answer="${esc(x[1])}" data-lesson="Justification" data-revise="${esc(x[1])}"></textarea></div>`).join('');
  return `<div class="section-head"><div><h2>${esc(unit.integration.title)}</h2><p>Cette situation mobilise toutes les connaissances de l’unité et permet de repérer les points forts et les points à réviser.</p></div><span class="pill">Diagnostic</span></div><section class="integration"><div class="panel integration-context"><h3>1) Contexte réel</h3><p class="explain">${esc(unit.integration.scenario)}</p></div><div class="panel"><h3>2) Connaissances de toute l’unité à mobiliser</h3><ul class="task-list knowledge-list">${knowledge}</ul></div><div class="panel"><h3>3) Production demandée</h3><ol class="task-list">${unit.integration.tasks.map(t=>`<li>${esc(t)}</li>`).join('')}</ol></div><form id="integrationForm"><h3>4) Questions à réponse saisie</h3><p class="subtle">Écris tes réponses. Après validation, la bonne réponse apparaît pour comparer et corriger.</p><div class="integration-exercises">${guided}</div><div class="panel reflection-box"><h3>5) Justification courte</h3>${openQuestions}</div><button class="btn" type="submit">Valider mes réponses</button><div id="integrationResult"></div></form></section>`;
}
function renderExam(unit){
  const questions = unit.exam.map((q,i)=>`<div class="question"><p>${i+1}. ${esc(q[0])}</p><div class="options">${q[1].map((op,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}" data-correct="${q[2]}"> ${esc(op)}</label>`).join('')}</div></div>`).join('');
  return `<div class="section-head"><div><h2>Contrôle final de l’unité</h2><p>Ce contrôle contient seulement des questions liées à : <strong>${esc(unit.title)}</strong>. Après validation, les questions non résolues ou incorrectes s’affichent avec la correction.</p></div><span class="pill">20 questions / +1 par bonne réponse</span></div><div class="panel"><strong>Règle :</strong> +1 point par réponse correcte. Si la note est supérieure à 10/20, l’élève obtient un bonus. La note est enregistrée localement et peut être exportée vers Excel.</div><form id="examForm"><div class="exam-list">${questions}</div><button class="btn" type="submit">Terminer le contrôle</button><div id="examResult"></div></form>`;
}
function availableVoices(){
  if(!('speechSynthesis' in window)) return [];
  return speechSynthesis.getVoices ? speechSynthesis.getVoices() : [];
}
function pickVoice(lang){
  const voices = availableVoices();
  if(lang==='ar') return voices.find(v=>/^ar/i.test(v.lang)) || voices.find(v=>/arab/i.test(v.name));
  return voices.find(v=>/^fr/i.test(v.lang)) || voices.find(v=>/french|français/i.test(v.name));
}
function showVoiceWarning(show){
  const w=document.getElementById('voiceWarning');
  if(w) w.classList.toggle('show', !!show);
}

let currentGoogleTtsAudio = null;
function splitTtsText(text, max=180){
  const cleaned = String(text||'').replace(/\s+/g,' ').trim();
  if(cleaned.length <= max) return cleaned ? [cleaned] : [];
  const parts = cleaned.split(/(?<=[.!؟،؛;:])\s+/);
  const chunks=[]; let cur='';
  parts.forEach(part=>{
    if((cur+' '+part).trim().length <= max){ cur=(cur+' '+part).trim(); }
    else{
      if(cur) chunks.push(cur);
      if(part.length<=max) cur=part;
      else{ for(let i=0;i<part.length;i+=max) chunks.push(part.slice(i,i+max)); cur=''; }
    }
  });
  if(cur) chunks.push(cur);
  return chunks;
}
function googleTtsUrl(text, lang='ar'){
  return `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${encodeURIComponent(lang)}&client=tw-ob`;
}
function stopAllAudio(){
  if('speechSynthesis' in window) speechSynthesis.cancel();
  if(currentGoogleTtsAudio){ currentGoogleTtsAudio.pause(); currentGoogleTtsAudio.currentTime = 0; currentGoogleTtsAudio = null; }
}
function speakWithGoogleTts(text, lang='ar'){
  stopAllAudio();
  const chunks = splitTtsText(text, 180);
  let i = 0;
  const playNext = ()=>{
    if(i >= chunks.length) return;
    const audio = new Audio(googleTtsUrl(chunks[i++], lang));
    currentGoogleTtsAudio = audio;
    audio.onended = playNext;
    audio.onerror = ()=>{
      currentGoogleTtsAudio = null;
      speak(text, lang, true);
    };
    audio.play().catch(()=>speak(text, lang, true));
  };
  playNext();
}
function speak(text, lang, forceBrowser=false){
  if(lang==='ar' && !forceBrowser){
    speakWithGoogleTts(text, 'ar');
    showVoiceWarning(false);
    return;
  }
  if(!('speechSynthesis' in window)){alert('La synthèse vocale n’est pas disponible dans ce navigateur.');return;}
  stopAllAudio();
  const u=new SpeechSynthesisUtterance(text);
  const voice = pickVoice(lang);
  if(voice) u.voice = voice;
  u.lang = lang==='ar' ? (voice?.lang || 'ar-SA') : (voice?.lang || 'fr-FR');
  u.rate = lang==='ar' ? .86 : .92;
  showVoiceWarning(lang==='ar' && !voice);
  speechSynthesis.speak(u);
}
function speakSequence(items){
  stopAllAudio();
  const queue = items.slice();
  const playBrowser = (it, onDone)=>{
    if(!('speechSynthesis' in window)){ onDone(); return; }
    const u = new SpeechSynthesisUtterance(it.text);
    const voice = pickVoice(it.lang);
    if(voice) u.voice = voice;
    u.lang = it.lang==='ar' ? (voice?.lang || 'ar-SA') : (voice?.lang || 'fr-FR');
    u.rate = it.lang==='ar' ? .86 : .92;
    if(it.lang==='ar') showVoiceWarning(!voice);
    u.onend = onDone;
    speechSynthesis.speak(u);
  };
  const playGoogleSeq = (text, onDone)=>{
    const chunks = splitTtsText(text, 180); let i=0;
    const nextChunk=()=>{
      if(i>=chunks.length){onDone();return;}
      const audio = new Audio(googleTtsUrl(chunks[i++], 'ar'));
      currentGoogleTtsAudio = audio;
      audio.onended = nextChunk;
      audio.onerror = ()=>playBrowser({text,lang:'ar'}, onDone);
      audio.play().catch(()=>playBrowser({text,lang:'ar'}, onDone));
    };
    nextChunk();
  };
  const next = ()=>{
    const it = queue.shift();
    if(!it) return;
    if(it.lang==='ar'){ showVoiceWarning(false); playGoogleSeq(it.text, next); }
    else playBrowser(it, next);
  };
  next();
}
if('speechSynthesis' in window){
  speechSynthesis.onvoiceschanged = ()=>availableVoices();
}
function setFb(el, ok, msg){const f=el.querySelector('.feedback'); if(f){f.className='feedback '+(ok?'ok':'ko'); f.textContent=msg;}}

document.addEventListener('change', e=>{
  if(e.target && (e.target.id==='studentFullName' || e.target.id==='homeStudentFullName')){
    const parsed = splitStudentFullName(e.target.value);
    const form = e.target.closest('form');
    if(form){
      const nomInput = form.querySelector('input[name="nom"]');
      const prenomInput = form.querySelector('input[name="prenom"]');
      if(nomInput) nomInput.value = parsed.nom || '';
      if(prenomInput) prenomInput.value = parsed.prenom || '';
    }
  }
});

document.addEventListener('submit', e=>{
  if(e.target.id==='loginForm'){
    e.preventDefault();
    const fd = new FormData(e.target);
    const selectedFullName=(fd.get('studentFullName')||'').trim();
    let nom=(fd.get('nom')||'').trim();
    let prenom=(fd.get('prenom')||'').trim();
    const err = document.getElementById('loginError');
    if(selectedFullName){
      const parsed = splitStudentFullName(selectedFullName);
      nom = parsed.nom; prenom = parsed.prenom;
    }
    const typedFullName = `${nom} ${prenom}`.trim();
    if(!selectedFullName && !typedFullName){ if(err){err.textContent='Authentification incorrecte.'; err.className='v112-login-msg error-msg';} alert('Authentification incorrecte.');return;}
    const ok = selectedFullName ? isAuthorizedFullName(selectedFullName) : isAuthorizedStudent(nom, prenom);
    if(!ok){ if(err){err.textContent='Authentification incorrecte.'; err.className='v112-login-msg error-msg';} showAccessDenied(); return;}
    setStudent({nom, prenom, fullName:selectedFullName || typedFullName}); saveStudentToLocalDb(getStudent());
    state.page='units'; render(); return;
  }
  if(e.target.id==='homeStudentForm'){
    e.preventDefault();
    const fd=new FormData(e.target);
    const selectedFullName=(fd.get('studentFullName')||'').trim();
    let st={nom:(fd.get('nom')||'').trim(),prenom:(fd.get('prenom')||'').trim(), fullName:selectedFullName};
    if(selectedFullName){ st = splitStudentFullName(selectedFullName); }
    const msg=document.getElementById('studentHomeMsg');
    const typedFullName = `${st.nom||''} ${st.prenom||''}`.trim();
    if(!selectedFullName && !typedFullName){ if(msg){msg.textContent='Authentification incorrecte.'; msg.className='home-form-msg-v47 error-msg';} return; }
    const ok = selectedFullName ? isAuthorizedFullName(selectedFullName) : isAuthorizedStudent(st.nom, st.prenom);
    if(!ok){ if(msg){msg.textContent='Authentification incorrecte.'; msg.className='home-form-msg-v47 error-msg';} else {showAccessDenied();} return; }
    setStudent(st); saveStudentToLocalDb(st); state.page='units'; render(); return;
  }
  if(e.target.id==='examForm'){
    e.preventDefault();
    const unit=currentUnit();
    let score=0;
    const unresolved=[];
    unit.exam.forEach((q,i)=>{
      const r=e.target.querySelector(`input[name="q${i}"]:checked`);
      const ok=r && Number(r.value)===Number(q[2]);
      if(ok){score++;}
      else{
        unresolved.push({number:i+1, question:q[0], correction:q[1][q[2]], status:r?'incorrecte':'non répondue'});
      }
    });
    const st=getStudent()||{prenom:'',nom:''};
    const bonus = score > 10 ? 5 : 0;
    const totalAvecBonus = Math.min(20, score + bonus);
    const reussi = score > 10;
    const statut = reussi ? 'Réussi' : 'À revoir';
    const now = new Date().toISOString();
    saveExamResult({nom:st.nom, prenom:st.prenom, unite:unit.title, note_finale:score, bonus, total_avec_bonus:totalAvecBonus, statut, reussi, date_iso:now});
    const message = reussi ? `Félicitations ${esc(st.prenom)} ${esc(st.nom)} ! Tu as obtenu le bonus. Continue avec la même concentration !` : `Bon essai ${esc(st.prenom)} ${esc(st.nom)} : relis la correction, révise les notions importantes et réessaie pour progresser.`;
    const correctionHtml = unresolved.length ? `<div class="correction-list"><h3>Questions non résolues ou incorrectes</h3>${unresolved.map(item=>`<div class="correction-item"><strong>Question ${item.number} (${esc(item.status)})</strong><p>${esc(item.question)}</p><p><span class="important">Correction :</span> ${esc(item.correction)}</p></div>`).join('')}</div>` : `<p class="success-msg">Bravo ! Toutes les questions sont correctes.</p>`;
    $('#examResult').innerHTML=`<div class="result-box exam-final-result ${reussi?'success':'retry'}"><h3>${reussi?'Réussite avec bonus':'À améliorer'}</h3><p>Score du contrôle final : <strong>${score}/20</strong></p><p>Bonus : <strong>${bonus?'Avec bonus (+5 pts)':'Sans bonus'}</strong></p><p>Total avec bonus : <strong>${totalAvecBonus}/20</strong></p><p>${message}</p>${correctionHtml}<p class="save-note">Résultat enregistré localement. Le professeur peut l’exporter vers Excel depuis <strong>Espace professeur</strong>.</p></div>`;
    return;
  }
  if(e.target.id==='integrationForm'){
    e.preventDefault();
    const textareas=[...e.target.querySelectorAll('textarea')];
    const answered=textareas.filter(t=>t.value.trim().length>0).length;
    const corrections=textareas.map((t,i)=>{
      const lesson=t.dataset.lesson || 'Notion importante';
      const revise=t.dataset.revise || lesson;
      const user=t.value.trim() || 'Réponse non saisie';
      const good=t.dataset.answer || 'Correction à revoir dans le cours.';
      return `<div class="correction-item"><strong>Question ${i+1} — ${esc(lesson)}</strong><p><span class="muted">Ta réponse :</span> ${esc(user)}</p><p><span class="important">Bonne réponse :</span> ${esc(good)}</p><p><span class="important">À réviser :</span> ${esc(revise)}</p></div>`;
    }).join('');
    $('#integrationResult').innerHTML=`<div class="result-box diagnostic-result"><h3>Correction de la situation d’intégration</h3><p>Réponses saisies : <strong>${answered}/${textareas.length}</strong>. Compare tes réponses avec la correction pour améliorer ton travail.</p><div class="correction-list">${corrections}</div></div>`;
    return;
  }
});
document.addEventListener('click', e=>{
  const dictChoice=e.target.closest('[data-dict-choice]');
  if(dictChoice){
    if(dictGame.answered) return;
    dictGame.answered=true;
    const ok = dictChoice.dataset.dictChoice === dictChoice.dataset.dictCorrect;
    if(ok) dictGame.score++;
    dictGame.history.push({word:dictChoice.dataset.dictWord, ok});
    document.querySelectorAll('.dict-choice').forEach(btn=>{
      btn.disabled=true;
      if(btn.dataset.dictChoice===btn.dataset.dictCorrect) btn.classList.add('correct');
      else if(btn===dictChoice) btn.classList.add('wrong');
    });
    const fb=document.getElementById('dictFeedback');
    if(fb){fb.className='feedback dict-feedback '+(ok?'ok':'ko'); fb.textContent=ok?'Très bien, bonne réponse.':'Ce n’est pas correct. La bonne réponse est : '+dictChoice.dataset.dictCorrect;}
    const score=document.getElementById('dictLiveScore'); if(score) score.textContent=String(dictGame.score);
    const next=document.querySelector('[data-dict-next]'); if(next) next.style.display='inline-flex';
    return;
  }
  const dictNext=e.target.closest('[data-dict-next]');
  if(dictNext){dictGame.index++; dictGame.answered=false; renderUnit(); return;}
  const dictReset=e.target.closest('[data-dict-reset]');
  if(dictReset){resetDictGame(currentUnit().id); renderUnit(); return;}
  const visualNode=e.target.closest('[data-visual-title]');
  if(visualNode){
    document.querySelectorAll('.map-node').forEach(n=>n.classList.remove('active'));
    visualNode.classList.add('active');
    const box=document.getElementById('visualDefinition');
    if(box){box.innerHTML=`<h4>${esc(visualNode.dataset.visualTitle)}</h4><p>${esc(visualNode.dataset.visualFr)}</p><p class="ar">${esc(visualNode.dataset.visualAr)}</p>`;}
    return;
  }
  const visualCard=e.target.closest('[data-clickable-visual]');
  if(visualCard){
    const isOpen = visualCard.classList.toggle('open');
    visualCard.setAttribute('aria-expanded', String(isOpen));
    const details = visualCard.querySelector('.visual-example-box');
    if(details) details.setAttribute('aria-hidden', String(!isOpen));
    return;
  }
  const unitBtn=e.target.closest('[data-unit]'); if(unitBtn){state.unitId=unitBtn.dataset.unit;state.page='intro';state.lessonIndex=0;state.tab='visual';renderUnit();return;}
  const menuBtn=e.target.closest('[data-menu]'); if(menuBtn){state.page=menuBtn.dataset.menu; if(state.page==='lesson') state.lessonIndex=Number(menuBtn.dataset.index); state.tab='visual'; renderUnit();return;}
  const tab=e.target.closest('[data-tab]'); if(tab){state.tab=tab.dataset.tab; renderUnit(); return;}
  const act=e.target.closest('[data-action]')?.dataset.action; if(act==='logout'){clearStudent();return;} if(act==='home'){renderHome();return;} if(act==='teacher'||act==='results'){openTeacherArea();return;} if(act==='export-results'){exportResultsToCsv();return;} if(act==='clear-results'){clearResultsDb();return;} if(act==='unit-intro'){state.page='intro';renderUnit();return;} if(act==='stop-speech'){stopAllAudio();return;}
  const sp=e.target.closest('[data-speak]'); if(sp){speak(sp.dataset.text, sp.dataset.speak);return;}
  const seq=e.target.closest('[data-speak-seq]'); if(seq){speakSequence([{text:seq.dataset.fr,lang:'fr'},{text:seq.dataset.ar,lang:'ar'}]);return;}
  const fill=e.target.closest('[data-fill-choice]'); if(fill){const game=fill.closest('.game'); const scope=fill.closest('.kine-fill-question')||game; scope.querySelectorAll('.choice').forEach(c=>c.classList.remove('selected','correct','wrong')); fill.classList.add('selected'); const ok=fill.dataset.fillChoice===fill.dataset.answer; fill.classList.add(ok?'correct':'wrong'); const qf=scope.querySelector('.question-feedback'); if(qf){qf.className='question-feedback '+(ok?'ok':'ko'); qf.textContent=ok?'Réponse correcte.':'Réponse incorrecte, essaie encore.';} setFb(game,ok,ok?'Très bien.':'Essaie encore.'); return;}
  const ord=e.target.closest('[data-check-order]'); if(ord){const game=ord.closest('.game'); const expected=JSON.parse(ord.dataset.checkOrder); const vals=[...game.querySelectorAll('select')].map(s=>s.value); const ok=expected.every((v,i)=>vals[i]===v); setFb(game,ok,ok?'Ordre correct.':'L’ordre n’est pas encore correct.'); return;}
});
document.addEventListener('keydown', e=>{
  const visualCard=e.target.closest && e.target.closest('[data-clickable-visual]');
  if(visualCard && (e.key==='Enter' || e.key===' ')){
    e.preventDefault();
    visualCard.click();
  }
});
document.addEventListener('dragstart', e=>{const item=e.target.closest('[data-drag]'); if(item) e.dataTransfer.setData('text/plain', item.dataset.drag);});
document.addEventListener('dragover', e=>{if(e.target.closest('.drop-target')) e.preventDefault();});
document.addEventListener('drop', e=>{const target=e.target.closest('.drop-target'); if(!target)return; e.preventDefault(); const val=e.dataTransfer.getData('text/plain'); const game=target.closest('.game'); const definition=target.dataset.definition||target.textContent; if(val===target.dataset.target){target.classList.add('correct'); target.innerHTML=`<strong>${esc(val)}</strong> — ${esc(definition)}`; setFb(game,true,'Bonne association.');}else{target.classList.add('wrong'); setFb(game,false,'Ce n’est pas la bonne association.'); setTimeout(()=>target.classList.remove('wrong'),900);}});

/* ===================== CORRECTION v53 =====================
   - Suppression de la liste officielle des élèves.
   - Accès avec simple saisie du Nom et du Prénom.
   - Correction de l'erreur render() qui empêchait l'ouverture après validation.
   - Affichage uniquement des deux unités : Tableur et Programmation LOGO.
============================================================ */
function render(){
  if(state.page === 'units' || !state.unitId){
    renderHome();
    return;
  }
  renderUnit();
}
function isAuthorizedStudent(nom, prenom){
  return String(nom||'').trim().length > 0 && String(prenom||'').trim().length > 0;
}
function isAuthorizedFullName(fullName){
  return String(fullName||'').trim().length > 0;
}
function authorizedOptionsHtml(){ return ''; }
function showAccessDenied(){
  alert('Veuillez saisir le nom et le prénom de l’élève.');
}
function displayedEduUnits(){
  return UNITS.filter(u => String(u.id||'').includes('tableur') || String(u.id||'').includes('logo'));
}
function renderLogin(){
  localStorage.removeItem(STORAGE_KEY);
  $('#app').innerHTML = `<main class="access-v40 v53-access-page">
    <section class="access-panel-v40 v53-access-panel">
      <section class="access-main-v40">
        <aside class="logo-frame-v40 accueil-logo-left-v48" aria-label="Logo Espace pédagogique informatique">
          <div class="logo-only-v40">
            <img src="assets/logo.svg" alt="Logo Espace pédagogique informatique">
          </div>
          <div class="logo-title-v48">ÉPI</div>
          <div class="logo-subtitle-v48">Informatique — cycle collégial</div>
        </aside>

        <section class="form-card-v40 v53-form-card">
          <div class="form-top-v40">
            <span class="form-badge-v40">Accès élève</span>
            <h1>ÉPI</h1>
            <h2>Formulaire de départ</h2>
            <p>Saisis ton nom et ton prénom pour accéder à l’application.</p>
          </div>
          <form id="loginForm" class="login-form-v40">
            <div class="field v40-field"><label>Nom</label><div class="input-icon-v40"><span>N</span><input name="nom" autocomplete="family-name" placeholder="Votre nom" required></div></div>
            <div class="field v40-field"><label>Prénom</label><div class="input-icon-v40"><span>P</span><input name="prenom" autocomplete="given-name" placeholder="Votre prénom" required></div></div>
            <div id="loginError" class="error"></div>
            <button class="btn access-submit-v40" type="submit">Entrer dans l’application <span>→</span></button>
          </form>
        </section>
      </section>

      <footer class="motivation-v40">
        <span class="motivation-badge-v40">Lettre de motivation</span>
        <h3>Pourquoi utiliser ÉPI ?</h3>
        <p>Cher élève, cette application a été conçue pour t’aider à apprendre l’informatique avec confiance. Elle te permet de comprendre chaque notion à travers des images, des explications audio et des activités pratiques. Avance étape par étape, révise régulièrement et utilise les entraînements pour renforcer ta mémoire avant le contrôle final.</p>
        <div class="contact-v40">Contact : <a href="mailto:youssrasaidi234@gmail.com">youssrasaidi234@gmail.com</a></div>
      </footer>
    </section>
  </main>`;
}
function renderHome(){
  const st = getStudent() || {prenom:'', nom:''};
  const cards = displayedEduUnits().map(u=>`<button class="unit-card unit-card-simple no-icon-card unit-blue-v48" data-unit="${esc(u.id)}"><h3>${esc(u.title)}</h3><div class="unit-meta"><span class="pill">${esc(u.short)}</span><span class="mini-pill">${esc(u.duration||'')}</span></div></button>`).join('');
  $('#app').innerHTML = appShell(`<section class="home-page-v47">
    <section class="home-welcome-v47">
      <div>
        <span class="mini-pill">Accueil</span>
        <h2>Bienvenue dans ÉPI</h2>
        <p>Vérifie tes informations, puis choisis une unité pour commencer l’apprentissage.</p>
      </div>
    </section>

    <section class="home-forms-v47" aria-label="Formulaires de la page d’accueil">
      <form id="homeStudentForm" class="home-form-card-v47">
        <div class="home-form-head-v47">
          <span class="form-badge-v47">Formulaire élève</span>
          <h3>Informations de l’élève</h3>
          <p>Ces informations seront utilisées pour enregistrer les résultats des contrôles.</p>
        </div>
        <div class="home-form-grid-v47">
          <div class="field"><label>Nom</label><input name="nom" value="${esc(st.nom)}" autocomplete="family-name" required></div>
          <div class="field"><label>Prénom</label><input name="prenom" value="${esc(st.prenom)}" autocomplete="given-name" required></div>
        </div>
        <button class="btn home-form-btn-v47" type="submit">Enregistrer mes informations</button>
        <p id="studentHomeMsg" class="home-form-msg-v47"></p>
      </form>

      <form id="teacherHomeAccessForm" class="home-form-card-v47 teacher-access-v47">
        <div class="home-form-head-v47">
          <span class="form-badge-v47 teacher-badge-v47">Espace enseignant</span>
          <h3>Accès professeur</h3>
          <p>Entrer le mot de passe pour ouvrir le tableau des notes et l’export Excel.</p>
        </div>
        <div class="field"><label>Mot de passe professeur</label><input name="password" type="password" placeholder="Mot de passe" required></div>
        <button class="btn secondary home-form-btn-v47" type="submit">Ouvrir l’espace professeur</button>
        <p id="teacherHomeMsg" class="home-form-msg-v47"></p>
      </form>
    </section>

    <section class="page-title short centered-title home-units-title-v47"><span class="mini-pill">Choisir une unité</span><h2>Unités de la 2e année collégiale</h2></section>
    <section class="unit-grid centered-units home-units-v47">${cards}</section>
  </section>`);
}


renderLogin();

/* ===================== CORRECTION v54 =====================
   Espace enseignant simplifié : uniquement un tableau des notes
   avec les colonnes Nom, Prénom, Note et Unité.
   Suppression de l'affichage des élèves enregistrés et de la
   saisie manuelle des notes par le professeur.
============================================================ */
function saveStudentToLocalDb(){
  // Les élèves ne sont plus enregistrés dans une liste locale.
  try{ localStorage.removeItem(STUDENTS_DB_KEY); }catch(e){}
}
try{ localStorage.removeItem(STUDENTS_DB_KEY); }catch(e){}

function noteValueForTeacher(r){
  const v = (r && (r.note_finale ?? r.note ?? r.score ?? ''));
  return v === '' ? '' : `${esc(v)}/20`;
}

function renderResultsPage(){
  const results = getResults();
  const rows = results.length
    ? results.map(r => `<tr><td>${esc(r.nom || '')}</td><td>${esc(r.prenom || '')}</td><td><strong>${noteValueForTeacher(r)}</strong></td><td>${esc(r.unite || '')}</td></tr>`).join('')
    : `<tr><td colspan="4" class="empty-cell">Aucune note enregistrée pour le moment.</td></tr>`;

  $('#app').innerHTML = appShell(`<section class="page-title"><span class="mini-pill">Espace enseignant</span><h2>Tableau des notes des élèves</h2><p>Cet espace affiche uniquement les résultats obtenus dans les contrôles finaux.</p></section>
  <section class="panel results-info teacher-simple-v54">
    <div class="table-scroll">
      <table class="results-table">
        <thead><tr><th>Nom</th><th>Prénom</th><th>Note</th><th>Unité</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </section>`);
}


/* ===================== V55 : liste unités simple + accueil sans nom + espace enseignant avec bonus ===================== */
function renderLogin(){
  $('#app').innerHTML = `
    <section class="login professional-login">
      <div class="login-box professional-form-box">
        <div class="brand-row welcome-logo-row">
          <div class="logo-card home-logo-card" aria-label="Logo Espace pédagogique informatique">EL</div>
          <div>
            <h1 style="font-family: Arial, sans-serif;">ÉPI</h1>
            <p class="muted">Application pédagogique interactive</p>
          </div>
        </div>
        <div class="welcome-text">
          <h2>Bienvenue</h2>
          <p>Veuillez saisir votre nom et votre prénom pour accéder à l’application.</p>
        </div>
        <form id="loginForm" class="student-form professional-form">
          <div class="field-grid">
            <label>Nom
              <input id="studentLastName" type="text" placeholder="Votre nom" autocomplete="family-name" required>
            </label>
            <label>Prénom
              <input id="studentFirstName" type="text" placeholder="Votre prénom" autocomplete="given-name" required>
            </label>
          </div>
          <button type="submit" class="btn primary">Commencer</button>
        </form>
        <button id="quickTeacherLogin" class="btn ghost">Espace enseignant</button>
        <p class="motivation bottom-motivation">Apprendre pas à pas, comprendre avec les images, s’entraîner puis progresser.</p>
      </div>
    </section>`;

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nom = document.getElementById('studentLastName').value.trim();
    const prenom = document.getElementById('studentFirstName').value.trim();
    if(!nom || !prenom){
      alert('Veuillez saisir le nom et le prénom.');
      return;
    }
    setStudent({nom, prenom});
    renderHome();
  });

  document.getElementById('quickTeacherLogin').addEventListener('click', openTeacherArea);
}

function appShell(content){
  return `
    <header class="topbar professional-topbar">
      <div class="brand-row welcome-logo-row compact-brand">
        <div class="logo-card home-logo-card small-logo">EL</div>
        <div>
          <strong style="font-family: Arial, sans-serif;">Espace pédagogique informatique</strong>
          <span class="muted">2e année collégiale</span>
        </div>
      </div>
      <div class="nav-actions">
        <button class="btn ghost" onclick="renderHome()">Accueil</button>
        <button class="btn ghost" onclick="openTeacherArea()">Espace enseignant</button>
        <button class="btn danger" onclick="clearStudent()">Quitter</button>
      </div>
    </header>
    <main class="main">${content}</main>`;
}

function renderHome(){
  $('#app').innerHTML = appShell(`
    <section class="hero accueil-pro accueil-soft-blue">
      <div class="welcome-layout">
        <div class="logo-card home-logo-card large-logo" style="font-family: Arial, sans-serif;">EL</div>
        <div>
          <p class="eyebrow">Bienvenue dans ÉPI</p>
          <h1>Apprendre l’informatique avec des activités simples</h1>
          <p>Choisissez une unité pour commencer l’apprentissage.</p>
        </div>
      </div>
    </section>

    <section class="section unit-picker-simple">
      <div class="section-head centered-head">
        <span class="badge">Choisir une unité</span>
        <h2>Unités de la 2e année collégiale</h2>
      </div>
      <div class="unit-grid unit-grid-simple">
        ${UNITS.map(u=>`
          <button class="unit-card unit-card-only-name" onclick="renderUnit('${u.id}')">
            <h3>${u.title}</h3>
          </button>
        `).join('')}
      </div>
    </section>
  `);
}

function getAllTeacherRows(){
  const results = getResults();
  return results.map((r)=>{
    const noteRaw = Number(r.note_finale ?? r.score ?? r.note ?? r.noteFinale ?? 0);
    const note = Number.isFinite(noteRaw) ? noteRaw : 0;
    const hasBonus = Number(r.bonus || 0) > 0 || note > 10;
    return {
      nom: r.nom || r.lastName || '—',
      prenom: r.prenom || r.firstName || '—',
      unite: r.unitTitle || r.unite || (UNITS.find(u=>u.id===r.unitId)?.title) || '—',
      note,
      bonus: hasBonus ? 'Avec bonus' : 'Sans bonus'
    };
  });
}

function renderResultsPage(){
  const rows = getAllTeacherRows();
  $('#app').innerHTML = appShell(`
    <section class="section teacher-simple-section">
      <div class="section-head centered-head">
        <span class="badge">Espace enseignant</span>
        <h2>Tableau des notes</h2>
        <p class="muted">Le bonus est accordé automatiquement aux élèves qui obtiennent plus de 10/20.</p>
      </div>
      <div class="table-wrap professional-table-wrap">
        <table class="score-table teacher-simple-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Unité</th>
              <th>Note /20</th>
              <th>Bonus</th>
            </tr>
          </thead>
          <tbody>
            ${rows.length ? rows.map(r=>`
              <tr>
                <td>${esc(r.nom)}</td>
                <td>${esc(r.prenom)}</td>
                <td>${esc(r.unite)}</td>
                <td>${Number(r.note).toFixed(2).replace(/\.00$/, "")}</td>
                <td><span class="bonus-pill ${r.bonus === 'Avec bonus' ? 'bonus-ok' : 'bonus-no'}">${r.bonus}</span></td>
              </tr>`).join('') : `
              <tr><td colspan="5" class="muted center-cell">Aucun résultat enregistré pour le moment.</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `);
}

/* V57 - Page d'accueil violette en français */
function renderLogin(){
  const today = new Date().getFullYear();
  $('#app').innerHTML = `
    <section class="login-v57" aria-label="Page d'accueil Espace pédagogique informatique">
      <div class="login-bg-image-v57" aria-hidden="true"></div>
      <main class="login-panel-v57">
        <section class="welcome-side-v57">
          <div class="logo-fr-v57" aria-label="Logo de l'application">
            <span>ÉL</span>
            <div>
              <strong>ÉPI</strong>
              <small>Espace pédagogique</small>
            </div>
          </div>
          <div class="decor decor-plus">+</div>
          <div class="decor decor-circle"></div>
          <div class="dots-v57"></div>
          <div class="welcome-text-v57">
            <h1>Bienvenue dans votre espace pédagogique</h1>
            <p>Une application éducative claire pour apprendre le <strong>Tableur</strong> et la <strong>Programmation LOGO</strong>.</p>
          </div>
          <div class="wave-v57"></div>
        </section>

        <section class="signin-side-v57" aria-label="Formulaire de connexion">
          <h2>Connexion</h2>
          <p class="signin-intro-v57">Saisir le nom et le prénom pour commencer.</p>
          <form id="loginForm" class="form-v57" autocomplete="off">
            <label class="input-wrap-v57">
              <span>👤</span>
              <input id="loginNom" type="text" placeholder="Nom" required />
            </label>
            <label class="input-wrap-v57">
              <span>🧑</span>
              <input id="loginPrenom" type="text" placeholder="Prénom" required />
            </label>
            <button type="submit" class="btn-main-v57">Entrer</button>
          </form>
          <button type="button" class="teacher-link-v57" onclick="openTeacherArea()">Accès enseignant</button>
          <p class="footer-note-v57">© ${today} ÉPI</p>
        </section>
      </main>
    </section>`;

  const form = $('#loginForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nom = $('#loginNom').value.trim();
    const prenom = $('#loginPrenom').value.trim();
    if(!nom || !prenom){
      alert('Veuillez saisir le nom et le prénom.');
      return;
    }
    setStudent({nom, prenom});
    renderHome();
  });
}

/* =========================
   V58 - Corrections demandées
   ========================= */
function appShell(content){
  return `
    <header class="topbar professional-topbar v58-topbar">
      <div class="v58-brand">
        <div class="v58-logo">EL</div>
        <div>
          <div class="v58-brand-title">ÉPI</div>
          <div class="v58-brand-subtitle">2e année collégiale</div>
        </div>
      </div>
      <div class="v58-nav">
        <button class="v58-btn" onclick="renderHome()">Accueil</button>
        <button class="v58-btn" onclick="openTeacherArea()">Espace enseignant</button>
        <button class="v58-btn danger" onclick="clearStudent()">Quitter</button>
      </div>
    </header>
    <main class="v58-main">${content}</main>`;
}

function renderHome(){
  $('#app').innerHTML = appShell(`
    <section class="v58-home">
      <div class="v58-hero">
        <div>
          <div class="v58-kicker">2e année collégiale</div>
          <h1>Bienvenue dans votre espace pédagogique</h1>
          <p>
            Choisissez une unité pour apprendre l’informatique avec des <strong>images claires</strong>,
            des explications simples, des activités et des contrôles adaptés.
          </p>
        </div>
        <div class="v58-illustration" aria-hidden="true">
          <div class="v58-card-lines">
            <span class="v58-line"></span>
            <span class="v58-line"></span>
            <span class="v58-line"></span>
          </div>
          <div class="v58-mini-card"><span class="v58-check">✓</span> Comprendre + Pratiquer = Réussir</div>
        </div>
      </div>

      <section class="v58-units-section">
        <div class="v58-section-title">
          <div class="v58-small-title">Choisir une unité</div>
          <h2>Unités de la 2e année collégiale</h2>
        </div>
        <div class="v58-unit-grid">
          ${UNITS.map(u=>`
            <button class="v58-unit-card" data-unit="${u.id}">
              <h3>${u.title}</h3>
            </button>
          `).join('')}
        </div>
      </section>
    </section>
  `);
}

function exportResultsCsv(){
  const rows = getAllTeacherRows();
  const header = ['Nom','Prénom','Unité','Note /20','Bonus'];
  const csvLines = [header.join(';')].concat(rows.map(r => [
    r.nom,
    r.prenom,
    r.unite,
    String(r.note).replace('.',','),
    r.bonus
  ].map(v => `"${String(v).replaceAll('"','""')}"`).join(';')));
  const blob = new Blob(['\ufeff' + csvLines.join('\n')], {type:'text/csv;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'notes_edu_libre.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}

function renderResultsPage(){
  const rows = getAllTeacherRows();
  $('#app').innerHTML = appShell(`
    <section class="v58-teacher-panel">
      <div class="v58-teacher-head">
        <div>
          <h1>Espace enseignant</h1>
          <p>Tableau simple des notes enregistrées par les élèves après les contrôles.</p>
        </div>
        <div class="v58-actions">
          <button class="v58-btn primary" onclick="exportResultsCsv()">Exploiter le fichier des notes</button>
          <button class="v58-btn" onclick="renderHome()">Retour aux unités</button>
        </div>
      </div>
      ${rows.length ? `
        <div class="v58-table-wrap">
          <table class="v58-table">
            <thead><tr><th>Nom</th><th>Prénom</th><th>Unité</th><th>Note</th><th>Bonus</th></tr></thead>
            <tbody>
              ${rows.map(r=>`
                <tr>
                  <td>${r.nom}</td>
                  <td>${r.prenom}</td>
                  <td>${r.unite}</td>
                  <td><strong>${r.note}/20</strong></td>
                  <td><span class="v58-pill ${r.bonus === 'Avec bonus' ? 'good' : 'neutral'}">${r.bonus}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <p class="muted" style="margin-top:14px">Le bouton d’exploitation télécharge un fichier CSV ouvrable avec Excel.</p>
      ` : `
        <div class="empty-state">
          <h2>Aucune note enregistrée</h2>
          <p>Les notes apparaîtront ici après la réalisation d’un contrôle final.</p>
        </div>
      `}
    </section>
  `);
}

function tableurAudioItems(topic){
  const map = {
    intro: [
      {title:'Qu’est-ce qu’un tableur ?', text:'Un tableur est un logiciel qui permet d’organiser les données dans un tableau. Il aide à saisir des valeurs, effectuer des calculs, présenter les résultats et créer des graphiques. Excel est un exemple de tableur très utilisé.'},
      {title:'Le classeur et la feuille', text:'Dans Excel, le fichier s’appelle un classeur. Le classeur peut contenir plusieurs feuilles. Chaque feuille est une grande grille composée de colonnes et de lignes.'},
      {title:'La cellule et son adresse', text:'La cellule est l’intersection entre une colonne et une ligne. Son adresse est formée par la lettre de la colonne et le numéro de la ligne, par exemple A1 ou D4.'}
    ],
    data: [
      {title:'Saisie des données', text:'Dans une cellule, on peut saisir un texte, un nombre, une date, une heure ou une formule. Le tableur reconnaît le type de donnée pour l’afficher et l’utiliser correctement.'},
      {title:'Mise en forme du tableau', text:'La mise en forme rend le tableau plus lisible. On peut changer la couleur du texte, appliquer une couleur d’arrière-plan, mettre les titres en gras et ajouter des bordures.'},
      {title:'Pourquoi styliser le tableau ?', text:'Un tableau bien présenté aide à comprendre rapidement les informations importantes. Les titres doivent être clairs, les bordures visibles et les données bien alignées.'}
    ],
    formula: [
      {title:'La formule', text:'Une formule est une expression qui commence par le signe égal. Elle utilise des nombres, des opérateurs ou des adresses de cellules pour calculer un résultat automatiquement.'},
      {title:'La fonction', text:'Une fonction est une formule prédéfinie. Par exemple SOMME additionne des valeurs, MOYENNE calcule la moyenne, MIN donne la plus petite valeur et MAX donne la plus grande valeur.'},
      {title:'La barre de formule', text:'La barre de formule permet de voir, saisir ou modifier le contenu d’une cellule. Quand on écrit une formule dans la cellule, elle apparaît aussi dans cette barre.'},
      {title:'La poignée de recopie', text:'La poignée de recopie se trouve dans le coin inférieur droit de la cellule sélectionnée. Elle permet de recopier rapidement une formule vers d’autres cellules en l’adaptant aux lignes ou aux colonnes.'}
    ],
    charts: [
      {title:'Le graphique', text:'Un graphique transforme les données d’un tableau en représentation visuelle. Il permet de comparer des valeurs et de comprendre les résultats plus rapidement.'},
      {title:'Choisir le bon graphique', text:'Le graphique en colonnes est utile pour comparer des quantités. Le graphique en secteurs est utile pour montrer la part de chaque élément dans un total.'}
    ]
  };
  return map[topic] || map.intro;
}

function logoAudioItems(topic){
  const map = {
    primitives: [
      {title:'Les primitives LOGO', text:'Une primitive est une instruction simple que la tortue comprend directement. Par exemple AV pour avancer, RE pour reculer, TD pour tourner à droite et TG pour tourner à gauche.'},
      {title:'L’ordre des instructions', text:'En LOGO, les instructions doivent être écrites dans un ordre logique. Si l’ordre change, le dessin obtenu peut aussi changer.'}
    ],
    repetition: [
      {title:'La répétition', text:'La répétition permet d’exécuter plusieurs fois les mêmes instructions. Elle rend le programme plus court, plus clair et plus facile à corriger.'},
      {title:'Exemple de répétition', text:'Pour dessiner un carré, on peut répéter quatre fois : avancer puis tourner à droite de quatre-vingt-dix degrés.'}
    ],
    procedures: [
      {title:'La procédure', text:'Une procédure est un petit programme qui porte un nom. Elle regroupe plusieurs instructions pour les réutiliser facilement.'},
      {title:'Pourquoi utiliser une procédure ?', text:'La procédure évite de réécrire les mêmes instructions. Elle rend le programme organisé et compréhensible.'}
    ],
    integration: [
      {title:'Construire un dessin', text:'Pour réussir un dessin en LOGO, on analyse la forme, on choisit les primitives, puis on utilise la répétition ou les procédures lorsque les actions se répètent.'}
    ],
    exam: [
      {title:'Se préparer au contrôle', text:'Avant le contrôle, il faut connaître le rôle des primitives, savoir lire un programme simple, compléter une répétition et expliquer l’utilité d’une procédure.'}
    ]
  };
  return map[topic] || map.primitives;
}

function enhancedAudioPanel(unit, topic){
  const items = unit.id === 'tableur' ? tableurAudioItems(topic.id) : logoAudioItems(topic.id);
  const script = items.map(i => `${i.title}. ${i.text}`).join(' ');
  return `
    <div class="panel audio-panel">
      <h2>Style auditif : écouter puis reformuler</h2>
      <p class="lead">L’objectif est d’écouter une explication courte, de retenir l’idée principale, puis de la reformuler avec ses propres mots.</p>
      <div class="audio-method-box">
        <h3>Méthode de travail</h3>
        <p><span class="v58-important">1.</span> Écouter l’explication. <span class="v58-important">2.</span> Repérer les mots importants. <span class="v58-important">3.</span> Donner un exemple. <span class="v58-important">4.</span> Répondre oralement ou par écrit à une question simple.</p>
        <button class="btn primary audio-listen" data-speak="${encodeURIComponent(script)}">Écouter toute l’explication</button>
      </div>
      <div class="audio-enhanced-grid">
        ${items.map(item=>`
          <article class="audio-enhanced-card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <p><span class="green">À retenir :</span> comprendre le mot-clé et savoir l’utiliser dans un exemple.</p>
            <button class="btn ghost audio-listen" data-speak="${encodeURIComponent(item.title + '. ' + item.text)}">Écouter cette partie</button>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

function tableurAudioPanel(topic){
  return enhancedAudioPanel(UNITS.find(u=>u.id==='tableur'), topic);
}

function logoAudioPanel(topic){
  return enhancedAudioPanel(UNITS.find(u=>u.id==='logo'), topic);
}

// Relancer l'affichage avec les dernières corrections.
renderLogin();

/* =========================================================
   V59 — Conservation de la page 1 et de la page 2 + ajout
   du contenu détaillé des unités depuis la version v58.
   - Page 1 : accueil/formulaire gardé propre.
   - Page 2 : tableau de bord gardé sans icônes.
   - Clic sur une unité : ouverture d'une sous-liste propre
     spécifique à cette unité, puis accès au contenu détaillé.
========================================================= */
function appShell(content){
  return `
    <main class="fix-shell">
      <header class="fix-topbar">
        <div class="fix-brand-small">ÉPI</div>
        <div class="fix-user-actions">
          <button class="fix-ghost-btn" onclick="renderHome()">Accueil</button>
          <button class="fix-ghost-btn" onclick="openTeacherArea()">Espace enseignant</button>
          <button class="fix-ghost-btn" onclick="clearStudent()">Déconnecter</button>
        </div>
      </header>
      ${content}
    </main>
  `;
}

function renderLogin(){
  localStorage.removeItem(STORAGE_KEY);
  $('#app').innerHTML = `
    <main class="fix-shell fix-login-page">
      <section class="fix-brand-panel" aria-label="Logo Espace pédagogique informatique">
        <div class="fix-logo-card">
          <div class="fix-logo-title">ÉPI<span>Espace pédagogique informatique</span></div>
        </div>
      </section>
      <section class="fix-form-panel">
        <form id="loginForm" class="fix-login-card" autocomplete="off">
          <h1>Connexion</h1>
          <p class="fix-small-note">Accédez à votre espace de travail.</p>
          <div class="fix-field">
            <label for="studentLastName">Nom</label>
            <input id="studentLastName" type="text" placeholder="Saisir le nom" autocomplete="family-name" required />
          </div>
          <div class="fix-field">
            <label for="studentFirstName">Prénom</label>
            <input id="studentFirstName" type="text" placeholder="Saisir le prénom" autocomplete="given-name" required />
          </div>
          <button class="fix-primary-btn" type="submit">Entrer</button>
          <button class="fix-teacher-link" type="button" onclick="openTeacherArea()">Accès enseignant</button>
        </form>
      </section>
    </main>
  `;

  const form = document.getElementById('loginForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const nom = document.getElementById('studentLastName').value.trim();
      const prenom = document.getElementById('studentFirstName').value.trim();
      if(!nom || !prenom){
        alert('Veuillez saisir le nom et le prénom.');
        return;
      }
      setStudent({nom, prenom});
      renderHome();
    });
  }
}

function renderHome(){
  const cards = UNITS.map(u=>`
    <button class="fix-unit-card ${String(u.id).includes('tableur') ? 'tableur' : 'logo-unit'}" data-unit="${esc(u.id)}">
      <h2>${esc(u.title)}</h2>
      <p>${esc(u.short || u.intro || 'Contenu de l’unité')}</p>
      <span class="fix-open-link">Ouvrir l’unité</span>
    </button>
  `).join('');

  $('#app').innerHTML = appShell(`
    <section class="fix-dashboard">
      <div class="fix-dashboard-hero">
        <h1>Tableau de bord</h1>
        <p>Choisissez une unité pour afficher sa sous-liste de leçons et accéder au contenu détaillé.</p>
      </div>
      <div class="fix-unit-grid">${cards}</div>
    </section>
  `);
}

function menu(unit){
  const lessonBtns = unit.lessons.map((l,i)=>`
    <button class="menu-btn ${state.page==='lesson'&&state.lessonIndex===i?'active':''}" data-menu="lesson" data-index="${i}">
      <span>${i+1}. ${esc(l.title)}</span><span>›</span>
    </button>
  `).join('');

  return `<aside class="sidebar fix-unit-sidebar">
    <h3>${esc(unit.title)}</h3>
    <p class="fix-sidebar-note">Sous-liste spéciale de cette unité</p>
    <button class="menu-btn ${state.page==='intro'?'active':''}" data-menu="intro">Présentation de l’unité</button>
    ${lessonBtns}
    <button class="menu-btn ${state.page==='dictionary'?'active':''}" data-menu="dictionary">Jeu dictionnaire — 3 choix</button>
    <button class="menu-btn ${state.page==='integration'?'active':''}" data-menu="integration">Situation d’intégration</button>
    <button class="menu-btn ${state.page==='exam'?'active':''}" data-menu="exam">Contrôle final de l’unité</button>
  </aside>`;
}

function renderUnit(){
  const unit = currentUnit();
  let content = '';
  if(state.page==='intro') content = renderUnitIntro(unit);
  if(state.page==='lesson') content = renderLesson(unit, unit.lessons[state.lessonIndex]);
  if(state.page==='dictionary') content = renderDictionary(unit);
  if(state.page==='integration') content = renderIntegration(unit);
  if(state.page==='exam') content = renderExam(unit);
  $('#app').innerHTML = appShell(`
    <section class="fix-unit-page-title">
      <span>Contenu de l’unité</span>
      <h2>${esc(unit.title)}</h2>
      <p>La sous-liste à gauche affiche uniquement les leçons et activités de cette unité.</p>
    </section>
    <div class="layout fix-content-layout">
      ${menu(unit)}
      <main class="content-card fix-content-card">${content}</main>
    </div>
  `);
}

renderLogin();

/* =========================================================
   V60 — Réorganisation des exercices + amélioration du style auditif
   - Page 1 et page 2 conservées.
   - Les exercices des deux unités sont présentés sous forme de fiches claires.
   - Le style auditif contient une vraie explication guidée avec écoute FR/AR.
   - L’unité Programmation LOGO reçoit des exercices spécifiques pour chaque sous-titre.
========================================================= */
function v60Attr(s){
  return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function v60Html(s){ return esc(s); }
function v60Sentence(sentence){ return v60Html(sentence).replace('____','<strong class="v60-blank">____</strong>'); }
function v60ChoiceQuestion(q, number){
  const prompt = q.prompt || q.fillSentence || '';
  const choices = q.choices || [];
  return `<div class="kine-fill-question v60-choice-question"><div class="kine-question-number">${number}</div><div class="kine-question-body"><p>${v60Sentence(prompt)}</p><div class="choice-row">${choices.map(c=>`<button class="choice" data-fill-choice="${v60Attr(c)}" data-answer="${v60Attr(q.answer)}">${v60Html(c)}</button>`).join('')}</div></div></div>`;
}
function v60DragExercise(pairs){
  const safePairs = (pairs||[]).slice(0,4);
  if(!safePairs.length) return '<p class="subtle">Aucune association disponible pour ce sous-titre.</p>';
  return `<div class="drop-grid v60-drop-grid"><div class="drag-bank">${safePairs.map(d=>`<span class="drag-item" draggable="true" data-drag="${v60Attr(d[0])}">${v60Html(d[0])}</span>`).join('')}</div><div class="drop-zone">${safePairs.map((d,i)=>`<div class="drop-target" data-target="${v60Attr(d[0])}" data-definition="${v60Attr(d[1])}"><span class="drop-index">${i+1}</span>${v60Html(d[1])}</div>`).join('')}</div></div>`;
}
function v60OrderExercise(title, steps){
  const safeSteps = (steps||[]).filter(Boolean);
  if(!safeSteps.length) return '<p class="subtle">Aucun ordre disponible pour cette activité.</p>';
  const options = [...safeSteps].reverse();
  const data = v60Attr(JSON.stringify(safeSteps));
  return `<div class="v60-order-box"><p class="v60-order-title">${v60Html(title || 'Remettre les actions dans le bon ordre')}</p>${safeSteps.map((_,i)=>`<label class="v60-order-line"><span>Étape ${i+1}</span><select><option value="">Choisir une action</option>${options.map(op=>`<option value="${v60Attr(op)}">${v60Html(op)}</option>`).join('')}</select></label>`).join('')}<button class="btn small" data-check-order='${data}'>Vérifier l’ordre</button><details class="v60-answer"><summary>Voir la correction</summary><ol>${safeSteps.map(s=>`<li>${v60Html(s)}</li>`).join('')}</ol></details></div>`;
}
function v60TableurChallenge(lesson){
  const map = {
    "Gestion d’un fichier tableur": {
      title: "Défi pratique — Organiser un fichier",
      steps: ["Créer un nouveau classeur", "Le nommer avec un nom clair", "L’enregistrer dans le bon dossier", "Le rouvrir pour vérifier"]
    },
    "Feuilles, cellules et adresses": {
      title: "Défi pratique — Lire une adresse",
      steps: ["Repérer la lettre de la colonne", "Repérer le numéro de la ligne", "Trouver l’intersection", "Lire l’adresse de la cellule"]
    },
    "Saisie des données et mise en forme d’un tableau": {
      title: "Défi pratique — Présenter un tableau",
      steps: ["Saisir les données", "Ajouter un titre clair", "Appliquer les bordures", "Aligner et ajuster les colonnes"]
    },
    "Formules, fonctions et recopie": {
      title: "Défi pratique — Calcul automatique",
      steps: ["Sélectionner la cellule résultat", "Écrire la formule avec =", "Utiliser les adresses de cellules", "Recopier la formule si nécessaire"]
    },
    "Graphiques, mise en page et impression": {
      title: "Défi pratique — Présenter les résultats",
      steps: ["Sélectionner les données", "Choisir le type de graphique", "Ajouter un titre", "Vérifier l’aperçu avant impression"]
    }
  };
  return map[lesson.title] || {title: lesson.order?.title || 'Défi pratique', steps: lesson.order?.steps || []};
}
function v60TableurKinePanel(lesson){
  const [sentence, answer, choices] = lesson.fill || [];
  const practice = genericPracticeItems(lesson);
  const questions = [
    {prompt: sentence || 'Complète la phrase : ____', answer: answer || '', choices: choices || []},
    ...(practice.questions || []).slice(0,3)
  ];
  const challenge = v60TableurChallenge(lesson);
  return `<section class="panel kine-panel v60-kine-panel"><div class="style-header clean-style-header"><div><span class="mini-pill">Style kinesthésique</span><h3>Fiche d’exercices organisée — ${v60Html(lesson.title)}</h3></div><p class="subtle">L’élève manipule la notion à travers trois formes : choisir, relier et ordonner.</p></div><div class="v60-exercise-grid"><article class="game v60-ex-card" data-game="fill"><div class="v60-card-head"><span>1</span><h4>Compléter et choisir</h4></div><div class="kine-fill-list">${questions.map((q,i)=>v60ChoiceQuestion(q,i+1)).join('')}</div><div class="feedback"></div></article><article class="game v60-ex-card"><div class="v60-card-head"><span>2</span><h4>Relier les notions</h4></div>${v60DragExercise(lesson.drag || [])}<div class="feedback"></div></article><article class="game v60-ex-card"><div class="v60-card-head"><span>3</span><h4>Ordonner les actions</h4></div>${v60OrderExercise(lesson.order?.title || challenge.title, lesson.order?.steps || challenge.steps)}<div class="feedback"></div></article><article class="v60-ex-card v60-challenge-card"><div class="v60-card-head"><span>4</span><h4>${v60Html(challenge.title)}</h4></div><p>Réalise cette mission dans le logiciel, puis explique oralement ce que tu as fait.</p><ol>${challenge.steps.map(s=>`<li>${v60Html(s)}</li>`).join('')}</ol></article></div></section>`;
}
function v60LogoTopicCard(item, idx){
  const fill = v60ChoiceQuestion({prompt:item.fillSentence, answer:item.answer, choices:item.choices}, 1);
  return `<article class="game v60-logo-topic-card"><div class="v60-topic-head"><span class="v60-topic-number">${idx+1}</span><div><h4>${v60Html(item.title)}</h4><p>${v60Html(item.intro)}</p></div></div><div class="v60-topic-activities"><div><h5>Exercice A — Compléter</h5>${fill}</div><div><h5>Exercice B — Relier</h5>${v60DragExercise(item.drag || [])}<div class="feedback"></div></div><div><h5>Exercice C — Ordonner</h5>${v60OrderExercise(item.orderTitle, item.steps || [])}<div class="feedback"></div></div></div></article>`;
}
function v60LogoKinePanel(lesson){
  const items = logoKineItems(lesson);
  if(!items.length) return '';
  const practice = logoPracticeItems(lesson);
  const practiceHtml = (practice.questions || []).map((q,i)=>v60ChoiceQuestion(q,i+1)).join('');
  return `<section class="panel kine-panel v60-kine-panel v60-logo-kine-panel"><div class="style-header clean-style-header"><div><span class="mini-pill">Style kinesthésique</span><h3>Exercices spéciaux par sous-titre — ${v60Html(lesson.title)}</h3></div><p class="subtle">Chaque sous-titre possède ses propres activités : compléter, relier, puis ordonner les étapes.</p></div><div class="v60-logo-topic-list">${items.map((item,i)=>v60LogoTopicCard(item,i)).join('')}</div><article class="game v60-ex-card v60-logo-practice" data-game="fill"><div class="v60-card-head"><span>+</span><h4>${v60Html(practice.title || 'Mission pratique')}</h4></div><p>${v60Html(practice.intro || '')}</p><div class="kine-fill-list">${practiceHtml}</div><div class="feedback"></div></article></section>`;
}
function kinePanel(lesson){
  if(!lesson) return '';
  if(logoKineItems(lesson).length) return v60LogoKinePanel(lesson);
  return v60TableurKinePanel(lesson);
}
function v60AudioItemsForLesson(lesson){
  const common = (title, fr, ar, keywords, question, answer)=>({title, fr, ar, keywords, question, answer});
  const map = {
    "Gestion d’un fichier tableur": [
      common("Le classeur", "Un fichier tableur est appelé classeur. Il sert à organiser les données dans des feuilles et à préparer des calculs automatiques.", "يسمى ملف الجدول مصنفا. يساعد على تنظيم المعطيات داخل أوراق وإنجاز الحسابات بطريقة آلية.", ["classeur", "feuille", "données"], "Comment appelle-t-on un fichier tableur ?", "un classeur"),
      common("Créer et nommer", "Au début du travail, je crée un nouveau classeur puis je lui donne un nom clair. Un bon nom aide à retrouver rapidement le fichier.", "في البداية ننشئ مصنفا جديدا ثم نعطيه اسما واضحا حتى نستطيع العثور عليه بسهولة.", ["créer", "nom clair", "retrouver"], "Pourquoi faut-il donner un nom clair au fichier ?", "pour le retrouver facilement"),
      common("Enregistrer et ouvrir", "Enregistrer signifie garder le travail dans un dossier. Ouvrir signifie retrouver un fichier déjà enregistré pour continuer le travail.", "الحفظ يعني الاحتفاظ بالعمل داخل مجلد. أما الفتح فيعني استرجاع ملف محفوظ سابقا لمواصلة العمل.", ["enregistrer", "ouvrir", "dossier"], "Que signifie enregistrer un fichier ?", "garder le travail")
    ],
    "Feuilles, cellules et adresses": [
      common("Feuille de calcul", "Un classeur peut contenir plusieurs feuilles. Chaque feuille ressemble à une grande grille composée de lignes et de colonnes.", "يمكن أن يحتوي المصنف على عدة أوراق. كل ورقة تشبه شبكة كبيرة تتكون من أسطر وأعمدة.", ["feuille", "ligne", "colonne"], "De quoi se compose une feuille de calcul ?", "de lignes et de colonnes"),
      common("Cellule", "Une cellule est l’intersection entre une ligne et une colonne. C’est l’endroit où l’on saisit une donnée, une formule ou un résultat.", "الخلية هي تقاطع سطر مع عمود. وهي المكان الذي نكتب فيه معطى أو صيغة أو نتيجة.", ["cellule", "intersection", "donnée"], "Qu’est-ce qu’une cellule ?", "l’intersection d’une ligne et d’une colonne"),
      common("Adresse", "L’adresse d’une cellule indique sa position. Par exemple, B3 signifie colonne B et ligne 3.", "عنوان الخلية يحدد مكانها. مثلا B3 تعني العمود B والسطر 3.", ["adresse", "B3", "position"], "Que signifie B3 ?", "colonne B et ligne 3")
    ],
    "Saisie des données et mise en forme d’un tableau": [
      common("Saisir les données", "Dans une cellule, on peut saisir un texte, un nombre, une date ou une formule. Il faut écrire chaque donnée dans la bonne cellule.", "داخل الخلية يمكن إدخال نص أو عدد أو تاريخ أو صيغة. يجب وضع كل معطى في خليته المناسبة.", ["texte", "nombre", "date", "formule"], "Cite deux types de données possibles.", "texte et nombre"),
      common("Mettre en forme", "La mise en forme améliore la lisibilité du tableau : titre visible, bordures, alignement, largeur des colonnes et couleurs sobres.", "التنسيق يجعل الجدول أكثر وضوحا: عنوان بارز، حدود، محاذاة، عرض مناسب للأعمدة وألوان معتدلة.", ["titre", "bordures", "alignement"], "À quoi sert la mise en forme ?", "à rendre le tableau lisible"),
      common("Ne pas confondre", "La mise en forme change l’apparence. Elle ne remplace pas les calculs. Les calculs doivent être faits par des formules ou des fonctions.", "التنسيق يغير المظهر فقط ولا يعوض الحسابات. الحسابات تنجز بالصيغ أو الدوال.", ["apparence", "calcul", "fonction"], "La mise en forme remplace-t-elle les calculs ?", "non")
    ],
    "Formules, fonctions et recopie": [
      common("Formule", "Une formule commence par le signe égal. Elle utilise des nombres, des opérateurs ou des adresses de cellules pour calculer automatiquement.", "تبدأ الصيغة بعلامة يساوي. تستعمل أعدادا أو عمليات أو عناوين خلايا للحساب الآلي.", ["=", "adresse", "calcul"], "Par quel signe commence une formule ?", "="),
      common("Fonction", "Une fonction est une formule prête à l’emploi. SOMME additionne, MOYENNE calcule la moyenne, MAX donne la plus grande valeur et MIN la plus petite.", "الدالة صيغة جاهزة. SOMME للجمع وMOYENNE للمعدل وMAX لأكبر قيمة وMIN لأصغر قيمة.", ["SOMME", "MOYENNE", "MAX", "MIN"], "Quelle fonction calcule une moyenne ?", "MOYENNE"),
      common("Recopie", "La poignée de recopie permet de réutiliser une formule dans d’autres lignes ou colonnes. Les résultats se recalculent quand les données changent.", "مقبض النسخ يسمح بإعادة استعمال الصيغة في أسطر أو أعمدة أخرى. وتتغير النتائج عند تغير المعطيات.", ["recopie", "réutiliser", "recalcul"], "Pourquoi utiliser la recopie ?", "pour réutiliser une formule")
    ],
    "Graphiques, mise en page et impression": [
      common("Graphique", "Un graphique transforme les données en représentation visuelle. Il aide à comparer les valeurs et à comprendre rapidement les résultats.", "يحول المبيان المعطيات إلى تمثيل بصري يساعد على المقارنة وفهم النتائج بسرعة.", ["graphique", "comparer", "résultat"], "Pourquoi créer un graphique ?", "pour comparer visuellement les données"),
      common("Choisir le type", "Le graphique en colonnes est utile pour comparer des quantités. Le graphique en secteurs est utile pour montrer les parts d’un total.", "مبيان الأعمدة مناسب للمقارنة بين الكميات. والمبيان الدائري مناسب لإظهار أجزاء المجموع.", ["colonnes", "secteurs", "total"], "Quel graphique montre les parts d’un total ?", "le graphique en secteurs"),
      common("Impression", "Avant d’imprimer, il faut vérifier l’orientation, les marges, la taille du tableau et l’aperçu avant impression.", "قبل الطباعة يجب التحقق من الاتجاه والهوامش وحجم الجدول والمعاينة قبل الطباعة.", ["orientation", "marges", "aperçu"], "Que faut-il vérifier avant d’imprimer ?", "l’aperçu avant impression")
    ],
    "Langage de programmation et environnement LOGO": [
      common("Programme", "Un programme est une suite d’instructions ordonnées. En LOGO, la tortue exécute les commandes dans l’ordre où elles sont écrites.", "البرنامج هو مجموعة من التعليمات المرتبة. في لوغو تنفذ السلحفاة الأوامر حسب ترتيب كتابتها.", ["programme", "ordre", "instructions"], "Pourquoi l’ordre des instructions est-il important ?", "parce qu’il change le résultat"),
      common("Langage de programmation", "Un langage de programmation contient des mots et des règles qui permettent de communiquer avec l’ordinateur. Une instruction mal écrite produit une erreur ou un résultat inattendu.", "لغة البرمجة تحتوي على كلمات وقواعد للتواصل مع الحاسوب. التعليمة الخاطئة قد تعطي خطأ أو نتيجة غير متوقعة.", ["langage", "règles", "erreur"], "À quoi sert un langage de programmation ?", "à communiquer avec l’ordinateur"),
      common("Environnement LOGO", "L’environnement LOGO contient l’espace de dessin, la console des commandes, les menus et parfois l’historique. Chaque zone a un rôle précis.", "بيئة لوغو تحتوي على مساحة الرسم ووحدة الأوامر والقوائم وأحيانا سجل الأوامر. لكل جزء دور محدد.", ["console", "dessin", "menus"], "Où écrit-on les commandes ?", "dans la console"),
      common("Configuration", "Le menu Configuration permet de régler la tortue, les couleurs, la vitesse et parfois l’épaisseur du crayon avant de commencer le dessin.", "قائمة الإعدادات تسمح بتغيير شكل السلحفاة والألوان والسرعة وسمك القلم قبل بداية الرسم.", ["configuration", "couleur", "vitesse"], "Que peut-on modifier dans Configuration ?", "la tortue, les couleurs et la vitesse")
    ],
    "Primitives de base": [
      common("Primitives", "Les primitives sont les commandes simples comprises directement par la tortue : AV, RE, TD, TG, LC, BC et VE.", "التعليمات الأساسية هي أوامر بسيطة تفهمها السلحفاة مباشرة مثل AV وRE وTD وTG وLC وBC وVE.", ["AV", "RE", "TD", "TG"], "Cite une primitive LOGO.", "AV"),
      common("Avancer et reculer", "AV fait avancer la tortue dans la direction où elle regarde. RE la fait reculer sans changer son orientation.", "AV تجعل السلحفاة تتقدم في اتجاه نظرها. وRE تجعلها تتراجع دون تغيير اتجاهها.", ["AV", "RE", "distance"], "Que signifie AV 50 ?", "avancer de 50 pas"),
      common("Tourner", "TD tourne la tortue à droite et TG la tourne à gauche. Le nombre qui suit indique l’angle en degrés.", "TD تدير السلحفاة نحو اليمين وTG نحو اليسار. والعدد بعدها يمثل الزاوية بالدرجات.", ["TD", "TG", "angle"], "Que signifie TD 90 ?", "tourner à droite de 90 degrés"),
      common("Crayon et écran", "LC lève le crayon pour se déplacer sans trace. BC baisse le crayon pour dessiner. VE efface l’écran et permet de recommencer.", "LC ترفع القلم للتحرك دون أثر. وBC تنزل القلم للرسم. وVE تمسح الشاشة للبدء من جديد.", ["LC", "BC", "VE"], "Quelle commande efface l’écran ?", "VE")
    ],
    "Instruction de répétition": [
      common("Pourquoi répéter ?", "La répétition permet d’exécuter plusieurs fois le même bloc d’instructions sans le réécrire. Le programme devient plus court et plus clair.", "التكرار يسمح بتنفيذ نفس مجموعة الأوامر عدة مرات دون إعادة كتابتها. يصبح البرنامج أقصر وأوضح.", ["répétition", "bloc", "programme court"], "Quel est l’avantage de REPETE ?", "éviter de réécrire les mêmes instructions"),
      common("Syntaxe", "La forme générale est REPETE nombre crochet ouvrant, instructions, crochet fermant. Le nombre indique combien de fois le bloc sera exécuté.", "الصيغة العامة هي REPETE ثم العدد ثم الأوامر بين معقوفين. العدد يحدد عدد مرات التنفيذ.", ["REPETE", "nombre", "crochets"], "Que signifie le nombre après REPETE ?", "le nombre de répétitions"),
      common("Exemple du carré", "Pour dessiner un carré, on répète quatre fois : avancer puis tourner de 90 degrés. On peut écrire REPETE 4 [AV 80 TD 90].", "لرسم مربع نكرر أربع مرات: تقدم ثم دوران بزاوية 90 درجة. يمكن كتابة REPETE 4 [AV 80 TD 90].", ["carré", "4", "90°"], "Pourquoi répéter 4 fois pour un carré ?", "car il a 4 côtés")
    ],
    "Procédures LOGO": [
      common("Procédure", "Une procédure est un petit programme nommé. Elle regroupe des instructions pour les réutiliser facilement.", "الإجراء برنامج صغير له اسم. يجمع أوامر يمكن إعادة استعمالها بسهولة.", ["procédure", "nom", "réutiliser"], "À quoi sert une procédure ?", "à réutiliser des instructions"),
      common("POUR et FIN", "Une procédure LOGO commence par POUR suivi du nom, puis contient les instructions, et se termine par FIN.", "يبدأ الإجراء في لوغو بكلمة POUR متبوعة بالاسم، ثم التعليمات، وينتهي بكلمة FIN.", ["POUR", "FIN", "nom"], "Par quel mot se termine une procédure ?", "FIN"),
      common("Appeler une procédure", "Après avoir créé une procédure, on l’exécute en écrivant simplement son nom. Cela rend le programme principal plus propre.", "بعد إنشاء الإجراء ننفذه بكتابة اسمه فقط. وهذا يجعل البرنامج الرئيسي منظما.", ["appel", "nom", "programme principal"], "Comment exécuter une procédure appelée CARRE ?", "écrire CARRE"),
      common("ECRIS", "L’instruction ECRIS permet d’afficher un message. Elle montre que LOGO peut produire un texte, pas seulement des formes.", "الأمر ECRIS يسمح بإظهار رسالة. وهذا يبين أن لوغو لا يرسم الأشكال فقط بل يمكنه عرض نصوص.", ["ECRIS", "message", "texte"], "Que permet l’instruction ECRIS ?", "afficher un message")
    ]
  };
  return map[lesson.title] || [common("Idée principale", lesson.fr || '', lesson.ar || '', [lesson.title], "Quelle est l’idée principale ?", lesson.title)];
}
function audioPanel(lesson){
  if(!lesson) return '';
  const items = v60AudioItemsForLesson(lesson);
  const fullFr = items.map((it,i)=>`Partie ${i+1}. ${it.title}. ${it.fr} Mots clés : ${it.keywords.join(', ')}. Question : ${it.question}. Réponse : ${it.answer}.`).join(' ');
  const fullAr = items.map((it,i)=>`الجزء ${i+1}. ${it.title}. ${it.ar}`).join(' ');
  return `<section class="panel audio-card v60-audio-panel"><div class="style-header"><div><span class="mini-pill">Style auditif</span><h3>Écouter, retenir, puis reformuler — ${v60Html(lesson.title)}</h3></div><p class="subtle">Explication améliorée : l’élève écoute l’idée, repère les mots-clés, puis répond à une question d’écoute.</p></div><div class="v60-audio-guide"><h4>Méthode d’écoute</h4><ol><li>Écouter une première fois sans écrire.</li><li>Réécouter et noter les mots importants.</li><li>Répéter oralement l’idée principale.</li><li>Répondre à la question d’écoute pour vérifier la compréhension.</li></ol><div class="audio-row"><button class="btn" data-speak="fr" data-text="${v60Attr(fullFr)}">▶ Écouter toute l’explication FR</button><button class="btn green" data-speak="ar" data-text="${v60Attr(fullAr)}">▶ استمع إلى الشرح كاملا</button><button class="btn ghost small stop-audio-btn" data-action="stop-speech">■ Arrêter</button></div></div><div id="voiceWarning" class="voice-warning">La voix arabe n’est pas disponible dans ce navigateur. Essayez Chrome/Edge ou installez une voix arabe.</div><div class="v60-audio-grid">${items.map((it,i)=>`<article class="v60-audio-card"><div class="v60-audio-number">${i+1}</div><h4>${v60Html(it.title)}</h4><p>${v60Html(it.fr)}</p><div class="v60-keywords">${it.keywords.map(k=>`<span>${v60Html(k)}</span>`).join('')}</div><div class="v60-listen-question"><strong>Question d’écoute :</strong> ${v60Html(it.question)}<br><em>Réponse attendue : ${v60Html(it.answer)}</em></div><div class="audio-row"><button class="btn small" data-speak="fr" data-text="${v60Attr(`${it.title}. ${it.fr}. Question : ${it.question}. Réponse : ${it.answer}.`)}">▶ Écouter FR</button><button class="btn green small" data-speak="ar" data-text="${v60Attr(`${it.title}. ${it.ar}`)}">▶ AR</button></div></article>`).join('')}</div></section>`;
}

/* =========================================================
   V61 — Sous-titres interactifs pour les styles auditif et kinesthésique
   - Style auditif : suppression du contenu long ; chaque sous-titre ouvre son explication FR/AR + arrêt.
   - Style kinesthésique : suppression du contenu actuel ; chaque sous-titre ouvre 2 activités : compléter + glisser.
========================================================= */
const V61_ACTIVITY_BANK = {
  "Le classeur": {
    fillSentence: "Un fichier tableur est appelé ____.", answer: "classeur", choices: ["classeur", "navigateur", "image"],
    drag: [["Classeur", "Fichier tableur contenant des feuilles"], ["Feuille", "Page de travail dans le classeur"], ["Données", "Informations saisies dans les cellules"]]
  },
  "Créer et nommer": {
    fillSentence: "Donner un nom clair au fichier aide à le ____ rapidement.", answer: "retrouver", choices: ["retrouver", "colorier", "supprimer"],
    drag: [["Créer", "Commencer un nouveau fichier"], ["Nommer", "Donner un nom clair"], ["Retrouver", "Identifier facilement le fichier"]]
  },
  "Enregistrer et ouvrir": {
    fillSentence: "Enregistrer signifie ____ le travail dans un dossier.", answer: "garder", choices: ["garder", "effacer", "dessiner"],
    drag: [["Enregistrer", "Garder le travail"], ["Ouvrir", "Reprendre un fichier déjà sauvegardé"], ["Dossier", "Lieu où le fichier est rangé"]]
  },
  "Feuille de calcul": {
    fillSentence: "Une feuille de calcul est composée de lignes et de ____.", answer: "colonnes", choices: ["colonnes", "phrases", "images"],
    drag: [["Feuille", "Page du classeur"], ["Ligne", "Suite horizontale numérotée"], ["Colonne", "Suite verticale désignée par une lettre"]]
  },
  "Cellule": {
    fillSentence: "Une cellule est l’intersection d’une ligne et d’une ____.", answer: "colonne", choices: ["colonne", "feuille", "couleur"],
    drag: [["Cellule", "Intersection ligne/colonne"], ["Ligne", "Repère horizontal"], ["Colonne", "Repère vertical"]]
  },
  "Adresse": {
    fillSentence: "L’adresse B3 signifie colonne B et ligne ____.", answer: "3", choices: ["3", "B", "30"],
    drag: [["Adresse", "Position d’une cellule"], ["B3", "Colonne B et ligne 3"], ["Position", "Endroit exact dans la feuille"]]
  },
  "Saisir les données": {
    fillSentence: "Dans une cellule, on peut saisir un texte, un nombre, une date ou une ____.", answer: "formule", choices: ["formule", "fenêtre", "souris"],
    drag: [["Texte", "Donnée composée de lettres"], ["Nombre", "Donnée utilisée pour calculer"], ["Formule", "Expression qui produit un résultat"]]
  },
  "Mettre en forme": {
    fillSentence: "La mise en forme rend le tableau plus ____.", answer: "lisible", choices: ["lisible", "invisible", "lent"],
    drag: [["Bordures", "Lignes qui entourent les cellules"], ["Alignement", "Position du contenu dans la cellule"], ["Titre", "Texte qui présente le tableau"]]
  },
  "Ne pas confondre": {
    fillSentence: "La mise en forme change l’apparence, mais ne remplace pas les ____.", answer: "calculs", choices: ["calculs", "couleurs", "bordures"],
    drag: [["Apparence", "Aspect visuel du tableau"], ["Calcul", "Résultat obtenu par formule ou fonction"], ["Fonction", "Formule prête à l’emploi"]]
  },
  "Formule": {
    fillSentence: "Une formule commence par le signe ____.", answer: "=", choices: ["=", "+", "#"],
    drag: [["Formule", "Calcul écrit dans une cellule"], ["=", "Signe de début d’une formule"], ["Adresse", "Référence d’une cellule utilisée dans un calcul"]]
  },
  "Fonction": {
    fillSentence: "La fonction ____ permet de calculer une moyenne.", answer: "MOYENNE", choices: ["MOYENNE", "MAX", "MIN"],
    drag: [["SOMME", "Additionne des valeurs"], ["MOYENNE", "Calcule la moyenne"], ["MAX", "Donne la plus grande valeur"]]
  },
  "Recopie": {
    fillSentence: "La poignée de recopie permet de ____ une formule.", answer: "réutiliser", choices: ["réutiliser", "supprimer", "fermer"],
    drag: [["Recopie", "Réutiliser une formule ailleurs"], ["Poignée", "Petit carré utilisé pour tirer"], ["Recalcul", "Mise à jour automatique du résultat"]]
  },
  "Graphique": {
    fillSentence: "Un graphique permet de comparer les données de façon ____.", answer: "visuelle", choices: ["visuelle", "sonore", "cachée"],
    drag: [["Graphique", "Représentation visuelle des données"], ["Comparer", "Observer les différences"], ["Résultat", "Valeur obtenue après traitement"]]
  },
  "Choisir le type": {
    fillSentence: "Le graphique en secteurs montre les parts d’un ____.", answer: "total", choices: ["total", "clavier", "dossier"],
    drag: [["Colonnes", "Comparer des quantités"], ["Secteurs", "Montrer les parts d’un total"], ["Type", "Forme choisie pour représenter les données"]]
  },
  "Impression": {
    fillSentence: "Avant d’imprimer, il faut vérifier l’____ avant impression.", answer: "aperçu", choices: ["aperçu", "audio", "adresse"],
    drag: [["Aperçu", "Vérification avant impression"], ["Marges", "Espaces autour de la page"], ["Orientation", "Sens portrait ou paysage"]]
  },
  "Programme": {
    fillSentence: "Un programme est une suite d’instructions ____.", answer: "ordonnées", choices: ["ordonnées", "mélangées", "effacées"],
    drag: [["Programme", "Suite d’instructions"], ["Instruction", "Commande donnée à la tortue"], ["Ordre", "Position des commandes dans le programme"]]
  },
  "Langage de programmation": {
    fillSentence: "Un langage de programmation permet de communiquer avec l’____.", answer: "ordinateur", choices: ["ordinateur", "cahier", "tableau"],
    drag: [["Langage", "Ensemble de mots et de règles"], ["Règle", "Façon correcte d’écrire"], ["Erreur", "Résultat d’une instruction mal écrite"]]
  },
  "Environnement LOGO": {
    fillSentence: "Dans LOGO, on écrit les commandes dans la ____.", answer: "console", choices: ["console", "feuille", "marge"],
    drag: [["Console", "Zone où l’on écrit les commandes"], ["Espace de dessin", "Zone où la tortue trace"], ["Menu", "Liste d’outils et de réglages"]]
  },
  "Configuration": {
    fillSentence: "Le menu Configuration peut régler la couleur, la vitesse et la ____.", answer: "tortue", choices: ["tortue", "moyenne", "cellule"],
    drag: [["Configuration", "Réglage de l’environnement"], ["Vitesse", "Rapidité d’exécution"], ["Couleur", "Aspect du tracé ou de la tortue"]]
  },
  "Primitives": {
    fillSentence: "Les primitives sont des commandes simples comme AV, RE, TD et ____.", answer: "TG", choices: ["TG", "B3", "SOMME"],
    drag: [["Primitive", "Commande simple comprise par LOGO"], ["AV", "Avancer"], ["TD", "Tourner à droite"]]
  },
  "Avancer et reculer": {
    fillSentence: "AV 50 signifie avancer de 50 ____.", answer: "pas", choices: ["pas", "cellules", "feuilles"],
    drag: [["AV", "Faire avancer la tortue"], ["RE", "Faire reculer la tortue"], ["Distance", "Nombre de pas à parcourir"]]
  },
  "Tourner": {
    fillSentence: "TD 90 signifie tourner à droite de 90 ____.", answer: "degrés", choices: ["degrés", "lignes", "pages"],
    drag: [["TD", "Tourner à droite"], ["TG", "Tourner à gauche"], ["Angle", "Mesure du changement d’orientation"]]
  },
  "Crayon et écran": {
    fillSentence: "La commande VE permet d’____ l’écran.", answer: "effacer", choices: ["effacer", "enregistrer", "imprimer"],
    drag: [["LC", "Lever le crayon"], ["BC", "Baisser le crayon"], ["VE", "Effacer l’écran"]]
  },
  "Pourquoi répéter ?": {
    fillSentence: "La répétition évite de réécrire les mêmes ____.", answer: "instructions", choices: ["instructions", "marges", "adresses"],
    drag: [["Répétition", "Exécuter plusieurs fois"], ["Bloc", "Groupe d’instructions"], ["Programme court", "Programme plus simple à lire"]]
  },
  "Syntaxe": {
    fillSentence: "Dans REPETE, le nombre indique le nombre de ____.", answer: "répétitions", choices: ["répétitions", "feuilles", "graphiques"],
    drag: [["REPETE", "Instruction de répétition"], ["Nombre", "Combien de fois répéter"], ["Crochets", "Contiennent les instructions répétées"]]
  },
  "Exemple du carré": {
    fillSentence: "Pour dessiner un carré, on répète quatre fois AV puis TD ____.", answer: "90", choices: ["90", "3", "360"],
    drag: [["Carré", "Figure à quatre côtés"], ["4", "Nombre de côtés du carré"], ["90°", "Angle de rotation pour un carré"]]
  },
  "Procédure": {
    fillSentence: "Une procédure est un petit programme qui possède un ____.", answer: "nom", choices: ["nom", "graphique", "dossier"],
    drag: [["Procédure", "Petit programme nommé"], ["Nom", "Mot utilisé pour appeler la procédure"], ["Réutiliser", "Employer plusieurs fois sans réécrire"]]
  },
  "POUR et FIN": {
    fillSentence: "Une procédure LOGO se termine par le mot ____.", answer: "FIN", choices: ["FIN", "AV", "MAX"],
    drag: [["POUR", "Début d’une procédure"], ["FIN", "Fin d’une procédure"], ["Nom", "Identifiant de la procédure"]]
  },
  "Appeler une procédure": {
    fillSentence: "Pour exécuter une procédure appelée CARRE, on écrit ____.", answer: "CARRE", choices: ["CARRE", "SOMME", "B3"],
    drag: [["Appeler", "Exécuter une procédure"], ["CARRE", "Exemple de nom de procédure"], ["Programme principal", "Programme qui utilise les procédures"]]
  },
  "ECRIS": {
    fillSentence: "L’instruction ECRIS permet d’afficher un ____.", answer: "message", choices: ["message", "classeur", "marge"],
    drag: [["ECRIS", "Afficher un texte"], ["Message", "Texte montré à l’écran"], ["Texte", "Information composée de caractères"]]
  }
};
function v61TopicsForLesson(lesson){
  return (v60AudioItemsForLesson(lesson)||[]).map((it, index)=>{
    const bank = V61_ACTIVITY_BANK[it.title] || {};
    return {
      ...it,
      index,
      fillSentence: bank.fillSentence || `${it.title} : complète avec le mot-clé ____.` ,
      answer: bank.answer || (it.keywords && it.keywords[0]) || it.title,
      choices: bank.choices || [((it.keywords&&it.keywords[0])||it.title), it.title, 'autre'],
      drag: bank.drag || [[it.title, it.fr], [((it.keywords&&it.keywords[0])||'Mot-clé'), 'Mot important de l’explication']]
    };
  });
}
function v61TopicButtons(items, kind){
  return `<div class="v61-subtitle-list">${items.map((it,i)=>`<button type="button" class="v61-subtitle-btn ${i===0?'suggested':''}" data-v61-${kind}-topic="${i}"><span>${i+1}</span>${v60Html(it.title)}<b>›</b></button>`).join('')}</div>`;
}
function v61AudioDetail(it){
  const frText = `${it.title}. ${it.fr}`;
  const arText = `${it.title}. ${it.ar}`;
  return `<article class="v61-detail-card v61-audio-detail"><div class="v61-detail-head"><span>Explication du sous-titre</span><h4>${v60Html(it.title)}</h4></div><div class="v61-two-cols"><div class="v61-lang-box"><h5>Explication en français</h5><p>${v60Html(it.fr)}</p></div><div class="v61-lang-box ar"><h5>الشرح بالعربية</h5><p>${v60Html(it.ar)}</p></div></div><div class="audio-row v61-audio-actions"><button class="btn small" data-speak="fr" data-text="${v60Attr(frText)}">▶ Écouter FR</button><button class="btn green small" data-speak="ar" data-text="${v60Attr(arText)}">▶ استمع AR</button><button class="btn ghost small stop-audio-btn" data-action="stop-speech">■ Arrêter</button></div></article>`;
}
function audioPanel(lesson){
  if(!lesson) return '';
  const items = v61TopicsForLesson(lesson);
  return `<section class="panel audio-card v61-panel v61-audio-panel"><div class="style-header"><div><span class="mini-pill">Style auditif</span><h3>Sous-titres à écouter — ${v60Html(lesson.title)}</h3></div><p class="subtle">Clique sur un sous-titre pour afficher seulement son explication en français et en arabe.</p></div>${v61TopicButtons(items,'audio')}<div id="voiceWarning" class="voice-warning">La voix arabe n’est pas disponible dans ce navigateur. Essayez Chrome/Edge ou installez une voix arabe.</div><div class="v61-selected-content" data-v61-audio-content><div class="v61-empty-state">Choisir un sous-titre pour afficher son explication.</div></div></section>`;
}
function v61KineDetail(it){
  const q = {prompt: it.fillSentence, answer: it.answer, choices: it.choices};
  return `<article class="v61-detail-card v61-kine-detail"><div class="v61-detail-head"><span>Activités du sous-titre</span><h4>${v60Html(it.title)}</h4></div><div class="v61-kine-grid"><section class="game v61-activity-card" data-game="fill"><div class="v61-activity-title"><span>1</span><h5>Compléter une phrase</h5></div><div class="kine-fill-list">${v60ChoiceQuestion(q,1)}</div><div class="feedback"></div></section><section class="game v61-activity-card"><div class="v61-activity-title"><span>2</span><h5>Glisser vers la bonne définition</h5></div>${v60DragExercise(it.drag)}<div class="feedback"></div></section></div></article>`;
}
function kinePanel(lesson){
  if(!lesson) return '';
  const items = v61TopicsForLesson(lesson);
  return `<section class="panel kine-panel v61-panel v61-kine-panel"><div class="style-header clean-style-header"><div><span class="mini-pill">Style kinesthésique</span><h3>Activités par sous-titre — ${v60Html(lesson.title)}</h3></div><p class="subtle">Clique sur un sous-titre : tu trouveras uniquement deux activités spéciales, compléter une phrase puis glisser vers la bonne définition.</p></div>${v61TopicButtons(items,'kine')}<div class="v61-selected-content" data-v61-kine-content><div class="v61-empty-state">Choisir un sous-titre pour afficher ses deux activités.</div></div></section>`;
}
document.addEventListener('click', function(e){
  const audioBtn = e.target.closest('[data-v61-audio-topic]');
  if(audioBtn){
    const lesson = currentUnit().lessons[state.lessonIndex];
    const item = v61TopicsForLesson(lesson)[Number(audioBtn.dataset.v61AudioTopic)];
    const panel = audioBtn.closest('.v61-panel');
    panel.querySelectorAll('.v61-subtitle-btn').forEach(b=>b.classList.remove('active'));
    audioBtn.classList.add('active');
    const target = panel.querySelector('[data-v61-audio-content]');
    if(target && item) target.innerHTML = v61AudioDetail(item);
    return;
  }
  const kineBtn = e.target.closest('[data-v61-kine-topic]');
  if(kineBtn){
    const lesson = currentUnit().lessons[state.lessonIndex];
    const item = v61TopicsForLesson(lesson)[Number(kineBtn.dataset.v61KineTopic)];
    const panel = kineBtn.closest('.v61-panel');
    panel.querySelectorAll('.v61-subtitle-btn').forEach(b=>b.classList.remove('active'));
    kineBtn.classList.add('active');
    const target = panel.querySelector('[data-v61-kine-content]');
    if(target && item) target.innerHTML = v61KineDetail(item);
    return;
  }
});

/* =========================================================
   V62 — Diagnostic personnalisé + plan de révision
   Idée ajoutée pour les deux unités : Tableur et LOGO.
   Après le contrôle final, l'élève reçoit :
   - les points réussis,
   - les notions à revoir,
   - un plan de révision guidé,
   - un accès direct aux leçons concernées.
   L'espace enseignant et l'export incluent aussi les points à réviser.
========================================================= */
function v62NormalizeText(txt){
  return String(txt || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function v62FindLessonIndex(unit, keywords, fallback=0){
  const lessons = unit && Array.isArray(unit.lessons) ? unit.lessons : [];
  const keys = keywords.map(v62NormalizeText);
  const idx = lessons.findIndex(l => keys.some(k => v62NormalizeText(l.title).includes(k)));
  if(idx >= 0) return idx;
  return Math.max(0, Math.min(fallback, Math.max(0, lessons.length - 1)));
}
function v62ExamMetaForQuestion(unit, q, index){
  const text = v62NormalizeText(Array.isArray(q) ? q[0] : q);
  const isLogo = v62NormalizeText(unit && unit.id).includes('logo') || v62NormalizeText(unit && unit.title).includes('logo');
  if(isLogo){
    if(/repete|repetition|triangle/.test(text)){
      const lessonIndex = v62FindLessonIndex(unit, ['répétition','repetition'], 3);
      return {
        notion:'Instruction de répétition',
        lessonIndex,
        advice:'Revoir REPETE, le nombre de répétitions, les crochets et le lien entre angle et figure.',
        action:'Refaire une figure simple : carré, triangle, puis une figure répétitive.'
      };
    }
    if(/procedure|pour|fin|reutilis/.test(text)){
      const lessonIndex = v62FindLessonIndex(unit, ['procédure','procedure'], 4);
      return {
        notion:'Procédures LOGO',
        lessonIndex,
        advice:'Revoir comment créer une procédure avec POUR, lui donner un nom, la terminer par FIN et l’appeler ensuite.',
        action:'Écrire une petite procédure CARRE puis l’utiliser plusieurs fois.'
      };
    }
    if(/av |re |td |tg |lc|bc|ve|nettoie|couleur|fcc|tortue|crayon/.test(text)){
      const lessonIndex = v62FindLessonIndex(unit, ['primitive','primitives'], 2);
      return {
        notion:'Primitives de base LOGO',
        lessonIndex,
        advice:'Revoir les commandes AV, RE, TD, TG, LC, BC, VE/NETTOIE et les commandes de couleur.',
        action:'Tester chaque primitive et observer directement le déplacement de la tortue.'
      };
    }
    const lessonIndex = v62FindLessonIndex(unit, ['langage','environnement'], 0);
    return {
      notion:'Programme et ordre des instructions',
      lessonIndex,
      advice:'Revoir la notion de programme : une suite d’instructions précises, ordonnées et exécutées dans l’ordre.',
      action:'Lire un petit programme LOGO et prédire le dessin avant l’exécution.'
    };
  }

  if(/formule|somme|moyenne|poignee|recopie|automatique|recalcule/.test(text)){
    const lessonIndex = v62FindLessonIndex(unit, ['formules','fonctions','recopie'], 3);
    return {
      notion:'Formules, fonctions et recopie',
      lessonIndex,
      advice:'Revoir le signe =, les fonctions SOMME/MOYENNE, les références de cellules et la poignée de recopie.',
      action:'Créer un mini-tableau de notes et recopier une formule sur plusieurs lignes.'
    };
  }
  if(/graphique|secteurs|imprimer|impression|mise en page|orientation|zone d'impression/.test(text)){
    const lessonIndex = v62FindLessonIndex(unit, ['graphique','impression'], 4);
    return {
      notion:'Graphiques et impression',
      lessonIndex,
      advice:'Revoir le choix des données, le type de graphique, le titre, la mise en page et l’aperçu avant impression.',
      action:'Créer un graphique simple puis vérifier l’aperçu avant impression.'
    };
  }
  if(/bordure|remplissage|date|renommer|couleur|forme/.test(text)){
    const lessonIndex = v62FindLessonIndex(unit, ['saisie','mise en forme'], 2);
    return {
      notion:'Saisie des données et mise en forme',
      lessonIndex,
      advice:'Revoir les types de données, les bordures, le remplissage, l’alignement et le renommage d’une feuille.',
      action:'Mettre en forme un tableau avec titres, bordures et couleurs sobres.'
    };
  }
  const lessonIndex = v62FindLessonIndex(unit, ['fichier','feuilles','cellules','adresses'], index < 4 ? 0 : 1);
  return {
    notion:'Classeur, feuilles, cellules et adresses',
    lessonIndex,
    advice:'Revoir le rôle du tableur, le classeur, les feuilles, les cellules, les colonnes, les lignes et les adresses.',
    action:'Identifier dans Excel une cellule, son adresse, une feuille et la barre de formule.'
  };
}
function v62BuildRevisionGroups(items){
  const map = new Map();
  items.forEach(item => {
    const key = item.notion || 'Notion à revoir';
    if(!map.has(key)){
      map.set(key, {
        notion:key,
        count:0,
        lessonIndex:Number.isFinite(Number(item.lessonIndex)) ? Number(item.lessonIndex) : 0,
        advice:item.advice || '',
        action:item.action || '',
        questions:[]
      });
    }
    const group = map.get(key);
    group.count += 1;
    group.questions.push(item.number);
  });
  return [...map.values()].sort((a,b)=>b.count-a.count || a.lessonIndex-b.lessonIndex);
}
function v62LevelLabel(score){
  if(score >= 16) return {title:'Très bonne maîtrise', text:'Tu maîtrises bien l’unité. Continue avec des exercices d’approfondissement.'};
  if(score > 10) return {title:'Maîtrise satisfaisante', text:'La base est acquise. Il reste quelques notions à renforcer pour stabiliser les connaissances.'};
  if(score >= 8) return {title:'Maîtrise fragile', text:'Tu as des acquis, mais une révision guidée est nécessaire avant de refaire le contrôle.'};
  return {title:'Révision prioritaire', text:'Il faut reprendre les notions essentielles étape par étape avec les fiches, l’audio et les activités.'};
}
function v62OpenLessonButton(unit, lessonIndex, label='Réviser cette leçon'){
  const safeIndex = Math.max(0, Math.min(Number(lessonIndex)||0, (unit.lessons||[]).length - 1));
  return `<button type="button" class="v62-revision-btn" onclick="state.page='lesson';state.lessonIndex=${safeIndex};state.tab='visual';renderUnit();">${esc(label)}</button>`;
}
function v62RevisionPlanHtml(unit, score, unresolved){
  const level = v62LevelLabel(score);
  const groups = v62BuildRevisionGroups(unresolved);
  if(groups.length === 0){
    return `<section class="v62-diagnostic-card v62-success-card">
      <div class="v62-diagnostic-head"><span>Diagnostic personnalisé</span><h3>${esc(level.title)}</h3></div>
      <p>${esc(level.text)}</p>
      <div class="v62-plan-grid">
        <div><strong>Point fort</strong><p>Toutes les questions du contrôle sont correctes.</p></div>
        <div><strong>Prochaine étape</strong><p>Refaire la situation d’intégration ou aider un camarade à comprendre une notion.</p></div>
      </div>
    </section>`;
  }
  const priority = groups.map(g => `<article class="v62-remediation-item">
    <div class="v62-remediation-title"><strong>${esc(g.notion)}</strong><span>${g.count} question${g.count>1?'s':''}</span></div>
    <p><b>Conseil :</b> ${esc(g.advice)}</p>
    <p><b>Action :</b> ${esc(g.action)}</p>
    <p class="v62-question-ref">Questions concernées : ${g.questions.map(n=>'Q'+n).join(', ')}</p>
    ${v62OpenLessonButton(unit, g.lessonIndex)}
  </article>`).join('');
  return `<section class="v62-diagnostic-card">
    <div class="v62-diagnostic-head"><span>Diagnostic personnalisé</span><h3>${esc(level.title)}</h3></div>
    <p>${esc(level.text)}</p>
    <div class="v62-plan-grid">
      <div><strong>Réussites</strong><p>${score} réponse${score>1?'s':''} correcte${score>1?'s':''} sur 20.</p></div>
      <div><strong>Priorité</strong><p>Commencer par la notion qui contient le plus d’erreurs, puis refaire l’activité kinesthésique.</p></div>
    </div>
    <h4>Notions à revoir en priorité</h4>
    <div class="v62-remediation-list">${priority}</div>
    <div class="v62-method-box">
      <strong>Méthode conseillée en 3 étapes :</strong>
      <ol>
        <li>Lire la fiche visuelle de la leçon concernée.</li>
        <li>Écouter l’explication du style auditif en français ou en arabe.</li>
        <li>Refaire les activités kinesthésiques, puis revenir au contrôle final.</li>
      </ol>
    </div>
  </section>`;
}
function v62DiagnosticTextFromResult(r){
  const value = r && (r.diagnostic || r.points_a_reviser || r.revision_points || '');
  if(Array.isArray(value)) return value.length ? value.join(' | ') : 'Maîtrisé';
  const text = String(value || '').trim();
  return text || 'Maîtrisé';
}

function renderExam(unit){
  const questions = unit.exam.map((q,i)=>{
    const meta = v62ExamMetaForQuestion(unit, q, i);
    return `<div class="question v62-question-card">
      <div class="v62-question-meta"><span>Question ${i+1}</span><small>${esc(meta.notion)}</small></div>
      <p>${i+1}. ${esc(q[0])}</p>
      <div class="options">${q[1].map((op,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}" data-correct="${q[2]}"> ${esc(op)}</label>`).join('')}</div>
    </div>`;
  }).join('');
  return `<div class="section-head"><div><h2>Contrôle final de l’unité</h2><p>Ce contrôle contient seulement des questions liées à : <strong>${esc(unit.title)}</strong>. Après validation, l’application affiche la correction et un <strong>plan de révision personnalisé</strong>.</p></div><span class="pill">20 questions / +1 par bonne réponse</span></div>
  <div class="panel v62-info-panel"><strong>Nouvelle idée ajoutée :</strong> après le contrôle, l’élève voit ses points forts, les notions à revoir et des boutons pour revenir directement aux leçons concernées.</div>
  <form id="examForm"><div class="exam-list">${questions}</div><button class="btn" type="submit">Terminer le contrôle</button><div id="examResult"></div></form>`;
}

// Remplace le traitement du contrôle final par la version avec diagnostic personnalisé.
document.addEventListener('submit', function(e){
  if(!e.target || e.target.id !== 'examForm') return;
  e.preventDefault();
  e.stopImmediatePropagation();
  const unit = currentUnit();
  let score = 0;
  const unresolved = [];
  unit.exam.forEach((q,i)=>{
    const r = e.target.querySelector(`input[name="q${i}"]:checked`);
    const ok = r && Number(r.value) === Number(q[2]);
    if(ok){
      score++;
    }else{
      const meta = v62ExamMetaForQuestion(unit, q, i);
      unresolved.push({
        number:i+1,
        question:q[0],
        correction:q[1][q[2]],
        status:r ? 'incorrecte' : 'non répondue',
        ...meta
      });
    }
  });
  const st = getStudent() || {prenom:'', nom:''};
  const bonus = score > 10 ? 5 : 0;
  const totalAvecBonus = Math.min(20, score + bonus);
  const reussi = score > 10;
  const statut = reussi ? 'Réussi' : 'À revoir';
  const now = new Date().toISOString();
  const groups = v62BuildRevisionGroups(unresolved);
  const diagnostic = groups.length ? groups.map(g => `${g.notion} (${g.count})`).join(' | ') : 'Maîtrisé';
  const revisionPlan = groups.length ? groups.map(g => `${g.notion}: ${g.action}`).join(' | ') : 'Approfondissement conseillé';
  saveExamResult({
    nom:st.nom,
    prenom:st.prenom,
    unite:unit.title,
    note_finale:score,
    bonus,
    total_avec_bonus:totalAvecBonus,
    statut,
    reussi,
    diagnostic,
    points_a_reviser:diagnostic,
    plan_revision:revisionPlan,
    date_iso:now
  });
  const message = reussi
    ? `Félicitations ${esc(st.prenom)} ${esc(st.nom)} ! Tu as obtenu le bonus. Continue avec la même concentration.`
    : `Bon essai ${esc(st.prenom)} ${esc(st.nom)} : suis le plan de révision ci-dessous puis réessaie pour progresser.`;
  const correctionHtml = unresolved.length ? `<div class="correction-list"><h3>Questions non résolues ou incorrectes</h3>${unresolved.map(item=>`<div class="correction-item"><strong>Question ${item.number} (${esc(item.status)}) — ${esc(item.notion)}</strong><p>${esc(item.question)}</p><p><span class="important">Correction :</span> ${esc(item.correction)}</p><p><span class="important">À réviser :</span> ${esc(item.advice)}</p></div>`).join('')}</div>` : `<p class="success-msg">Bravo ! Toutes les questions sont correctes.</p>`;
  const revisionHtml = v62RevisionPlanHtml(unit, score, unresolved);
  const result = document.getElementById('examResult');
  if(result){
    result.innerHTML = `<div class="result-box exam-final-result ${reussi?'success':'retry'}"><h3>${reussi?'Réussite avec bonus':'À améliorer'}</h3><p>Score du contrôle final : <strong>${score}/20</strong></p><p>Bonus : <strong>${bonus?'Avec bonus (+5 pts)':'Sans bonus'}</strong></p><p>Total avec bonus : <strong>${totalAvecBonus}/20</strong></p><p>${message}</p>${revisionHtml}${correctionHtml}<p class="save-note">Résultat enregistré localement. Le professeur peut consulter la note et les points à réviser depuis <strong>Espace enseignant</strong>.</p></div>`;
    result.scrollIntoView({behavior:'smooth', block:'start'});
  }
}, true);

function getAllTeacherRows(){
  const results = getResults();
  return results.map((r)=>{
    const noteRaw = Number(r.note_finale ?? r.score ?? r.note ?? r.noteFinale ?? 0);
    const note = Number.isFinite(noteRaw) ? noteRaw : 0;
    const hasBonus = Number(r.bonus || 0) > 0 || note > 10;
    return {
      nom: r.nom || r.lastName || '—',
      prenom: r.prenom || r.firstName || '—',
      unite: r.unitTitle || r.unite || (UNITS.find(u=>u.id===r.unitId)?.title) || '—',
      note,
      bonus: hasBonus ? 'Avec bonus' : 'Sans bonus',
      diagnostic: v62DiagnosticTextFromResult(r)
    };
  });
}
function exportResultsCsv(){
  const rows = getAllTeacherRows();
  const header = ['Nom','Prénom','Unité','Note /20','Bonus','À réviser'];
  const csvLines = [header.join(';')].concat(rows.map(r => [
    r.nom,
    r.prenom,
    r.unite,
    String(r.note).replace('.',','),
    r.bonus,
    r.diagnostic
  ].map(v => `"${String(v).replaceAll('"','""')}"`).join(';')));
  const blob = new Blob(['\ufeff' + csvLines.join('\n')], {type:'text/csv;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'notes_diagnostic_edu_libre.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}
function exportResultsToCsv(){
  exportResultsCsv();
}
function renderResultsPage(){
  const rows = getAllTeacherRows();
  $('#app').innerHTML = appShell(`
    <section class="v58-teacher-panel v62-teacher-panel">
      <div class="v58-teacher-head">
        <div>
          <h1>Espace enseignant</h1>
          <p>Tableau des notes avec diagnostic des notions à réviser pour chaque élève.</p>
        </div>
        <div class="v58-actions">
          <button class="v58-btn primary" onclick="exportResultsCsv()">Exploiter le fichier des notes</button>
          <button class="v58-btn" onclick="renderHome()">Retour aux unités</button>
        </div>
      </div>
      ${rows.length ? `
        <div class="v58-table-wrap">
          <table class="v58-table v62-teacher-table">
            <thead><tr><th>Nom</th><th>Prénom</th><th>Unité</th><th>Note</th><th>Bonus</th><th>À réviser</th></tr></thead>
            <tbody>
              ${rows.map(r=>`
                <tr>
                  <td>${esc(r.nom)}</td>
                  <td>${esc(r.prenom)}</td>
                  <td>${esc(r.unite)}</td>
                  <td><strong>${esc(String(r.note))}/20</strong></td>
                  <td><span class="v58-pill ${r.bonus === 'Avec bonus' ? 'good' : 'neutral'}">${esc(r.bonus)}</span></td>
                  <td><span class="v62-diagnostic-pill">${esc(r.diagnostic)}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <p class="muted" style="margin-top:14px">Le fichier CSV est ouvrable avec Excel et contient aussi la colonne “À réviser”.</p>
      ` : `
        <div class="empty-state">
          <h2>Aucune note enregistrée</h2>
          <p>Les notes et les diagnostics apparaîtront ici après la réalisation d’un contrôle final.</p>
        </div>
      `}
    </section>
  `);
}


/* =========================================================
   V66B — Ajout des deux premières unités
   Système informatique + Système d’exploitation
   Même structure : visuel définitions/exemples précis, auditif FR/AR, kinesthésique par sous-titre.
========================================================= */
(function(){
  const V66_UNITS = [{"id": "u1_systeme", "icon": "", "title": "Unité 1 : Système informatique", "short": "Matériel, logiciels, périphériques et traitement de l’information", "color": "blue", "competence": "C1", "duration": "8 h", "officialResources": ["Notion de système informatique", "Matériel informatique", "Logiciels", "Périphériques d’entrée, de sortie et de stockage", "Traitement de l’information"], "intro": "Comprendre qu’un système informatique est un ensemble organisé permettant de saisir, traiter, stocker et restituer l’information à l’aide du matériel, des logiciels et de l’utilisateur.", "dictionary": [["Système informatique", "نظام معلوماتي"], ["Matériel", "عتاد"], ["Logiciel", "برنامج"], ["Unité centrale", "وحدة مركزية"], ["Écran", "شاشة"], ["Clavier", "لوحة المفاتيح"], ["Souris", "فأرة"], ["Périphérique", "ملحق"], ["Stockage", "تخزين"], ["Traitement", "معالجة"]], "lessons": [{"title": "Notion de système informatique", "competence": "C1", "officialFocus": "Définition et rôle d’un système informatique", "objective": "Définir un système informatique et identifier ses trois éléments principaux.", "officialObjectives": ["Reconnaître le rôle de l’utilisateur.", "Distinguer le matériel et les logiciels.", "Expliquer que le système informatique sert à traiter l’information."], "visualType": "diagram", "visual": {"steps": ["Utilisateur", "Matériel", "Logiciels", "Information"]}, "fr": "Un système informatique est un ensemble composé de l’utilisateur, du matériel et des logiciels. Il permet de saisir des informations, de les traiter, de les stocker et de produire des résultats utiles.", "ar": "النظام المعلوماتي يتكون من المستعمل والعتاد والبرمجيات. يسمح بإدخال المعلومات ومعالجتها وتخزينها وإخراج النتائج.", "fill": ["Un système informatique est formé par l’utilisateur, le matériel et les ____.", "logiciels", ["logiciels", "cahiers", "tables"]], "drag": [["Utilisateur", "Personne qui utilise le poste"], ["Matériel", "Parties physiques de l’ordinateur"], ["Logiciel", "Programme qui permet de réaliser une tâche"]], "order": {"title": "Comprendre le système informatique", "steps": ["Identifier l’utilisateur", "Reconnaître le matériel", "Reconnaître les logiciels", "Expliquer le traitement de l’information"]}}, {"title": "Composants matériels de l’ordinateur", "competence": "C1", "officialFocus": "Identifier les composants matériels", "objective": "Identifier les principaux composants matériels d’un poste informatique et préciser leur rôle.", "officialObjectives": ["Nommer l’unité centrale, l’écran, le clavier, la souris et l’imprimante.", "Associer chaque composant à son rôle.", "Distinguer les composants internes et externes de façon simple."], "visualType": "mindmap", "visual": {"center": "Matériel", "items": ["Unité centrale", "Écran", "Clavier", "Souris", "Imprimante", "Mémoire"]}, "fr": "Le matériel informatique désigne les parties physiques que l’on peut voir ou toucher. L’unité centrale traite les informations, l’écran affiche les résultats, le clavier saisit le texte, la souris permet de pointer et l’imprimante produit un document papier.", "ar": "العتاد المعلوماتي هو الأجزاء المادية التي نراها أو نلمسها. الوحدة المركزية تعالج المعلومات، الشاشة تعرض النتائج، لوحة المفاتيح تكتب، الفأرة للتوجيه، والطابعة تطبع على الورق.", "fill": ["L’écran est un périphérique de ____.", "sortie", ["sortie", "entrée", "calcul"]], "drag": [["Clavier", "Saisir du texte"], ["Souris", "Pointer et cliquer"], ["Écran", "Afficher les résultats"]], "order": {"title": "Préparer un poste informatique", "steps": ["Brancher l’unité centrale", "Connecter l’écran, le clavier et la souris", "Allumer l’ordinateur", "Vérifier que les composants fonctionnent"]}}, {"title": "Périphériques et leurs rôles", "competence": "C1", "officialFocus": "Classer les périphériques selon leur rôle", "objective": "Classer les périphériques en entrée, sortie et stockage à partir de leur fonction.", "officialObjectives": ["Identifier un périphérique d’entrée.", "Identifier un périphérique de sortie.", "Identifier un périphérique de stockage."], "visualType": "diagram", "visual": {"steps": ["Entrée", "Traitement", "Sortie", "Stockage"]}, "fr": "Un périphérique est un élément relié à l’ordinateur. Les périphériques d’entrée permettent d’introduire des données, les périphériques de sortie affichent ou produisent les résultats, et les périphériques de stockage conservent les fichiers.", "ar": "الملحق هو عنصر مرتبط بالحاسوب. ملحقات الإدخال تدخل المعطيات، وملحقات الإخراج تعرض أو تنتج النتائج، وملحقات التخزين تحفظ الملفات.", "fill": ["Une clé USB est un périphérique de ____.", "stockage", ["stockage", "sortie", "saisie"]], "drag": [["Entrée", "Clavier, souris, scanner"], ["Sortie", "Écran, imprimante"], ["Stockage", "Clé USB, disque dur"]], "order": {"title": "Classer un périphérique", "steps": ["Observer le périphérique", "Déterminer ce qu’il permet de faire", "Le classer : entrée, sortie ou stockage"]}}, {"title": "Information, données et traitement", "competence": "C1", "officialFocus": "Cycle de traitement de l’information", "objective": "Expliquer les étapes de traitement de l’information : entrée, traitement, stockage et sortie.", "officialObjectives": ["Définir une donnée comme une information saisie ou utilisée.", "Reconnaître le traitement effectué par l’ordinateur.", "Associer un résultat à la sortie de l’information."], "visualType": "sequence", "visual": {"steps": ["Entrée", "Traitement", "Stockage", "Sortie"]}, "fr": "L’ordinateur traite des données. L’utilisateur introduit une donnée, l’ordinateur la traite grâce à un logiciel et au matériel, puis il affiche, imprime ou sauvegarde un résultat.", "ar": "يعالج الحاسوب المعطيات. يدخل المستعمل المعطى، ثم يعالجه الحاسوب باستعمال البرمجيات والعتاد، وبعد ذلك يعرض أو يطبع أو يحفظ النتيجة.", "fill": ["Le clavier permet de faire l’étape d’____ des données.", "entrée", ["entrée", "sortie", "arrêt"]], "drag": [["Donnée", "Information saisie ou utilisée"], ["Traitement", "Transformation des données"], ["Résultat", "Information obtenue après traitement"]], "order": {"title": "Traiter une information", "steps": ["Saisir les données", "Lancer le traitement", "Observer le résultat", "Sauvegarder si nécessaire"]}}], "integration": {"title": "Situation d’intégration — Préparer le matériel de la salle informatique", "scenario": "Le professeur veut organiser une activité dans la salle informatique. Tu dois aider à vérifier les postes, reconnaître les composants et expliquer comment l’ordinateur traite les informations.", "tasks": ["Identifier les éléments matériels disponibles.", "Classer quelques périphériques en entrée, sortie ou stockage.", "Expliquer le chemin d’une information depuis la saisie jusqu’au résultat.", "Proposer une consigne simple pour utiliser le poste correctement."], "questions": [["Pourquoi ne peut-on pas parler d’un système informatique avec le matériel seulement ?", "Parce qu’il faut aussi des logiciels et un utilisateur pour réaliser les tâches."], ["Donne un exemple d’entrée, de traitement et de sortie.", "Entrée : saisir des notes ; traitement : calculer la moyenne ; sortie : afficher le résultat."]]}, "exam": [["Un système informatique est composé de :", ["matériel, logiciels et utilisateur", "table, stylo et cahier", "écran seulement"], 0], ["Le matériel informatique désigne :", ["les parties physiques de l’ordinateur", "les règles de grammaire", "les mots de passe uniquement"], 0], ["Un logiciel est :", ["un programme qui permet de réaliser une tâche", "un câble électrique", "un meuble"], 0], ["L’unité centrale sert principalement à :", ["traiter les informations", "imprimer le papier", "afficher les images seulement"], 0], ["L’écran est un périphérique de :", ["sortie", "entrée", "stockage"], 0], ["Le clavier permet de :", ["saisir des données", "imprimer des documents", "stocker des fichiers"], 0], ["La souris sert surtout à :", ["pointer, sélectionner et cliquer", "calculer automatiquement", "produire du son"], 0], ["L’imprimante est un périphérique de :", ["sortie", "entrée", "traitement"], 0], ["Une clé USB est un périphérique de :", ["stockage", "sortie sonore", "affichage"], 0], ["Le scanner est généralement un périphérique de :", ["entrée", "sortie", "arrêt"], 0], ["Un périphérique d’entrée permet de :", ["introduire des données", "afficher les résultats", "supprimer le système"], 0], ["Un périphérique de sortie permet de :", ["présenter les résultats", "saisir uniquement du texte", "remplacer l’utilisateur"], 0], ["Une donnée est :", ["une information saisie ou utilisée par l’ordinateur", "un bouton de la souris", "un câble réseau seulement"], 0], ["Le traitement de l’information signifie :", ["transformer les données pour obtenir un résultat", "éteindre l’écran", "décorer le bureau"], 0], ["L’ordre correct est :", ["entrée → traitement → sortie", "sortie → entrée → traitement", "impression → souris → clavier"], 0], ["La mémoire sert à :", ["conserver des données temporairement ou durablement", "afficher seulement les couleurs", "tenir l’écran"], 0], ["Le disque dur est surtout lié au :", ["stockage", "pointage", "son"], 0], ["Pour écrire un texte dans l’ordinateur, on utilise généralement :", ["un clavier", "une imprimante", "un haut-parleur"], 0], ["Pour entendre un son produit par l’ordinateur, on utilise :", ["des haut-parleurs ou un casque", "un scanner", "un clavier"], 0], ["Le rôle de l’utilisateur est de :", ["donner des actions et exploiter les résultats", "remplacer le processeur", "servir uniquement à imprimer"], 0]]}, {"id": "u2_os", "icon": "", "title": "Unité 2 : Système d’exploitation", "short": "Bureau, fenêtres, fichiers, dossiers et paramètres", "color": "purple", "competence": "C2", "duration": "10 h", "officialResources": ["Rôle d’un système d’exploitation", "Bureau et icônes", "Fenêtres", "Gestion des fichiers et dossiers", "Paramètres de base et sécurité d’utilisation"], "intro": "Utiliser correctement un système d’exploitation pour accéder au bureau, gérer les fenêtres, organiser les fichiers et dossiers, régler quelques paramètres et protéger le travail.", "dictionary": [["Système d’exploitation", "نظام التشغيل"], ["Bureau", "سطح المكتب"], ["Icône", "أيقونة"], ["Fenêtre", "نافذة"], ["Fichier", "ملف"], ["Dossier", "مجلد"], ["Corbeille", "سلة المهملات"], ["Barre des tâches", "شريط المهام"], ["Paramètres", "إعدادات"], ["Session", "حصة/جلسة"]], "lessons": [{"title": "Rôle du système d’exploitation", "competence": "C2", "officialFocus": "Définition et rôle du système d’exploitation", "objective": "Définir le système d’exploitation et expliquer son rôle d’intermédiaire entre l’utilisateur, les logiciels et le matériel.", "officialObjectives": ["Reconnaître qu’un système d’exploitation est indispensable au démarrage du poste.", "Expliquer son rôle dans l’organisation des ressources.", "Citer des exemples : Windows, Linux, Android."], "visualType": "diagram", "visual": {"steps": ["Utilisateur", "Système d’exploitation", "Matériel"]}, "fr": "Le système d’exploitation est le logiciel principal de l’ordinateur. Il permet à l’utilisateur de communiquer avec le matériel, de lancer les logiciels, de gérer les fichiers et d’organiser les ressources du poste.", "ar": "نظام التشغيل هو البرنامج الرئيسي في الحاسوب. يسمح للمستعمل بالتواصل مع العتاد وتشغيل البرامج وتدبير الملفات وتنظيم موارد الحاسوب.", "fill": ["Le système d’exploitation est le logiciel ____ de l’ordinateur.", "principal", ["principal", "papier", "externe"]], "drag": [["Système d’exploitation", "Logiciel principal"], ["Utilisateur", "Personne qui demande une action"], ["Matériel", "Composants physiques du poste"]], "order": {"title": "Démarrer et utiliser le poste", "steps": ["Allumer l’ordinateur", "Attendre le chargement du système", "Ouvrir la session", "Lancer un logiciel"]}}, {"title": "Bureau, icônes et fenêtres", "competence": "C2", "officialFocus": "Identifier les éléments du bureau et manipuler les fenêtres", "objective": "Identifier les éléments du bureau et manipuler une fenêtre : ouvrir, réduire, agrandir, déplacer et fermer.", "officialObjectives": ["Reconnaître le bureau, les icônes et la barre des tâches.", "Ouvrir une application à partir d’une icône.", "Utiliser les boutons réduire, agrandir et fermer."], "visualType": "mindmap", "visual": {"center": "Bureau", "items": ["Icônes", "Fenêtres", "Barre des tâches", "Menu", "Corbeille"]}, "fr": "Le bureau est l’espace de travail affiché après l’ouverture de la session. Il contient des icônes, la barre des tâches et des fenêtres. Une fenêtre peut être déplacée, réduite, agrandie ou fermée.", "ar": "سطح المكتب هو فضاء العمل الذي يظهر بعد فتح الجلسة. يحتوي على أيقونات وشريط المهام والنوافذ. يمكن نقل النافذة أو تصغيرها أو تكبيرها أو إغلاقها.", "fill": ["Une icône permet souvent d’ouvrir un ____.", "programme", ["programme", "papier", "câble"]], "drag": [["Bureau", "Espace de travail"], ["Icône", "Petit dessin représentant un programme ou un fichier"], ["Fenêtre", "Zone affichant le contenu d’un programme"]], "order": {"title": "Manipuler une fenêtre", "steps": ["Ouvrir le programme", "Observer la fenêtre", "Déplacer ou redimensionner la fenêtre", "Fermer la fenêtre"]}}, {"title": "Gestion des fichiers et dossiers", "competence": "C2", "officialFocus": "Créer, nommer, organiser et retrouver des fichiers et dossiers", "objective": "Créer, nommer, déplacer et organiser des fichiers et dossiers dans un emplacement approprié.", "officialObjectives": ["Distinguer fichier et dossier.", "Créer un dossier avec un nom significatif.", "Déplacer, copier, renommer ou supprimer un fichier avec prudence."], "visualType": "sequence", "visual": {"steps": ["Créer", "Nommer", "Classer", "Retrouver"]}, "fr": "Un fichier contient un travail comme un texte, une image ou un tableau. Un dossier sert à ranger des fichiers. Pour retrouver facilement son travail, il faut donner des noms clairs et classer les fichiers dans des dossiers adaptés.", "ar": "الملف يحتوي على عمل مثل نص أو صورة أو جدول. المجلد يستعمل لترتيب الملفات. وللعثور على العمل بسهولة يجب إعطاء أسماء واضحة وترتيب الملفات داخل مجلدات مناسبة.", "fill": ["Un dossier sert à ____ des fichiers.", "ranger", ["ranger", "écouter", "brancher"]], "drag": [["Fichier", "Document numérique"], ["Dossier", "Emplacement qui regroupe des fichiers"], ["Renommer", "Changer le nom d’un élément"]], "order": {"title": "Créer un dossier de travail", "steps": ["Ouvrir l’emplacement choisi", "Créer un nouveau dossier", "Donner un nom clair", "Enregistrer les fichiers dans ce dossier"]}}, {"title": "Paramètres de base et sécurité d’utilisation", "competence": "C2", "officialFocus": "Réglages simples et bonnes pratiques de sécurité", "objective": "Appliquer des réglages simples et respecter les règles de sécurité pour protéger le poste et les fichiers.", "officialObjectives": ["Modifier un paramètre simple avec prudence.", "Protéger la session et les fichiers personnels.", "Arrêter correctement l’ordinateur."], "visualType": "diagram", "visual": {"steps": ["Régler", "Protéger", "Sauvegarder", "Arrêter"]}, "fr": "Les paramètres permettent d’adapter le système : langue, date, affichage, comptes ou connexion. L’utilisateur doit travailler avec prudence : ne pas supprimer un fichier sans vérifier, garder son mot de passe secret, sauvegarder son travail et arrêter correctement le poste.", "ar": "تسمح الإعدادات بتكييف النظام: اللغة والتاريخ والعرض والحسابات والاتصال. يجب استعمال الحاسوب بحذر: عدم حذف ملف دون تحقق، حماية كلمة المرور، حفظ العمل، وإيقاف الجهاز بطريقة صحيحة.", "fill": ["Pour protéger sa session, il faut garder son mot de passe ____.", "secret", ["secret", "public", "imprimé"]], "drag": [["Paramètres", "Réglages du système"], ["Mot de passe", "Protection de la session"], ["Arrêter", "Fermer le poste correctement"]], "order": {"title": "Fermer le poste correctement", "steps": ["Enregistrer le travail", "Fermer les programmes", "Cliquer sur Arrêter", "Attendre l’extinction du poste"]}}], "integration": {"title": "Situation d’intégration — Organiser un dossier de travail", "scenario": "Tu prépares un dossier numérique pour une activité scolaire. Tu dois ouvrir ta session, organiser ton espace de travail, créer un dossier, classer des fichiers et fermer le poste correctement.", "tasks": ["Identifier le rôle du système d’exploitation dans cette situation.", "Ouvrir une application depuis le bureau et manipuler sa fenêtre.", "Créer un dossier avec un nom clair puis y classer des fichiers.", "Citer deux règles de sécurité ou de bonne utilisation."], "questions": [["Pourquoi le système d’exploitation est-il nécessaire pour lancer un logiciel ?", "Parce qu’il fait l’intermédiaire entre l’utilisateur, le logiciel et le matériel."], ["Pourquoi faut-il donner un nom clair à un dossier ?", "Pour retrouver facilement les fichiers et comprendre son contenu."]]}, "exam": [["Le système d’exploitation est :", ["le logiciel principal de l’ordinateur", "un périphérique d’entrée", "un câble d’alimentation"], 0], ["Un exemple de système d’exploitation est :", ["Windows", "Excel seulement", "Clavier"], 0], ["Le rôle du système d’exploitation est de :", ["gérer les ressources et lancer les logiciels", "imprimer sans imprimante", "remplacer l’écran"], 0], ["Le bureau est :", ["l’espace de travail affiché après l’ouverture de session", "un dossier de papier", "un type de câble"], 0], ["Une icône est :", ["un petit symbole représentant un programme, fichier ou dossier", "un mot de passe", "un disque dur interne"], 0], ["La barre des tâches sert à :", ["accéder aux programmes ouverts et outils rapides", "saisir du texte", "scanner une feuille"], 0], ["Une fenêtre peut être :", ["réduite, agrandie, déplacée ou fermée", "branchée au courant", "imprimée directement"], 0], ["Le bouton X d’une fenêtre sert à :", ["fermer la fenêtre", "augmenter le volume", "créer un dossier"], 0], ["Un fichier est :", ["un document numérique", "un groupe d’ordinateurs", "un bouton de l’écran"], 0], ["Un dossier sert à :", ["ranger des fichiers", "écrire automatiquement", "déplacer la souris"], 0], ["Renommer signifie :", ["changer le nom d’un fichier ou dossier", "supprimer définitivement", "agrandir l’écran"], 0], ["Pour retrouver son travail, il faut :", ["utiliser des noms clairs et bien classer les fichiers", "laisser tous les fichiers au hasard", "éteindre sans enregistrer"], 0], ["La corbeille sert à :", ["recevoir les éléments supprimés", "afficher les logiciels ouverts", "écrire un mot de passe"], 0], ["Avant de supprimer un fichier, il faut :", ["vérifier qu’il n’est plus nécessaire", "éteindre l’écran", "changer la langue"], 0], ["Les paramètres permettent de régler :", ["la langue, l’affichage, la date ou les comptes", "uniquement la couleur du clavier", "la forme de l’imprimante"], 0], ["Un mot de passe doit rester :", ["secret", "affiché au tableau", "identique pour toute la classe"], 0], ["Pour fermer correctement le poste, il faut d’abord :", ["enregistrer le travail", "débrancher directement", "supprimer les dossiers"], 0], ["Ouvrir une session signifie :", ["accéder à l’espace de travail avec un compte", "créer une imprimante", "brancher la souris"], 0], ["Déplacer un fichier signifie :", ["changer son emplacement", "modifier son contenu automatiquement", "fermer le système"], 0], ["Copier un fichier signifie :", ["créer un double du fichier", "le supprimer", "l’imprimer"], 0]]}];
  UNITS.splice(0, 0, ...V66_UNITS);
  const tableurUnit = UNITS.find(u => u.id === 'u3_tableur');
  if(tableurUnit) tableurUnit.title = 'Unité 3 : Tableur';
  const logoUnit = UNITS.find(u => u.id === 'u4_logo');
  if(logoUnit) logoUnit.title = 'Unité 4 : Programmation LOGO';

  Object.assign(LESSON_MEDIA, {"Notion de système informatique": [{"src": "assets/u1-systeme-informatique.svg", "title": "Système informatique", "caption": "L’image montre les trois éléments indispensables : l’utilisateur, le matériel et les logiciels.", "alt": "Schéma système informatique"}], "Composants matériels de l’ordinateur": [{"src": "assets/u1-composants-materiels.svg", "title": "Composants matériels", "caption": "L’image présente les éléments visibles d’un poste informatique et le rôle de chacun.", "alt": "Composants matériels"}], "Périphériques et leurs rôles": [{"src": "assets/u1-peripheriques.svg", "title": "Périphériques", "caption": "L’image classe les périphériques selon leur rôle : entrée, sortie ou stockage.", "alt": "Classification des périphériques"}], "Information, données et traitement": [{"src": "assets/u1-traitement-information.svg", "title": "Traitement de l’information", "caption": "L’image montre le chemin d’une information : entrée, traitement, sortie.", "alt": "Traitement de l’information"}], "Rôle du système d’exploitation": [{"src": "assets/u2-role-os.svg", "title": "Système d’exploitation", "caption": "L’image montre que le système d’exploitation fait le lien entre l’utilisateur et le matériel.", "alt": "Rôle du système d’exploitation"}], "Bureau, icônes et fenêtres": [{"src": "assets/u2-bureau-fenetres.svg", "title": "Bureau, icônes et fenêtres", "caption": "L’image représente le bureau avec ses icônes, sa barre des tâches et une fenêtre ouverte.", "alt": "Bureau du système d’exploitation"}], "Gestion des fichiers et dossiers": [{"src": "assets/u2-fichiers-dossiers.svg", "title": "Fichiers et dossiers", "caption": "L’image montre la méthode pour créer, nommer, classer et retrouver un fichier.", "alt": "Gestion fichiers dossiers"}], "Paramètres de base et sécurité d’utilisation": [{"src": "assets/u2-parametres-securite.svg", "title": "Paramètres et sécurité", "caption": "L’image résume les réglages simples et les règles de protection du poste.", "alt": "Paramètres et sécurité"}]});
  Object.assign(VISUAL_DEFINITIONS, {"Logiciels": ["Programmes qui permettent d’utiliser le matériel pour réaliser des tâches.", "برامج تسمح باستعمال العتاد لإنجاز مهام."], "Matériel": ["Parties physiques de l’ordinateur que l’on peut voir ou toucher.", "الأجزاء المادية للحاسوب التي يمكن رؤيتها أو لمسها."], "Traitement": ["Transformation des données pour obtenir un résultat utile.", "تحويل المعطيات للحصول على نتيجة مفيدة."], "Stockage": ["Conservation des fichiers et des données sur un support.", "حفظ الملفات والمعطيات على وسيط تخزين."], "Entrée": ["Action d’introduire des données dans l’ordinateur.", "عملية إدخال المعطيات إلى الحاسوب."], "Sortie": ["Action d’obtenir un résultat affiché, imprimé ou entendu.", "عملية الحصول على نتيجة معروضة أو مطبوعة أو مسموعة."], "Système d’exploitation": ["Logiciel principal qui permet de faire fonctionner l’ordinateur et de gérer les ressources.", "البرنامج الرئيسي الذي يشغل الحاسوب ويدبر موارده."], "Bureau": ["Espace de travail affiché après l’ouverture de la session.", "فضاء العمل الذي يظهر بعد فتح الجلسة."], "Icône": ["Petit symbole qui représente un programme, un fichier ou un dossier.", "رمز صغير يمثل برنامجا أو ملفا أو مجلدا."], "Fenêtre": ["Zone affichée à l’écran pour utiliser un programme ou voir un contenu.", "منطقة تظهر على الشاشة لاستعمال برنامج أو عرض محتوى."], "Barre des tâches": ["Zone qui donne accès aux applications ouvertes et à quelques outils du système.", "شريط يوفر الوصول إلى التطبيقات المفتوحة وبعض أدوات النظام."], "Fichier": ["Document numérique contenant un texte, une image, un tableau ou un autre travail.", "وثيقة رقمية تحتوي على نص أو صورة أو جدول أو عمل آخر."], "Dossier": ["Espace utilisé pour ranger et organiser des fichiers.", "فضاء يستعمل لترتيب وتنظيم الملفات."], "Paramètres": ["Réglages qui permettent d’adapter le fonctionnement du système.", "إعدادات تسمح بتكييف اشتغال النظام."], "Session": ["Espace personnel ouvert par un utilisateur sur l’ordinateur.", "فضاء شخصي يفتحه المستعمل على الحاسوب."], "Mot de passe": ["Code secret qui protège l’accès à une session ou à un service.", "رمز سري يحمي الولوج إلى جلسة أو خدمة."]});
  DICTIONARY_EXTRA.u1_systeme = [
    ['Ordinateur','حاسوب'], ['Processeur','معالج'], ['Disque dur','قرص صلب'], ['Scanner','ماسح ضوئي'], ['Haut-parleurs','مكبرات الصوت'], ['Donnée','معطى'], ['Résultat','نتيجة']
  ];
  DICTIONARY_EXTRA.u2_os = [
    ['Windows','ويندوز'], ['Linux','لينكس'], ['Android','أندرويد'], ['Menu démarrer','قائمة ابدأ'], ['Raccourci','اختصار'], ['Renommer','تغيير الاسم'], ['Copier','نسخ'], ['Déplacer','نقل'], ['Supprimer','حذف'], ['Mot de passe','كلمة المرور']
  ];
  Object.assign(INTEGRATION_DIAGNOSTICS, {"u1_systeme": [{"lesson": "Notion de système informatique", "revise": "Réviser : utilisateur, matériel, logiciels et rôle du système informatique.", "question": "Dans une salle informatique, quels éléments sont nécessaires pour former un système informatique ?", "choices": ["Utilisateur, matériel et logiciels", "Écran seulement", "Table et chaise"], "correct": 0}, {"lesson": "Composants matériels de l’ordinateur", "revise": "Réviser : unité centrale, écran, clavier, souris, imprimante et rôle de chaque composant.", "question": "Quel composant permet d’afficher le résultat à l’élève ?", "choices": ["Écran", "Clavier", "Souris"], "correct": 0}, {"lesson": "Périphériques et leurs rôles", "revise": "Réviser : entrée, sortie et stockage avec exemples.", "question": "Pour ranger le fichier de l’activité sur une clé USB, quel rôle joue la clé USB ?", "choices": ["Stockage", "Entrée", "Sortie"], "correct": 0}, {"lesson": "Information, données et traitement", "revise": "Réviser : entrée, traitement, sortie et stockage.", "question": "Quand le logiciel calcule une moyenne à partir des notes, quelle étape réalise-t-il ?", "choices": ["Traitement", "Entrée", "Impression"], "correct": 0}], "u2_os": [{"lesson": "Rôle du système d’exploitation", "revise": "Réviser : logiciel principal, intermédiaire, exemples de systèmes d’exploitation.", "question": "Qui permet de lancer un logiciel et de gérer les ressources du poste ?", "choices": ["Le système d’exploitation", "La table", "Le câble seul"], "correct": 0}, {"lesson": "Bureau, icônes et fenêtres", "revise": "Réviser : bureau, icône, fenêtre, barre des tâches et boutons de fenêtre.", "question": "Pour ouvrir un programme depuis le bureau, sur quoi peut-on double-cliquer ?", "choices": ["Une icône", "Un câble", "La corbeille uniquement"], "correct": 0}, {"lesson": "Gestion des fichiers et dossiers", "revise": "Réviser : fichier, dossier, nom clair, créer, renommer, déplacer.", "question": "Pourquoi créer un dossier nommé Informatique 2AC ?", "choices": ["Pour ranger et retrouver les fichiers", "Pour supprimer les fichiers", "Pour éteindre l’ordinateur"], "correct": 0}, {"lesson": "Paramètres de base et sécurité d’utilisation", "revise": "Réviser : paramètres, mot de passe, sauvegarde et arrêt correct.", "question": "Quelle action doit être faite avant d’arrêter le poste ?", "choices": ["Enregistrer le travail", "Débrancher directement", "Supprimer le dossier"], "correct": 0}]});

  const V66_VISUAL_EXAMPLES = {"u1-systeme-informatique.svg": {"definition": "Cette image définit le système informatique comme un ensemble organisé : utilisateur, matériel et logiciels travaillent ensemble pour traiter l’information.", "exampleTitle": "Exemple précis : lancer un logiciel de dessin", "steps": ["Identifier l’utilisateur : l’élève demande une action.", "Identifier le matériel : ordinateur, écran, clavier et souris.", "Identifier le logiciel : programme de dessin ouvert sur l’écran.", "Dire le résultat : le dessin est affiché et peut être enregistré."], "question": "Quels sont les trois éléments du système informatique dans cet exemple ?"}, "u1-composants-materiels.svg": {"definition": "Cette image présente les composants matériels visibles d’un poste informatique et le rôle simple de chaque composant.", "exampleTitle": "Exemple précis : décrire le poste de la salle", "steps": ["Montrer l’unité centrale et dire : elle traite les informations.", "Montrer l’écran et dire : il affiche les résultats.", "Montrer le clavier et la souris : ils permettent d’entrer des actions.", "Montrer l’imprimante : elle produit un document sur papier."], "question": "Quel composant permet d’afficher le résultat ?"}, "u1-peripheriques.svg": {"definition": "Cette image sert à classer les périphériques selon leur rôle : entrer, sortir ou stocker l’information.", "exampleTitle": "Exemple précis : classer quatre périphériques", "steps": ["Mettre clavier et souris dans la catégorie Entrée.", "Mettre écran et imprimante dans la catégorie Sortie.", "Mettre clé USB et disque dur dans la catégorie Stockage.", "Justifier chaque classement par l’action réalisée."], "question": "Dans quelle catégorie place-t-on une clé USB ?"}, "u1-traitement-information.svg": {"definition": "Cette image explique le cycle de l’information : l’ordinateur reçoit une donnée, la traite, puis produit un résultat.", "exampleTitle": "Exemple précis : calculer une moyenne", "steps": ["Entrée : saisir les notes au clavier.", "Traitement : demander au logiciel de calculer la moyenne.", "Sortie : lire la moyenne affichée à l’écran.", "Stockage : enregistrer le fichier si le travail doit être gardé."], "question": "Quelle étape transforme les données pour obtenir un résultat ?"}, "u2-role-os.svg": {"definition": "Cette image montre que le système d’exploitation est l’intermédiaire qui organise la communication entre l’utilisateur et le matériel.", "exampleTitle": "Exemple précis : ouvrir un logiciel", "steps": ["L’utilisateur double-clique sur une icône.", "Le système d’exploitation reçoit la demande.", "Il utilise les ressources du matériel pour lancer le logiciel.", "Le logiciel apparaît dans une fenêtre à l’écran."], "question": "Qui fait le lien entre l’utilisateur et le matériel ?"}, "u2-bureau-fenetres.svg": {"definition": "Cette image définit le bureau comme l’espace de travail contenant des icônes, une barre des tâches et des fenêtres.", "exampleTitle": "Exemple précis : manipuler une fenêtre", "steps": ["Cliquer sur une icône du bureau pour ouvrir un programme.", "Observer la fenêtre qui s’affiche.", "Utiliser Réduire pour cacher temporairement la fenêtre.", "Utiliser X pour fermer la fenêtre après le travail."], "question": "À quoi sert le bouton X dans une fenêtre ?"}, "u2-fichiers-dossiers.svg": {"definition": "Cette image montre que les dossiers servent à organiser les fichiers pour les retrouver facilement.", "exampleTitle": "Exemple précis : créer un dossier Informatique", "steps": ["Ouvrir l’emplacement Documents.", "Cliquer avec le bouton droit puis choisir Nouveau dossier.", "Nommer le dossier : Informatique 2AC.", "Déplacer le fichier de l’exercice dans ce dossier."], "question": "Pourquoi faut-il donner un nom clair au dossier ?"}, "u2-parametres-securite.svg": {"definition": "Cette image résume quelques réglages du système et des règles de sécurité : protéger la session, sauvegarder et arrêter correctement.", "exampleTitle": "Exemple précis : fermer le poste sans perdre le travail", "steps": ["Enregistrer le fichier ouvert.", "Fermer les programmes utilisés.", "Cliquer sur le menu d’arrêt du système.", "Attendre l’extinction avant de quitter le poste."], "question": "Quelle action faut-il faire avant d’arrêter le poste ?"}};
  const v66OldVisualExampleFor = visualExampleFor;
  visualExampleFor = function(item, lesson, index){
    const key = (item && item.src ? item.src.split('/').pop() : '');
    return V66_VISUAL_EXAMPLES[key] || v66OldVisualExampleFor(item, lesson, index);
  };

  const V66_AUDIO_ITEMS = {"Notion de système informatique": [{"title": "Définition du système informatique", "fr": "Un système informatique réunit l’utilisateur, le matériel et les logiciels. Ces éléments travaillent ensemble pour traiter l’information.", "ar": "النظام المعلوماتي يجمع المستعمل والعتاد والبرمجيات. هذه العناصر تعمل معا لمعالجة المعلومات.", "keywords": ["utilisateur", "matériel", "logiciels"], "question": "Quels sont les trois éléments du système informatique ?", "answer": "utilisateur, matériel et logiciels"}, {"title": "Rôle du système informatique", "fr": "Son rôle est de recevoir des données, de les traiter, de les stocker et de produire un résultat utile.", "ar": "دوره هو استقبال المعطيات ومعالجتها وتخزينها وإنتاج نتيجة مفيدة.", "keywords": ["données", "traiter", "résultat"], "question": "À quoi sert un système informatique ?", "answer": "à traiter l’information"}, {"title": "Exemple de situation", "fr": "Quand un élève écrit un texte, il utilise un clavier, un logiciel de traitement de texte et l’ordinateur affiche puis enregistre le résultat.", "ar": "عندما يكتب التلميذ نصا يستعمل لوحة المفاتيح وبرنامج معالجة النصوص، ثم يعرض الحاسوب النتيجة ويحفظها.", "keywords": ["clavier", "logiciel", "enregistrer"], "question": "Quel logiciel peut-on utiliser pour écrire un texte ?", "answer": "un traitement de texte"}], "Composants matériels de l’ordinateur": [{"title": "Matériel informatique", "fr": "Le matériel informatique désigne les parties physiques de l’ordinateur que l’on peut voir ou toucher.", "ar": "العتاد المعلوماتي هو الأجزاء المادية للحاسوب التي يمكن رؤيتها أو لمسها.", "keywords": ["matériel", "physique", "ordinateur"], "question": "Que signifie matériel informatique ?", "answer": "les parties physiques"}, {"title": "Unité centrale", "fr": "L’unité centrale contient les éléments qui permettent le traitement et le fonctionnement principal du poste.", "ar": "الوحدة المركزية تحتوي على العناصر التي تسمح بالمعالجة والاشتغال الأساسي للحاسوب.", "keywords": ["unité centrale", "traitement", "poste"], "question": "Quel composant assure principalement le traitement ?", "answer": "l’unité centrale"}, {"title": "Écran, clavier et souris", "fr": "L’écran affiche les résultats, le clavier saisit du texte et la souris permet de pointer, sélectionner et cliquer.", "ar": "الشاشة تعرض النتائج، ولوحة المفاتيح تكتب النصوص، والفأرة تساعد على التوجيه والاختيار والنقر.", "keywords": ["écran", "clavier", "souris"], "question": "Quel composant sert à saisir du texte ?", "answer": "le clavier"}], "Périphériques et leurs rôles": [{"title": "Périphérique d’entrée", "fr": "Un périphérique d’entrée permet d’introduire des données ou des actions dans l’ordinateur, comme le clavier et la souris.", "ar": "ملحق الإدخال يسمح بإدخال المعطيات أو الأوامر إلى الحاسوب، مثل لوحة المفاتيح والفأرة.", "keywords": ["entrée", "clavier", "souris"], "question": "Donne un exemple de périphérique d’entrée.", "answer": "clavier ou souris"}, {"title": "Périphérique de sortie", "fr": "Un périphérique de sortie permet d’obtenir un résultat, par exemple l’écran affiche et l’imprimante imprime.", "ar": "ملحق الإخراج يسمح بالحصول على نتيجة، مثلا الشاشة تعرض والطابعة تطبع.", "keywords": ["sortie", "écran", "imprimante"], "question": "L’écran est-il entrée ou sortie ?", "answer": "sortie"}, {"title": "Périphérique de stockage", "fr": "Un périphérique de stockage conserve les fichiers, comme une clé USB, un disque dur ou une carte mémoire.", "ar": "ملحق التخزين يحفظ الملفات، مثل مفتاح USB أو القرص الصلب أو بطاقة الذاكرة.", "keywords": ["stockage", "clé USB", "fichier"], "question": "À quoi sert une clé USB ?", "answer": "à stocker des fichiers"}], "Information, données et traitement": [{"title": "Donnée", "fr": "Une donnée est une information saisie ou utilisée par l’ordinateur, comme un nombre, un texte ou une image.", "ar": "المعطى هو معلومة ندخلها أو يستعملها الحاسوب، مثل عدد أو نص أو صورة.", "keywords": ["donnée", "information", "texte"], "question": "Cite un exemple de donnée.", "answer": "un nombre ou un texte"}, {"title": "Traitement", "fr": "Le traitement transforme les données pour obtenir un résultat, comme calculer une moyenne à partir de notes.", "ar": "المعالجة تحول المعطيات للحصول على نتيجة، مثل حساب معدل انطلاقا من النقط.", "keywords": ["traitement", "transformer", "résultat"], "question": "Que produit le traitement ?", "answer": "un résultat"}, {"title": "Entrée et sortie", "fr": "L’entrée consiste à introduire les données, la sortie consiste à afficher, imprimer ou entendre le résultat.", "ar": "الإدخال هو إدخال المعطيات، والإخراج هو عرض أو طباعة أو سماع النتيجة.", "keywords": ["entrée", "sortie", "résultat"], "question": "Quelle étape affiche le résultat ?", "answer": "la sortie"}], "Rôle du système d’exploitation": [{"title": "Logiciel principal", "fr": "Le système d’exploitation est le logiciel principal qui permet à l’ordinateur de fonctionner et à l’utilisateur de travailler.", "ar": "نظام التشغيل هو البرنامج الرئيسي الذي يسمح للحاسوب بالاشتغال وللمستعمل بالعمل.", "keywords": ["logiciel principal", "fonctionner", "utilisateur"], "question": "Comment appelle-t-on le logiciel principal ?", "answer": "le système d’exploitation"}, {"title": "Intermédiaire", "fr": "Il fait le lien entre l’utilisateur, les logiciels et le matériel. Sans lui, l’utilisateur ne peut pas utiliser facilement les ressources du poste.", "ar": "يقوم بالربط بين المستعمل والبرامج والعتاد. بدونه لا يستطيع المستعمل استعمال موارد الحاسوب بسهولة.", "keywords": ["lien", "matériel", "logiciels"], "question": "Entre qui le système d’exploitation fait-il le lien ?", "answer": "entre l’utilisateur, les logiciels et le matériel"}, {"title": "Exemples", "fr": "Windows, Linux, Android et macOS sont des exemples de systèmes d’exploitation utilisés sur ordinateurs, tablettes ou téléphones.", "ar": "ويندوز ولينكس وأندرويد وماك أو إس أمثلة لأنظمة تشغيل تستعمل في الحواسيب أو اللوحات أو الهواتف.", "keywords": ["Windows", "Linux", "Android"], "question": "Donne un exemple de système d’exploitation.", "answer": "Windows"}], "Bureau, icônes et fenêtres": [{"title": "Bureau", "fr": "Le bureau est l’espace de travail affiché après l’ouverture de la session. Il donne accès aux icônes et aux outils importants.", "ar": "سطح المكتب هو فضاء العمل الذي يظهر بعد فتح الجلسة. يعطي الوصول إلى الأيقونات والأدوات المهمة.", "keywords": ["bureau", "session", "icônes"], "question": "Quand le bureau apparaît-il ?", "answer": "après l’ouverture de la session"}, {"title": "Icônes", "fr": "Une icône est un petit symbole qui représente un programme, un fichier, un dossier ou un raccourci.", "ar": "الأيقونة رمز صغير يمثل برنامجا أو ملفا أو مجلدا أو اختصارا.", "keywords": ["icône", "programme", "raccourci"], "question": "Que représente une icône ?", "answer": "un programme, fichier ou dossier"}, {"title": "Fenêtres", "fr": "Une fenêtre affiche le contenu d’un programme. On peut la réduire, l’agrandir, la déplacer ou la fermer.", "ar": "النافذة تعرض محتوى برنامج. يمكن تصغيرها أو تكبيرها أو نقلها أو إغلاقها.", "keywords": ["fenêtre", "réduire", "fermer"], "question": "Que fait le bouton X ?", "answer": "il ferme la fenêtre"}], "Gestion des fichiers et dossiers": [{"title": "Fichier", "fr": "Un fichier est un document numérique : texte, image, son, vidéo ou tableau. Il doit être enregistré pour ne pas perdre le travail.", "ar": "الملف وثيقة رقمية: نص أو صورة أو صوت أو فيديو أو جدول. يجب حفظه حتى لا يضيع العمل.", "keywords": ["fichier", "document", "enregistrer"], "question": "Pourquoi enregistrer un fichier ?", "answer": "pour ne pas perdre le travail"}, {"title": "Dossier", "fr": "Un dossier sert à ranger des fichiers. Un nom clair permet de retrouver rapidement son contenu.", "ar": "المجلد يستعمل لترتيب الملفات. الاسم الواضح يساعد على العثور على المحتوى بسرعة.", "keywords": ["dossier", "ranger", "nom clair"], "question": "À quoi sert un dossier ?", "answer": "à ranger des fichiers"}, {"title": "Organiser", "fr": "Pour organiser les fichiers, on peut créer, renommer, copier, déplacer ou supprimer avec prudence.", "ar": "لتنظيم الملفات يمكن إنشاء أو تغيير الاسم أو نسخ أو نقل أو حذف بحذر.", "keywords": ["créer", "renommer", "déplacer"], "question": "Que signifie renommer ?", "answer": "changer le nom"}], "Paramètres de base et sécurité d’utilisation": [{"title": "Paramètres", "fr": "Les paramètres permettent de régler la langue, la date, l’affichage, les comptes ou la connexion selon le besoin.", "ar": "الإعدادات تسمح بضبط اللغة والتاريخ والعرض والحسابات والاتصال حسب الحاجة.", "keywords": ["paramètres", "langue", "date"], "question": "Cite un paramètre possible.", "answer": "la langue ou la date"}, {"title": "Sécurité de la session", "fr": "La session doit être protégée. Il faut garder le mot de passe secret et éviter d’utiliser le compte d’un autre utilisateur.", "ar": "يجب حماية الجلسة. يجب الحفاظ على كلمة المرور سرية وتجنب استعمال حساب شخص آخر.", "keywords": ["session", "mot de passe", "secret"], "question": "Comment doit rester un mot de passe ?", "answer": "secret"}, {"title": "Arrêt correct", "fr": "Avant d’arrêter l’ordinateur, il faut enregistrer le travail, fermer les programmes puis utiliser le bouton Arrêter.", "ar": "قبل إيقاف الحاسوب يجب حفظ العمل وإغلاق البرامج ثم استعمال زر الإيقاف.", "keywords": ["enregistrer", "fermer", "arrêter"], "question": "Que faut-il faire avant d’arrêter ?", "answer": "enregistrer le travail"}]};
  const v66OldAudioItemsForLesson = v60AudioItemsForLesson;
  v60AudioItemsForLesson = function(lesson){
    if(lesson && V66_AUDIO_ITEMS[lesson.title]) return V66_AUDIO_ITEMS[lesson.title];
    return v66OldAudioItemsForLesson(lesson);
  };

  Object.assign(V61_ACTIVITY_BANK, {"Définition du système informatique": {"fillSentence": "Un système informatique réunit l’utilisateur, le matériel et les ____.", "answer": "logiciels", "choices": ["logiciels", "dossiers", "fenêtres"], "drag": [["Utilisateur", "Personne qui utilise le poste"], ["Matériel", "Parties physiques"], ["Logiciels", "Programmes utilisés"]]}, "Rôle du système informatique": {"fillSentence": "Le système informatique sert à traiter l’____.", "answer": "information", "choices": ["information", "imprimante", "chaise"], "drag": [["Saisir", "Introduire une donnée"], ["Traiter", "Transformer une donnée"], ["Résultat", "Information obtenue"]]}, "Exemple de situation": {"fillSentence": "Le mot important de ce sous-titre est ____.", "answer": "clavier", "choices": ["clavier", "Exemple de situation", "autre"], "drag": [["Exemple de situation", "Quand un élève écrit un texte, il utilise un clavier, un logiciel de traitement de texte et l’ordinateur affiche puis enregistre le résultat."], ["clavier", "Mot-clé à retenir"]]}, "Matériel informatique": {"fillSentence": "Le matériel informatique regroupe les parties ____ de l’ordinateur.", "answer": "physiques", "choices": ["physiques", "sonores", "cachées"], "drag": [["Matériel", "Parties visibles ou touchables"], ["Logiciel", "Programme"], ["Poste", "Ordinateur utilisé"]]}, "Unité centrale": {"fillSentence": "L’unité centrale assure principalement le ____ des informations.", "answer": "traitement", "choices": ["traitement", "papier", "bruit"], "drag": [["Unité centrale", "Boîtier principal"], ["Traitement", "Travail sur les données"], ["Mémoire", "Conservation des données"]]}, "Écran, clavier et souris": {"fillSentence": "Le clavier permet de saisir du ____.", "answer": "texte", "choices": ["texte", "papier", "courant"], "drag": [["Écran", "Afficher"], ["Clavier", "Saisir"], ["Souris", "Pointer"]]}, "Périphérique d’entrée": {"fillSentence": "Le clavier est un périphérique d’____.", "answer": "entrée", "choices": ["entrée", "sortie", "stockage"], "drag": [["Entrée", "Introduire des données"], ["Clavier", "Exemple d’entrée"], ["Souris", "Exemple d’entrée"]]}, "Périphérique de sortie": {"fillSentence": "L’écran est un périphérique de ____.", "answer": "sortie", "choices": ["sortie", "entrée", "stockage"], "drag": [["Sortie", "Présenter un résultat"], ["Écran", "Affiche"], ["Imprimante", "Imprime"]]}, "Périphérique de stockage": {"fillSentence": "Une clé USB est un périphérique de ____.", "answer": "stockage", "choices": ["stockage", "sortie", "saisie"], "drag": [["Stockage", "Conserver des fichiers"], ["Clé USB", "Support de stockage"], ["Disque dur", "Support de stockage"]]}, "Donnée": {"fillSentence": "Une donnée peut être un nombre, un texte ou une ____.", "answer": "image", "choices": ["image", "fenêtre", "souris"], "drag": [["Donnée", "Information utilisée"], ["Texte", "Exemple de donnée"], ["Nombre", "Exemple de donnée"]]}, "Traitement": {"fillSentence": "Le traitement transforme les données pour obtenir un ____.", "answer": "résultat", "choices": ["résultat", "clavier", "dossier"], "drag": [["Traitement", "Transformation"], ["Données", "Informations de départ"], ["Résultat", "Information obtenue"]]}, "Entrée et sortie": {"fillSentence": "L’entrée introduit les données, la sortie présente le ____.", "answer": "résultat", "choices": ["résultat", "mot de passe", "câble"], "drag": [["Entrée", "Saisir"], ["Sortie", "Afficher ou imprimer"], ["Résultat", "Ce qui est obtenu"]]}, "Logiciel principal": {"fillSentence": "Le système d’exploitation est le logiciel ____ de l’ordinateur.", "answer": "principal", "choices": ["principal", "papier", "sonore"], "drag": [["Système d’exploitation", "Logiciel principal"], ["Ordinateur", "Poste utilisé"], ["Utilisateur", "Personne qui travaille"]]}, "Intermédiaire": {"fillSentence": "Le système d’exploitation fait le lien entre l’utilisateur et le ____.", "answer": "matériel", "choices": ["matériel", "cahier", "mur"], "drag": [["Utilisateur", "Demande une action"], ["Système d’exploitation", "Fait le lien"], ["Matériel", "Exécute grâce aux ressources"]]}, "Exemples": {"fillSentence": "Windows est un exemple de système d’____.", "answer": "exploitation", "choices": ["exploitation", "impression", "entrée"], "drag": [["Windows", "Système d’exploitation"], ["Linux", "Système d’exploitation"], ["Android", "Système d’exploitation"]]}, "Bureau": {"fillSentence": "Le bureau apparaît après l’ouverture de la ____.", "answer": "session", "choices": ["session", "souris", "clé USB"], "drag": [["Bureau", "Espace de travail"], ["Session", "Accès de l’utilisateur"], ["Barre des tâches", "Zone d’accès rapide"]]}, "Icônes": {"fillSentence": "Une icône peut représenter un programme, un fichier ou un ____.", "answer": "dossier", "choices": ["dossier", "clavier", "processeur"], "drag": [["Icône", "Petit symbole"], ["Programme", "Application"], ["Dossier", "Espace de rangement"]]}, "Fenêtres": {"fillSentence": "Le bouton X sert à ____ la fenêtre.", "answer": "fermer", "choices": ["fermer", "imprimer", "copier"], "drag": [["Réduire", "Cacher temporairement"], ["Agrandir", "Occuper plus d’espace"], ["Fermer", "Quitter la fenêtre"]]}, "Fichier": {"fillSentence": "Un fichier doit être ____ pour ne pas perdre le travail.", "answer": "enregistré", "choices": ["enregistré", "caché", "débranché"], "drag": [["Fichier", "Document numérique"], ["Enregistrer", "Garder le travail"], ["Nom", "Identifier le fichier"]]}, "Dossier": {"fillSentence": "Un dossier sert à ____ des fichiers.", "answer": "ranger", "choices": ["ranger", "éteindre", "écouter"], "drag": [["Dossier", "Ranger des fichiers"], ["Nom clair", "Retrouver rapidement"], ["Emplacement", "Lieu de rangement"]]}, "Organiser": {"fillSentence": "Renommer signifie changer le ____ d’un fichier.", "answer": "nom", "choices": ["nom", "volume", "clavier"], "drag": [["Créer", "Faire un nouvel élément"], ["Renommer", "Changer le nom"], ["Déplacer", "Changer l’emplacement"]]}, "Paramètres": {"fillSentence": "Les paramètres permettent de régler la langue ou la ____.", "answer": "date", "choices": ["date", "souris en papier", "chaise"], "drag": [["Paramètres", "Réglages"], ["Langue", "Exemple de réglage"], ["Date", "Exemple de réglage"]]}, "Sécurité de la session": {"fillSentence": "Le mot de passe doit rester ____.", "answer": "secret", "choices": ["secret", "public", "imprimé"], "drag": [["Session", "Espace personnel"], ["Mot de passe", "Code secret"], ["Sécurité", "Protection du poste"]]}, "Arrêt correct": {"fillSentence": "Avant d’arrêter l’ordinateur, il faut ____ le travail.", "answer": "enregistrer", "choices": ["enregistrer", "supprimer", "cacher"], "drag": [["Enregistrer", "Ne pas perdre le travail"], ["Fermer", "Quitter les programmes"], ["Arrêter", "Éteindre correctement"]]}});



  /* V67 — Visuel de l’unité Système informatique (1er titre) */
  Object.assign(LESSON_MEDIA, {
    "Notion de système informatique": [
      {
        "src": "assets/u1-notion-systeme-schema.png",
        "caption": "Définition : cette image montre le système informatique comme un ensemble relié. L’utilisateur communique avec le système informatique à travers une interface, puis le système traite la demande grâce à son noyau fonctionnel.",
        "alt": "Schéma de la notion de système informatique"
      },
      {
        "src": "assets/u1-notion-systeme-materiels.png",
        "caption": "Définition : cette image présente plusieurs éléments matériels et périphériques du poste informatique : haut-parleurs, casque, webcam, routeur, écran, clé USB, clavier, souris et unité centrale.",
        "alt": "Éléments matériels et périphériques d’un poste informatique"
      },
      {
        "src": "assets/u1-notion-systeme-logiciels.png",
        "caption": "Définition : cette image montre des icônes de logiciels et d’applications visibles sur le bureau. Elle sert à comprendre que les logiciels sont des programmes utilisés par l’utilisateur pour réaliser des tâches sur l’ordinateur.",
        "alt": "Icônes de logiciels sur le bureau"
      }
    ]
  });

  Object.assign(V66_VISUAL_EXAMPLES, {
    "u1-notion-systeme-schema.png": {
      "title": "Comprendre la notion de système informatique",
      "definition": "L’image montre la relation entre l’utilisateur et le système informatique. L’utilisateur donne une action, l’interface transmet cette demande, puis le système informatique la traite grâce à ses fonctions internes.",
      "example": "Quand l’élève clique sur une application, il agit comme utilisateur. Le système reçoit la demande, ouvre l’application et affiche le résultat sur l’écran.",
      "action": "Observer le schéma → repérer l’utilisateur → repérer l’interface → repérer le système informatique → expliquer que les flèches montrent l’échange entre l’utilisateur et le système.",
      "remember": "Un système informatique relie l’utilisateur, le matériel et les logiciels pour traiter l’information."
    },
    "u1-notion-systeme-materiels.png": {
      "title": "Reconnaître les éléments matériels",
      "definition": "L’image regroupe des éléments physiques que l’on peut voir et toucher dans un environnement informatique. Certains servent à l’entrée, d’autres à la sortie, au stockage ou au traitement.",
      "example": "Le clavier sert à saisir du texte, la souris sert à pointer, l’écran affiche le résultat, la webcam capture l’image, la clé USB stocke les fichiers et l’unité centrale traite les informations.",
      "action": "Montrer chaque élément de l’image → dire son nom → expliquer son rôle simple → préciser s’il s’agit d’un périphérique d’entrée, de sortie, de stockage ou d’un élément de traitement.",
      "remember": "Le matériel correspond aux parties physiques du système informatique."
    },
    "u1-notion-systeme-logiciels.png": {
      "title": "Identifier les logiciels",
      "definition": "L’image montre plusieurs icônes de programmes sur le bureau. Un logiciel est un programme qui permet de réaliser une tâche comme écrire, naviguer sur Internet ou lire un fichier.",
      "example": "L’élève peut double-cliquer sur Google Chrome pour ouvrir Internet ou sur un autre programme pour lancer une application. Cela montre que les logiciels permettent d’exécuter différentes tâches.",
      "action": "Observer les icônes du bureau → expliquer qu’elles représentent des logiciels → citer deux logiciels visibles → donner pour chacun un usage simple.",
      "remember": "Le logiciel est la partie non matérielle du système informatique : c’est le programme que l’on utilise pour travailler."
    }
  });

  function v67SystemeNotionVisualPanel(lesson){
    const media = visualMediaForLesson(lesson);
    const gallery = media.length
      ? media.map((m,i)=>tableurInteractiveVisualCard(m, i, lesson)).join('')
      : `<figure class="media-card"><img src="assets/logo.svg" alt="Illustration"><figcaption>Illustration pédagogique liée au cours.</figcaption></figure>`;
    return `<section class="panel visual-panel"><div class="visual-layout"><div class="style-header"><div><span class="mini-pill">Style visuel</span><h3>Notion de système informatique</h3></div><p class="subtle">Comme dans les autres unités, chaque image contient une définition claire en haut. Clique ensuite sur « Lire l’exemple » pour découvrir l’action exacte à réaliser.</p></div><div class="visual-gallery single-column">${gallery}</div></div></section>`;
  }

  const v67OldVisualPanel = visualPanel;
  visualPanel = function(lesson){
    if(lesson && lesson.title === "Notion de système informatique") return v67SystemeNotionVisualPanel(lesson);
    return v67OldVisualPanel(lesson);
  };



  /* V68 — Ajout des images pour les 2e, 3e et 4e titres de l’unité Système informatique */
  Object.assign(LESSON_MEDIA, {
    "Composants matériels de l’ordinateur": [
      {
        "src": "assets/u1-composants-materiels-poster.png",
        "caption": "Définition : cette image montre les composants matériels d’un poste informatique : écran, webcam, haut-parleurs, imprimante, clavier, souris, manette de jeu, unité centrale, mémoire externe et connexion Internet. Elle aide l’élève à reconnaître chaque élément et à comprendre son rôle.",
        "alt": "Composants matériels d’un ordinateur"
      }
    ],
    "Périphériques et leurs rôles": [
      {
        "src": "assets/u1-peripheriques-roles.png",
        "caption": "Définition : cette image classe les périphériques selon leur rôle. On y trouve des périphériques d’entrée, de sortie, de stockage et de communication, ce qui aide à comprendre la fonction de chaque élément relié à l’ordinateur.",
        "alt": "Classification des périphériques et leurs rôles"
      }
    ],
    "Information, données et traitement": [
      {
        "src": "assets/u1-information-traitement-news.png",
        "caption": "Définition : cette image illustre la circulation de l’information numérique à travers plusieurs supports comme la tablette, le téléphone, la montre connectée et les médias. Elle permet de comprendre que l’information peut être reçue, traitée et affichée sous différentes formes.",
        "alt": "Illustration de l’information numérique et de son traitement"
      }
    ]
  });

  Object.assign(V66_VISUAL_EXAMPLES, {
    "u1-composants-materiels-poster.png": {
      "title": "Reconnaître les composants matériels",
      "definition": "L’image présente un grand ensemble de composants matériels et de périphériques. Elle aide l’élève à distinguer les éléments principaux d’un ordinateur et à retenir leur nom.",
      "example": "L’élève observe l’image puis repère la souris, le clavier, l’écran, l’unité centrale, l’imprimante et le disque dur. Ensuite, il cite pour chacun un rôle simple.",
      "action": "Observer l’affiche → choisir quelques composants → dire leur nom → expliquer à quoi chacun sert, par exemple le clavier pour saisir, l’écran pour afficher et l’imprimante pour imprimer.",
      "remember": "Les composants matériels sont les parties physiques que l’on peut voir ou toucher."
    },
    "u1-peripheriques-roles.png": {
      "title": "Classer les périphériques selon leur rôle",
      "definition": "L’image regroupe les périphériques en plusieurs catégories : entrée, sortie, stockage et communication. Elle montre que chaque périphérique a une fonction précise dans le système informatique.",
      "example": "Le clavier, la souris et le scanner sont des périphériques d’entrée. Le moniteur, l’imprimante et les haut-parleurs sont des périphériques de sortie. La clé USB et les cartes mémoire servent au stockage. Le modem et les clés réseau servent à la communication.",
      "action": "Lire les catégories de l’image → observer les exemples placés sous chaque catégorie → expliquer le rôle de chaque groupe → donner un autre exemple si possible.",
      "remember": "Le rôle d’un périphérique permet de le classer correctement."
    },
    "u1-information-traitement-news.png": {
      "title": "Comprendre l’information et son traitement",
      "definition": "L’image montre des informations numériques consultées sur différents appareils. Elle permet de comprendre qu’une donnée ou une information peut être reçue, affichée, lue puis exploitée par l’utilisateur.",
      "example": "Un utilisateur lit une actualité sur une tablette. Les données arrivent depuis une source numérique, le système les traite, puis l’écran affiche le résultat sous forme de texte et d’images compréhensibles.",
      "action": "Observer les appareils de l’image → identifier l’information affichée → expliquer que les données sont reçues puis traitées par le système avant d’être affichées à l’utilisateur.",
      "remember": "Le traitement de l’information transforme les données en un résultat utile pour l’utilisateur."
    }
  });

  function v68SystemeVisualImageOnlyPanel(lesson){
    const media = visualMediaForLesson(lesson);
    const gallery = media.length
      ? media.map((m,i)=>tableurInteractiveVisualCard(m, i, lesson)).join('')
      : `<figure class="media-card"><img src="assets/logo.svg" alt="Illustration"><figcaption>Illustration pédagogique liée au cours.</figcaption></figure>`;
    return `<section class="panel visual-panel"><div class="visual-layout"><div class="style-header"><div><span class="mini-pill">Style visuel</span><h3>${esc(lesson.title)}</h3></div><p class="subtle">Comme dans les autres unités, chaque image contient une définition claire en haut. Clique ensuite sur « Lire l’exemple » pour afficher l’explication détaillée liée à l’image.</p></div><div class="visual-gallery single-column">${gallery}</div></div></section>`;
  }

  const V68_SYSTEME_IMAGE_TITLES = [
    "Notion de système informatique",
    "Composants matériels de l’ordinateur",
    "Périphériques et leurs rôles",
    "Information, données et traitement"
  ];
  const v68OldVisualPanel = visualPanel;
  visualPanel = function(lesson){
    if(lesson && V68_SYSTEME_IMAGE_TITLES.includes(lesson.title)) return v68SystemeVisualImageOnlyPanel(lesson);
    return v68OldVisualPanel(lesson);
  };



  /* V70 — Unité 2 : annuler l’ancien style visuel et ajouter les images du 1er titre */
  Object.assign(LESSON_MEDIA, {
    "Rôle du système d’exploitation": [
      {
        "src": "assets/u2-os-linux.png",
        "caption": "Définition : cette image montre Linux, un système d’exploitation. Linux permet de faire fonctionner l’ordinateur, d’exécuter des programmes, de gérer les fichiers et de communiquer avec le matériel.",
        "alt": "Logo de Linux"
      },
      {
        "src": "assets/u2-os-macos.png",
        "caption": "Définition : cette image montre macOS, le système d’exploitation des ordinateurs Apple. Il sert à gérer le bureau, les applications, les fichiers et les ressources de la machine.",
        "alt": "Logo de macOS"
      },
      {
        "src": "assets/u2-os-windows7.png",
        "caption": "Définition : cette image montre Windows, un système d’exploitation très connu. Il permet à l’utilisateur d’ouvrir une session, lancer des logiciels, organiser les dossiers et utiliser le matériel de l’ordinateur.",
        "alt": "Logo de Windows"
      }
    ],
    "Bureau, icônes et fenêtres": [],
    "Gestion des fichiers et dossiers": [],
    "Paramètres de base et sécurité d’utilisation": []
  });

  Object.assign(V66_VISUAL_EXAMPLES, {
    "u2-os-linux.png": {
      "title": "Identifier Linux comme système d’exploitation",
      "definition": "L’image présente Linux. C’est un système d’exploitation, c’est-à-dire le logiciel principal qui permet à l’ordinateur de fonctionner et à l’utilisateur de travailler.",
      "example": "Dans une salle informatique, un ordinateur peut utiliser Linux pour démarrer, afficher le bureau, ouvrir un navigateur et gérer les fichiers des élèves.",
      "action": "Observer l’image → lire le nom Linux → expliquer qu’il s’agit d’un système d’exploitation → dire qu’il sert à faire fonctionner l’ordinateur et à lancer des applications.",
      "remember": "Linux est un exemple de système d’exploitation."
    },
    "u2-os-macos.png": {
      "title": "Identifier macOS comme système d’exploitation",
      "definition": "L’image présente macOS. C’est le système d’exploitation utilisé sur les ordinateurs Apple. Il gère l’interface, les fichiers, les programmes et le matériel.",
      "example": "Quand un utilisateur allume un Mac, macOS démarre, affiche le bureau, permet d’ouvrir Finder et d’utiliser les applications de l’ordinateur.",
      "action": "Observer l’image → reconnaître le nom macOS → préciser que ce système est utilisé sur les ordinateurs Apple → donner un exemple simple d’utilisation : ouvrir un fichier ou une application.",
      "remember": "macOS est le système d’exploitation des ordinateurs Apple."
    },
    "u2-os-windows7.png": {
      "title": "Identifier Windows comme système d’exploitation",
      "definition": "L’image présente Windows. C’est un système d’exploitation très répandu qui sert à gérer le bureau, les fenêtres, les dossiers, les logiciels et les périphériques.",
      "example": "Un élève allume l’ordinateur, ouvre sa session Windows, clique sur une icône du bureau et lance un logiciel pour commencer son travail.",
      "action": "Observer l’image → citer le nom Windows → expliquer que Windows permet à l’utilisateur d’utiliser l’ordinateur facilement → donner un exemple : ouvrir un programme depuis le bureau.",
      "remember": "Windows est un système d’exploitation utilisé sur de nombreux ordinateurs."
    }
  });

  function v70OsVisualPanel(lesson){
    const media = visualMediaForLesson(lesson);
    const header = `<div class="style-header"><div><span class="mini-pill">Style visuel</span><h3>${esc(lesson.title)}</h3></div><p class="subtle">Le contenu visuel de l’unité 2 a été simplifié. Pour le 1er titre, les images sont expliquées comme dans les autres unités : définition claire en haut puis exemple précis au clic.</p></div>`;
    if(!media.length){
      return `<section class="panel visual-panel"><div class="visual-layout">${header}<div class="empty-state"><h2>Contenu visuel retiré</h2><p>Le style visuel actuel de ce titre a été annulé conformément à la consigne.</p></div></div></section>`;
    }
    const gallery = media.map((m,i)=>tableurInteractiveVisualCard(m, i, lesson)).join('');
    return `<section class="panel visual-panel"><div class="visual-layout">${header}<div class="visual-gallery single-column">${gallery}</div></div></section>`;
  }

  const V70_OS_IMAGE_TITLES = [
    "Rôle du système d’exploitation",
    "Bureau, icônes et fenêtres",
    "Gestion des fichiers et dossiers",
    "Paramètres de base et sécurité d’utilisation"
  ];
  const v70OldVisualPanel = visualPanel;
  visualPanel = function(lesson){
    if(lesson && V70_OS_IMAGE_TITLES.includes(lesson.title)) return v70OsVisualPanel(lesson);
    return v70OldVisualPanel(lesson);
  };



  /* V71 — Ajouter les images au titre Bureau, icônes et fenêtres */
  Object.assign(LESSON_MEDIA, {
    "Bureau, icônes et fenêtres": [
      {
        "src": "assets/u2-bureau-windows10.png",
        "caption": "Définition : cette image montre le bureau de Windows. On y observe le fond d’écran, plusieurs icônes sur le côté gauche, la barre des tâches en bas et la zone de notification. Le bureau est l’espace de travail principal affiché après l’ouverture de la session.",
        "alt": "Bureau Windows avec icônes et barre des tâches"
      },
      {
        "src": "assets/u2-bureau-windows7-schema.png",
        "caption": "Définition : cette image explique les éléments du bureau de Windows 7. Elle aide à reconnaître les icônes, le fond d’écran, la barre des tâches, la zone de notification, le bouton Démarrer et le bouton Afficher le bureau.",
        "alt": "Schéma du bureau de Windows 7"
      }
    ]
  });

  Object.assign(V66_VISUAL_EXAMPLES, {
    "u2-bureau-windows10.png": {
      "title": "Observer le bureau de Windows",
      "definition": "L’image présente un bureau Windows réel. Elle permet de reconnaître l’espace de travail, les icônes, la barre des tâches et la zone de notification.",
      "example": "Après avoir ouvert la session, l’élève observe les icônes du bureau, clique sur une icône pour lancer un programme, puis repère la barre des tâches en bas de l’écran.",
      "action": "Observer l’image → repérer les icônes à gauche → repérer la barre des tâches en bas → repérer la zone de notification à droite → expliquer à quoi sert chaque élément.",
      "remember": "Le bureau est l’écran principal de travail du système d’exploitation."
    },
    "u2-bureau-windows7-schema.png": {
      "title": "Identifier les éléments du bureau",
      "definition": "L’image montre un schéma annoté du bureau de Windows 7. Elle sert à apprendre le nom et le rôle des éléments visibles sur le bureau.",
      "example": "L’élève repère les icônes, le bouton Démarrer, la barre des tâches et la zone de notification, puis explique que ces éléments permettent d’ouvrir des programmes, de naviguer et de gérer le poste.",
      "action": "Lire les étiquettes de l’image → montrer chaque élément → expliquer son rôle simple : les icônes ouvrent des éléments, la barre des tâches affiche les programmes, la zone de notification montre l’état du système.",
      "remember": "Les icônes, la barre des tâches et la zone de notification sont des éléments essentiels du bureau."
    }
  });



  /* V72 — Ajouter les images au titre Gestion des fichiers et dossiers */
  Object.assign(LESSON_MEDIA, {
    "Gestion des fichiers et dossiers": [
      {
        "src": "assets/u2-fichiers-creer-dossier.png",
        "caption": "Définition : cette image montre comment créer un nouveau dossier sur le bureau. On fait un clic droit, puis on choisit Nouveau, ensuite Dossier, puis on tape le nom du nouveau dossier.",
        "alt": "Créer un nouveau dossier sur le bureau"
      },
      {
        "src": "assets/u2-fichiers-renommer-supprimer.png",
        "caption": "Définition : cette image montre le menu contextuel d’un fichier. Elle aide à comprendre deux actions importantes de gestion : Renommer pour changer le nom d’un fichier, et Supprimer pour l’envoyer à la corbeille.",
        "alt": "Renommer ou supprimer un fichier"
      },
      {
        "src": "assets/u2-fichiers-explorateur-recherche.png",
        "caption": "Définition : cette image montre l’explorateur de fichiers de Windows. On y voit les dossiers, les lecteurs et la zone de recherche qui permet de retrouver rapidement un fichier ou un dossier dans l’ordinateur.",
        "alt": "Explorateur de fichiers et zone de recherche"
      }
    ]
  });

  Object.assign(V66_VISUAL_EXAMPLES, {
    "u2-fichiers-creer-dossier.png": {
      "title": "Créer un dossier",
      "definition": "L’image explique les étapes de création d’un dossier. Elle montre la procédure complète pour ajouter un nouveau dossier sur le bureau ou dans un emplacement donné.",
      "example": "L’élève fait un clic droit sur le bureau, choisit Nouveau puis Dossier, et tape le nom 'Informatique'. Le dossier est alors créé pour ranger les fichiers du cours.",
      "action": "Observer l’image → suivre les étapes 1, 2, 3 et 4 → expliquer qu’un dossier sert à organiser les fichiers → proposer un nom de dossier adapté.",
      "remember": "Un dossier permet de ranger et d’organiser les fichiers."
    },
    "u2-fichiers-renommer-supprimer.png": {
      "title": "Renommer ou supprimer un fichier",
      "definition": "L’image présente le menu qui apparaît après un clic droit sur un fichier. Elle permet d’apprendre à renommer un fichier ou à le supprimer correctement.",
      "example": "L’élève clique avec le bouton droit sur un fichier, choisit Renommer pour changer son nom en 'exercice1', ou choisit Supprimer pour l’effacer s’il n’est plus utile.",
      "action": "Observer le menu → repérer Renommer → repérer Supprimer → expliquer la différence entre changer le nom d’un fichier et le supprimer.",
      "remember": "Renommer change le nom du fichier, Supprimer l’envoie vers la corbeille."
    },
    "u2-fichiers-explorateur-recherche.png": {
      "title": "Utiliser l’explorateur et rechercher un fichier",
      "definition": "L’image montre l’explorateur de fichiers. Elle aide à reconnaître l’espace où l’on ouvre les dossiers, les lecteurs et la zone de recherche.",
      "example": "L’élève ouvre Ce PC, clique sur Documents pour voir son contenu, puis utilise la zone de recherche pour retrouver rapidement un fichier enregistré auparavant.",
      "action": "Observer l’explorateur → repérer les dossiers et lecteurs → repérer la zone de recherche en haut à droite → expliquer qu’elle sert à retrouver un fichier ou un dossier.",
      "remember": "L’explorateur permet d’ouvrir, classer et rechercher les fichiers et les dossiers."
    }
  });

  const v66OldExamMeta = v62ExamMetaForQuestion;
  v62ExamMetaForQuestion = function(unit, q, index){
    const id = unit && unit.id;
    const text = v62NormalizeText(Array.isArray(q) ? q[0] : q);
    if(id === 'u1_systeme'){
      if(/logiciel|systeme informatique|utilisateur/.test(text)) return {notion:'Notion de système informatique', lessonIndex:0, advice:'Revoir les trois éléments : utilisateur, matériel et logiciels.', action:'Donner un exemple complet : écrire un texte avec clavier, ordinateur et logiciel.'};
      if(/unite centrale|ecran|clavier|souris|imprimante|materiel|memoire|disque dur|haut-parleurs/.test(text)) return {notion:'Composants matériels', lessonIndex:1, advice:'Revoir le rôle de l’unité centrale, écran, clavier, souris, imprimante et mémoire.', action:'Montrer chaque composant du poste et dire son rôle.'};
      if(/peripherique|entree|sortie|stockage|scanner|cle usb/.test(text)) return {notion:'Périphériques et rôles', lessonIndex:2, advice:'Revoir le classement : entrée, sortie et stockage.', action:'Classer clavier, écran, imprimante, scanner, clé USB dans un tableau.'};
      return {notion:'Information, données et traitement', lessonIndex:3, advice:'Revoir entrée, traitement, sortie et stockage.', action:'Expliquer le cycle avec l’exemple du calcul d’une moyenne.'};
    }
    if(id === 'u2_os'){
      if(/systeme d'exploitation|windows|ressources|logiciel principal/.test(text)) return {notion:'Rôle du système d’exploitation', lessonIndex:0, advice:'Revoir le système d’exploitation comme logiciel principal et intermédiaire.', action:'Citer Windows, Linux ou Android et expliquer leur rôle.'};
      if(/bureau|icone|fenetre|barre des taches|bouton x/.test(text)) return {notion:'Bureau, icônes et fenêtres', lessonIndex:1, advice:'Revoir bureau, icônes, fenêtre, barre des tâches et boutons.', action:'Ouvrir une fenêtre puis tester réduire, agrandir et fermer.'};
      if(/fichier|dossier|renommer|copier|deplacer|corbeille|supprimer/.test(text)) return {notion:'Gestion des fichiers et dossiers', lessonIndex:2, advice:'Revoir fichier, dossier, créer, nommer, classer, copier, déplacer et supprimer.', action:'Créer un dossier Informatique 2AC et y classer un fichier.'};
      return {notion:'Paramètres et sécurité', lessonIndex:3, advice:'Revoir paramètres, session, mot de passe, sauvegarde et arrêt correct.', action:'Enregistrer un fichier puis arrêter correctement le poste.'};
    }
    return v66OldExamMeta(unit, q, index);
  };

/* =========================================================
   V87 — Deux espaces séparés + accueil professionnel + cartes mentales
   - Page d’entrée : Espace élève et Espace enseignant séparés.
   - L’espace enseignant est hors navigation de l’application élève.
   - Ajout d’un bloc "À propos du site" en bas du tableau de bord.
   - Ajout d’une carte mentale arborescente dans le style visuel de chaque sous-titre.
========================================================= */
function v87TeacherShell(content){
  return `
    <main class="v87-teacher-shell">
      <header class="v87-teacher-topbar">
        <div class="v87-teacher-brand">
          <span>ÉL</span>
          <div>
            <strong>ÉPI</strong>
            <small>Espace enseignant séparé</small>
          </div>
        </div>
        <button type="button" class="v87-soft-btn" data-v87-landing="1">Retour aux deux espaces</button>
      </header>
      ${content}
    </main>`;
}

function openTeacherArea(){
  alert('L’espace enseignant n’est pas accessible dans l’application élève.');
}

function appShell(content){
  const st = getStudent();
  return `
    <main class="v87-student-shell">
      <header class="v87-student-topbar">
        <div class="v87-student-brand">
          <span>ÉL</span>
          <div>
            <strong>ÉPI</strong>
            <small>Informatique — 2e année collégiale</small>
          </div>
        </div>
        <div class="v87-student-nav">
          ${st ? `<span class="v87-user-pill">${esc(st.prenom || '')} ${esc(st.nom || '')}</span>` : ''}
          <button type="button" class="v87-soft-btn" data-action="home">Accueil élève</button>
          <button type="button" class="v87-danger-btn" data-action="logout">Quitter</button>
        </div>
      </header>
      <section class="v87-student-main">${content}</section>
    </main>`;
}

function renderLogin(){
  localStorage.removeItem(STORAGE_KEY);
  const year = new Date().getFullYear();
  $('#app').innerHTML = `
    <main class="v91-entry-page v100-auth-page" aria-label="Page d’authentification Espace pédagogique informatique">
      <section class="v100-auth-shell">
        <aside class="v100-auth-visual" aria-label="Image éducative">
          <img src="assets/auth-students-computers-v101.png" alt="Élèves travaillant sur des ordinateurs dans une salle informatique">
          <div class="v100-auth-visual-text">
            <span>Apprentissage numérique</span>
            <h2>Un espace simple, clair et motivant pour apprendre l’informatique.</h2>
            <p>Les élèves accèdent aux unités, lisent les images, comprennent les cartes mentales et apprennent progressivement en autonomie.</p>
          </div>
        </aside>
        <section class="v100-auth-card">
          <header class="v91-entry-head v100-entry-head">
            <span class="v100-head-badge">Plateforme pédagogique</span>
            <h1>ÉPI</h1>
            <p>Connecte-toi pour accéder aux unités d’informatique de manière claire, organisée et professionnelle.</p>
          </header>
          <article class="v91-access-card v100-student-card">
            <div class="v100-card-top">
              <span class="v91-card-label">Espace élève</span>
              <span class="v100-mini-status">Accès sécurisé</span>
            </div>
            <h3>Connexion</h3>
            <p class="v100-form-intro">Saisis tes informations pour entrer dans ton espace d’apprentissage.</p>
            <form id="loginForm" class="v91-login-form v100-login-form" autocomplete="off">
              <div class="v100-field-row">
                <label for="loginNom">Nom</label>
                <input name="nom" id="loginNom" type="text" placeholder="Ex : Alami" required>
              </div>
              <div class="v100-field-row">
                <label for="loginPrenom">Prénom</label>
                <input name="prenom" id="loginPrenom" type="text" placeholder="Ex : Sara" required>
              </div>
              <button type="submit" class="v89-primary-btn v100-submit-btn">Entrer dans l’espace élève</button>
            </form>
          </article>
          <article class="v100-teacher-line">
            <div>
              <strong>Espace enseignant</strong>
              <p>Accès séparé pour consulter le suivi et les résultats.</p>
            </div>
            <button type="button" class="v89-secondary-btn v100-teacher-btn" data-action="teacher">Ouvrir</button>
          </article>
          <section class="v91-about-only v100-about-only">
            <span>À propos du site</span>
            <p>Chaque unité propose des notions essentielles, des images explicatives centrées sur le thème étudié et des cartes mentales claires adaptées au niveau de la 2ᵉ année collégiale.</p>
          </section>
          <footer>© ${year} ÉPI</footer>
        </section>
      </section>
    </main>`;
}

function renderHome(){
  const cards = UNITS.map((u, index)=>`
    <button class="v88-unit-card v88-unit-${index % 4}" data-unit="${esc(u.id)}">
      <span class="v88-unit-number">${index + 1}</span>
      <h3>${esc(u.title)}</h3>
      <p>${esc(u.short || u.intro || 'Ouvrir l’unité et commencer les activités.')}</p>
      <strong>Ouvrir l’unité</strong>
    </button>
  `).join('');

  $('#app').innerHTML = appShell(`
    <section class="v88-home-page">
      <div class="v88-home-hero">
        <span class="v87-badge">Espace élève</span>
        <h1>Bienvenue dans votre espace d’apprentissage</h1>
        <p>Choisissez une unité, découvrez chaque sous-titre et utilisez les cartes mentales pour résumer et retenir l’essentiel.</p>
      </div>

      <section class="v88-units-block">
        <div class="v88-section-heading">
          <span>Unités disponibles</span>
          <h2>Un parcours simple, clair et progressif</h2>
          <p>Chaque unité contient des explications, des activités et des résumés visuels pour mieux comprendre le cours.</p>
        </div>
        <div class="v88-units-grid">${cards}</div>
      </section>

      <section class="v88-about-site">
        <div class="v88-about-head">
          <span>À propos du site</span>
          <h2>Pourquoi utiliser Espace pédagogique informatique ?</h2>
        </div>
        <p>Ce site accompagne l’élève avec une méthode simple : voir, écouter, manipuler et s’autoévaluer. Il motive l’apprentissage en transformant chaque sous-titre en résumé visuel, en explication claire et en activité guidée.</p>
        <div class="v88-about-points">
          <span>Contenus clairs</span>
          <span>Cartes mentales colorées</span>
          <span>Exercices guidés</span>
          <span>Évaluation et résultats</span>
        </div>
      </section>
    </section>`);
}

function renderResultsPage(){
  const rows = (typeof getAllTeacherRows === 'function') ? getAllTeacherRows() : getResults().map(r=>({
    nom:r.nom || '',
    prenom:r.prenom || '',
    unite:r.unite || '',
    note:r.note_finale ?? r.note ?? '',
    bonus:Number(r.bonus)>0 || r.bonus === 'Avec bonus' || Number(r.note_finale ?? r.note ?? r.score ?? r.noteFinale ?? 0) > 10 ? 'Avec bonus' : 'Sans bonus'
  }));
  $('#app').innerHTML = v87TeacherShell(`
    <section class="v87-teacher-page">
      <div class="v87-teacher-hero">
        <span class="v87-badge">Espace enseignant</span>
        <h1>Tableau des résultats</h1>
        <p>Cette page est séparée de l’espace élève. Elle permet de consulter les notes et d’exporter le fichier exploitable avec Excel.</p>
        <div class="v87-teacher-actions">
          <button type="button" class="v87-main-btn" data-v87-export="1">Exporter les notes</button>
          <button type="button" class="v87-soft-btn" data-v87-landing="1">Retour aux deux espaces</button>
        </div>
      </div>
      <div class="v87-table-wrap">
        <table class="v87-results-table">
          <thead><tr><th>Nom</th><th>Prénom</th><th>Unité</th><th>Note /20</th><th>Bonus</th></tr></thead>
          <tbody>
            ${rows.length ? rows.map(r=>`
              <tr>
                <td>${esc(r.nom)}</td>
                <td>${esc(r.prenom)}</td>
                <td>${esc(r.unite)}</td>
                <td><strong>${esc(r.note)}</strong></td>
                <td><span class="v87-bonus ${r.bonus === 'Avec bonus' ? 'ok' : ''}">${esc(r.bonus)}</span></td>
              </tr>`).join('') : `<tr><td colspan="5" class="v87-empty">Aucune note enregistrée pour le moment.</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>`);
}

function v87SafeArray(fn, fallback){
  try{
    const value = typeof fn === 'function' ? fn() : fallback;
    return Array.isArray(value) ? value.filter(Boolean) : fallback;
  }catch(e){
    return fallback;
  }
}

function v87TextFromDef(node){
  try{
    const d = defFor(node);
    return Array.isArray(d) ? d[0] : String(d || 'Notion importante à retenir.');
  }catch(e){
    return 'Notion importante à retenir dans ce sous-titre.';
  }
}

function v87MentalMapData(lesson){
  const title = lesson && lesson.title ? lesson.title : 'Sous-titre';
  const objective = lesson && lesson.objective ? lesson.objective : 'Comprendre la notion et savoir l’utiliser dans une activité.';
  const nodes = v87SafeArray(()=>visualNodes(lesson), [title]).slice(0,4);
  const steps = v87SafeArray(()=>visualSteps(lesson), []).slice(0,3);
  const media = v87SafeArray(()=>visualMediaForLesson(lesson), []).slice(0,2);
  const definitionsChildren = nodes.map(n=>({
    title:n,
    text:v87TextFromDef(n)
  }));
  const practiceChildren = steps.length ? steps.map(s=>({
    title:s.title || 'Étape',
    text:s.text || 'Réaliser l’action demandée avec attention.'
  })) : [
    {title:'Observer', text:'Lire le sous-titre et repérer les mots importants.'},
    {title:'Appliquer', text:'Réaliser une petite manipulation ou répondre à une question.'}
  ];
  const mediaChildren = media.length ? media.map(m=>({
    title:m.alt || m.title || 'Image du cours',
    text:m.caption || 'Observer l’image pour comprendre la notion.'
  })) : [
    {title:'Support visuel', text:'Utiliser l’illustration du cours pour construire une idée claire.'}
  ];

  return {
    root:title,
    intro:objective,
    branches:[
      {
        title:'Comprendre',
        text:'Repérer les notions essentielles du sous-titre.',
        children:definitionsChildren
      },
      {
        title:'Observer',
        text:'Utiliser les images et les exemples pour donner du sens au cours.',
        children:mediaChildren
      },
      {
        title:'Appliquer',
        text:'Passer de la compréhension à l’action par une tâche courte.',
        children:practiceChildren
      },
      {
        title:'Retenir',
        text:'Résumer l’idée principale avec ses propres mots.',
        children:[
          {title:'Mot-clé', text:nodes[0] ? `Le mot-clé principal est : ${nodes[0]}.` : 'Choisir le mot le plus important.'},
          {title:'Phrase bilan', text:`À la fin, l’élève doit pouvoir expliquer : ${objective}`}
        ]
      }
    ]
  };
}

function v87RenderMindNode(node, level, index){
  const children = node.children || [];
  return `<li class="v87-map-node-li v87-level-${level} v87-color-${index % 6}">
    <div class="v87-map-node-card">
      <strong>${esc(node.title)}</strong>
      <p>${esc(node.text || '')}</p>
    </div>
    ${children.length ? `<ul>${children.map((child, i)=>v87RenderMindNode(child, level + 1, i)).join('')}</ul>` : ''}
  </li>`;
}

function v87LessonMindMap(lesson){
  const data = v87MentalMapData(lesson);
  return `<section class="panel v88-mindmap-panel">
    <div class="v88-mindmap-head">
      <div>
        <span class="mini-pill">Carte mentale du sous-titre</span>
        <h3>Résumé arborescent : ${esc(data.root)}</h3>
        <p>${esc(data.intro)}</p>
      </div>
      <button type="button" class="v88-root-btn" data-v87-mindmap-root="1" aria-expanded="false">
        <span>Racine</span>
        ${esc(data.root)}
      </button>
    </div>
    <div class="v88-tree-wrap" data-v87-tree hidden>
      <div class="v88-tree-note">Clique sur la racine pour afficher ou masquer l’arbre mental du sous-titre.</div>
      <ul class="v88-mind-tree">
        ${data.branches.map((branch, i)=>v87RenderMindNode(branch, 1, i)).join('')}
      </ul>
    </div>
  </section>`;
}

const v87OriginalVisualPanel = visualPanel;
visualPanel = function(lesson){
  const original = v87OriginalVisualPanel(lesson);
  return `${v87LessonMindMap(lesson)}${original}`;
};

document.addEventListener('click', function(e){
  const landing = e.target.closest('[data-v87-landing]');
  if(landing){
    clearStudent();
    return;
  }
  const exp = e.target.closest('[data-v87-export]');
  if(exp){
    if(typeof exportResultsCsv === 'function') exportResultsCsv();
    else if(typeof exportResultsToCsv === 'function') exportResultsToCsv();
    return;
  }
  const root = e.target.closest('[data-v87-mindmap-root]');
  if(root){
    const panel = root.closest('.v88-mindmap-panel');
    const tree = panel && panel.querySelector('[data-v87-tree]');
    if(tree){
      const open = tree.hasAttribute('hidden');
      if(open) tree.removeAttribute('hidden');
      else tree.setAttribute('hidden','');
      root.classList.toggle('open', open);
      root.setAttribute('aria-expanded', String(open));
    }
    return;
  }
});



/* =========================================================
   V89 — Accueil épuré + cartes mentales radiales par sous-titre
========================================================= */
function v89Clip(text, max=60){
  text = String(text || '').replace(/\s+/g,' ').trim();
  return text.length > max ? text.slice(0, max - 1).trim() + '…' : text;
}
function v89NodeTitleFromSentence(sentence){
  const clean = String(sentence || '').replace(/[.:;!?]/g,'').trim();
  const words = clean.split(/\s+/).filter(Boolean);
  return v89Clip(words.slice(0, 4).join(' '), 28) || 'Notion';
}
function v89AddUnique(nodes, title, text){
  title = v89Clip(title, 32);
  text = v89Clip(text, 74);
  if(!title || nodes.some(n => n.title.toLowerCase() === title.toLowerCase())) return;
  nodes.push({title, text});
}
function v89RadialMapData(lesson){
  const nodes = [];
  (lesson.drag || []).forEach(pair => v89AddUnique(nodes, pair[0], pair[1]));
  (lesson.officialObjectives || []).forEach(obj => v89AddUnique(nodes, v89NodeTitleFromSentence(obj), obj));
  const visualSteps = lesson.visual && Array.isArray(lesson.visual.steps) ? lesson.visual.steps : [];
  visualSteps.forEach(s => v89AddUnique(nodes, s, 'Notion importante dans ce sous-titre.'));
  if(lesson.order && Array.isArray(lesson.order.steps)){
    lesson.order.steps.forEach(s => v89AddUnique(nodes, s, 'Action à réaliser dans l’ordre.'));
  }
  if(lesson.fill && lesson.fill[1]) v89AddUnique(nodes, lesson.fill[1], 'Mot-clé à retenir dans cette leçon.');
  while(nodes.length < 5){
    const fallback = [
      ['Comprendre', 'Identifier l’idée principale du sous-titre.'],
      ['Retenir', 'Garder les mots-clés essentiels en mémoire.'],
      ['Appliquer', 'Utiliser la notion dans une situation simple.'],
      ['Exemple', 'Relier le cours à une manipulation concrète.'],
      ['Bilan', 'Résumer le sous-titre avec ses propres mots.']
    ][nodes.length % 5];
    v89AddUnique(nodes, fallback[0], fallback[1]);
  }
  return {root: lesson.title || 'Carte mentale', nodes: nodes.slice(0, 6)};
}
function v89RenderRadialMindMap(lesson){
  const data = v89RadialMapData(lesson);
  const coords = [
    [50,12], [82,25], [80,72], [50,88], [18,72], [18,25]
  ];
  const lines = data.nodes.map((_, i)=>`<line x1="50" y1="50" x2="${coords[i][0]}" y2="${coords[i][1]}" />`).join('');
  const circles = data.nodes.map((n, i)=>`
    <article class="v89-map-circle v89-circle-${i}" style="--x:${coords[i][0]}%;--y:${coords[i][1]}%;">
      <strong>${esc(n.title)}</strong>
      <span>${esc(n.text)}</span>
    </article>`).join('');
  return `<section class="panel v89-mindmap-panel">
    <div class="v89-map-intro">
      <span class="mini-pill">Carte mentale du sous-titre</span>
      <h3>${esc(data.root)}</h3>
      <p>Résumé visuel des notions importantes du sous-titre.</p>
    </div>
    <button type="button" class="v89-root-toggle" data-v89-root="1" aria-expanded="false">
      <span>Cliquer sur la racine</span>
      ${esc(data.root)}
    </button>
    <div class="v89-radial-wrap" data-v89-map hidden>
      <svg class="v89-map-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>
      <div class="v89-map-center">${esc(data.root)}</div>
      ${circles}
    </div>
  </section>`;
}

const v89OriginalVisualPanel = (typeof v87OriginalVisualPanel !== 'undefined') ? v87OriginalVisualPanel : visualPanel;
visualPanel = function(lesson){
  return `${v89RenderRadialMindMap(lesson)}${v89OriginalVisualPanel(lesson)}`;
};

function renderLogin(){
  localStorage.removeItem(STORAGE_KEY);
  const year = new Date().getFullYear();
  $('#app').innerHTML = `
    <main class="v89-entry-page" aria-label="Page d’accueil Espace pédagogique informatique">
      <section class="v89-entry-card">
        <header class="v89-entry-head">
          <span>Application pédagogique interactive</span>
          <h1>ÉPI</h1>
        </header>
        <section class="v89-access-grid" aria-label="Choisir un espace">
          <article class="v89-access-card">
            <span class="v89-card-label">Espace élève</span>
            <form id="loginForm" class="v89-login-form" autocomplete="off">
              <label>Nom
                <input name="nom" id="loginNom" type="text" placeholder="Exemple : Sidi" required>
              </label>
              <label>Prénom
                <input name="prenom" id="loginPrenom" type="text" placeholder="Exemple : Youssra" required>
              </label>
              <button type="submit" class="v89-primary-btn">Entrer dans l’espace élève</button>
            </form>
          </article>
          <article class="v89-access-card v89-teacher-access">
            <span class="v89-card-label">Espace enseignant</span>
            <button type="button" class="v89-secondary-btn" data-action="teacher">Ouvrir l’espace enseignant</button>
            <small>Accès protégé et séparé de l’espace élève.</small>
          </article>
        </section>
        <section class="v89-about-only">
          <span>À propos du site</span>
          <p>Espace pédagogique informatique aide les élèves à apprendre l’informatique avec des explications simples, des activités interactives et des cartes mentales colorées. L’objectif est de faciliter la compréhension, la mémorisation et l’autonomie.</p>
        </section>
        <footer>© ${year} ÉPI</footer>
      </section>
    </main>`;
}

function renderHome(){
  const cards = UNITS.map((u, index)=>`
    <button class="v89-unit-card v89-unit-${index % 4}" data-unit="${esc(u.id)}">
      <span>Unité ${index + 1}</span>
      <h3>${esc(u.title.replace(/^Unité\s*\d+\s*:\s*/i,''))}</h3>
      <strong>Ouvrir</strong>
    </button>
  `).join('');
  $('#app').innerHTML = appShell(`
    <section class="v89-home-page">
      <section class="v89-home-title">
        <span>Espace élève</span>
        <h1>Choisir une unité</h1>
      </section>
      <section class="v89-home-units">${cards}</section>
      <section class="v89-about-only v89-home-about">
        <span>À propos du site</span>
        <p>Espace pédagogique informatique propose un apprentissage progressif basé sur la visualisation, la pratique et l’autoévaluation. Chaque sous-titre contient une carte mentale spéciale pour retenir les notions essentielles.</p>
      </section>
    </section>`);
}

function renderResultsPage(){
  const rows = (typeof getAllTeacherRows === 'function') ? getAllTeacherRows() : getResults().map(r=>({
    nom:r.nom || '',
    prenom:r.prenom || '',
    unite:r.unite || '',
    note:r.note_finale ?? r.note ?? '',
    bonus:Number(r.bonus)>0 || r.bonus === 'Avec bonus' || Number(r.note_finale ?? r.note ?? r.score ?? r.noteFinale ?? 0) > 10 ? 'Avec bonus' : 'Sans bonus',
    date:r.date || r.createdAt || ''
  }));
  $('#app').innerHTML = v87TeacherShell(`
    <section class="v89-teacher-page">
      <header class="v89-teacher-header">
        <span>Espace enseignant</span>
        <h1>Tableau des résultats</h1>
        <div class="v89-teacher-actions">
          <button type="button" class="v89-primary-btn" data-v87-export="1">Exporter les notes</button>
          <button type="button" class="v89-secondary-btn" data-v87-landing="1">Retour</button>
        </div>
      </header>
      <div class="v89-results-box">
        <table class="v89-results-table">
          <thead>
            <tr><th>N°</th><th>Nom</th><th>Prénom</th><th>Unité</th><th>Note /20</th><th>Bonus</th><th>Date</th></tr>
          </thead>
          <tbody>
            ${rows.length ? rows.map((r,i)=>`
              <tr>
                <td>${i+1}</td>
                <td>${esc(r.nom)}</td>
                <td>${esc(r.prenom)}</td>
                <td>${esc(r.unite)}</td>
                <td class="v89-note-cell">${esc(r.note)}</td>
                <td><span class="v89-bonus ${r.bonus === 'Avec bonus' ? 'ok' : ''}">${esc(r.bonus)}</span></td>
                <td>${esc(String(r.date).slice(0,10))}</td>
              </tr>`).join('') : `<tr><td colspan="7" class="v89-empty">Aucune note enregistrée pour le moment.</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>`);
}

document.addEventListener('click', function(e){
  const root = e.target.closest('[data-v89-root]');
  if(root){
    const panel = root.closest('.v89-mindmap-panel');
    const map = panel && panel.querySelector('[data-v89-map]');
    if(map){
      const open = map.hasAttribute('hidden');
      if(open) map.removeAttribute('hidden');
      else map.setAttribute('hidden','');
      root.classList.toggle('open', open);
      root.setAttribute('aria-expanded', String(open));
    }
  }
});



/* =========================================================
   V91 — Version corrigée stable : accueil, auth, cartes finales
========================================================= */
function v91Short(text, max=88){
  text = String(text || '').replace(/\s+/g,' ').trim();
  return text.length > max ? text.slice(0, max - 1).trim() + '…' : text;
}
function v91CleanTitle(term){
  const aliases = {
    'Créer':'Création', 'Enregistrer':'Enregistrement', 'Nommer':'Nom du fichier', 'Retrouver':'Ouverture',
    'Saisir les données':'Données', 'Créer le classeur':'Classeur', 'Enregistrer le fichier':'Enregistrement',
    'Repérer la colonne':'Colonne', 'Repérer la ligne':'Ligne', 'Lire l’adresse':'Adresse',
    'Titre clair':'Titre', 'Format nombre':'Nombre', 'Couleurs sobres':'Couleurs',
    'Créer le dossier':'Dossier', 'Renommer le fichier':'Renommage', 'Supprimer le fichier':'Suppression',
    'Sélectionner la primitive':'Primitive', 'Choisir la couleur':'Couleur', 'Répéter les instructions':'Répétition',
    'Dessiner une figure':'Figure', 'Procédure POUR':'Procédure', 'Appeler la procédure':'Exécution'
  };
  let t = String(term || '').replace(/[.:;!?]/g,'').replace(/\s+/g,' ').trim();
  return aliases[t] || t;
}
const v91Glossary = {
  'Classeur':'Fichier principal d’un tableur qui regroupe les feuilles de calcul.',
  'Feuille':'Page de travail où les données sont organisées en lignes et colonnes.',
  'Cellule':'Case du tableau repérée par une adresse comme A1 ou B3.',
  'Adresse':'Référence exacte d’une cellule, formée par une lettre et un numéro.',
  'Ligne':'Suite horizontale de cellules repérée par un numéro.',
  'Colonne':'Suite verticale de cellules repérée par une lettre.',
  'Données':'Informations saisies dans un tableau : texte, nombre, date ou formule.',
  'Titre':'Texte qui annonce clairement le contenu du tableau ou du document.',
  'Bordures':'Traits utilisés pour encadrer les cellules et faciliter la lecture.',
  'Alignement':'Position du contenu dans une cellule ou un paragraphe.',
  'Couleurs':'Mise en forme utilisée pour distinguer les parties importantes.',
  'Nombre':'Valeur numérique utilisée pour calculer ou représenter une quantité.',
  'Formule':'Expression de calcul qui commence par le signe égal.',
  'Fonction':'Formule prête à l’emploi, comme SOMME ou MOYENNE.',
  'Recopie':'Reproduction d’une formule vers d’autres cellules.',
  'Poignée de recopie':'Petit carré utilisé pour recopier rapidement une formule.',
  'Dossier':'Emplacement qui sert à organiser plusieurs fichiers.',
  'Fichier':'Document numérique enregistré sur l’ordinateur.',
  'Renommage':'Modification du nom d’un fichier ou d’un dossier.',
  'Suppression':'Action qui envoie un fichier ou un dossier vers la corbeille.',
  'Primitive':'Instruction simple qui commande une action dans le logiciel.',
  'Couleur':'Paramètre visuel utilisé pour distinguer le résultat ou la forme.',
  'Répétition':'Structure qui exécute plusieurs fois la même instruction.',
  'Procédure':'Petit programme nommé qui regroupe plusieurs instructions.',
  'Figure':'Résultat graphique obtenu par une suite d’instructions.',
  'Exécution':'Lancement des instructions pour obtenir le résultat attendu.'
};
function v91UnitForLesson(lesson){
  return UNITS.find(u => (u.lessons || []).some(l => l.id === lesson.id));
}
function v91Useful(term){
  const bad = ['comprendre','retenir','appliquer','exemple','bilan','utiliser','relier','résumer','identifier','garder'];
  const t = String(term || '').toLowerCase().trim();
  return t && !bad.includes(t) && t.length > 2;
}
function v91SentenceFor(term, lesson){
  const text = [lesson.fr, lesson.objective, lesson.officialFocus].filter(Boolean).join(' ');
  const parts = text.split(/[.!?]+\s*/).map(s=>s.trim()).filter(Boolean);
  const low = String(term || '').toLowerCase();
  return parts.find(p => p.toLowerCase().includes(low)) || '';
}
function v91AddNode(nodes, title, explanation, lesson){
  title = v91CleanTitle(title);
  if(!v91Useful(title)) return;
  if(nodes.some(n => n.title.toLowerCase() === title.toLowerCase())) return;
  const sentence = v91SentenceFor(title, lesson);
  const text = v91Short(v91Glossary[title] || explanation || sentence || 'Notion essentielle du sous-titre, à connaître et à employer correctement.', 92);
  nodes.push({title:v91Short(title, 30), text});
}
function v91MindMapData(lesson){
  const nodes = [];
  const unit = v91UnitForLesson(lesson);
  const lessonText = [lesson.title, lesson.fr, lesson.objective, lesson.officialFocus].filter(Boolean).join(' ').toLowerCase();
  if(unit && Array.isArray(unit.dictionary)){
    unit.dictionary.forEach(([term, def])=>{
      if(term && lessonText.includes(String(term).toLowerCase())) v91AddNode(nodes, term, def, lesson);
    });
  }
  (lesson.drag || []).forEach(pair => v91AddNode(nodes, pair[0], pair[1], lesson));
  const visualItems = [];
  if(lesson.visual){
    if(Array.isArray(lesson.visual.items)) visualItems.push(...lesson.visual.items);
    if(Array.isArray(lesson.visual.steps)) visualItems.push(...lesson.visual.steps);
    if(lesson.visual.center) visualItems.push(lesson.visual.center);
  }
  visualItems.forEach(item => v91AddNode(nodes, item, '', lesson));
  if(lesson.fill && lesson.fill[1]) v91AddNode(nodes, lesson.fill[1], '', lesson);
  if(lesson.order && Array.isArray(lesson.order.steps)) lesson.order.steps.forEach(step => v91AddNode(nodes, step, '', lesson));
  String(lesson.title || '').split(/,| et | : |–|-/i).map(s=>s.trim()).filter(Boolean).forEach(part => v91AddNode(nodes, part, '', lesson));
  const fallback = [
    ['Notion centrale', lesson.objective || lesson.fr || 'Idée principale du sous-titre.'],
    ['Mots-clés', 'Vocabulaire indispensable pour comprendre le sous-titre.'],
    ['Relation', 'Lien logique entre les notions présentées dans le sous-titre.'],
    ['Méthode', 'Organisation correcte des étapes ou des éléments.'],
    ['Synthèse', 'Résumé court de ce qu’il faut retenir.']
  ];
  fallback.forEach(([a,b])=>{ if(nodes.length < 5) v91AddNode(nodes, a, b, lesson); });
  return {root: lesson.title || 'Carte mentale', nodes: nodes.slice(0, 5)};
}
function v91RenderMindMap(lesson){
  const data = v91MindMapData(lesson);
  const coords = [[50,13],[82,33],[70,78],[30,78],[18,33]];
  const lines = data.nodes.map((_, i)=>`<line x1="50" y1="50" x2="${coords[i][0]}" y2="${coords[i][1]}" />`).join('');
  const circles = data.nodes.map((n, i)=>`
    <article class="v91-map-circle v91-circle-${i}" style="--x:${coords[i][0]}%;--y:${coords[i][1]}%;">
      <strong>${esc(n.title)}</strong>
      <span>${esc(n.text)}</span>
    </article>`).join('');
  return `<section class="panel v91-mindmap-panel">
    <div class="v91-map-intro">
      <span class="mini-pill">Carte mentale du sous-titre</span>
      <h3>${esc(data.root)}</h3>
      <p>Résumé final des notions importantes du sous-titre.</p>
    </div>
    <button type="button" class="v91-root-toggle" data-v91-root="1" aria-expanded="false">
      <span>Racine</span>${esc(data.root)}
    </button>
    <div class="v91-radial-wrap" data-v91-map hidden>
      <svg class="v91-map-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>
      <div class="v91-map-center">${esc(data.root)}</div>
      ${circles}
    </div>
  </section>`;
}
visualPanel = function(lesson){
  return `${v87OriginalVisualPanel(lesson)}${v91RenderMindMap(lesson)}`;
};

appShell = function(content){
  const st=getStudent();
  return `<div class="app-shell v91-shell"><header class="topbar v91-topbar"><div class="brand"><div class="logo"><img src="assets/logo.svg" alt="Espace pédagogique informatique"></div><div><h1>ÉPI</h1><p>Informatique — apprentissage interactif</p></div></div><div class="nav-actions">${st?`<span class="pill">${esc(st.prenom)} ${esc(st.nom)}</span><button class="btn ghost small" data-action="home">Accueil</button><button class="btn secondary small" data-action="logout">Déconnexion</button>`:''}</div></header>${content}<div class="footer-note"><span class="version-tag">Espace pédagogique informatique</span></div></div>`;
};

function renderLogin(){
  localStorage.removeItem(STORAGE_KEY);
  const year = new Date().getFullYear();
  $('#app').innerHTML = `
    <main class="v91-entry-page" aria-label="Page d’accueil Espace pédagogique informatique">
      <section class="v91-entry-card">
        <header class="v91-entry-head">
          <span>Application pédagogique interactive</span>
          <h1>ÉPI</h1>
        </header>
        <section class="v91-access-grid" aria-label="Choisir un espace">
          <article class="v91-access-card">
            <span class="v91-card-label">Espace élève</span>
            <form id="loginForm" class="v91-login-form" autocomplete="off">
              <label for="loginNom">Nom</label>
              <input name="nom" id="loginNom" type="text" placeholder="Saisir votre nom" required>
              <label for="loginPrenom">Prénom</label>
              <input name="prenom" id="loginPrenom" type="text" placeholder="Saisir votre prénom" required>
              <button type="submit" class="v89-primary-btn">Entrer dans l’espace élève</button>
            </form>
          </article>
          <article class="v91-access-card v91-teacher-access">
            <span class="v91-card-label">Espace enseignant</span>
            <p>Accès séparé et réservé à la consultation des résultats.</p>
            <button type="button" class="v89-secondary-btn" data-action="teacher">Ouvrir l’espace enseignant</button>
          </article>
        </section>
        <section class="v91-about-only">
          <span>À propos du site</span>
          <p>Espace pédagogique informatique accompagne l’apprentissage de l’informatique à travers des unités claires, des activités interactives et des cartes mentales finales. Le site motive l’élève à comprendre, mémoriser et progresser avec autonomie.</p>
        </section>
        <footer>© ${year} ÉPI</footer>
      </section>
    </main>`;
}
function renderHome(){
  const cards = UNITS.map((u, index)=>`
    <button class="v91-unit-card v91-unit-${index % 4}" data-unit="${esc(u.id)}">
      <span>Unité ${index + 1}</span>
      <h3>${esc(u.title.replace(/^Unité\s*\d+\s*:\s*/i,''))}</h3>
      <strong>Ouvrir l’unité</strong>
    </button>
  `).join('');
  $('#app').innerHTML = appShell(`
    <section class="v91-home-page">
      <section class="v91-home-title">
        <span>Espace élève</span>
        <h1>Choisir une unité</h1>
      </section>
      <section class="v91-home-units">${cards}</section>
      <section class="v91-about-only v91-home-about">
        <span>À propos du site</span>
        <p>Chaque unité est organisée pour guider l’élève pas à pas : comprendre les notions, s’entraîner, puis retenir l’essentiel grâce à une carte mentale placée à la fin du style visuel.</p>
      </section>
    </section>`);
}
function renderResultsPage(){
  const rows = (typeof getAllTeacherRows === 'function') ? getAllTeacherRows() : getResults().map(r=>({
    nom:r.nom || '', prenom:r.prenom || '', unite:r.unite || '',
    note:r.note_finale ?? r.note ?? '',
    bonus:Number(r.bonus)>0 || r.bonus === 'Avec bonus' || Number(r.note_finale ?? r.note ?? r.score ?? r.noteFinale ?? 0) > 10 ? 'Avec bonus' : 'Sans bonus',
    date:r.date || r.createdAt || ''
  }));
  $('#app').innerHTML = v87TeacherShell(`
    <section class="v91-teacher-page">
      <header class="v91-teacher-header">
        <div><span>Espace enseignant</span><h1>Tableau des résultats</h1></div>
        <div class="v91-teacher-actions">
          <button type="button" class="v89-primary-btn" data-v87-export="1">Exporter les notes</button>
          <button type="button" class="v89-secondary-btn" data-v87-landing="1">Retour</button>
        </div>
      </header>
      <div class="v91-results-box">
        <table class="v91-results-table">
          <thead><tr><th>N°</th><th>Nom</th><th>Prénom</th><th>Unité</th><th>Note /20</th><th>Bonus</th><th>Date</th></tr></thead>
          <tbody>${rows.length ? rows.map((r,i)=>`
            <tr><td>${i+1}</td><td>${esc(r.nom)}</td><td>${esc(r.prenom)}</td><td>${esc(r.unite)}</td><td class="v91-note-cell">${esc(r.note)}</td><td><span class="v91-bonus ${r.bonus === 'Avec bonus' ? 'ok' : ''}">${esc(r.bonus)}</span></td><td>${esc(String(r.date).slice(0,10))}</td></tr>`).join('') : `<tr><td colspan="7" class="v91-empty">Aucune note enregistrée pour le moment.</td></tr>`}</tbody>
        </table>
      </div>
    </section>`);
}
function exportResultsCsv(){
  const rows = (typeof getAllTeacherRows === 'function') ? getAllTeacherRows() : getResults();
  const header = ['Nom','Prénom','Unité','Note /20','Bonus','Date'];
  const csvRows = rows.map(r=>[
    r.nom || '', r.prenom || '', r.unite || '', r.note_finale ?? r.note ?? '',
    r.bonus || '', String(r.date || r.createdAt || '').slice(0,10)
  ]);
  const csv = [header, ...csvRows].map(row=>row.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(';')).join('\n');
  const blob = new Blob(['\ufeff'+csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'resultats_edu_libre.csv';
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

document.addEventListener('click', function(e){
  const root = e.target.closest('[data-v91-root]');
  if(root){
    const panel = root.closest('.v91-mindmap-panel');
    const map = panel && panel.querySelector('[data-v91-map]');
    if(map){
      const open = map.hasAttribute('hidden');
      if(open) map.removeAttribute('hidden'); else map.setAttribute('hidden','');
      root.classList.toggle('open', open);
      root.setAttribute('aria-expanded', String(open));
    }
  }
});


// --- V92 overrides: définitions plus simples, fonds plus visibles, séparation images/carte mentale ---
function v92Simple(term, lesson){
  const dict = {
    'Gestion du fichier':'Apprendre à créer, enregistrer et retrouver correctement un fichier de travail.',
    'Création du fichier':'Action qui permet de démarrer un nouveau document dans le tableur.',
    'Enregistrement':'Action qui garde le travail dans l’ordinateur pour le retrouver plus tard.',
    'Nom du fichier':'Nom clair qui aide à reconnaître le contenu du document.',
    'Ouverture du fichier':'Action qui permet de retrouver puis afficher un fichier déjà enregistré.',
    'Classeur':'Fichier principal du tableur qui peut contenir plusieurs feuilles.',
    'Feuille':'Page de travail du classeur où l’on saisit les données.',
    'Cellule':'Petite case d’une feuille où l’on écrit un texte, un nombre ou une formule.',
    'Adresse':'Repère d’une cellule, formé par la lettre de la colonne et le numéro de la ligne.',
    'Ligne':'Ensemble horizontal de cellules repéré par un numéro.',
    'Colonne':'Ensemble vertical de cellules repéré par une lettre.',
    'Données':'Informations saisies dans les cellules du tableur.',
    'Titre':'Texte qui présente clairement le contenu du tableau.',
    'Bordures':'Traits qui séparent les cellules et rendent le tableau plus lisible.',
    'Alignement':'Réglage qui place correctement le contenu dans les cellules.',
    'Couleurs':'Mise en forme utilisée pour mieux distinguer les éléments importants.',
    'Nombre':'Format utilisé pour afficher correctement une valeur numérique.',
    'Formule':'Calcul écrit dans une cellule et commençant généralement par le signe égal.',
    'Fonction':'Formule prête à l’emploi qui facilite les calculs fréquents.',
    'Recopie':'Action qui permet de copier automatiquement une formule dans d’autres cellules.',
    'Graphique':'Représentation visuelle des données pour comparer ou lire les résultats.',
    'Mise en page':'Organisation du document avant l’impression.',
    'Impression':'Étape finale qui permet d’obtenir le travail sur papier.',
    'Système informatique':'Ensemble formé par le matériel, les logiciels, les données et l’utilisateur.',
    'Information':'Donnée comprise et utile après un traitement.',
    'Traitement':'Action qui transforme des données en résultat exploitable.',
    'Matériel':'Partie physique de l’ordinateur que l’on peut voir et toucher.',
    'Logiciel':'Programme qui permet à l’ordinateur de réaliser une tâche.',
    'Périphérique':'Appareil relié à l’ordinateur pour saisir, afficher ou conserver des données.',
    'Clavier':'Périphérique d’entrée utilisé pour écrire du texte et des commandes.',
    'Souris':'Périphérique d’entrée utilisé pour pointer, cliquer et sélectionner.',
    'Écran':'Périphérique de sortie qui affiche les informations.',
    'Unité centrale':'Boîtier principal qui traite les données et coordonne le fonctionnement de l’ordinateur.',
    'Système d’exploitation':'Logiciel principal qui fait fonctionner l’ordinateur.',
    'Bureau':'Écran principal de travail où apparaissent les icônes et les fenêtres.',
    'Fenêtre':'Cadre qui affiche un programme, un dossier ou un document ouvert.',
    'Icône':'Petit symbole qui représente un programme, un dossier ou un fichier.',
    'Fichier':'Document numérique enregistré dans l’ordinateur.',
    'Dossier':'Élément qui sert à classer et organiser les fichiers.',
    'Explorateur':'Outil qui permet d’ouvrir, chercher et organiser les fichiers et dossiers.',
    'Renommer':'Action qui consiste à changer le nom d’un fichier ou d’un dossier.',
    'Suppression':'Action qui consiste à retirer un fichier ou un dossier devenu inutile.',
    'Sécurité':'Mesures simples qui protègent l’ordinateur et les données.',
    'Mot de passe':'Code personnel qui protège l’accès à un compte ou à un appareil.',
    'Antivirus':'Logiciel de protection qui détecte les menaces et aide à les bloquer.',
    'Langage de programmation':'Ensemble de règles utilisées pour écrire des commandes.',
    'Environnement LOGO':'Espace de travail qui permet d’écrire des commandes et de voir les dessins.',
    'Logo':'Logiciel de programmation qui commande une tortue pour tracer des figures.',
    'Tortue':'Curser graphique qui se déplace selon les commandes écrites.',
    'Primitive':'Instruction simple utilisée pour déplacer ou orienter la tortue.',
    'Avance':'Commande qui fait avancer la tortue.',
    'Recule':'Commande qui fait reculer la tortue.',
    'Tourne droite':'Commande qui oriente la tortue vers la droite.',
    'Tourne gauche':'Commande qui oriente la tortue vers la gauche.',
    'Répétition':'Structure qui exécute plusieurs fois la même suite d’instructions.',
    'Procédure':'Suite d’instructions regroupées sous un même nom.',
    'Couleur':'Réglage qui change l’apparence du tracé ou du fond.',
    'Figure':'Forme obtenue grâce aux déplacements de la tortue.',
    'Configuration':'Réglages utilisés pour préparer l’environnement de travail.',
    'Exécution':'Action de lancer une commande pour voir le résultat.'
  };
  const t = v91CleanTitle(term);
  if(dict[t]) return dict[t];
  if(lesson && lesson.title){
    return `Notion importante du sous-titre « ${lesson.title} ».`;
  }
  return 'Notion importante du cours.';
}
function v91AddNode(nodes, title, explanation, lesson){
  title = v91CleanTitle(title);
  if(!v91Useful(title)) return;
  if(nodes.some(n => n.title.toLowerCase() === title.toLowerCase())) return;
  const text = v91Short(v92Simple(title, lesson), 94);
  nodes.push({title:v91Short(title, 30), text});
}


/* =========================================================
   V93 — Aquarelle, authentification à gauche, cartes mentales définies
========================================================= */
const v93Glossary = {
  'Système informatique':'Ensemble composé de l’utilisateur, du matériel, des logiciels et des données pour traiter l’information.',
  'Utilisateur':'Personne qui donne des actions à l’ordinateur et exploite les résultats obtenus.',
  'Matériel':'Partie physique de l’ordinateur que l’on peut voir, toucher ou brancher.',
  'Logiciel':'Programme qui permet à l’ordinateur de réaliser une tâche précise.',
  'Logiciels':'Ensemble de programmes utilisés pour faire fonctionner l’ordinateur ou réaliser des travaux.',
  'Programme':'Suite d’instructions écrites pour demander une action à l’ordinateur.',
  'Application':'Logiciel utilisé pour réaliser un travail précis comme écrire, calculer ou dessiner.',
  'Tâche':'Travail précis réalisé par l’utilisateur à l’aide d’un logiciel.',
  'Information':'Donnée comprise et utile après un traitement.',
  'Donnée':'Valeur saisie ou utilisée par l’ordinateur avant ou pendant le traitement.',
  'Données':'Informations saisies ou utilisées dans un document, un tableau ou un programme.',
  'Traitement':'Action qui transforme des données en résultat exploitable.',
  'Résultat':'Information obtenue après le traitement des données.',
  'Stockage':'Conservation des données dans un support pour les retrouver plus tard.',
  'Unité centrale':'Boîtier principal qui traite les données et coordonne les composants de l’ordinateur.',
  'Écran':'Périphérique de sortie qui affiche les informations et les résultats.',
  'Clavier':'Périphérique d’entrée utilisé pour saisir du texte, des nombres et des commandes.',
  'Souris':'Périphérique d’entrée utilisé pour pointer, cliquer et sélectionner.',
  'Périphérique':'Appareil relié à l’ordinateur pour saisir, afficher, imprimer ou stocker des données.',
  'Périphérique d’entrée':'Appareil qui permet d’introduire des données dans l’ordinateur.',
  'Périphérique de sortie':'Appareil qui permet d’afficher, imprimer ou produire les résultats.',
  'Périphérique de stockage':'Appareil qui permet de conserver les fichiers et les données.',
  'Entrée':'Étape où l’utilisateur introduit les données dans le système informatique.',
  'Sortie':'Étape où le système informatique présente le résultat à l’utilisateur.',
  'Système d’exploitation':'Logiciel principal qui fait fonctionner l’ordinateur et organise les ressources.',
  'Bureau':'Espace principal affiché après l’ouverture de session.',
  'Icône':'Petit symbole qui représente un programme, un fichier ou un dossier.',
  'Icônes':'Petits symboles qui représentent des programmes, des fichiers ou des dossiers.',
  'Fenêtre':'Cadre affiché à l’écran pour utiliser un programme, un dossier ou un document.',
  'Fenêtres':'Cadres affichés à l’écran pour travailler avec des programmes ou des documents.',
  'Barre des tâches':'Zone du bureau qui donne accès aux applications ouvertes et aux outils rapides.',
  'Menu':'Liste d’options qui permet de choisir une commande ou d’ouvrir un programme.',
  'Corbeille':'Emplacement qui reçoit les éléments supprimés avant leur suppression définitive.',
  'Session':'Espace de travail ouvert avec un compte utilisateur.',
  'Paramètres':'Réglages qui permettent d’adapter le système, l’affichage, la langue ou la sécurité.',
  'Sécurité':'Bonnes pratiques qui protègent l’ordinateur, la session et les fichiers personnels.',
  'Mot de passe':'Code personnel qui protège l’accès à un compte ou à un appareil.',
  'Sauvegarde':'Action qui conserve le travail pour éviter sa perte.',
  'Arrêt correct':'Fermeture normale de l’ordinateur après l’enregistrement du travail.',
  'Fichier':'Document numérique enregistré sur l’ordinateur.',
  'Dossier':'Emplacement qui sert à ranger et organiser plusieurs fichiers.',
  'Explorateur':'Outil qui permet d’ouvrir, chercher et organiser les fichiers et dossiers.',
  'Renommage':'Action qui consiste à changer le nom d’un fichier ou d’un dossier.',
  'Suppression':'Action qui consiste à retirer un élément inutile et à l’envoyer vers la corbeille.',
  'Classeur':'Fichier principal d’un tableur qui peut contenir plusieurs feuilles.',
  'Tableur':'Logiciel qui organise les données en tableaux et facilite les calculs.',
  'Tableau':'Organisation des données en lignes et colonnes pour les lire facilement.',
  'Feuille':'Page de travail d’un classeur où l’on saisit les données.',
  'Cellule':'Case d’une feuille où l’on saisit une donnée ou une formule.',
  'Adresse':'Repère d’une cellule formé par la lettre de la colonne et le numéro de la ligne.',
  'Ligne':'Suite horizontale de cellules repérée par un numéro.',
  'Colonne':'Suite verticale de cellules repérée par une lettre.',
  'Plage':'Groupe de cellules sélectionnées ensemble dans une feuille de calcul.',
  'Mise en forme':'Modification de l’apparence du tableau pour le rendre clair et lisible.',
  'Titre':'Texte qui annonce clairement le contenu d’un tableau ou d’un document.',
  'Bordures':'Traits qui encadrent les cellules et séparent les parties du tableau.',
  'Alignement':'Réglage qui place le contenu à gauche, au centre ou à droite.',
  'Nombre':'Valeur numérique utilisée pour représenter une quantité ou réaliser un calcul.',
  'Format nombre':'Réglage qui affiche correctement une valeur numérique.',
  'Couleurs':'Éléments visuels utilisés pour distinguer les parties importantes sans surcharger.',
  'Formule':'Calcul écrit dans une cellule et commençant généralement par le signe égal.',
  'Fonction':'Formule prête à l’emploi qui facilite les calculs fréquents.',
  'SOMME':'Fonction qui additionne plusieurs valeurs dans le tableur.',
  'Recopie':'Action qui reproduit une formule ou une donnée dans d’autres cellules.',
  'Poignée de recopie':'Petit carré utilisé pour recopier rapidement une formule ou une série.',
  'Graphique':'Représentation visuelle des données pour comparer et comprendre rapidement les valeurs.',
  'Mise en page':'Organisation du document avant l’impression.',
  'Impression':'Action qui permet d’obtenir le document sur papier.',
  'Création du fichier':'Démarrage d’un nouveau document de travail dans le logiciel.',
  'Enregistrement':'Action qui garde le travail dans un emplacement connu.',
  'Nom du fichier':'Nom clair qui permet de reconnaître facilement le document.',
  'Ouverture du fichier':'Action qui permet d’afficher un document déjà enregistré.',
  'Langage de programmation':'Ensemble de règles utilisées pour écrire des instructions compréhensibles par un logiciel.',
  'LOGO':'Langage ou logiciel éducatif qui commande une tortue pour dessiner des figures.',
  'Environnement LOGO':'Espace de travail où l’on écrit les commandes et observe le dessin.',
  'Tortue':'Curseur graphique qui se déplace sur l’écran selon les commandes LOGO.',
  'Primitive':'Instruction simple qui ordonne une action directe à la tortue.',
  'Instruction':'Commande écrite pour demander une action au logiciel.',
  'Avance':'Commande qui déplace la tortue vers l’avant.',
  'Recule':'Commande qui déplace la tortue vers l’arrière.',
  'Tourne droite':'Commande qui oriente la tortue vers la droite selon un angle.',
  'Tourne gauche':'Commande qui oriente la tortue vers la gauche selon un angle.',
  'Angle':'Mesure de rotation qui indique de combien la tortue doit tourner.',
  'Crayon':'Outil de dessin de la tortue qui peut être levé ou baissé.',
  'Couleur':'Réglage qui change l’apparence du tracé ou du fond.',
  'Figure':'Forme obtenue par une suite d’instructions.',
  'Répétition':'Structure qui exécute plusieurs fois la même suite d’instructions.',
  'REPETE':'Instruction LOGO qui répète un bloc de commandes un nombre précis de fois.',
  'Séquence':'Suite ordonnée d’instructions exécutées l’une après l’autre.',
  'Procédure':'Petit programme nommé qui regroupe plusieurs instructions.',
  'POUR':'Mot utilisé pour commencer la définition d’une procédure LOGO.',
  'FIN':'Mot utilisé pour terminer la définition d’une procédure LOGO.',
  'Configuration':'Réglages utilisés pour préparer l’environnement de travail.',
  'Exécution':'Action de lancer une instruction ou un programme pour voir le résultat.'
};
const v93Alias = {
  'Créer':'Création du fichier', 'Création':'Création du fichier', 'Créer le classeur':'Classeur', 'Créer un nouveau classeur':'Classeur',
  'Enregistrer':'Enregistrement', 'Sauvegarder':'Sauvegarde', 'Nommer':'Nom du fichier', 'Retrouver':'Ouverture du fichier',
  'Ouvrir':'Ouverture du fichier', 'Classer':'Dossier', 'Ranger':'Dossier', 'Créer un dossier':'Dossier', 'Nommer et sauvegarder le fichier':'Enregistrement',
  'Saisir les données':'Données', 'Titre clair':'Titre', 'Format nombre':'Format nombre', 'Couleurs sobres':'Couleurs',
  'Repérer la colonne':'Colonne', 'Repérer la ligne':'Ligne', 'Lire l’adresse':'Adresse', 'Trouver une cellule':'Cellule',
  'Reconnaître une formule':'Formule', 'Reconnaître une fonction':'Fonction', 'Calculer un total':'SOMME', 'Repérer la poignée de recopie':'Poignée de recopie',
  'Créer un graphique à partir d’un tableau':'Graphique', 'Préparer une impression':'Impression', 'Présenter un tableau':'Mise en forme',
  'Allumer l’ordinateur':'Système d’exploitation', 'Ouvrir la session':'Session', 'Lancer un logiciel':'Logiciel',
  'Régler':'Paramètres', 'Protéger':'Sécurité', 'Arrêter':'Arrêt correct', 'Sécurité de la session':'Sécurité',
  'Renommer':'Renommage', 'Renommer le fichier':'Renommage', 'Supprimer le fichier':'Suppression', 'Renommer ou supprimer un fichier':'Renommage',
  'Logiciels':'Logiciels', 'Identifier les logiciels':'Logiciel', 'Reconnaître les composants matériels':'Matériel', 'Reconnaître les éléments matériels':'Matériel',
  'Comprendre l’information et son traitement':'Traitement', 'Traiter une information':'Traitement', 'Entrée et sortie':'Entrée',
  'Avancer avec AV':'Avance', 'Reculer avec RE':'Recule', 'Tourner à droite avec TD':'Tourne droite', 'Tourner à gauche avec TG':'Tourne gauche',
  'Effacer l’écran avec VE':'Exécution', 'Changer la couleur du fond':'Couleur', 'Changer la couleur de police':'Couleur', 'Lever et baisser le crayon':'Crayon',
  'Comprendre la syntaxe de REPETE':'REPETE', 'Répéter une séquence trois fois':'Répétition', 'Tracer un carré avec répétition':'Répétition',
  'Créer une procédure':'Procédure', 'Créer une procédure avec POUR':'Procédure', 'Écrire un message avec ECRIS':'Instruction', 'Tester une instruction':'Exécution'
};
v91CleanTitle = function(term){
  let t = String(term || '').replace(/[.:;!?]/g,'').replace(/\s+/g,' ').trim();
  if(!t) return '';
  if(v93Alias[t]) return v93Alias[t];
  t = t.replace(/^les\s+/i,'').replace(/^des\s+/i,'').replace(/^un\s+/i,'').replace(/^une\s+/i,'').trim();
  if(v93Alias[t]) return v93Alias[t];
  if(v93Glossary[t]) return t;
  const singular = t.replace(/s$/,'');
  if(v93Glossary[singular]) return singular;
  if(/^icônes$/i.test(t)) return 'Icônes';
  if(/^fenêtres$/i.test(t)) return 'Fenêtres';
  return t;
};
v91Useful = function(term){
  const t = v91CleanTitle(term);
  return Boolean(t && v93Glossary[t]);
};
v92Simple = function(term, lesson){
  const t = v91CleanTitle(term);
  return v93Glossary[t] || 'Définition courte de la notion à retenir dans ce sous-titre.';
};
function v93AddCandidate(list, term){
  const t = v91CleanTitle(term);
  if(t && v93Glossary[t] && !list.includes(t)) list.push(t);
}
function v93DefaultTerms(lesson){
  const unit = v91UnitForLesson(lesson);
  const title = String((lesson && lesson.title) || '').toLowerCase();
  const unitTitle = String((unit && unit.title) || '').toLowerCase();
  if(title.includes('fichier tableur')) return ['Classeur','Enregistrement','Nom du fichier','Dossier','Ouverture du fichier'];
  if(title.includes('feuilles') || title.includes('adresses')) return ['Classeur','Feuille','Ligne','Colonne','Cellule','Adresse'];
  if(title.includes('saisie') || title.includes('mise en forme')) return ['Données','Cellule','Mise en forme','Titre','Bordures','Alignement'];
  if(title.includes('formules') || title.includes('fonctions') || title.includes('recopie')) return ['Formule','Fonction','SOMME','Recopie','Poignée de recopie'];
  if(title.includes('graphiques') || title.includes('impression') || title.includes('mise en page')) return ['Graphique','Tableau','Mise en page','Impression','Données'];
  if(title.includes('notion de système informatique')) return ['Système informatique','Utilisateur','Matériel','Logiciel','Information'];
  if(title.includes('matériel') || title.includes('composants')) return ['Matériel','Unité centrale','Écran','Clavier','Souris'];
  if(title.includes('logiciel')) return ['Logiciel','Programme','Application','Système d’exploitation','Tâche'];
  if(title.includes('périphérique')) return ['Périphérique','Périphérique d’entrée','Périphérique de sortie','Périphérique de stockage','Stockage'];
  if(title.includes('information') || title.includes('traitement')) return ['Donnée','Information','Traitement','Résultat','Stockage'];
  if(title.includes('système d’exploitation')) return ['Système d’exploitation','Utilisateur','Matériel','Logiciel','Fichier'];
  if(title.includes('bureau') || title.includes('icône') || title.includes('fenêtre')) return ['Bureau','Icône','Fenêtre','Barre des tâches','Corbeille'];
  if(title.includes('fichiers') || title.includes('dossiers')) return ['Fichier','Dossier','Explorateur','Renommage','Suppression'];
  if(title.includes('paramètres') || title.includes('sécurité')) return ['Paramètres','Sécurité','Mot de passe','Sauvegarde','Arrêt correct'];
  if(title.includes('langage') || title.includes('environnement logo')) return ['Langage de programmation','Programme','LOGO','Environnement LOGO','Tortue'];
  if(title.includes('primitive')) return ['Primitive','Avance','Recule','Tourne droite','Tourne gauche'];
  if(title.includes('répétition') || title.includes('repete')) return ['Répétition','REPETE','Instruction','Séquence','Figure'];
  if(title.includes('procédure')) return ['Procédure','POUR','FIN','Programme','Exécution'];
  if(unitTitle.includes('système informatique')) return ['Système informatique','Matériel','Logiciel','Périphérique','Information'];
  if(unitTitle.includes('système d’exploitation')) return ['Système d’exploitation','Bureau','Fichier','Dossier','Sécurité'];
  if(unitTitle.includes('tableur')) return ['Tableur','Classeur','Feuille','Cellule','Formule'];
  if(unitTitle.includes('logo')) return ['LOGO','Tortue','Primitive','Répétition','Procédure'];
  return ['Information','Donnée','Traitement','Résultat','Méthode'].filter(t=>v93Glossary[t]);
}
v91AddNode = function(nodes, title, explanation, lesson){
  const t = v91CleanTitle(title);
  if(!t || !v93Glossary[t]) return;
  if(nodes.some(n => n.title.toLowerCase() === t.toLowerCase())) return;
  nodes.push({title:v91Short(t, 30), text:v91Short(v93Glossary[t], 118)});
};
v91MindMapData = function(lesson){
  const terms = [];
  const unit = v91UnitForLesson(lesson);
  v93DefaultTerms(lesson).forEach(t => v93AddCandidate(terms, t));
  const addFrom = value => {
    if(Array.isArray(value)) value.forEach(addFrom);
    else if(value && typeof value === 'object') Object.values(value).forEach(addFrom);
    else if(value) v93AddCandidate(terms, value);
  };
  if(lesson.visual){
    addFrom(lesson.visual.center);
    addFrom(lesson.visual.items || []);
    addFrom(lesson.visual.steps || []);
  }
  (lesson.drag || []).forEach(pair => v93AddCandidate(terms, pair && pair[0]));
  String(lesson.title || '').split(/,| et | : |–|-/i).forEach(p => v93AddCandidate(terms, p));
  const lessonText = [lesson.title, lesson.fr, lesson.objective, lesson.officialFocus].filter(Boolean).join(' ').toLowerCase();
  Object.keys(v93Glossary).forEach(term => {
    if(lessonText.includes(term.toLowerCase())) v93AddCandidate(terms, term);
  });
  if(unit && Array.isArray(unit.dictionary)) unit.dictionary.forEach(pair => v93AddCandidate(terms, pair && pair[0]));
  v93DefaultTerms(lesson).forEach(t => v93AddCandidate(terms, t));
  const nodes = [];
  terms.slice(0, 7).forEach(t => v91AddNode(nodes, t, '', lesson));
  v93DefaultTerms(lesson).forEach(t => { if(nodes.length < 5) v91AddNode(nodes, t, '', lesson); });
  return {root: lesson.title || 'Carte mentale', nodes: nodes.slice(0, 5)};
};
visualPanel = function(lesson){
  return `${v87OriginalVisualPanel(lesson)}${v91RenderMindMap(lesson)}`;
};
renderLogin = function(){
  localStorage.removeItem(STORAGE_KEY);
  const year = new Date().getFullYear();
  $('#app').innerHTML = `
    <main class="v91-entry-page v93-auth-left" aria-label="Page d’accueil Espace pédagogique informatique">
      <section class="v91-entry-card v93-auth-card">
        <header class="v91-entry-head">
          <span>Application pédagogique interactive</span>
          <h1>ÉPI</h1>
          <p class="subtle">Apprendre l’informatique avec des unités claires, des activités et des cartes mentales définies.</p>
        </header>
        <section class="v91-access-grid" aria-label="Choisir un espace">
          <article class="v91-access-card">
            <span class="v91-card-label">Espace élève</span>
            <form id="loginForm" class="v91-login-form" autocomplete="off">
              <label for="loginNom">Nom</label>
              <input name="nom" id="loginNom" type="text" placeholder="Saisir votre nom" required>
              <label for="loginPrenom">Prénom</label>
              <input name="prenom" id="loginPrenom" type="text" placeholder="Saisir votre prénom" required>
              <button type="submit" class="v89-primary-btn">Entrer dans l’espace élève</button>
            </form>
          </article>
          <article class="v91-access-card v91-teacher-access">
            <span class="v91-card-label">Espace enseignant</span>
            <p>Accès séparé et réservé à la consultation des résultats.</p>
            <button type="button" class="v89-secondary-btn" data-action="teacher">Ouvrir l’espace enseignant</button>
          </article>
        </section>
        <section class="v91-about-only">
          <span>À propos du site</span>
          <p>Espace pédagogique informatique propose des explications visuelles, auditives et kinesthésiques. Les couleurs de l’interface sont harmonisées avec le fond aquarelle, et chaque carte mentale présente des notions avec leurs définitions.</p>
        </section>
        <footer>© ${year} ÉPI</footer>
      </section>
    </main>`;
};
renderHome = function(){
  const cards = UNITS.map((u, index)=>`
    <button class="v91-unit-card v91-unit-${index % 4}" data-unit="${esc(u.id)}">
      <span>Unité ${index + 1}</span>
      <h3>${esc(u.title.replace(/^Unité\s*\d+\s*:\s*/i,''))}</h3>
      <strong>Ouvrir l’unité</strong>
    </button>
  `).join('');
  $('#app').innerHTML = appShell(`
    <section class="v91-home-page v93-home-paint">
      <section class="v91-home-title">
        <span>Espace élève</span>
        <h1>Choisir une unité</h1>
      </section>
      <section class="v91-home-units">${cards}</section>
      <section class="v91-about-only v91-home-about">
        <span>À propos du site</span>
        <p>La page des unités utilise le fond aquarelle fourni. Les cartes gardent une bonne lisibilité grâce à des blocs transparents et des couleurs cohérentes.</p>
      </section>
    </section>`);
};



/* =========================================================
   V94 — Auth image de classe, couleurs plus riches, carte mentale à sous-fils
========================================================= */
const v94ExampleBank = {
  'Système informatique':['Exemple : un élève utilise le clavier et la souris pour lancer un logiciel qui affiche un résultat à l’écran.'],
  'Utilisateur':['Exemple : l’élève clique sur une icône pour ouvrir une application.'],
  'Matériel':['Exemple : l’écran, le clavier, la souris et l’unité centrale forment une partie du matériel.'],
  'Logiciel':['Exemple : Word, Excel ou un navigateur sont des logiciels.'],
  'Programme':['Exemple : un programme de dessin permet de tracer des formes à l’écran.'],
  'Application':['Exemple : une application de traitement de texte sert à écrire un document.'],
  'Information':['Exemple : une moyenne affichée à l’écran devient une information utile pour l’élève.'],
  'Donnée':['Exemple : les notes saisies dans le clavier sont des données avant le calcul.'],
  'Traitement':['Exemple : le logiciel calcule la moyenne à partir des notes saisies.'],
  'Résultat':['Exemple : après le calcul, la moyenne apparaît comme résultat.'],
  'Stockage':['Exemple : le fichier est gardé dans une clé USB ou sur le disque.'],
  'Unité centrale':['Exemple : elle traite les actions demandées par l’utilisateur.'],
  'Écran':['Exemple : il affiche le bureau, les fenêtres et les résultats.'],
  'Clavier':['Exemple : il sert à écrire le nom, le texte ou les nombres.'],
  'Souris':['Exemple : elle permet de cliquer, sélectionner et ouvrir un programme.'],
  'Périphérique':['Exemple : l’imprimante, la clé USB et le clavier sont des périphériques.'],
  'Périphérique d’entrée':['Exemple : le clavier et la souris permettent d’introduire des données.'],
  'Périphérique de sortie':['Exemple : l’écran et l’imprimante présentent le résultat.'],
  'Périphérique de stockage':['Exemple : la clé USB sert à conserver les fichiers.'],
  'Système d’exploitation':['Exemple : Windows démarre l’ordinateur et permet d’ouvrir les logiciels.'],
  'Bureau':['Exemple : après l’ouverture de session, le bureau apparaît avec ses icônes.'],
  'Icône':['Exemple : double-cliquer sur une icône lance un programme.'],
  'Fenêtre':['Exemple : une fenêtre s’ouvre quand on lance un logiciel ou un dossier.'],
  'Barre des tâches':['Exemple : elle montre les applications ouvertes en bas de l’écran.'],
  'Corbeille':['Exemple : un fichier supprimé part d’abord dans la corbeille.'],
  'Session':['Exemple : l’élève ouvre sa session avec son nom et son mot de passe.'],
  'Paramètres':['Exemple : on peut changer la langue, la date ou l’affichage.'],
  'Sécurité':['Exemple : ne pas partager son mot de passe protège la session.'],
  'Mot de passe':['Exemple : un mot de passe secret empêche l’accès non autorisé.'],
  'Sauvegarde':['Exemple : enregistrer le travail évite de perdre le document.'],
  'Arrêt correct':['Exemple : il faut enregistrer, fermer, puis arrêter l’ordinateur.'],
  'Fichier':['Exemple : exercice1.docx est un fichier enregistré sur l’ordinateur.'],
  'Dossier':['Exemple : le dossier "Informatique" sert à ranger les exercices.'],
  'Explorateur':['Exemple : l’explorateur permet d’ouvrir Documents et de chercher un fichier.'],
  'Renommage':['Exemple : changer "Nouveau document" en "devoir1" est un renommage.'],
  'Suppression':['Exemple : un fichier inutile peut être supprimé puis envoyé à la corbeille.'],
  'Classeur':['Exemple : un nouveau classeur s’ouvre dans le tableur pour commencer le travail.'],
  'Tableur':['Exemple : Excel ou Calc organise les données en lignes et colonnes.'],
  'Tableau':['Exemple : un tableau de notes classe les élèves et leurs résultats.'],
  'Feuille':['Exemple : Sheet1 est une feuille de calcul dans le classeur.'],
  'Cellule':['Exemple : A1 est la cellule située à l’intersection de la colonne A et de la ligne 1.'],
  'Adresse':['Exemple : H4 est l’adresse de la cellule repérée par la colonne H et la ligne 4.'],
  'Ligne':['Exemple : la ligne 5 contient toutes les cellules horizontales numérotées 5.'],
  'Colonne':['Exemple : la colonne C regroupe les cellules verticales repérées par la lettre C.'],
  'Plage':['Exemple : A1:C4 est une plage de plusieurs cellules.'],
  'Mise en forme':['Exemple : colorer un titre et ajouter des bordures améliorent la présentation.'],
  'Titre':['Exemple : "Tableau des produits" peut être le titre du tableau.'],
  'Bordures':['Exemple : choisir "Toutes les bordures" encadre les cellules.'],
  'Alignement':['Exemple : centrer le titre place le texte au milieu de la cellule.'],
  'Nombre':['Exemple : 1234 est une valeur numérique saisie dans une cellule.'],
  'Format nombre':['Exemple : on peut afficher 12,50 au lieu de 12.5 selon le format.'],
  'Couleurs':['Exemple : une couleur douce peut distinguer les en-têtes du tableau.'],
  'Formule':['Exemple : =B2*C2 calcule le total à partir du prix et de la quantité.'],
  'Fonction':['Exemple : =SOMME(A2:C2) additionne plusieurs cellules.'],
  'SOMME':['Exemple : la fonction SOMME calcule rapidement un total.'],
  'Recopie':['Exemple : tirer la poignée copie la formule vers les lignes du bas.'],
  'Poignée de recopie':['Exemple : le petit carré en bas à droite de la cellule sert à recopier.'],
  'Graphique':['Exemple : un graphique en colonnes compare facilement plusieurs valeurs.'],
  'Mise en page':['Exemple : régler l’orientation et les marges prépare l’impression.'],
  'Impression':['Exemple : l’impression produit le travail sur papier.'],
  'LOGO':['Exemple : dans LOGO, la tortue dessine quand on lui donne une commande.'],
  'Environnement LOGO':['Exemple : on écrit les commandes dans la zone de saisie et on observe le dessin.'],
  'Tortue':['Exemple : la tortue avance, tourne et trace des figures.'],
  'Primitive':['Exemple : AV 50 est une primitive qui fait avancer la tortue.'],
  'Instruction':['Exemple : une instruction peut être AV 50, RE 30 ou TD 90.'],
  'Avance':['Exemple : AV 50 déplace la tortue vers l’avant de 50 pas.'],
  'Recule':['Exemple : RE 50 fait reculer la tortue.'],
  'Tourne droite':['Exemple : TD 90 fait tourner la tortue à droite.'],
  'Tourne gauche':['Exemple : TG 90 fait tourner la tortue à gauche.'],
  'Angle':['Exemple : 90° permet de former un angle droit pour tracer un carré.'],
  'Crayon':['Exemple : BC baisse le crayon pour dessiner, LC le lève pour se déplacer sans tracer.'],
  'Couleur':['Exemple : FCFG 12 change la couleur de fond dans LOGO.'],
  'Figure':['Exemple : REPETE 4 [AV 60 TD 90] permet de tracer un carré.'],
  'Répétition':['Exemple : répéter la même suite d’actions évite de réécrire chaque commande.'],
  'REPETE':['Exemple : REPETE 3 [AV 100 TD 50] exécute trois fois le même bloc.'],
  'Séquence':['Exemple : AV 50 puis TD 90 puis AV 50 est une séquence ordonnée.'],
  'Procédure':['Exemple : une procédure nommée CARRE regroupe plusieurs commandes.'],
  'POUR':['Exemple : POUR CARRE commence l’écriture d’une procédure.'],
  'FIN':['Exemple : FIN termine la définition d’une procédure.'],
  'Configuration':['Exemple : la configuration permet de choisir l’apparence de la tortue.'],
  'Exécution':['Exemple : après validation, le programme s’exécute et produit un dessin.']
};

function v94PushUnique(list, value){
  const text = String(value || '').replace(/\s+/g,' ').trim();
  if(!text) return;
  if(!list.some(item => item.toLowerCase() === text.toLowerCase())) list.push(text);
}
function v94ExamplesForTerm(term, lesson){
  const key = v91CleanTitle(term);
  const examples = [];
  (v94ExampleBank[key] || []).forEach(item => v94PushUnique(examples, item));
  if(lesson){
    if(typeof lesson.example === 'string') v94PushUnique(examples, 'Exemple : ' + lesson.example);
    if(lesson.visual){
      if(typeof lesson.visual.example === 'string') v94PushUnique(examples, 'Exemple visuel : ' + lesson.visual.example);
      if(Array.isArray(lesson.visual.steps) && lesson.visual.steps.length){
        v94PushUnique(examples, 'Exemple : ' + lesson.visual.steps[0]);
      }
    }
    if(Array.isArray(lesson.order && lesson.order.steps) && lesson.order.steps.length){
      v94PushUnique(examples, 'Exemple : ' + lesson.order.steps[0]);
    }
  }
  return examples.slice(0, 3);
}
const v94BaseMindMapData = v91MindMapData;
function v94MindMapData(lesson){
  const base = v94BaseMindMapData(lesson);
  return {
    root: base.root,
    nodes: (base.nodes || []).map(node => ({
      title: node.title,
      text: node.text,
      examples: v94ExamplesForTerm(node.title, lesson)
    }))
  };
}
v91RenderMindMap = function(lesson){
  const data = v94MindMapData(lesson);
  const branchSpecs = [
    {cls:'left-top', px:285, py:175, cx:[110,110,110], cy:[110,175,240], lineParent:[500,370,315,195]},
    {cls:'left-bottom', px:275, py:465, cx:[105,105,105], cy:[390,455,520], lineParent:[500,370,305,455]},
    {cls:'right-top', px:725, py:170, cx:[890,890,890], cy:[110,175,240], lineParent:[500,370,695,190]},
    {cls:'right-bottom', px:735, py:470, cx:[900,900,900], cy:[395,460,525], lineParent:[500,370,705,460]},
    {cls:'bottom-center', px:500, py:615, cx:[500,500,500], cy:[680,730,780], lineParent:[500,400,500,585]}
  ];
  const colorNames = ['pink','purple','green','cyan','orange'];
  const svgLines = [];
  const branches = data.nodes.slice(0,5).map((node, index)=>{
    const spec = branchSpecs[index] || branchSpecs[branchSpecs.length-1];
    const examples = Array.isArray(node.examples) ? node.examples.slice(0,3) : [];
    const [x1,y1,x2,y2] = spec.lineParent;
    svgLines.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" marker-end="url(#v98Arrow)" class="main color-${index % 5}" />`);
    examples.forEach((example, i)=>{
      const ex = spec.cx[i] || spec.cx[spec.cx.length-1];
      const ey = spec.cy[i] || (spec.py + 65 + i*60);
      svgLines.push(`<line x1="${spec.px}" y1="${spec.py}" x2="${ex}" y2="${ey}" marker-end="url(#v98Arrow)" class="child color-${index % 5}" data-branch-line="${index}" />`);
    });
    return `<article class="v98-branch v98-${spec.cls} v98-${colorNames[index % 5]}" data-v98-wrap="${index}">
      <button type="button" class="v98-parent-node" data-v98-branch="${index}" aria-expanded="false">
        <strong>${esc(node.title)}</strong>
        <span>${esc(node.text)}</span>
      </button>
      ${examples.length ? `<div class="v98-children-wrap" hidden>
        ${examples.map(example => `<div class="v98-child-node">${esc(example)}</div>`).join('')}
      </div>` : ''}
    </article>`;
  }).join('');
  return `<section class="panel v98-mindmap-panel">
    <div class="v98-mindmap-head">
      <span class="mini-pill">Carte mentale organisée</span>
      <h3>${esc(data.root)}</h3>
      <p>Cliquer sur un fil principal pour afficher ses petits-fils. Les flèches montrent clairement les liens.</p>
    </div>
    <div class="v98-map-board">
      <svg class="v98-map-svg" viewBox="0 0 1000 840" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <marker id="v98Arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"></path>
          </marker>
        </defs>
        ${svgLines.join('')}
      </svg>
      <button type="button" class="v98-center-node" data-v98-root="1">${esc(data.root)}</button>
      ${branches}
    </div>
  </section>`;
};
visualPanel = function(lesson){
  return `${v87OriginalVisualPanel(lesson)}${v91RenderMindMap(lesson)}`;
};
appShell = function(content){
  const st=getStudent();
  return `<div class="app-shell v94-shell"><header class="topbar v94-topbar"><div class="brand"><div class="logo"><img src="assets/logo.svg" alt="Espace pédagogique informatique"></div><div><h1>ÉPI</h1><p>Informatique — apprentissage interactif</p></div></div><div class="nav-actions">${st?`<span class="pill">${esc(st.prenom)} ${esc(st.nom)}</span><button class="btn ghost small" data-action="home">Accueil</button><button class="btn secondary small" data-action="logout">Déconnexion</button>`:''}</div></header>${content}<div class="footer-note"><span class="version-tag">Espace pédagogique informatique</span></div></div>`;
};
renderLogin = function(){
  localStorage.removeItem(STORAGE_KEY);
  const year = new Date().getFullYear();
  $('#app').innerHTML = `
    <main class="v95-entry-page v96-entry-page v97-entry-page v98-entry-page" aria-label="Page d’authentification Espace pédagogique informatique">
      <section class="v95-auth-card v96-auth-card v97-auth-card v98-auth-card">
        <header class="v95-entry-head v96-entry-head">
          <span class="v95-badge">Application pédagogique interactive</span>
          <h1>ÉPI</h1>
          <p>Accès élève et accès enseignant depuis cette page.</p>
        </header>
        <div class="v95-auth-grid">
          <div class="v95-auth-block">
            <h2>Espace élève</h2>
            <form id="loginForm" class="v95-login-form" autocomplete="off">
              <label for="loginNom">Nom</label>
              <input name="nom" id="loginNom" type="text" placeholder="Saisir votre nom" required>
              <label for="loginPrenom">Prénom</label>
              <input name="prenom" id="loginPrenom" type="text" placeholder="Saisir votre prénom" required>
              <button type="submit" class="v95-primary-btn">Entrer</button>
            </form>
          </div>
          <div class="v95-auth-block v95-prof-block">
            <h2>Espace enseignant</h2>
            <p>Accès réservé.</p>
            <button type="button" class="v95-secondary-btn v96-teacher-only-auth" data-action="teacher">Authentification prof</button>
          </div>
        </div>
        <footer>© ${year} ÉPI</footer>
      </section>
    </main>`;
};
renderHome = function(){
  const cards = UNITS.map((u, index)=>`
    <button class="v91-unit-card v91-unit-${index % 4}" data-unit="${esc(u.id)}">
      <span>Unité ${index + 1}</span>
      <h3>${esc(u.title.replace(/^Unité\s*\d+\s*:\s*/i,''))}</h3>
      <strong>Ouvrir</strong>
    </button>
  `).join('');
  $('#app').innerHTML = appShell(`
    <section class="v91-home-page v93-home-paint v94-home-paint v95-home-paint v99-home-paint">
      <section class="v99-home-hero">
        <div class="v91-home-title v95-home-title v99-home-title">
          <span>Espace élève</span>
          <h1>Choisir une unité</h1>
        </div>
        <div class="v99-home-image-card"><img src="assets/home-hero-v99.png" alt="Enseignante accompagnant des élèves devant des ordinateurs"></div>
      </section>
      <section class="v91-home-units v99-home-units">${cards}</section>
    </section>`);
};




document.addEventListener('click', function(e){
  const root = e.target.closest('[data-v98-root]');
  if(root){
    const board = root.closest('.v98-map-board');
    if(board){
      const branches = board.querySelectorAll('.v98-branch');
      const allOpen = Array.from(branches).every(el => el.classList.contains('open'));
      branches.forEach((wrap, idx) => {
        const btn = wrap.querySelector('[data-v98-branch]');
        const child = wrap.querySelector('.v98-children-wrap');
        if(child){
          if(allOpen){ child.setAttribute('hidden',''); wrap.classList.remove('open'); btn && btn.setAttribute('aria-expanded','false'); }
          else { child.removeAttribute('hidden'); wrap.classList.add('open'); btn && btn.setAttribute('aria-expanded','true'); }
        }
      });
    }
    return;
  }
  const btn = e.target.closest('[data-v98-branch]');
  if(btn){
    const wrap = btn.closest('.v98-branch');
    const board = btn.closest('.v98-map-board');
    const child = wrap && wrap.querySelector('.v98-children-wrap');
    if(!wrap || !board || !child) return;
    const isOpen = wrap.classList.contains('open');
    board.querySelectorAll('.v98-branch').forEach(other => {
      other.classList.remove('open');
      const obtn = other.querySelector('[data-v98-branch]');
      const ochild = other.querySelector('.v98-children-wrap');
      if(obtn) obtn.setAttribute('aria-expanded','false');
      if(ochild) ochild.setAttribute('hidden','');
    });
    if(!isOpen){
      wrap.classList.add('open');
      btn.setAttribute('aria-expanded','true');
      child.removeAttribute('hidden');
    }
  }
});



function v99NormalizeText(text){
  return String(text || '').replace(/\s+/g,' ').replace(/\s*([:;,!.?])\s*/g,'$1 ').replace(/\s+/g,' ').trim();
}
function v99StripDefinitionPrefix(text){
  return v99NormalizeText(String(text || '').replace(/^\s*(Définition|Definition)\s*:\s*/i,'').replace(/^\s*Image\s*\d+\s*:?\s*/i,''));
}
function v99IsGenericDefinition(text){
  const t = String(text || '').toLowerCase();
  return t.includes('cette image illustre une notion de la leçon');
}
function v99IsPlaceholderExample(text){
  const t = String(text || '').toLowerCase();
  return !t || t.includes('observer l’élément visible dans l’image') || t.includes('observer l\'élément visible dans l\'image') || t.includes('réaliser la même action dans le logiciel');
}
const v99OriginalVisualExampleFor = visualExampleFor;
visualExampleFor = function(item, lesson, index){
  const base = v99OriginalVisualExampleFor(item, lesson, index) || {};
  const out = Object.assign({}, base);
  const caption = item && item.caption ? v99StripDefinitionPrefix(item.caption) : '';
  const explicitDef = item && item.definition ? v99NormalizeText(item.definition) : '';
  const explicitExample = item && item.example ? v99NormalizeText(item.example) : '';
  const explicitAction = item && item.action ? v99NormalizeText(item.action) : '';
  if(explicitDef) out.definition = explicitDef;
  else if(caption && (v99IsGenericDefinition(out.definition) || !out.definition)) out.definition = caption;
  out.title = v99NormalizeText(out.title || item?.title || `Image ${index+1}`);
  out.definition = v99NormalizeText(out.definition || caption || 'Définition non disponible.');
  if(explicitExample) out.example = explicitExample;
  out.example = v99NormalizeText(out.example || '');
  out.action = explicitAction || v99NormalizeText(out.action || 'Observer l’image puis réaliser exactement l’action montrée.');
  out.remember = v99NormalizeText(out.remember || '');

  const defNorm = out.definition.toLowerCase();
  const exNorm = out.example.toLowerCase();
  const actionNorm = out.action.toLowerCase();
  if(v99IsPlaceholderExample(out.example) || exNorm === defNorm || exNorm === actionNorm){
    out.example = 'Pas d’exemple précis pour cette image.';
  }
  if(out.example !== 'Pas d’exemple précis pour cette image.' && out.example.toLowerCase() === out.action.toLowerCase()){
    out.action = 'Réaliser exactement l’action indiquée dans l’exemple.';
  }
  return out;
};

const v99OriginalVisualDetailHtml = visualDetailHtml;
visualDetailHtml = function(item, lesson, index){
  const d = visualExampleFor(item, lesson, index);
  const exampleLine = d.example === 'Pas d’exemple précis pour cette image.'
    ? `<p><strong>Exemple :</strong> ${esc(d.example)}</p>`
    : `<p><strong>Exemple :</strong> ${esc(d.example)}</p>`;
  return `<div class="visual-example-box" aria-hidden="true">
    <h5>Exemple à lire</h5>
    ${exampleLine}
    <p><strong>Action :</strong> ${esc(d.action)}</p>
    ${d.remember ? `<p><strong>À retenir :</strong> ${esc(d.remember)}</p>` : ''}
  </div>`;
};

const v99OriginalExamplesForTerm = v94ExamplesForTerm;
v94ExamplesForTerm = function(term, lesson){
  const key = v91CleanTitle(term);
  const base = Array.isArray(v94ExampleBank[key]) ? v94ExampleBank[key] : [];
  const precise = [];
  base.forEach(item => v94PushUnique(precise, item));
  const cleaned = precise.slice(0,2);
  if(!cleaned.length) return ['Pas d’exemple pour cette notion.'];
  return cleaned;
};


/* =========================================================
   V100 — Authentification avec nouvelle image + exemples visuels précisés
========================================================= */
function renderLogin(){
  localStorage.removeItem(STORAGE_KEY);
  const year = new Date().getFullYear();
  $('#app').innerHTML = `
    <main class="v91-entry-page v100-auth-page" aria-label="Page d’authentification Espace pédagogique informatique">
      <section class="v100-auth-shell">
        <aside class="v100-auth-visual" aria-label="Image éducative">
          <img src="assets/auth-students-computers-v100.png" alt="Élèves travaillant sur des ordinateurs dans une salle informatique">
          <div class="v100-auth-visual-text">
            <span>Apprendre avec le numérique</span>
            <h2>Un espace clair pour comprendre, pratiquer et retenir.</h2>
          </div>
        </aside>
        <section class="v100-auth-card">
          <header class="v91-entry-head v100-entry-head">
            <span>Application pédagogique interactive</span>
            <h1>ÉPI</h1>
            <p>Connecte-toi pour accéder aux unités d’informatique et aux activités interactives.</p>
          </header>
          <article class="v91-access-card v100-student-card">
            <span class="v91-card-label">Espace élève</span>
            <form id="loginForm" class="v91-login-form" autocomplete="off">
              <label for="loginNom">Nom</label>
              <input name="nom" id="loginNom" type="text" placeholder="Saisir votre nom" required>
              <label for="loginPrenom">Prénom</label>
              <input name="prenom" id="loginPrenom" type="text" placeholder="Saisir votre prénom" required>
              <button type="submit" class="v89-primary-btn">Entrer dans l’espace élève</button>
            </form>
          </article>
          <article class="v100-teacher-line">
            <div>
              <strong>Espace enseignant</strong>
              <p>Accès séparé pour consulter les résultats.</p>
            </div>
            <button type="button" class="v89-secondary-btn" data-action="teacher">Ouvrir</button>
          </article>
          <section class="v91-about-only v100-about-only">
            <span>À propos du site</span>
            <p>Le site guide l’élève étape par étape : notion claire, exemple lié à l’image, activité interactive et carte mentale finale.</p>
          </section>
          <footer>© ${year} ÉPI</footer>
        </section>
      </section>
    </main>`;
}

const V100_VISUAL_EXAMPLES = {
  "tableur-gestion-01-nouveau-classeur.jpg": {
    title: "Créer un nouveau classeur",
    definition: "L’image montre l’écran de démarrage du tableur, où l’élève peut choisir un classeur vide pour commencer un nouveau travail.",
    example: "Pour préparer un tableau de notes, l’élève clique sur « Nouveau classeur » afin d’obtenir une feuille vide prête à être remplie.",
    action: "Cliquer sur Nouveau classeur → attendre l’ouverture de la feuille → vérifier que les cellules sont vides.",
    remember: "Un classeur est le fichier principal du tableur."
  },
  "tableur-gestion-02-interface-classeur.jpg": {
    title: "Reconnaître l’interface du classeur",
    definition: "L’image présente l’espace de travail du tableur : cellules, lignes, colonnes, feuilles et barre d’outils.",
    example: "L’élève repère la cellule A1, la colonne A, la ligne 1 et l’onglet de la feuille avant de commencer la saisie.",
    action: "Observer l’interface → montrer une cellule → montrer une ligne → montrer une colonne → montrer l’onglet de feuille.",
    remember: "Le tableur organise les données dans des cellules."
  },
  "tableur-gestion-03-enregistrer-sous.jpg": {
    title: "Utiliser Enregistrer sous",
    definition: "L’image montre la commande qui permet de choisir l’emplacement et le nom du fichier avant de le sauvegarder.",
    example: "Après avoir créé le tableau, l’élève choisit « Enregistrer sous » pour garder son travail dans le dossier Informatique.",
    action: "Cliquer sur Fichier → choisir Enregistrer sous → choisir le dossier → passer à l’étape du nom du fichier.",
    remember: "Enregistrer sous permet de sauvegarder le fichier à l’endroit choisi."
  },
  "tableur-gestion-04-nommer-enregistrer.jpg": {
    title: "Nommer et enregistrer le fichier",
    definition: "L’image montre la zone où l’on saisit le nom du classeur avant de confirmer l’enregistrement.",
    example: "L’élève écrit le nom « notes_classe » puis clique sur Enregistrer pour retrouver facilement son fichier plus tard.",
    action: "Écrire un nom clair → vérifier l’emplacement → cliquer sur Enregistrer.",
    remember: "Un nom clair aide à retrouver rapidement le fichier."
  },
  "tableur-feuilles-ajouter-feuille.png": {
    title: "Ajouter une feuille",
    definition: "L’image montre le bouton + qui sert à ajouter une nouvelle feuille dans le même classeur.",
    example: "Pour séparer les travaux, l’élève garde une feuille pour les notes et ajoute une autre feuille pour les moyennes en cliquant sur +.",
    action: "Repérer le bouton + près des onglets → cliquer dessus → vérifier qu’une nouvelle feuille apparaît.",
    remember: "Un classeur peut contenir plusieurs feuilles."
  },
  "tableur-feuilles-cellule-adresse.png": {
    title: "Repérer la cellule active et sa référence",
    definition: "L’image montre une cellule active dans Excel et la zone qui affiche sa référence. Quand une cellule est sélectionnée, son adresse apparaît dans la zone de nom, par exemple C3.",
    example: "Dans l’image, la cellule active est sélectionnée dans la feuille et sa référence affichée est C3.",
    action: "Cliquer sur une cellule → observer la cellule active → lire sa référence dans la zone de nom.",
    remember: "La référence d’une cellule s’écrit avec la colonne puis la ligne, par exemple C3."
  },
  "tableur-saisie-avant-apres.png": {
    title: "Améliorer un tableau brut",
    definition: "L’image compare un tableau simple avant et après la mise en forme pour montrer l’intérêt d’une présentation claire.",
    example: "Un tableau de notes devient plus lisible quand le titre est visible, les cellules sont alignées et les bordures sont ajoutées.",
    action: "Comparer les deux versions → repérer ce qui a changé → appliquer les mêmes améliorations au tableau.",
    remember: "La mise en forme facilite la lecture du tableau."
  },
  "tableur-saisie-types-donnees-formule.png": {
    title: "Distinguer données et formule",
    definition: "L’image montre qu’une cellule peut contenir du texte, un nombre ou une formule commençant par le signe =.",
    example: "Dans un tableau de vente, « Stylo » est un texte, 12 est un nombre et =B2*C2 est une formule de calcul.",
    action: "Lire chaque cellule → dire si c’est un texte, un nombre ou une formule → justifier la réponse.",
    remember: "Une formule commence toujours par =."
  },
  "tableur-saisie-styler-tableau.png": {
    title: "Présenter correctement un tableau",
    definition: "L’image montre des choix de mise en forme qui rendent le tableau plus clair : titre, alignement, police et présentation des cellules.",
    example: "L’élève met le titre en gras, centre les entêtes et applique un style simple pour distinguer les colonnes.",
    action: "Sélectionner les cellules → appliquer gras ou alignement → vérifier que le tableau reste lisible.",
    remember: "La présentation doit aider à comprendre, pas seulement décorer."
  },
  "tableur-saisie-couleur-remplissage.png": {
    title: "Utiliser la couleur de remplissage",
    definition: "L’image montre comment colorer l’intérieur d’une cellule pour faire ressortir un titre ou une information importante.",
    example: "L’élève colore uniquement la ligne des entêtes pour distinguer les noms des colonnes du reste du tableau.",
    action: "Sélectionner les entêtes → choisir une couleur de remplissage → garder le texte lisible.",
    remember: "La couleur sert à organiser l’information."
  },
  "tableur-saisie-bordures.png": {
    title: "Ajouter des bordures aux cellules",
    definition: "L’image montre la commande Bordures qui encadre les cellules et sépare clairement les lignes et les colonnes.",
    example: "Dans un tableau de notes, l’élève sélectionne toute la plage puis choisit « Toutes les bordures » pour bien voir chaque cellule.",
    action: "Sélectionner le tableau → ouvrir Bordures → choisir Toutes les bordures.",
    remember: "Les bordures rendent le tableau plus lisible."
  },
  "tableur-formules-01-definition-formule.png": {
    title: "Comprendre une formule",
    definition: "L’image montre qu’une formule est une expression de calcul écrite dans une cellule et qui commence par =.",
    example: "Pour calculer un total, l’élève écrit =B2*C2 afin de multiplier le prix par la quantité.",
    action: "Cliquer dans la cellule du résultat → taper = → écrire le calcul avec les références de cellules → valider.",
    remember: "Une formule permet au tableur de calculer automatiquement."
  },
  "tableur-formules-02-definition-fonction.png": {
    title: "Comprendre une fonction",
    definition: "L’image présente une fonction comme une formule prête à l’emploi, par exemple SOMME ou MOYENNE.",
    example: "Pour additionner les montants de B2 à B6, l’élève utilise =SOMME(B2:B6).",
    action: "Choisir la cellule du résultat → écrire la fonction → sélectionner la plage → valider.",
    remember: "Une fonction simplifie les calculs répétitifs."
  },
  "tableur-formules-03-saisie-formule.png": {
    title: "Saisir une formule",
    definition: "L’image montre la saisie d’une formule directement dans la cellule sélectionnée.",
    example: "L’élève calcule une moyenne en écrivant une formule dans la cellule prévue pour le résultat.",
    action: "Sélectionner la cellule → taper = → compléter la formule → appuyer sur Entrée.",
    remember: "Le signe = indique au tableur qu’il doit calculer."
  },
  "tableur-formules-04-resultat-formule.png": {
    title: "Lire le résultat d’une formule",
    definition: "L’image montre qu’après validation, la cellule affiche le résultat du calcul au lieu de la formule écrite.",
    example: "Après avoir tapé =B2+C2, l’élève voit directement la somme calculée dans la cellule.",
    action: "Valider la formule → observer le résultat affiché → cliquer sur la cellule pour revoir la formule dans la barre de formule.",
    remember: "La cellule affiche le résultat, mais la formule reste enregistrée."
  },
  "tableur-formules-05-recopie-poignee.png": {
    title: "Repérer la poignée de recopie",
    definition: "L’image montre le petit carré situé dans le coin inférieur droit de la cellule sélectionnée.",
    example: "Après avoir calculé le total de la première ligne, l’élève utilise la poignée de recopie pour préparer les autres lignes.",
    action: "Sélectionner la cellule contenant la formule → repérer le petit carré → placer la souris dessus.",
    remember: "La poignée de recopie permet de reproduire rapidement une formule."
  },
  "tableur-formules-06-recopie-tirer.png": {
    title: "Tirer la formule vers le bas",
    definition: "L’image montre l’action de faire glisser la poignée de recopie pour appliquer la formule aux lignes suivantes.",
    example: "L’élève tire la formule du premier montant vers le bas pour calculer automatiquement les montants des autres produits.",
    action: "Cliquer sur la poignée → maintenir le clic → tirer vers le bas → relâcher à la dernière ligne.",
    remember: "La recopie évite de retaper la même formule plusieurs fois."
  },
  "tableur-formules-07-recopie-resultat.png": {
    title: "Vérifier les résultats recopiés",
    definition: "L’image montre les résultats obtenus après la recopie de la formule dans plusieurs cellules.",
    example: "Après la recopie, chaque ligne affiche son propre montant, car les références de cellules se sont adaptées.",
    action: "Observer les résultats → cliquer sur une cellule recopiée → vérifier que la formule correspond à la bonne ligne.",
    remember: "Avec l’adressage relatif, la formule s’adapte pendant la recopie."
  },
  "u1-notion-systeme-schema.png": {
    title: "Comprendre le système informatique",
    definition: "L’image montre les échanges entre l’utilisateur, l’interface et le système informatique qui traite la demande.",
    example: "Quand l’élève clique pour ouvrir un logiciel, l’interface transmet la demande et le système affiche le logiciel à l’écran.",
    action: "Repérer l’utilisateur → suivre les flèches → expliquer le rôle de l’interface → dire le résultat obtenu.",
    remember: "Le système informatique traite les demandes de l’utilisateur."
  },
  "u1-notion-systeme-materiels.png": {
    title: "Identifier le matériel informatique",
    definition: "L’image regroupe des éléments physiques du poste informatique : unité centrale, écran, clavier, souris, webcam, routeur et supports de stockage.",
    example: "L’élève classe le clavier et la souris en entrée, l’écran en sortie et la clé USB en stockage.",
    action: "Nommer chaque élément visible → donner son rôle → le classer selon sa fonction.",
    remember: "Le matériel est la partie que l’on peut voir ou toucher."
  },
  "u1-notion-systeme-logiciels.png": {
    title: "Identifier les logiciels",
    definition: "L’image montre des icônes de programmes installés sur l’ordinateur.",
    example: "L’élève double-clique sur l’icône d’un navigateur pour ouvrir Internet ou sur un traitement de texte pour écrire un document.",
    action: "Observer les icônes → choisir deux logiciels → expliquer l’usage de chaque logiciel.",
    remember: "Un logiciel est un programme utilisé pour réaliser une tâche."
  },
  "u1-composants-materiels-poster.png": {
    title: "Reconnaître les composants matériels",
    definition: "L’image présente les composants matériels visibles d’un poste informatique et de quelques périphériques reliés.",
    example: "L’élève repère l’écran, le clavier, la souris, l’imprimante, l’unité centrale, la mémoire externe et la connexion Internet puis explique leur rôle.",
    action: "Observer l’image → nommer chaque composant → dire à quoi il sert → distinguer entrée, sortie, stockage ou connexion.",
    remember: "Le matériel informatique regroupe les éléments physiques que l’on peut voir et toucher."
  },
  "u1-peripheriques-roles.png": {
    title: "Classer les périphériques",
    definition: "L’image classe les périphériques selon leur rôle : entrée, sortie, stockage ou communication.",
    example: "Le clavier sert à entrer des données, l’écran affiche le résultat, la clé USB stocke les fichiers et le modem aide à communiquer.",
    action: "Lire les catégories → placer chaque périphérique dans la bonne catégorie → justifier le classement.",
    remember: "On classe un périphérique selon ce qu’il permet de faire."
  },
  "u1-information-traitement-news.png": {
    title: "Comprendre le traitement de l’information",
    definition: "L’image montre une information numérique reçue et affichée sur différents appareils.",
    example: "Une actualité arrive sous forme de données, l’appareil la traite, puis l’écran affiche le texte et les images à l’utilisateur.",
    action: "Repérer l’appareil → identifier l’information affichée → expliquer entrée, traitement et sortie.",
    remember: "Le traitement transforme les données en information utile."
  },
  "u1-systeme-informatique.svg": {
    title: "Système informatique",
    definition: "L’image résume les trois éléments d’un système informatique : utilisateur, matériel et logiciels.",
    example: "L’élève utilise le clavier et un logiciel pour écrire un texte ; l’ordinateur traite la saisie et affiche le résultat.",
    action: "Nommer les trois éléments → donner un exemple de rôle pour chacun.",
    remember: "Utilisateur + matériel + logiciels forment le système informatique."
  },
  "u1-composants-materiels.svg": {
    title: "Composants matériels",
    definition: "L’image montre les éléments visibles d’un poste informatique et leur fonction principale.",
    example: "L’écran affiche, le clavier saisit, la souris pointe et l’unité centrale traite les informations.",
    action: "Associer chaque composant à son rôle.",
    remember: "Le matériel correspond aux éléments physiques."
  },
  "u1-peripheriques.svg": {
    title: "Rôles des périphériques",
    definition: "L’image montre les catégories de périphériques : entrée, sortie et stockage.",
    example: "Le scanner entre une image, l’imprimante sort un document et la clé USB stocke un fichier.",
    action: "Classer les périphériques visibles par rôle.",
    remember: "Le rôle sert à reconnaître le type de périphérique."
  },
  "u1-traitement-information.svg": {
    title: "Cycle de l’information",
    definition: "L’image montre le passage de l’entrée au traitement, puis à la sortie et au stockage.",
    example: "L’élève saisit des notes, le logiciel calcule la moyenne, puis le résultat s’affiche et peut être enregistré.",
    action: "Identifier chaque étape du cycle dans l’exemple.",
    remember: "Entrée, traitement, sortie et stockage forment le cycle de l’information."
  },
  "u2-os-linux.png": {
    title: "Linux comme système d’exploitation",
    definition: "L’image présente Linux, un système d’exploitation qui permet de démarrer l’ordinateur et de gérer les programmes.",
    example: "Un poste peut utiliser Linux pour afficher le bureau, ouvrir un navigateur et gérer les fichiers.",
    action: "Lire le nom Linux → expliquer qu’il s’agit d’un système d’exploitation → citer une action possible.",
    remember: "Linux est un exemple de système d’exploitation."
  },
  "u2-os-macos.png": {
    title: "macOS comme système d’exploitation",
    definition: "L’image présente macOS, le système d’exploitation des ordinateurs Apple.",
    example: "Sur un Mac, macOS affiche le bureau, ouvre les applications et permet d’organiser les fichiers.",
    action: "Reconnaître macOS → préciser qu’il gère l’ordinateur Apple → donner un exemple d’utilisation.",
    remember: "macOS est aussi un système d’exploitation."
  },
  "u2-os-windows7.png": {
    title: "Windows comme système d’exploitation",
    definition: "L’image présente Windows, un système d’exploitation utilisé pour gérer le bureau, les fenêtres, les fichiers et les logiciels.",
    example: "L’élève ouvre sa session Windows, clique sur une icône du bureau et lance un logiciel de travail.",
    action: "Reconnaître Windows → expliquer son rôle → citer une action réalisée grâce à lui.",
    remember: "Windows aide l’utilisateur à utiliser l’ordinateur facilement."
  },
  "u2-role-os.svg": {
    title: "Rôle du système d’exploitation",
    definition: "L’image montre que le système d’exploitation fait le lien entre l’utilisateur, les logiciels et le matériel.",
    example: "Quand l’élève ouvre un programme, le système d’exploitation utilise le matériel pour lancer ce programme dans une fenêtre.",
    action: "Suivre les flèches → repérer utilisateur, système et matériel → expliquer le lien.",
    remember: "Le système d’exploitation est le logiciel principal de l’ordinateur."
  },
  "u2-bureau-windows10.png": {
    title: "Observer le bureau Windows",
    definition: "L’image montre le bureau Windows avec les icônes, la barre des tâches et la zone de notification.",
    example: "Après l’ouverture de session, l’élève clique sur une icône pour ouvrir un programme et observe son apparition dans la barre des tâches.",
    action: "Repérer les icônes → repérer la barre des tâches → expliquer le rôle de chaque zone.",
    remember: "Le bureau est l’espace principal de travail."
  },
  "u2-bureau-windows7-schema.png": {
    title: "Nommer les éléments du bureau",
    definition: "L’image annotée aide à reconnaître le bouton Démarrer, les icônes, la barre des tâches et la zone de notification.",
    example: "L’élève utilise le bouton Démarrer pour chercher un programme, puis observe l’icône du programme ouvert dans la barre des tâches.",
    action: "Lire chaque étiquette → montrer l’élément correspondant → dire son rôle.",
    remember: "Les éléments du bureau facilitent l’accès aux programmes et aux fichiers."
  },
  "u2-bureau-fenetres.svg": {
    title: "Bureau, icônes et fenêtres",
    definition: "L’image montre les éléments de base de l’interface : bureau, icône, fenêtre et barre des tâches.",
    example: "L’élève double-clique sur une icône, une fenêtre s’ouvre, puis il utilise le bouton X pour la fermer.",
    action: "Repérer l’icône → ouvrir la fenêtre → nommer les boutons réduire, agrandir et fermer.",
    remember: "Une fenêtre affiche le contenu d’un programme ou d’un dossier."
  },
  "u2-fichiers-creer-dossier.png": {
    title: "Créer un dossier",
    definition: "L’image montre les étapes d’un clic droit pour créer un nouveau dossier.",
    example: "L’élève fait clic droit sur le bureau, choisit Nouveau puis Dossier, et nomme le dossier « Informatique 2AC ».",
    action: "Clic droit → Nouveau → Dossier → saisir un nom clair.",
    remember: "Un dossier sert à ranger les fichiers."
  },
  "u2-fichiers-renommer-supprimer.png": {
    title: "Renommer ou supprimer",
    definition: "L’image montre le menu contextuel qui permet de changer le nom d’un fichier ou de le supprimer.",
    example: "L’élève renomme « Nouveau document » en « exercice1 » pour mieux reconnaître le fichier.",
    action: "Clic droit sur le fichier → choisir Renommer ou Supprimer → confirmer seulement si l’action est correcte.",
    remember: "Renommer change le nom ; supprimer envoie le fichier à la corbeille."
  },
  "u2-fichiers-explorateur-recherche.png": {
    title: "Rechercher un fichier",
    definition: "L’image montre l’explorateur de fichiers avec les dossiers, les lecteurs et la zone de recherche.",
    example: "L’élève ouvre Documents puis tape « exercice1 » dans la zone de recherche pour retrouver son fichier.",
    action: "Ouvrir l’explorateur → choisir un dossier → utiliser la zone de recherche.",
    remember: "L’explorateur sert à ouvrir, classer et retrouver les fichiers."
  },
  "u2-fichiers-dossiers.svg": {
    title: "Organiser les fichiers",
    definition: "L’image montre que les dossiers servent à ranger les fichiers de façon claire.",
    example: "L’élève place les exercices Word dans un dossier Word et les exercices Excel dans un dossier Excel.",
    action: "Créer un dossier → nommer clairement → déplacer les fichiers au bon endroit.",
    remember: "Une bonne organisation évite de perdre les fichiers."
  },
  "u2-parametres-securite.svg": {
    title: "Paramètres et sécurité",
    definition: "L’image résume les réglages simples et les règles pour protéger la session.",
    example: "L’élève garde son mot de passe secret, enregistre son travail et arrête correctement l’ordinateur.",
    action: "Vérifier les réglages utiles → protéger la session → enregistrer avant d’arrêter.",
    remember: "La sécurité protège le poste et le travail de l’élève."
  }
};

function v100KeyFromItem(item){
  return item && item.src ? String(item.src).split('/').pop() : '';
}
function v100ApplyPreciseCaptions(){
  if(typeof LESSON_MEDIA !== 'object') return;
  Object.values(LESSON_MEDIA).forEach(list => {
    if(!Array.isArray(list)) return;
    list.forEach(item => {
      const key = v100KeyFromItem(item);
      const d = V100_VISUAL_EXAMPLES[key];
      if(!d) return;
      item.title = d.title;
      item.caption = `Description : ${d.definition}`;
      item.definition = d.definition;
      item.example = d.example;
      item.action = d.action;
      item.remember = d.remember;
    });
  });
}
v100ApplyPreciseCaptions();

const v100OriginalVisualExampleFor = visualExampleFor;
visualExampleFor = function(item, lesson, index){
  const key = v100KeyFromItem(item);
  const precise = V100_VISUAL_EXAMPLES[key];
  if(precise) return Object.assign({}, precise);
  const raw = v100OriginalVisualExampleFor(item, lesson, index) || {};
  const out = Object.assign({}, raw);
  if(!out.example && Array.isArray(raw.steps) && raw.steps.length){
    out.example = `${raw.exampleTitle || 'Exemple précis'} : ${raw.steps[0]}`;
    out.action = raw.steps.join(' → ');
  }
  if(!out.definition && item && item.caption) out.definition = v99StripDefinitionPrefix(item.caption);
  if(!out.title && item && item.title) out.title = item.title;
  if(!out.example) out.example = 'Pas d’exemple précis pour cette image.';
  if(!out.action) out.action = 'Observer l’image puis expliquer la notion avec ses propres mots.';
  return out;
};

visualDetailHtml = function(item, lesson, index){
  const d = visualExampleFor(item, lesson, index);
  return `<div class="visual-example-box v100-visual-example-box" aria-hidden="true">
    <h5>Exemple à lire</h5>
    <p>${esc(d.example || 'Pas d’exemple pour cette image.')}</p>
    ${d.remember ? `<p><strong>À retenir :</strong> ${esc(d.remember)}</p>` : ''}
  </div>`;
};



renderLogin = function(){
  localStorage.removeItem(STORAGE_KEY);
  const year = new Date().getFullYear();
  $('#app').innerHTML = `
    <main class="v91-entry-page v100-auth-page" aria-label="Page d’authentification Espace pédagogique informatique">
      <section class="v100-auth-shell">
        <aside class="v100-auth-visual" aria-label="Image éducative">
          <img src="assets/auth-students-computers-v101.png" alt="Élèves travaillant sur des ordinateurs dans une salle informatique">
          <div class="v100-auth-visual-text">
            <span>Apprentissage numérique</span>
            <h2>Un espace simple, clair et motivant pour apprendre l’informatique.</h2>
            <p>Les élèves accèdent aux unités, lisent les images, comprennent les cartes mentales et apprennent progressivement en autonomie.</p>
          </div>
        </aside>
        <section class="v100-auth-card">
          <header class="v91-entry-head v100-entry-head">
            <span class="v100-head-badge">Plateforme pédagogique</span>
            <h1>ÉPI</h1>
            <p>Connecte-toi pour accéder aux unités d’informatique de manière claire, organisée et professionnelle.</p>
          </header>
          <article class="v91-access-card v100-student-card">
            <div class="v100-card-top">
              <span class="v91-card-label">Espace élève</span>
              <span class="v100-mini-status">Accès sécurisé</span>
            </div>
            <h3>Connexion</h3>
            <p class="v100-form-intro">Saisis tes informations pour entrer dans ton espace d’apprentissage.</p>
            <form id="loginForm" class="v91-login-form v100-login-form" autocomplete="off">
              <div class="v100-field-row">
                <label for="loginNom">Nom</label>
                <input name="nom" id="loginNom" type="text" placeholder="Ex : Alami" required>
              </div>
              <div class="v100-field-row">
                <label for="loginPrenom">Prénom</label>
                <input name="prenom" id="loginPrenom" type="text" placeholder="Ex : Sara" required>
              </div>
              <button type="submit" class="v89-primary-btn v100-submit-btn">Entrer dans l’espace élève</button>
            </form>
          </article>
          <article class="v100-teacher-line">
            <div>
              <strong>Espace enseignant</strong>
              <p>Accès séparé pour consulter le suivi et les résultats.</p>
            </div>
            <button type="button" class="v89-secondary-btn v100-teacher-btn" data-action="teacher">Ouvrir</button>
          </article>
          <section class="v91-about-only v100-about-only">
            <span>À propos du site</span>
            <p>Chaque unité propose des notions essentielles, des images explicatives centrées sur le thème étudié et des cartes mentales claires adaptées au niveau de la 2ᵉ année collégiale.</p>
          </section>
          <footer>© ${year} ÉPI</footer>
        </section>
      </section>
    </main>`;
};

const v101OriginalV94ExamplesForTerm = v94ExamplesForTerm;
v94ExamplesForTerm = function(term, lesson){
  return (v101OriginalV94ExamplesForTerm(term, lesson) || [])
    .map(item => String(item || '').replace(/^Exemple(?: visuel)?\s*:\s*/i,'').replace(/^L[’']élève\s+/i,'').trim())
    .filter(Boolean)
    .slice(0, 3);
};

const v101OriginalVisualExampleFor = visualExampleFor;
visualExampleFor = function(item, lesson, index){
  const data = Object.assign({}, v101OriginalVisualExampleFor(item, lesson, index) || {});
  if(data.definition){
    data.definition = String(data.definition)
      .replace(/\s*Il sert[^.]*\./gi,'.')
      .replace(/\s*Cette commande[^.]*\./gi,'.')
      .replace(/\s*Cette partie[^.]*\./gi,'.')
      .replace(/\s+/g,' ')
      .trim();
  }
  if(data.example){
    data.example = String(data.example)
      .replace(/^L[’']élève\s+/i,'')
      .replace(/^Pour\s+/i,'')
      .replace(/^Après\s+/i,'Après ')
      .trim();
  }
  return data;
};

tableurInteractiveVisualCard = function(item, index, lesson){
  const detail = visualExampleFor(item, lesson, index);
  const title = detail.title || item.title || `Image ${index + 1}`;
  return `<figure class="media-card image-description-card tableur-image-card clickable-visual-card" data-clickable-visual tabindex="0" role="button" aria-expanded="false">
    <div class="visual-definition-top"><span>Thème de l’image</span><strong>${esc(title)}</strong><p>${esc(detail.definition || 'Illustration liée à la notion étudiée.')}</p></div>
    <div class="visual-click-zone"><img src="${esc(item.src)}" alt="${esc(item.alt || title)}"><span class="visual-click-hint">Lire l’exemple</span></div>
    ${visualDetailHtml(item, lesson, index)}
  </figure>`;
};

logoInteractiveVisualCard = function(item, index, lesson){
  const detail = visualExampleFor(item, lesson, index);
  const title = detail.title || item.title || `Image ${index + 1}`;
  return `<figure class="logo-image-card clickable-visual-card" data-clickable-visual tabindex="0" role="button" aria-expanded="false">
    <div class="logo-image-title"><span>${index + 1}</span><h4>${esc(title)}</h4></div>
    <div class="visual-definition-top"><span>Thème de l’image</span><p>${esc(detail.definition || 'Illustration liée à la notion étudiée.')}</p></div>
    <div class="visual-click-zone"><img src="${esc(item.src)}" alt="${esc(item.alt || title)}"><span class="visual-click-hint">Lire l’exemple</span></div>
    ${visualDetailHtml(item, lesson, index)}
  </figure>`;
};

const v101BaseMindMapRender = v91RenderMindMap;
v91RenderMindMap = function(lesson){
  const html = v101BaseMindMapRender(lesson);
  return html
    .replace('Cliquer sur un fil principal pour afficher ses petits-fils. Les flèches montrent clairement les liens.', 'Chaque fil principal mène à des petits-fils simples et clairs. Les flèches aident l’élève à suivre les liens entre les notions.')
    .replace(/Exemple visuel\s*:/g, '')
    .replace(/Exemple\s*:/g, '');
};

// Relancer l’application avec les modifications V100.
renderLogin();


function v102SimpleVisualImageCard(item, index){
  const title = (item && (item.title || item.alt)) ? (item.title || item.alt) : `Image ${index + 1}`;
  const src = item && item.src ? item.src : 'assets/logo.svg';
  return `<figure class="media-card v102-image-only-card"><img src="${esc(src)}" alt="${esc(title)}"></figure>`;
}

visualPanel = function(lesson){
  const media = visualMediaForLesson(lesson);
  const galleryClass = media.length > 1 ? 'single-column' : '';
  const gallery = media.length
    ? media.map((m,i)=>v102SimpleVisualImageCard(m, i)).join('')
    : `<figure class="media-card v102-image-only-card"><img src="assets/logo.svg" alt="Illustration pédagogique"></figure>`;
  return `<section class="panel visual-panel v102-visual-only-panel"><div class="visual-layout v102-visual-layout"><div class="visual-gallery ${galleryClass} v102-visual-gallery">${gallery}</div>${v91RenderMindMap(lesson)}</div></section>`;
};

renderLogin();


renderLogin = function(){
  localStorage.removeItem(STORAGE_KEY);
  const year = new Date().getFullYear();
  $('#app').innerHTML = `
    <main class="v91-entry-page v100-auth-page v103-auth-page" aria-label="Page d’authentification Espace pédagogique informatique">
      <section class="v100-auth-shell v103-auth-shell">
        <section class="v100-auth-card v103-auth-card">
          <header class="v91-entry-head v100-entry-head v103-entry-head">
            <span class="v100-head-badge">Plateforme pédagogique</span>
            <h1>ÉPI</h1>
            <p>Connecte-toi pour accéder aux unités d’informatique dans un espace clair, ordonné et facile à utiliser.</p>
          </header>
          <article class="v91-access-card v100-student-card v103-student-card">
            <div class="v100-card-top">
              <span class="v91-card-label">Espace élève</span>
              <span class="v100-mini-status">Accès sécurisé</span>
            </div>
            <h3>Connexion</h3>
            <p class="v100-form-intro">Saisis ton nom et ton prénom pour entrer dans l’espace d’apprentissage.</p>
            <form id="loginForm" class="v91-login-form v100-login-form" autocomplete="off">
              <div class="v100-field-row">
                <label for="loginNom">Nom</label>
                <input name="nom" id="loginNom" type="text" placeholder="Ex : Alami" required>
              </div>
              <div class="v100-field-row">
                <label for="loginPrenom">Prénom</label>
                <input name="prenom" id="loginPrenom" type="text" placeholder="Ex : Sara" required>
              </div>
              <button type="submit" class="v89-primary-btn v100-submit-btn">Entrer dans l’espace élève</button>
            </form>
          </article>
          <article class="v100-teacher-line v103-teacher-line">
            <div>
              <strong>Espace enseignant</strong>
              <p>Accès séparé pour consulter le suivi et les résultats.</p>
            </div>
            <button type="button" class="v89-secondary-btn v100-teacher-btn" data-action="teacher">Ouvrir</button>
          </article>
          <section class="v91-about-only v100-about-only v103-about-only">
            <span>À propos du site</span>
            <p>Les images et les cartes mentales aident l’élève à comprendre seul les notions essentielles du cours.</p>
          </section>
          <footer>© ${year} ÉPI</footer>
        </section>
        <aside class="v100-auth-visual v103-auth-visual" aria-label="Image éducative">
          <img src="assets/auth-students-computers-v101.png" alt="Élèves travaillant sur des ordinateurs dans une salle informatique">
          <div class="v100-auth-visual-text v103-auth-visual-text">
            <span>Apprentissage numérique</span>
            <h2>Un espace simple, clair et motivant pour apprendre l’informatique.</h2>
            <p>Chaque élève peut observer les images, lire les informations importantes et suivre la carte mentale pour mieux comprendre.</p>
          </div>
        </aside>
      </section>
    </main>`;
};

function v103ClickableVisualCard(item, index, lesson){
  const detail = visualExampleFor(item, lesson, index) || {};
  const title = detail.title || item.title || item.alt || `Image ${index + 1}`;
  const description = detail.definition || 'Cette image présente une notion importante du cours.';
  const example = detail.example || 'Cette image donne un exemple simple lié à la notion étudiée.';
  const remember = detail.remember || '';
  return `<figure class="media-card v103-clickable-card clickable-visual-card" data-clickable-visual tabindex="0" role="button" aria-expanded="false">
    <div class="v103-image-frame visual-click-zone">
      <img src="${esc(item.src || 'assets/logo.svg')}" alt="${esc(item.alt || title)}">
      <span class="visual-click-hint v103-click-hint">Cliquer pour lire l’explication</span>
    </div>
    <div class="visual-example-box v100-visual-example-box v103-visual-example-box" aria-hidden="true">
      <h5>${esc(title)}</h5>
      <p><strong>Description :</strong> ${esc(description)}</p>
      <p><strong>Exemple :</strong> ${esc(example)}</p>
      ${remember ? `<p><strong class="remember-label">À retenir :</strong> ${esc(remember)}</p>` : ''}
    </div>
  </figure>`;
}

visualPanel = function(lesson){
  const media = visualMediaForLesson(lesson);
  const galleryClass = media.length > 1 ? 'single-column' : '';
  const gallery = media.length
    ? media.map((m,i)=>v103ClickableVisualCard(m, i, lesson)).join('')
    : `<figure class="media-card v103-clickable-card"><div class="v103-image-frame"><img src="assets/logo.svg" alt="Illustration pédagogique"></div></figure>`;
  return `<section class="panel visual-panel v102-visual-only-panel v103-visual-panel"><div class="visual-layout v102-visual-layout v103-visual-layout"><div class="visual-gallery ${galleryClass} v102-visual-gallery v103-visual-gallery">${gallery}</div>${v91RenderMindMap(lesson)}</div></section>`;
};

renderLogin();


/* V105 — Authentification plus légère : moins de texte, formulaire plus petit, image plus visible */
renderLogin = function(){
  localStorage.removeItem(STORAGE_KEY);
  const year = new Date().getFullYear();
  $('#app').innerHTML = `
    <main class="v91-entry-page v100-auth-page v103-auth-page v105-auth-page v112-auth-page" aria-label="Page d’authentification Espace pédagogique informatique">
      <section class="v100-auth-shell v103-auth-shell v105-auth-shell v112-auth-shell">
        <section class="v100-auth-card v103-auth-card v105-auth-card v112-auth-card">
          <header class="v91-entry-head v100-entry-head v103-entry-head v105-entry-head v112-entry-head">
            <span class="v100-head-badge v105-head-badge">Plateforme pédagogique</span>
            <h1>ÉPI</h1>
            <p class="v112-school-note">Accès réservé uniquement aux élèves inscrits de l’École Moulay Ismail.</p>
          </header>
          <article class="v91-access-card v100-student-card v103-student-card v105-student-card v112-student-card">
            <div class="v100-card-top v105-card-top">
              <span class="v91-card-label">Espace élève</span>
            </div>
            <form id="loginForm" class="v91-login-form v100-login-form v105-login-form v112-login-form" autocomplete="off">
              <div class="v100-field-row v105-field-row">
                <label for="loginNom">Nom</label>
                <input name="nom" id="loginNom" type="text" placeholder="Nom" required>
              </div>
              <div class="v100-field-row v105-field-row">
                <label for="loginPrenom">Prénom</label>
                <input name="prenom" id="loginPrenom" type="text" placeholder="Prénom" required>
              </div>
              <button type="submit" class="v89-primary-btn v100-submit-btn v105-submit-btn">Entrer</button>
              <p id="loginError" class="v112-login-msg"></p>
            </form>
          </article>
          <footer>© ${year}</footer>
        </section>
        <aside class="v100-auth-visual v103-auth-visual v105-auth-visual v112-auth-visual" aria-label="Image éducative">
          <img src="assets/auth-students-computers-v101.png" alt="Élèves travaillant sur des ordinateurs dans une salle informatique">
        </aside>
      </section>
    </main>`;
};

renderLogin();


/* =========================================================
   V106 — Accueil compact + auditif/kinesthésique liés à l’objectif,
   à la carte mentale et aux images du cours.
========================================================= */
const V106_TERM_BANK = {
  "systeme informatique": {title:"Système informatique", fr:"Un système informatique est un ensemble organisé qui réunit l’utilisateur, le matériel et les logiciels pour traiter l’information.", ar:"النظام المعلوماتي هو مجموعة منظمة تجمع المستعمل والعتاد والبرمجيات لمعالجة المعلومات.", short:"ensemble utilisateur + matériel + logiciels"},
  "utilisateur": {title:"Utilisateur", fr:"L’utilisateur est la personne qui donne des actions à l’ordinateur et exploite les résultats obtenus.", ar:"المستعمل هو الشخص الذي يعطي الأوامر للحاسوب ويستفيد من النتائج.", short:"personne qui utilise le poste"},
  "materiel": {title:"Matériel", fr:"Le matériel correspond aux parties physiques de l’ordinateur que l’on peut voir ou toucher.", ar:"العتاد هو الأجزاء المادية للحاسوب التي يمكن رؤيتها أو لمسها.", short:"parties physiques"},
  "logiciel": {title:"Logiciels", fr:"Les logiciels sont des programmes qui permettent de réaliser des tâches : écrire, calculer, dessiner ou naviguer.", ar:"البرمجيات هي برامج تساعد على إنجاز مهام مثل الكتابة والحساب والرسم والتصفح.", short:"programmes utilisés"},
  "logiciels": {title:"Logiciels", fr:"Les logiciels sont des programmes qui permettent de réaliser des tâches : écrire, calculer, dessiner ou naviguer.", ar:"البرمجيات هي برامج تساعد على إنجاز مهام مثل الكتابة والحساب والرسم والتصفح.", short:"programmes utilisés"},
  "information": {title:"Information", fr:"Une information est un contenu utile que l’ordinateur peut recevoir, traiter, afficher ou stocker.", ar:"المعلومة هي محتوى مفيد يمكن للحاسوب استقباله ومعالجته وعرضه أو تخزينه.", short:"contenu utile traité"},
  "unite centrale": {title:"Unité centrale", fr:"L’unité centrale contient les éléments principaux qui assurent le traitement et le fonctionnement du poste.", ar:"الوحدة المركزية تضم العناصر الأساسية التي تضمن المعالجة واشتغال الحاسوب.", short:"boîtier principal"},
  "ecran": {title:"Écran", fr:"L’écran affiche les textes, les images, les fenêtres et les résultats produits par l’ordinateur.", ar:"الشاشة تعرض النصوص والصور والنوافذ والنتائج التي ينتجها الحاسوب.", short:"affiche les résultats"},
  "clavier": {title:"Clavier", fr:"Le clavier permet de saisir du texte, des nombres et certaines commandes.", ar:"لوحة المفاتيح تسمح بإدخال النصوص والأرقام وبعض الأوامر.", short:"saisir du texte"},
  "souris": {title:"Souris", fr:"La souris permet de pointer, sélectionner, cliquer et déplacer des éléments à l’écran.", ar:"الفأرة تسمح بالإشارة والاختيار والنقر وتحريك العناصر على الشاشة.", short:"pointer et cliquer"},
  "imprimante": {title:"Imprimante", fr:"L’imprimante transforme un document numérique en document papier.", ar:"الطابعة تحول الوثيقة الرقمية إلى وثيقة ورقية.", short:"produire un document papier"},
  "memoire": {title:"Mémoire", fr:"La mémoire conserve des données pour permettre à l’ordinateur de travailler rapidement.", ar:"الذاكرة تحفظ المعطيات لكي يشتغل الحاسوب بسرعة.", short:"conserver des données"},
  "peripherique": {title:"Périphérique", fr:"Un périphérique est un élément relié à l’ordinateur pour entrer, sortir ou stocker des données.", ar:"الملحق هو عنصر مرتبط بالحاسوب للإدخال أو الإخراج أو التخزين.", short:"élément relié au poste"},
  "entree": {title:"Entrée", fr:"L’entrée consiste à introduire des données dans l’ordinateur, par exemple avec le clavier, la souris ou le scanner.", ar:"الإدخال يعني إدخال المعطيات إلى الحاسوب باستعمال لوحة المفاتيح أو الفأرة أو الماسح.", short:"introduire les données"},
  "traitement": {title:"Traitement", fr:"Le traitement transforme les données pour obtenir un résultat utile.", ar:"المعالجة تحول المعطيات للحصول على نتيجة مفيدة.", short:"transformer les données"},
  "sortie": {title:"Sortie", fr:"La sortie présente le résultat à l’utilisateur : affichage, impression ou son.", ar:"الإخراج يقدم النتيجة للمستعمل: عرض أو طباعة أو صوت.", short:"présenter le résultat"},
  "stockage": {title:"Stockage", fr:"Le stockage permet de conserver les fichiers et les données pour les réutiliser plus tard.", ar:"التخزين يسمح بحفظ الملفات والمعطيات لاستعمالها لاحقا.", short:"conserver les fichiers"},
  "donnee": {title:"Donnée", fr:"Une donnée est une information saisie ou utilisée par l’ordinateur, comme un nombre, un texte ou une image.", ar:"المعطى هو معلومة يتم إدخالها أو استعمالها من طرف الحاسوب مثل عدد أو نص أو صورة.", short:"information utilisée"},
  "donnees": {title:"Données", fr:"Les données sont les informations de départ utilisées par l’ordinateur pour produire un résultat.", ar:"المعطيات هي المعلومات الأولية التي يستعملها الحاسوب لإنتاج نتيجة.", short:"informations de départ"},
  "systeme d exploitation": {title:"Système d’exploitation", fr:"Le système d’exploitation est le logiciel principal qui fait fonctionner l’ordinateur et relie l’utilisateur au matériel.", ar:"نظام التشغيل هو البرنامج الرئيسي الذي يشغل الحاسوب ويربط المستعمل بالعتاد.", short:"logiciel principal"},
  "bureau": {title:"Bureau", fr:"Le bureau est l’espace de travail qui apparaît après l’ouverture de la session.", ar:"سطح المكتب هو فضاء العمل الذي يظهر بعد فتح الجلسة.", short:"espace de travail"},
  "icone": {title:"Icône", fr:"Une icône est un petit symbole qui représente un programme, un fichier, un dossier ou un raccourci.", ar:"الأيقونة رمز صغير يمثل برنامجا أو ملفا أو مجلدا أو اختصارا.", short:"petit symbole"},
  "icones": {title:"Icônes", fr:"Les icônes sont de petits symboles qui permettent d’ouvrir rapidement des programmes, fichiers ou dossiers.", ar:"الأيقونات رموز صغيرة تسمح بفتح البرامج أو الملفات أو المجلدات بسرعة.", short:"symboles d’accès"},
  "fenetre": {title:"Fenêtre", fr:"Une fenêtre affiche le contenu d’un programme et peut être déplacée, réduite, agrandie ou fermée.", ar:"النافذة تعرض محتوى برنامج ويمكن نقلها أو تصغيرها أو تكبيرها أو إغلاقها.", short:"zone d’un programme"},
  "fenetres": {title:"Fenêtres", fr:"Les fenêtres affichent le contenu des programmes et se manipulent avec réduire, agrandir, déplacer et fermer.", ar:"النوافذ تعرض محتوى البرامج ويتم التحكم فيها بالتصغير والتكبير والنقل والإغلاق.", short:"zones affichées"},
  "barre des taches": {title:"Barre des tâches", fr:"La barre des tâches aide à retrouver les programmes ouverts et à accéder rapidement aux outils importants.", ar:"شريط المهام يساعد على العثور على البرامج المفتوحة والوصول بسرعة إلى الأدوات المهمة.", short:"accès aux programmes ouverts"},
  "menu": {title:"Menu", fr:"Un menu regroupe des commandes ou des choix que l’utilisateur peut sélectionner.", ar:"القائمة تجمع أوامر أو اختيارات يمكن للمستعمل تحديدها.", short:"liste de commandes"},
  "corbeille": {title:"Corbeille", fr:"La corbeille reçoit les fichiers supprimés et permet parfois de les récupérer.", ar:"سلة المهملات تستقبل الملفات المحذوفة ويمكن أحيانا استرجاعها.", short:"zone des éléments supprimés"},
  "fichier": {title:"Fichier", fr:"Un fichier est un document numérique : texte, image, son, vidéo ou tableau.", ar:"الملف وثيقة رقمية: نص أو صورة أو صوت أو فيديو أو جدول.", short:"document numérique"},
  "dossier": {title:"Dossier", fr:"Un dossier sert à ranger des fichiers pour les retrouver plus facilement.", ar:"المجلد يستعمل لترتيب الملفات والعثور عليها بسهولة.", short:"ranger des fichiers"},
  "creer": {title:"Créer", fr:"Créer signifie produire un nouvel élément, comme un classeur, une feuille, un fichier ou un dossier.", ar:"إنشاء يعني إنتاج عنصر جديد مثل مصنف أو ورقة أو ملف أو مجلد.", short:"faire un nouvel élément"},
  "nommer": {title:"Nommer", fr:"Nommer consiste à donner un nom clair pour identifier rapidement un fichier, un dossier ou un classeur.", ar:"التسمية تعني إعطاء اسم واضح للتعرف بسرعة على ملف أو مجلد أو مصنف.", short:"donner un nom clair"},
  "enregistrer": {title:"Enregistrer", fr:"Enregistrer permet de garder le travail dans un fichier afin de ne pas le perdre.", ar:"الحفظ يسمح بالاحتفاظ بالعمل داخل ملف حتى لا يضيع.", short:"garder le travail"},
  "retrouver": {title:"Retrouver", fr:"Retrouver un fichier signifie le localiser grâce à son nom et à son emplacement.", ar:"العثور على ملف يعني تحديد مكانه بفضل اسمه وموقعه.", short:"localiser un travail"},
  "classer": {title:"Classer", fr:"Classer consiste à ranger les fichiers dans des dossiers adaptés avec des noms clairs.", ar:"التصنيف يعني ترتيب الملفات داخل مجلدات مناسبة وبأسماء واضحة.", short:"organiser les fichiers"},
  "renommer": {title:"Renommer", fr:"Renommer signifie changer le nom d’un fichier ou d’un dossier pour mieux l’identifier.", ar:"إعادة التسمية تعني تغيير اسم ملف أو مجلد للتعرف عليه بشكل أفضل.", short:"changer le nom"},
  "regler": {title:"Régler", fr:"Régler consiste à modifier un paramètre simple comme la langue, la date ou l’affichage.", ar:"الضبط يعني تغيير إعداد بسيط مثل اللغة أو التاريخ أو العرض.", short:"modifier un paramètre"},
  "proteger": {title:"Protéger", fr:"Protéger signifie garder la session, les fichiers et le mot de passe en sécurité.", ar:"الحماية تعني الحفاظ على الجلسة والملفات وكلمة المرور بأمان.", short:"sécuriser le travail"},
  "sauvegarder": {title:"Sauvegarder", fr:"Sauvegarder signifie conserver une copie ou enregistrer le travail pour éviter la perte des données.", ar:"النسخ الاحتياطي أو الحفظ يعني الاحتفاظ بالعمل لتجنب ضياع المعطيات.", short:"éviter la perte"},
  "arreter": {title:"Arrêter", fr:"Arrêter correctement consiste à enregistrer, fermer les programmes puis utiliser le bouton Arrêter.", ar:"الإيقاف الصحيح يعني حفظ العمل وإغلاق البرامج ثم استعمال زر الإيقاف.", short:"éteindre correctement"},
  "parametres": {title:"Paramètres", fr:"Les paramètres permettent d’adapter le système : langue, date, affichage, comptes ou connexion.", ar:"الإعدادات تسمح بتكييف النظام: اللغة والتاريخ والعرض والحسابات والاتصال.", short:"réglages du système"},
  "securite": {title:"Sécurité", fr:"La sécurité consiste à protéger le poste, la session et les fichiers contre les erreurs ou les accès non autorisés.", ar:"الأمن يعني حماية الحاسوب والجلسة والملفات من الأخطاء أو الدخول غير المسموح.", short:"protection du poste"},
  "session": {title:"Session", fr:"La session est l’espace personnel ouvert avec un compte utilisateur.", ar:"الجلسة هي الفضاء الشخصي الذي يفتح بحساب المستعمل.", short:"espace personnel"},
  "classeur": {title:"Classeur", fr:"Un classeur est le fichier principal du tableur. Il peut contenir plusieurs feuilles de calcul.", ar:"المصنف هو الملف الرئيسي في الجداول، ويمكن أن يحتوي على عدة أوراق حساب.", short:"fichier du tableur"},
  "feuille": {title:"Feuille", fr:"Une feuille est une page de calcul dans un classeur, composée de lignes, colonnes et cellules.", ar:"الورقة هي صفحة حساب داخل المصنف وتتكون من أسطر وأعمدة وخلايا.", short:"page de calcul"},
  "ligne": {title:"Ligne", fr:"Une ligne est un ensemble horizontal de cellules, repéré par un numéro.", ar:"السطر هو مجموعة أفقية من الخلايا ويحدد برقم.", short:"cellules horizontales"},
  "colonne": {title:"Colonne", fr:"Une colonne est un ensemble vertical de cellules, repéré par une lettre.", ar:"العمود هو مجموعة عمودية من الخلايا ويحدد بحرف.", short:"cellules verticales"},
  "cellule": {title:"Cellule", fr:"Une cellule est l’intersection d’une ligne et d’une colonne. C’est l’endroit où l’on saisit une donnée ou une formule.", ar:"الخلية هي تقاطع سطر وعمود، وفيها ندخل معطى أو صيغة.", short:"case du tableur"},
  "adresse": {title:"Adresse", fr:"L’adresse permet de repérer une cellule avec une lettre de colonne et un numéro de ligne, par exemple A4.", ar:"العنوان يحدد الخلية بحرف العمود ورقم السطر مثل A4.", short:"repère de cellule"},
  "titre clair": {title:"Titre clair", fr:"Un titre clair indique le sujet du tableau et aide le lecteur à comprendre les données.", ar:"العنوان الواضح يبين موضوع الجدول ويساعد القارئ على فهم المعطيات.", short:"sujet du tableau"},
  "bordures": {title:"Bordures", fr:"Les bordures séparent les cellules et rendent le tableau plus lisible.", ar:"الحدود تفصل بين الخلايا وتجعل الجدول أوضح.", short:"séparer les cellules"},
  "alignement": {title:"Alignement", fr:"L’alignement règle la position du contenu dans une cellule : gauche, centre ou droite.", ar:"المحاذاة تضبط موضع المحتوى داخل الخلية: يسار أو وسط أو يمين.", short:"position du contenu"},
  "format nombre": {title:"Format nombre", fr:"Le format nombre permet d’afficher correctement les valeurs : nombre, date, pourcentage ou monnaie.", ar:"تنسيق الرقم يسمح بعرض القيم بشكل صحيح: عدد أو تاريخ أو نسبة أو عملة.", short:"affichage des valeurs"},
  "couleurs sobres": {title:"Couleurs sobres", fr:"Les couleurs sobres servent à distinguer les titres sans rendre le tableau chargé.", ar:"الألوان الهادئة تساعد على تمييز العناوين دون جعل الجدول مزدحما.", short:"présentation lisible"},
  "formule": {title:"Formule", fr:"Une formule est un calcul écrit dans une cellule. Elle commence souvent par le signe égal (=).", ar:"الصيغة هي حساب يكتب داخل خلية وغالبا يبدأ بعلامة يساوي (=).", short:"calcul dans une cellule"},
  "fonction": {title:"Fonction", fr:"Une fonction est une formule prédéfinie qui simplifie les calculs fréquents comme SOMME, MIN, MAX ou MOYENNE.", ar:"الدالة صيغة جاهزة تسهل الحسابات المتكررة مثل SOMME وMIN وMAX وMOYENNE.", short:"formule prête à l’emploi"},
  "resultat": {title:"Résultat", fr:"Le résultat est la valeur obtenue après une saisie, un calcul ou un traitement.", ar:"النتيجة هي القيمة المحصل عليها بعد الإدخال أو الحساب أو المعالجة.", short:"valeur obtenue"},
  "graphique": {title:"Graphique", fr:"Un graphique représente les données sous forme visuelle pour faciliter la comparaison.", ar:"المبيان يمثل المعطيات بصريا لتسهيل المقارنة.", short:"représentation visuelle"},
  "titre du graphique": {title:"Titre du graphique", fr:"Le titre du graphique indique le sujet représenté pour éviter la confusion.", ar:"عنوان المبيان يبين الموضوع الممثل لتجنب الغموض.", short:"sujet du graphique"},
  "mise en page": {title:"Mise en page", fr:"La mise en page prépare le document pour l’impression : orientation, marges et organisation.", ar:"إعداد الصفحة يهيئ الوثيقة للطباعة: الاتجاه والهوامش والتنظيم.", short:"préparer l’impression"},
  "apercu": {title:"Aperçu", fr:"L’aperçu permet de vérifier le document avant de lancer l’impression.", ar:"المعاينة تسمح بفحص الوثيقة قبل بدء الطباعة.", short:"vérifier avant imprimer"},
  "programme": {title:"Programme", fr:"Un programme est une suite d’instructions données à l’ordinateur ou à la tortue pour réaliser une tâche.", ar:"البرنامج هو مجموعة تعليمات تعطى للحاسوب أو للسلحفاة لإنجاز مهمة.", short:"suite d’instructions"},
  "langage de programmation": {title:"Langage de programmation", fr:"Un langage de programmation sert à écrire des instructions compréhensibles par l’ordinateur.", ar:"لغة البرمجة تستعمل لكتابة تعليمات يفهمها الحاسوب.", short:"écrire des instructions"},
  "programmation logo": {title:"Programmation LOGO", fr:"LOGO est un environnement où l’on programme une tortue avec des commandes simples.", ar:"لوغو بيئة نبرمج فيها سلحفاة باستعمال أوامر بسيطة.", short:"commander la tortue"},
  "av": {title:"AV", fr:"AV fait avancer la tortue d’un nombre de pas indiqué.", ar:"AV تجعل السلحفاة تتقدم بعدد الخطوات المحدد.", short:"avancer la tortue"},
  "re": {title:"RE", fr:"RE fait reculer la tortue d’un nombre de pas indiqué.", ar:"RE تجعل السلحفاة تتراجع بعدد الخطوات المحدد.", short:"reculer la tortue"},
  "td": {title:"TD", fr:"TD fait tourner la tortue vers la droite avec un angle indiqué.", ar:"TD تجعل السلحفاة تدور نحو اليمين بزاوية محددة.", short:"tourner à droite"},
  "tg": {title:"TG", fr:"TG fait tourner la tortue vers la gauche avec un angle indiqué.", ar:"TG تجعل السلحفاة تدور نحو اليسار بزاوية محددة.", short:"tourner à gauche"},
  "repete": {title:"REPETE", fr:"REPETE permet de répéter plusieurs fois le même bloc d’instructions pour éviter d’écrire trop de lignes.", ar:"REPETE تسمح بتكرار نفس مجموعة التعليمات عدة مرات لتجنب كتابة أسطر كثيرة.", short:"répéter un bloc"},
  "bloc instructions": {title:"Bloc d’instructions", fr:"Un bloc d’instructions est un groupe de commandes placé entre crochets pour être exécuté ensemble.", ar:"مجموعة التعليمات هي أوامر توضع بين معقوفتين لتنفيذها معا.", short:"commandes entre crochets"},
  "carre": {title:"Carré", fr:"Un carré peut être dessiné en répétant quatre fois : avancer puis tourner de 90 degrés.", ar:"يمكن رسم مربع بتكرار أربع مرات: تقدم ثم دوران 90 درجة.", short:"figure à quatre côtés"},
  "programme court": {title:"Programme court", fr:"Un programme court utilise la répétition ou une procédure pour éviter les instructions inutiles.", ar:"البرنامج القصير يستعمل التكرار أو الإجراء لتجنب التعليمات غير الضرورية.", short:"moins d’instructions"},
  "nom de procedure": {title:"Nom de procédure", fr:"Le nom de procédure sert à identifier un groupe d’instructions que l’on pourra réutiliser.", ar:"اسم الإجراء يحدد مجموعة تعليمات يمكن إعادة استعمالها.", short:"identifier la procédure"},
  "instructions": {title:"Instructions", fr:"Les instructions décrivent les actions à exécuter, par exemple avancer ou tourner.", ar:"التعليمات تصف الأعمال التي يجب تنفيذها مثل التقدم أو الدوران.", short:"actions à exécuter"},
  "sauvegarde": {title:"Sauvegarde", fr:"La sauvegarde garde la procédure ou le travail pour pouvoir l’utiliser plus tard.", ar:"الحفظ يحتفظ بالإجراء أو العمل لاستعماله لاحقا.", short:"garder pour plus tard"},
  "appel": {title:"Appel", fr:"L’appel consiste à écrire le nom d’une procédure pour l’exécuter.", ar:"الاستدعاء يعني كتابة اسم الإجراء لتنفيذه.", short:"exécuter une procédure"}
};
function v106Normalize(txt){
  return String(txt||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’']/g,' ').replace(/[^a-z0-9=]+/g,' ').trim().replace(/\s+/g,' ');
}
function v106Canon(raw){
  const n = v106Normalize(raw);
  if(!n) return '';
  if(n.includes('av') && (n.includes('td') || n.includes('tg')) && String(raw).includes('[')) return 'bloc instructions';
  if(/^av(\s|\d|$)/.test(n)) return 'av';
  if(/^re(\s|\d|$)/.test(n)) return 're';
  if(/^td(\s|\d|$)/.test(n)) return 'td';
  if(/^tg(\s|\d|$)/.test(n)) return 'tg';
  if(n.includes('repete')) return 'repete';
  if(n.includes('systeme') && n.includes('exploitation')) return 'systeme d exploitation';
  if(n.includes('systeme') && n.includes('informatique')) return 'systeme informatique';
  if(n.includes('logiciels')) return 'logiciels';
  if(n.includes('donnees')) return 'donnees';
  if(n.includes('icones')) return 'icones';
  if(n.includes('fenetres')) return 'fenetres';
  if(n.includes('barre') && n.includes('taches')) return 'barre des taches';
  if(n.includes('titre') && n.includes('graphique')) return 'titre du graphique';
  if(n.includes('mise') && n.includes('page')) return 'mise en page';
  if(n.includes('format') && n.includes('nombre')) return 'format nombre';
  if(n.includes('couleur')) return 'couleurs sobres';
  if(n.includes('nom') && n.includes('procedure')) return 'nom de procedure';
  if(n.includes('bloc') || n.includes('crochet')) return 'bloc instructions';
  return n;
}
function v106Bank(raw){
  const key = v106Canon(raw);
  if(V106_TERM_BANK[key]) return {key, ...V106_TERM_BANK[key]};
  const nice = String(raw||'Notion').replace(/\s+/g,' ').trim();
  return {key, title:nice, fr:`${nice} est une notion importante de cette leçon. Elle doit être comprise à partir de l’objectif, de la carte mentale et des images du cours.`, ar:`${nice} مفهوم مهم في هذا الدرس، ويجب فهمه انطلاقا من الهدف والخريطة الذهنية والصور.`, short:'notion importante'};
}
function v106AddTerm(list, term){
  const raw = String(term||'').trim();
  if(!raw || raw.length < 2) return;
  const bank = v106Bank(raw);
  if(!bank.key) return;
  if(list.some(x => x.key === bank.key)) return;
  list.push(bank);
}
function v106LessonTerms(lesson){
  const out = [];
  const v = lesson && lesson.visual ? lesson.visual : {};
  if(v.center) v106AddTerm(out, v.center);
  (v.steps||[]).forEach(t=>v106AddTerm(out,t));
  (v.items||[]).forEach(t=>v106AddTerm(out,t));
  (v.rows||[]).forEach(r=>{ if(Array.isArray(r)) v106AddTerm(out,r[0]); });
  (lesson && lesson.drag || []).forEach(pair=>{ if(Array.isArray(pair)) v106AddTerm(out,pair[0]); });
  if(out.length < 3 && lesson && lesson.title) String(lesson.title).split(/,| et |\//).forEach(t=>v106AddTerm(out,t));
  return out.slice(0,5);
}
function v106ParentUnit(lesson){
  return (UNITS||[]).find(u => (u.lessons||[]).some(l => l === lesson || (lesson && l.title === lesson.title))) || currentUnit();
}
function v106StripCaption(txt){
  return String(txt||'').replace(/^\s*(Définition|Démonstration dans Excel)\s*:\s*/i,'').replace(/\s+/g,' ').trim();
}
function v106MediaHint(lesson, term){
  const medias = (typeof LESSON_MEDIA !== 'undefined' && lesson) ? (LESSON_MEDIA[lesson.title] || []) : [];
  if(!medias.length) return '';
  const n = v106Normalize(term.title);
  const found = medias.find(m => v106Normalize((m.title||'')+' '+(m.caption||'')+' '+(m.alt||'')).includes(n.split(' ')[0]||n)) || medias[0];
  let cap = v106StripCaption(found.caption || found.alt || found.title || '');
  if(cap.length > 190) cap = cap.slice(0, 190).replace(/\s+\S*$/, '') + '...';
  return cap ? `Lien avec l’image : ${cap}` : '';
}
function v106ChoiceList(answer, pool){
  const values = [answer];
  (pool||[]).forEach(p=>{ if(values.length<3 && p && v106Normalize(p)!==v106Normalize(answer) && !values.some(x=>v106Normalize(x)===v106Normalize(p))) values.push(p); });
  ['objectif','image','carte mentale','fichier','résultat'].forEach(p=>{ if(values.length<3 && !values.some(x=>v106Normalize(x)===v106Normalize(p))) values.push(p); });
  return values.slice(0,3);
}
function v106TermsToItems(lesson){
  if(!lesson) return [];
  const unit = v106ParentUnit(lesson);
  const terms = v106LessonTerms(lesson);
  const pool = terms.map(t=>t.title);
  return terms.map((term, index)=>{
    const mediaHint = v106MediaHint(lesson, term);
    const unitGoal = unit && unit.intro ? `Objectif de l’unité : ${unit.intro}` : '';
    const lessonGoal = lesson.objective ? `Objectif du sous-titre : ${lesson.objective}` : '';
    const visualTerms = pool.join(' • ');
    const fr = `${term.fr} ${lessonGoal} Cette notion apparaît dans la carte mentale ou le schéma avec : ${visualTerms}. ${mediaHint}`.replace(/\s+/g,' ').trim();
    const ar = `${term.ar} ترتبط هذه الفكرة بهدف الدرس وبالخريطة الذهنية والصور حتى يفهم التلميذ معناها بطريقة بسيطة.`;
    const dragTerms = terms.filter(t=>t.key!==term.key).slice(0,2);
    const drag = [[term.title, term.short || term.fr]].concat(dragTerms.map(t=>[t.title, t.short || t.fr]));
    return {
      title: term.title,
      fr,
      ar,
      keywords: [term.title].concat(pool.filter(x=>x!==term.title).slice(0,2)),
      question: `Que signifie : ${term.title} ?`,
      answer: term.title,
      fillSentence: `Dans cette leçon, la notion à retenir est : ____ .`,
      choices: v106ChoiceList(term.title, pool),
      drag: drag.length >= 2 ? drag : [[term.title, term.short || term.fr], ['Objectif', lesson.objective || 'But de la leçon']],
      index,
      unitGoal
    };
  });
}
const v106OldTopicsForLesson = v61TopicsForLesson;
v61TopicsForLesson = function(lesson){
  const items = v106TermsToItems(lesson);
  return items.length ? items : v106OldTopicsForLesson(lesson);
};

const v106OldAudioDetail = v61AudioDetail;
v61AudioDetail = function(it){
  const frText = `${it.title}. ${it.fr}`;
  const arText = `${it.title}. ${it.ar}`;
  return `<article class="v61-detail-card v61-audio-detail v106-audio-detail">
    <div class="v61-detail-head"><span>Notion importante du cours</span><h4>${v60Html(it.title)}</h4></div>
    <div class="v106-objective-note">Cette explication est liée à l’objectif, à la carte mentale et aux images du cours.</div>
    <div class="v61-two-cols">
      <div class="v61-lang-box"><h5>Explication en français</h5><p>${v60Html(it.fr)}</p></div>
      <div class="v61-lang-box ar"><h5>الشرح بالعربية</h5><p>${v60Html(it.ar)}</p></div>
    </div>
    <div class="audio-row v61-audio-actions"><button class="btn small" data-speak="fr" data-text="${v60Attr(frText)}">▶ Écouter FR</button><button class="btn green small" data-speak="ar" data-text="${v60Attr(arText)}">▶ استمع AR</button><button class="btn ghost small stop-audio-btn" data-action="stop-speech">■ Arrêter</button></div>
  </article>`;
};

audioPanel = function(lesson){
  if(!lesson) return '';
  const unit = v106ParentUnit(lesson);
  const items = v61TopicsForLesson(lesson);
  return `<section class="panel audio-card v61-panel v61-audio-panel v106-audio-panel">
    <div class="style-header"><div><span class="mini-pill">Style auditif</span><h3>Notions à écouter — ${v60Html(lesson.title)}</h3></div><p class="subtle">Les notions sont choisies à partir de l’objectif de l’unité, de la carte mentale et des images du cours.</p></div>
    <div class="v106-goal-box"><strong>Objectif de l’unité :</strong> ${v60Html(unit && unit.intro ? unit.intro : 'Comprendre les notions essentielles de l’unité.')}</div>
    ${v61TopicButtons(items,'audio')}
    <div id="voiceWarning" class="voice-warning">La voix arabe n’est pas disponible dans ce navigateur. Essayez Chrome/Edge ou installez une voix arabe.</div>
    <div class="v61-selected-content" data-v61-audio-content><div class="v61-empty-state">Choisir une notion pour afficher son explication.</div></div>
  </section>`;
};

kinePanel = function(lesson){
  if(!lesson) return '';
  const unit = v106ParentUnit(lesson);
  const items = v61TopicsForLesson(lesson);
  return `<section class="panel kine-panel v61-panel v61-kine-panel v106-kine-panel">
    <div class="style-header clean-style-header"><div><span class="mini-pill">Style kinesthésique</span><h3>Activités sur les notions importantes — ${v60Html(lesson.title)}</h3></div><p class="subtle">Chaque activité reprend les mots essentiels de la carte mentale, des images et de l’objectif de la leçon.</p></div>
    <div class="v106-goal-box"><strong>Objectif de l’unité :</strong> ${v60Html(unit && unit.intro ? unit.intro : 'Manipuler les notions essentielles de l’unité.')}</div>
    ${v61TopicButtons(items,'kine')}
    <div class="v61-selected-content" data-v61-kine-content><div class="v61-empty-state">Choisir une notion pour afficher ses deux activités.</div></div>
  </section>`;
};

renderHome = function(){
  const cards = UNITS.map((u, index)=>`
    <button class="v91-unit-card v91-unit-${index % 4}" data-unit="${esc(u.id)}">
      <span>Unité ${index + 1}</span>
      <h3>${esc(u.title.replace(/^Unité\s*\d+\s*:\s*/i,''))}</h3>
      <strong>Ouvrir</strong>
    </button>
  `).join('');
  $('#app').innerHTML = appShell(`
    <section class="v91-home-page v93-home-paint v94-home-paint v95-home-paint v99-home-paint v106-home-compact">
      <section class="v99-home-hero v106-home-hero">
        <div class="v91-home-title v95-home-title v99-home-title v106-home-title">
          <span>Espace élève</span>
          <h1>Choisir une unité</h1>
        </div>
        <div class="v99-home-image-card v106-home-image-card"><img src="assets/home-hero-v99.png" alt="Enseignante accompagnant des élèves devant des ordinateurs"></div>
      </section>
      <section class="v91-home-units v99-home-units v106-home-units">${cards}</section>
    </section>`);
};


/* =========================================================
   V107 — Amélioration des questions kinesthésiques + image d’accueil en arrière-plan
   - Structure conservée : activité de choix + activité glisser/déposer.
   - Questions plus pertinentes : elles partent d’une situation concrète liée au cours.
========================================================= */
const V107_KINE_SCENARIOS = {
  "systeme informatique": {prompt:"Dans la salle informatique, l’élève observe un utilisateur, le matériel et les logiciels qui travaillent ensemble pour traiter une information. Quelle notion regroupe ces éléments ? ____", choices:["Système informatique","Matériel","Logiciels"], dragDef:"Ensemble organisé : utilisateur + matériel + logiciels pour traiter l’information."},
  "utilisateur": {prompt:"Pendant l’activité, une personne saisit les données, choisit les commandes et lit le résultat affiché. Quel élément du système représente cette personne ? ____", choices:["Utilisateur","Logiciels","Sortie"], dragDef:"Personne qui donne les actions au poste et exploite les résultats."},
  "materiel": {prompt:"Sur l’image, l’élève montre l’écran, le clavier, la souris et l’unité centrale parce qu’on peut les toucher. Quelle notion doit-il choisir ? ____", choices:["Matériel","Logiciels","Information"], dragDef:"Parties physiques de l’ordinateur que l’on peut voir ou toucher."},
  "logiciel": {prompt:"L’élève veut écrire un texte ou faire un calcul : il ouvre un programme avant de travailler. Quelle notion correspond à ce programme ? ____", choices:["Logiciels","Matériel","Donnée"], dragDef:"Programme utilisé pour réaliser une tâche précise."},
  "logiciels": {prompt:"L’élève veut écrire un texte ou faire un calcul : il ouvre un programme avant de travailler. Quelle notion correspond à ce programme ? ____", choices:["Logiciels","Matériel","Donnée"], dragDef:"Programmes utilisés pour réaliser des tâches : écrire, calculer ou naviguer."},
  "information": {prompt:"Après le traitement, l’ordinateur affiche un contenu utile que l’élève peut lire, imprimer ou sauvegarder. Quelle notion décrit ce contenu ? ____", choices:["Information","Clavier","Fenêtre"], dragDef:"Contenu utile que l’ordinateur reçoit, traite, affiche ou stocke."},
  "unite centrale": {prompt:"Dans l’image du poste informatique, quel élément contient les composants principaux qui assurent le traitement ? ____", choices:["Unité centrale","Écran","Imprimante"], dragDef:"Boîtier principal contenant les éléments essentiels du traitement."},
  "ecran": {prompt:"L’élève lance un calcul et le résultat apparaît devant lui. Quel composant lui permet de voir ce résultat ? ____", choices:["Écran","Clavier","Souris"], dragDef:"Composant qui affiche les textes, images, fenêtres et résultats."},
  "clavier": {prompt:"Pour écrire le nom d’un élève dans un tableau, quel composant l’élève doit-il utiliser ? ____", choices:["Clavier","Écran","Imprimante"], dragDef:"Composant qui permet de saisir du texte, des nombres et des commandes."},
  "souris": {prompt:"L’élève veut sélectionner une icône puis cliquer dessus pour ouvrir un programme. Quel composant utilise-t-il ? ____", choices:["Souris","Mémoire","Imprimante"], dragDef:"Composant qui permet de pointer, sélectionner, cliquer et déplacer."},
  "imprimante": {prompt:"Le professeur veut transformer le document numérique en feuille papier. Quel périphérique faut-il utiliser ? ____", choices:["Imprimante","Clavier","Souris"], dragDef:"Périphérique qui produit un document papier à partir d’un fichier numérique."},
  "memoire": {prompt:"L’ordinateur garde temporairement ou durablement des données pour travailler plus vite. Quelle notion est concernée ? ____", choices:["Mémoire","Écran","Souris"], dragDef:"Élément qui conserve des données pour aider le fonctionnement de l’ordinateur."},
  "peripherique": {prompt:"L’élève observe un scanner, une imprimante et une clé USB reliés à l’ordinateur. Quelle notion commune permet de les classer ? ____", choices:["Périphérique","Fenêtre","Formule"], dragDef:"Élément relié à l’ordinateur pour entrer, sortir ou stocker des données."},
  "entree": {prompt:"On utilise le clavier ou le scanner pour introduire des données dans l’ordinateur. Quelle étape du traitement est réalisée ? ____", choices:["Entrée","Sortie","Stockage"], dragDef:"Étape où les données sont introduites dans l’ordinateur."},
  "traitement": {prompt:"L’ordinateur transforme les notes saisies pour calculer une moyenne. Quelle étape correspond à cette transformation ? ____", choices:["Traitement","Entrée","Sortie"], dragDef:"Transformation des données pour obtenir un résultat utile."},
  "sortie": {prompt:"Après le calcul, le résultat est affiché sur l’écran ou imprimé sur papier. Quelle étape décrit cette présentation ? ____", choices:["Sortie","Entrée","Stockage"], dragDef:"Étape qui présente le résultat à l’utilisateur."},
  "stockage": {prompt:"L’élève enregistre son fichier sur une clé USB pour le garder et le réutiliser. Quelle fonction est utilisée ? ____", choices:["Stockage","Sortie","Traitement"], dragDef:"Conservation des fichiers et données pour les réutiliser plus tard."},
  "donnee": {prompt:"Dans un tableau, l’élève saisit une note, un nom ou une date avant le calcul. Quelle notion représente ce contenu de départ ? ____", choices:["Donnée","Graphique","Bordure"], dragDef:"Information saisie ou utilisée par l’ordinateur."},
  "donnees": {prompt:"Dans un tableau de notes, les noms et les notes sont les éléments de départ utilisés pour produire un résultat. Quelle notion faut-il choisir ? ____", choices:["Données","Formule","Aperçu"], dragDef:"Informations de départ utilisées pour produire un résultat."},

  "classeur": {prompt:"Tu démarres un travail dans le tableur : le fichier peut contenir plusieurs feuilles de calcul. Comment appelle-t-on ce fichier ? ____", choices:["Classeur","Cellule","Colonne"], dragDef:"Fichier principal du tableur qui peut contenir plusieurs feuilles."},
  "feuille": {prompt:"Dans un classeur, l’élève clique sur un onglet en bas pour travailler sur une nouvelle page de calcul. Quelle notion correspond à cette page ? ____", choices:["Feuille","Classeur","Adresse"], dragDef:"Page de calcul composée de lignes, colonnes et cellules."},
  "ligne": {prompt:"L’élève lit le numéro 5 à gauche du tableur pour repérer une zone horizontale. Quelle notion observe-t-il ? ____", choices:["Ligne","Colonne","Cellule"], dragDef:"Ensemble horizontal de cellules repéré par un numéro."},
  "colonne": {prompt:"L’élève lit la lettre C en haut du tableur pour repérer une zone verticale. Quelle notion observe-t-il ? ____", choices:["Colonne","Ligne","Feuille"], dragDef:"Ensemble vertical de cellules repéré par une lettre."},
  "cellule": {prompt:"Dans Excel, l’élève clique sur la case située au croisement de la colonne B et de la ligne 3. Quelle notion sélectionne-t-il ? ____", choices:["Cellule","Feuille","Classeur"], dragDef:"Case formée par l’intersection d’une ligne et d’une colonne."},
  "adresse": {prompt:"Pour retrouver rapidement la case B3, l’élève utilise la lettre de colonne et le numéro de ligne. Quelle notion utilise-t-il ? ____", choices:["Adresse","Bordure","Graphique"], dragDef:"Repère d’une cellule formé d’une lettre de colonne et d’un numéro de ligne."},
  "titre clair": {prompt:"Après avoir créé un tableau de notes, l’élève ajoute en haut un texte qui indique le sujet du tableau. Quelle notion améliore la compréhension ? ____", choices:["Titre clair","Format nombre","Alignement"], dragDef:"Texte qui indique clairement le sujet du tableau."},
  "bordures": {prompt:"Les cellules du tableau sont difficiles à distinguer. L’élève ajoute des traits autour des cellules. Quelle mise en forme utilise-t-il ? ____", choices:["Bordures","Fonction","Aperçu"], dragDef:"Traits qui séparent les cellules et rendent le tableau lisible."},
  "alignement": {prompt:"Le texte d’un en-tête doit être placé au centre de la cellule pour être plus lisible. Quel réglage utilise-t-on ? ____", choices:["Alignement","Adresse","Stockage"], dragDef:"Réglage de la position du contenu dans une cellule."},
  "format nombre": {prompt:"Dans le tableau, une valeur doit apparaître comme date, monnaie ou pourcentage. Quelle option règle cet affichage ? ____", choices:["Format nombre","Titre clair","Graphique"], dragDef:"Option qui affiche correctement les nombres, dates, pourcentages ou monnaies."},
  "couleurs sobres": {prompt:"L’élève veut mettre en valeur les en-têtes sans rendre le tableau chargé. Quel choix de présentation est le plus adapté ? ____", choices:["Couleurs sobres","Fenêtres","REPETE"], dragDef:"Couleurs simples qui distinguent les titres sans surcharger le tableau."},
  "formule": {prompt:"Dans une cellule, l’élève écrit =B2+C2 pour obtenir un calcul automatique. Quelle notion utilise-t-il ? ____", choices:["Formule","Fonction","Titre clair"], dragDef:"Calcul écrit dans une cellule, souvent avec le signe égal."},
  "fonction": {prompt:"Pour additionner rapidement une plage de valeurs, l’élève utilise SOMME au lieu d’écrire tout le calcul. Quelle notion utilise-t-il ? ____", choices:["Fonction","Formule","Adresse"], dragDef:"Formule prédéfinie qui simplifie les calculs fréquents."},
  "resultat": {prompt:"Après la validation de la formule, une valeur apparaît dans la cellule. Quelle notion correspond à cette valeur obtenue ? ____", choices:["Résultat","Donnée","Bordure"], dragDef:"Valeur obtenue après une saisie, un calcul ou un traitement."},
  "graphique": {prompt:"Le tableau contient beaucoup de nombres ; l’élève veut comparer les valeurs avec des barres ou une courbe. Quel outil doit-il créer ? ____", choices:["Graphique","Adresse","Classeur"], dragDef:"Représentation visuelle des données pour faciliter la comparaison."},
  "titre du graphique": {prompt:"Un graphique est créé, mais on ne sait pas ce qu’il représente. Quel élément faut-il ajouter pour préciser le sujet ? ____", choices:["Titre du graphique","Format nombre","Corbeille"], dragDef:"Élément qui indique clairement le sujet représenté par le graphique."},
  "mise en page": {prompt:"Avant d’imprimer, l’élève règle les marges, l’orientation et la taille de la feuille. Quelle étape réalise-t-il ? ____", choices:["Mise en page","Fonction","Cellule"], dragDef:"Préparation du document pour une impression correcte."},
  "apercu": {prompt:"Avant de lancer l’impression, l’élève vérifie à l’écran si le tableau tient bien sur la page. Quel outil utilise-t-il ? ____", choices:["Aperçu","Bordures","Adresse"], dragDef:"Vérification du document avant l’impression."},

  "systeme d exploitation": {prompt:"Après l’allumage, un logiciel principal permet d’ouvrir la session, gérer les fichiers et utiliser le matériel. Quelle notion est visée ? ____", choices:["Système d’exploitation","Classeur","Graphique"], dragDef:"Logiciel principal qui fait fonctionner l’ordinateur et relie utilisateur, logiciels et matériel."},
  "bureau": {prompt:"Après l’ouverture de la session, l’élève arrive sur un espace avec des icônes et une barre des tâches. Quelle notion observe-t-il ? ____", choices:["Bureau","Dossier","Corbeille"], dragDef:"Espace de travail affiché après l’ouverture de la session."},
  "icone": {prompt:"L’élève voit un petit symbole qui représente un programme ou un fichier et clique dessus pour l’ouvrir. Quelle notion est-ce ? ____", choices:["Icône","Fenêtre","Menu"], dragDef:"Petit symbole représentant un programme, fichier, dossier ou raccourci."},
  "icones": {prompt:"Sur le bureau, l’élève reconnaît de petits symboles permettant d’ouvrir rapidement des fichiers ou programmes. Quelle notion les regroupe ? ____", choices:["Icônes","Fenêtres","Paramètres"], dragDef:"Symboles qui donnent un accès rapide aux programmes, fichiers ou dossiers."},
  "fenetre": {prompt:"Un programme s’ouvre dans une zone que l’élève peut réduire, agrandir, déplacer ou fermer. Quelle notion correspond à cette zone ? ____", choices:["Fenêtre","Bureau","Corbeille"], dragDef:"Zone qui affiche le contenu d’un programme et que l’on peut manipuler."},
  "fenetres": {prompt:"Plusieurs programmes sont ouverts dans des zones que l’élève peut déplacer, réduire ou fermer. Quelle notion les désigne ? ____", choices:["Fenêtres","Icônes","Données"], dragDef:"Zones qui affichent le contenu des programmes ouverts."},
  "barre des taches": {prompt:"L’élève veut retrouver rapidement les programmes ouverts en bas de l’écran. Quel élément doit-il regarder ? ____", choices:["Barre des tâches","Menu","Adresse"], dragDef:"Zone qui aide à retrouver les programmes ouverts et les outils importants."},
  "menu": {prompt:"Pour choisir une commande parmi plusieurs options, l’élève ouvre une liste organisée. Quelle notion décrit cette liste ? ____", choices:["Menu","Cellule","Mémoire"], dragDef:"Liste de commandes ou de choix proposés à l’utilisateur."},
  "corbeille": {prompt:"L’élève supprime un fichier par erreur et veut vérifier l’endroit où les éléments supprimés sont gardés. Où doit-il regarder ? ____", choices:["Corbeille","Bureau","Barre des tâches"], dragDef:"Emplacement qui reçoit les fichiers supprimés et permet parfois de les récupérer."},
  "fichier": {prompt:"L’élève enregistre une image, un texte ou un tableau sous un nom précis. Quelle notion représente ce document numérique ? ____", choices:["Fichier","Dossier","Bureau"], dragDef:"Document numérique : texte, image, son, vidéo ou tableau."},
  "dossier": {prompt:"Pour ne pas mélanger les documents, l’élève crée un espace nommé “Cours” pour ranger ses fichiers. Quelle notion utilise-t-il ? ____", choices:["Dossier","Fichier","Fenêtre"], dragDef:"Espace qui sert à ranger des fichiers pour les retrouver facilement."},
  "creer": {prompt:"L’élève commence un nouveau dossier ou un nouveau classeur qui n’existait pas avant. Quelle action réalise-t-il ? ____", choices:["Créer","Renommer","Retrouver"], dragDef:"Produire un nouvel élément : fichier, dossier, classeur ou feuille."},
  "nommer": {prompt:"Pour retrouver son travail facilement, l’élève donne au fichier un nom clair comme Notes_Classe. Quelle action fait-il ? ____", choices:["Nommer","Arrêter","Supprimer"], dragDef:"Donner un nom clair pour identifier rapidement un élément."},
  "enregistrer": {prompt:"Après avoir terminé son tableau, l’élève veut éviter de perdre le travail. Quelle action doit-il faire avant de fermer ? ____", choices:["Enregistrer","Supprimer","Agrandir"], dragDef:"Garder le travail dans un fichier pour ne pas le perdre."},
  "retrouver": {prompt:"Le fichier existe déjà, mais l’élève doit le localiser dans son dossier pour l’ouvrir. Quelle action correspond à cette situation ? ____", choices:["Retrouver","Créer","Effacer"], dragDef:"Localiser un fichier grâce à son nom et à son emplacement."},
  "classer": {prompt:"L’élève met les images dans un dossier Images et les documents dans un dossier Cours. Quelle action organise son travail ? ____", choices:["Classer","Éteindre","Imprimer"], dragDef:"Ranger les fichiers dans des dossiers adaptés avec des noms clairs."},
  "renommer": {prompt:"Le nom “Nouveau document” n’est pas clair ; l’élève le remplace par “Exercice_Tableur”. Quelle action réalise-t-il ? ____", choices:["Renommer","Créer","Stocker"], dragDef:"Changer le nom d’un fichier ou d’un dossier pour mieux l’identifier."},
  "regler": {prompt:"L’élève change la langue, la date ou l’affichage selon le besoin. Quelle action fait-il ? ____", choices:["Régler","Supprimer","Copier"], dragDef:"Modifier un paramètre simple comme la langue, la date ou l’affichage."},
  "proteger": {prompt:"L’élève garde son mot de passe secret et verrouille sa session. Quelle action de sécurité réalise-t-il ? ____", choices:["Protéger","Renommer","Aligner"], dragDef:"Garder la session, les fichiers et le mot de passe en sécurité."},
  "sauvegarder": {prompt:"Pour éviter la perte des données, l’élève garde une copie de son travail dans un endroit sûr. Quelle action fait-il ? ____", choices:["Sauvegarder","Déplacer","Aperçu"], dragDef:"Conserver une copie ou enregistrer le travail pour éviter la perte."},
  "sauvegarde": {prompt:"La procédure LOGO ou le fichier est gardé pour être réutilisé plus tard. Quelle notion correspond à cette conservation ? ____", choices:["Sauvegarde","Appel","TD"], dragDef:"Action qui conserve le travail ou la procédure pour une utilisation future."},
  "arreter": {prompt:"Avant de quitter la salle, l’élève enregistre, ferme les programmes puis éteint le poste correctement. Quelle action termine l’utilisation ? ____", choices:["Arrêter","Créer","Copier"], dragDef:"Éteindre correctement après avoir enregistré et fermé les programmes."},
  "parametres": {prompt:"L’élève doit modifier la langue, la date ou l’affichage du système. Où doit-il aller ? ____", choices:["Paramètres","Corbeille","Graphique"], dragDef:"Réglages qui permettent d’adapter le système selon le besoin."},
  "securite": {prompt:"Un élève veut protéger sa session et éviter que quelqu’un utilise son compte. Quelle notion doit-il respecter ? ____", choices:["Sécurité","Mise en page","Format nombre"], dragDef:"Protection de la session, des fichiers et du mot de passe."},

  "programme": {prompt:"Dans LOGO, l’élève écrit plusieurs instructions pour faire avancer et tourner la tortue afin de dessiner une figure. Quelle notion décrit cette suite ? ____", choices:["Programme","Cellule","Dossier"], dragDef:"Suite d’instructions qui permet de réaliser une tâche."},
  "langage de programmation": {prompt:"Pour communiquer avec la tortue, l’élève écrit des commandes compréhensibles par LOGO. Quelle notion permet d’écrire ces commandes ? ____", choices:["Langage de programmation","Mise en page","Barre des tâches"], dragDef:"Langage utilisé pour écrire des instructions compréhensibles par l’ordinateur."},
  "programmation logo": {prompt:"L’élève commande une tortue avec AV, RE, TD et TG pour dessiner. Quel environnement ou thème travaille-t-il ? ____", choices:["Programmation LOGO","Système d’exploitation","Tableur"], dragDef:"Environnement où l’on programme une tortue avec des commandes simples."},
  "av": {prompt:"La tortue doit se déplacer vers l’avant de 50 pas. Quelle commande faut-il écrire ? ____", choices:["AV","RE","TD"], dragDef:"Commande qui fait avancer la tortue d’un nombre de pas indiqué."},
  "re": {prompt:"La tortue doit revenir en arrière de 30 pas sans changer de direction. Quelle commande faut-il écrire ? ____", choices:["RE","AV","TG"], dragDef:"Commande qui fait reculer la tortue d’un nombre de pas indiqué."},
  "td": {prompt:"Après avoir avancé, la tortue doit tourner vers la droite avec un angle précis. Quelle commande faut-il utiliser ? ____", choices:["TD","TG","AV"], dragDef:"Commande qui fait tourner la tortue vers la droite avec un angle indiqué."},
  "tg": {prompt:"La tortue doit changer de direction vers la gauche avant de continuer le dessin. Quelle commande faut-il utiliser ? ____", choices:["TG","TD","RE"], dragDef:"Commande qui fait tourner la tortue vers la gauche avec un angle indiqué."},
  "repete": {prompt:"Pour dessiner un carré, l’élève évite d’écrire quatre fois les mêmes commandes. Quelle instruction permet de recommencer le même bloc ? ____", choices:["REPETE","AV","Appel"], dragDef:"Instruction qui répète plusieurs fois le même bloc de commandes."},
  "bloc instructions": {prompt:"Dans REPETE 4 [AV 50 TD 90], les commandes placées entre crochets doivent s’exécuter ensemble. Comment appelle-t-on ce groupe ? ____", choices:["Bloc d’instructions","Adresse","Bordure"], dragDef:"Groupe de commandes placé entre crochets et exécuté ensemble."},
  "carre": {prompt:"La tortue répète quatre fois : avancer puis tourner de 90°. Quelle figure peut-elle obtenir ? ____", choices:["Carré","Graphique","Fenêtre"], dragDef:"Figure à quatre côtés que l’on peut tracer avec quatre répétitions de AV et TD 90."},
  "programme court": {prompt:"L’élève remplace plusieurs lignes répétées par REPETE ou par une procédure. Quel type de programme obtient-il ? ____", choices:["Programme court","Programme long","Format nombre"], dragDef:"Programme qui évite les instructions inutiles grâce à la répétition ou aux procédures."},
  "nom de procedure": {prompt:"Pour réutiliser un dessin, l’élève donne un nom au groupe d’instructions. Quelle notion identifie ce groupe ? ____", choices:["Nom de procédure","Adresse","Cellule"], dragDef:"Nom qui identifie une procédure afin de pouvoir la réutiliser."},
  "instructions": {prompt:"Dans LOGO, AV 50 et TD 90 sont des actions écrites pour guider la tortue. Quelle notion les désigne ? ____", choices:["Instructions","Données","Paramètres"], dragDef:"Actions écrites que la tortue ou l’ordinateur doit exécuter."},
  "appel": {prompt:"Après avoir créé une procédure nommée CARRE, l’élève écrit CARRE pour lancer le dessin. Quelle action réalise-t-il ? ____", choices:["Appel","Sauvegarde","Alignement"], dragDef:"Écriture du nom d’une procédure pour l’exécuter."}
};

function v107CleanText(txt, max){
  let s = String(txt||'').replace(/\s+/g,' ').trim();
  if(max && s.length > max) s = s.slice(0,max).replace(/\s+\S*$/,'') + '...';
  return s;
}
function v107ScenarioForTitle(title){
  const key = (typeof v106Canon === 'function') ? v106Canon(title) : v106Normalize(title);
  return V107_KINE_SCENARIOS[key] || null;
}
function v107MakeChoices(answer, proposed, allItems){
  const values = [];
  const add = (v)=>{ v = String(v||'').trim(); if(v && !values.some(x => v106Normalize(x) === v106Normalize(v))) values.push(v); };
  add(answer);
  (proposed||[]).forEach(add);
  (allItems||[]).forEach(x => add(x.title));
  ['Donnée','Formule','Fonction','Fichier','Dossier','Entrée','Sortie','Stockage','AV','TD'].forEach(add);
  return values.slice(0,3);
}
function v107DragDefFor(item){
  const scenario = v107ScenarioForTitle(item && item.title);
  if(scenario && scenario.dragDef) return scenario.dragDef;
  return v107CleanText((item && (item.short || item.fr)) || 'Notion importante à manipuler dans cette leçon.', 130);
}
function v107KinePrompt(item, lesson){
  const scenario = v107ScenarioForTitle(item && item.title);
  if(scenario && scenario.prompt) return scenario.prompt;
  const obj = lesson && lesson.objective ? lesson.objective : 'comprendre la notion étudiée';
  const info = v107CleanText(item && item.fr, 150);
  return `Objectif : ${obj}. En observant la carte mentale et les images, quelle notion correspond à cette idée : ${info} ? ____`;
}
const v107PreviousTopicsForLesson = v61TopicsForLesson;
v61TopicsForLesson = function(lesson){
  const items = (v107PreviousTopicsForLesson(lesson)||[]).map(x => Object.assign({}, x));
  return items.map((it, index)=>{
    const scenario = v107ScenarioForTitle(it.title) || {};
    const answer = it.title;
    const related = [it].concat(items.filter(x => v106Normalize(x.title) !== v106Normalize(it.title)).slice(0,2));
    return Object.assign({}, it, {
      index,
      question: v107KinePrompt(it, lesson),
      fillSentence: v107KinePrompt(it, lesson),
      answer,
      choices: v107MakeChoices(answer, scenario.choices || it.choices, items),
      drag: related.map(x => [x.title, v107DragDefFor(x)]).slice(0,3)
    });
  });
};

const v107PreviousKinePanel = kinePanel;
kinePanel = function(lesson){
  if(!lesson) return '';
  const unit = v106ParentUnit(lesson);
  const items = v61TopicsForLesson(lesson);
  return `<section class="panel kine-panel v61-panel v61-kine-panel v106-kine-panel v107-kine-panel">
    <div class="style-header clean-style-header"><div><span class="mini-pill">Style kinesthésique</span><h3>Activités sur les notions importantes — ${v60Html(lesson.title)}</h3></div><p class="subtle">Les questions sont des situations d’action : l’élève observe, choisit, associe et justifie la notion liée aux images et à la carte mentale.</p></div>
    <div class="v106-goal-box"><strong>Objectif de l’unité :</strong> ${v60Html(unit && unit.intro ? unit.intro : 'Manipuler les notions essentielles de l’unité.')}</div>
    ${v61TopicButtons(items,'kine')}
    <div class="v61-selected-content" data-v61-kine-content><div class="v61-empty-state">Choisir une notion pour afficher ses deux activités.</div></div>
  </section>`;
};

renderHome = function(){
  const cards = UNITS.map((u, index)=>`
    <button class="v91-unit-card v91-unit-${index % 4}" data-unit="${esc(u.id)}">
      <span>Unité ${index + 1}</span>
      <h3>${esc(u.title.replace(/^Unité\s*\d+\s*:\s*/i,''))}</h3>
      <strong>Ouvrir</strong>
    </button>
  `).join('');
  $('#app').innerHTML = appShell(`
    <section class="v91-home-page v93-home-paint v94-home-paint v95-home-paint v99-home-paint v106-home-compact v107-home-bg">
      <section class="v99-home-hero v106-home-hero v107-home-hero">
        <div class="v91-home-title v95-home-title v99-home-title v106-home-title v107-home-title">
          <span>Espace élève</span>
          <h1>Choisir une unité</h1>
        </div>
      </section>
      <section class="v91-home-units v99-home-units v106-home-units v107-home-units">${cards}</section>
    </section>`);
};

})();


/* =========================================================
   V114 — Redéveloppement final selon les dernières consignes
   - 4 unités dans l'ordre demandé avec bordures fixes par matière
   - authentification uniquement pour les élèves inscrits
   - accès enseignant masqué dans l'espace élève
   - accueil : image uniquement comme arrière-plan
========================================================= */
(function(){
  const FINAL_UNIT_ORDER = ['u1_systeme','u2_os','u3_tableur','u4_logo'];
  const FINAL_UNIT_META = {
    u1_systeme: {title:'Unité 1 : Système informatique', short:'Matériel, logiciels, périphériques et traitement de l’information', border:'blue'},
    u2_os: {title:'Unité 2 : Système d’exploitation', short:'Bureau, fenêtres, fichiers, dossiers et paramètres', border:'orange', color:'orange'},
    u3_tableur: {title:'Unité 3 : Tableur', short:'Feuilles, cellules, adresses, formules et graphiques', border:'green', color:'green'},
    u4_logo: {title:'Unité 4 : Programmation LOGO', short:'Instructions, répétition, procédures et tortue LOGO', border:'red', color:'red'}
  };

  function finalNormalizeName(value){
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^A-Za-z0-9]+/g, ' ')
      .trim()
      .toUpperCase()
      .replace(/\s+/g, ' ');
  }
  window.finalNormalizeName = finalNormalizeName;

  // Correction de l'ordre et des titres des unités.
  if(Array.isArray(UNITS)){
    const byId = new Map();
    UNITS.forEach(u => { if(u && u.id && !byId.has(u.id)) byId.set(u.id, u); });
    const ordered = FINAL_UNIT_ORDER.map(id => byId.get(id)).filter(Boolean);
    UNITS.length = 0;
    ordered.forEach((u, i) => {
      Object.assign(u, FINAL_UNIT_META[u.id] || {});
      u.finalIndex = i + 1;
      UNITS.push(u);
    });
  }

  // L'authentification ne dépend plus des noms ajoutés automatiquement dans localStorage.
  // Seule la liste intégrée ou une liste externe window.AUTHORIZED_STUDENTS est acceptée.
  getAuthorizedStudents = function(){
    const externalList = (typeof window !== 'undefined' && Array.isArray(window.AUTHORIZED_STUDENTS)) ? window.AUTHORIZED_STUDENTS : [];
    const fallbackList = (typeof AUTHORIZED_STUDENTS_FALLBACK !== 'undefined' && Array.isArray(AUTHORIZED_STUDENTS_FALLBACK)) ? AUTHORIZED_STUDENTS_FALLBACK : [];
    const seen = new Set();
    return [...externalList, ...fallbackList].filter(st => {
      const key = finalNormalizeName(st.fullName || `${st.nom||''} ${st.prenom||''}`);
      if(!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };
  isAuthorizedFullName = function(fullName){
    const key = finalNormalizeName(fullName);
    if(!key) return false;
    return getAuthorizedStudents().some(st => studentNamesForMatch(st).includes(key));
  };
  isAuthorizedStudent = function(nom, prenom){
    const entered = [
      finalNormalizeName(`${nom||''} ${prenom||''}`),
      finalNormalizeName(`${prenom||''} ${nom||''}`)
    ].filter(Boolean);
    if(!entered.length) return false;
    return getAuthorizedStudents().some(st => {
      const possible = studentNamesForMatch(st);
      return entered.some(x => possible.includes(x));
    });
  };
  showAccessDenied = function(){ alert('Authentification incorrecte.'); };

  appShell = function(content){
    const st = getStudent();
    return `<div class="app-shell v114-shell v119-shell"><header class="topbar v114-topbar v119-topbar"><div class="brand no-edu-icon"><div><h1>ÉPI</h1><p>Apprentissage interactif</p></div></div><div class="nav-actions">${st?`<span class="pill">${esc(st.prenom)} ${esc(st.nom)}</span><button class="btn ghost small" data-action="home">Accueil</button><button class="btn secondary small" data-action="logout">Déconnexion</button>`:''}</div></header>${content}</div>`;
  };

  renderLogin = function(){
    localStorage.removeItem(STORAGE_KEY);
    $('#app').innerHTML = `
      <main class="v114-auth-page v118-auth-page v119-auth-page" aria-label="Page d’authentification">
        <section class="v118-auth-card v119-auth-card">
          <header class="v118-auth-head v119-auth-head">
            <h1>ÉPI</h1>
            <p>Connexion</p>
          </header>

          <form id="loginForm" class="v118-login-form v119-login-form" autocomplete="off">
            <div class="v118-field v119-field">
              <label for="loginNom">Nom</label>
              <input name="nom" id="loginNom" type="text" placeholder="Nom" required>
            </div>

            <div class="v118-field v119-field">
              <label for="loginPrenom">Prénom</label>
              <input name="prenom" id="loginPrenom" type="text" placeholder="Prénom" required>
            </div>

            <p id="loginError" class="v118-login-error v119-login-error" aria-live="polite"></p>
            <button type="submit" class="v118-submit-btn v119-submit-btn">Entrer</button>
          </form>

          <div class="v118-auth-separator v119-auth-separator"></div>

          <section class="v118-teacher-auth-box v119-teacher-auth-box" aria-label="Espace professeur">
            <span>Espace professeur</span>
            <button type="button" class="v118-teacher-auth-btn v119-teacher-auth-btn" data-action="teacher">Ouvrir</button>
          </section>

          <section class="v119-about-auth">
            <strong>À propos</strong>
            <p>Application pédagogique destinée à l’apprentissage des notions essentielles d’informatique.</p>
          </section>
        </section>
      </main>`;
  };

  renderHome = function(){
    const cards = UNITS.map((u, index)=>{
      const meta = FINAL_UNIT_META[u.id] || {};
      const cleanTitle = (meta.title || u.title || '').replace(/^Unité\s*\d+\s*:\s*/i,'');
      const border = meta.border || ['blue','orange','green','red'][index] || 'blue';
      return `<button class="v114-unit-card v114-border-${border}" data-unit="${esc(u.id)}">
        <span>Unité ${index + 1}</span>
        <h3>${esc(cleanTitle)}</h3>
        <p>${esc(meta.short || u.short || '')}</p>
        <strong>Ouvrir</strong>
      </button>`;
    }).join('');
    $('#app').innerHTML = appShell(`
      <section class="v114-home-bg">
        <section class="v114-home-title">
          <span>Espace élève</span>
          <h1>Choisir une unité</h1>
        </section>
        <section class="v114-home-units">${cards}</section>
      </section>`);
  };

  // Après le chargement des anciennes couches, on réaffiche l'authentification finale.
  const v130SysUnit = UNITS.find(u => u && u.id === 'v124_1ac_systeme');
  if(v130SysUnit){
    v130SysUnit.dictionary = [
      ['Donnée','معطى'], ['Information','معلومة'], ['Connaissance','معرفة'], ['Message','رسالة'], ['Image','صورة'],
      ['Informatique','إعلاميات'], ['Traitement','معالجة'], ['Ordinateur','حاسوب'], ['Résultat','نتيجة'],
      ['Système informatique','نظام معلوماتي'], ['Utilisateur','مستعمل'], ['Interface','واجهة'], ['Noyau fonctionnel','نواة وظيفية'],
      ['Connectivité','ربط/اتصال'], ['Bluetooth','بلوتوث'], ['Wi‑Fi','واي فاي'], ['USB','يو إس بي'],
      ['Logiciel','برنامج'], ['Application','تطبيق'], ['Système d’exploitation','نظام التشغيل']
    ];

    const infoLesson = v130SysUnit.lessons.find(l => l && l.title === 'Information');
    if(infoLesson){
      infoLesson.officialObjectives = [
        'Distinguer donnée, information et connaissance.',
        'Reconnaître qu’un message et une image sont des types d’information.',
        'Donner des exemples simples d’informations de la vie quotidienne.'
      ];
      infoLesson.visualType = 'mindmap';
      infoLesson.visual = { center: 'Information', items: ['Donnée', 'Information', 'Connaissance', 'Message', 'Image'] };
      infoLesson.fr = 'Une donnée est un élément brut. Quand cette donnée reçoit un sens, elle devient une information. Quand l’information est comprise et assimilée, elle devient une connaissance. Un message et une image sont des types d’information.';
      infoLesson.ar = 'المعطى عنصر خام. عندما يكتسب معنى يصبح معلومة. وعندما نفهم المعلومة ونستوعبها تصبح معرفة. والرسالة والصورة من أنواع المعلومات.';
      infoLesson.fill = ['Un SMS et une image sont des types d’____.', 'information', ['information', 'clavier', 'câble']];
      infoLesson.drag = [['Donnée', 'Élément brut sans contexte'], ['Information', 'Donnée qui a un sens'], ['Connaissance', 'Information comprise'], ['Message', 'Information transmise par écrit']];
      infoLesson.order = { title: 'Comprendre une information', steps: ['Observer la donnée', 'Chercher son sens', 'Identifier le type d’information', 'Expliquer ce que l’on a compris'] };
    }

    const infoTechLesson = v130SysUnit.lessons.find(l => l && l.title === 'Informatique');
    if(infoTechLesson){
      infoTechLesson.officialObjectives = [
        'Définir l’informatique de manière simple.',
        'Expliquer que l’ordinateur traite automatiquement des données.',
        'Associer données, traitement et résultats.'
      ];
      infoTechLesson.visual = { center: 'Informatique', items: ['Données', 'Traitement', 'Ordinateur', 'Résultat', 'Information'] };
      infoTechLesson.fill = ['L’informatique permet de ____ les données.', 'traiter', ['traiter', 'cacher', 'dessiner seulement']];
      infoTechLesson.drag = [['Données', 'Éléments saisis au départ'], ['Traitement', 'Travail réalisé par l’ordinateur'], ['Résultat', 'Information obtenue après traitement'], ['Ordinateur', 'Machine qui effectue le traitement']];
      infoTechLesson.order = { title: 'Traiter des données', steps: ['Saisir les données', 'Lancer le traitement', 'Obtenir le résultat', 'Lire l’information produite'] };
    }

    const sysLesson = v130SysUnit.lessons.find(l => l && l.title === 'Système informatique');
    if(sysLesson){
      sysLesson.visual = { center: 'Système informatique', items: ['Utilisateur', 'Interface', 'Noyau fonctionnel', 'Traitement'] };
      sysLesson.drag = [['Utilisateur', 'Personne qui utilise le système'], ['Interface', 'Moyen de communication avec le système'], ['Noyau fonctionnel', 'Partie qui réalise le traitement'], ['Traitement', 'Transformation des données']];
      sysLesson.fill = ['Dans un système informatique, l’____ communique avec le système.', 'utilisateur', ['utilisateur', 'câble', 'bureau']];
    }

    const connLesson = v130SysUnit.lessons.find(l => l && l.title === 'Connectivités');
    if(connLesson){
      connLesson.visual = { center: 'Connectivités', items: ['Bluetooth', 'Wi‑Fi', 'USB', 'Connexion sans fil', 'Connexion avec câble'] };
      connLesson.drag = [['Bluetooth', 'Connexion sans fil à courte distance'], ['Wi‑Fi', 'Connexion sans fil au réseau'], ['USB', 'Connexion par câble'], ['Connexion', 'Lien entre des appareils']];
      connLesson.fill = ['Le Bluetooth et le Wi‑Fi sont des connexions ____.', 'sans fil', ['sans fil', 'papier', 'manuelles']];
      connLesson.order = { title: 'Choisir une connectivité', steps: ['Identifier les appareils', 'Choisir le type de connexion', 'Relier les appareils', 'Vérifier l’échange des données'] };
    }

    const softLesson = v130SysUnit.lessons.find(l => l && l.title === 'Les logiciels');
    if(softLesson){
      softLesson.visual = { center: 'Les logiciels', items: ['Logiciel', 'Application', 'Système d’exploitation', 'Application mobile', 'Programme'] };
      softLesson.drag = [['Logiciel', 'Programme utilisé pour une tâche'], ['Application', 'Logiciel souvent utilisé par l’utilisateur'], ['Système d’exploitation', 'Logiciel essentiel au fonctionnement de l’appareil'], ['Application mobile', 'Logiciel léger installé sur le téléphone']];
      softLesson.fill = ['Une application est un type de ____.', 'logiciel', ['logiciel', 'écran', 'réseau']];
      softLesson.order = { title: 'Identifier un logiciel', steps: ['Observer l’icône ou le nom', 'Chercher son rôle', 'Classer : application ou système', 'Donner un exemple d’utilisation'] };
    }

    v130SysUnit.integration = {
      title: 'Situation d’intégration — Comprendre les informations et les outils numériques',
      scenario: 'Dans la salle informatique, tu observes un SMS, une image, un ordinateur connecté et plusieurs logiciels. Tu dois expliquer les informations visibles et les outils utilisés.',
      tasks: [
        'Distinguer donnée, information et connaissance à partir d’un exemple simple.',
        'Identifier deux types d’information : message et image.',
        'Expliquer que l’ordinateur traite des données pour produire des informations.',
        'Reconnaître une connectivité (Bluetooth, Wi‑Fi ou USB) et un logiciel utilisé.'
      ],
      questions: [
        ['Pourquoi un SMS est-il une information ?', 'Parce qu’il transmet un message qui a un sens pour la personne qui le lit.'],
        ['Pourquoi une image peut-elle être une information ?', 'Parce qu’elle transmet une idée ou un contenu de façon visuelle.'],
        ['Que fait l’ordinateur en informatique ?', 'Il traite des données pour produire des informations.'],
        ['Quelle différence entre logiciel et application ?', 'Une application est un logiciel utilisé pour accomplir une tâche précise ; le mot app a presque le même sens.']
      ]
    };

    v130SysUnit.exam = [
      ['Une donnée est :', ['un élément brut', 'une imprimante', 'un mot de passe'], 0],
      ['Une information est :', ['une donnée qui a du sens', 'un câble USB', 'une table'], 0],
      ['Une connaissance est :', ['une information comprise et assimilée', 'une icône vide', 'un fil électrique'], 0],
      ['Un SMS est un type de :', ['message', 'clavier', 'système d’exploitation'], 0],
      ['Une image peut être :', ['un type d’information', 'un câble', 'un écran seulement'], 0],
      ['L’informatique sert surtout à :', ['traiter des données', 'imprimer sans ordinateur', 'décorer le bureau'], 0],
      ['Après le traitement des données, on obtient :', ['une information ou un résultat', 'un clavier', 'une chaise'], 0],
      ['Dans un système informatique, l’utilisateur est :', ['la personne qui utilise le système', 'un bouton de la souris', 'un dossier'], 0],
      ['Dans le schéma du système informatique, l’interface sert à :', ['communiquer avec le système', 'recharger le téléphone', 'dessiner'], 0],
      ['Le Bluetooth est :', ['une connexion sans fil', 'un logiciel de texte', 'un dossier du bureau'], 0],
      ['Le Wi‑Fi permet de :', ['connecter des appareils au réseau sans fil', 'écrire un message papier', 'agrandir une fenêtre'], 0],
      ['Le câble USB sert à :', ['relier physiquement des appareils', 'fermer une fenêtre', 'dessiner un graphique'], 0],
      ['Un logiciel est :', ['un programme qui permet de réaliser une tâche', 'un câble réseau', 'une prise de courant'], 0],
      ['Une application mobile est :', ['un logiciel léger souvent installé sur le téléphone', 'un clavier spécial', 'un réseau local'], 0],
      ['Windows et Android sont :', ['des systèmes d’exploitation', 'des imprimantes', 'des navigateurs uniquement'], 0],
      ['Le mot app signifie presque :', ['application', 'ordinateur', 'message'], 0],
      ['Le système d’exploitation est :', ['un logiciel essentiel', 'une image', 'un type de souris'], 0],
      ['Un exemple de logiciel de communication est :', ['Gmail ou WhatsApp', 'Bluetooth', 'USB'], 0],
      ['Message, image et son sont :', ['des types d’information', 'des types de câbles', 'des types de fenêtres'], 0],
      ['Pour comprendre une information, il faut :', ['lire ou observer son sens', 'cliquer sur Fermer', 'brancher un câble'], 0]
    ];
  }

  const v130OsUnit = UNITS.find(u => u && u.id === 'v124_1ac_os');
  if(v130OsUnit){
    v130OsUnit.dictionary = [
      ['Système d’exploitation','نظام التشغيل'], ['Windows','ويندوز'], ['Mac OS','ماك أو إس'], ['Linux','لينكس'], ['Android','أندرويد'], ['iOS','آي أو إس'],
      ['Fenêtre','نافذة'], ['Fermer','إغلاق'], ['Agrandir','تكبير'], ['Réduire','تصغير'],
      ['Bureau','سطح المكتب'], ['Icône','أيقونة'], ['Fond d’écran','خلفية الشاشة'], ['Bouton Démarrer','زر ابدأ'], ['Barre des tâches','شريط المهام'], ['Zone de notification','منطقة الإشعارات']
    ];
    v130OsUnit.integration = {
      title: 'Situation d’intégration — Utiliser le système d’exploitation',
      scenario: 'Tu allumes un poste informatique. Tu dois reconnaître le système d’exploitation, manipuler une fenêtre et identifier les éléments du bureau.',
      tasks: ['Citer un exemple de système d’exploitation.', 'Montrer comment fermer, agrandir et réduire une fenêtre.', 'Identifier les éléments du bureau : icônes, fond d’écran, bouton Démarrer, barre des tâches et zone de notification.'],
      questions: [
        ['Quel est le rôle du système d’exploitation ?', 'Il permet à l’appareil de fonctionner et de lancer les autres programmes.'],
        ['Que signifie réduire une fenêtre ?', 'La cacher temporairement dans la barre des tâches sans la fermer.'],
        ['À quoi sert le bouton Démarrer ?', 'À accéder aux programmes et aux outils du poste.']
      ]
    };
    v130OsUnit.exam = [
      ['Windows est :', ['un système d’exploitation', 'une fenêtre', 'un câble'], 0],
      ['Android est surtout utilisé sur :', ['les téléphones et tablettes', 'les imprimantes', 'les prises USB'], 0],
      ['Le bouton X sert à :', ['fermer une fenêtre', 'réduire le volume', 'ouvrir le navigateur'], 0],
      ['Le bouton carré sert à :', ['agrandir une fenêtre', 'fermer la session', 'brancher un appareil'], 0],
      ['Le bouton réduire sert à :', ['cacher temporairement la fenêtre', 'supprimer le fichier', 'ouvrir le bureau'], 0],
      ['Le bureau est :', ['l’espace principal de travail', 'un câble réseau', 'un logiciel de dessin'], 0],
      ['Les petites images sur le bureau sont :', ['des icônes', 'des câbles', 'des cellules'], 0],
      ['La barre en bas de l’écran est :', ['la barre des tâches', 'la barre de formule', 'la zone d’impression'], 0],
      ['La zone de notification affiche souvent :', ['l’heure et de petits symboles système', 'des notes scolaires', 'les cellules du tableur'], 0],
      ['Le bouton Démarrer permet de :', ['lancer des programmes et accéder aux outils', 'éteindre l’écran seulement', 'envoyer un SMS'], 0]
    ];
  }

  renderLogin();
})();


/* V117 — espace professeur visible uniquement sur la page d’authentification */
(function(){
  document.addEventListener('click', function(e){
    const btn = e.target && e.target.closest ? e.target.closest('.v117-teacher-auth-btn') : null;
    if(!btn) return;
    if(typeof renderTeacherLogin === 'function'){
      renderTeacherLogin();
    }else if(typeof renderTeacher === 'function'){
      renderTeacher();
    }else{
      alert('Espace professeur');
    }
  }, true);
})();

/* =========================================================
   V120 — Authentification centrée : élève + espace prof en saisie
   - Carte centrée comme le modèle demandé
   - Espace professeur sous forme de formulaire, sans bouton “Ouvrir” direct
   - À propos placé en bas, aligné et discret
   - Nom final : Espace pédagogique informatique
========================================================= */
(function(){
  renderLogin = function(){
    localStorage.removeItem(STORAGE_KEY);
    const year = new Date().getFullYear();
    $('#app').innerHTML = `
      <main class="v120-auth-page" aria-label="Page d’authentification Espace pédagogique informatique">
        <section class="v120-auth-shell" aria-label="Connexion">
          <section class="v120-auth-form" aria-label="Formulaire élève">
            <div class="v120-head">
              <span>Plateforme pédagogique</span>
              <h1>ÉPI</h1>
              <p>Accès réservé uniquement aux élèves inscrits.</p>
            </div>

            <form id="loginForm" class="v120-student-form" autocomplete="off">
              <div class="v120-field">
                <label for="loginNom">Nom</label>
                <input name="nom" id="loginNom" type="text" placeholder="Saisir le nom" autocomplete="family-name" required>
              </div>
              <div class="v120-field">
                <label for="loginPrenom">Prénom</label>
                <input name="prenom" id="loginPrenom" type="text" placeholder="Saisir le prénom" autocomplete="given-name" required>
              </div>
              <p id="loginError" class="v120-message" aria-live="polite"></p>
              <button type="submit" class="v120-primary-btn">Entrer dans l’application</button>
            </form>

            <form id="teacherAuthForm" class="v120-teacher-form" autocomplete="off" aria-label="Formulaire espace professeur">
              <div class="v120-teacher-title">
                <span>Espace prof</span>
                <small>Saisie du mot de passe</small>
              </div>
              <div class="v120-field v120-teacher-field">
                <label for="teacherPasswordInput">Mot de passe</label>
                <input id="teacherPasswordInput" name="password" type="password" placeholder="Saisir le mot de passe" required>
              </div>
              <button type="submit" class="v120-secondary-btn">Valider</button>
              <p id="teacherAuthMsg" class="v120-teacher-msg" aria-live="polite"></p>
            </form>
          </section>

          <aside class="v120-auth-visual" aria-label="Image d’élèves en salle informatique">
            <img src="assets/auth-students-computers-v101.png" alt="Élèves travaillant sur des ordinateurs">
          </aside>
        </section>

        <section class="v120-about" aria-label="À propos de l’application">
          <strong>À propos</strong>
          <span>Application pédagogique interactive pour apprendre l’informatique pas à pas.</span>
          <em>© ${year} ÉPI</em>
        </section>
      </main>`;

    const teacherForm = document.getElementById('teacherAuthForm');
    if(teacherForm){
      teacherForm.addEventListener('submit', function(e){
        e.preventDefault();
        const msg = document.getElementById('teacherAuthMsg');
        const password = (document.getElementById('teacherPasswordInput')?.value || '').trim();
        if(password === PROF_PASSWORD){
          if(msg){ msg.textContent = 'Accès professeur validé.'; msg.className = 'v120-teacher-msg success-msg'; }
          renderResultsPage();
        }else{
          if(msg){ msg.textContent = 'Mot de passe incorrect.'; msg.className = 'v120-teacher-msg error-msg'; }
        }
      });
    }
  };

  renderLogin();
})();


/* =========================================================
   V121 — Correction finale demandée
   - Formulaire vraiment centré, sans colonne latérale
   - Image d'arrière-plan centrée et visible
   - Descriptions réduites
   - Nouveau nom abrégé : ÉPI Informatique
========================================================= */
(function(){
  const APP_NAME_SHORT = 'ÉPI';
  const APP_NAME_FULL = 'Espace Pédagogique Informatique';

  appShell = function(content){
    const st = getStudent();
    return `<div class="app-shell v114-shell v119-shell v121-shell"><header class="topbar v114-topbar v119-topbar v121-topbar"><div class="brand no-edu-icon"><div><h1>${APP_NAME_SHORT}</h1><p>${APP_NAME_FULL}</p></div></div><div class="nav-actions">${st?`<span class="pill">${esc(st.prenom)} ${esc(st.nom)}</span><button class="btn ghost small" data-action="home">Accueil</button><button class="btn secondary small" data-action="logout">Déconnexion</button>`:''}</div></header>${content}</div>`;
  };

  renderLogin = function(){
    localStorage.removeItem(STORAGE_KEY);
    const year = new Date().getFullYear();
    $('#app').innerHTML = `
      <main class="v121-auth-page" aria-label="Page d’authentification ${APP_NAME_SHORT}">
        <section class="v121-login-card" aria-label="Connexion">
          <header class="v121-login-head">
            <span class="v121-badge">${APP_NAME_SHORT}</span>
            <h1>${APP_NAME_SHORT}</h1>
            <p><strong>${APP_NAME_FULL}</strong><br>Accès réservé aux élèves inscrits.</p>
          </header>

          <form id="loginForm" class="v121-student-form" autocomplete="off">
            <div class="v121-field">
              <label for="loginNom">Nom</label>
              <input name="nom" id="loginNom" type="text" placeholder="Nom" autocomplete="family-name" required>
            </div>
            <div class="v121-field">
              <label for="loginPrenom">Prénom</label>
              <input name="prenom" id="loginPrenom" type="text" placeholder="Prénom" autocomplete="given-name" required>
            </div>
            <p id="loginError" class="v121-message" aria-live="polite"></p>
            <button type="submit" class="v121-primary-btn">Entrer</button>
          </form>

          <form id="teacherAuthForm" class="v121-teacher-form" autocomplete="off" aria-label="Formulaire espace professeur">
            <div class="v121-teacher-title">
              <strong>Espace prof</strong>
              <span>Mot de passe</span>
            </div>
            <div class="v121-field v121-teacher-field">
              <input id="teacherPasswordInput" name="password" type="password" placeholder="Mot de passe professeur" required>
            </div>
            <button type="submit" class="v121-secondary-btn">Valider</button>
            <p id="teacherAuthMsg" class="v121-teacher-msg" aria-live="polite"></p>
          </form>
        </section>

        <section class="v121-about v146-about" aria-label="À propos de l’application">
          <strong>À propos</strong>
          <span>ÉPI aide l’élève à comprendre l’informatique facilement, avec des cours simples, des activités et des questions pour progresser pas à pas.</span>
          <em>© ${year}</em>
        </section>
      </main>`;

    const teacherForm = document.getElementById('teacherAuthForm');
    if(teacherForm){
      teacherForm.addEventListener('submit', function(e){
        e.preventDefault();
        const msg = document.getElementById('teacherAuthMsg');
        const password = (document.getElementById('teacherPasswordInput')?.value || '').trim();
        if(password === PROF_PASSWORD){
          if(msg){ msg.textContent = 'Accès professeur validé.'; msg.className = 'v121-teacher-msg success-msg'; }
          renderResultsPage();
        }else{
          if(msg){ msg.textContent = 'Mot de passe incorrect.'; msg.className = 'v121-teacher-msg error-msg'; }
        }
      });
    }
  };

  renderLogin();
})();

/* =========================================================
   V124 — Page de choix du niveau avant les unités
   - Ajout de deux choix : 1ère année collégiale / 2ème année collégiale
   - Pour la 1ère année : unités conformes aux ressources demandées
========================================================= */
(function(){
  const V124_FIRST_YEAR_IDS = ['v124_1ac_systeme', 'v124_1ac_os'];
  const V124_SECOND_YEAR_IDS = ['u3_tableur', 'u4_logo'];

  function v124Lesson(title, objective, terms, fr, ar){
    const safeTerms = Array.isArray(terms) && terms.length ? terms : [title];
    return {
      title,
      competence: title.toLowerCase().includes('exploitation') || title.toLowerCase().includes('fenêtre') || title.toLowerCase().includes('bureau') ? 'C31' : 'C0',
      officialFocus: title,
      objective,
      officialObjectives: [
        `Identifier la notion : ${title}.`,
        'Donner une définition simple et correcte.',
        'Utiliser un exemple concret de la salle informatique.'
      ],
      visualType: 'mindmap',
      visual: { center: title, items: safeTerms },
      fr,
      ar,
      fill: [`${title} est une notion importante pour ____ l’ordinateur.`, 'utiliser', ['utiliser', 'cacher', 'effacer']],
      drag: safeTerms.slice(0, 4).map(t => [t, `Notion liée à : ${title}`]),
      order: { title: `Comprendre : ${title}`, steps: ['Observer la situation', 'Nommer la notion', 'Donner un exemple', 'Retenir la définition'] }
    };
  }

  const FIRST_YEAR_UNITS = [
    {
      id: 'v124_1ac_systeme',
      icon: '',
      title: 'Unité 1 : Système informatique',
      short: 'Information, informatique, système informatique, connectivités et logiciels',
      color: 'blue',
      competence: 'C0',
      duration: '4 h',
      v124Level: '1ac',
      v124Subtitles: ['Information', 'Informatique', 'Système informatique', 'Connectivités', 'Les logiciels'],
      officialResources: ['Information', 'Informatique', 'Système informatique', 'Connectivité', 'Logiciels'],
      intro: 'Découvrir les notions de base du système informatique : information, informatique, système informatique, connectivités et logiciels.',
      dictionary: [
        ['Information','معلومة'], ['Informatique','إعلاميات'], ['Système informatique','نظام معلوماتي'], ['Connectivité','ربط/اتصال'], ['Logiciel','برنامج'],
        ['Matériel','عتاد'], ['Donnée','معطى'], ['Traitement','معالجة'], ['Utilisateur','مستعمل'], ['Périphérique','ملحق']
      ],
      lessons: [
        v124Lesson('Information', 'Définir une information et donner des exemples simples : texte, nombre, image ou son.', ['Information', 'Donnée', 'Message', 'Texte', 'Image'], 'Une information est un contenu qui a un sens pour l’utilisateur. Elle peut être un texte, un nombre, une image, un son ou un message.', 'المعلومة هي محتوى له معنى بالنسبة للمستعمل، مثل نص أو عدد أو صورة أو صوت أو رسالة.'),
        v124Lesson('Informatique', 'Comprendre que l’informatique permet de traiter automatiquement l’information.', ['Informatique', 'Traitement', 'Ordinateur', 'Automatique', 'Résultat'], 'L’informatique est le domaine qui utilise l’ordinateur pour traiter, stocker et communiquer les informations de manière automatique.', 'الإعلاميات مجال يستعمل الحاسوب لمعالجة المعلومات وتخزينها وتبادلها بطريقة آلية.'),
        v124Lesson('Système informatique', 'Identifier les éléments d’un système informatique : utilisateur, matériel et logiciels.', ['Utilisateur', 'Matériel', 'Logiciels', 'Données', 'Résultats'], 'Un système informatique est un ensemble formé par l’utilisateur, le matériel et les logiciels. Il sert à saisir, traiter, stocker et produire des résultats.', 'النظام المعلوماتي يتكون من المستعمل والعتاد والبرمجيات، ويستعمل لإدخال المعلومات ومعالجتها وتخزينها وإخراج النتائج.'),
        v124Lesson('Connectivités', 'Reconnaître quelques formes de connexion entre les composants : câble, port, USB, réseau ou Wi‑Fi.', ['Connexion', 'Câble', 'Port', 'USB', 'Wi‑Fi'], 'La connectivité désigne la possibilité de relier les composants ou les appareils pour échanger des données : câble, port USB, réseau ou Wi‑Fi.', 'الربط يعني إمكانية وصل المكونات أو الأجهزة لتبادل المعطيات، مثل الكابل أو منفذ USB أو الشبكة أو Wi‑Fi.'),
        v124Lesson('Les logiciels', 'Définir un logiciel et citer des exemples : système d’exploitation, traitement de texte, navigateur.', ['Logiciel', 'Programme', 'Application', 'Système d’exploitation', 'Navigateur'], 'Un logiciel est un programme qui permet à l’utilisateur de réaliser une tâche : écrire un texte, dessiner, calculer ou naviguer sur le Web.', 'البرنامج هو مجموعة أوامر تساعد المستعمل على إنجاز مهمة مثل كتابة نص أو الرسم أو الحساب أو التصفح.')
      ],
      integration: {
        title: 'Situation d’intégration — Identifier le système informatique de la salle',
        scenario: 'Dans la salle informatique, tu observes un poste de travail. Tu dois reconnaître les informations, les éléments du système informatique, les connexions et les logiciels utilisés.',
        tasks: ['Citer deux exemples d’informations.', 'Identifier l’utilisateur, le matériel et les logiciels.', 'Donner un exemple de connectivité.', 'Expliquer le rôle d’un logiciel.'],
        questions: [
          ['Pourquoi l’informatique est-elle liée à l’information ?', 'Parce qu’elle permet de traiter, stocker et communiquer les informations.'],
          ['Donne un exemple de connectivité.', 'Un câble USB, un câble réseau ou une connexion Wi‑Fi.']
        ]
      },
      exam: [
        ['Une information peut être :', ['un texte, un nombre, une image ou un son', 'seulement un câble', 'uniquement un écran'], 0],
        ['L’informatique sert surtout à :', ['traiter automatiquement l’information', 'décorer la classe', 'remplacer le cahier uniquement'], 0],
        ['Un système informatique contient :', ['utilisateur, matériel et logiciels', 'table, chaise et tableau', 'papier seulement'], 0],
        ['Le matériel désigne :', ['les parties physiques que l’on peut toucher', 'les idées dans la tête', 'un mot de passe'], 0],
        ['Un logiciel est :', ['un programme utilisé pour réaliser une tâche', 'un câble électrique', 'une table'], 0],
        ['La donnée est :', ['une information saisie ou utilisée', 'un bouton de fermeture', 'une prise murale'], 0],
        ['Le traitement transforme :', ['les données pour obtenir un résultat', 'la souris en clavier', 'le bureau en image'], 0],
        ['Un exemple de logiciel est :', ['un navigateur Web', 'une chaise', 'un câble HDMI seulement'], 0],
        ['La connectivité permet de :', ['relier des appareils pour échanger des données', 'effacer les leçons', 'fermer la salle'], 0],
        ['Un port USB sert à :', ['connecter certains périphériques', 'imprimer sans imprimante', 'ouvrir une fenêtre automatiquement'], 0],
        ['Le Wi‑Fi est une connexion :', ['sans fil', 'sur papier', 'toujours par clé USB'], 0],
        ['L’utilisateur est :', ['la personne qui utilise le poste', 'un câble de réseau', 'un fichier supprimé'], 0],
        ['Un résultat peut être :', ['affiché, imprimé ou enregistré', 'toujours invisible', 'uniquement oral'], 0],
        ['Un périphérique est :', ['un élément connecté à l’ordinateur', 'une règle de français', 'un nombre'], 0],
        ['Pour écrire un texte, on peut utiliser :', ['un logiciel de traitement de texte', 'un câble réseau seul', 'une corbeille'], 0],
        ['L’information a un sens pour :', ['l’utilisateur', 'le mur', 'la table uniquement'], 0],
        ['Le système informatique traite :', ['des informations ou des données', 'des craies uniquement', 'des portes'], 0],
        ['Une application de dessin est :', ['un logiciel', 'un matériel', 'un bureau physique'], 0],
        ['Connecter signifie :', ['relier deux éléments', 'supprimer un fichier', 'changer une note'], 0],
        ['Le rôle des logiciels est de :', ['permettre d’exécuter des tâches', 'remplacer tous les câbles', 'éteindre toujours l’écran'], 0]
      ]
    },
    {
      id: 'v124_1ac_os',
      icon: '',
      title: 'Unité 2 : Système d’exploitation',
      short: 'Notion de système d’exploitation, fenêtres et bureau',
      color: 'orange',
      competence: 'C31',
      duration: '4 h',
      v124Level: '1ac',
      v124Subtitles: ['Notion de système d’exploitation', 'Gestion des fenêtres', 'Organisation du poste de travail (bureau)'],
      officialResources: ['Notion de système d’exploitation', 'Gestion des fenêtres', 'Organisation du poste de travail (bureau)'],
      intro: 'Découvrir le rôle du système d’exploitation et apprendre à manipuler les fenêtres et le bureau.',
      dictionary: [
        ['Système d’exploitation','نظام التشغيل'], ['Fenêtre','نافذة'], ['Bureau','سطح المكتب'], ['Icône','أيقونة'], ['Barre des tâches','شريط المهام'],
        ['Réduire','تصغير'], ['Agrandir','تكبير'], ['Fermer','إغلاق'], ['Déplacer','نقل'], ['Dossier','مجلد']
      ],
      lessons: [
        v124Lesson('Notion de système d’exploitation', 'Définir le système d’exploitation comme logiciel principal qui permet d’utiliser l’ordinateur.', ['Système d’exploitation', 'Windows', 'Linux', 'Android', 'Logiciel principal'], 'Le système d’exploitation est le logiciel principal qui permet à l’ordinateur de fonctionner. Il aide l’utilisateur à lancer les logiciels, gérer les fichiers et communiquer avec le matériel.', 'نظام التشغيل هو البرنامج الرئيسي الذي يجعل الحاسوب يشتغل، ويساعد المستعمل على تشغيل البرامج وتدبير الملفات والتعامل مع العتاد.'),
        v124Lesson('Gestion des fenêtres', 'Manipuler une fenêtre : ouvrir, réduire, agrandir, déplacer et fermer.', ['Fenêtre', 'Ouvrir', 'Réduire', 'Agrandir', 'Fermer'], 'Une fenêtre est une zone qui affiche un programme ou un document. On peut l’ouvrir, la déplacer, la réduire, l’agrandir ou la fermer.', 'النافذة مساحة تعرض برنامجا أو وثيقة. يمكن فتحها ونقلها وتصغيرها وتكبيرها وإغلاقها.'),
        v124Lesson('Organisation du poste de travail (bureau)', 'Identifier les éléments du bureau et organiser l’espace de travail.', ['Bureau', 'Icônes', 'Barre des tâches', 'Dossiers', 'Corbeille'], 'Le bureau est l’espace de travail qui apparaît après l’ouverture de session. Il contient des icônes, la barre des tâches, des dossiers et la corbeille.', 'سطح المكتب هو فضاء العمل الذي يظهر بعد فتح الجلسة، ويحتوي على الأيقونات وشريط المهام والمجلدات وسلة المهملات.')
      ],
      integration: {
        title: 'Situation d’intégration — Organiser le bureau de travail',
        scenario: 'Tu ouvres un poste de la salle informatique. Tu dois expliquer le rôle du système d’exploitation, manipuler une fenêtre et organiser le bureau.',
        tasks: ['Citer un exemple de système d’exploitation.', 'Ouvrir et fermer une fenêtre.', 'Identifier les icônes et la barre des tâches.', 'Créer un dossier de travail sur le bureau.'],
        questions: [
          ['Pourquoi le système d’exploitation est-il nécessaire ?', 'Parce qu’il permet de faire fonctionner l’ordinateur et de gérer les logiciels, fichiers et périphériques.'],
          ['Cite deux actions possibles sur une fenêtre.', 'Réduire, agrandir, déplacer ou fermer.']
        ]
      },
      exam: [
        ['Le système d’exploitation est :', ['le logiciel principal de l’ordinateur', 'une chaise', 'un câble seulement'], 0],
        ['Un exemple de système d’exploitation est :', ['Windows', 'Clavier', 'Imprimante'], 0],
        ['Le système d’exploitation permet de :', ['lancer les logiciels et gérer les fichiers', 'fabriquer le bureau physique', 'écrire sans ordinateur'], 0],
        ['Une fenêtre affiche :', ['un programme ou un document', 'seulement un câble', 'un cahier fermé'], 0],
        ['Le bouton X sert à :', ['fermer la fenêtre', 'allumer la souris', 'ouvrir la corbeille'], 0],
        ['Réduire une fenêtre signifie :', ['la placer dans la barre des tâches', 'la supprimer définitivement', 'débrancher l’écran'], 0],
        ['Agrandir une fenêtre signifie :', ['augmenter sa taille', 'changer son nom', 'effacer un fichier'], 0],
        ['Déplacer une fenêtre signifie :', ['changer sa position à l’écran', 'éteindre l’ordinateur', 'supprimer le bureau'], 0],
        ['Le bureau apparaît après :', ['l’ouverture de session', 'la suppression du disque', 'l’impression du papier'], 0],
        ['Une icône représente souvent :', ['un programme, un fichier ou un dossier', 'un câble cassé', 'une prise murale'], 0],
        ['La barre des tâches sert à :', ['accéder aux programmes ouverts', 'saisir du texte', 'scanner une image'], 0],
        ['La corbeille contient généralement :', ['des éléments supprimés', 'les notes du professeur', 'les câbles USB'], 0],
        ['Un dossier sert à :', ['ranger des fichiers', 'fermer une fenêtre', 'allumer le poste'], 0],
        ['Organiser le bureau signifie :', ['classer les fichiers et garder un espace clair', 'cacher tous les programmes', 'débrancher les périphériques'], 0],
        ['Pour ouvrir un programme, on peut cliquer sur :', ['son icône', 'la prise électrique', 'la table'], 0],
        ['Fermer correctement le poste nécessite souvent de :', ['enregistrer le travail avant de quitter', 'débrancher directement', 'supprimer tous les dossiers'], 0],
        ['Android est :', ['un système d’exploitation', 'un clavier', 'un écran'], 0],
        ['Linux est :', ['un système d’exploitation', 'une imprimante', 'une fenêtre uniquement'], 0],
        ['La gestion des fenêtres comprend :', ['ouvrir, réduire, agrandir, déplacer, fermer', 'manger, écrire, dormir', 'dessiner au tableau'], 0],
        ['Le poste de travail doit être :', ['organisé pour retrouver facilement les fichiers', 'rempli de fichiers au hasard', 'toujours vide de logiciels'], 0]
      ]
    }
  ];

  function v124EnsureFirstYearUnits(){
    if(!Array.isArray(UNITS)) return;
    FIRST_YEAR_UNITS.forEach(unit => {
      const existing = UNITS.find(u => u && u.id === unit.id);
      if(existing) Object.assign(existing, unit);
      else UNITS.push(unit);
    });
  }

  function v124UnitsForLevel(level){
    v124EnsureFirstYearUnits();
    const ids = level === '1ac' ? V124_FIRST_YEAR_IDS : V124_SECOND_YEAR_IDS;
    return ids.map(id => UNITS.find(u => u && u.id === id)).filter(Boolean);
  }

  function v124UnitCard(unit, index, level){
    const cleanTitle = String(unit.title || '').replace(/^Unité\s*\d+\s*:\s*/i, '');
    const borders = level === '1ac' ? ['blue','orange'] : ['green','red'];
    const border = borders[index % borders.length];
    return `<button class="v124-unit-card v129-unit-card v114-unit-card v114-border-${border}" data-unit="${esc(unit.id)}">
      <span>${level === '1ac' ? '1ère année collégiale' : '2ème année collégiale'} — Unité ${index + 1}</span>
      <h3>${esc(cleanTitle)}</h3>
      <strong>Ouvrir l’unité</strong>
    </button>`;
  }

  function renderLevelChoice(){
    state.selectedLevel = null;
    $('#app').innerHTML = appShell(`
      <section class="v124-level-page v114-home-bg">
        <section class="v124-level-title v114-home-title">
          <span>Espace élève</span>
          <h1>Choisir le niveau</h1>
          <p>Choisis d’abord l’année collégiale, puis la liste des unités apparaît.</p>
        </section>
        <section class="v124-level-grid">
          <button type="button" class="v124-level-card first" data-level="1ac">
            <span>Niveau 1</span>
            <h2>1ère année collégiale</h2>
            <p>Système informatique et système d’exploitation.</p>
            <strong>Afficher les unités</strong>
          </button>
          <button type="button" class="v124-level-card second" data-level="2ac">
            <span>Niveau 2</span>
            <h2>2ème année collégiale</h2>
            <p>Tableur et programmation Logo.</p>
            <strong>Afficher les unités</strong>
          </button>
        </section>
      </section>`);
  }

  function renderLevelUnits(level){
    state.selectedLevel = level;
    const units = v124UnitsForLevel(level);
    const label = level === '1ac' ? '1ère année collégiale' : '2ème année collégiale';
    const cards = units.map((u, i) => v124UnitCard(u, i, level)).join('');
    $('#app').innerHTML = appShell(`
      <section class="v124-units-page v114-home-bg ${level === '1ac' ? 'v125-bg-1ac' : 'v125-bg-2ac'}">
        <section class="v124-units-head v114-home-title">
          <span>${label}</span>
          <h1>Choisir une unité</h1>
          <p>${level === '1ac' ? 'Les unités affichées respectent les ressources : système informatique et système d’exploitation.' : 'Les unités affichées pour la 2ème année collégiale sont : tableur et programmation Logo.'}</p>
          <button type="button" class="btn ghost small v124-back-level" data-level-back="1">← Retour au choix du niveau</button>
        </section>
        <section class="v124-units-grid v114-home-units">${cards}</section>
      </section>`);
  }

  const oldRenderLoginV124 = renderLogin;
  renderLogin = function(){
    state.selectedLevel = null;
    if(typeof oldRenderLoginV124 === 'function') oldRenderLoginV124();
  };

  renderHome = function(){
    renderLevelChoice();
  };

  document.addEventListener('click', function(e){
    const levelBtn = e.target && e.target.closest ? e.target.closest('[data-level]') : null;
    if(levelBtn){
      e.preventDefault();
      renderLevelUnits(levelBtn.dataset.level);
      return;
    }
    const backBtn = e.target && e.target.closest ? e.target.closest('[data-level-back]') : null;
    if(backBtn){
      e.preventDefault();
      renderLevelChoice();
    }
  });

  v124EnsureFirstYearUnits();

  const v127OsUnit = UNITS.find(u => u && u.id === 'v124_1ac_os');
  if(v127OsUnit && Array.isArray(v127OsUnit.lessons)) {
    const osLesson = v127OsUnit.lessons.find(l => l && l.title === 'Notion de système d’exploitation');
    if(osLesson){
      osLesson.visualType = 'mindmap';
      osLesson.visual = { center: 'Système d’exploitation', items: ['Windows', 'Mac OS', 'Linux', 'iOS', 'Android'] };
    }
    const windowsLesson = v127OsUnit.lessons.find(l => l && l.title === 'Gestion des fenêtres');
    if(windowsLesson){
      windowsLesson.visualType = 'mindmap';
      windowsLesson.visual = { center: 'Gestion des fenêtres', items: ['Exemple d’une fenêtre', 'Fermer une fenêtre', 'Agrandir une fenêtre', 'Réduire une fenêtre'] };
    }
    const bureauLesson = v127OsUnit.lessons.find(l => l && l.title === 'Organisation du poste de travail (bureau)');
    if(bureauLesson){
      bureauLesson.visualType = 'mindmap';
      bureauLesson.visual = { center: 'Bureau', items: ['Icônes', 'Fond d’écran', 'Bouton Démarrer', 'Barre des tâches', 'Zone de notification'] };
    }
  }

  renderLogin();
})();


/* =========================================================
   V131 — 1AC : carte mentale, auditif et kinesthésique
   limités aux titres / notions réellement visibles dans le style visuel
========================================================= */
(function(){
  function v131IsFirstYearUnit(unit){
    return !!unit && ['v124_1ac_systeme','v124_1ac_os'].includes(unit.id);
  }
  function v131AudioItemsFromVisual(lesson){
    const steps = uniqueByTitle(visualSteps(lesson)).slice(0,5);
    return steps.map(st => ({
      title: st.title,
      fr: st.text,
      ar: defFor(st.title)[1],
      keywords: [st.title],
      question: `Que signifie ${st.title} ?`,
      answer: st.text
    }));
  }
  const v131OldAudioItemsForLesson = v60AudioItemsForLesson;
  v60AudioItemsForLesson = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    if(v131IsFirstYearUnit(unit) && lesson) return v131AudioItemsFromVisual(lesson);
    return v131OldAudioItemsForLesson(lesson);
  };

  const sysUnit = UNITS.find(u => u && u.id === 'v124_1ac_systeme');
  if(sysUnit && Array.isArray(sysUnit.lessons)){
    const info = sysUnit.lessons.find(l => l && l.title === 'Information');
    if(info){
      info.visual = { center: 'Information', items: ['Comprendre donnée, information et connaissance', 'Type d’information : message', 'Type d’information : image'] };
      info.drag = [['Comprendre donnée, information et connaissance', 'Donnée → information → connaissance'], ['Type d’information : message', 'Le SMS est un message'], ['Type d’information : image', 'Une image ou un schéma transmet une information']];
      info.fill = ['Parmi les types d’information visibles, on trouve un ____ et une image.', 'message', ['message', 'clavier', 'bureau']];
      info.order = { title: 'Identifier une information', steps: ['Comprendre donnée, information et connaissance', 'Type d’information : message', 'Type d’information : image'] };
    }
    const informatique = sysUnit.lessons.find(l => l && l.title === 'Informatique');
    if(informatique){
      informatique.visual = { center: 'Informatique', items: ['L’informatique traite les données'] };
      informatique.drag = [['L’informatique traite les données', 'L’ordinateur traite des données pour produire des informations']];
      informatique.fill = ['En informatique, l’ordinateur traite des ____.', 'données', ['données', 'fenêtres', 'dossiers']];
      informatique.order = { title: 'Rôle de l’informatique', steps: ['L’informatique traite les données'] };
    }
    const systeme = sysUnit.lessons.find(l => l && l.title === 'Système informatique');
    if(systeme){
      systeme.visual = { center: 'Système informatique', items: ['Identifier le système informatique'] };
      systeme.drag = [['Identifier le système informatique', 'Le système relie l’utilisateur, l’interface et le noyau fonctionnel']];
      systeme.fill = ['Le système informatique relie l’utilisateur, l’interface et le noyau ____.', 'fonctionnel', ['fonctionnel', 'visuel', 'mobile']];
      systeme.order = { title: 'Comprendre le système informatique', steps: ['Identifier le système informatique'] };
    }
    const connect = sysUnit.lessons.find(l => l && l.title === 'Connectivités');
    if(connect){
      connect.visual = { center: 'Connectivités', items: ['Connexion par Bluetooth', 'Connexion par Wi‑Fi', 'Connexion par câble USB'] };
      connect.drag = [['Connexion par Bluetooth', 'Connexion sans fil à courte distance'], ['Connexion par Wi‑Fi', 'Connexion sans fil au réseau'], ['Connexion par câble USB', 'Connexion physique entre appareils']];
      connect.fill = ['Le Bluetooth et le Wi‑Fi sont des connexions ____.', 'sans fil', ['sans fil', 'imprimées', 'manuelles']];
      connect.order = { title: 'Reconnaître les connectivités', steps: ['Connexion par Bluetooth', 'Connexion par Wi‑Fi', 'Connexion par câble USB'] };
    }
    const logiciels = sysUnit.lessons.find(l => l && l.title === 'Les logiciels');
    if(logiciels){
      logiciels.visual = { center: 'Les logiciels', items: ['Exemples de logiciels et d’applications', 'Systèmes d’exploitation essentiels', 'Comprendre la notion d’application mobile'] };
      logiciels.drag = [['Exemples de logiciels et d’applications', 'Des logiciels servent à des tâches précises'], ['Systèmes d’exploitation essentiels', 'Windows ou Android font fonctionner l’appareil'], ['Comprendre la notion d’application mobile', 'Une application mobile est un logiciel léger']];
      logiciels.fill = ['Une application mobile est un logiciel souvent installé sur le ____.', 'téléphone', ['téléphone', 'clavier', 'réseau']];
      logiciels.order = { title: 'Identifier les logiciels', steps: ['Exemples de logiciels et d’applications', 'Systèmes d’exploitation essentiels', 'Comprendre la notion d’application mobile'] };
    }
  }

  const osUnit = UNITS.find(u => u && u.id === 'v124_1ac_os');
  if(osUnit && Array.isArray(osUnit.lessons)){
    const os = osUnit.lessons.find(l => l && l.title === 'Notion de système d’exploitation');
    if(os){
      os.visual = { center: 'Notion de système d’exploitation', items: ['Exemples de systèmes d’exploitation'] };
      os.drag = [['Exemples de systèmes d’exploitation', 'Windows, Mac OS, Linux, iOS et Android sont des systèmes d’exploitation']];
      os.fill = ['Windows et Android sont des systèmes d’____.', 'exploitation', ['exploitation', 'impression', 'fenêtres']];
      os.order = { title: 'Reconnaître le système d’exploitation', steps: ['Exemples de systèmes d’exploitation'] };
    }
    const fen = osUnit.lessons.find(l => l && l.title === 'Gestion des fenêtres');
    if(fen){
      fen.visual = { center: 'Gestion des fenêtres', items: ['Exemple d’une fenêtre', 'Fermer une fenêtre', 'Agrandir une fenêtre', 'Réduire une fenêtre'] };
      fen.drag = [['Exemple d’une fenêtre', 'Une fenêtre affiche un programme ou un dossier'], ['Fermer une fenêtre', 'Le bouton X ferme la fenêtre'], ['Agrandir une fenêtre', 'Le bouton carré agrandit la fenêtre'], ['Réduire une fenêtre', 'Le bouton réduire cache la fenêtre temporairement']];
      fen.fill = ['Le bouton X sert à ____ une fenêtre.', 'fermer', ['fermer', 'colorer', 'copier']];
      fen.order = { title: 'Manipuler une fenêtre', steps: ['Exemple d’une fenêtre', 'Fermer une fenêtre', 'Agrandir une fenêtre', 'Réduire une fenêtre'] };
    }
    const bureau = osUnit.lessons.find(l => l && l.title === 'Organisation du poste de travail (bureau)');
    if(bureau){
      bureau.visual = { center: 'Organisation du poste de travail (bureau)', items: ['Identifier les éléments du poste de travail'] };
      bureau.drag = [['Identifier les éléments du poste de travail', 'Le bureau contient les icônes, le fond d’écran, le bouton Démarrer, la barre des tâches et la zone de notification']];
      bureau.fill = ['Le bureau contient les icônes et la barre des ____.', 'tâches', ['tâches', 'cellules', 'répétitions']];
      bureau.order = { title: 'Identifier le bureau', steps: ['Identifier les éléments du poste de travail'] };
    }
  }
})();


/* =========================================================
   V132 — 1AC : comparaison officielle + carte mentale globale
   + auditif/kinesthésique détaillés uniquement avec les notions du visuel
========================================================= */
(function(){
  const V132_FIRST_YEAR_IDS = ['v124_1ac_systeme','v124_1ac_os'];
  function v132IsFirstYearUnit(unit){ return !!unit && V132_FIRST_YEAR_IDS.includes(unit.id); }

  const V132_UNIT_MINDMAPS = {
    v124_1ac_systeme: {
      title: 'Carte mentale globale — Système informatique',
      intro: 'Cette carte mentale résume toutes les notions importantes de l’unité pour réviser avant le contrôle final.',
      branches: [
        { title: 'Information', items: ['Donnée', 'Information', 'Connaissance', 'Message', 'Image'] },
        { title: 'Informatique', items: ['Données', 'Traitement automatique', 'Résultat', 'Information produite'] },
        { title: 'Système informatique', items: ['Utilisateur', 'Interface', 'Noyau fonctionnel', 'Traitement'] },
        { title: 'Connectivités', items: ['Bluetooth', 'Wi‑Fi', 'USB', 'Sans fil', 'Avec câble'] },
        { title: 'Les logiciels', items: ['Logiciel', 'Application', 'Système d’exploitation', 'Application mobile'] }
      ],
      comparison: [
        ['Instructions officielles', 'Information, informatique, système informatique, connectivité et logiciels.'],
        ['Ressources numériques', 'Cours, résumés, exercices et exemples visuels pour aider l’élève à réviser.'],
        ['Carte retenue', 'Elle regroupe les notions essentielles du cours complet : information, traitement, système, connexions et logiciels.']
      ]
    },
    v124_1ac_os: {
      title: 'Carte mentale globale — Système d’exploitation',
      intro: 'Cette carte mentale donne une vision complète de l’unité avant l’examen.',
      branches: [
        { title: 'Notion de système d’exploitation', items: ['Windows', 'Mac OS', 'Linux', 'iOS', 'Android', 'Logiciel principal'] },
        { title: 'Gestion des fenêtres', items: ['Exemple d’une fenêtre', 'Fermer', 'Agrandir', 'Réduire'] },
        { title: 'Organisation du poste de travail', items: ['Bureau', 'Icônes', 'Fond d’écran', 'Bouton Démarrer', 'Barre des tâches', 'Zone de notification'] }
      ],
      comparison: [
        ['Instructions officielles', 'Notion de système d’exploitation, gestion des fenêtres et organisation du poste de travail.'],
        ['Ressources numériques', 'Exemples visuels d’environnements et de manipulation des fenêtres.'],
        ['Carte retenue', 'Elle rassemble les notions indispensables pour utiliser correctement le poste de travail.']
      ]
    }
  };

  const V132_DETAILS = {
    'Comprendre donnée, information et connaissance': 'La donnée est un élément brut. Quand on lui donne un sens, elle devient une information. Quand cette information est comprise, elle devient une connaissance.',
    'Type d’information : message': 'Un message est une information transmise d’une personne à une autre, par exemple un SMS ou un e-mail.',
    'Type d’information : image': 'Une image ou un schéma peut transmettre une information de manière visuelle.',
    'L’informatique traite les données': 'L’informatique utilise l’ordinateur pour recevoir des données, les traiter automatiquement et produire des informations utiles.',
    'Identifier le système informatique': 'Le système informatique relie l’utilisateur, l’interface et le noyau fonctionnel pour réaliser un traitement.',
    'Connexion par Bluetooth': 'Le Bluetooth est une connexion sans fil à courte distance entre des appareils proches.',
    'Connexion par Wi‑Fi': 'Le Wi‑Fi connecte plusieurs appareils sans câble à un réseau ou à Internet.',
    'Connexion par câble USB': 'Le câble USB relie physiquement deux appareils pour transférer des données ou recharger un appareil.',
    'Exemples de logiciels et d’applications': 'Un logiciel ou une application est un programme qui aide l’utilisateur à accomplir une tâche précise.',
    'Systèmes d’exploitation essentiels': 'Le système d’exploitation est un logiciel essentiel qui fait fonctionner l’appareil et lance les autres logiciels.',
    'Comprendre la notion d’application mobile': 'Une application mobile est un logiciel léger souvent installé sur un téléphone pour réaliser une tâche précise.',
    'Exemples de systèmes d’exploitation': 'Windows, Mac OS, Linux, iOS et Android sont des systèmes d’exploitation.',
    'Exemple d’une fenêtre': 'Une fenêtre est une zone de l’écran qui affiche un programme, un dossier ou un document.',
    'Fermer une fenêtre': 'Fermer une fenêtre signifie quitter cette fenêtre à l’aide du bouton X.',
    'Agrandir une fenêtre': 'Agrandir une fenêtre signifie augmenter sa taille pour mieux voir son contenu.',
    'Réduire une fenêtre': 'Réduire une fenêtre signifie la cacher temporairement dans la barre des tâches sans la fermer.',
    'Identifier les éléments du poste de travail': 'Le bureau contient les icônes, le fond d’écran, le bouton Démarrer, la barre des tâches et la zone de notification.'
  };

  const V132_DETAILS_AR = {
    'Comprendre donnée, information et connaissance': 'المعطى عنصر خام. عندما نعطيه معنى يصبح معلومة، وعندما نفهم المعلومة تصبح معرفة.',
    'Type d’information : message': 'الرسالة نوع من المعلومات، مثل رسالة SMS أو البريد الإلكتروني.',
    'Type d’information : image': 'الصورة أو الرسم يمكن أن ينقل معلومة بطريقة بصرية.',
    'L’informatique traite les données': 'الإعلاميات تستعمل الحاسوب لمعالجة المعطيات آليا وإنتاج معلومات مفيدة.',
    'Identifier le système informatique': 'النظام المعلوماتي يربط المستعمل والواجهة والنواة الوظيفية لإنجاز المعالجة.',
    'Connexion par Bluetooth': 'البلوتوث اتصال لاسلكي قصير المدى بين أجهزة قريبة.',
    'Connexion par Wi‑Fi': 'الواي فاي يربط الأجهزة بالشبكة أو بالإنترنت دون كابل.',
    'Connexion par câble USB': 'كابل USB يربط جهازين ماديا لنقل المعطيات أو الشحن.',
    'Exemples de logiciels et d’applications': 'البرنامج أو التطبيق يساعد المستعمل على إنجاز مهمة محددة.',
    'Systèmes d’exploitation essentiels': 'نظام التشغيل برنامج أساسي يجعل الجهاز يشتغل ويفتح البرامج الأخرى.',
    'Comprendre la notion d’application mobile': 'التطبيق المحمول برنامج خفيف غالبا يثبت على الهاتف لإنجاز مهمة محددة.',
    'Exemples de systèmes d’exploitation': 'ويندوز وماك أو إس ولينكس وiOS وأندرويد أنظمة تشغيل.',
    'Exemple d’une fenêtre': 'النافذة منطقة على الشاشة تعرض برنامجا أو مجلدا أو وثيقة.',
    'Fermer une fenêtre': 'إغلاق النافذة يعني الخروج منها باستعمال زر X.',
    'Agrandir une fenêtre': 'تكبير النافذة يعني زيادة حجمها لرؤية المحتوى بوضوح.',
    'Réduire une fenêtre': 'تصغير النافذة يعني إخفاءها مؤقتا في شريط المهام دون إغلاقها.',
    'Identifier les éléments du poste de travail': 'سطح المكتب يحتوي على الأيقونات والخلفية وزر ابدأ وشريط المهام ومنطقة الإشعارات.'
  };

  Object.keys(V132_DETAILS).forEach(k => {
    VISUAL_DEFINITIONS[k] = [V132_DETAILS[k], V132_DETAILS_AR[k] || ''];
  });

  function v132VisualTitles(lesson){
    return uniqueByTitle(visualSteps(lesson)).map(st => st.title).filter(Boolean);
  }
  function v132Detail(title){ return V132_DETAILS[title] || defFor(title)[0] || title; }
  function v132DetailAr(title){ return V132_DETAILS_AR[title] || defFor(title)[1] || ''; }
  function v132Choices(titles, index){
    const all = titles.slice();
    const answer = titles[index];
    const choices = [answer, ...all.filter(t => t !== answer).slice(0,2)];
    return choices.slice(0,3);
  }

  const v132OldAudioItemsForLesson = v60AudioItemsForLesson;
  v60AudioItemsForLesson = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    if(v132IsFirstYearUnit(unit) && lesson){
      const titles = v132VisualTitles(lesson);
      return titles.map(title => ({
        title,
        fr: v132Detail(title),
        ar: v132DetailAr(title),
        keywords: [title],
        question: `Explique la notion : ${title}`,
        answer: v132Detail(title)
      }));
    }
    return v132OldAudioItemsForLesson(lesson);
  };

  const v132OldTopicsForLesson = v61TopicsForLesson;
  v61TopicsForLesson = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    if(v132IsFirstYearUnit(unit) && lesson){
      const titles = v132VisualTitles(lesson);
      return titles.map((title, index) => ({
        title,
        fr: v132Detail(title),
        ar: v132DetailAr(title),
        keywords: [title],
        index,
        fillSentence: `La notion travaillée dans le style visuel est : ____.`,
        answer: title,
        choices: v132Choices(titles, index),
        drag: titles.map(t => [t, v132Detail(t)])
      }));
    }
    return v132OldTopicsForLesson(lesson);
  };

  function v132MindMapHtml(unit){
    const data = V132_UNIT_MINDMAPS[unit && unit.id];
    if(!data) return '';
    const branches = data.branches.map((b,i)=>`<article class="v132-map-branch v132-color-${i%5}"><h4>${esc(b.title)}</h4><ul>${b.items.map(it=>`<li>${esc(it)}</li>`).join('')}</ul></article>`).join('');
    const comparison = data.comparison.map(row=>`<tr><th>${esc(row[0])}</th><td>${esc(row[1])}</td></tr>`).join('');
    return `<section class="v132-global-map panel"><div class="v132-map-head"><span class="mini-pill">Révision avant examen</span><h3>${esc(data.title)}</h3><p>${esc(data.intro)}</p></div><div class="v132-map-center">${esc(unit.title.replace(/^Unité\s*\d+\s*:\s*/i,''))}</div><div class="v132-map-grid">${branches}</div><div class="v132-comparison"><h4>Comparaison ressources / instructions</h4><table><tbody>${comparison}</tbody></table></div></section>`;
  }

  const v132OldRenderUnitIntro = renderUnitIntro;
  renderUnitIntro = function(unit){
    const base = v132OldRenderUnitIntro(unit);
    if(v132IsFirstYearUnit(unit)) return base + v132MindMapHtml(unit);
    return base;
  };
})();


/* =========================================================
   V132 corrigée — 1AC : cartes mentales de chaque sous-titre
   basées sur le style visuel + instructions officielles
   Kinesthésique structuré comme 2AC : choisir notion -> compléter + glisser
========================================================= */
(function(){
  const FIRST_YEAR_UNITS = ['v124_1ac_systeme', 'v124_1ac_os'];
  function isFirstYear(unit){ return !!unit && FIRST_YEAR_UNITS.includes(unit.id); }

  const DETAIL_FR = {
    'Donnée': 'Une donnée est un élément brut : un mot, un nombre, une image ou un message avant interprétation.',
    'Information': 'Une information est une donnée qui a un sens pour l’utilisateur.',
    'Connaissance': 'Une connaissance est une information comprise et assimilée par l’élève.',
    'Message': 'Un message est une information transmise par écrit, par exemple un SMS ou un e-mail.',
    'Image': 'Une image ou un schéma est une information visuelle qui permet de comprendre rapidement une idée.',
    'Données': 'Les données sont les éléments saisis ou utilisés par l’ordinateur au début du traitement.',
    'Traitement par ordinateur': 'Le traitement par ordinateur transforme les données automatiquement grâce aux logiciels.',
    'Information produite': 'L’information produite est le résultat obtenu après le traitement des données.',
    'Utilisateur': 'L’utilisateur est la personne qui communique avec le système informatique.',
    'Interface': 'L’interface permet à l’utilisateur de communiquer avec le système informatique.',
    'Noyau fonctionnel': 'Le noyau fonctionnel réalise le traitement demandé dans le système informatique.',
    'Connexion Bluetooth': 'Le Bluetooth est une connexion sans fil à courte distance entre des appareils proches.',
    'Connexion Wi‑Fi': 'Le Wi‑Fi relie des appareils sans câble à un réseau ou à Internet.',
    'Connexion USB': 'Le câble USB relie physiquement deux appareils pour transférer des données ou recharger.',
    'Logiciel': 'Un logiciel est un programme qui permet de réaliser une tâche précise.',
    'Application': 'Une application est un logiciel utilisé par l’utilisateur pour accomplir une tâche.',
    'Système d’exploitation': 'Le système d’exploitation est un logiciel essentiel qui fait fonctionner l’appareil.',
    'Application mobile': 'Une application mobile est un logiciel léger souvent installé sur un téléphone.',
    'Windows': 'Windows est un exemple de système d’exploitation pour ordinateur.',
    'Mac OS': 'Mac OS est un exemple de système d’exploitation pour ordinateur Apple.',
    'Linux': 'Linux est un exemple de système d’exploitation.',
    'iOS': 'iOS est un système d’exploitation utilisé sur iPhone et iPad.',
    'Android': 'Android est un système d’exploitation utilisé sur plusieurs téléphones et tablettes.',
    'Exemple d’une fenêtre': 'Une fenêtre est une zone de l’écran qui affiche un programme, un dossier ou un document.',
    'Fermer une fenêtre': 'Fermer une fenêtre signifie quitter cette fenêtre à l’aide du bouton X.',
    'Agrandir une fenêtre': 'Agrandir une fenêtre signifie augmenter sa taille pour mieux voir son contenu.',
    'Réduire une fenêtre': 'Réduire une fenêtre signifie cacher temporairement la fenêtre dans la barre des tâches.',
    'Icônes': 'Les icônes sont de petites images qui représentent des programmes, des fichiers ou des dossiers.',
    'Fond d’écran': 'Le fond d’écran est l’image ou la couleur affichée en arrière-plan du bureau.',
    'Bouton Démarrer': 'Le bouton Démarrer permet d’accéder aux programmes et aux outils du système.',
    'Barre des tâches': 'La barre des tâches affiche les programmes ouverts et certains raccourcis.',
    'Zone de notification': 'La zone de notification affiche l’heure et des informations du système.'
  };
  const DETAIL_AR = {
    'Donnée': 'المعطى عنصر خام مثل كلمة أو عدد أو صورة أو رسالة قبل فهم معناها.',
    'Information': 'المعلومة هي معطى له معنى بالنسبة للمستعمل.',
    'Connaissance': 'المعرفة هي معلومة تم فهمها واستيعابها.',
    'Message': 'الرسالة معلومة مكتوبة يتم إرسالها مثل SMS أو البريد الإلكتروني.',
    'Image': 'الصورة أو الرسم معلومة بصرية تساعد على فهم فكرة بسرعة.',
    'Données': 'المعطيات هي العناصر التي يدخلها أو يستعملها الحاسوب في بداية المعالجة.',
    'Traitement par ordinateur': 'معالجة الحاسوب تحول المعطيات آليا باستعمال البرمجيات.',
    'Information produite': 'المعلومة الناتجة هي النتيجة التي نحصل عليها بعد معالجة المعطيات.',
    'Utilisateur': 'المستعمل هو الشخص الذي يتعامل مع النظام المعلوماتي.',
    'Interface': 'الواجهة تسمح للمستعمل بالتواصل مع النظام المعلوماتي.',
    'Noyau fonctionnel': 'النواة الوظيفية تنجز المعالجة داخل النظام المعلوماتي.',
    'Connexion Bluetooth': 'البلوتوث اتصال لاسلكي قصير المدى بين أجهزة قريبة.',
    'Connexion Wi‑Fi': 'الواي فاي يربط الأجهزة بالشبكة أو الإنترنت دون كابل.',
    'Connexion USB': 'كابل USB يربط جهازين ماديا لنقل المعطيات أو الشحن.',
    'Logiciel': 'البرنامج يساعد على إنجاز مهمة محددة.',
    'Application': 'التطبيق برنامج يستعمله المستخدم لإنجاز مهمة.',
    'Système d’exploitation': 'نظام التشغيل برنامج أساسي يجعل الجهاز يشتغل.',
    'Application mobile': 'التطبيق المحمول برنامج خفيف غالبا يثبت على الهاتف.',
    'Windows': 'ويندوز مثال لنظام تشغيل الحاسوب.',
    'Mac OS': 'ماك أو إس نظام تشغيل لحواسيب Apple.',
    'Linux': 'لينكس مثال لنظام تشغيل.',
    'iOS': 'iOS نظام تشغيل يستعمل في iPhone و iPad.',
    'Android': 'أندرويد نظام تشغيل يستعمل في عدة هواتف ولوحات.',
    'Exemple d’une fenêtre': 'النافذة مساحة على الشاشة تعرض برنامجا أو مجلدا أو وثيقة.',
    'Fermer une fenêtre': 'إغلاق النافذة يعني الخروج منها باستعمال زر X.',
    'Agrandir une fenêtre': 'تكبير النافذة يعني زيادة حجمها لرؤية المحتوى بوضوح.',
    'Réduire une fenêtre': 'تصغير النافذة يعني إخفاءها مؤقتا في شريط المهام.',
    'Icônes': 'الأيقونات صور صغيرة تمثل برامج أو ملفات أو مجلدات.',
    'Fond d’écran': 'خلفية الشاشة هي الصورة أو اللون الظاهر خلف عناصر المكتب.',
    'Bouton Démarrer': 'زر ابدأ يسمح بالوصول إلى البرامج وأدوات النظام.',
    'Barre des tâches': 'شريط المهام يعرض البرامج المفتوحة وبعض الاختصارات.',
    'Zone de notification': 'منطقة الإشعارات تعرض الساعة ومعلومات النظام.'
  };
  Object.keys(DETAIL_FR).forEach(k => { VISUAL_DEFINITIONS[k] = [DETAIL_FR[k], DETAIL_AR[k] || '']; });

  const LESSON_NOTIONS = {
    'Information': {
      center: 'Information',
      items: ['Donnée', 'Information', 'Connaissance', 'Message', 'Image'],
      fill: ['Une information est une donnée qui a du ____.', 'sens', ['sens','câble','bureau']],
      order: ['Donnée', 'Information', 'Connaissance', 'Message', 'Image']
    },
    'Informatique': {
      center: 'Informatique',
      items: ['Données', 'Traitement par ordinateur', 'Information produite'],
      fill: ['L’informatique traite des ____ avec l’ordinateur.', 'données', ['données','fenêtres','icônes']],
      order: ['Données', 'Traitement par ordinateur', 'Information produite']
    },
    'Système informatique': {
      center: 'Système informatique',
      items: ['Utilisateur', 'Interface', 'Noyau fonctionnel'],
      fill: ['Dans un système informatique, l’utilisateur communique avec l’____.', 'interface', ['interface','image','barre des tâches']],
      order: ['Utilisateur', 'Interface', 'Noyau fonctionnel']
    },
    'Connectivités': {
      center: 'Connectivités',
      items: ['Connexion Bluetooth', 'Connexion Wi‑Fi', 'Connexion USB'],
      fill: ['Le câble USB est une connexion avec ____.', 'câble', ['câble','image','fenêtre']],
      order: ['Connexion Bluetooth', 'Connexion Wi‑Fi', 'Connexion USB']
    },
    'Les logiciels': {
      center: 'Les logiciels',
      items: ['Logiciel', 'Application', 'Système d’exploitation', 'Application mobile'],
      fill: ['Une application est un type de ____.', 'logiciel', ['logiciel','câble','bureau']],
      order: ['Logiciel', 'Application', 'Système d’exploitation', 'Application mobile']
    },
    'Notion de système d’exploitation': {
      center: 'Notion de système d’exploitation',
      items: ['Windows', 'Mac OS', 'Linux', 'iOS', 'Android'],
      fill: ['Windows et Android sont des systèmes d’____.', 'exploitation', ['exploitation','information','image']],
      order: ['Windows', 'Mac OS', 'Linux', 'iOS', 'Android']
    },
    'Gestion des fenêtres': {
      center: 'Gestion des fenêtres',
      items: ['Exemple d’une fenêtre', 'Fermer une fenêtre', 'Agrandir une fenêtre', 'Réduire une fenêtre'],
      fill: ['Le bouton X sert à ____ une fenêtre.', 'fermer', ['fermer','agrandir','réduire']],
      order: ['Exemple d’une fenêtre', 'Fermer une fenêtre', 'Agrandir une fenêtre', 'Réduire une fenêtre']
    },
    'Organisation du poste de travail (bureau)': {
      center: 'Organisation du poste de travail',
      items: ['Icônes', 'Fond d’écran', 'Bouton Démarrer', 'Barre des tâches', 'Zone de notification'],
      fill: ['La barre des tâches se trouve généralement en ____ de l’écran.', 'bas', ['bas','haut seulement','dehors']],
      order: ['Icônes', 'Fond d’écran', 'Bouton Démarrer', 'Barre des tâches', 'Zone de notification']
    }
  };

  function patchLesson(lesson){
    const cfg = lesson && LESSON_NOTIONS[lesson.title];
    if(!cfg) return;
    lesson.visualType = 'mindmap';
    lesson.visual = { center: cfg.center, items: cfg.items.slice() };
    lesson.fill = cfg.fill;
    lesson.drag = cfg.items.map(t => [t, DETAIL_FR[t] || defFor(t)[0] || t]);
    lesson.order = { title: `Réviser : ${lesson.title}`, steps: cfg.order.slice() };
    lesson.officialObjectives = [
      `Reconnaître les notions officielles du sous-titre : ${lesson.title}.`,
      'Observer les images du style visuel et nommer les notions importantes.',
      'Expliquer chaque notion avec une phrase simple avant le contrôle.'
    ];
  }

  UNITS.filter(isFirstYear).forEach(unit => {
    (unit.lessons || []).forEach(patchLesson);
  });

  function titlesFor1AC(lesson){
    const cfg = LESSON_NOTIONS[lesson && lesson.title];
    return cfg ? cfg.items.slice() : [];
  }

  const oldV60 = v60AudioItemsForLesson;
  v60AudioItemsForLesson = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    const titles = titlesFor1AC(lesson);
    if(isFirstYear(unit) && titles.length){
      return titles.map(t => ({
        title: t,
        fr: DETAIL_FR[t] || defFor(t)[0] || t,
        ar: DETAIL_AR[t] || defFor(t)[1] || '',
        keywords: [t],
        question: `Explique la notion : ${t}`,
        answer: DETAIL_FR[t] || t
      }));
    }
    return oldV60(lesson);
  };

  function choicesFor(answer, all){
    const extras = all.filter(x => x !== answer).slice(0,2);
    return [answer, ...extras].slice(0,3);
  }

  const oldTopics = v61TopicsForLesson;
  v61TopicsForLesson = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    const titles = titlesFor1AC(lesson);
    if(isFirstYear(unit) && titles.length){
      return titles.map((t, index) => ({
        title: t,
        fr: DETAIL_FR[t] || defFor(t)[0] || t,
        ar: DETAIL_AR[t] || defFor(t)[1] || '',
        keywords: [t],
        index,
        fillSentence: `La notion à retenir est : ____.`,
        answer: t,
        choices: choicesFor(t, titles),
        drag: titles.map(n => [n, DETAIL_FR[n] || defFor(n)[0] || n])
      }));
    }
    return oldTopics(lesson);
  };
})();


/* =========================================================
   V135 — Niveau 1AC : kinesthésique redéveloppé
   - Phrases à compléter avec sens clair
   - Activité glisser : notions -> définitions significatives
   - Cartes mentales de chaque sous-titre alignées sur le style visuel
========================================================= */
(function(){
  const FIRST_YEAR_UNIT_IDS = ['v124_1ac_systeme', 'v124_1ac_os'];
  function isFirstYearUnit(unit){
    return !!unit && FIRST_YEAR_UNIT_IDS.includes(unit.id);
  }

  const LESSONS_1AC = {
    'Information': {
      center: 'Information',
      official: ['Information', 'Donnée', 'Message', 'Image'],
      notions: [
        {
          title: 'Donnée',
          def: 'Une donnée est un élément brut comme un mot, un nombre, une image ou un message avant son interprétation.',
          ar: 'المعطى عنصر خام مثل كلمة أو عدد أو صورة أو رسالة قبل تفسيره.',
          fill: 'Une donnée est un élément ____ avant d’avoir un sens clair.',
          answer: 'brut',
          choices: ['brut','connecté','fermé']
        },
        {
          title: 'Information',
          def: 'Une information est une donnée qui a un sens pour l’utilisateur.',
          ar: 'المعلومة هي معطى له معنى بالنسبة للمستعمل.',
          fill: 'Une information est une donnée qui a du ____.',
          answer: 'sens',
          choices: ['sens','câble','bureau']
        },
        {
          title: 'Connaissance',
          def: 'Une connaissance est une information comprise et assimilée.',
          ar: 'المعرفة هي معلومة تم فهمها واستيعابها.',
          fill: 'Quand une information est comprise, elle devient une ____.',
          answer: 'connaissance',
          choices: ['connaissance','connexion','fenêtre']
        },
        {
          title: 'Message',
          def: 'Un message est un type d’information transmis par écrit, par exemple un SMS.',
          ar: 'الرسالة نوع من المعلومات المكتوبة مثل رسالة SMS.',
          fill: 'Un SMS est un exemple d’information sous forme de ____.',
          answer: 'message',
          choices: ['message','logiciel','barre']
        },
        {
          title: 'Image',
          def: 'Une image est un type d’information visuelle qui peut transmettre une idée sans beaucoup de texte.',
          ar: 'الصورة نوع من المعلومات البصرية التي تنقل فكرة دون نص كثير.',
          fill: 'Une image transmet une information de façon ____.',
          answer: 'visuelle',
          choices: ['visuelle','sonore','fermée']
        }
      ]
    },
    'Informatique': {
      center: 'Informatique',
      official: ['Informatique', 'Traitement des données'],
      notions: [
        {
          title: 'Données',
          def: 'Les données sont les éléments saisis ou utilisés par l’ordinateur au début du traitement.',
          ar: 'المعطيات هي العناصر التي يدخلها أو يستعملها الحاسوب في بداية المعالجة.',
          fill: 'Les données sont les éléments que l’ordinateur reçoit au ____ du traitement.',
          answer: 'début',
          choices: ['début','hasard','milieu du câble']
        },
        {
          title: 'Traitement par ordinateur',
          def: 'Le traitement par ordinateur transforme automatiquement les données pour obtenir un résultat utile.',
          ar: 'معالجة الحاسوب تحول المعطيات آليا للحصول على نتيجة مفيدة.',
          fill: 'Le traitement par ordinateur transforme les données pour obtenir un ____.',
          answer: 'résultat',
          choices: ['résultat','bouton','mur']
        },
        {
          title: 'Information produite',
          def: 'L’information produite est le résultat compréhensible obtenu après le traitement des données.',
          ar: 'المعلومة الناتجة هي نتيجة مفهومة نحصل عليها بعد معالجة المعطيات.',
          fill: 'Après le traitement, l’ordinateur produit une information ____.',
          answer: 'utile',
          choices: ['utile','débranchée','invisible toujours']
        }
      ]
    },
    'Système informatique': {
      center: 'Système informatique',
      official: ['Système informatique', 'Utilisateur', 'Interface', 'Traitement'],
      notions: [
        {
          title: 'Utilisateur',
          def: 'L’utilisateur est la personne qui utilise le système informatique et demande une action.',
          ar: 'المستعمل هو الشخص الذي يستعمل النظام المعلوماتي ويطلب إنجاز عمل.',
          fill: 'L’utilisateur est la personne qui ____ le système informatique.',
          answer: 'utilise',
          choices: ['utilise','efface','branche toujours']
        },
        {
          title: 'Interface',
          def: 'L’interface est le moyen qui permet la communication entre l’utilisateur et le système informatique.',
          ar: 'الواجهة وسيلة تسمح بالتواصل بين المستعمل والنظام المعلوماتي.',
          fill: 'L’interface permet la communication entre l’utilisateur et le ____.',
          answer: 'système',
          choices: ['système','SMS','fond']
        },
        {
          title: 'Noyau fonctionnel',
          def: 'Le noyau fonctionnel est la partie qui réalise le traitement demandé dans le système.',
          ar: 'النواة الوظيفية هي الجزء الذي ينجز المعالجة المطلوبة داخل النظام.',
          fill: 'Le noyau fonctionnel réalise le ____ demandé.',
          answer: 'traitement',
          choices: ['traitement','message','Wi‑Fi']
        }
      ]
    },
    'Connectivités': {
      center: 'Connectivités',
      official: ['Connectivité', 'Bluetooth', 'Wi‑Fi', 'USB'],
      notions: [
        {
          title: 'Connexion Bluetooth',
          def: 'Le Bluetooth est une connexion sans fil à courte distance entre des appareils proches.',
          ar: 'البلوتوث اتصال لاسلكي قصير المدى بين أجهزة قريبة.',
          fill: 'Le Bluetooth est une connexion sans fil à courte ____.',
          answer: 'distance',
          choices: ['distance','fenêtre','image']
        },
        {
          title: 'Connexion Wi‑Fi',
          def: 'Le Wi‑Fi relie les appareils à un réseau ou à Internet sans utiliser de câble.',
          ar: 'الواي فاي يربط الأجهزة بالشبكة أو الإنترنت دون استعمال كابل.',
          fill: 'Le Wi‑Fi permet de se connecter au réseau sans ____.',
          answer: 'câble',
          choices: ['câble','logiciel','icône']
        },
        {
          title: 'Connexion USB',
          def: 'La connexion USB utilise un câble pour relier deux appareils et transférer des données ou recharger.',
          ar: 'اتصال USB يستعمل كابلا لربط جهازين ونقل المعطيات أو الشحن.',
          fill: 'La connexion USB utilise un ____ pour relier deux appareils.',
          answer: 'câble',
          choices: ['câble','nuage','fond d’écran']
        }
      ]
    },
    'Les logiciels': {
      center: 'Les logiciels',
      official: ['Logiciel', 'Application', 'Système d’exploitation'],
      notions: [
        {
          title: 'Logiciel',
          def: 'Un logiciel est un programme qui permet à l’utilisateur de réaliser une tâche précise.',
          ar: 'البرنامج يساعد المستعمل على إنجاز مهمة محددة.',
          fill: 'Un logiciel permet de réaliser une ____ précise.',
          answer: 'tâche',
          choices: ['tâche','connexion','fenêtre']
        },
        {
          title: 'Application',
          def: 'Une application est un logiciel utilisé directement par l’utilisateur ; le mot app a presque le même sens.',
          ar: 'التطبيق برنامج يستعمله المستخدم مباشرة وكلمة app لها تقريبا نفس المعنى.',
          fill: 'Une application est un type de ____.',
          answer: 'logiciel',
          choices: ['logiciel','câble','message']
        },
        {
          title: 'Système d’exploitation',
          def: 'Le système d’exploitation est un logiciel essentiel qui permet à l’appareil de fonctionner.',
          ar: 'نظام التشغيل برنامج أساسي يجعل الجهاز يشتغل.',
          fill: 'Le système d’exploitation est essentiel au ____ de l’appareil.',
          answer: 'fonctionnement',
          choices: ['fonctionnement','dessin','classement']
        },
        {
          title: 'Application mobile',
          def: 'Une application mobile est un logiciel léger souvent installé sur un téléphone.',
          ar: 'التطبيق المحمول برنامج خفيف غالبا يثبت على الهاتف.',
          fill: 'Une application mobile est souvent installée sur un ____.',
          answer: 'téléphone',
          choices: ['téléphone','clavier','bouton Démarrer']
        }
      ]
    },
    'Notion de système d’exploitation': {
      center: 'Notion de système d’exploitation',
      official: ['Système d’exploitation', 'Windows', 'Linux', 'Android'],
      notions: [
        {
          title: 'Windows',
          def: 'Windows est un système d’exploitation utilisé sur de nombreux ordinateurs.',
          ar: 'ويندوز نظام تشغيل يستعمل في العديد من الحواسيب.',
          fill: 'Windows est un système d’exploitation utilisé sur des ____.',
          answer: 'ordinateurs',
          choices: ['ordinateurs','SMS','images']
        },
        {
          title: 'Mac OS',
          def: 'Mac OS est un système d’exploitation utilisé sur les ordinateurs Apple.',
          ar: 'ماك أو إس نظام تشغيل يستعمل في حواسيب Apple.',
          fill: 'Mac OS est utilisé sur les ordinateurs ____.',
          answer: 'Apple',
          choices: ['Apple','Android','USB']
        },
        {
          title: 'Linux',
          def: 'Linux est un système d’exploitation utilisé sur certains ordinateurs et serveurs.',
          ar: 'لينكس نظام تشغيل يستعمل في بعض الحواسيب والخوادم.',
          fill: 'Linux est aussi un système d’____.',
          answer: 'exploitation',
          choices: ['exploitation','information','image']
        },
        {
          title: 'iOS',
          def: 'iOS est un système d’exploitation utilisé sur les appareils mobiles Apple.',
          ar: 'iOS نظام تشغيل يستعمل في أجهزة Apple المحمولة.',
          fill: 'iOS est utilisé sur des appareils mobiles ____.',
          answer: 'Apple',
          choices: ['Apple','Windows','USB']
        },
        {
          title: 'Android',
          def: 'Android est un système d’exploitation utilisé sur plusieurs téléphones et tablettes.',
          ar: 'أندرويد نظام تشغيل يستعمل في عدة هواتف ولوحات.',
          fill: 'Android est souvent utilisé sur les téléphones et les ____.',
          answer: 'tablettes',
          choices: ['tablettes','fenêtres','messages']
        }
      ]
    },
    'Gestion des fenêtres': {
      center: 'Gestion des fenêtres',
      official: ['Fenêtre', 'Fermer', 'Agrandir', 'Réduire'],
      notions: [
        {
          title: 'Exemple d’une fenêtre',
          def: 'Une fenêtre est une zone de l’écran qui affiche un programme, un dossier ou un document.',
          ar: 'النافذة مساحة على الشاشة تعرض برنامجا أو مجلدا أو وثيقة.',
          fill: 'Une fenêtre affiche un programme, un dossier ou un ____.',
          answer: 'document',
          choices: ['document','câble','Wi‑Fi']
        },
        {
          title: 'Fermer une fenêtre',
          def: 'Fermer une fenêtre signifie quitter cette fenêtre avec le bouton X.',
          ar: 'إغلاق النافذة يعني الخروج منها باستعمال زر X.',
          fill: 'Le bouton X permet de ____ une fenêtre.',
          answer: 'fermer',
          choices: ['fermer','agrandir','réduire']
        },
        {
          title: 'Agrandir une fenêtre',
          def: 'Agrandir une fenêtre signifie augmenter sa taille pour mieux voir son contenu.',
          ar: 'تكبير النافذة يعني زيادة حجمها لرؤية المحتوى بوضوح.',
          fill: 'Agrandir une fenêtre permet de mieux voir son ____.',
          answer: 'contenu',
          choices: ['contenu','message SMS','câble']
        },
        {
          title: 'Réduire une fenêtre',
          def: 'Réduire une fenêtre signifie la cacher temporairement dans la barre des tâches sans la fermer.',
          ar: 'تصغير النافذة يعني إخفاءها مؤقتا في شريط المهام دون إغلاقها.',
          fill: 'Réduire une fenêtre la cache dans la barre des ____.',
          answer: 'tâches',
          choices: ['tâches','données','images']
        }
      ]
    },
    'Organisation du poste de travail (bureau)': {
      center: 'Organisation du poste de travail',
      official: ['Bureau', 'Icônes', 'Barre des tâches'],
      notions: [
        {
          title: 'Icônes',
          def: 'Les icônes sont de petites images qui représentent des programmes, des fichiers ou des dossiers.',
          ar: 'الأيقونات صور صغيرة تمثل برامج أو ملفات أو مجلدات.',
          fill: 'Les icônes représentent des programmes, des fichiers ou des ____.',
          answer: 'dossiers',
          choices: ['dossiers','SMS','câbles']
        },
        {
          title: 'Fond d’écran',
          def: 'Le fond d’écran est l’image ou la couleur affichée en arrière-plan du bureau.',
          ar: 'خلفية الشاشة هي الصورة أو اللون الظاهر خلف عناصر المكتب.',
          fill: 'Le fond d’écran est affiché en arrière-plan du ____.',
          answer: 'bureau',
          choices: ['bureau','message','logiciel']
        },
        {
          title: 'Bouton Démarrer',
          def: 'Le bouton Démarrer permet d’accéder aux programmes et aux outils du système.',
          ar: 'زر ابدأ يسمح بالوصول إلى البرامج وأدوات النظام.',
          fill: 'Le bouton Démarrer permet d’accéder aux ____.',
          answer: 'programmes',
          choices: ['programmes','images seulement','câbles']
        },
        {
          title: 'Barre des tâches',
          def: 'La barre des tâches affiche les programmes ouverts et certains raccourcis.',
          ar: 'شريط المهام يعرض البرامج المفتوحة وبعض الاختصارات.',
          fill: 'La barre des tâches affiche les programmes ____.',
          answer: 'ouverts',
          choices: ['ouverts','effacés','débranchés']
        },
        {
          title: 'Zone de notification',
          def: 'La zone de notification affiche l’heure et des informations du système.',
          ar: 'منطقة الإشعارات تعرض الساعة ومعلومات النظام.',
          fill: 'La zone de notification affiche l’heure et des informations du ____.',
          answer: 'système',
          choices: ['système','message','clavier']
        }
      ]
    }
  };

  Object.values(LESSONS_1AC).forEach(cfg => {
    cfg.notions.forEach(n => {
      VISUAL_DEFINITIONS[n.title] = [n.def, n.ar];
    });
  });

  function lessonCfg(lesson){
    return lesson && LESSONS_1AC[lesson.title];
  }

  function applyToLesson(lesson){
    const cfg = lessonCfg(lesson);
    if(!cfg) return;
    lesson.visualType = 'mindmap';
    lesson.visual = { center: cfg.center, items: cfg.notions.map(n => n.title) };
    lesson.officialObjectives = [
      `Repérer les notions du style visuel liées à : ${lesson.title}.`,
      'Expliquer chaque notion avec une phrase simple.',
      'Réinvestir les mêmes notions dans les activités kinesthésiques.'
    ];
    lesson.fill = [cfg.notions[0].fill, cfg.notions[0].answer, cfg.notions[0].choices];
    lesson.drag = cfg.notions.map(n => [n.title, n.def]);
    lesson.order = { title: `Réviser : ${lesson.title}`, steps: cfg.notions.map(n => n.title) };
  }

  UNITS.filter(isFirstYearUnit).forEach(unit => {
    (unit.lessons || []).forEach(applyToLesson);
  });

  const oldAudio = v60AudioItemsForLesson;
  v60AudioItemsForLesson = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    const cfg = lessonCfg(lesson);
    if(isFirstYearUnit(unit) && cfg){
      return cfg.notions.map(n => ({
        title: n.title,
        fr: n.def,
        ar: n.ar,
        keywords: [n.title],
        question: `Explique : ${n.title}`,
        answer: n.def
      }));
    }
    return oldAudio(lesson);
  };

  const oldTopics = v61TopicsForLesson;
  v61TopicsForLesson = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    const cfg = lessonCfg(lesson);
    if(isFirstYearUnit(unit) && cfg){
      const allDrag = cfg.notions.map(n => [n.title, n.def]);
      return cfg.notions.map((n, index) => ({
        title: n.title,
        fr: n.def,
        ar: n.ar,
        keywords: [n.title],
        index,
        fillSentence: n.fill,
        answer: n.answer,
        choices: n.choices,
        drag: allDrag
      }));
    }
    return oldTopics(lesson);
  };
})();


/* =========================================================
   V136 — 1ère année collégiale : suppression de l’ancien
   contenu auditif / kinesthésique / carte mentale et
   recréation à partir des idées des images du style visuel
   et des objectifs de chaque sous-titre
========================================================= */
(function(){
  const FIRST_YEAR_IDS_V136 = ['v124_1ac_systeme', 'v124_1ac_os'];
  function v136IsFirstYear(unit){
    return !!unit && FIRST_YEAR_IDS_V136.includes(unit.id);
  }

  const V136_DATA = {
    'Information': {
      objective: 'Comprendre qu’une information peut venir d’une donnée qui reçoit un sens, et reconnaître quelques types d’information visibles : message et image.',
      center: 'Information',
      branches: [
        {
          image: 'Donnée → Information → Connaissance',
          idea: 'La première image montre le passage progressif : une donnée devient une information quand elle prend un sens, puis devient une connaissance quand elle est comprise.',
          notions: [
            {title:'Donnée', def:'Élément brut avant interprétation, comme un nombre, un mot, une image ou un message.', fill:'Une donnée est un élément ____ avant d’être comprise.', answer:'brut', choices:['brut','connecté','fermé']},
            {title:'Information', def:'Donnée qui a un sens pour celui qui la reçoit.', fill:'Une donnée devient une information quand elle reçoit un ____.', answer:'sens', choices:['sens','câble','bouton']},
            {title:'Connaissance', def:'Information comprise et assimilée par l’élève.', fill:'Une information comprise devient une ____.', answer:'connaissance', choices:['connaissance','fenêtre','connexion']}
          ]
        },
        {
          image: 'Type d’information : message',
          idea: 'L’image du SMS montre qu’un message écrit est un type d’information.',
          notions: [
            {title:'Message', def:'Information transmise par écrit, par exemple un SMS, un e-mail ou un message WhatsApp.', fill:'Un SMS est un exemple d’information sous forme de ____.', answer:'message', choices:['message','logiciel','bureau']}
          ]
        },
        {
          image: 'Type d’information : image',
          idea: 'L’image du schéma montre qu’une image peut transmettre une information visuelle.',
          notions: [
            {title:'Image', def:'Information visuelle qui transmet une idée ou une situation sans utiliser beaucoup de texte.', fill:'Une image transmet une information de manière ____.', answer:'visuelle', choices:['visuelle','sonore','fermée']}
          ]
        }
      ]
    },
    'Informatique': {
      objective: 'Expliquer que l’informatique consiste à traiter automatiquement des données par l’ordinateur pour obtenir des informations utiles.',
      center: 'Informatique',
      branches: [
        {
          image: 'Traitement des données par l’ordinateur',
          idea: 'L’image montre l’ordinateur comme outil de traitement : il reçoit des données, les traite, puis produit une information exploitable.',
          notions: [
            {title:'Données', def:'Éléments de départ saisis ou utilisés par l’ordinateur.', fill:'Les données sont les éléments de ____ du traitement.', answer:'départ', choices:['départ','fenêtre','souris']},
            {title:'Traitement automatique', def:'Transformation des données réalisée par l’ordinateur à l’aide de logiciels.', fill:'L’ordinateur réalise un traitement ____ des données.', answer:'automatique', choices:['automatique','manuel seulement','invisible']},
            {title:'Information produite', def:'Résultat utile obtenu après le traitement des données.', fill:'Après le traitement, on obtient une information ____.', answer:'utile', choices:['utile','débranchée','vide']}
          ]
        }
      ]
    },
    'Système informatique': {
      objective: 'Identifier les éléments qui permettent à l’utilisateur de communiquer avec le système informatique et d’obtenir un traitement.',
      center: 'Système informatique',
      branches: [
        {
          image: 'Utilisateur, interface et noyau fonctionnel',
          idea: 'L’image montre que le système informatique relie l’utilisateur à l’interface puis au noyau fonctionnel qui réalise le traitement.',
          notions: [
            {title:'Utilisateur', def:'Personne qui utilise le système informatique et demande une action.', fill:'L’utilisateur est la personne qui ____ le système informatique.', answer:'utilise', choices:['utilise','efface','imprime toujours']},
            {title:'Interface', def:'Moyen de communication entre l’utilisateur et le système informatique.', fill:'L’interface permet la communication entre l’utilisateur et le ____.', answer:'système', choices:['système','SMS','fond']},
            {title:'Noyau fonctionnel', def:'Partie qui réalise le traitement demandé dans le système.', fill:'Le noyau fonctionnel réalise le ____ demandé.', answer:'traitement', choices:['traitement','message','Wi‑Fi']}
          ]
        }
      ]
    },
    'Connectivités': {
      objective: 'Reconnaître les principaux moyens de connexion entre les appareils : Bluetooth, Wi‑Fi et câble USB.',
      center: 'Connectivités',
      branches: [
        {
          image: 'Connexion par Bluetooth',
          idea: 'L’image Bluetooth montre une connexion sans fil à courte distance entre des appareils proches.',
          notions: [
            {title:'Bluetooth', def:'Connexion sans fil à courte distance entre des appareils proches.', fill:'Le Bluetooth est une connexion sans fil à courte ____.', answer:'distance', choices:['distance','fenêtre','image']}
          ]
        },
        {
          image: 'Connexion par Wi‑Fi',
          idea: 'L’image Wi‑Fi montre une connexion sans fil qui relie des appareils à un réseau ou à Internet.',
          notions: [
            {title:'Wi‑Fi', def:'Connexion sans fil qui relie des appareils au réseau ou à Internet.', fill:'Le Wi‑Fi connecte les appareils au réseau sans ____.', answer:'câble', choices:['câble','logiciel','image']}
          ]
        },
        {
          image: 'Connexion par câble USB',
          idea: 'L’image USB montre une connexion avec câble entre deux appareils pour transférer des données ou recharger.',
          notions: [
            {title:'USB', def:'Connexion par câble utilisée pour relier deux appareils, transférer des données ou recharger.', fill:'La connexion USB utilise un ____ pour relier deux appareils.', answer:'câble', choices:['câble','nuage','fond d’écran']}
          ]
        }
      ]
    },
    'Les logiciels': {
      objective: 'Distinguer logiciel, application, système d’exploitation et application mobile à partir des images proposées.',
      center: 'Les logiciels',
      branches: [
        {
          image: 'Logiciels et applications',
          idea: 'L’image des icônes montre que les logiciels ou applications servent à accomplir des tâches précises.',
          notions: [
            {title:'Logiciel', def:'Programme qui permet de réaliser une tâche précise.', fill:'Un logiciel permet de réaliser une ____ précise.', answer:'tâche', choices:['tâche','connexion','fenêtre']},
            {title:'Application', def:'Logiciel utilisé directement par l’utilisateur ; le mot app a presque le même sens.', fill:'Une application est un type de ____.', answer:'logiciel', choices:['logiciel','câble','message']}
          ]
        },
        {
          image: 'Systèmes d’exploitation essentiels',
          idea: 'L’image des systèmes d’exploitation montre qu’ils sont essentiels au fonctionnement de l’ordinateur ou du téléphone.',
          notions: [
            {title:'Système d’exploitation', def:'Logiciel essentiel qui permet à l’appareil de fonctionner et de lancer les autres logiciels.', fill:'Le système d’exploitation est essentiel au ____ de l’appareil.', answer:'fonctionnement', choices:['fonctionnement','dessin','classement']}
          ]
        },
        {
          image: 'Application mobile',
          idea: 'L’image du téléphone montre qu’une application mobile est un logiciel léger installé sur un téléphone.',
          notions: [
            {title:'Application mobile', def:'Logiciel léger souvent installé sur un téléphone pour réaliser une tâche précise.', fill:'Une application mobile est souvent installée sur un ____.', answer:'téléphone', choices:['téléphone','clavier','bouton']}
          ]
        }
      ]
    },
    'Notion de système d’exploitation': {
      objective: 'Reconnaître le système d’exploitation comme logiciel principal de l’appareil et citer des exemples.',
      center: 'Système d’exploitation',
      branches: [
        {
          image: 'Exemples de systèmes d’exploitation',
          idea: 'L’image présente plusieurs systèmes d’exploitation : Windows, Mac OS, Linux, iOS et Android.',
          notions: [
            {title:'Windows', def:'Système d’exploitation utilisé sur de nombreux ordinateurs.', fill:'Windows est un système d’exploitation utilisé sur des ____.', answer:'ordinateurs', choices:['ordinateurs','SMS','images']},
            {title:'Mac OS', def:'Système d’exploitation utilisé sur les ordinateurs Apple.', fill:'Mac OS est utilisé sur les ordinateurs ____.', answer:'Apple', choices:['Apple','Android','USB']},
            {title:'Linux', def:'Système d’exploitation utilisé sur certains ordinateurs et serveurs.', fill:'Linux est aussi un système d’____.', answer:'exploitation', choices:['exploitation','information','image']},
            {title:'iOS', def:'Système d’exploitation utilisé sur les appareils mobiles Apple.', fill:'iOS est utilisé sur des appareils mobiles ____.', answer:'Apple', choices:['Apple','Windows','USB']},
            {title:'Android', def:'Système d’exploitation utilisé sur plusieurs téléphones et tablettes.', fill:'Android est souvent utilisé sur les téléphones et les ____.', answer:'tablettes', choices:['tablettes','fenêtres','messages']}
          ]
        }
      ]
    },
    'Gestion des fenêtres': {
      objective: 'Identifier une fenêtre et manipuler ses boutons principaux : fermer, agrandir et réduire.',
      center: 'Gestion des fenêtres',
      branches: [
        {
          image: 'Exemple d’une fenêtre',
          idea: 'La première image montre une fenêtre comme zone qui affiche un programme, un dossier ou un document.',
          notions: [
            {title:'Fenêtre', def:'Zone de l’écran qui affiche un programme, un dossier ou un document.', fill:'Une fenêtre affiche un programme, un dossier ou un ____.', answer:'document', choices:['document','câble','Wi‑Fi']}
          ]
        },
        {
          image: 'Fermer une fenêtre',
          idea: 'L’image du bouton X montre l’action fermer.',
          notions: [
            {title:'Fermer', def:'Action qui permet de quitter la fenêtre avec le bouton X.', fill:'Le bouton X permet de ____ une fenêtre.', answer:'fermer', choices:['fermer','agrandir','réduire']}
          ]
        },
        {
          image: 'Agrandir une fenêtre',
          idea: 'L’image du bouton carré montre l’action agrandir pour mieux voir le contenu.',
          notions: [
            {title:'Agrandir', def:'Action qui augmente la taille de la fenêtre pour mieux voir son contenu.', fill:'Agrandir une fenêtre permet de mieux voir son ____.', answer:'contenu', choices:['contenu','message SMS','câble']}
          ]
        },
        {
          image: 'Réduire une fenêtre',
          idea: 'L’image du bouton réduire montre que la fenêtre est cachée temporairement dans la barre des tâches.',
          notions: [
            {title:'Réduire', def:'Action qui cache temporairement une fenêtre dans la barre des tâches sans la fermer.', fill:'Réduire une fenêtre la cache dans la barre des ____.', answer:'tâches', choices:['tâches','données','images']}
          ]
        }
      ]
    },
    'Organisation du poste de travail (bureau)': {
      objective: 'Reconnaître les éléments du bureau : icônes, fond d’écran, bouton Démarrer, barre des tâches et zone de notification.',
      center: 'Poste de travail',
      branches: [
        {
          image: 'Bureau Windows',
          idea: 'L’image du bureau montre les éléments essentiels du poste de travail.',
          notions: [
            {title:'Icônes', def:'Petites images qui représentent des programmes, des fichiers ou des dossiers.', fill:'Les icônes représentent des programmes, des fichiers ou des ____.', answer:'dossiers', choices:['dossiers','SMS','câbles']},
            {title:'Fond d’écran', def:'Image ou couleur affichée en arrière-plan du bureau.', fill:'Le fond d’écran est affiché en arrière-plan du ____.', answer:'bureau', choices:['bureau','message','logiciel']},
            {title:'Bouton Démarrer', def:'Bouton qui permet d’accéder aux programmes et aux outils du système.', fill:'Le bouton Démarrer permet d’accéder aux ____.', answer:'programmes', choices:['programmes','images seulement','câbles']},
            {title:'Barre des tâches', def:'Zone qui affiche les programmes ouverts et certains raccourcis.', fill:'La barre des tâches affiche les programmes ____.', answer:'ouverts', choices:['ouverts','effacés','débranchés']},
            {title:'Zone de notification', def:'Zone qui affiche l’heure et certaines informations du système.', fill:'La zone de notification affiche l’heure et des informations du ____.', answer:'système', choices:['système','message','clavier']}
          ]
        }
      ]
    }
  };

  function dataFor(lesson){ return lesson && V136_DATA[lesson.title]; }
  function flatNotions(data){ return data.branches.flatMap(b => b.notions); }

  Object.values(V136_DATA).forEach(d => flatNotions(d).forEach(n => {
    VISUAL_DEFINITIONS[n.title] = [n.def, ''];
  }));

  UNITS.filter(v136IsFirstYear).forEach(unit => {
    (unit.lessons || []).forEach(lesson => {
      const d = dataFor(lesson);
      if(!d) return;
      lesson.visualType = 'mindmap';
      lesson.visual = { center: d.center, items: flatNotions(d).map(n => n.title) };
      lesson.fr = d.objective + ' ' + flatNotions(d).map(n => `${n.title} : ${n.def}`).join(' ');
      lesson.fill = [flatNotions(d)[0].fill, flatNotions(d)[0].answer, flatNotions(d)[0].choices];
      lesson.drag = flatNotions(d).map(n => [n.title, n.def]);
      lesson.order = { title: `Réviser : ${lesson.title}`, steps: flatNotions(d).map(n => n.title) };
    });
  });

  function choicesButtons(choices, answer){
    return (choices || []).map(c => `<button class="choice" data-fill-choice="${esc(c)}" data-answer="${esc(answer)}">${esc(c)}</button>`).join('');
  }

  function v136MindMap(d){
    const branches = d.branches.map((b,i) => `
      <article class="v136-map-branch v136-color-${i%4}">
        <h4>${esc(b.image)}</h4>
        <p>${esc(b.idea)}</p>
        <ul>${b.notions.map(n => `<li><strong>${esc(n.title)}</strong><span>${esc(n.def)}</span></li>`).join('')}</ul>
      </article>`).join('');
    return `<article class="v136-mindmap">
      <div class="v136-center">${esc(d.center)}</div>
      <div class="v136-branches">${branches}</div>
    </article>`;
  }

  function v136VisualPanel(lesson){
    const d = dataFor(lesson);
    const media = visualMediaForLesson(lesson);
    const gallery = media.length
      ? media.map((m,i)=>tableurInteractiveVisualCard(m, i, lesson)).join('')
      : '';
    const objectives = `
      <article class="v136-objective-card">
        <span class="mini-pill">Objectif du sous-titre</span>
        <p>${esc(d.objective)}</p>
      </article>`;
    return `<section class="panel visual-panel v136-visual-panel">
      <div class="style-header">
        <div><span class="mini-pill">Style visuel</span><h3>${esc(lesson.title)}</h3></div>
        <p class="subtle">Les notions ci-dessous sont construites uniquement à partir des images affichées et de l’objectif du sous-titre.</p>
      </div>
      ${objectives}
      <div class="visual-gallery image-only-grid clickable-visual-grid">${gallery}</div>
      <section class="v136-map-section">
        <div class="v136-map-head"><span class="mini-pill">Carte mentale reconstruite</span><h3>Notions à retenir avant l’évaluation</h3></div>
        ${v136MindMap(d)}
      </section>
    </section>`;
  }

  const oldVisualPanel = visualPanel;
  visualPanel = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    if(v136IsFirstYear(unit) && dataFor(lesson)) return v136VisualPanel(lesson);
    return oldVisualPanel(lesson);
  };

  const oldAudioItems = v60AudioItemsForLesson;
  v60AudioItemsForLesson = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    const d = dataFor(lesson);
    if(v136IsFirstYear(unit) && d){
      return flatNotions(d).map(n => ({
        title: n.title,
        fr: n.def,
        ar: '',
        keywords: [n.title],
        question: `Explique : ${n.title}`,
        answer: n.def
      }));
    }
    return oldAudioItems(lesson);
  };

  const oldTopics = v61TopicsForLesson;
  v61TopicsForLesson = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    const d = dataFor(lesson);
    if(v136IsFirstYear(unit) && d){
      const notions = flatNotions(d);
      const drag = notions.map(n => [n.title, n.def]);
      return notions.map((n,index) => ({
        title: n.title,
        fr: n.def,
        ar: '',
        keywords: [n.title],
        index,
        fillSentence: n.fill,
        answer: n.answer,
        choices: n.choices,
        drag
      }));
    }
    return oldTopics(lesson);
  };

  const oldAudioPanel = audioPanel;
  audioPanel = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    const d = dataFor(lesson);
    if(!v136IsFirstYear(unit) || !d) return oldAudioPanel(lesson);
    const items = flatNotions(d);
    const buttons = items.map((n,i)=>`<button type="button" class="v61-subtitle-btn ${i===0?'suggested':''}" data-v61-audio-topic="${i}"><span>${i+1}</span>${esc(n.title)}<b>›</b></button>`).join('');
    return `<section class="panel audio-card v61-panel v136-audio-panel">
      <div class="style-header"><div><span class="mini-pill">Style auditif</span><h3>Écouter les notions liées aux images — ${esc(lesson.title)}</h3></div><p class="subtle">Chaque notion reprend directement une idée visible dans les images du style visuel et l’objectif du sous-titre.</p></div>
      <div class="v136-audio-objective"><strong>Objectif :</strong> ${esc(d.objective)}</div>
      <div class="v61-subtitle-list">${buttons}</div>
      <div id="voiceWarning" class="voice-warning">La voix arabe n’est pas disponible dans ce navigateur.</div>
      <div class="v61-selected-content" data-v61-audio-content><div class="v61-empty-state">Choisir une notion pour afficher son explication.</div></div>
    </section>`;
  };

  const oldKinePanel = kinePanel;
  kinePanel = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    const d = dataFor(lesson);
    if(!v136IsFirstYear(unit) || !d) return oldKinePanel(lesson);
    const items = flatNotions(d);
    const buttons = items.map((n,i)=>`<button type="button" class="v61-subtitle-btn ${i===0?'suggested':''}" data-v61-kine-topic="${i}"><span>${i+1}</span>${esc(n.title)}<b>›</b></button>`).join('');
    return `<section class="panel kine-panel v61-panel v136-kine-panel">
      <div class="style-header clean-style-header"><div><span class="mini-pill">Style kinesthésique</span><h3>Activités liées aux images — ${esc(lesson.title)}</h3></div><p class="subtle">Choisis une notion : tu trouveras une phrase à compléter qui a un sens, puis une activité de glisser vers la bonne définition.</p></div>
      <div class="v136-audio-objective"><strong>Objectif :</strong> ${esc(d.objective)}</div>
      <div class="v61-subtitle-list">${buttons}</div>
      <div class="v61-selected-content" data-v61-kine-content><div class="v61-empty-state">Choisir une notion pour commencer les activités.</div></div>
    </section>`;
  };
})();


/* =========================================================
   V137 — 1AC : carte mentale cliquable comme les unités de 2AC
   en gardant le contenu déjà reconstruit dans v136
========================================================= */
(function(){
  const V137_FIRST_YEAR_IDS = ['v124_1ac_systeme', 'v124_1ac_os'];
  function v137IsFirstYear(unit){
    return !!unit && V137_FIRST_YEAR_IDS.includes(unit.id);
  }
  function v137LessonObjective(lesson){
    if(Array.isArray(lesson.officialObjectives) && lesson.officialObjectives.length) return lesson.officialObjectives[0];
    return lesson.objective || '';
  }
  function v137MindMapData(lesson){
    const titles = Array.isArray(lesson?.visual?.items) ? lesson.visual.items.slice(0,6) : [];
    const dragMap = new Map((lesson.drag||[]).map(pair => [pair[0], pair[1]]));
    const nodes = titles.map(t => ({
      title: t,
      text: dragMap.get(t) || (defFor(t)[0] || 'Notion importante du sous-titre.'),
      ar: defFor(t)[1] || ''
    }));
    return {
      root: lesson?.visual?.center || lesson?.title || 'Carte mentale',
      objective: v137LessonObjective(lesson),
      nodes
    };
  }
  function v137Coords(count){
    const sets = {
      1:[[50,18]],
      2:[[25,30],[75,30]],
      3:[[50,18],[24,68],[76,68]],
      4:[[50,16],[80,35],[68,78],[20,40]],
      5:[[50,13],[82,33],[70,78],[30,78],[18,33]],
      6:[[50,12],[82,25],[80,72],[50,88],[18,72],[18,25]]
    };
    return sets[Math.max(1, Math.min(6, count))] || sets[5];
  }
  function v137RenderClickableMindMap(lesson){
    const data = v137MindMapData(lesson);
    if(!data.nodes.length) return '';
    const coords = v137Coords(data.nodes.length);
    const first = data.nodes[0];
    const lines = data.nodes.map((_, i)=>`<line x1="50" y1="50" x2="${coords[i][0]}" y2="${coords[i][1]}" />`).join('');
    const circles = data.nodes.map((n, i)=>`
      <button type="button" class="v137-map-circle v91-map-circle v91-circle-${i}" style="--x:${coords[i][0]}%;--y:${coords[i][1]}%;" data-v137-node="${esc(n.title)}" data-v137-fr="${esc(n.text)}" data-v137-ar="${esc(n.ar)}">
        <strong>${esc(n.title)}</strong>
        <span>${esc(n.text)}</span>
      </button>`).join('');
    return `<section class="panel v91-mindmap-panel v137-mindmap-panel">
      <div class="v91-map-intro v137-map-intro">
        <span class="mini-pill">Carte mentale du sous-titre</span>
        <h3>${esc(data.root)}</h3>
        <p>Structure identique aux unités de 2ème année collégiale. Clique sur la racine pour ouvrir la carte, puis clique sur une notion pour lire son explication.</p>
      </div>
      <div class="v136-audio-objective"><strong>Objectif :</strong> ${esc(data.objective)}</div>
      <button type="button" class="v91-root-toggle" data-v91-root="1" aria-expanded="false">
        <span>Cliquer sur la racine</span>${esc(data.root)}
      </button>
      <div class="v91-radial-wrap v137-radial-wrap" data-v91-map hidden>
        <svg class="v91-map-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>
        <div class="v91-map-center">${esc(data.root)}</div>
        ${circles}
      </div>
      <div class="definition-box v137-definition-box" data-v137-definition>
        <h4>${esc(first.title)}</h4>
        <p>${esc(first.text)}</p>
        ${first.ar ? `<p class="ar">${esc(first.ar)}</p>` : ''}
      </div>
    </section>`;
  }

  const v137PrevVisualPanel = visualPanel;
  visualPanel = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    if(!v137IsFirstYear(unit)) return v137PrevVisualPanel(lesson);
    const html = v137PrevVisualPanel(lesson);
    return html.replace(/<section class="v136-map-section">[\s\S]*?<\/section>\s*<\/section>$/m, `${v137RenderClickableMindMap(lesson)}</section>`);
  };
})();


/* =========================================================
   V138 — 1AC : carte mentale type fils / petits-fils
   Chaque clic sur un fil principal affiche un petit-fils (exemple)
========================================================= */
(function(){
  const V138_FIRST_YEAR_IDS = ['v124_1ac_systeme', 'v124_1ac_os'];
  function v138IsFirstYear(unit){ return !!unit && V138_FIRST_YEAR_IDS.includes(unit.id); }
  const V138_EXAMPLES = {
    'Donnée': ['Exemple : le nombre 15 ou le mot « Bonjour ».'],
    'Information': ['Exemple : « 15 élèves sont présents ».'],
    'Connaissance': ['Exemple : comprendre que la classe est presque complète.'],
    'Message': ['Exemple : un SMS envoyé par téléphone.'],
    'Image': ['Exemple : un schéma de réseau entre ordinateurs.'],
    'Données': ['Exemple : des notes saisies dans un tableau.'],
    'Traitement automatique': ['Exemple : l’ordinateur calcule la moyenne.'],
    'Information produite': ['Exemple : un résultat, un tableau ou un graphique.'],
    'Utilisateur': ['Exemple : l’élève qui utilise l’ordinateur.'],
    'Interface': ['Exemple : l’écran ou la zone de commande.'],
    'Noyau fonctionnel': ['Exemple : la partie qui exécute le traitement demandé.'],
    'Bluetooth': ['Exemple : connecter un casque ou un téléphone sans câble.'],
    'Wi‑Fi': ['Exemple : connecter un ordinateur à Internet sans fil.'],
    'USB': ['Exemple : relier un téléphone à un ordinateur avec un câble USB.'],
    'Logiciel': ['Exemple : Word, Excel ou Google Docs.'],
    'Application': ['Exemple : Gmail, WhatsApp ou Google Maps.'],
    'Système d’exploitation': ['Exemple : Windows, Android ou Linux.'],
    'Application mobile': ['Exemple : une application installée sur le téléphone.'],
    'Windows': ['Exemple : Windows 10 ou Windows 11.'],
    'Mac OS': ['Exemple : système utilisé sur les ordinateurs Apple.'],
    'Linux': ['Exemple : système utilisé sur certains ordinateurs et serveurs.'],
    'iOS': ['Exemple : système utilisé sur iPhone.'],
    'Android': ['Exemple : système utilisé sur plusieurs téléphones.'],
    'Fenêtre': ['Exemple : la fenêtre de l’explorateur de fichiers.'],
    'Fermer': ['Exemple : cliquer sur le bouton X.'],
    'Agrandir': ['Exemple : cliquer sur le bouton carré pour mieux voir le contenu.'],
    'Réduire': ['Exemple : envoyer la fenêtre dans la barre des tâches.'],
    'Icônes': ['Exemple : l’icône de la corbeille ou du navigateur.'],
    'Fond d’écran': ['Exemple : l’image affichée derrière les icônes.'],
    'Bouton Démarrer': ['Exemple : ouvrir la liste des programmes.'],
    'Barre des tâches': ['Exemple : voir les programmes ouverts en bas de l’écran.'],
    'Zone de notification': ['Exemple : afficher l’heure ou le volume.']
  };

  function v138NodeExamples(title){
    return V138_EXAMPLES[title] || ['Exemple lié à l’image du cours.'];
  }
  function v138MindMapData(lesson){
    const titles = Array.isArray(lesson?.visual?.items) ? lesson.visual.items.slice(0,5) : [];
    const dragMap = new Map((lesson.drag || []).map(pair => [pair[0], pair[1]]));
    const nodes = titles.map(t => ({
      title: t,
      text: dragMap.get(t) || defFor(t)[0] || 'Notion importante du sous-titre.',
      examples: v138NodeExamples(t)
    }));
    return {
      root: lesson?.visual?.center || lesson?.title || 'Carte mentale',
      objective: lesson?.objective || '',
      nodes
    };
  }
  function v138RenderMap(lesson){
    const data = v138MindMapData(lesson);
    const branchSpecs = [
      {cls:'left-top', px:285, py:175, cx:[110,110,110], cy:[110,175,240], lineParent:[500,370,315,195]},
      {cls:'left-bottom', px:275, py:465, cx:[105,105,105], cy:[390,455,520], lineParent:[500,370,305,455]},
      {cls:'right-top', px:725, py:170, cx:[890,890,890], cy:[110,175,240], lineParent:[500,370,695,190]},
      {cls:'right-bottom', px:735, py:470, cx:[900,900,900], cy:[395,460,525], lineParent:[500,370,705,460]},
      {cls:'bottom-center', px:500, py:615, cx:[500,500,500], cy:[680,730,780], lineParent:[500,400,500,585]}
    ];
    const colorNames = ['pink','purple','green','cyan','orange'];
    const svgLines = [];
    const branches = data.nodes.slice(0,5).map((node, index)=>{
      const spec = branchSpecs[index] || branchSpecs[branchSpecs.length-1];
      const examples = Array.isArray(node.examples) ? node.examples.slice(0,3) : [];
      const [x1,y1,x2,y2] = spec.lineParent;
      svgLines.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" marker-end="url(#v98Arrow)" class="main color-${index % 5}" />`);
      examples.forEach((example, i)=>{
        const ex = spec.cx[i] || spec.cx[spec.cx.length-1];
        const ey = spec.cy[i] || (spec.py + 65 + i*60);
        svgLines.push(`<line x1="${spec.px}" y1="${spec.py}" x2="${ex}" y2="${ey}" marker-end="url(#v98Arrow)" class="child color-${index % 5}" data-branch-line="${index}" />`);
      });
      return `<article class="v98-branch v138-branch v98-${spec.cls} v98-${colorNames[index % 5]}" data-v98-wrap="${index}">
        <button type="button" class="v98-parent-node v138-parent-node" data-v98-branch="${index}" aria-expanded="false">
          <strong>${esc(node.title)}</strong>
          <span>${esc(node.text)}</span>
        </button>
        ${examples.length ? `<div class="v98-children-wrap v138-children-wrap" hidden>
          ${examples.map(example => `<div class="v98-child-node v138-child-node">${esc(example)}</div>`).join('')}
        </div>` : ''}
      </article>`;
    }).join('');
    return `<section class="panel v98-mindmap-panel v138-mindmap-panel">
      <div class="v98-mindmap-head v138-mindmap-head">
        <span class="mini-pill">Carte mentale du sous-titre</span>
        <h3>${esc(data.root)}</h3>
        <p>Cliquer sur un fil principal pour afficher un petit-fils qui donne un exemple de cette notion.</p>
      </div>
      <div class="v136-audio-objective"><strong>Objectif :</strong> ${esc(data.objective)}</div>
      <div class="v98-map-board v138-map-board">
        <svg class="v98-map-svg" viewBox="0 0 1000 840" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <marker id="v98Arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"></path>
            </marker>
          </defs>
          ${svgLines.join('')}
        </svg>
        <button type="button" class="v98-center-node v138-center-node" data-v98-root="1">${esc(data.root)}</button>
        ${branches}
      </div>
    </section>`;
  }

  const v138PrevVisualPanel = visualPanel;
  visualPanel = function(lesson){
    const unit = typeof currentUnit === 'function' ? currentUnit() : null;
    if(!v138IsFirstYear(unit)) return v138PrevVisualPanel(lesson);
    const html = v138PrevVisualPanel(lesson);
    return html.replace(/<section class="panel v91-mindmap-panel[\s\S]*?<\/section>\s*<\/section>$/m, `${v138RenderMap(lesson)}</section>`);
  };
})();


/* =========================================================
   V139 — Diagnostic rapide avant chaque unité de 1ère année collégiale
   Structure : choix unité -> diagnostic -> résultat -> accès au cours
========================================================= */
(function(){
  const V139_FIRST_YEAR_IDS = ['v124_1ac_systeme', 'v124_1ac_os'];

  function v139IsFirstYearUnit(unit){
    return !!unit && V139_FIRST_YEAR_IDS.includes(unit.id);
  }

  const V139_DIAGNOSTICS = {
    v124_1ac_systeme: {
      title: 'Diagnostic rapide — Système informatique',
      intro: 'Ce diagnostic permet de savoir ce que tu connais déjà avant de commencer l’unité.',
      questions: [
        {
          q: 'Une donnée est :',
          choices: ['un élément brut avant interprétation', 'un bouton de fermeture', 'un câble uniquement'],
          correct: 0,
          notion: 'Donnée / Information'
        },
        {
          q: 'Un SMS est un exemple d’information sous forme de :',
          choices: ['message', 'système d’exploitation', 'câble USB'],
          correct: 0,
          notion: 'Type d’information : message'
        },
        {
          q: 'L’informatique permet surtout de :',
          choices: ['traiter automatiquement des données', 'changer la couleur du mur', 'fermer une fenêtre seulement'],
          correct: 0,
          notion: 'Traitement des données'
        },
        {
          q: 'Le Wi‑Fi est une connexion :',
          choices: ['sans fil', 'toujours avec câble USB', 'sur papier'],
          correct: 0,
          notion: 'Connectivités'
        },
        {
          q: 'Une application mobile est souvent installée sur :',
          choices: ['un téléphone', 'une table', 'une prise électrique'],
          correct: 0,
          notion: 'Logiciels / Applications'
        }
      ]
    },
    v124_1ac_os: {
      title: 'Diagnostic rapide — Système d’exploitation',
      intro: 'Ce diagnostic vérifie tes connaissances avant l’unité sur le système d’exploitation, les fenêtres et le bureau.',
      questions: [
        {
          q: 'Windows, Linux et Android sont des exemples de :',
          choices: ['systèmes d’exploitation', 'câbles de connexion', 'images seulement'],
          correct: 0,
          notion: 'Système d’exploitation'
        },
        {
          q: 'Une fenêtre permet d’afficher :',
          choices: ['un programme, un dossier ou un document', 'seulement une prise USB', 'seulement une image fixe'],
          correct: 0,
          notion: 'Fenêtre'
        },
        {
          q: 'Le bouton X sert à :',
          choices: ['fermer une fenêtre', 'agrandir une fenêtre', 'ouvrir le Wi‑Fi'],
          correct: 0,
          notion: 'Fermer une fenêtre'
        },
        {
          q: 'Réduire une fenêtre signifie :',
          choices: ['la cacher temporairement dans la barre des tâches', 'la supprimer définitivement', 'éteindre l’ordinateur'],
          correct: 0,
          notion: 'Réduire une fenêtre'
        },
        {
          q: 'La zone de notification affiche souvent :',
          choices: ['l’heure et des informations du système', 'les notes de l’élève', 'les cellules d’un tableur'],
          correct: 0,
          notion: 'Bureau / Zone de notification'
        }
      ]
    }
  };

  function v139Recommendation(score, total){
    if(score <= 2){
      return {
        level: 'Besoin de soutien',
        text: 'Commence par le style visuel. Observe les images et lis bien les définitions avant de passer aux activités.',
        className: 'low'
      };
    }
    if(score <= 4){
      return {
        level: 'Niveau moyen',
        text: 'Commence par le style visuel, puis écoute le style auditif pour consolider les notions difficiles.',
        className: 'medium'
      };
    }
    return {
      level: 'Bon départ',
      text: 'Tu peux commencer le cours, puis passer rapidement aux activités kinesthésiques pour t’entraîner.',
      className: 'good'
    };
  }

  function v139RenderDiagnostic(unit, result){
    const data = V139_DIAGNOSTICS[unit.id];
    const questionsHtml = data.questions.map((q, i)=>`
      <article class="v139-question-card">
        <div class="v139-question-head">
          <span>${i + 1}</span>
          <div>
            <h4>${esc(q.q)}</h4>
            <small>Notion visée : ${esc(q.notion)}</small>
          </div>
        </div>
        <div class="v139-choice-list">
          ${q.choices.map((choice, j)=>`
            <label class="v139-choice">
              <input type="radio" name="v139-q-${i}" value="${j}">
              <span>${esc(choice)}</span>
            </label>
          `).join('')}
        </div>
      </article>
    `).join('');

    let resultHtml = '';
    if(result){
      const rec = v139Recommendation(result.score, data.questions.length);
      const details = data.questions.map((q, i)=>{
        const ok = result.answers[i] === q.correct;
        return `<li class="${ok ? 'ok' : 'bad'}">
          <strong>Q${i+1} :</strong> ${ok ? 'réponse correcte' : `à revoir — ${esc(q.notion)}`}
        </li>`;
      }).join('');
      resultHtml = `<section class="v139-result ${rec.className}">
        <div>
          <span>Résultat du diagnostic</span>
          <h3>${result.score}/${data.questions.length} — ${esc(rec.level)}</h3>
          <p>${esc(rec.text)}</p>
        </div>
        <ul>${details}</ul>
        <div class="v139-result-actions">
          <button class="btn secondary" data-v139-diagnostic-retry="${esc(unit.id)}">Refaire le diagnostic</button>
          <button class="btn" data-v139-diagnostic-start="${esc(unit.id)}">Commencer l’unité</button>
        </div>
      </section>`;
    }

    return appShell(`<section class="v139-diagnostic-page">
      <section class="v139-diagnostic-head">
        <span class="mini-pill">Avant de commencer</span>
        <h1>${esc(data.title)}</h1>
        <p>${esc(data.intro)}</p>
      </section>
      ${resultHtml || `<section class="v139-diagnostic-form" data-v139-diagnostic-unit="${esc(unit.id)}">
        ${questionsHtml}
        <div class="v139-submit-row">
          <button class="btn" data-v139-diagnostic-submit="${esc(unit.id)}">Valider le diagnostic</button>
        </div>
      </section>`}
    </section>`);
  }

  const v139OldRenderUnit = renderUnit;
  renderUnit = function(){
    const unit = currentUnit();
    state.v139Done = state.v139Done || {};
    if(v139IsFirstYearUnit(unit) && state.page === 'intro' && !state.v139Done[unit.id]){
      $('#app').innerHTML = v139RenderDiagnostic(unit, null);
      return;
    }
    return v139OldRenderUnit();
  };

  document.addEventListener('click', function(e){
    const submit = e.target.closest('[data-v139-diagnostic-submit]');
    if(submit){
      e.preventDefault();
      const unitId = submit.getAttribute('data-v139-diagnostic-submit');
      const unit = UNITS.find(u => u && u.id === unitId);
      const data = V139_DIAGNOSTICS[unitId];
      if(!unit || !data) return;
      const answers = data.questions.map((q, i)=>{
        const checked = document.querySelector(`input[name="v139-q-${i}"]:checked`);
        return checked ? Number(checked.value) : -1;
      });
      const unanswered = answers.some(v => v === -1);
      if(unanswered){
        const row = document.querySelector('.v139-submit-row');
        if(row && !row.querySelector('.v139-warning')){
          row.insertAdjacentHTML('afterbegin', '<p class="v139-warning">Réponds à toutes les questions avant de valider.</p>');
        }
        return;
      }
      const score = answers.reduce((sum, ans, i)=>sum + (ans === data.questions[i].correct ? 1 : 0), 0);
      $('#app').innerHTML = v139RenderDiagnostic(unit, {score, answers});
      return;
    }

    const start = e.target.closest('[data-v139-diagnostic-start]');
    if(start){
      e.preventDefault();
      const unitId = start.getAttribute('data-v139-diagnostic-start');
      state.v139Done = state.v139Done || {};
      state.v139Done[unitId] = true;
      state.unitId = unitId;
      state.page = 'intro';
      state.lessonIndex = 0;
      state.tab = 'visual';
      renderUnit();
      return;
    }

    const retry = e.target.closest('[data-v139-diagnostic-retry]');
    if(retry){
      e.preventDefault();
      const unitId = retry.getAttribute('data-v139-diagnostic-retry');
      const unit = UNITS.find(u => u && u.id === unitId);
      if(unit) $('#app').innerHTML = v139RenderDiagnostic(unit, null);
      return;
    }
  });
})();


/* =========================================================
   V140 — Diagnostic complet pour toutes les unités
   + présentation uniforme basée sur les repères officiels
========================================================= */
(function(){
  const V140_DIAGNOSTICS = {
    v124_1ac_systeme: {
      level: '1ère année collégiale',
      title: 'Diagnostic complet — Système informatique',
      intro: 'Ce diagnostic couvre toute l’unité : information, informatique, système informatique, connectivités et logiciels.',
      questions: [
        {q:'Une donnée est :', choices:['un élément brut avant interprétation','un bouton de fermeture','un câble uniquement'], correct:0, notion:'Information — donnée'},
        {q:'Une information est :', choices:['une donnée qui a un sens','un logiciel de dessin','un appareil sans fil'], correct:0, notion:'Information'},
        {q:'Un SMS est un exemple d’information sous forme de :', choices:['message','système d’exploitation','câble USB'], correct:0, notion:'Type d’information : message'},
        {q:'Une image ou un schéma peut transmettre :', choices:['une information visuelle','un mot de passe automatiquement','un câble réseau'], correct:0, notion:'Type d’information : image'},
        {q:'L’informatique consiste surtout à :', choices:['traiter automatiquement des données','changer seulement l’arrière-plan','fermer des fenêtres'], correct:0, notion:'Informatique'},
        {q:'Dans un système informatique, l’interface sert à :', choices:['communiquer entre l’utilisateur et le système','recharger le téléphone','imprimer une image'], correct:0, notion:'Système informatique'},
        {q:'Le Bluetooth permet :', choices:['une connexion sans fil à courte distance','une connexion uniquement avec câble','un traitement de texte'], correct:0, notion:'Connectivités'},
        {q:'Le Wi‑Fi permet de se connecter :', choices:['au réseau sans câble','à une fenêtre','à un fond d’écran'], correct:0, notion:'Connectivités'},
        {q:'Le câble USB sert à :', choices:['relier deux appareils par câble','ouvrir le menu Démarrer','agrandir une fenêtre'], correct:0, notion:'Connectivité USB'},
        {q:'Une application mobile est :', choices:['un logiciel souvent installé sur un téléphone','un câble de connexion','une zone de notification'], correct:0, notion:'Logiciels'}
      ]
    },
    v124_1ac_os: {
      level: '1ère année collégiale',
      title: 'Diagnostic complet — Système d’exploitation',
      intro: 'Ce diagnostic couvre toute l’unité : systèmes d’exploitation, gestion des fenêtres et organisation du bureau.',
      questions: [
        {q:'Windows, Linux, iOS et Android sont des exemples de :', choices:['systèmes d’exploitation','câbles USB','images numériques'], correct:0, notion:'Système d’exploitation'},
        {q:'Le système d’exploitation est :', choices:['un logiciel principal qui fait fonctionner l’appareil','une simple image','un type de message'], correct:0, notion:'Rôle du système d’exploitation'},
        {q:'Une fenêtre est :', choices:['une zone qui affiche un programme, un dossier ou un document','un câble sans fil','un message SMS'], correct:0, notion:'Fenêtre'},
        {q:'Le bouton X sert à :', choices:['fermer une fenêtre','agrandir une fenêtre','ouvrir le Wi‑Fi'], correct:0, notion:'Fermer une fenêtre'},
        {q:'Agrandir une fenêtre permet de :', choices:['mieux voir son contenu','la supprimer définitivement','envoyer un message'], correct:0, notion:'Agrandir une fenêtre'},
        {q:'Réduire une fenêtre signifie :', choices:['la cacher temporairement dans la barre des tâches','l’effacer définitivement','éteindre l’ordinateur'], correct:0, notion:'Réduire une fenêtre'},
        {q:'Les icônes du bureau représentent souvent :', choices:['des programmes, fichiers ou dossiers','des câbles USB uniquement','des notes scolaires'], correct:0, notion:'Bureau — icônes'},
        {q:'Le bouton Démarrer sert à :', choices:['accéder aux programmes et outils du système','transférer des photos par USB','fermer Internet'], correct:0, notion:'Bouton Démarrer'},
        {q:'La barre des tâches affiche :', choices:['des programmes ouverts et des raccourcis','des cellules de tableur','des messages uniquement'], correct:0, notion:'Barre des tâches'},
        {q:'La zone de notification affiche souvent :', choices:['l’heure et des informations du système','les formules Excel','les procédures LOGO'], correct:0, notion:'Zone de notification'}
      ]
    },
    u3_tableur: {
      level: '2ème année collégiale',
      title: 'Diagnostic complet — Tableur',
      intro: 'Ce diagnostic couvre toute l’unité : classeur, feuilles, cellules, saisie, mise en forme, formules, fonctions, recopie, graphiques et impression.',
      questions: [
        {q:'Un fichier créé avec un tableur s’appelle généralement :', choices:['un classeur','une procédure','un système d’exploitation'], correct:0, notion:'Gestion d’un fichier tableur'},
        {q:'Une feuille de calcul est composée de :', choices:['lignes, colonnes et cellules','fenêtres seulement','icônes du bureau'], correct:0, notion:'Feuilles, cellules et adresses'},
        {q:'L’adresse B3 désigne :', choices:['la colonne B et la ligne 3','la ligne B et la colonne 3','un bouton de fermeture'], correct:0, notion:'Adresse de cellule'},
        {q:'Dans une cellule, on peut saisir :', choices:['du texte, des nombres ou une formule','seulement une image','uniquement un câble'], correct:0, notion:'Saisie des données'},
        {q:'La mise en forme sert à :', choices:['rendre le tableau clair et lisible','faire automatiquement tous les calculs','éteindre l’ordinateur'], correct:0, notion:'Mise en forme'},
        {q:'Une formule dans un tableur commence souvent par :', choices:['=','@','#'], correct:0, notion:'Formules'},
        {q:'La fonction SOMME sert à :', choices:['additionner des valeurs','fermer une fenêtre','changer le fond d’écran'], correct:0, notion:'Fonctions'},
        {q:'La poignée de recopie permet de :', choices:['réutiliser une formule dans d’autres cellules','supprimer le classeur','ouvrir une session'], correct:0, notion:'Recopie'},
        {q:'Un graphique sert à :', choices:['représenter visuellement des données','écrire des primitives LOGO','connecter un téléphone'], correct:0, notion:'Graphiques'},
        {q:'Avant d’imprimer un tableau, il faut vérifier :', choices:['l’aperçu, l’orientation et les marges','le Bluetooth seulement','le bouton Démarrer'], correct:0, notion:'Mise en page et impression'}
      ]
    },
    u4_logo: {
      level: '2ème année collégiale',
      title: 'Diagnostic complet — Programmation LOGO',
      intro: 'Ce diagnostic couvre toute l’unité : environnement LOGO, primitives, répétition et procédures.',
      questions: [
        {q:'Un programme est :', choices:['une suite d’instructions ordonnées','une cellule de tableur','un fond d’écran'], correct:0, notion:'Programme'},
        {q:'Un langage de programmation sert à :', choices:['communiquer avec l’ordinateur par des instructions','connecter un câble USB','imprimer une image'], correct:0, notion:'Langage de programmation'},
        {q:'Dans LOGO, la tortue exécute :', choices:['les commandes écrites par l’élève','les cellules Excel','les notifications'], correct:0, notion:'Environnement LOGO'},
        {q:'La commande AV 50 signifie :', choices:['avancer de 50 pas','agrandir 50 fenêtres','additionner 50 cellules'], correct:0, notion:'Primitive AV'},
        {q:'La commande RE sert à :', choices:['reculer la tortue','réduire une fenêtre','renommer un fichier'], correct:0, notion:'Primitive RE'},
        {q:'TD 90 signifie :', choices:['tourner à droite de 90 degrés','tracer directement un tableau','télécharger un dossier'], correct:0, notion:'Rotation'},
        {q:'LC permet de :', choices:['lever le crayon pour se déplacer sans tracer','lancer un classeur','lire une cellule'], correct:0, notion:'Crayon LOGO'},
        {q:'REPETE sert à :', choices:['exécuter plusieurs fois un bloc d’instructions','imprimer une feuille','ouvrir le bureau'], correct:0, notion:'Répétition'},
        {q:'Pour dessiner un carré avec REPETE, on répète souvent :', choices:['4 fois AV puis TD 90','3 fois SOMME','2 fois Fermer'], correct:0, notion:'Exemple du carré'},
        {q:'Une procédure LOGO est :', choices:['un petit programme nommé et réutilisable','une barre de tâches','une adresse de cellule'], correct:0, notion:'Procédures'}
      ]
    }
  };

  function v140DiagnosticFor(unit){
    return unit && V140_DIAGNOSTICS[unit.id];
  }

  function v140Recommendation(score, total){
    const ratio = score / total;
    if(ratio < 0.4){
      return {level:'Besoin de soutien', className:'low', text:'Commence par le style visuel : observe les images, lis les définitions et utilise la carte mentale avant de passer aux exercices.'};
    }
    if(ratio < 0.75){
      return {level:'Niveau moyen', className:'medium', text:'Commence par le style visuel, puis consolide avec le style auditif avant de faire les activités kinesthésiques.'};
    }
    return {level:'Bon départ', className:'good', text:'Tu peux commencer l’unité puis passer rapidement aux activités kinesthésiques pour vérifier ta maîtrise.'};
  }

  function v140RenderDiagnostic(unit, result){
    const data = v140DiagnosticFor(unit);
    const questionsHtml = data.questions.map((q, i)=>`
      <article class="v139-question-card v140-question-card">
        <div class="v139-question-head">
          <span>${i + 1}</span>
          <div>
            <h4>${esc(q.q)}</h4>
            <small>Notion visée : ${esc(q.notion)}</small>
          </div>
        </div>
        <div class="v139-choice-list">
          ${q.choices.map((choice, j)=>`
            <label class="v139-choice">
              <input type="radio" name="v140-q-${i}" value="${j}">
              <span>${esc(choice)}</span>
            </label>
          `).join('')}
        </div>
      </article>
    `).join('');

    let resultHtml = '';
    if(result){
      const rec = v140Recommendation(result.score, data.questions.length);
      const details = data.questions.map((q, i)=>{
        const ok = result.answers[i] === q.correct;
        return `<li class="${ok ? 'ok' : 'bad'}"><strong>Q${i+1} :</strong> ${ok ? 'réponse correcte' : `à revoir — ${esc(q.notion)}`}</li>`;
      }).join('');
      resultHtml = `<section class="v139-result v140-result v142-result ${rec.className}">
        <div class="v142-result-summary">
          <span>Résultat du diagnostic</span>
          <h3>${result.score}/${data.questions.length} — ${esc(rec.level)}</h3>
          <p>${esc(rec.text)}</p>
        </div>
        <div class="v142-result-details">
          <h4>Détail des notions</h4>
          <ul>${details}</ul>
        </div>
        <div class="v139-result-actions">
          <button class="btn secondary" data-v140-diagnostic-retry="${esc(unit.id)}">Refaire le diagnostic</button>
          <button class="btn" data-v140-diagnostic-start="${esc(unit.id)}">Commencer l’unité</button>
        </div>
      </section>`;
    }

    return appShell(`<section class="v139-diagnostic-page v140-diagnostic-page v142-diagnostic-page">
      <section class="v139-diagnostic-head v140-diagnostic-head v141-diagnostic-head v142-diagnostic-head">
        <div class="v141-diagnostic-copy v142-diagnostic-copy">
          <span class="mini-pill">${esc(data.level)}</span>
          <h1>${esc(data.title)}</h1>
          <p>${esc(data.intro)}</p>
          <div class="v142-diagnostic-points">
            <span>Questions sur toute l’unité</span>
            <span>Résultat immédiat</span>
            <span>Notions à réviser</span>
          </div>
        </div>
      </section>
      ${resultHtml || `<section class="v142-diagnostic-intro-card">
        <div>
          <span>Étape 1</span>
          <h3>Réponds calmement aux questions</h3>
          <p>Choisis une seule réponse pour chaque question. Le but est de savoir ce qu’il faut renforcer avant le cours.</p>
        </div>
        <strong>${data.questions.length} questions</strong>
      </section>
      <section class="v139-diagnostic-form v140-diagnostic-form v142-diagnostic-form" data-v140-diagnostic-unit="${esc(unit.id)}">
        ${questionsHtml}
        <div class="v139-submit-row v142-submit-row">
          <button class="btn" data-v140-diagnostic-submit="${esc(unit.id)}">Valider le diagnostic</button>
        </div>
      </section>`}
    </section>`);
  }

  const v140OldRenderUnit = renderUnit;
  renderUnit = function(){
    const unit = currentUnit();
    const data = v140DiagnosticFor(unit);
    state.v140Done = state.v140Done || {};
    if(data && state.page === 'intro' && !state.v140Done[unit.id]){
      $('#app').innerHTML = v140RenderDiagnostic(unit, null);
      return;
    }
    return v140OldRenderUnit();
  };

  const v140OldRenderUnitIntro = renderUnitIntro;
  renderUnitIntro = function(unit){
    const lessons = (unit.lessons || []).map((l, i)=>`
      <article class="v140-progression-card">
        <span>${i + 1}</span>
        <div>
          <h4>${esc(l.title)}</h4>
          <p>${esc(l.objective || 'Comprendre et appliquer la notion étudiée.')}</p>
        </div>
      </article>
    `).join('');
    const resources = (unit.officialResources || []).map(r=>`<li>${esc(r)}</li>`).join('');
    const data = v140DiagnosticFor(unit);
    return `<section class="v140-unit-presentation">
      <div class="v140-unit-hero">
        <span class="mini-pill">Présentation de l’unité</span>
        <h2>${esc(unit.title.replace(/^Unité\\s*\\d+\\s*:\\s*/i,''))}</h2>
        <p>${esc(unit.intro || 'Découvrir les notions essentielles de l’unité.')}</p>
        ${data ? `<button class="btn secondary small" data-v140-reset="${esc(unit.id)}">Refaire le diagnostic</button>` : ''}
      </div>
      <div class="v140-official-card">
        <h3>Repères des instructions officielles</h3>
        <p><strong>Compétence :</strong> ${esc(unit.competence || 'Compétence liée à l’unité')}</p>
        <p><strong>Volume horaire :</strong> ${esc(unit.duration || 'Selon la progression annuelle')}</p>
        <h4>Ressources / notions prévues</h4>
        <ul>${resources || '<li>Notions principales de l’unité selon la progression officielle.</li>'}</ul>
      </div>
      <div class="v140-progression">
        <h3>Progression du cours</h3>
        <div>${lessons}</div>
      </div>
    </section>`;
  };

  document.addEventListener('click', function(e){
    const submit = e.target.closest('[data-v140-diagnostic-submit]');
    if(submit){
      e.preventDefault();
      const unitId = submit.getAttribute('data-v140-diagnostic-submit');
      const unit = UNITS.find(u => u && u.id === unitId);
      const data = V140_DIAGNOSTICS[unitId];
      if(!unit || !data) return;
      const answers = data.questions.map((q, i)=>{
        const checked = document.querySelector(`input[name="v140-q-${i}"]:checked`);
        return checked ? Number(checked.value) : -1;
      });
      if(answers.some(v => v === -1)){
        const row = document.querySelector('.v139-submit-row');
        if(row && !row.querySelector('.v139-warning')){
          row.insertAdjacentHTML('afterbegin', '<p class="v139-warning">Réponds à toutes les questions avant de valider.</p>');
        }
        return;
      }
      const score = answers.reduce((sum, ans, i)=>sum + (ans === data.questions[i].correct ? 1 : 0), 0);
      $('#app').innerHTML = v140RenderDiagnostic(unit, {score, answers});
      return;
    }

    const start = e.target.closest('[data-v140-diagnostic-start]');
    if(start){
      e.preventDefault();
      const unitId = start.getAttribute('data-v140-diagnostic-start');
      state.v140Done = state.v140Done || {};
      state.v139Done = state.v139Done || {};
      state.v140Done[unitId] = true;
      state.v139Done[unitId] = true;
      state.unitId = unitId;
      state.page = 'intro';
      state.lessonIndex = 0;
      state.tab = 'visual';
      renderUnit();
      return;
    }

    const retry = e.target.closest('[data-v140-diagnostic-retry]');
    if(retry){
      e.preventDefault();
      const unitId = retry.getAttribute('data-v140-diagnostic-retry');
      const unit = UNITS.find(u => u && u.id === unitId);
      if(unit) $('#app').innerHTML = v140RenderDiagnostic(unit, null);
      return;
    }

    const reset = e.target.closest('[data-v140-reset]');
    if(reset){
      e.preventDefault();
      const unitId = reset.getAttribute('data-v140-reset');
      state.v140Done = state.v140Done || {};
      state.v139Done = state.v139Done || {};
      delete state.v140Done[unitId];
      delete state.v139Done[unitId];
      state.unitId = unitId;
      state.page = 'intro';
      renderUnit();
      return;
    }
  });
})();

/* =========================================================
   V144 — Accueil sobre + intégration/contrôle 1AC refaits
   - Titre principal limité à l’abréviation ÉPI
   - Suppression de la description du logo dans l’en-tête
   - Situations d’intégration et contrôles finaux refaits pour la 1ère année collégiale
========================================================= */
(function(){
  const APP_ABBR = 'ÉPI';

  appShell = function(content){
    const st = getStudent();
    return `<div class="app-shell v114-shell v119-shell v121-shell v144-shell">
      <header class="topbar v114-topbar v119-topbar v121-topbar v144-topbar">
        <div class="brand no-edu-icon v144-brand" aria-label="${APP_ABBR}">
          <div class="v144-brand-logo">${APP_ABBR}</div>
        </div>
        <div class="nav-actions">${st ? `<span class="pill">${esc(st.prenom)} ${esc(st.nom)}</span><button class="btn ghost small" data-action="home">Accueil</button><button class="btn secondary small" data-action="logout">Déconnexion</button>` : ''}</div>
      </header>
      ${content}
    </div>`;
  };

  function v144ApplyFirstYearContent(){
    const systeme = UNITS.find(u => u && u.id === 'v124_1ac_systeme');
    const os = UNITS.find(u => u && u.id === 'v124_1ac_os');

    if(systeme){
      systeme.integration = {
        title: 'Situation d’intégration — Analyser un poste informatique de la salle',
        scenario: 'Pendant une séance d’informatique, tu observes un poste de travail complet : élève, unité centrale, écran, clavier, souris, connexion USB ou Wi‑Fi et logiciels installés. Tu dois expliquer comment ces éléments forment un système informatique qui traite des informations.',
        tasks: [
          'Citer deux informations que l’élève peut utiliser : texte, nombre, image ou son.',
          'Classer les éléments observés en trois catégories : utilisateur, matériel et logiciels.',
          'Expliquer le rôle d’une connectivité comme USB, câble réseau ou Wi‑Fi.',
          'Donner un exemple de logiciel et préciser la tâche qu’il permet de réaliser.'
        ],
        questions: [
          ['Quelle différence peut-on faire entre une donnée et une information ?', 'Une donnée devient une information lorsqu’elle a un sens pour l’utilisateur et peut être comprise dans une situation.'],
          ['Pourquoi le clavier et la souris sont-ils des éléments matériels ?', 'Parce que ce sont des composants physiques que l’on peut toucher et utiliser pour saisir ou commander.'],
          ['Pourquoi un logiciel est-il nécessaire dans un système informatique ?', 'Parce qu’il permet d’exécuter une tâche comme écrire, calculer, dessiner, naviguer ou organiser des fichiers.'],
          ['Pourquoi la connectivité est-elle importante ?', 'Elle permet de relier des appareils ou d’échanger des données avec un autre matériel ou un réseau.']
        ]
      };
      systeme.exam = [
        ['Une information est :', ['un contenu qui a un sens pour l’utilisateur', 'un câble électrique', 'une chaise de la salle'], 0],
        ['Un nombre saisi dans l’ordinateur peut être :', ['une donnée', 'un périphérique', 'un écran'], 0],
        ['L’informatique permet principalement de :', ['traiter automatiquement les informations', 'décorer le bureau', 'remplacer le tableau'], 0],
        ['Un système informatique est formé par :', ['utilisateur, matériel et logiciels', 'cahier, stylo et cartable', 'mur, porte et fenêtre'], 0],
        ['L’utilisateur est :', ['la personne qui utilise le système informatique', 'le câble USB', 'le programme uniquement'], 0],
        ['Le matériel informatique désigne :', ['les éléments physiques que l’on peut toucher', 'les idées de l’élève', 'les règles de grammaire'], 0],
        ['Un logiciel est :', ['un programme qui aide à réaliser une tâche', 'une prise électrique', 'une table'], 0],
        ['Un exemple de logiciel est :', ['un navigateur Web', 'une souris', 'un écran'], 0],
        ['Le clavier sert surtout à :', ['saisir des caractères et des commandes', 'afficher les images', 'brancher Internet'], 0],
        ['La souris permet de :', ['pointer, cliquer et sélectionner', 'imprimer seule', 'enregistrer le courant'], 0],
        ['L’écran est un périphérique de :', ['sortie', 'entrée uniquement', 'stockage papier'], 0],
        ['L’imprimante permet de :', ['obtenir un document sur papier', 'saisir un texte', 'tourner la souris'], 0],
        ['La connectivité USB sert à :', ['relier des appareils et échanger des données', 'écrire une formule', 'fermer une fenêtre'], 0],
        ['Le Wi‑Fi est une connectivité :', ['sans fil', 'toujours avec câble', 'uniquement pour le clavier'], 0],
        ['Un câble réseau permet de :', ['connecter un poste à un réseau', 'modifier la couleur du texte', 'effacer le clavier'], 0],
        ['Le traitement transforme :', ['des données en résultats utiles', 'un écran en clavier', 'une chaise en logiciel'], 0],
        ['Le stockage sert à :', ['conserver les informations et les fichiers', 'éteindre l’écran', 'imprimer automatiquement'], 0],
        ['Un fichier peut contenir :', ['du texte, une image, un son ou des données', 'uniquement un câble', 'seulement une prise'], 0],
        ['Le système informatique produit des résultats grâce :', ['au matériel et aux logiciels utilisés par l’utilisateur', 'au cartable seulement', 'au tableau mural'], 0],
        ['Pour utiliser correctement un poste informatique, il faut :', ['identifier les éléments et respecter leur rôle', 'mélanger les câbles sans vérifier', 'supprimer tous les logiciels'], 0]
      ];
    }

    if(os){
      os.integration = {
        title: 'Situation d’intégration — Organiser son bureau numérique',
        scenario: 'Au début d’une séance, tu ouvres ta session sur un ordinateur de la salle. Tu dois utiliser le système d’exploitation pour lancer un programme, manipuler une fenêtre, organiser le bureau et protéger ton travail.',
        tasks: [
          'Citer un exemple de système d’exploitation utilisé sur ordinateur ou téléphone.',
          'Expliquer le rôle du système d’exploitation pour lancer les logiciels et gérer les fichiers.',
          'Réaliser ou décrire trois actions sur une fenêtre : réduire, agrandir, déplacer ou fermer.',
          'Créer un dossier de travail avec un nom clair et rappeler une règle de sécurité.'
        ],
        questions: [
          ['Pourquoi le système d’exploitation est-il appelé logiciel principal ?', 'Parce qu’il permet à l’ordinateur de fonctionner et aide l’utilisateur à gérer les logiciels, fichiers et périphériques.'],
          ['Quelle différence y a-t-il entre une icône et une fenêtre ?', 'Une icône est un symbole qui représente un élément ; une fenêtre est une zone ouverte qui affiche un programme, un dossier ou un document.'],
          ['Pourquoi faut-il organiser le bureau avec des dossiers ?', 'Pour retrouver facilement les fichiers et garder un espace de travail clair.'],
          ['Quelle règle faut-il respecter avant de quitter le poste ?', 'Il faut enregistrer son travail, fermer les programmes puis arrêter correctement l’ordinateur.']
        ]
      };
      os.exam = [
        ['Le système d’exploitation est :', ['le logiciel principal de l’ordinateur', 'une imprimante', 'un câble USB'], 0],
        ['Un exemple de système d’exploitation est :', ['Windows', 'Clavier', 'Écran'], 0],
        ['Android est utilisé comme :', ['système d’exploitation', 'souris', 'prise électrique'], 0],
        ['Le système d’exploitation permet de :', ['lancer les logiciels et gérer les fichiers', 'fabriquer une table', 'remplacer le professeur'], 0],
        ['Après l’ouverture de session, on voit souvent :', ['le bureau', 'le câble réseau', 'la feuille imprimée'], 0],
        ['Le bureau contient généralement :', ['des icônes, dossiers et une barre des tâches', 'seulement des câbles', 'des chaises'], 0],
        ['Une icône est :', ['un petit symbole représentant un fichier, dossier ou programme', 'un mot de passe', 'un câble'], 0],
        ['La barre des tâches sert à :', ['accéder aux programmes ouverts et aux outils rapides', 'écrire automatiquement un texte', 'imprimer sans imprimante'], 0],
        ['Une fenêtre est :', ['une zone qui affiche un programme, dossier ou document', 'un périphérique matériel', 'un type de souris'], 0],
        ['Le bouton X d’une fenêtre sert à :', ['fermer la fenêtre', 'réduire le volume', 'créer un clavier'], 0],
        ['Réduire une fenêtre signifie :', ['la placer dans la barre des tâches', 'la supprimer définitivement', 'éteindre l’ordinateur'], 0],
        ['Agrandir une fenêtre signifie :', ['augmenter sa taille à l’écran', 'changer son nom', 'supprimer son contenu'], 0],
        ['Déplacer une fenêtre signifie :', ['changer sa position sur l’écran', 'la transformer en dossier', 'l’imprimer'], 0],
        ['Un dossier sert à :', ['ranger et organiser des fichiers', 'afficher le courant électrique', 'remplacer l’écran'], 0],
        ['Un fichier est :', ['un document numérique enregistré', 'un groupe de chaises', 'un câble de réseau'], 0],
        ['Renommer un fichier signifie :', ['changer son nom', 'le supprimer toujours', 'le fermer sans enregistrer'], 0],
        ['La corbeille contient souvent :', ['des éléments supprimés', 'les programmes ouverts', 'les mots de passe de la classe'], 0],
        ['Un mot de passe doit rester :', ['secret', 'affiché pour tout le monde', 'écrit sur le clavier'], 0],
        ['Avant d’arrêter l’ordinateur, il faut :', ['enregistrer son travail et fermer les programmes', 'débrancher directement', 'supprimer tous les dossiers'], 0],
        ['Un poste de travail bien organisé permet de :', ['retrouver rapidement les fichiers', 'cacher toutes les informations', 'empêcher l’ouverture des logiciels'], 0]
      ];
    }
  }

  v144ApplyFirstYearContent();

  const v144OldRenderLevelChoice = (typeof renderLevelChoice === 'function') ? renderLevelChoice : null;
  if(v144OldRenderLevelChoice){
    renderLevelChoice = function(){
      state.selectedLevel = null;
      $('#app').innerHTML = appShell(`
        <section class="v124-level-page v114-home-bg v144-level-page">
          <section class="v124-level-title v114-home-title v144-home-title">
            <span>Espace élève</span>
            <h1>Choisir le niveau</h1>
          </section>
          <section class="v124-level-grid v144-level-grid">
            <button type="button" class="v124-level-card first v144-level-card" data-level="1ac">
              <span>Niveau 1</span>
              <h2>1ère année collégiale</h2>
              <p>Système informatique et système d’exploitation.</p>
              <strong>Afficher les unités</strong>
            </button>
            <button type="button" class="v124-level-card second v144-level-card" data-level="2ac">
              <span>Niveau 2</span>
              <h2>2ème année collégiale</h2>
              <p>Tableur et programmation Logo.</p>
              <strong>Afficher les unités</strong>
            </button>
          </section>
        </section>`);
    };
  }

  const v144OldRenderLevelUnits = (typeof renderLevelUnits === 'function') ? renderLevelUnits : null;
  if(v144OldRenderLevelUnits){
    renderLevelUnits = function(level){
      state.selectedLevel = level;
      const units = v124UnitsForLevel(level);
      const label = level === '1ac' ? '1ère année collégiale' : '2ème année collégiale';
      const cards = units.map((u, i) => v124UnitCard(u, i, level)).join('');
      $('#app').innerHTML = appShell(`
        <section class="v124-units-page v114-home-bg ${level === '1ac' ? 'v125-bg-1ac' : 'v125-bg-2ac'} v144-units-page">
          <section class="v124-units-head v114-home-title v144-home-title">
            <span>${label}</span>
            <h1>Choisir une unité</h1>
            <button type="button" class="btn ghost small v124-back-level" data-level-back="1">← Retour au choix du niveau</button>
          </section>
          <section class="v124-units-grid v114-home-units v144-units-grid">${cards}</section>
        </section>`);
    };
  }

  const v144OldRenderLogin = renderLogin;
  renderLogin = function(){
    state.selectedLevel = null;
    if(typeof v144OldRenderLogin === 'function') v144OldRenderLogin();
  };

  renderHome = function(){
    v144ApplyFirstYearContent();
    if(typeof renderLevelChoice === 'function') renderLevelChoice();
  };
})();

/* V144b — correction affichage accueil après connexion */
(function(){
  renderHome = function(){
    state.selectedLevel = null;
    $('#app').innerHTML = appShell(`
      <section class="v124-level-page v114-home-bg v144-level-page">
        <section class="v124-level-title v114-home-title v144-home-title">
          <span>Espace élève</span>
          <h1>Choisir le niveau</h1>
        </section>
        <section class="v124-level-grid v144-level-grid">
          <button type="button" class="v124-level-card first v144-level-card" data-level="1ac">
            <span>Niveau 1</span>
            <h2>1ère année collégiale</h2>
            <p>Système informatique et système d’exploitation.</p>
            <strong>Afficher les unités</strong>
          </button>
          <button type="button" class="v124-level-card second v144-level-card" data-level="2ac">
            <span>Niveau 2</span>
            <h2>2ème année collégiale</h2>
            <p>Tableur et programmation Logo.</p>
            <strong>Afficher les unités</strong>
          </button>
        </section>
      </section>`);
  };
})();

/* =========================================================
   V145 — Correction 1AC : contrôle final + intégration directe
   - Suppression du sous-titre de notion incorrect dans les questions du contrôle final 1AC
   - Remplacement des questions inutiles de la situation d’intégration par des questions directes
========================================================= */
(function(){
  const V145_FIRST_YEAR_IDS = ['v124_1ac_systeme', 'v124_1ac_os'];
  function v145IsFirstYear(unit){
    return !!unit && V145_FIRST_YEAR_IDS.includes(unit.id);
  }

  const V145_INTEGRATION_EXERCISES = {
    v124_1ac_systeme: [
      {
        lesson: 'Information',
        revise: 'Réviser : information, donnée, texte, nombre, image, son et message.',
        question: 'Donne deux exemples d’informations qu’un ordinateur peut traiter.',
        answer: 'Exemples : un texte, un nombre, une image, un son ou un message.'
      },
      {
        lesson: 'Informatique',
        revise: 'Réviser : traitement automatique des informations.',
        question: 'À quoi sert l’informatique dans une situation de classe ?',
        answer: 'L’informatique sert à traiter, stocker et communiquer les informations de façon automatique.'
      },
      {
        lesson: 'Système informatique',
        revise: 'Réviser : utilisateur, matériel et logiciels.',
        question: 'Dans un poste de travail, cite l’utilisateur, deux matériels et un logiciel.',
        answer: 'Utilisateur : l’élève. Matériels : écran, clavier, souris ou unité centrale. Logiciel : navigateur, traitement de texte ou système d’exploitation.'
      },
      {
        lesson: 'Matériel / logiciel',
        revise: 'Réviser la différence entre matériel et logiciel.',
        question: 'Le clavier est-il un matériel ou un logiciel ? Justifie ta réponse.',
        answer: 'Le clavier est un matériel parce qu’on peut le toucher et l’utiliser pour saisir des caractères.'
      },
      {
        lesson: 'Connectivités',
        revise: 'Réviser : USB, Wi‑Fi, câble réseau et échange de données.',
        question: 'Cite deux moyens de connecter un appareil à l’ordinateur ou au réseau.',
        answer: 'On peut utiliser un câble USB, un câble réseau, le Wi‑Fi ou le Bluetooth.'
      },
      {
        lesson: 'Logiciels',
        revise: 'Réviser : logiciel, programme, application et tâche réalisée.',
        question: 'Cite un logiciel et explique la tâche qu’il permet de réaliser.',
        answer: 'Exemple : un navigateur Web permet de consulter des sites ; un traitement de texte permet d’écrire un document.'
      }
    ],
    v124_1ac_os: [
      {
        lesson: 'Système d’exploitation',
        revise: 'Réviser : logiciel principal, Windows, Linux, Android.',
        question: 'Cite un exemple de système d’exploitation.',
        answer: 'Exemples : Windows, Linux, Android, iOS ou macOS.'
      },
      {
        lesson: 'Rôle du système d’exploitation',
        revise: 'Réviser le rôle du système d’exploitation dans le fonctionnement de l’ordinateur.',
        question: 'Pourquoi le système d’exploitation est-il nécessaire pour utiliser l’ordinateur ?',
        answer: 'Il permet à l’ordinateur de fonctionner, de lancer les logiciels et de gérer les fichiers et les périphériques.'
      },
      {
        lesson: 'Fenêtre',
        revise: 'Réviser : fenêtre, programme, dossier et document.',
        question: 'Qu’est-ce qu’une fenêtre dans le système d’exploitation ?',
        answer: 'Une fenêtre est une zone qui affiche un programme, un dossier ou un document.'
      },
      {
        lesson: 'Gestion des fenêtres',
        revise: 'Réviser : réduire, agrandir, déplacer et fermer.',
        question: 'Explique la différence entre réduire une fenêtre et fermer une fenêtre.',
        answer: 'Réduire cache temporairement la fenêtre dans la barre des tâches ; fermer quitte la fenêtre.'
      },
      {
        lesson: 'Bureau',
        revise: 'Réviser : bureau, icônes, barre des tâches, dossiers et corbeille.',
        question: 'Cite trois éléments que l’on peut trouver sur le bureau.',
        answer: 'Exemples : des icônes, des dossiers, la barre des tâches, la corbeille ou des raccourcis.'
      },
      {
        lesson: 'Organisation du poste',
        revise: 'Réviser : dossier, fichier, nom clair et rangement.',
        question: 'Pourquoi faut-il créer des dossiers avec des noms clairs ?',
        answer: 'Pour organiser le travail et retrouver rapidement les fichiers.'
      }
    ]
  };

  const v145OldIntegrationExercisesFor = (typeof integrationExercisesFor === 'function') ? integrationExercisesFor : null;
  integrationExercisesFor = function(unit){
    if(v145IsFirstYear(unit) && V145_INTEGRATION_EXERCISES[unit.id]){
      return V145_INTEGRATION_EXERCISES[unit.id];
    }
    return v145OldIntegrationExercisesFor ? v145OldIntegrationExercisesFor(unit) : [];
  };

  const v145OldRenderIntegration = (typeof renderIntegration === 'function') ? renderIntegration : null;
  renderIntegration = function(unit){
    if(!v145IsFirstYear(unit)){
      return v145OldRenderIntegration ? v145OldRenderIntegration(unit) : '';
    }
    const exercises = integrationExercisesFor(unit);
    const questionsHtml = exercises.map((ex, i)=>`
      <article class="integration-exercise open-question-card v145-direct-question">
        <div class="exercise-head v145-direct-head">
          <span class="mini-pill">Question ${i + 1}</span>
          <strong>${esc(ex.lesson)}</strong>
        </div>
        <p class="exercise-question">${esc(ex.question)}</p>
        <textarea name="intq${i}" rows="3" placeholder="Écris ta réponse ici..." data-answer="${esc(ex.answer || '')}" data-lesson="${esc(ex.lesson)}" data-revise="${esc(ex.revise || ex.lesson)}"></textarea>
      </article>
    `).join('');
    const taskHtml = (unit.integration.tasks || []).map(t => `<li>${esc(t)}</li>`).join('');
    return `<div class="section-head v145-integration-head">
      <div>
        <h2>${esc(unit.integration.title)}</h2>
        <p>Cette situation sert à vérifier directement les connaissances essentielles de l’unité.</p>
      </div>
      <span class="pill">Questions directes</span>
    </div>
    <section class="integration v145-integration">
      <div class="panel integration-context">
        <h3>1) Situation</h3>
        <p class="explain">${esc(unit.integration.scenario)}</p>
      </div>
      <div class="panel v145-task-panel">
        <h3>2) Travail demandé</h3>
        <ol class="task-list">${taskHtml}</ol>
      </div>
      <form id="integrationForm">
        <h3>3) Questions de diagnostic</h3>
        <p class="subtle">Réponds directement aux questions. Après validation, compare ta réponse avec la correction proposée.</p>
        <div class="integration-exercises v145-direct-list">${questionsHtml}</div>
        <button class="btn" type="submit">Valider mes réponses</button>
        <div id="integrationResult"></div>
      </form>
    </section>`;
  };

  const v145OldMeta = (typeof v62ExamMetaForQuestion === 'function') ? v62ExamMetaForQuestion : null;
  v62ExamMetaForQuestion = function(unit, q, index){
    if(unit && unit.id === 'v124_1ac_systeme'){
      const text = v62NormalizeText(Array.isArray(q) ? q[0] : q);
      if(/information|donnee|message|texte|image|son|nombre/.test(text)){
        return {notion:'Information', lessonIndex:0, advice:'Revoir information, donnée et exemples de formes d’information.', action:'Donner des exemples : texte, nombre, image, son et message.'};
      }
      if(/informatique|traiter|traitement|automatique|resultat|stockage/.test(text)){
        return {notion:'Informatique', lessonIndex:1, advice:'Revoir le traitement automatique des informations.', action:'Expliquer entrée, traitement, sortie et stockage avec un exemple.'};
      }
      if(/systeme informatique|utilisateur|materiel|logiciel|logiciels|application|programme|navigateur/.test(text)){
        return {notion:'Système informatique', lessonIndex:2, advice:'Revoir utilisateur, matériel et logiciels.', action:'Identifier ces trois éléments dans le poste de travail.'};
      }
      if(/usb|wi|wifi|wi‑fi|connectivite|connecter|cable|port|reseau|bluetooth/.test(text)){
        return {notion:'Connectivités', lessonIndex:3, advice:'Revoir USB, Wi‑Fi, Bluetooth, câble réseau et port.', action:'Citer un exemple de connexion avec ou sans fil.'};
      }
      return {notion:'Logiciels', lessonIndex:4, advice:'Revoir la notion de logiciel et donner des exemples.', action:'Associer chaque logiciel à une tâche simple.'};
    }
    if(unit && unit.id === 'v124_1ac_os'){
      const text = v62NormalizeText(Array.isArray(q) ? q[0] : q);
      if(/systeme d'exploitation|windows|linux|android|principal|logiciel principal/.test(text)){
        return {notion:'Système d’exploitation', lessonIndex:0, advice:'Revoir le système d’exploitation comme logiciel principal.', action:'Citer Windows, Linux, Android ou iOS et expliquer leur rôle.'};
      }
      if(/fenetre|reduire|agrandir|deplacer|fermer|bouton x/.test(text)){
        return {notion:'Gestion des fenêtres', lessonIndex:1, advice:'Revoir ouvrir, réduire, agrandir, déplacer et fermer une fenêtre.', action:'Manipuler une fenêtre et expliquer chaque bouton.'};
      }
      return {notion:'Bureau et organisation', lessonIndex:2, advice:'Revoir bureau, icônes, barre des tâches, dossiers et corbeille.', action:'Créer un dossier avec un nom clair puis y ranger un fichier.'};
    }
    return v145OldMeta ? v145OldMeta(unit, q, index) : {notion:'Notion à revoir', lessonIndex:0, advice:'Revoir la leçon correspondante.', action:'Relire le cours puis refaire les activités.'};
  };

  const v145OldRenderExam = (typeof renderExam === 'function') ? renderExam : null;
  renderExam = function(unit){
    if(!v145IsFirstYear(unit)){
      return v145OldRenderExam ? v145OldRenderExam(unit) : '';
    }
    const questions = unit.exam.map((q, i)=>`
      <div class="question v62-question-card v145-exam-question">
        <div class="v62-question-meta v145-question-meta"><span>Question ${i + 1}</span></div>
        <p>${i + 1}. ${esc(q[0])}</p>
        <div class="options">${q[1].map((op, j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}" data-correct="${q[2]}"> ${esc(op)}</label>`).join('')}</div>
      </div>
    `).join('');
    return `<div class="section-head v145-exam-head">
      <div>
        <h2>Contrôle final de l’unité</h2>
        <p>Ce contrôle contient seulement des questions liées à : <strong>${esc(unit.title)}</strong>.</p>
      </div>
      <span class="pill">20 questions / +1 par bonne réponse</span>
    </div>
    <form id="examForm" class="v145-exam-form">
      <div class="exam-list">${questions}</div>
      <button class="btn" type="submit">Terminer le contrôle</button>
      <div id="examResult"></div>
    </form>`;
  };
})();

/* =========================================================
   V146 — Suppression des tests diagnostiques avant chaque unité
   Demande : ne plus afficher le diagnostic au début des unités
   Niveaux concernés : 1AC et 2AC
========================================================= */
(function(){
  const DIAGNOSTIC_UNIT_IDS = ['v124_1ac_systeme', 'v124_1ac_os', 'u3_tableur', 'u4_logo'];

  function v146MarkDiagnosticsAsDone(){
    if(typeof state !== 'object' || !state) return;
    state.v139Done = state.v139Done || {};
    state.v140Done = state.v140Done || {};
    DIAGNOSTIC_UNIT_IDS.forEach(id => {
      state.v139Done[id] = true;
      state.v140Done[id] = true;
    });
  }

  v146MarkDiagnosticsAsDone();

  if(typeof renderUnit === 'function'){
    const v146OldRenderUnit = renderUnit;
    renderUnit = function(){
      v146MarkDiagnosticsAsDone();
      return v146OldRenderUnit.apply(this, arguments);
    };
  }

  if(typeof renderUnitIntro === 'function'){
    const v146OldRenderUnitIntro = renderUnitIntro;
    renderUnitIntro = function(unit){
      let html = v146OldRenderUnitIntro.apply(this, arguments);
      if(typeof html !== 'string') return html;
      html = html.replace(/<button\b[^>]*data-v140-reset=(?:"[^"]*"|'[^']*')[\s\S]*?<\/button>/gi, '');
      html = html.replace(/<button\b[^>]*data-v139-reset=(?:"[^"]*"|'[^']*')[\s\S]*?<\/button>/gi, '');
      return html;
    };
  }

  document.addEventListener('click', function(){
    v146MarkDiagnosticsAsDone();
  }, true);
})();

/* =========================================================
   V147 — Tableur en ligne (Unité 3 / u3_tableur) et
           Logo en ligne (Unité 4 / u4_logo)
   - Bouton ajouté dans la barre latérale gauche de chaque unité.
   - Contenu affiché en pleine page (iframe embed) avec 2 boutons :
       1. Réinitialiser l'espace de travail (recharge l'iframe)
       2. Ouvrir dans un nouvel onglet
   - URLs : tableur → https://yahikopain10.github.io/ppe-support/tableur-online
             logo    → https://yahikopain10.github.io/ppe-support/logo-online
========================================================= */
(function(){

  /* ---- URL map ---- */
  const ONLINE_TOOLS = {
    'u3_tableur': {
      label: 'Tableur en ligne',
      menuIcon: '',
      url: 'https://yahikopain10.github.io/ppe-support/tableur-online',
      title: 'Tableur en ligne',
      description: 'Espace de travail interactif pour pratiquer le tableur directement dans le navigateur.'
    },
    'u4_logo': {
      label: 'Logo en ligne',
      menuIcon: '',
      url: 'https://yahikopain10.github.io/ppe-support/logo-online',
      title: 'Logo en ligne',
      description: 'Espace de travail interactif pour pratiquer la programmation LOGO directement dans le navigateur.'
    }
  };

  /* ---- Patch menu() to add the sidebar button ---- */
  const v147OldMenu = menu;
  menu = function(unit){
    let html = v147OldMenu(unit);
    const tool = unit && ONLINE_TOOLS[unit.id];
    if(!tool) return html;
    /* Insert before closing </aside> */
    const onlineBtn = `<div class="v147-sidebar-divider"></div><button class="menu-btn v147-online-btn ${state.page==='online'?'active':''}" data-menu="online">${tool.menuIcon} ${tool.label}</button>`;
    html = html.replace('</aside>', onlineBtn + '</aside>');
    return html;
  };

  /* ---- Patch renderUnit() to handle page='online' ---- */
  const v147OldRenderUnit = renderUnit;
  renderUnit = function(){
    const unit = currentUnit && currentUnit();
    if(!unit || state.page !== 'online'){
      return v147OldRenderUnit.apply(this, arguments);
    }
    const tool = ONLINE_TOOLS[unit.id];
    if(!tool){
      state.page = 'intro';
      return v147OldRenderUnit.apply(this, arguments);
    }
    /* Build the online workspace page */
    const iframeId = 'v147OnlineIframe';
    const levelClass = state.selectedLevel === '1ac' ? 'v125-unit-view v125-unit-view-1ac'
                     : state.selectedLevel === '2ac' ? 'v125-unit-view v125-unit-view-2ac'
                     : 'v125-unit-view';
    const content = `
      <div class="v147-online-panel">
        <div class="v147-online-header">
          <div>
            <span class="mini-pill">${esc(unit.title)}</span>
            <h2>${esc(tool.title)}</h2>
            <p class="v147-online-desc">${esc(tool.description)}</p>
          </div>
          <div class="v147-online-actions">
            <button class="btn secondary small" id="v147ResetBtn">🔄 Réinitialiser l'espace de travail</button>
            <a class="btn ghost small" href="${esc(tool.url)}" target="_blank" rel="noopener noreferrer">↗ Ouvrir dans un nouvel onglet</a>
          </div>
        </div>
        <div class="v147-iframe-wrap">
          <iframe
            id="${iframeId}"
            src="${esc(tool.url)}"
            class="v147-online-iframe"
            allowfullscreen
            loading="lazy"
            title="${esc(tool.title)}"
          ></iframe>
        </div>
      </div>`;

    $('#app').innerHTML = appShell(`<section class="${levelClass}"><section class="page-title"><h2>${esc(unit.title)}</h2></section><div class="layout">${menu(unit)}<main class="content-card v147-online-content">${content}</main></div></section>`);

    /* Wire up reset button after DOM is ready */
    const resetBtn = document.getElementById('v147ResetBtn');
    if(resetBtn){
      resetBtn.addEventListener('click', function(){
        const iframe = document.getElementById(iframeId);
        if(iframe){
          iframe.src = iframe.src; /* force reload */
        }
      });
    }
  };

  /* ---- Click handler for data-menu="online" ---- */
  document.addEventListener('click', function(e){
    const btn = e.target && e.target.closest ? e.target.closest('[data-menu="online"]') : null;
    if(!btn) return;
    e.stopPropagation();
    state.page = 'online';
    renderUnit();
  }, true);

})();


/* =========================================================
   V148 — Enrichissement demandé : auditif, kinesthésique et
   cartes mentales par sous-réseaux avec toutes les notions.
========================================================= */
(function(){
  const V148_ENRICHED = {
  "v124_1ac_systeme": {
    "unitCompetence": "C0 — Maîtriser les technologies de base relatives au fonctionnement d’un système informatique.",
    "lessons": {
      "Information": {
        "root": "Information",
        "objective": "Définir l’information, distinguer donnée, information et connaissance, puis reconnaître ses formes simples : texte, nombre, image, son et message.",
        "competence": "C0",
        "branches": [
          {
            "title": "Chaîne de compréhension",
            "goal": "Passer de l’observation au sens.",
            "items": [
              {
                "title": "Donnée",
                "def": "Élément brut avant interprétation : un nombre, un mot, une image ou un son.",
                "example": "Le nombre 15 seul est une donnée.",
                "action": "Identifier l’élément brut avant de l’expliquer.",
                "ar": ""
              },
              {
                "title": "Information",
                "def": "Donnée qui a un sens pour l’utilisateur.",
                "example": "« 15 élèves sont présents » est une information.",
                "action": "Donner le sens de la donnée observée.",
                "ar": ""
              },
              {
                "title": "Connaissance",
                "def": "Information comprise, mémorisée et réutilisable.",
                "example": "Comprendre que la classe est presque complète.",
                "action": "Reformuler ce que l’on a compris avec ses mots.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Formes de l’information",
            "goal": "Reconnaître plusieurs formes d’information.",
            "items": [
              {
                "title": "Texte",
                "def": "Information écrite avec des lettres et des mots.",
                "example": "Une consigne affichée à l’écran.",
                "action": "Lire le texte et relever l’idée principale.",
                "ar": ""
              },
              {
                "title": "Nombre",
                "def": "Information numérique utilisée pour compter ou calculer.",
                "example": "Une note, une quantité ou un âge.",
                "action": "Associer le nombre à ce qu’il représente.",
                "ar": ""
              },
              {
                "title": "Image",
                "def": "Information visuelle qui transmet une idée sans beaucoup de mots.",
                "example": "Une icône ou un schéma.",
                "action": "Observer l’image puis expliquer ce qu’elle montre.",
                "ar": ""
              },
              {
                "title": "Son",
                "def": "Information entendue, comme une alerte ou une voix.",
                "example": "Le son d’une notification.",
                "action": "Écouter puis identifier le message transmis.",
                "ar": ""
              },
              {
                "title": "Message",
                "def": "Information transmise à une personne par écrit ou par un outil numérique.",
                "example": "Un SMS ou un e-mail.",
                "action": "Identifier l’émetteur, le contenu et le destinataire.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Compétence et attitude",
            "goal": "Relier le savoir à un comportement responsable.",
            "items": [
              {
                "title": "Comprendre",
                "def": "Donner un sens correct à l’information reçue.",
                "example": "Lire une consigne avant d’agir.",
                "action": "Ne pas cliquer sans comprendre.",
                "ar": ""
              },
              {
                "title": "Vérifier",
                "def": "Contrôler si l’information est claire et utile.",
                "example": "Vérifier une date ou un nom de fichier.",
                "action": "Comparer l’information avec la situation.",
                "ar": ""
              },
              {
                "title": "Respecter le matériel",
                "def": "Utiliser les supports numériques avec prudence.",
                "example": "Ne pas modifier les fichiers des autres.",
                "action": "Travailler calmement et correctement.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Observer un exemple d’information dans la classe.",
          "Dire s’il s’agit d’un texte, nombre, image, son ou message.",
          "Expliquer le sens de l’information."
        ],
        "arObjective": "تعريف المعلومة والتمييز بينها وبين المعطى والمعرفة."
      },
      "Informatique": {
        "root": "Informatique",
        "objective": "Comprendre que l’informatique permet de traiter automatiquement des données pour produire, stocker et communiquer des informations utiles.",
        "competence": "C0",
        "branches": [
          {
            "title": "Traitement de l’information",
            "goal": "Décrire le cycle entrée-traitement-sortie-stockage.",
            "items": [
              {
                "title": "Entrée",
                "def": "Moment où l’on introduit les données dans l’ordinateur.",
                "example": "Saisir des notes au clavier.",
                "action": "Repérer les données de départ.",
                "ar": ""
              },
              {
                "title": "Traitement",
                "def": "Transformation des données par l’ordinateur à l’aide d’un logiciel.",
                "example": "Calculer une moyenne automatiquement.",
                "action": "Expliquer l’opération réalisée.",
                "ar": ""
              },
              {
                "title": "Sortie",
                "def": "Présentation du résultat à l’utilisateur.",
                "example": "Afficher une moyenne ou imprimer un tableau.",
                "action": "Lire le résultat obtenu.",
                "ar": ""
              },
              {
                "title": "Stockage",
                "def": "Conservation des fichiers et données pour les réutiliser plus tard.",
                "example": "Enregistrer un fichier dans Documents.",
                "action": "Choisir un nom et un dossier clairs.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Outils de l’informatique",
            "goal": "Associer l’outil à son rôle.",
            "items": [
              {
                "title": "Ordinateur",
                "def": "Machine qui exécute les traitements demandés.",
                "example": "Un poste de la salle informatique.",
                "action": "Identifier l’outil utilisé.",
                "ar": ""
              },
              {
                "title": "Logiciel",
                "def": "Programme qui aide à réaliser une tâche.",
                "example": "Un traitement de texte ou un tableur.",
                "action": "Associer logiciel et tâche.",
                "ar": ""
              },
              {
                "title": "Automatique",
                "def": "Traitement réalisé rapidement par la machine selon des instructions.",
                "example": "La formule calcule sans refaire le calcul à la main.",
                "action": "Expliquer ce que l’ordinateur fait seul.",
                "ar": ""
              },
              {
                "title": "Résultat",
                "def": "Information obtenue après traitement.",
                "example": "Une note finale, un graphique ou un document.",
                "action": "Comparer les données de départ et le résultat.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Compétence visée",
            "goal": "Donner du sens à l’usage de l’ordinateur.",
            "items": [
              {
                "title": "Analyser",
                "def": "Comprendre le problème avant d’utiliser l’ordinateur.",
                "example": "Savoir pourquoi on utilise le tableur.",
                "action": "Dire la tâche à réaliser.",
                "ar": ""
              },
              {
                "title": "Utiliser",
                "def": "Employer correctement les outils numériques.",
                "example": "Lancer le logiciel adapté.",
                "action": "Choisir l’outil selon le besoin.",
                "ar": ""
              },
              {
                "title": "Communiquer",
                "def": "Présenter ou transmettre l’information obtenue.",
                "example": "Partager un résultat ou un document.",
                "action": "Expliquer clairement le résultat.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Choisir une petite situation de classe.",
          "Nommer les données d’entrée.",
          "Expliquer le traitement et le résultat."
        ],
        "arObjective": "فهم أن الإعلاميات تعالج المعطيات آليا لإنتاج معلومات مفيدة."
      },
      "Système informatique": {
        "root": "Système informatique",
        "objective": "Identifier les constituants d’un système informatique et expliquer le rôle de chaque constituant : utilisateur, matériel, logiciels, données et résultats.",
        "competence": "C0",
        "branches": [
          {
            "title": "Constituants principaux",
            "goal": "Distinguer les éléments du système.",
            "items": [
              {
                "title": "Utilisateur",
                "def": "Personne qui utilise le système et donne des actions.",
                "example": "L’élève devant le poste.",
                "action": "Préciser qui utilise le système.",
                "ar": ""
              },
              {
                "title": "Matériel",
                "def": "Parties physiques que l’on peut voir ou toucher.",
                "example": "Écran, clavier, souris, unité centrale.",
                "action": "Distinguer matériel et logiciel.",
                "ar": ""
              },
              {
                "title": "Logiciels",
                "def": "Programmes nécessaires pour travailler avec le matériel.",
                "example": "Windows, navigateur, tableur.",
                "action": "Citer un logiciel et son rôle.",
                "ar": ""
              },
              {
                "title": "Données",
                "def": "Informations de départ utilisées par le système.",
                "example": "Texte saisi ou image ouverte.",
                "action": "Nommer les données manipulées.",
                "ar": ""
              },
              {
                "title": "Résultats",
                "def": "Informations produites après traitement.",
                "example": "Texte affiché, image modifiée, document imprimé.",
                "action": "Expliquer le résultat obtenu.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Fonctions du système",
            "goal": "Relier constituants et fonctions.",
            "items": [
              {
                "title": "Saisir",
                "def": "Faire entrer des données dans l’ordinateur.",
                "example": "Taper un texte avec le clavier.",
                "action": "Utiliser le périphérique d’entrée.",
                "ar": ""
              },
              {
                "title": "Traiter",
                "def": "Transformer les données pour obtenir un résultat.",
                "example": "Calculer, classer ou modifier.",
                "action": "Décrire l’action du logiciel.",
                "ar": ""
              },
              {
                "title": "Afficher",
                "def": "Montrer le résultat à l’écran.",
                "example": "Voir une image ou un tableau.",
                "action": "Lire le résultat affiché.",
                "ar": ""
              },
              {
                "title": "Imprimer",
                "def": "Produire un résultat sur papier.",
                "example": "Imprimer un document.",
                "action": "Choisir l’imprimante avec prudence.",
                "ar": ""
              },
              {
                "title": "Stocker",
                "def": "Garder le travail sous forme de fichier.",
                "example": "Enregistrer dans un dossier.",
                "action": "Nommer et classer le fichier.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Savoir-être",
            "goal": "Développer une utilisation responsable.",
            "items": [
              {
                "title": "Préserver le matériel",
                "def": "Manipuler le clavier, la souris et les câbles avec soin.",
                "example": "Ne pas tirer un câble brutalement.",
                "action": "Appliquer les règles de sécurité.",
                "ar": ""
              },
              {
                "title": "Organisation",
                "def": "Ranger les fichiers et respecter l’espace de travail.",
                "example": "Ne pas laisser des fichiers au hasard.",
                "action": "Créer des dossiers clairs.",
                "ar": ""
              },
              {
                "title": "Sécurité",
                "def": "Éviter les actions dangereuses pour le poste ou les fichiers.",
                "example": "Ne pas supprimer sans vérifier.",
                "action": "Demander de l’aide en cas de doute.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Observer un poste de travail.",
          "Citer trois matériels et deux logiciels.",
          "Expliquer entrée, traitement, sortie et stockage."
        ],
        "arObjective": "تحديد مكونات النظام المعلوماتي ووظيفة كل مكون."
      },
      "Connectivités": {
        "root": "Connectivités",
        "objective": "Reconnaître les moyens de connexion entre les appareils et expliquer leur rôle dans l’échange des données.",
        "competence": "C0",
        "branches": [
          {
            "title": "Types de connexion",
            "goal": "Distinguer avec câble et sans fil.",
            "items": [
              {
                "title": "Connexion",
                "def": "Lien établi entre deux appareils pour échanger des données.",
                "example": "Relier un téléphone à un ordinateur.",
                "action": "Identifier les appareils reliés.",
                "ar": ""
              },
              {
                "title": "Câble",
                "def": "Support physique qui relie deux éléments.",
                "example": "Câble USB ou câble réseau.",
                "action": "Brancher correctement sans forcer.",
                "ar": ""
              },
              {
                "title": "Port",
                "def": "Emplacement où l’on branche un câble ou un périphérique.",
                "example": "Port USB de l’unité centrale.",
                "action": "Choisir le port adapté.",
                "ar": ""
              },
              {
                "title": "USB",
                "def": "Connexion par câble utilisée pour transférer des données ou recharger.",
                "example": "Relier une clé USB ou un téléphone.",
                "action": "Brancher, vérifier puis retirer correctement.",
                "ar": ""
              },
              {
                "title": "Wi‑Fi",
                "def": "Connexion sans fil vers un réseau ou Internet.",
                "example": "Connecter un ordinateur au réseau de l’établissement.",
                "action": "Vérifier le nom du réseau.",
                "ar": ""
              },
              {
                "title": "Bluetooth",
                "def": "Connexion sans fil à courte distance.",
                "example": "Connecter un casque ou un téléphone.",
                "action": "Associer deux appareils proches.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Rôle pédagogique",
            "goal": "Comprendre pourquoi on connecte les appareils.",
            "items": [
              {
                "title": "Échanger",
                "def": "Transmettre des données entre appareils.",
                "example": "Copier un fichier depuis une clé USB.",
                "action": "Vérifier que le fichier est transféré.",
                "ar": ""
              },
              {
                "title": "Partager",
                "def": "Mettre une ressource à disposition d’autres utilisateurs.",
                "example": "Partager un fichier dans un réseau local.",
                "action": "Respecter les droits d’accès.",
                "ar": ""
              },
              {
                "title": "Communiquer",
                "def": "Envoyer ou recevoir des informations.",
                "example": "Envoyer un document à un camarade.",
                "action": "Choisir le moyen de communication adapté.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Sécurité",
            "goal": "Utiliser la connectivité de manière responsable.",
            "items": [
              {
                "title": "Prudence",
                "def": "Éviter les branchements hasardeux ou dangereux.",
                "example": "Ne pas forcer un port USB.",
                "action": "Demander de l’aide si le branchement ne convient pas.",
                "ar": ""
              },
              {
                "title": "Protection",
                "def": "Éviter les fichiers suspects et protéger les données.",
                "example": "Ne pas ouvrir une clé inconnue sans autorisation.",
                "action": "Respecter les consignes du professeur.",
                "ar": ""
              },
              {
                "title": "Respect",
                "def": "Ne pas utiliser les connexions pour accéder aux fichiers des autres.",
                "example": "Ne pas consulter un dossier partagé sans permission.",
                "action": "Respecter la confidentialité.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Choisir deux appareils à relier.",
          "Dire s’il faut un câble ou une connexion sans fil.",
          "Expliquer les données échangées."
        ],
        "arObjective": "تمييز وسائل الربط بين الأجهزة ودورها في تبادل المعطيات."
      },
      "Les logiciels": {
        "root": "Les logiciels",
        "objective": "Définir le logiciel, distinguer système d’exploitation, application et programme, puis associer chaque logiciel à une tâche.",
        "competence": "C0",
        "branches": [
          {
            "title": "Notions",
            "goal": "Différencier les types de logiciels.",
            "items": [
              {
                "title": "Logiciel",
                "def": "Programme ou ensemble de programmes qui permet de réaliser une tâche.",
                "example": "Word, Excel, Paint ou un navigateur.",
                "action": "Dire la tâche réalisée par le logiciel.",
                "ar": ""
              },
              {
                "title": "Programme",
                "def": "Suite d’instructions exécutées par l’ordinateur.",
                "example": "Une application qui calcule ou dessine.",
                "action": "Comprendre que le logiciel suit des instructions.",
                "ar": ""
              },
              {
                "title": "Application",
                "def": "Logiciel utilisé directement par l’utilisateur pour une tâche précise.",
                "example": "Gmail, WhatsApp, calculatrice.",
                "action": "Associer application et besoin.",
                "ar": ""
              },
              {
                "title": "Système d’exploitation",
                "def": "Logiciel principal qui permet à l’appareil de fonctionner.",
                "example": "Windows, Android, Linux.",
                "action": "Le distinguer des autres applications.",
                "ar": ""
              },
              {
                "title": "Navigateur",
                "def": "Logiciel qui permet de consulter des pages Web.",
                "example": "Chrome, Edge ou Firefox.",
                "action": "L’utiliser pour accéder à un site.",
                "ar": ""
              },
              {
                "title": "Application mobile",
                "def": "Application installée sur téléphone ou tablette.",
                "example": "Application de messagerie ou carte.",
                "action": "Donner un exemple connu.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Usages",
            "goal": "Associer logiciel et tâche.",
            "items": [
              {
                "title": "Écrire",
                "def": "Utiliser un logiciel pour produire un texte.",
                "example": "Traitement de texte.",
                "action": "Choisir l’application adaptée.",
                "ar": ""
              },
              {
                "title": "Calculer",
                "def": "Utiliser un tableur ou une calculatrice pour traiter des nombres.",
                "example": "Calcul de moyenne.",
                "action": "Vérifier le résultat.",
                "ar": ""
              },
              {
                "title": "Dessiner",
                "def": "Créer ou modifier une image.",
                "example": "Logiciel de dessin.",
                "action": "Utiliser les outils de base.",
                "ar": ""
              },
              {
                "title": "Naviguer",
                "def": "Rechercher ou consulter une information sur le Web.",
                "example": "Chercher une définition.",
                "action": "Vérifier la fiabilité de l’information.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Bonnes pratiques",
            "goal": "Utiliser les logiciels de façon organisée.",
            "items": [
              {
                "title": "Choisir",
                "def": "Sélectionner le logiciel adapté au besoin.",
                "example": "Tableur pour calculer, navigateur pour chercher.",
                "action": "Justifier son choix.",
                "ar": ""
              },
              {
                "title": "Enregistrer",
                "def": "Sauvegarder le travail produit par le logiciel.",
                "example": "Enregistrer un document texte.",
                "action": "Nommer clairement le fichier.",
                "ar": ""
              },
              {
                "title": "Respecter",
                "def": "Utiliser les logiciels autorisés et suivre les consignes.",
                "example": "Ne pas installer sans autorisation.",
                "action": "Respecter l’organisation de la salle.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Citer trois logiciels.",
          "Dire la tâche de chacun.",
          "Classer : système d’exploitation ou application."
        ],
        "arObjective": "تعريف البرنامج وربطه بالمهمة التي ينجزها."
      }
    }
  },
  "v124_1ac_os": {
    "unitCompetence": "C31 — Exploiter les interfaces graphiques d’un système d’exploitation pour interagir avec un système informatique.",
    "lessons": {
      "Notion de système d’exploitation": {
        "root": "Système d’exploitation",
        "objective": "Définir le système d’exploitation comme logiciel principal et citer des exemples utilisés sur ordinateur, tablette ou téléphone.",
        "competence": "C31",
        "branches": [
          {
            "title": "Définition et rôle",
            "goal": "Comprendre le rôle général du système.",
            "items": [
              {
                "title": "Système d’exploitation",
                "def": "Logiciel principal qui fait fonctionner l’appareil et permet d’utiliser les autres logiciels.",
                "example": "Windows sur un PC ou Android sur un téléphone.",
                "action": "Citer son rôle avant de donner des exemples.",
                "ar": ""
              },
              {
                "title": "Logiciel principal",
                "def": "Programme essentiel sans lequel l’utilisateur ne peut pas exploiter facilement le matériel.",
                "example": "L’ordinateur affiche le bureau grâce au système.",
                "action": "Expliquer pourquoi il est indispensable.",
                "ar": ""
              },
              {
                "title": "Interface graphique",
                "def": "Ensemble d’éléments visuels permettant d’agir : fenêtres, icônes, menus.",
                "example": "Cliquer sur une icône pour ouvrir un programme.",
                "action": "Reconnaître les éléments visibles.",
                "ar": ""
              },
              {
                "title": "Gestion des fichiers",
                "def": "Organisation, ouverture, copie, déplacement et suppression des fichiers et dossiers.",
                "example": "Créer un dossier Exercices.",
                "action": "Utiliser l’explorateur avec prudence.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Exemples",
            "goal": "Donner des exemples variés.",
            "items": [
              {
                "title": "Windows",
                "def": "Système d’exploitation courant sur les ordinateurs personnels.",
                "example": "Windows 10 ou Windows 11.",
                "action": "Le reconnaître sur un poste de classe.",
                "ar": ""
              },
              {
                "title": "Linux",
                "def": "Système d’exploitation utilisé sur certains ordinateurs et serveurs.",
                "example": "Ubuntu est une distribution Linux.",
                "action": "Le citer comme exemple possible.",
                "ar": ""
              },
              {
                "title": "macOS",
                "def": "Système d’exploitation des ordinateurs Apple.",
                "example": "MacBook avec macOS.",
                "action": "Le distinguer de Windows.",
                "ar": ""
              },
              {
                "title": "Android",
                "def": "Système d’exploitation très utilisé sur téléphones et tablettes.",
                "example": "Téléphone Android.",
                "action": "Relier système et appareil mobile.",
                "ar": ""
              },
              {
                "title": "iOS",
                "def": "Système d’exploitation utilisé sur iPhone.",
                "example": "iPhone avec iOS.",
                "action": "Le citer comme exemple mobile.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Savoir-faire",
            "goal": "Utiliser le poste correctement.",
            "items": [
              {
                "title": "Démarrer",
                "def": "Mettre l’appareil en marche et attendre le chargement du système.",
                "example": "Allumer l’ordinateur de la salle.",
                "action": "Suivre l’ordre correct.",
                "ar": ""
              },
              {
                "title": "Ouvrir une session",
                "def": "Accéder à l’espace de travail avec un compte.",
                "example": "Saisir son nom ou mot de passe.",
                "action": "Respecter la confidentialité.",
                "ar": ""
              },
              {
                "title": "Lancer un logiciel",
                "def": "Ouvrir une application depuis le bureau ou le menu.",
                "example": "Ouvrir le navigateur.",
                "action": "Utiliser l’icône ou le menu.",
                "ar": ""
              },
              {
                "title": "Arrêter correctement",
                "def": "Fermer le poste sans perdre le travail.",
                "example": "Enregistrer puis cliquer sur Arrêter.",
                "action": "Ne pas débrancher directement.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Citer deux systèmes d’exploitation.",
          "Expliquer le rôle du système d’exploitation.",
          "Donner une action réalisée grâce à lui."
        ],
        "arObjective": "تعريف نظام التشغيل كبرنامج رئيسي للجهاز."
      },
      "Gestion des fenêtres": {
        "root": "Gestion des fenêtres",
        "objective": "Manipuler une fenêtre : ouvrir, réduire, agrandir, restaurer, déplacer et fermer en comprenant la différence entre les actions.",
        "competence": "C31",
        "branches": [
          {
            "title": "Notions de fenêtre",
            "goal": "Reconnaître les éléments d’une fenêtre.",
            "items": [
              {
                "title": "Fenêtre",
                "def": "Zone qui affiche un programme, un dossier ou un document.",
                "example": "Fenêtre de l’explorateur de fichiers.",
                "action": "Repérer son titre et son contenu.",
                "ar": ""
              },
              {
                "title": "Barre de titre",
                "def": "Partie supérieure qui affiche le nom de la fenêtre.",
                "example": "Nom du fichier ou de l’application.",
                "action": "Lire le titre pour se repérer.",
                "ar": ""
              },
              {
                "title": "Boutons de contrôle",
                "def": "Boutons qui permettent de réduire, agrandir/restaurer ou fermer.",
                "example": "Les boutons en haut de la fenêtre.",
                "action": "Choisir le bon bouton selon l’action.",
                "ar": ""
              },
              {
                "title": "Zone de travail",
                "def": "Partie où s’affiche le contenu de la fenêtre.",
                "example": "Liste de fichiers ou document ouvert.",
                "action": "Observer avant d’agir.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Actions",
            "goal": "Maîtriser les gestes essentiels.",
            "items": [
              {
                "title": "Ouvrir",
                "def": "Afficher une fenêtre à partir d’un programme, d’un fichier ou d’un dossier.",
                "example": "Double-cliquer sur une icône.",
                "action": "Vérifier que la fenêtre s’affiche.",
                "ar": ""
              },
              {
                "title": "Réduire",
                "def": "Cacher temporairement la fenêtre dans la barre des tâches sans la fermer.",
                "example": "Cliquer sur le bouton _.",
                "action": "Retrouver la fenêtre dans la barre des tâches.",
                "ar": ""
              },
              {
                "title": "Agrandir",
                "def": "Augmenter la taille de la fenêtre jusqu’à occuper l’écran.",
                "example": "Cliquer sur le bouton carré.",
                "action": "Utiliser pour mieux lire le contenu.",
                "ar": ""
              },
              {
                "title": "Restaurer",
                "def": "Revenir à la taille précédente après agrandissement.",
                "example": "Cliquer à nouveau sur le bouton de taille.",
                "action": "Comparer avant/après.",
                "ar": ""
              },
              {
                "title": "Déplacer",
                "def": "Changer la position de la fenêtre sur l’écran.",
                "example": "Glisser la barre de titre.",
                "action": "Déplacer sans fermer.",
                "ar": ""
              },
              {
                "title": "Fermer",
                "def": "Quitter la fenêtre ou le document affiché.",
                "example": "Cliquer sur X.",
                "action": "Enregistrer avant de fermer si nécessaire.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Erreurs à éviter",
            "goal": "Développer précision et prudence.",
            "items": [
              {
                "title": "Confondre réduire et fermer",
                "def": "Réduire garde le programme ouvert ; fermer quitte la fenêtre.",
                "example": "Une fenêtre réduite reste dans la barre des tâches.",
                "action": "Expliquer la différence oralement.",
                "ar": ""
              },
              {
                "title": "Fermer sans enregistrer",
                "def": "Action qui peut faire perdre le travail non sauvegardé.",
                "example": "Fermer un document modifié.",
                "action": "Enregistrer avant de quitter.",
                "ar": ""
              },
              {
                "title": "Cliquer au hasard",
                "def": "Action non réfléchie qui peut perturber le travail.",
                "example": "Cliquer sur X au lieu de réduire.",
                "action": "Lire les boutons avant d’agir.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Ouvrir une fenêtre.",
          "La réduire puis la retrouver.",
          "L’agrandir, la déplacer puis la fermer après enregistrement."
        ],
        "arObjective": "التحكم في النوافذ: فتح، تصغير، تكبير، نقل، إغلاق."
      },
      "Organisation du poste de travail (bureau)": {
        "root": "Bureau et organisation du poste",
        "objective": "Identifier les éléments du bureau et organiser l’espace de travail : icônes, barre des tâches, dossiers, fichiers, corbeille et zone de notification.",
        "competence": "C31",
        "branches": [
          {
            "title": "Éléments du bureau",
            "goal": "Identifier les repères du bureau.",
            "items": [
              {
                "title": "Bureau",
                "def": "Espace principal affiché après l’ouverture de session.",
                "example": "Fond d’écran avec icônes.",
                "action": "Repérer les éléments visibles.",
                "ar": ""
              },
              {
                "title": "Icône",
                "def": "Petit symbole représentant un programme, fichier, dossier ou raccourci.",
                "example": "Icône de la corbeille ou du navigateur.",
                "action": "Double-cliquer pour ouvrir.",
                "ar": ""
              },
              {
                "title": "Fond d’écran",
                "def": "Image ou couleur affichée derrière les icônes.",
                "example": "Image du bureau.",
                "action": "Ne pas confondre avec une fenêtre.",
                "ar": ""
              },
              {
                "title": "Bouton Démarrer",
                "def": "Accès aux programmes et paramètres principaux.",
                "example": "Menu Démarrer de Windows.",
                "action": "L’utiliser pour lancer un logiciel.",
                "ar": ""
              },
              {
                "title": "Barre des tâches",
                "def": "Barre qui affiche les programmes ouverts et certains raccourcis.",
                "example": "Barre en bas de l’écran.",
                "action": "Retrouver une fenêtre réduite.",
                "ar": ""
              },
              {
                "title": "Zone de notification",
                "def": "Partie qui affiche l’heure et certains états du système.",
                "example": "Volume, réseau, batterie.",
                "action": "Lire une information système.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Organisation des fichiers",
            "goal": "Classer pour retrouver le travail.",
            "items": [
              {
                "title": "Fichier",
                "def": "Document numérique contenant un travail.",
                "example": "Exercice Word ou image.",
                "action": "Nommer clairement.",
                "ar": ""
              },
              {
                "title": "Dossier",
                "def": "Emplacement qui regroupe des fichiers.",
                "example": "Dossier Informatique.",
                "action": "Classer les documents.",
                "ar": ""
              },
              {
                "title": "Renommer",
                "def": "Changer le nom d’un fichier ou d’un dossier.",
                "example": "Nouveau dossier devient Séance1.",
                "action": "Utiliser un nom significatif.",
                "ar": ""
              },
              {
                "title": "Copier",
                "def": "Créer un double d’un fichier.",
                "example": "Copier un exercice sur clé USB.",
                "action": "Vérifier la copie.",
                "ar": ""
              },
              {
                "title": "Déplacer",
                "def": "Changer l’emplacement d’un fichier.",
                "example": "Mettre l’exercice dans son dossier.",
                "action": "Glisser ou couper-coller avec prudence.",
                "ar": ""
              },
              {
                "title": "Corbeille",
                "def": "Emplacement qui reçoit les éléments supprimés.",
                "example": "Fichier supprimé par erreur.",
                "action": "Vérifier avant suppression.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Attitudes",
            "goal": "Travailler avec logique et organisation.",
            "items": [
              {
                "title": "Organisation",
                "def": "Garder un bureau clair et des fichiers bien rangés.",
                "example": "Créer des dossiers par matière ou séance.",
                "action": "Éviter le désordre numérique.",
                "ar": ""
              },
              {
                "title": "Communication",
                "def": "Expliquer oralement où se trouve un fichier et comment le retrouver.",
                "example": "Indiquer le chemin du dossier.",
                "action": "Utiliser le vocabulaire correct.",
                "ar": ""
              },
              {
                "title": "Prudence",
                "def": "Éviter les suppressions ou modifications non vérifiées.",
                "example": "Lire les messages de confirmation.",
                "action": "Demander avant de supprimer.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Créer un dossier sur le bureau.",
          "Le nommer clairement.",
          "Y déplacer un fichier puis expliquer le chemin."
        ],
        "arObjective": "تنظيم سطح المكتب والملفات والمجلدات."
      }
    }
  },
  "u3_tableur": {
    "unitCompetence": "C12 — Produire un document de calcul : opérer sur les cellules, saisir et recopier des formules, insérer des fonctions et créer un graphe.",
    "lessons": {
      "Gestion d’un fichier tableur": {
        "root": "Gestion d’un fichier tableur",
        "objective": "Créer, ouvrir, nommer, enregistrer et retrouver un classeur afin de gérer correctement un document de calcul.",
        "competence": "C12",
        "branches": [
          {
            "title": "Notions de fichier",
            "goal": "Identifier ce qu’on manipule.",
            "items": [
              {
                "title": "Classeur",
                "def": "Fichier principal du tableur contenant une ou plusieurs feuilles.",
                "example": "notes_2AC.xlsx",
                "action": "Créer un nouveau classeur.",
                "ar": ""
              },
              {
                "title": "Fichier tableur",
                "def": "Document numérique utilisé pour organiser des données et des calculs.",
                "example": "Tableau des absences ou des notes.",
                "action": "L’ouvrir et le modifier.",
                "ar": ""
              },
              {
                "title": "Nom du fichier",
                "def": "Nom qui permet de reconnaître facilement le travail.",
                "example": "moyennes_classe au lieu de Nouveau classeur.",
                "action": "Choisir un nom clair.",
                "ar": ""
              },
              {
                "title": "Dossier",
                "def": "Emplacement où l’on range le fichier.",
                "example": "Dossier Informatique.",
                "action": "Enregistrer dans le bon dossier.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Savoir-faire",
            "goal": "Maîtriser la gestion de base.",
            "items": [
              {
                "title": "Créer",
                "def": "Commencer un nouveau classeur vide.",
                "example": "Cliquer sur Nouveau classeur.",
                "action": "Créer avant de saisir.",
                "ar": ""
              },
              {
                "title": "Ouvrir",
                "def": "Reprendre un classeur déjà enregistré.",
                "example": "Ouvrir notes_2AC.xlsx.",
                "action": "Retrouver le fichier.",
                "ar": ""
              },
              {
                "title": "Enregistrer",
                "def": "Garder le travail pour ne pas le perdre.",
                "example": "Ctrl+S ou Enregistrer.",
                "action": "Sauvegarder régulièrement.",
                "ar": ""
              },
              {
                "title": "Enregistrer sous",
                "def": "Choisir l’emplacement et le nom du fichier.",
                "example": "Enregistrer dans Documents.",
                "action": "Choisir dossier et nom.",
                "ar": ""
              },
              {
                "title": "Fermer",
                "def": "Quitter le fichier après sauvegarde.",
                "example": "Fermer le classeur.",
                "action": "Vérifier l’enregistrement avant de fermer.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Compétence C12",
            "goal": "Préparer la production tableur.",
            "items": [
              {
                "title": "Produire",
                "def": "Créer un document de calcul complet et exploitable.",
                "example": "Un tableau de notes enregistré.",
                "action": "Préparer un fichier propre.",
                "ar": ""
              },
              {
                "title": "Organiser",
                "def": "Ranger le travail dans une structure claire.",
                "example": "Dossier par séance.",
                "action": "Retrouver rapidement.",
                "ar": ""
              },
              {
                "title": "Autonomie",
                "def": "Gérer son fichier sans perdre le travail.",
                "example": "Sauvegarde régulière.",
                "action": "Suivre les étapes dans l’ordre.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Créer un classeur.",
          "Le nommer avec un nom significatif.",
          "L’enregistrer dans un dossier connu puis le rouvrir."
        ],
        "arObjective": "إنشاء ملف جدول وتسميته وحفظه وفتحه من جديد."
      },
      "Feuilles, cellules et adresses": {
        "root": "Feuilles, cellules et adresses",
        "objective": "Se repérer dans un classeur en identifiant feuille, ligne, colonne, cellule, adresse et plage.",
        "competence": "C12",
        "branches": [
          {
            "title": "Structure du tableur",
            "goal": "Comprendre l’espace de travail.",
            "items": [
              {
                "title": "Feuille",
                "def": "Page du classeur composée de lignes et de colonnes.",
                "example": "Feuil1 dans Excel.",
                "action": "Choisir la bonne feuille.",
                "ar": ""
              },
              {
                "title": "Ligne",
                "def": "Suite horizontale repérée par un numéro.",
                "example": "Ligne 3.",
                "action": "Repérer le numéro.",
                "ar": ""
              },
              {
                "title": "Colonne",
                "def": "Suite verticale repérée par une lettre.",
                "example": "Colonne B.",
                "action": "Repérer la lettre.",
                "ar": ""
              },
              {
                "title": "Cellule",
                "def": "Intersection entre une ligne et une colonne.",
                "example": "Cellule B3.",
                "action": "Cliquer sur la cellule voulue.",
                "ar": ""
              },
              {
                "title": "Adresse",
                "def": "Référence qui indique la position d’une cellule.",
                "example": "B3 = colonne B et ligne 3.",
                "action": "Lire et écrire l’adresse.",
                "ar": ""
              },
              {
                "title": "Plage",
                "def": "Ensemble de cellules sélectionnées.",
                "example": "A1:C5.",
                "action": "Sélectionner plusieurs cellules.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Savoir-faire",
            "goal": "S’orienter avec précision.",
            "items": [
              {
                "title": "Sélectionner",
                "def": "Choisir une cellule ou une plage pour agir dessus.",
                "example": "Sélectionner A1:B4.",
                "action": "Cliquer ou glisser.",
                "ar": ""
              },
              {
                "title": "Lire une adresse",
                "def": "Interpréter colonne et ligne dans une référence.",
                "example": "C5 = colonne C ligne 5.",
                "action": "Commencer par la lettre.",
                "ar": ""
              },
              {
                "title": "Se déplacer",
                "def": "Changer de cellule dans la feuille.",
                "example": "Passer de A1 à B1.",
                "action": "Utiliser souris ou clavier.",
                "ar": ""
              },
              {
                "title": "Nommer une zone",
                "def": "Décrire une plage par ses deux extrémités.",
                "example": "A1:A10.",
                "action": "Lire la plage correctement.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Compétence C12",
            "goal": "Préparer les calculs fiables.",
            "items": [
              {
                "title": "Précision",
                "def": "Utiliser les bonnes adresses pour éviter les erreurs.",
                "example": "Écrire B3 et non 3B.",
                "action": "Vérifier l’adresse avant la formule.",
                "ar": ""
              },
              {
                "title": "Interprétation",
                "def": "Comprendre ce que désigne chaque cellule.",
                "example": "Associer une cellule à une note.",
                "action": "Relier adresse et donnée.",
                "ar": ""
              },
              {
                "title": "Organisation",
                "def": "Structurer les données en lignes et colonnes.",
                "example": "Tableau avec titres.",
                "action": "Préparer le calcul.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Repérer une cellule donnée.",
          "Lire son adresse.",
          "Sélectionner une plage de cellules."
        ],
        "arObjective": "التمييز بين الورقة والخلية والعنوان والنطاق."
      },
      "Saisie des données et mise en forme d’un tableau": {
        "root": "Saisie et mise en forme",
        "objective": "Saisir texte, nombre, date ou formule dans une cellule et mettre en forme un tableau pour le rendre lisible.",
        "competence": "C12",
        "branches": [
          {
            "title": "Types de données",
            "goal": "Saisir correctement.",
            "items": [
              {
                "title": "Texte",
                "def": "Donnée composée de lettres ou mots.",
                "example": "Nom d’un élève.",
                "action": "Saisir sans signe =.",
                "ar": ""
              },
              {
                "title": "Nombre",
                "def": "Donnée numérique utilisable dans les calculs.",
                "example": "12 ou 15,5.",
                "action": "Utiliser le bon format.",
                "ar": ""
              },
              {
                "title": "Date",
                "def": "Donnée indiquant un jour, mois et année.",
                "example": "16/06/2026.",
                "action": "Respecter le format.",
                "ar": ""
              },
              {
                "title": "Formule",
                "def": "Expression qui commence par = et calcule un résultat.",
                "example": "=B2+C2.",
                "action": "Commencer par =.",
                "ar": ""
              },
              {
                "title": "Erreur de saisie",
                "def": "Donnée mal entrée qui fausse le résultat.",
                "example": "Écrire 1O au lieu de 10.",
                "action": "Relire la cellule.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Mise en forme",
            "goal": "Rendre le tableau lisible.",
            "items": [
              {
                "title": "Titre",
                "def": "Texte qui présente le tableau.",
                "example": "Tableau des notes.",
                "action": "Le mettre en évidence.",
                "ar": ""
              },
              {
                "title": "Bordures",
                "def": "Lignes qui séparent les cellules.",
                "example": "Encadrer un tableau.",
                "action": "Appliquer aux cellules utiles.",
                "ar": ""
              },
              {
                "title": "Alignement",
                "def": "Position du contenu dans la cellule.",
                "example": "Centrer les titres.",
                "action": "Choisir gauche, centre ou droite.",
                "ar": ""
              },
              {
                "title": "Format nombre",
                "def": "Présentation adaptée d’un nombre.",
                "example": "Deux décimales ou pourcentage.",
                "action": "Choisir le format correct.",
                "ar": ""
              },
              {
                "title": "Largeur de colonne",
                "def": "Taille de la colonne pour afficher le contenu.",
                "example": "Ajuster une colonne trop étroite.",
                "action": "Élargir sans cacher le texte.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Compétence C12",
            "goal": "Présenter une production correcte.",
            "items": [
              {
                "title": "Lisibilité",
                "def": "Le tableau doit être facile à lire et comprendre.",
                "example": "Titres clairs et bordures propres.",
                "action": "Vérifier l’apparence.",
                "ar": ""
              },
              {
                "title": "Séparation contenu/apparence",
                "def": "La mise en forme change l’aspect, pas le calcul.",
                "example": "La couleur ne calcule pas la moyenne.",
                "action": "Utiliser les formules pour calculer.",
                "ar": ""
              },
              {
                "title": "Rigueur",
                "def": "Saisir les données sans confusion.",
                "example": "Nombre dans cellule prévue.",
                "action": "Corriger les erreurs.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Saisir un petit tableau.",
          "Ajouter un titre et des bordures.",
          "Ajuster l’alignement et les largeurs."
        ],
        "arObjective": "إدخال المعطيات وتنسيق الجدول ليصبح مقروءا."
      },
      "Formules, fonctions et recopie": {
        "root": "Formules, fonctions et recopie",
        "objective": "Utiliser formules, adresses de cellules, fonctions simples et recopie pour automatiser les calculs.",
        "competence": "C12",
        "branches": [
          {
            "title": "Calculs",
            "goal": "Écrire des calculs fiables.",
            "items": [
              {
                "title": "Formule",
                "def": "Calcul écrit dans une cellule et commençant par =.",
                "example": "=B2+C2.",
                "action": "Écrire le signe = en premier.",
                "ar": ""
              },
              {
                "title": "Opérateur",
                "def": "Signe de calcul : +, -, *, /.",
                "example": "=A1*B1.",
                "action": "Choisir l’opérateur adapté.",
                "ar": ""
              },
              {
                "title": "Adresse relative",
                "def": "Adresse qui s’adapte lors de la recopie.",
                "example": "B2 devient B3 en recopiant vers le bas.",
                "action": "Comprendre le changement.",
                "ar": ""
              },
              {
                "title": "Adresse absolue",
                "def": "Adresse qui reste fixe grâce au signe $.",
                "example": "$B$1.",
                "action": "L’utiliser pour une valeur fixe.",
                "ar": ""
              },
              {
                "title": "Résultat",
                "def": "Valeur obtenue après le calcul.",
                "example": "Total d’un achat.",
                "action": "Vérifier la cohérence.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Fonctions",
            "goal": "Choisir la fonction selon le besoin.",
            "items": [
              {
                "title": "Fonction",
                "def": "Formule prête à l’emploi avec un nom.",
                "example": "SOMME(A1:A5).",
                "action": "Insérer la fonction adaptée.",
                "ar": ""
              },
              {
                "title": "SOMME",
                "def": "Fonction qui additionne des valeurs.",
                "example": "=SOMME(B2:B6).",
                "action": "Additionner une plage.",
                "ar": ""
              },
              {
                "title": "MOYENNE",
                "def": "Fonction qui calcule la moyenne.",
                "example": "=MOYENNE(C2:C6).",
                "action": "Interpréter le résultat.",
                "ar": ""
              },
              {
                "title": "MAX",
                "def": "Fonction qui donne la plus grande valeur.",
                "example": "=MAX(D2:D6).",
                "action": "Chercher la valeur maximale.",
                "ar": ""
              },
              {
                "title": "MIN",
                "def": "Fonction qui donne la plus petite valeur.",
                "example": "=MIN(D2:D6).",
                "action": "Chercher la valeur minimale.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Recopie",
            "goal": "Gagner du temps sans perdre la précision.",
            "items": [
              {
                "title": "Poignée de recopie",
                "def": "Petit carré qui permet d’étendre une formule.",
                "example": "Tirer la formule de D2 vers D10.",
                "action": "Tirer avec attention.",
                "ar": ""
              },
              {
                "title": "Recopier",
                "def": "Réutiliser une formule dans d’autres cellules.",
                "example": "Même calcul pour tous les élèves.",
                "action": "Observer les adresses modifiées.",
                "ar": ""
              },
              {
                "title": "Vérifier",
                "def": "Contrôler que les résultats restent cohérents.",
                "example": "Comparer deux lignes calculées.",
                "action": "Corriger l’adresse si nécessaire.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Compétence C12",
            "goal": "Produire des résultats fiables.",
            "items": [
              {
                "title": "Automatiser",
                "def": "Faire réaliser les calculs par le tableur.",
                "example": "Calcul automatique des moyennes.",
                "action": "Utiliser formule ou fonction.",
                "ar": ""
              },
              {
                "title": "Interpréter",
                "def": "Comprendre le sens du résultat.",
                "example": "Une moyenne supérieure à 10.",
                "action": "Lire et expliquer le résultat.",
                "ar": ""
              },
              {
                "title": "Rigueur",
                "def": "Éviter les erreurs de formule.",
                "example": "Vérifier le signe = et les adresses.",
                "action": "Tester la formule.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Écrire une formule avec =.",
          "Utiliser SOMME ou MOYENNE.",
          "Recopier la formule et vérifier les résultats."
        ],
        "arObjective": "استعمال الصيغ والدوال والنسخ التلقائي للحساب."
      },
      "Graphiques, mise en page et impression": {
        "root": "Graphiques, mise en page et impression",
        "objective": "Créer un graphique adapté, lire les résultats, régler la mise en page et préparer l’impression.",
        "competence": "C12",
        "branches": [
          {
            "title": "Graphiques",
            "goal": "Présenter les données visuellement.",
            "items": [
              {
                "title": "Graphique",
                "def": "Représentation visuelle des données.",
                "example": "Graphique des notes par élève.",
                "action": "Sélectionner les données.",
                "ar": ""
              },
              {
                "title": "Colonnes",
                "def": "Type de graphique pour comparer des quantités.",
                "example": "Comparer les notes.",
                "action": "Choisir pour comparaison.",
                "ar": ""
              },
              {
                "title": "Courbe",
                "def": "Type de graphique pour montrer une évolution.",
                "example": "Évolution des absences.",
                "action": "Choisir pour le temps.",
                "ar": ""
              },
              {
                "title": "Secteurs",
                "def": "Type de graphique pour montrer les parts d’un total.",
                "example": "Répartition des choix.",
                "action": "Utiliser si les données forment un total.",
                "ar": ""
              },
              {
                "title": "Titre du graphique",
                "def": "Texte qui explique ce que montre le graphique.",
                "example": "Moyennes de la classe.",
                "action": "Ajouter un titre clair.",
                "ar": ""
              },
              {
                "title": "Légende",
                "def": "Indication qui explique les couleurs ou séries.",
                "example": "Série Garçons/Filles.",
                "action": "Vérifier qu’elle aide la lecture.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Mise en page",
            "goal": "Préparer une impression propre.",
            "items": [
              {
                "title": "Orientation",
                "def": "Sens de la page : portrait ou paysage.",
                "example": "Paysage pour un grand tableau.",
                "action": "Choisir selon largeur.",
                "ar": ""
              },
              {
                "title": "Marges",
                "def": "Espaces autour du contenu imprimé.",
                "example": "Marges normales.",
                "action": "Vérifier avant impression.",
                "ar": ""
              },
              {
                "title": "Aperçu avant impression",
                "def": "Vue qui permet de contrôler le résultat avant d’imprimer.",
                "example": "Vérifier si le tableau tient sur la page.",
                "action": "Corriger avant d’imprimer.",
                "ar": ""
              },
              {
                "title": "Zone d’impression",
                "def": "Partie de la feuille qui sera imprimée.",
                "example": "Imprimer seulement le tableau.",
                "action": "Définir la zone utile.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Compétence C12",
            "goal": "Valoriser la production finale.",
            "items": [
              {
                "title": "Lire",
                "def": "Interpréter un graphique ou un tableau.",
                "example": "Dire quelle valeur est la plus élevée.",
                "action": "Expliquer le résultat.",
                "ar": ""
              },
              {
                "title": "Présenter",
                "def": "Produire un document clair pour un lecteur.",
                "example": "Tableau + graphique avec titre.",
                "action": "Vérifier la lisibilité.",
                "ar": ""
              },
              {
                "title": "Économiser",
                "def": "Éviter les impressions inutiles.",
                "example": "Utiliser l’aperçu avant impression.",
                "action": "Imprimer seulement si nécessaire.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Sélectionner les données.",
          "Créer un graphique avec titre.",
          "Vérifier l’aperçu avant impression."
        ],
        "arObjective": "إنشاء المبيانات وإعداد الصفحة والطباعة."
      }
    }
  },
  "u4_logo": {
    "unitCompetence": "C13 — Produire un programme informatique : écrire correctement une instruction, créer et réutiliser des procédures, structurer un programme.",
    "lessons": {
      "Langage de programmation et environnement LOGO": {
        "root": "Langage de programmation et environnement LOGO",
        "objective": "Découvrir le langage LOGO, l’environnement de travail et la manière correcte d’écrire une instruction pour commander la tortue.",
        "competence": "C13",
        "branches": [
          {
            "title": "Notions de programmation",
            "goal": "Comprendre ce qu’est programmer.",
            "items": [
              {
                "title": "Programme",
                "def": "Suite d’instructions organisées pour réaliser une tâche.",
                "example": "Dessiner un carré avec plusieurs commandes.",
                "action": "Respecter l’ordre des instructions.",
                "ar": ""
              },
              {
                "title": "Langage de programmation",
                "def": "Ensemble de mots et de règles compris par l’ordinateur ou le logiciel.",
                "example": "LOGO utilise AV, RE, TD, TG.",
                "action": "Écrire avec la syntaxe correcte.",
                "ar": ""
              },
              {
                "title": "Instruction",
                "def": "Commande simple donnée à la tortue.",
                "example": "AV 50.",
                "action": "Écrire le mot et la valeur.",
                "ar": ""
              },
              {
                "title": "Erreur",
                "def": "Instruction mal écrite ou mal placée qui empêche le résultat attendu.",
                "example": "AD 50 au lieu de AV 50.",
                "action": "Relire et corriger.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Environnement LOGO",
            "goal": "Identifier les parties du logiciel.",
            "items": [
              {
                "title": "Tortue",
                "def": "Objet graphique qui se déplace et trace selon les commandes.",
                "example": "La tortue avance et tourne.",
                "action": "Observer sa position.",
                "ar": ""
              },
              {
                "title": "Zone de dessin",
                "def": "Espace où la tortue trace les figures.",
                "example": "Carré affiché à l’écran.",
                "action": "Vérifier le tracé.",
                "ar": ""
              },
              {
                "title": "Console",
                "def": "Zone où l’on écrit les commandes.",
                "example": "Saisir AV 100.",
                "action": "Valider l’instruction.",
                "ar": ""
              },
              {
                "title": "Configuration",
                "def": "Réglages comme couleur, vitesse ou aspect.",
                "example": "Changer la couleur du trait.",
                "action": "Utiliser avec objectif.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Compétence C13",
            "goal": "Entrer dans la logique de programmation.",
            "items": [
              {
                "title": "Analyser",
                "def": "Comprendre la figure ou le problème avant d’écrire.",
                "example": "Prévoir les côtés d’un carré.",
                "action": "Découper la tâche.",
                "ar": ""
              },
              {
                "title": "Rigueur",
                "def": "Écrire les commandes sans erreur.",
                "example": "Respecter espaces et nombres.",
                "action": "Vérifier la syntaxe.",
                "ar": ""
              },
              {
                "title": "Curiosité",
                "def": "Tester et corriger pour comprendre.",
                "example": "Modifier une distance et observer.",
                "action": "Apprendre par essai raisonné.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Ouvrir l’environnement LOGO.",
          "Identifier tortue, zone de dessin et console.",
          "Écrire une instruction simple et observer le résultat."
        ],
        "arObjective": "اكتشاف لغة LOGO وبيئة العمل وكتابة التعليمات بشكل صحيح."
      },
      "Primitives de base": {
        "root": "Primitives de base",
        "objective": "Utiliser les primitives de déplacement, de rotation, de crayon et d’écran pour contrôler la tortue.",
        "competence": "C13",
        "branches": [
          {
            "title": "Déplacement",
            "goal": "Contrôler la distance.",
            "items": [
              {
                "title": "AV",
                "def": "Primitive qui fait avancer la tortue.",
                "example": "AV 50.",
                "action": "Indiquer une distance.",
                "ar": ""
              },
              {
                "title": "RE",
                "def": "Primitive qui fait reculer la tortue.",
                "example": "RE 30.",
                "action": "Observer le sens du déplacement.",
                "ar": ""
              },
              {
                "title": "Distance",
                "def": "Nombre de pas parcourus par la tortue.",
                "example": "50 pas.",
                "action": "Choisir une valeur adaptée.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Rotation",
            "goal": "Contrôler l’orientation.",
            "items": [
              {
                "title": "TD",
                "def": "Tourner à droite d’un angle donné.",
                "example": "TD 90.",
                "action": "Indiquer un angle.",
                "ar": ""
              },
              {
                "title": "TG",
                "def": "Tourner à gauche d’un angle donné.",
                "example": "TG 90.",
                "action": "Choisir gauche ou droite.",
                "ar": ""
              },
              {
                "title": "Angle",
                "def": "Mesure du changement de direction.",
                "example": "90 degrés pour un angle droit.",
                "action": "Relier l’angle à la figure.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Crayon et écran",
            "goal": "Gérer le tracé et l’affichage.",
            "items": [
              {
                "title": "LC",
                "def": "Lever le crayon pour se déplacer sans tracer.",
                "example": "LC puis AV 50.",
                "action": "Utiliser pour déplacer la tortue sans trait.",
                "ar": ""
              },
              {
                "title": "BC",
                "def": "Baisser le crayon pour recommencer à tracer.",
                "example": "BC puis AV 50.",
                "action": "Reprendre le dessin.",
                "ar": ""
              },
              {
                "title": "VE",
                "def": "Vider/effacer l’écran de dessin.",
                "example": "VE avant un nouveau dessin.",
                "action": "Nettoyer l’espace.",
                "ar": ""
              },
              {
                "title": "CT",
                "def": "Cacher la tortue.",
                "example": "CT après le dessin.",
                "action": "Améliorer la visibilité.",
                "ar": ""
              },
              {
                "title": "MT",
                "def": "Montrer la tortue.",
                "example": "MT pour revoir sa position.",
                "action": "Afficher la tortue si nécessaire.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Compétence C13",
            "goal": "Construire un tracé précis.",
            "items": [
              {
                "title": "Écrire correctement",
                "def": "Saisir la primitive et sa valeur dans le bon ordre.",
                "example": "AV 100, pas 100 AV.",
                "action": "Respecter la syntaxe.",
                "ar": ""
              },
              {
                "title": "Prévoir",
                "def": "Anticiper le déplacement avant d’exécuter.",
                "example": "Savoir que TD 90 prépare un angle droit.",
                "action": "Imaginer le tracé.",
                "ar": ""
              },
              {
                "title": "Corriger",
                "def": "Modifier une instruction si le résultat est faux.",
                "example": "Changer TD 60 en TD 90.",
                "action": "Comparer attendu/réel.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Écrire AV, RE, TD et TG avec des valeurs.",
          "Utiliser LC/BC pour contrôler le tracé.",
          "Effacer puis refaire un dessin propre."
        ],
        "arObjective": "استعمال أوامر الحركة والدوران والقلم في LOGO."
      },
      "Instruction de répétition": {
        "root": "Instruction de répétition",
        "objective": "Utiliser REPETE pour éviter de réécrire les mêmes instructions et construire des figures régulières.",
        "competence": "C13",
        "branches": [
          {
            "title": "Notion",
            "goal": "Comprendre la syntaxe.",
            "items": [
              {
                "title": "Répétition",
                "def": "Exécution plusieurs fois d’un même bloc d’instructions.",
                "example": "Répéter quatre côtés d’un carré.",
                "action": "Repérer ce qui se répète.",
                "ar": ""
              },
              {
                "title": "REPETE",
                "def": "Instruction LOGO qui répète un bloc un nombre déterminé de fois.",
                "example": "REPETE 4 [AV 50 TD 90].",
                "action": "Écrire le nombre puis le bloc.",
                "ar": ""
              },
              {
                "title": "Bloc",
                "def": "Groupe d’instructions placé entre crochets.",
                "example": "[AV 50 TD 90].",
                "action": "Mettre uniquement ce qui se répète.",
                "ar": ""
              },
              {
                "title": "Crochets",
                "def": "Signes qui encadrent les instructions répétées.",
                "example": "[ ... ].",
                "action": "Ne pas oublier l’ouverture et la fermeture.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Figures",
            "goal": "Utiliser la répétition pour dessiner.",
            "items": [
              {
                "title": "Carré",
                "def": "Figure à quatre côtés égaux et quatre angles droits.",
                "example": "REPETE 4 [AV 50 TD 90].",
                "action": "Répéter 4 fois.",
                "ar": ""
              },
              {
                "title": "Triangle",
                "def": "Figure à trois côtés.",
                "example": "REPETE 3 [AV 70 TD 120].",
                "action": "Adapter nombre et angle.",
                "ar": ""
              },
              {
                "title": "Polygone",
                "def": "Figure composée de plusieurs côtés.",
                "example": "Pentagone ou hexagone.",
                "action": "Chercher nombre de côtés et angle.",
                "ar": ""
              },
              {
                "title": "Programme court",
                "def": "Programme plus lisible grâce à la répétition.",
                "example": "Une seule ligne remplace plusieurs commandes.",
                "action": "Simplifier le code.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Compétence C13",
            "goal": "Écrire un programme plus efficace.",
            "items": [
              {
                "title": "Analyser",
                "def": "Identifier les instructions qui se répètent.",
                "example": "Chaque côté du carré répète AV puis TD.",
                "action": "Repérer le motif.",
                "ar": ""
              },
              {
                "title": "Structurer",
                "def": "Organiser le programme avec un bloc clair.",
                "example": "Mettre le bloc entre crochets.",
                "action": "Construire un code lisible.",
                "ar": ""
              },
              {
                "title": "Rigueur",
                "def": "Respecter nombre, crochets et angle.",
                "example": "Une erreur de crochets casse la commande.",
                "action": "Relire avant d’exécuter.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Repérer la partie qui se répète.",
          "Écrire REPETE avec le bon nombre.",
          "Mettre les instructions entre crochets puis tester."
        ],
        "arObjective": "استعمال التعليمة REPETE لتكرار أوامر الرسم."
      },
      "Procédures LOGO": {
        "root": "Procédures LOGO",
        "objective": "Créer une procédure avec POUR...FIN, lui donner un nom, l’appeler et la réutiliser pour structurer le programme.",
        "competence": "C13",
        "branches": [
          {
            "title": "Structure",
            "goal": "Créer une procédure correcte.",
            "items": [
              {
                "title": "Procédure",
                "def": "Petit programme nommé que l’on peut réutiliser.",
                "example": "Une procédure CARRE.",
                "action": "Créer pour éviter de réécrire.",
                "ar": ""
              },
              {
                "title": "POUR",
                "def": "Mot qui marque le début d’une procédure.",
                "example": "POUR CARRE.",
                "action": "Écrire le nom après POUR.",
                "ar": ""
              },
              {
                "title": "FIN",
                "def": "Mot qui marque la fin d’une procédure.",
                "example": "FIN après les instructions.",
                "action": "Ne pas l’oublier.",
                "ar": ""
              },
              {
                "title": "Nom",
                "def": "Identifiant donné à la procédure.",
                "example": "CARRE ou TRIANGLE.",
                "action": "Choisir un nom clair.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Utilisation",
            "goal": "Utiliser la procédure dans un programme.",
            "items": [
              {
                "title": "Appeler",
                "def": "Écrire le nom de la procédure pour l’exécuter.",
                "example": "Écrire CARRE.",
                "action": "Lancer la procédure après sa création.",
                "ar": ""
              },
              {
                "title": "Réutiliser",
                "def": "Employer la procédure plusieurs fois sans réécrire son contenu.",
                "example": "Dessiner plusieurs carrés.",
                "action": "Gagner du temps.",
                "ar": ""
              },
              {
                "title": "Programme principal",
                "def": "Partie qui organise l’appel des procédures.",
                "example": "CARRE puis TD 90 puis CARRE.",
                "action": "Structurer l’ensemble.",
                "ar": ""
              },
              {
                "title": "ECRIS",
                "def": "Instruction qui affiche un message.",
                "example": "ECRIS [Bonjour].",
                "action": "Ajouter un message si besoin.",
                "ar": ""
              }
            ]
          },
          {
            "title": "Compétence C13",
            "goal": "Produire un programme organisé.",
            "items": [
              {
                "title": "Structurer",
                "def": "Organiser le programme en parties nommées.",
                "example": "Une procédure par figure.",
                "action": "Rendre le code lisible.",
                "ar": ""
              },
              {
                "title": "Réutiliser",
                "def": "Employer une même solution dans plusieurs situations.",
                "example": "CARRE utilisé plusieurs fois.",
                "action": "Éviter la répétition inutile.",
                "ar": ""
              },
              {
                "title": "Corriger",
                "def": "Tester la procédure et modifier les instructions si nécessaire.",
                "example": "Changer une distance.",
                "action": "Comparer le dessin obtenu avec l’objectif.",
                "ar": ""
              }
            ]
          }
        ],
        "mission": [
          "Écrire POUR NOM.",
          "Ajouter les instructions puis FIN.",
          "Appeler la procédure et vérifier le dessin."
        ],
        "arObjective": "إنشاء إجراءات LOGO واستعمالها لإعادة استخدام البرنامج."
      }
    }
  }
};

  function v148Attr(value){
    return String(value ?? '').replace(/[&<>"']/g, function(m){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];
    });
  }
  function v148Html(value){ return (typeof esc === 'function') ? esc(value ?? '') : v148Attr(value); }
  function v148UnitData(unit){ return unit && V148_ENRICHED[unit.id]; }
  function v148LessonData(lesson){
    const unit = (typeof currentUnit === 'function') ? currentUnit() : null;
    const ud = v148UnitData(unit);
    if(!ud || !lesson) return null;
    return ud.lessons[lesson.title] || null;
  }
  function v148Flatten(d){
    const out=[]; const seen=new Set();
    (d.branches||[]).forEach(branch => (branch.items||[]).forEach(it => {
      const key = String(it.title||'').toLowerCase();
      if(!seen.has(key)){ seen.add(key); out.push(Object.assign({branch:branch.title}, it)); }
    }));
    return out;
  }
  function v148ChoicesFor(target, all){
    const pool = all.map(x=>x.title).filter(t => t && t !== target);
    return [target, ...pool.slice(0, 5)].slice(0,4).sort(() => Math.random() - 0.5);
  }
  function v148MediaCard(item, index, lesson){
    if(typeof v103ClickableVisualCard === 'function') return v103ClickableVisualCard(item, index, lesson);
    if(typeof tableurInteractiveVisualCard === 'function') return tableurInteractiveVisualCard(item, index, lesson);
    const src = item && item.src ? item.src : 'assets/logo.svg';
    const title = item && item.title ? item.title : 'Illustration';
    return `<figure class="media-card"><img src="${v148Attr(src)}" alt="${v148Attr(title)}"><figcaption>${v148Html(title)}</figcaption></figure>`;
  }
  function v148ShortList(items, limit=4){
    return (items||[]).map(it=>it.title).filter(Boolean).slice(0, limit).join(', ');
  }
  function v148BranchDefinition(branch, root){
    const titles = (branch.items||[]).map(it=>it.title).filter(Boolean);
    const core = titles.length ? `Cette partie de « ${root} » regroupe les notions suivantes : ${titles.join(', ')}.` : `Cette partie complète la notion « ${root} ».`;
    const goal = branch.goal ? ` Elle permet de ${String(branch.goal).charAt(0).toLowerCase() + String(branch.goal).slice(1)}.` : '';
    return `${branch.title} est un sous-thème de ${root}. ${core}${goal}`.replace(/\s+/g,' ').trim();
  }
  function v157BranchLead(branch, root){
    const base = `Dans la leçon « ${root} », nous abordons maintenant ${branch.title}.`;
    const goal = branch.goal ? ` L’idée essentielle est de ${String(branch.goal).charAt(0).toLowerCase() + String(branch.goal).slice(1)}.` : '';
    return `${base}${goal}`;
  }
  function v157ItemScript(it){
    const def = it.def ? `${it.title} désigne ${it.def}.` : `${it.title} est une notion importante de cette leçon.`;
    const ex = it.example ? ` Un exemple simple est : ${it.example}.` : '';
    const use = it.action ? ` Cette notion aide à ${String(it.action).charAt(0).toLowerCase() + String(it.action).slice(1)}.` : '';
    return `${def}${ex}${use}`;
  }
  function v157BranchRecap(branch){
    const titles = (branch.items||[]).map(it=>it.title).filter(Boolean);
    if(!titles.length) return '';
    return ` À retenir dans cette partie : ${titles.join(', ')}.`;
  }
  function v148TeacherScriptForBranch(branch, root){
    const intro = v157BranchLead(branch, root);
    const details = (branch.items||[]).map(it=>v157ItemScript(it)).join(' ');
    const recap = v157BranchRecap(branch);
    return `${intro} ${details}${recap}`.replace(/\s+/g,' ').trim();
  }
  function v148BranchAudioQuestion(branch){
    const first = (branch.items||[])[0];
    if(first) return `Explique avec tes mots l’idée principale de ${branch.title}, puis donne un exemple lié à ${first.title}.`;
    return `Explique avec tes mots l’idée principale de ${branch.title}.`;
  }

  function v154IsKnowledgeBranch(branch){
    const title = String((branch && branch.title) || '');
    return !/(savoir[- ]?faire|comp[ée]tence)/i.test(title);
  }
  function v154CleanData(d){
    if(!d) return d;
    return Object.assign({}, d, {
      branches: (d.branches || []).filter(v154IsKnowledgeBranch)
    });
  }
  function v154Flatten(d){
    const clean = v154CleanData(d);
    const out = [];
    (clean.branches || []).forEach(branch => {
      (branch.items || []).forEach(item => out.push(Object.assign({}, item, { branch: branch.title })));
    });
    return out;
  }

  function v149SplitBranches(branches){
    const list = branches || [];
    return list.length ? list.map(branch => [branch]) : [[]];
  }
  function v149MapCard(branches, d, mapIndex){
    const branch = (branches || [])[0] || {};
    const items = Array.isArray(branch.items) && branch.items.length ? branch.items : [{title: branch.title || d.root, def: branch.goal || '', example: ''}];
    const firstItem = items[0] || {};
    const firstDef = firstItem.def || 'Clique sur une notion pour lire une courte définition.';
    const firstExample = firstItem.example || 'Aucun exemple disponible pour le moment.';
    const width = 1000, height = 700, cx = width / 2, cy = height / 2;
    const nodeW = 205, nodeH = 92;
    const palette = ['pink','green','cyan','orange','purple','blue','red','teal','yellow','indigo'];
    const positioned = items.slice(0, 10).map((it, index) => {
      const total = Math.min(items.length, 10);
      const angle = (-Math.PI / 2) + (Math.PI * 2 * index / Math.max(total, 1));
      const rx = total > 6 ? 345 : 315;
      const ry = total > 6 ? 255 : 225;
      const x = cx + rx * Math.cos(angle) - nodeW / 2;
      const y = cy + ry * Math.sin(angle) - nodeH / 2;
      return {it, index, angle, x, y, anchorX:x + nodeW/2, anchorY:y + nodeH/2, color:palette[index % palette.length]};
    });
    const connectors = positioned.map(pos => {
      const midX = cx + (pos.anchorX - cx) * 0.55;
      const midY = cy + (pos.anchorY - cy) * 0.55;
      return `<path class="v189-link v189-${pos.color}" d="M ${cx} ${cy} Q ${midX} ${midY} ${pos.anchorX} ${pos.anchorY}" marker-end="url(#v189Arrow${mapIndex}${pos.index})" />`;
    }).join('');
    const markers = positioned.map(pos => `<marker id="v189Arrow${mapIndex}${pos.index}" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" class="v189-arrow-fill v189-${pos.color}" /></marker>`).join('');
    const nodes = positioned.map(pos => {
      const def = (pos.it.def || '').length > 92 ? `${pos.it.def.slice(0,92)}…` : (pos.it.def || 'Définition + exemple');
      const leftPct = ((pos.anchorX / width) * 100).toFixed(3);
      const topPct = ((pos.anchorY / height) * 100).toFixed(3);
      return `<button type="button" class="v149-subchild-node v189-map-node v189-${pos.color} ${pos.index===0?'active':''}" style="left:calc(${leftPct}% - ${nodeW/2}px);top:calc(${topPct}% - ${nodeH/2}px);width:${nodeW}px;min-height:${nodeH}px" data-node-title="${v148Attr(pos.it.title)}" data-node-example="${v148Attr(pos.it.example || '')}" data-node-definition="${v148Attr(pos.it.def || '')}" data-node-branch="${v148Attr(branch.title || d.root)}"><strong>${v148Html(pos.it.title || 'Notion')}</strong><small>${v148Html(def)}</small></button>`;
    }).join('');
    return `<article class="v149-map-card v153-map-card v154-map-card v156-map-card v157-map-card v189-map-card">
      <aside class="v149-example-box v153-example-box v154-example-box v156-example-box v157-example-box v189-example-top">
        <div class="v157-selected-branch">Sous-titre : ${v148Html(branch.title || d.root)}</div>
        <h4>${v148Html(firstItem.title || branch.title || d.root)}</h4>
        <section class="v156-info-pane"><h5>Définition</h5><p class="v156-def-content">${v148Html(firstDef)}</p><p class="v156-ex-content"><strong>Exemple :</strong> ${v148Html(firstExample)}</p></section>
      </aside>
      <div class="v189-radial-canvas" style="--v189-w:${width}px;--v189-h:${height}px" aria-label="Carte mentale sous forme du modèle demandé">
        <svg class="v189-map-svg" viewBox="0 0 ${width} ${height}" aria-hidden="true"><defs>${markers}</defs>${connectors}</svg>
        <div class="v189-center-node">${v148Html(branch.title || d.root)}<span>Nœud central</span></div>
        ${nodes}
      </div>
    </article>`;
  }
  function v153VisualCheck(d){
    return '';
  }
  function v148RenderMindMap(d){
    const clean = v154CleanData(d);
    const groups = v149SplitBranches(clean.branches || []);
    const maps = groups.map((group, i)=>v149MapCard(group, clean, i)).join('');
    return `<section class="panel v148-mindmap-panel v153-mindmap-panel v156-mindmap-panel">
      <div class="v148-mindmap-head">
        <span class="mini-pill">Carte mentale — modèle professionnel</span>
        <h3>${v148Html(clean.root)}</h3>
        <p>Le contenu de cours est gardé. Seule la forme de la carte mentale est remplacée par un modèle avec nœud central, branches colorées et exemples au clic.</p>
      </div>
      <div class="v149-map-stack">${maps}</div>
    </section>`;
  }

  const v148PrevVisualPanel = (typeof visualPanel === 'function') ? visualPanel : null;
  visualPanel = function(lesson){
    const d = v148LessonData(lesson);
    if(!d) return v148PrevVisualPanel ? v148PrevVisualPanel(lesson) : '';
    const media = (typeof visualMediaForLesson === 'function') ? visualMediaForLesson(lesson) : [];
    const gallery = media && media.length
      ? media.map((m,i)=>v148MediaCard(m,i,lesson)).join('')
      : `<article class="v148-no-image"><strong>Style visuel peu enrichi par les images</strong><p>Les notions sont donc renforcées par la carte mentale, l’écoute et les activités pratiques.</p></article>`;
    return `<section class="panel visual-panel v148-visual-panel v153-visual-panel v154-visual-panel">
      <div class="style-header clean-style-header">
        <div><span class="mini-pill">Style visuel</span><h3>${v148Html(lesson.title)}</h3></div>
        <p class="subtle">Le contenu des images est conservé, puis complété par une carte mentale qui regroupe toutes les notions principales du cours.</p>
      </div>
      <div class="visual-gallery image-only-grid clickable-visual-grid v148-gallery v154-gallery">${gallery}</div>
      ${v148RenderMindMap(d)}
    </section>`;
  };

  const v148PrevAudioItems = (typeof v60AudioItemsForLesson === 'function') ? v60AudioItemsForLesson : null;
  v60AudioItemsForLesson = function(lesson){
    const d = v148LessonData(lesson);
    if(!d) return v148PrevAudioItems ? v148PrevAudioItems(lesson) : [];
    const clean = v154CleanData(d);
    return (clean.branches||[]).map((branch, index)=>({
      title: branch.title,
      fr: v148TeacherScriptForBranch(branch, d.root),
      ar: d.arObjective || '',
      keywords: (branch.items||[]).map(it=>it.title).filter(Boolean).slice(0,4),
      question: v148BranchAudioQuestion(branch),
      answer: v148ShortList(branch.items, 3),
      index
    }));
  };

  const v148PrevAudioPanel = (typeof audioPanel === 'function') ? audioPanel : null;
  audioPanel = function(lesson){
    const d = v148LessonData(lesson);
    if(!d) return v148PrevAudioPanel ? v148PrevAudioPanel(lesson) : '';
    const clean = v154CleanData(d);
    const sections = (clean.branches||[]).map(branch => ({
      title: branch.title,
      text: v148TeacherScriptForBranch(branch, clean.root),
      question: v148BranchAudioQuestion(branch),
      terms: (branch.items||[]).map(it=>it.title).filter(Boolean)
    }));
    const allTerms = sections.flatMap(s=>s.terms).slice(0, 14).join(', ');
    const intro = `Aujourd’hui, nous étudions ${clean.root}. Cette leçon porte sur les notions suivantes : ${allTerms}.`;
    const conclusion = `En résumé, pour bien comprendre ${clean.root}, il faut retenir les idées principales de chaque sous-titre et savoir relier chaque notion à un exemple concret.`;
    const fullFr = [intro].concat(sections.map(s=>s.text)).concat([conclusion]).join(' ');
    const fullAr = d.arObjective || fullFr;
    const chapters = sections.map((sec)=>`<li>${v148Html(sec.title)}</li>`).join('');
    const cards = sections.map((sec,i)=>`
      <article class="v148-audio-card v149-audio-card v157-audio-card">
        <div class="v148-card-number">${i+1}</div>
        <h4>${v148Html(sec.title)}</h4>
        <p class="v149-audio-script">${v148Html(sec.text)}</p>
        <div class="v157-audio-tags">${sec.terms.map(t=>`<span class="v157-audio-tag">${v148Html(t)}</span>`).join('')}</div>
        <div class="v148-listen-question"><strong>Question d’écoute :</strong> ${v148Html(sec.question)}</div>
        <div class="audio-row v148-audio-actions">
          <button class="btn small" data-speak="fr" data-text="${v148Attr(sec.text)}">▶ Écouter cette explication</button>
          <button class="btn green small" data-speak="ar" data-text="${v148Attr(d.arObjective || sec.title)}">▶ استمع AR</button>
        </div>
      </article>`).join('');
    return `<section class="panel audio-card v148-audio-panel v149-audio-panel v157-audio-panel">
      <div class="style-header clean-style-header"><div><span class="mini-pill">Approche auditive</span><h3>${v148Html(lesson.title)}</h3></div><p class="subtle">L’explication garde la même structure, mais elle développe davantage les notions du cours avec des définitions fluides, des liens entre les idées et des exemples simples.</p></div>
      <div class="v149-audio-hero v157-audio-hero">
        <div class="v148-method"><strong>Consigne :</strong> écoute d’abord l’explication complète, puis réécoute chaque partie pour repérer les notions importantes et les exemples associés.</div>
        <ul class="v149-audio-outline">${chapters}</ul>
        <div class="v157-audio-summary"><strong>Notions globales :</strong> ${v148Html(allTerms)}</div>
        <div class="audio-row master-audio-row"><button class="btn" data-speak="fr" data-text="${v148Attr(fullFr)}">▶ Lancer la narration FR</button><button class="btn green" data-speak="ar" data-text="${v148Attr(fullAr)}">▶ تشغيل الملخص</button><button class="btn secondary" data-v149-toggle-transcript="1">Afficher la transcription</button><button class="btn ghost small stop-audio-btn" data-action="stop-speech">■ Arrêter</button></div>
      </div>
      <div id="voiceWarning" class="voice-warning">La voix arabe n’est pas disponible dans ce navigateur. Essayez Chrome ou Edge.</div>
      <div class="v149-transcript is-hidden">
        <div class="v149-transcript-head"><strong>Transcription textuelle</strong><span>Masquée par défaut pour laisser la priorité à l’écoute.</span></div>
        <div class="v148-audio-grid">${cards}</div>
      </div>
    </section>`;
  };

  const v148PrevTopics = (typeof v61TopicsForLesson === 'function') ? v61TopicsForLesson : null;
  v61TopicsForLesson = function(lesson){
    const d = v148LessonData(lesson);
    if(!d) return v148PrevTopics ? v148PrevTopics(lesson) : [];
    const all = v154Flatten(d);
    return all.map((it, index)=>({
      title: it.title,
      fr: it.def,
      ar: it.ar || '',
      keywords: [it.title],
      index,
      fillSentence: `Cette définition correspond à ____ : ${it.def}`,
      answer: it.title,
      choices: v148ChoicesFor(it.title, all),
      drag: all.filter(x => x.branch === it.branch).slice(0,6).map(x => [x.title, x.def])
    }));
  };

  function v148ChoiceQuestion(it, number, all){
    const choices = v148ChoicesFor(it.title, all);
    return `<div class="kine-fill-question v60-choice-question"><div class="kine-question-number">${number}</div><div class="kine-question-body"><p>Cette définition correspond à <strong>____</strong> : ${v148Html(it.def)}</p><div class="choice-row">${choices.map(c=>`<button class="choice" data-fill-choice="${v148Attr(c)}" data-answer="${v148Attr(it.title)}">${v148Html(c)}</button>`).join('')}</div><div class="question-feedback"></div></div></div>`;
  }
  function v148DragPairs(items){
    const pairs = (items||[]).slice(0,8);
    return `<div class="drop-grid v60-drop-grid v148-drop-grid"><div class="drag-bank">${pairs.map(d=>`<span class="drag-item" draggable="true" data-drag="${v148Attr(d.title)}">${v148Html(d.title)}</span>`).join('')}</div><div class="drop-zone">${pairs.map((d,i)=>`<div class="drop-target" data-target="${v148Attr(d.title)}" data-definition="${v148Attr(d.def)}"><span class="drop-index">${i+1}</span>${v148Html(d.def)}</div>`).join('')}</div></div>`;
  }

  const v148PrevKinePanel = (typeof kinePanel === 'function') ? kinePanel : null;
  kinePanel = function(lesson){
    const d = v148LessonData(lesson);
    if(!d) return v148PrevKinePanel ? v148PrevKinePanel(lesson) : '';
    const clean = v154CleanData(d);
    const all = v154Flatten(clean);
    const fillItems = all.slice(0, Math.min(5, all.length));
    const fillQs = fillItems.map((it,i)=>v148ChoiceQuestion(it, i+1, all)).join('');
    const dragBlock = v148DragPairs(all.slice(0, Math.min(8, all.length)));
    const recap = all.slice(0, 6).map(it=>`<li><strong>${v148Html(it.title)} :</strong> ${v148Html(it.def)}</li>`).join('');
    return `<section class="panel kine-panel v148-kine-panel v151-kine-panel v154-kine-panel">
      <div class="style-header clean-style-header"><div><span class="mini-pill">Approche kinesthésique</span><h3>${v148Html(lesson.title)}</h3></div><p class="subtle">Les exercices sont organisés par étapes et portent uniquement sur les notions du cours.</p></div>
      <div class="v154-kine-intro">
        <div class="v154-kine-step"><span>1</span><div><strong>Lire la notion</strong><p>Observe les notions vues dans la carte mentale.</p></div></div>
        <div class="v154-kine-step"><span>2</span><div><strong>Répondre</strong><p>Choisis d’abord la bonne réponse, puis associe chaque notion à sa définition.</p></div></div>
        <div class="v154-kine-step"><span>3</span><div><strong>Vérifier</strong><p>Une correction immédiate apparaît après chaque question.</p></div></div>
      </div>
      <div class="v154-kine-grid">
        <article class="game v150-exercise-card v154-kine-card" data-game="fill">
          <div class="v150-ex-number">1</div>
          <h4>Exercice 1 — Identifier la bonne notion</h4>
          <p class="v151-kine-intro">Lis chaque définition puis choisis la notion correcte.</p>
          <div class="kine-fill-list">${fillQs}</div>
          <div class="feedback"></div>
        </article>
        <article class="game v150-exercise-card v154-kine-card">
          <div class="v150-ex-number">2</div>
          <h4>Exercice 2 — Associer notions et définitions</h4>
          <p class="v151-kine-intro">Fais glisser chaque notion vers la bonne définition.</p>
          ${dragBlock}
          <div class="feedback"></div>
        </article>
      </div>
      <article class="v154-kine-recap">
        <h4>Rappel des notions essentielles</h4>
        <ul>${recap}</ul>
      </article>
    </section>`;
  };

  document.addEventListener('click', function(e){
    const node = e.target.closest('.v149-subchild-node');
    if(node){
      const card = node.closest('.v149-map-card');
      if(card){
        const branchBox = card.querySelector('.v157-selected-branch');
        const titleBox = card.querySelector('.v156-example-box h4');
        const defBox = card.querySelector('.v156-def-content');
        const textBox = card.querySelector('.v156-ex-content');
        if(branchBox) branchBox.textContent = 'Sous-titre : ' + (node.dataset.nodeBranch || '');
        if(titleBox) titleBox.textContent = node.dataset.nodeTitle || 'Exemple';
        if(defBox) defBox.textContent = node.dataset.nodeDefinition || '';
        if(textBox) textBox.innerHTML = `<strong>Exemple :</strong> ${esc(node.dataset.nodeExample || 'Aucun exemple disponible.')}`;
        card.querySelectorAll('.v149-subchild-node').forEach(n=>n.classList.remove('active'));
        node.classList.add('active');
      }
      return;
    }
    const vcheck = e.target.closest('[data-v153-visual-choice]');
    if(vcheck){
      const scope = vcheck.closest('.v153-visual-question');
      if(scope){
        scope.querySelectorAll('.choice').forEach(c=>c.classList.remove('selected','correct','wrong'));
        vcheck.classList.add('selected');
        const ok = vcheck.dataset.v153VisualChoice === vcheck.dataset.answer;
        vcheck.classList.add(ok?'correct':'wrong');
        const fb = scope.querySelector('.question-feedback');
        if(fb){ fb.className = 'question-feedback ' + (ok?'ok':'ko'); fb.textContent = ok ? 'Réponse correcte.' : 'Réponse incorrecte, essaie encore.'; }
      }
      return;
    }
    const toggle = e.target.closest('[data-v149-toggle-transcript]');
    if(toggle){
      const panel = toggle.closest('.v149-audio-panel');
      const transcript = panel && panel.querySelector('.v149-transcript');
      if(transcript){
        transcript.classList.toggle('is-hidden');
        toggle.textContent = transcript.classList.contains('is-hidden') ? 'Afficher la transcription' : 'Masquer la transcription';
      }
    }
  });

  function v148ApplyToLessons(){
    if(!Array.isArray(UNITS)) return;
    UNITS.forEach(unit => {
      const ud = V148_ENRICHED[unit.id];
      if(!ud) return;
      unit.v148Enriched = true;
      unit.enrichedNote = 'Auditif, kinesthésique et carte mentale enrichis selon les objectifs et compétences.';
      (unit.lessons||[]).forEach(lesson => {
        const d = ud.lessons[lesson.title];
        if(!d) return;
        const all = d.branches.flatMap(b => b.items || []);
        lesson.officialObjectives = [d.objective, `Compétence : ${d.competence}`, 'Réutiliser toutes les notions dans les activités auditives et kinesthésiques.'];
        lesson.visualType = 'mindmap';
        lesson.visual = { center: d.root, items: all.map(x => x.title).slice(0, 12) };
        lesson.drag = all.slice(0, 12).map(x => [x.title, x.def]);
        if(all[0]) lesson.fill = [`Cette définition correspond à ____ : ${all[0].def}`, all[0].title, all.slice(0,4).map(x => x.title)];
        lesson.order = { title: `Mission : ${d.root}`, steps: d.mission && d.mission.length ? d.mission : all.slice(0,4).map(x => x.action || x.title) };
      });
    });
  }
  v148ApplyToLessons();
  if(typeof renderLogin === 'function') renderLogin();
})();

/* =========================================================
   V158 — Style auditif sans texte visible
   - Chaque notion devient une carte audio.
   - Les définitions et scripts ne sont plus affichés dans le style auditif.
   - Le texte pédagogique reste seulement dans les boutons audio pour la lecture vocale.
========================================================= */
(function(){
  function v158UniqueAudioItems(items){
    const seen = new Set();
    return (items||[]).filter(it=>{
      const key = String(it && it.title || '').trim().toLowerCase();
      if(!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  function v158ItemsFromLesson(lesson){
    let items = [];
    if(Array.isArray(lesson && lesson.drag) && lesson.drag.length){
      items = lesson.drag.map(pair=>({
        title: Array.isArray(pair) ? pair[0] : '',
        fr: Array.isArray(pair) ? pair[1] : '',
        ar: (Array.isArray(pair) && pair[0] && typeof defFor === 'function') ? (defFor(pair[0])[1] || pair[1]) : ''
      }));
    }
    if(!items.length && lesson && lesson.visual && Array.isArray(lesson.visual.items)){
      items = lesson.visual.items.map(title=>{
        const def = typeof defFor === 'function' ? defFor(title) : ['', ''];
        return {title, fr:def[0] || lesson.fr || '', ar:def[1] || lesson.ar || ''};
      });
    }
    if(!items.length && typeof visualSteps === 'function'){
      items = (visualSteps(lesson)||[]).map(st=>{
        const def = typeof defFor === 'function' ? defFor(st.title) : ['', ''];
        return {title:st.title, fr:st.text || def[0] || lesson.fr || '', ar:def[1] || lesson.ar || ''};
      });
    }
    if(!items.length && typeof v60AudioItemsForLesson === 'function'){
      items = (v60AudioItemsForLesson(lesson)||[]).map(it=>({
        title:it.title,
        fr:it.fr || it.text || it.answer || '',
        ar:it.ar || lesson.ar || ''
      }));
    }
    if(!items.length && lesson){
      items = [{title:lesson.title, fr:lesson.fr || lesson.objective || '', ar:lesson.ar || ''}];
    }
    return v158UniqueAudioItems(items).slice(0, 18);
  }
  function v158RenderAudioOnlyPanel(lesson){
    const items = v158ItemsFromLesson(lesson);
    const cards = items.map((it,i)=>audioOnlyCard(it, i, 'v158-audio-notion')).join('');
    const fullFr = items.map((it,i)=>`Notion ${i+1}. ${audioSpeakText(it)}`).join(' ');
    const fullAr = items.map((it,i)=>`الفكرة ${i+1}. ${audioSpeakTextAr(it)}`).join(' ');
    return `<section class="panel audio-card simplified-audio-panel audio-only-panel v158-audio-panel">
      <div class="style-header clean-style-header"><div><span class="mini-pill">Style auditif</span><h3>Audios des notions</h3></div></div>
      <div class="audio-row master-audio-row"><button class="btn" data-speak="fr" data-text="${esc(fullFr)}">▶ Tout écouter FR</button><button class="btn green" data-speak="ar" data-text="${esc(fullAr)}">▶ كل الصوتيات AR</button><button class="btn ghost small stop-audio-btn" data-action="stop-speech">■</button></div>
      <div id="voiceWarning" class="voice-warning">La voix arabe n’est pas disponible dans ce navigateur. Essayez Chrome ou Edge.</div>
      <div class="logo-audio-list audio-recording-list">${cards}</div>
    </section>`;
  }
  audioPanel = function(lesson){
    return v158RenderAudioOnlyPanel(lesson);
  };
  if(typeof renderLogin === 'function') renderLogin();
})();


/* =========================================================
   V160 — Tableau de bord unique + diagnostics + situation
   d’intégration fermée couvrant toute l’unité
   - Un seul tableau de bord pour 1ère et 2ème année.
   - Diagnostic rapide pour chaque unité avec types variés.
   - Situation d’intégration sans questions ouvertes ni textarea.
========================================================= */
(function(){
  const V160_YEAR_GROUPS = [
    {
      key: '1ac',
      label: '1ère année collégiale',
      note: 'Notions de base : système informatique et système d’exploitation.',
      ids: ['v124_1ac_systeme', 'v124_1ac_os']
    },
    {
      key: '2ac',
      label: '2ème année collégiale',
      note: 'Notions pratiques : tableur et programmation LOGO.',
      ids: ['u3_tableur', 'u4_logo']
    }
  ];

  function v160Esc(value){ return (typeof esc === 'function') ? esc(value ?? '') : String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
  function v160Attr(value){ return v160Esc(value); }
  function v160CleanTitle(title){ return String(title || '').replace(/^Unité\s*\d+\s*:\s*/i, '').trim(); }
  function v160GetUnit(id){ return Array.isArray(UNITS) ? UNITS.find(u => u && u.id === id) : null; }
  function v160Lessons(unit){ return Array.isArray(unit && unit.lessons) ? unit.lessons : []; }
  function v160FirstPair(lesson){ return Array.isArray(lesson && lesson.drag) && lesson.drag.length && Array.isArray(lesson.drag[0]) ? lesson.drag[0] : null; }
  function v160AllPairs(unit){
    const out = [];
    const seen = new Set();
    v160Lessons(unit).forEach(lesson => {
      if(Array.isArray(lesson.drag)){
        lesson.drag.forEach(pair => {
          if(!Array.isArray(pair) || !pair[0] || !pair[1]) return;
          const key = String(pair[0]).trim().toLowerCase();
          if(seen.has(key)) return;
          seen.add(key);
          out.push({lesson: lesson.title || '', term: pair[0], def: pair[1]});
        });
      }
      if(lesson && lesson.title && lesson.fr && !seen.has(String(lesson.title).toLowerCase())){
        seen.add(String(lesson.title).toLowerCase());
        out.push({lesson: lesson.title, term: lesson.title, def: lesson.fr});
      }
    });
    return out;
  }
  function v160Choices(answer, pool){
    const cleaned = [answer, ...(pool || [])]
      .map(x => String(x || '').trim())
      .filter(Boolean);
    const unique = [];
    cleaned.forEach(x => { if(!unique.some(y => y.toLowerCase() === x.toLowerCase())) unique.push(x); });
    const fallback = ['Vrai', 'Faux', 'Réponse correcte', 'Réponse incorrecte'];
    fallback.forEach(x => { if(unique.length < 4 && !unique.includes(x)) unique.push(x); });
    return unique.slice(0,4);
  }
  function v160QuestionCard(q, number, extraClass=''){
    const choices = v160Choices(q.answer, q.choices);
    return `<article class="game v160-question-card v160-scored ${extraClass}" data-v160-question="1" data-answer="${v160Attr(q.answer)}" data-lesson="${v160Attr(q.lesson || '')}">
      <div class="kine-fill-question v160-kine-fill">
        <div class="kine-question-number">${number}</div>
        <div class="kine-question-body">
          <div class="v160-question-top"><span>${v160Esc(q.type || 'QCM')}</span><strong>${v160Esc(q.lesson || 'Notion')}</strong></div>
          <p>${v160Esc(q.prompt)}</p>
          <div class="choice-row v160-choice-row">
            ${choices.map(c => `<button type="button" class="choice" data-fill-choice="${v160Attr(c)}" data-answer="${v160Attr(q.answer)}">${v160Esc(c)}</button>`).join('')}
          </div>
          <div class="question-feedback"></div>
        </div>
      </div>
    </article>`;
  }
  function v160QuestionsForUnit(unit){
    const lessons = v160Lessons(unit);
    const allPairs = v160AllPairs(unit);
    const allTerms = allPairs.map(x => x.term);
    const questions = [];
    lessons.forEach((lesson, idx) => {
      const fill = Array.isArray(lesson.fill) ? lesson.fill : null;
      const pair = v160FirstPair(lesson);
      if(fill && fill[0] && fill[1]){
        questions.push({
          type: 'QCM',
          lesson: lesson.title || `Leçon ${idx+1}`,
          prompt: String(fill[0]).replace('____', '…'),
          answer: fill[1],
          choices: Array.isArray(fill[2]) ? fill[2] : allTerms
        });
      }else if(pair){
        questions.push({
          type: 'QCM',
          lesson: lesson.title || `Leçon ${idx+1}`,
          prompt: `Dans « ${lesson.title} », quelle notion correspond à cette définition : ${pair[1]} ?`,
          answer: pair[0],
          choices: allTerms
        });
      }else{
        questions.push({
          type: 'QCM',
          lesson: lesson.title || `Leçon ${idx+1}`,
          prompt: `Quelle notion est travaillée dans cette partie de l’unité ?`,
          answer: lesson.title || 'Notion',
          choices: lessons.map(l => l.title)
        });
      }
    });
    const tfPairs = allPairs.slice(0, Math.min(4, allPairs.length));
    tfPairs.forEach((p, idx) => {
      const falseDef = allPairs[(idx + 1) % allPairs.length] && allPairs[(idx + 1) % allPairs.length].def;
      const makeFalse = idx % 2 === 1 && falseDef && falseDef !== p.def;
      questions.push({
        type: 'Vrai / Faux',
        lesson: p.lesson || 'Révision',
        prompt: makeFalse ? `${p.term} signifie : ${falseDef}` : `${p.term} signifie : ${p.def}`,
        answer: makeFalse ? 'Faux' : 'Vrai',
        choices: ['Vrai', 'Faux']
      });
    });
    return questions;
  }
  function v160DiagnosticData(unit){
    const questions = v160QuestionsForUnit(unit);
    const pairs = v160AllPairs(unit);
    const orderLesson = v160Lessons(unit).find(l => l && l.order && Array.isArray(l.order.steps) && l.order.steps.length >= 2);
    return {
      qcm: questions[0] || null,
      vf: questions.find(q => q.type === 'Vrai / Faux') || questions[1] || null,
      pair: pairs[0] || null,
      order: orderLesson || null
    };
  }
  function v160DiagnosticHtml(unit){
    const data = v160DiagnosticData(unit);
    const lessonNames = v160Lessons(unit).map((l, i) => `<li>${i+1}. ${v160Esc(l.title || '')}</li>`).join('');
    const q1 = data.qcm ? v160QuestionCard(data.qcm, 1, 'v160-dash-q') : '';
    const q2 = data.vf ? v160QuestionCard(data.vf, 2, 'v160-dash-q') : '';
    const pair = data.pair ? `<article class="game v160-question-card v160-association-card">
      <div class="v160-question-top"><span>Association</span><strong>${v160Esc(data.pair.lesson || 'Notion')}</strong></div>
      <p>Glisse la notion vers sa définition.</p>
      <div class="drop-grid v60-drop-grid v160-mini-drop"><div class="drag-bank"><span class="drag-item" draggable="true" data-drag="${v160Attr(data.pair.term)}">${v160Esc(data.pair.term)}</span></div><div class="drop-zone"><div class="drop-target" data-target="${v160Attr(data.pair.term)}" data-definition="${v160Attr(data.pair.def)}">${v160Esc(data.pair.def)}</div></div></div>
      <div class="feedback"></div>
    </article>` : '';
    return `<details class="v160-diagnostic" open>
      <summary>Diagnostic rapide de l’unité</summary>
      <div class="v160-diagnostic-body">
        <div class="v160-diagnostic-lessons"><strong>Titres de l’unité</strong><ul>${lessonNames}</ul></div>
        <div class="v160-diagnostic-questions">${q1}${q2}${pair}</div>
      </div>
    </details>`;
  }
  function v160UnitCard(unit, index, yearKey){
    const border = yearKey === '1ac' ? (index % 2 === 0 ? 'blue' : 'orange') : (index % 2 === 0 ? 'green' : 'red');
    const cleanTitle = v160CleanTitle(unit.title);
    const lessonList = v160Lessons(unit).map((l,i)=>`<li><span>${i+1}</span>${v160Esc(l.title)}</li>`).join('');
    return `<article class="v160-unit-card v114-border-${border}">
      <header class="v160-unit-head">
        <span class="mini-pill">Unité ${index + 1}</span>
        <h3>${v160Esc(cleanTitle)}</h3>
        <p>${v160Esc(unit.short || unit.intro || '')}</p>
      </header>
      <section class="v160-title-list"><h4>Titres</h4><ol>${lessonList}</ol></section>
      ${v160DiagnosticHtml(unit)}
      <button type="button" class="btn v160-open-unit" data-unit="${v160Attr(unit.id)}">Ouvrir cette unité</button>
    </article>`;
  }

  renderHome = function(){
    if(typeof v124EnsureFirstYearUnits === 'function') v124EnsureFirstYearUnits();
    state.selectedLevel = null;
    const years = V160_YEAR_GROUPS.map(group => {
      const cards = group.ids.map(id => v160GetUnit(id)).filter(Boolean).map((unit, index)=>v160UnitCard(unit, index, group.key)).join('');
      return `<section class="v160-year-block v160-year-${group.key}">
        <div class="v160-year-head">
          <span>${v160Esc(group.label)}</span>
          <h2>${v160Esc(group.key === '1ac' ? '1ère année : unités et titres' : '2ème année : unités et titres')}</h2>
          <p>${v160Esc(group.note)}</p>
        </div>
        <div class="v160-units-grid">${cards}</div>
      </section>`;
    }).join('');
    $('#app').innerHTML = appShell(`<main class="v160-dashboard-page">
      <section class="v160-dashboard-hero">
        <span class="mini-pill">Tableau de bord unique</span>
        <h1>ÉPI — Informatique collégiale</h1>
        <p>Cette page regroupe les titres de la 1ère année et de la 2ème année, avec un diagnostic rapide pour chaque unité avant d’ouvrir le cours.</p>
      </section>
      ${years}
    </main>`);
  };

  function v160IntegrationScenario(unit){
    const base = unit && unit.integration && unit.integration.scenario ? unit.integration.scenario : unit.intro || '';
    return base || 'Lis la situation, puis réponds aux questions fermées pour vérifier les notions importantes de l’unité.';
  }
  function v160IntegrationKnowledge(unit){
    const lessons = v160Lessons(unit);
    return lessons.map((l,i)=>`<li><span>${i+1}</span><strong>${v160Esc(l.title)}</strong><em>${v160Esc((l.officialFocus || l.objective || '').slice(0, 140))}</em></li>`).join('');
  }
  function v160IntegrationAssociations(unit){
    const pairs = v160AllPairs(unit).slice(0, 10);
    if(!pairs.length) return '';
    return `<article class="game v160-integration-block v160-integration-association">
      <div class="v160-block-title"><span>Type 3</span><h3>Associer les notions à leurs définitions</h3></div>
      <p class="subtle">Glisse chaque notion vers la bonne définition. La correction est immédiate.</p>
      <div class="drop-grid v60-drop-grid v160-drop-grid">
        <div class="drag-bank">${pairs.map(p=>`<span class="drag-item" draggable="true" data-drag="${v160Attr(p.term)}">${v160Esc(p.term)}</span>`).join('')}</div>
        <div class="drop-zone">${pairs.map((p,i)=>`<div class="drop-target" data-target="${v160Attr(p.term)}" data-definition="${v160Attr(p.def)}"><span class="drop-index">${i+1}</span>${v160Esc(p.def)}</div>`).join('')}</div>
      </div>
      <div class="feedback"></div>
    </article>`;
  }
  function v160IntegrationOrder(unit){
    const lesson = v160Lessons(unit).find(l => l && l.order && Array.isArray(l.order.steps) && l.order.steps.length >= 2);
    if(!lesson) return '';
    const steps = lesson.order.steps.slice(0, 5);
    const expected = v160Attr(JSON.stringify(steps));
    const reversed = steps.slice().reverse();
    return `<article class="game v160-integration-block v160-order-card">
      <div class="v160-block-title"><span>Type 4</span><h3>Remettre les étapes dans l’ordre</h3></div>
      <p class="subtle">Notion : ${v160Esc(lesson.title)}.</p>
      <div class="v60-order-box v160-order-box">
        ${steps.map((_,i)=>`<label class="v60-order-line"><span>Étape ${i+1}</span><select><option value="">Choisir</option>${reversed.map(op=>`<option value="${v160Attr(op)}">${v160Esc(op)}</option>`).join('')}</select></label>`).join('')}
        <button type="button" class="btn small" data-check-order='${expected}'>Vérifier l’ordre</button>
      </div>
      <div class="feedback"></div>
    </article>`;
  }
  function v160IntegrationQuestions(unit){
    const questions = v160QuestionsForUnit(unit);
    const qcm = questions.filter(q => q.type === 'QCM');
    const vf = questions.filter(q => q.type === 'Vrai / Faux');
    const qcmHtml = qcm.map((q,i)=>v160QuestionCard(q, i+1, 'v160-integration-q')).join('');
    const vfHtml = vf.map((q,i)=>v160QuestionCard(q, i+1, 'v160-integration-vf')).join('');
    return `<article class="v160-integration-block">
      <div class="v160-block-title"><span>Type 1</span><h3>Questions QCM sur toutes les leçons</h3></div>
      <div class="v160-question-grid">${qcmHtml}</div>
    </article>
    <article class="v160-integration-block">
      <div class="v160-block-title"><span>Type 2</span><h3>Vrai / Faux</h3></div>
      <div class="v160-question-grid">${vfHtml}</div>
    </article>`;
  }
  function v160IntegrationResult(scope){
    const scored = [...scope.querySelectorAll('.v160-scored')];
    let answered = 0, correct = 0;
    scored.forEach(card => {
      const selected = card.querySelector('.choice.selected');
      if(selected){
        answered++;
        if(selected.dataset.fillChoice === card.dataset.answer) correct++;
      }
    });
    const orderButtons = [...scope.querySelectorAll('[data-check-order]')];
    let orderAnswered = 0, orderCorrect = 0;
    orderButtons.forEach(btn => {
      const game = btn.closest('.game');
      let expected = [];
      try{ expected = JSON.parse(btn.dataset.checkOrder || '[]'); }catch(e){}
      const values = [...(game ? game.querySelectorAll('select') : [])].map(s => s.value);
      const hasAnswer = values.some(Boolean);
      if(hasAnswer) orderAnswered++;
      if(expected.length && expected.every((v,i)=>values[i]===v)) orderCorrect++;
    });
    const associations = [...scope.querySelectorAll('.drop-target.correct')].length;
    const total = scored.length + orderButtons.length;
    const totalAnswered = answered + orderAnswered;
    const totalCorrect = correct + orderCorrect;
    return {answered: totalAnswered, correct: totalCorrect, total, associations};
  }

  renderIntegration = function(unit){
    const lessonCount = v160Lessons(unit).length;
    return `<div class="section-head v160-integration-head">
      <div>
        <h2>${v160Esc((unit.integration && unit.integration.title) || 'Situation d’intégration')}</h2>
        <p>Situation d’intégration sous forme d’évaluation formative : aucune réponse ouverte à écrire manuellement.</p>
      </div>
      <span class="pill">Évaluation formative</span>
    </div>
    <section class="integration v160-integration" data-v160-integration="1">
      <div class="panel integration-context v160-context">
        <h3>1) Situation</h3>
        <p class="explain">${v160Esc(v160IntegrationScenario(unit))}</p>
      </div>
      <div class="panel v160-knowledge-panel">
        <h3>2) Notions évaluées dans toute l’unité</h3>
        <p class="subtle">Nombre de titres couverts : ${lessonCount}.</p>
        <ul class="v160-knowledge-list">${v160IntegrationKnowledge(unit)}</ul>
      </div>
      <div class="v160-formative-zone">
        ${v160IntegrationQuestions(unit)}
        ${v160IntegrationAssociations(unit)}
        ${v160IntegrationOrder(unit)}
      </div>
      <div class="v160-integration-actions">
        <button type="button" class="btn" data-v160-integration-submit="1">Afficher le bilan formatif</button>
        <div id="integrationResult" class="v160-integration-result"></div>
      </div>
    </section>`;
  };

  document.addEventListener('click', function(e){
    const submit = e.target && e.target.closest ? e.target.closest('[data-v160-integration-submit]') : null;
    if(submit){
      e.preventDefault();
      const scope = submit.closest('[data-v160-integration]') || document;
      const r = v160IntegrationResult(scope);
      const resultBox = scope.querySelector('#integrationResult');
      if(resultBox){
        const msg = r.correct >= Math.ceil(r.total * 0.7) ? 'Bon résultat : les notions principales sont bien maîtrisées.' : 'À renforcer : reprends les questions incorrectes puis revois les titres concernés dans l’unité.';
        resultBox.innerHTML = `<div class="result-box diagnostic-result v160-result-box"><h3>Bilan de l’évaluation formative</h3><p>Questions fermées répondues : <strong>${r.answered}/${r.total}</strong></p><p>Réponses correctes : <strong>${r.correct}/${r.total}</strong></p><p>Associations réussies : <strong>${r.associations}</strong></p><p>${v160Esc(msg)}</p></div>`;
      }
      return;
    }
  }, true);

  if(typeof renderLogin === 'function') renderLogin();
})();


/* =========================================================
   V161 — Correction du tableau de bord
   Demande : garder uniquement les premiers titres
   (niveau scolaire -> unités) dans un seul tableau de bord.
   Aucun diagnostic ni liste détaillée de leçons dans l'accueil.
========================================================= */
(function(){
  const V161_GROUPS = [
    { key:'1ac', label:'1ère année collégiale', ids:['v124_1ac_systeme','v124_1ac_os'] },
    { key:'2ac', label:'2ème année collégiale', ids:['u3_tableur','u4_logo'] }
  ];
  function v161Esc(value){
    return (typeof esc === 'function') ? esc(value ?? '') : String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function v161Unit(id){ return Array.isArray(UNITS) ? UNITS.find(u => u && u.id === id) : null; }
  function v161CleanTitle(title){ return String(title || '').replace(/^Unité\s*\d+\s*:\s*/i, '').trim(); }
  function v161UnitButton(unit, index){
    return `<button type="button" class="v161-unit-pill" data-unit="${v161Esc(unit.id)}">
      <span class="v161-unit-number">Unité ${index + 1}</span>
      <strong>${v161Esc(v161CleanTitle(unit.title))}</strong>
    </button>`;
  }
  function v161DashboardRows(){
    return V161_GROUPS.map(group => {
      const units = group.ids.map(v161Unit).filter(Boolean);
      const unitButtons = units.map((u, i) => v161UnitButton(u, i)).join('');
      return `<tr>
        <th scope="row"><span class="v161-level-title">${v161Esc(group.label)}</span></th>
        <td><div class="v161-unit-list">${unitButtons}</div></td>
      </tr>`;
    }).join('');
  }
  renderHome = function(){
    if(typeof v124EnsureFirstYearUnits === 'function') v124EnsureFirstYearUnits();
    state.selectedLevel = null;
    $('#app').innerHTML = appShell(`<main class="v161-dashboard-page">
      <section class="v161-dashboard-hero">
        <span class="mini-pill">Tableau de bord</span>
        <h1>ÉPI — Informatique collégiale</h1>
        <p>Choisis seulement le niveau scolaire puis l’unité. Les diagnostics et les activités restent à l’intérieur de chaque unité.</p>
      </section>
      <section class="v161-dashboard-card" aria-label="Tableau de bord des niveaux et unités">
        <table class="v161-dashboard-table">
          <thead>
            <tr><th>Niveau scolaire</th><th>Unités</th></tr>
          </thead>
          <tbody>${v161DashboardRows()}</tbody>
        </table>
      </section>
    </main>`);
  };
  if(typeof renderLogin === 'function') renderLogin();
})();

/* =========================================================
   V162 — Diagnostic avant l’entrée dans l’unité + situation de production
   Demande :
   - Le tableau de bord reste simple : niveau scolaire -> unités.
   - Le diagnostic est placé après le choix de l’unité et avant l’entrée dans son contenu.
   - La situation d’intégration est entièrement remplacée par une situation de production.
   - Aucune question ouverte ni zone de saisie manuelle dans la situation de production.
========================================================= */
(function(){
  function v162Esc(value){
    if(typeof esc === 'function') return esc(value ?? '');
    return String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function v162Attr(value){ return v162Esc(value); }
  function v162CleanTitle(title){ return String(title || '').replace(/^Unité\s*\d+\s*:\s*/i,'').trim(); }
  function v162Lessons(unit){ return (unit && Array.isArray(unit.lessons)) ? unit.lessons : []; }
  function v162FirstWords(text){
    return String(text || '').replace(/[.؟?؛;:]+$/,'').trim();
  }
  function v162QuestionText(q){ return Array.isArray(q) ? String(q[0] || '') : String((q && (q.q || q.question || q.prompt)) || ''); }
  function v162Choices(q){ return Array.isArray(q) ? (q[1] || []) : ((q && q.choices) || []); }
  function v162CorrectIndex(q){ return Array.isArray(q) ? Number(q[2] || 0) : Number((q && (q.correct ?? q.correctIndex)) || 0); }

  function v162FallbackDefinition(lesson){
    const objective = v162FirstWords(lesson && lesson.objective);
    const focus = v162FirstWords(lesson && lesson.officialFocus);
    const fr = v162FirstWords(lesson && lesson.fr);
    return objective || focus || fr || 'Notion principale à comprendre dans cette unité';
  }

  function v162UnitTerms(unit){
    return v162Lessons(unit).map((lesson, i)=>({
      term: v162CleanTitle(lesson.title || `Titre ${i+1}`),
      def: v162FallbackDefinition(lesson),
      lesson
    })).filter(x => x.term);
  }

  function v162ExamQuestions(unit, max){
    const exam = (unit && Array.isArray(unit.exam)) ? unit.exam : [];
    return exam.slice(0, max || 6).map((q, i)=>{
      const choices = v162Choices(q);
      const correct = v162CorrectIndex(q);
      return {
        id: `exam-${i}`,
        type: 'QCM',
        question: v162QuestionText(q),
        choices: choices,
        answer: choices[correct] || choices[0] || '',
        notion: (v162Lessons(unit)[i % Math.max(1, v162Lessons(unit).length)] || {}).title || unit.title || 'Notion'
      };
    }).filter(q => q.question && q.choices.length);
  }

  function v162GeneratedQcm(unit, max){
    const terms = v162UnitTerms(unit);
    return terms.slice(0, max || 6).map((item, i)=>{
      const other = terms.filter(t => t.term !== item.term).map(t => t.term).slice(0,2);
      const choices = [item.term, ...other, 'Une notion hors unité'].slice(0,4);
      return {
        id: `gen-${i}`,
        type: 'QCM',
        question: `Quelle notion correspond à cette définition : « ${item.def} » ?`,
        choices,
        answer: item.term,
        notion: item.term
      };
    });
  }

  function v162QcmSet(unit, max){
    const byExam = v162ExamQuestions(unit, max || 6);
    if(byExam.length >= 4) return byExam.slice(0, max || 6);
    return byExam.concat(v162GeneratedQcm(unit, (max || 6) - byExam.length));
  }

  function v162TrueFalseSet(unit, max){
    const terms = v162UnitTerms(unit);
    const positives = terms.slice(0, Math.ceil((max || 6) / 2)).map((item, i)=>({
      id:`tf-ok-${i}`,
      type:'VF',
      question:`${item.term} : ${item.def}.`,
      answer:'Vrai',
      notion:item.term
    }));
    const negatives = terms.slice(0, Math.floor((max || 6) / 2)).map((item, i)=>{
      const wrong = terms[(i + 1) % Math.max(1, terms.length)] || item;
      return {
        id:`tf-no-${i}`,
        type:'VF',
        question:`${item.term} signifie : ${wrong.term === item.term ? 'une notion sans lien avec le cours' : wrong.def}.`,
        answer:'Faux',
        notion:item.term
      };
    });
    return positives.concat(negatives).slice(0, max || 6);
  }

  function v162AssociationSet(unit, max){
    return v162UnitTerms(unit).slice(0, max || 6).map((item, i)=>({
      id:`assoc-${i}`,
      term:item.term,
      def:item.def
    }));
  }

  function v162OrderSteps(unit){
    const withOrder = v162Lessons(unit).find(l => l && l.order && Array.isArray(l.order.steps) && l.order.steps.length >= 3);
    if(withOrder) return withOrder.order.steps.slice(0,5);
    const lessonTitles = v162Lessons(unit).map(l => v162CleanTitle(l.title)).filter(Boolean).slice(0,5);
    if(lessonTitles.length >= 3) return lessonTitles;
    return ['Observer la situation', 'Identifier la notion utile', 'Choisir la bonne réponse', 'Vérifier le résultat'];
  }

  function v162ChoiceCard(q, i, family){
    const choices = (q.choices || []).filter(Boolean);
    return `<article class="game v162-choice-card v162-scored" data-v162-answer="${v162Attr(q.answer)}" data-v162-family="${v162Attr(family)}" data-v162-notion="${v162Attr(q.notion || '')}">
      <div class="v162-card-top"><span>${i}</span><strong>${v162Esc(q.type || family)}</strong></div>
      <p>${v162Esc(q.question)}</p>
      <div class="choice-row v162-choice-row">
        ${choices.map(c => `<button type="button" class="choice" data-fill-choice="${v162Attr(c)}" data-answer="${v162Attr(q.answer)}">${v162Esc(c)}</button>`).join('')}
      </div>
      <div class="feedback"></div>
    </article>`;
  }

  function v162VfCard(q, i){
    return v162ChoiceCard({
      ...q,
      type:'Vrai / Faux',
      choices:['Vrai','Faux']
    }, i, 'Vrai / Faux');
  }

  function v162AssociationBlock(pairs, title){
    if(!pairs.length) return '';
    return `<article class="game v162-block v162-association-block">
      <div class="v162-block-title"><span>Type association</span><h3>${v162Esc(title || 'Associer chaque notion à son rôle')}</h3></div>
      <div class="drop-grid v60-drop-grid v162-drop-grid">
        <div class="drag-bank">${pairs.map(p => `<span class="drag-item" draggable="true" data-drag="${v162Attr(p.term)}">${v162Esc(p.term)}</span>`).join('')}</div>
        <div class="drop-zone">${pairs.map((p, i) => `<div class="drop-target" data-target="${v162Attr(p.term)}" data-definition="${v162Attr(p.def)}"><span class="drop-index">${i+1}</span>${v162Esc(p.def)}</div>`).join('')}</div>
      </div>
      <div class="feedback"></div>
    </article>`;
  }

  function v162OrderBlock(steps, title){
    const expected = v162Attr(JSON.stringify(steps));
    const options = steps.slice().reverse();
    return `<article class="game v162-block v162-order-block">
      <div class="v162-block-title"><span>Type ordre</span><h3>${v162Esc(title || 'Remettre les étapes dans l’ordre')}</h3></div>
      <div class="v60-order-box v162-order-box">
        ${steps.map((_, i)=>`<label class="v60-order-line"><span>Étape ${i+1}</span><select><option value="">Choisir</option>${options.map(op => `<option value="${v162Attr(op)}">${v162Esc(op)}</option>`).join('')}</select></label>`).join('')}
        <button type="button" class="btn small" data-check-order='${expected}'>Vérifier l’ordre</button>
      </div>
      <div class="feedback"></div>
    </article>`;
  }

  function v162Score(scope){
    const scored = [...scope.querySelectorAll('.v162-scored')];
    let answered = 0, correct = 0;
    const weak = [];
    scored.forEach(card => {
      const selected = card.querySelector('.choice.selected');
      if(selected){
        answered++;
        if(selected.dataset.fillChoice === card.dataset.v162Answer || selected.dataset.fillChoice === card.dataset.answer){
          correct++;
        }else if(card.dataset.v162Notion){
          weak.push(card.dataset.v162Notion);
        }
      }
    });
    const orderButtons = [...scope.querySelectorAll('[data-check-order]')];
    let orderAnswered = 0, orderCorrect = 0;
    orderButtons.forEach(btn => {
      const game = btn.closest('.game');
      let expected = [];
      try{ expected = JSON.parse(btn.dataset.checkOrder || '[]'); }catch(e){}
      const values = [...(game ? game.querySelectorAll('select') : [])].map(s => s.value);
      const has = values.some(Boolean);
      if(has) orderAnswered++;
      if(expected.length && expected.every((v,i)=> values[i] === v)) orderCorrect++;
    });
    const assocTargets = [...scope.querySelectorAll('.drop-target')];
    const assocCorrect = assocTargets.filter(t => t.classList.contains('correct')).length;
    const total = scored.length + orderButtons.length + assocTargets.length;
    const totalAnswered = answered + orderAnswered + assocCorrect;
    const totalCorrect = correct + orderCorrect + assocCorrect;
    return {answered: totalAnswered, correct: totalCorrect, total, assocCorrect, weak};
  }

  function v162DiagnosticIntro(unit){
    return `Ce diagnostic se place avant l’entrée dans l’unité. Il sert à connaître le niveau de l’élève sur les notions principales de « ${v162CleanTitle(unit.title)} » avant de commencer le cours.`;
  }

  function v162RenderDiagnostic(unit, result){
    const qcm = v162QcmSet(unit, 4);
    const vf = v162TrueFalseSet(unit, 4);
    const assoc = v162AssociationSet(unit, 5);
    const steps = v162OrderSteps(unit);
    let resultHtml = '';
    if(result){
      const ratio = result.total ? result.correct / result.total : 0;
      const level = ratio >= .75 ? 'Bon départ' : ratio >= .5 ? 'Niveau moyen' : 'Besoin de soutien';
      const advice = ratio >= .75
        ? 'L’élève peut commencer l’unité et passer rapidement aux activités.'
        : ratio >= .5
          ? 'L’élève peut commencer l’unité, mais il doit revoir les notions signalées pendant le cours.'
          : 'L’élève doit commencer doucement par les explications visuelles et auditives avant les activités.';
      const weakList = [...new Set(result.weak || [])].slice(0,5).map(w => `<li>${v162Esc(w)}</li>`).join('');
      resultHtml = `<section class="v162-diagnostic-result ${ratio >= .75 ? 'good' : ratio >= .5 ? 'medium' : 'low'}">
        <div><span>Résultat du diagnostic</span><h3>${result.correct}/${result.total} — ${v162Esc(level)}</h3><p>${v162Esc(advice)}</p></div>
        <div><h4>Notions à surveiller</h4><ul>${weakList || '<li>Aucune notion critique détectée.</li>'}</ul></div>
        <div class="v162-result-actions"><button type="button" class="btn secondary" data-v162-retry-diagnostic="${v162Attr(unit.id)}">Refaire le diagnostic</button><button type="button" class="btn" data-v162-start-unit="${v162Attr(unit.id)}">Entrer dans l’unité</button></div>
      </section>`;
    }
    return appShell(`<main class="v162-diagnostic-page" data-v162-diagnostic="${v162Attr(unit.id)}">
      <section class="v162-diagnostic-hero">
        <span class="mini-pill">Diagnostic avant l’unité</span>
        <h1>${v162Esc(v162CleanTitle(unit.title))}</h1>
        <p>${v162Esc(v162DiagnosticIntro(unit))}</p>
      </section>
      ${resultHtml || `<section class="v162-diagnostic-form">
        <div class="v162-type-section"><h2>1) QCM</h2><div class="v162-card-grid">${qcm.map((q,i)=>v162ChoiceCard(q,i+1,'QCM')).join('')}</div></div>
        <div class="v162-type-section"><h2>2) Vrai / Faux</h2><div class="v162-card-grid">${vf.map((q,i)=>v162VfCard(q,i+1)).join('')}</div></div>
        ${v162AssociationBlock(assoc, 'Associer les notions importantes')}
        ${v162OrderBlock(steps, 'Ordonner les titres ou les actions principales')}
        <div class="v162-submit-row"><button type="button" class="btn" data-v162-submit-diagnostic="${v162Attr(unit.id)}">Valider le diagnostic</button><div id="v162DiagnosticResult"></div></div>
      </section>`}
    </main>`);
  }

  function v162ProductionScenario(unit){
    const title = v162CleanTitle(unit.title);
    if(String(unit.id).includes('tableur')){
      return 'Un élève doit préparer une production numérique : un petit tableau de notes, avec calculs, mise en forme, graphique et préparation de l’impression. Pour réussir, il doit choisir les bonnes notions dans toute l’unité.';
    }
    if(String(unit.id).includes('logo')){
      return 'Un élève doit préparer une production LOGO : un dessin construit avec des instructions, des répétitions et des procédures. Pour réussir, il doit choisir les bonnes notions dans toute l’unité.';
    }
    if(String(unit.id).includes('systeme')){
      return 'Un élève doit préparer une fiche explicative sur le système informatique : information, données, matériel, logiciels et connectivités. Pour réussir, il doit choisir les bonnes notions dans toute l’unité.';
    }
    if(String(unit.id).includes('os')){
      return 'Un élève doit préparer une fiche explicative sur l’utilisation du système d’exploitation : fenêtres, bureau, icônes et organisation des fichiers. Pour réussir, il doit choisir les bonnes notions dans toute l’unité.';
    }
    return `Un élève doit réaliser une production sur « ${title} ». Pour réussir, il doit mobiliser les notions principales de toute l’unité.`;
  }

  function v162RenderProduction(unit){
    const qcm = v162QcmSet(unit, 6);
    const vf = v162TrueFalseSet(unit, 6);
    const assoc = v162AssociationSet(unit, 6);
    const steps = v162OrderSteps(unit);
    return `<div class="section-head v162-production-head">
      <div>
        <h2>Situation de production — ${v162Esc(v162CleanTitle(unit.title))}</h2>
        <p>Cette situation remplace l’ancienne situation d’intégration. Elle rassemble des questions fermées sur toute l’unité.</p>
      </div>
      <span class="pill">Production + questions fermées</span>
    </div>
    <section class="v162-production" data-v162-production="1">
      <div class="panel v162-production-scenario">
        <h3>Contexte de production</h3>
        <p>${v162Esc(v162ProductionScenario(unit))}</p>
      </div>
      <div class="v162-type-section"><h3>1) QCM sur toute l’unité</h3><div class="v162-card-grid">${qcm.map((q,i)=>v162ChoiceCard(q,i+1,'QCM')).join('')}</div></div>
      <div class="v162-type-section"><h3>2) Vrai / Faux</h3><div class="v162-card-grid">${vf.map((q,i)=>v162VfCard(q,i+1)).join('')}</div></div>
      ${v162AssociationBlock(assoc, '3) Associer les notions aux définitions')}
      ${v162OrderBlock(steps, '4) Ordonner les étapes importantes')}
      <div class="v162-submit-row">
        <button type="button" class="btn" data-v162-submit-production="1">Afficher le bilan de la production</button>
        <div id="integrationResult" class="v162-production-result"></div>
      </div>
    </section>`;
  }

  // Remplacer le menu : l’entrée ancienne devient Situation de production.
  if(typeof menu === 'function'){
    const v162OldMenu = menu;
    menu = function(unit){
      let html = v162OldMenu.apply(this, arguments);
      if(typeof html !== 'string') return html;
      return html.replace(/Situation d[’']intégration/g, 'Situation de production');
    };
  }

  // Remplacer entièrement la situation d’intégration par la situation de production.
  renderIntegration = function(unit){
    return v162RenderProduction(unit);
  };

  // Afficher le diagnostic avant l’entrée dans l’unité, après le clic sur une unité du tableau de bord.
  if(typeof renderUnit === 'function'){
    const v162OldRenderUnit = renderUnit;
    renderUnit = function(){
      const unit = (typeof currentUnit === 'function') ? currentUnit() : null;
      state.v162Done = state.v162Done || {};
      if(unit && state.page === 'intro' && !state.v162Done[unit.id]){
        $('#app').innerHTML = v162RenderDiagnostic(unit, null);
        return;
      }
      return v162OldRenderUnit.apply(this, arguments);
    };
  }

  document.addEventListener('click', function(e){
    const diagSubmit = e.target && e.target.closest ? e.target.closest('[data-v162-submit-diagnostic]') : null;
    if(diagSubmit){
      e.preventDefault();
      const unitId = diagSubmit.getAttribute('data-v162-submit-diagnostic');
      const unit = Array.isArray(UNITS) ? UNITS.find(u => u && u.id === unitId) : null;
      const scope = diagSubmit.closest('[data-v162-diagnostic]') || document;
      const result = v162Score(scope);
      if(result.answered < Math.max(1, result.total - scope.querySelectorAll('.drop-target').length)){
        const box = scope.querySelector('#v162DiagnosticResult');
        if(box) box.innerHTML = '<div class="v162-warning">Complète au moins les QCM, les Vrai/Faux et l’ordre avant de valider.</div>';
      }
      if(unit) $('#app').innerHTML = v162RenderDiagnostic(unit, result);
      return;
    }

    const start = e.target && e.target.closest ? e.target.closest('[data-v162-start-unit]') : null;
    if(start){
      e.preventDefault();
      const unitId = start.getAttribute('data-v162-start-unit');
      state.v162Done = state.v162Done || {};
      state.v162Done[unitId] = true;
      state.unitId = unitId;
      state.page = 'intro';
      state.lessonIndex = 0;
      state.tab = 'visual';
      renderUnit();
      return;
    }

    const retry = e.target && e.target.closest ? e.target.closest('[data-v162-retry-diagnostic]') : null;
    if(retry){
      e.preventDefault();
      const unitId = retry.getAttribute('data-v162-retry-diagnostic');
      const unit = Array.isArray(UNITS) ? UNITS.find(u => u && u.id === unitId) : null;
      if(unit) $('#app').innerHTML = v162RenderDiagnostic(unit, null);
      return;
    }

    const prodSubmit = e.target && e.target.closest ? e.target.closest('[data-v162-submit-production]') : null;
    if(prodSubmit){
      e.preventDefault();
      const scope = prodSubmit.closest('[data-v162-production]') || document;
      const result = v162Score(scope);
      const box = scope.querySelector('#integrationResult');
      if(box){
        const ratio = result.total ? result.correct / result.total : 0;
        const msg = ratio >= .75 ? 'Très bien : la production peut être réalisée avec une bonne maîtrise.' : ratio >= .5 ? 'Résultat moyen : la production est possible, mais certaines notions doivent être revues.' : 'Résultat faible : il faut revoir les notions principales avant de réaliser la production.';
        box.innerHTML = `<div class="result-box diagnostic-result v162-result-box"><h3>Bilan de la situation de production</h3><p>Réponses traitées : <strong>${result.answered}/${result.total}</strong></p><p>Réponses correctes : <strong>${result.correct}/${result.total}</strong></p><p>${v162Esc(msg)}</p></div>`;
      }
      return;
    }
  }, true);

  if(typeof renderLogin === 'function') renderLogin();
})();

/* =========================================================
   V163 — Espace diagnostic centralisé
   Demande : ne pas afficher le diagnostic avant chaque unité.
   Créer un espace séparé qui rassemble les diagnostics de toutes les unités.
   Le tableau de bord garde uniquement : niveau scolaire -> unités.
========================================================= */
(function(){
  function h(value){
    if(typeof esc === 'function') return esc(value ?? '');
    return String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function cleanTitle(title){ return String(title || '').replace(/^Unité\s*\d+\s*:\s*/i, '').trim(); }
  function unitById(id){ return Array.isArray(UNITS) ? UNITS.find(u => u && u.id === id) : null; }
  function lessonsOf(unit){ return unit && Array.isArray(unit.lessons) ? unit.lessons : []; }
  function groups(){
    if(typeof v124EnsureFirstYearUnits === 'function') v124EnsureFirstYearUnits();
    return [
      {key:'1ac', label:'1ère année collégiale', ids:['v124_1ac_systeme','v124_1ac_os']},
      {key:'2ac', label:'2ème année collégiale', ids:['u3_tableur','u4_logo']}
    ];
  }
  function allUnits(){
    return groups().flatMap(g => g.ids.map(id => ({group:g, unit:unitById(id)})).filter(x => x.unit));
  }
  function unitButton(unit, index){
    return `<button type="button" class="v161-unit-pill" data-unit="${h(unit.id)}">
      <span class="v161-unit-number">Unité ${index + 1}</span>
      <strong>${h(cleanTitle(unit.title))}</strong>
    </button>`;
  }
  function dashboardRows(){
    return groups().map(group => {
      const units = group.ids.map(unitById).filter(Boolean);
      return `<tr>
        <th scope="row"><span class="v161-level-title">${h(group.label)}</span></th>
        <td><div class="v161-unit-list">${units.map((u,i)=>unitButton(u,i)).join('')}</div></td>
      </tr>`;
    }).join('');
  }

  function renderUnitDirect(){
    const unit = (typeof currentUnit === 'function') ? currentUnit() : null;
    if(!unit) return;
    let content = '';
    if(state.page === 'intro') content = renderUnitIntro(unit);
    if(state.page === 'lesson') content = renderLesson(unit, lessonsOf(unit)[state.lessonIndex]);
    if(state.page === 'dictionary') content = renderDictionary(unit);
    if(state.page === 'integration') content = renderIntegration(unit);
    if(state.page === 'exam') content = renderExam(unit);
    const levelClass = state.selectedLevel === '1ac' ? 'v125-unit-view v125-unit-view-1ac' : state.selectedLevel === '2ac' ? 'v125-unit-view v125-unit-view-2ac' : 'v125-unit-view';
    $('#app').innerHTML = appShell(`<section class="${levelClass}"><section class="page-title"><h2>${h(unit.title)}</h2></section><div class="layout">${menu(unit)}<main class="content-card">${content}</main></div></section>`);
  }

  // Supprimer le diagnostic automatique avant l'unité : ouvrir directement l'unité.
  renderUnit = renderUnitDirect;

  renderHome = function(){
    state.selectedLevel = null;
    $('#app').innerHTML = appShell(`<main class="v161-dashboard-page v163-dashboard-page">
      <section class="v161-dashboard-hero">
        <span class="mini-pill">Tableau de bord</span>
        <h1>ÉPI — Informatique collégiale</h1>
        <p>Le tableau de bord garde seulement les niveaux scolaires et les unités.</p>
      </section>
      <section class="v161-dashboard-card" aria-label="Tableau de bord des niveaux et unités">
        <table class="v161-dashboard-table">
          <thead><tr><th>Niveau scolaire</th><th>Unités</th></tr></thead>
          <tbody>${dashboardRows()}</tbody>
        </table>
      </section>
      <section class="v163-diagnostic-entry">
        <div>
          <span class="mini-pill">Espace séparé</span>
          <h2>Espace diagnostic</h2>
          <p>Il rassemble les diagnostics de toutes les unités. L’élève peut vérifier son niveau avant de commencer ou avant de réviser.</p>
        </div>
        <button type="button" class="btn" data-v163-diagnostic-hub="1">Ouvrir l’espace diagnostic</button>
      </section>
    </main>`);
  };

  function firstDefinition(lesson){
    if(!lesson) return '';
    if(Array.isArray(lesson.drag) && lesson.drag[0]) return String(lesson.drag[0][1] || lesson.drag[0][0] || '');
    if(Array.isArray(lesson.fill)) return String(lesson.fill[0] || '').replace('____', String(lesson.fill[1] || '...'));
    return String(lesson.objective || lesson.officialFocus || lesson.title || '');
  }
  function makeQcm(unit, count){
    const lessons = lessonsOf(unit);
    const items = [];
    lessons.forEach((lesson, i) => {
      const good = cleanTitle(lesson.title);
      const others = lessons.filter((_,j)=>j!==i).map(l => cleanTitle(l.title)).filter(Boolean);
      const choices = [good, ...others].slice(0,3);
      while(choices.length < 3) choices.push(['Réponse A','Réponse B','Réponse C'][choices.length]);
      items.push({
        type:'QCM',
        notion: good,
        question: `Quelle notion correspond à cette idée : « ${firstDefinition(lesson).slice(0,120)} » ?`,
        choices,
        answer: good
      });
    });
    return items.slice(0, count || 4);
  }
  function makeTrueFalse(unit, count){
    const lessons = lessonsOf(unit);
    const items = [];
    lessons.forEach((lesson, i) => {
      const title = cleanTitle(lesson.title);
      const def = firstDefinition(lesson).slice(0,120);
      items.push({type:'Vrai / Faux', notion:title, question:`${title} : ${def}`, choices:['Vrai','Faux'], answer:'Vrai'});
      const next = lessons[(i+1) % lessons.length];
      if(next && next !== lesson){
        items.push({type:'Vrai / Faux', notion:title, question:`${title} signifie : ${firstDefinition(next).slice(0,120)}`, choices:['Vrai','Faux'], answer:'Faux'});
      }
    });
    return items.slice(0, count || 4);
  }
  function makeAssociations(unit, count){
    const list = [];
    lessonsOf(unit).forEach(lesson => {
      if(Array.isArray(lesson.drag)){
        lesson.drag.forEach(pair => {
          if(pair && pair[0] && pair[1]) list.push({term:String(pair[0]), def:String(pair[1]), notion:cleanTitle(lesson.title)});
        });
      }
    });
    if(!list.length){
      lessonsOf(unit).forEach(lesson => list.push({term:cleanTitle(lesson.title), def:firstDefinition(lesson), notion:cleanTitle(lesson.title)}));
    }
    return list.slice(0, count || 5);
  }
  function makeOrder(unit){
    const found = lessonsOf(unit).find(l => l && l.order && Array.isArray(l.order.steps) && l.order.steps.length >= 2);
    if(found) return found.order.steps.slice(0,5);
    return lessonsOf(unit).map(l => cleanTitle(l.title)).filter(Boolean).slice(0,5);
  }
  function choiceCard(q, num){
    return `<article class="game v163-question-card v163-scored" data-v163-answer="${h(q.answer)}" data-v163-notion="${h(q.notion)}">
      <div class="v160-question-top"><span>${h(q.type)}</span><strong>Question ${num}</strong></div>
      <p>${h(q.question)}</p>
      <div class="choice-row">${q.choices.map(c => `<button type="button" class="choice" data-fill-choice="${h(c)}" data-answer="${h(q.answer)}">${h(c)}</button>`).join('')}</div>
      <div class="question-feedback"></div>
    </article>`;
  }
  function associationBlock(items){
    if(!items.length) return '';
    return `<section class="v163-diagnostic-type"><h3>3) Association</h3><p class="subtle">Glisse chaque notion vers sa bonne définition.</p>
      <article class="game v163-association-game">
        <div class="drop-grid v60-drop-grid v160-drop-grid">
          <div class="drag-bank">${items.map(p => `<span class="drag-item" draggable="true" data-drag="${h(p.term)}">${h(p.term)}</span>`).join('')}</div>
          <div class="drop-zone">${items.map((p,i) => `<div class="drop-target" data-target="${h(p.term)}" data-definition="${h(p.def)}"><span class="drop-index">${i+1}</span>${h(p.def)}</div>`).join('')}</div>
        </div>
        <div class="feedback"></div>
      </article>
    </section>`;
  }
  function orderBlock(steps){
    if(!steps || steps.length < 2) return '';
    const options = steps.slice().reverse();
    return `<section class="v163-diagnostic-type"><h3>4) Ordre</h3><p class="subtle">Choisis l’ordre correct des étapes ou des titres.</p>
      <article class="game v163-order-game">
        <div class="v60-order-box v160-order-box">
          ${steps.map((_,i)=>`<label class="v60-order-line"><span>Étape ${i+1}</span><select><option value="">Choisir</option>${options.map(op => `<option value="${h(op)}">${h(op)}</option>`).join('')}</select></label>`).join('')}
          <button type="button" class="btn small" data-check-order='${h(JSON.stringify(steps))}'>Vérifier l’ordre</button>
        </div>
        <div class="feedback"></div>
      </article>
    </section>`;
  }
  function diagnosticPanel(unit, index, groupLabel){
    const qcm = makeQcm(unit, 4);
    const vf = makeTrueFalse(unit, 4);
    const assoc = makeAssociations(unit, 5);
    const order = makeOrder(unit);
    return `<details class="v163-diagnostic-unit" data-v163-diagnostic-unit="${h(unit.id)}">
      <summary>
        <span>${h(groupLabel)} — Unité ${index + 1}</span>
        <strong>${h(cleanTitle(unit.title))}</strong>
      </summary>
      <div class="v163-diagnostic-content">
        <div class="v163-diagnostic-intro">
          <h2>Diagnostic — ${h(cleanTitle(unit.title))}</h2>
          <p>Objectif : connaître le niveau de l’élève sur les notions principales de cette unité avant l’apprentissage ou la révision.</p>
        </div>
        <section class="v163-diagnostic-type"><h3>1) QCM</h3><div class="v163-card-grid">${qcm.map((q,i)=>choiceCard(q,i+1)).join('')}</div></section>
        <section class="v163-diagnostic-type"><h3>2) Vrai / Faux</h3><div class="v163-card-grid">${vf.map((q,i)=>choiceCard(q,i+1)).join('')}</div></section>
        ${associationBlock(assoc)}
        ${orderBlock(order)}
        <div class="v163-diagnostic-actions">
          <button type="button" class="btn" data-v163-submit-diagnostic="${h(unit.id)}">Afficher le bilan du diagnostic</button>
          <button type="button" class="btn secondary" data-v163-open-unit="${h(unit.id)}">Entrer dans l’unité</button>
          <div class="v163-diagnostic-result" id="v163Result-${h(unit.id)}"></div>
        </div>
      </div>
    </details>`;
  }
  function renderDiagnosticHub(){
    const blocks = groups().map(group => {
      const panels = group.ids.map(unitById).filter(Boolean).map((u,i)=>diagnosticPanel(u,i,group.label)).join('');
      return `<section class="v163-diagnostic-level"><h2>${h(group.label)}</h2>${panels}</section>`;
    }).join('');
    $('#app').innerHTML = appShell(`<main class="v163-diagnostic-hub">
      <section class="v163-diagnostic-hero">
        <span class="mini-pill">Espace diagnostic</span>
        <h1>Diagnostics de toutes les unités</h1>
        <p>Cette page rassemble les diagnostics de chaque unité. Chaque diagnostic contient plusieurs types de questions : QCM, Vrai/Faux, association et ordre.</p>
        <button type="button" class="btn secondary" data-action="home">Retour au tableau de bord</button>
      </section>
      ${blocks}
    </main>`);
  }
  function scoreDiagnostic(scope){
    const cards = [...scope.querySelectorAll('.v163-scored')];
    let answered = 0, correct = 0;
    const weak = [];
    cards.forEach(card => {
      const selected = card.querySelector('.choice.selected');
      if(selected){
        answered++;
        const expected = card.dataset.v163Answer || selected.dataset.answer;
        if(selected.dataset.fillChoice === expected) correct++;
        else if(card.dataset.v163Notion) weak.push(card.dataset.v163Notion);
      }
    });
    const orderButtons = [...scope.querySelectorAll('[data-check-order]')];
    let orderAnswered = 0, orderCorrect = 0;
    orderButtons.forEach(btn => {
      const game = btn.closest('.game');
      let expected = [];
      try{ expected = JSON.parse(btn.dataset.checkOrder || '[]'); }catch(e){}
      const values = [...(game ? game.querySelectorAll('select') : [])].map(s => s.value);
      if(values.some(Boolean)) orderAnswered++;
      if(expected.length && expected.every((v,i)=>values[i] === v)) orderCorrect++;
    });
    const assocTargets = [...scope.querySelectorAll('.drop-target')];
    const assocCorrect = assocTargets.filter(t => t.classList.contains('correct')).length;
    const total = cards.length + orderButtons.length + assocTargets.length;
    return {answered: answered + orderAnswered + assocCorrect, correct: correct + orderCorrect + assocCorrect, total, weak};
  }
  function resultHtml(r){
    const ratio = r.total ? r.correct / r.total : 0;
    const level = ratio >= .75 ? 'Bon niveau' : ratio >= .5 ? 'Niveau moyen' : 'Besoin de soutien';
    const advice = ratio >= .75 ? 'L’élève peut commencer l’unité avec confiance.' : ratio >= .5 ? 'L’élève peut commencer, mais il doit revoir les notions où il s’est trompé.' : 'L’élève doit revoir les définitions de base avant d’entrer dans l’unité.';
    const weak = [...new Set(r.weak || [])].slice(0,6).map(x => `<li>${h(x)}</li>`).join('') || '<li>Aucune notion précise détectée.</li>';
    return `<div class="result-box diagnostic-result v163-result-box"><h3>Bilan du diagnostic : ${h(level)}</h3><p>Réponses traitées : <strong>${r.answered}/${r.total}</strong></p><p>Réponses correctes : <strong>${r.correct}/${r.total}</strong></p><p>${h(advice)}</p><h4>Notions à revoir</h4><ul>${weak}</ul></div>`;
  }

  document.addEventListener('click', function(e){
    const hub = e.target && e.target.closest ? e.target.closest('[data-v163-diagnostic-hub]') : null;
    if(hub){ e.preventDefault(); e.stopPropagation(); renderDiagnosticHub(); return; }

    const submit = e.target && e.target.closest ? e.target.closest('[data-v163-submit-diagnostic]') : null;
    if(submit){
      e.preventDefault(); e.stopPropagation();
      const scope = submit.closest('[data-v163-diagnostic-unit]') || document;
      const box = scope.querySelector('.v163-diagnostic-result');
      if(box) box.innerHTML = resultHtml(scoreDiagnostic(scope));
      return;
    }

    const openUnit = e.target && e.target.closest ? e.target.closest('[data-v163-open-unit]') : null;
    if(openUnit){
      e.preventDefault(); e.stopPropagation();
      state.unitId = openUnit.getAttribute('data-v163-open-unit');
      state.page = 'intro';
      state.lessonIndex = 0;
      state.tab = 'visual';
      renderUnit();
      return;
    }
  }, true);

  if(typeof renderLogin === 'function') renderLogin();
})();

/* =========================================================
   V164 — Annuler l'espace diagnostic + tableau de bord stylé
   Demande : supprimer l'espace diagnostic, garder uniquement
   Niveau scolaire -> Unités, sans descriptions de titres.
========================================================= */
(function(){
  try{ window.APP_VERSION_LABEL = 'v164 — tableau de bord stylé sans diagnostic'; }catch(e){}
  function h(value){
    if(typeof esc === 'function') return esc(value ?? '');
    return String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function cleanTitle(title){ return String(title || '').replace(/^Unité\s*\d+\s*:\s*/i, '').trim(); }
  function ensureUnits(){ if(typeof v124EnsureFirstYearUnits === 'function') v124EnsureFirstYearUnits(); }
  function unitById(id){ return Array.isArray(UNITS) ? UNITS.find(u => u && u.id === id) : null; }
  const DASHBOARD_GROUPS = [
    { key:'1ac', label:'1ère année collégiale', ids:['v124_1ac_systeme','v124_1ac_os'] },
    { key:'2ac', label:'2ème année collégiale', ids:['u3_tableur','u4_logo'] }
  ];
  function unitTile(unit, index, groupKey){
    return `<button type="button" class="v164-unit-tile v164-${h(groupKey)}" data-unit="${h(unit.id)}" data-v164-level="${h(groupKey)}">
      <span class="v164-unit-index">Unité ${index + 1}</span>
      <strong>${h(cleanTitle(unit.title))}</strong>
    </button>`;
  }
  function dashboardRows(){
    return DASHBOARD_GROUPS.map(group => {
      const units = group.ids.map(unitById).filter(Boolean);
      return `<tr class="v164-dashboard-row">
        <th scope="row">
          <span class="v164-level-badge">${h(group.label)}</span>
        </th>
        <td>
          <div class="v164-unit-list">${units.map((u,i)=>unitTile(u,i,group.key)).join('')}</div>
        </td>
      </tr>`;
    }).join('');
  }

  renderHome = function(){
    ensureUnits();
    state.selectedLevel = null;
    $('#app').innerHTML = appShell(`<main class="v164-dashboard-page">
      <section class="v164-dashboard-hero">
        <span class="mini-pill">Tableau de bord</span>
        <h1>ÉPI — Informatique collégiale</h1>
      </section>
      <section class="v164-dashboard-card" aria-label="Tableau de bord des niveaux scolaires et unités">
        <table class="v164-dashboard-table">
          <thead>
            <tr>
              <th>Niveau scolaire</th>
              <th>Unités</th>
            </tr>
          </thead>
          <tbody>${dashboardRows()}</tbody>
        </table>
      </section>
    </main>`);
  };

  document.addEventListener('click', function(e){
    const unitBtn = e.target && e.target.closest ? e.target.closest('[data-v164-level][data-unit]') : null;
    if(unitBtn){
      state.selectedLevel = unitBtn.getAttribute('data-v164-level') || null;
    }
  }, true);

  if(typeof renderLogin === 'function') renderLogin();
})();

/* =========================================================
   V165 — Situation d’intégration = questions de synthèse
   Demande : supprimer le contenu actuel de la situation
   d’intégration et le remplacer par des questions rassemblant
   toutes les connaissances de l’unité.
========================================================= */
(function(){
  try{ window.APP_VERSION_LABEL = 'v165 — situation intégration questions de synthèse'; }catch(e){}

  function h(value){
    if(typeof esc === 'function') return esc(value ?? '');
    return String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function cleanTitle(title){ return String(title || '').replace(/^Unité\s*\d+\s*:\s*/i,'').trim(); }
  function lessonsOf(unit){ return unit && Array.isArray(unit.lessons) ? unit.lessons : []; }
  function textOf(value){ return String(value || '').replace(/\s+/g,' ').trim(); }
  function shortText(value, max){
    const s = textOf(value);
    return s.length > (max || 150) ? s.slice(0, (max || 150) - 1).trim() + '…' : s;
  }
  function unique(list){
    const out = [];
    (list || []).forEach(x => {
      const v = textOf(x);
      if(v && !out.some(y => y.toLowerCase() === v.toLowerCase())) out.push(v);
    });
    return out;
  }
  function lessonDefinition(lesson){
    if(!lesson) return '';
    if(Array.isArray(lesson.drag) && lesson.drag[0] && lesson.drag[0][1]) return lesson.drag[0][1];
    if(Array.isArray(lesson.fill) && lesson.fill[0]) return String(lesson.fill[0]).replace('____', String(lesson.fill[1] || '...'));
    return lesson.fr || lesson.objective || lesson.officialFocus || lesson.title || '';
  }
  function unitTerms(unit){
    const items = [];
    lessonsOf(unit).forEach((lesson, i) => {
      const term = cleanTitle(lesson.title || `Notion ${i+1}`);
      const def = shortText(lessonDefinition(lesson), 170);
      if(term) items.push({term, def, lesson});
    });
    return items;
  }
  function choicesWithAnswer(answer, pool, max){
    const choices = unique([answer, ...(pool || [])]);
    ['Réponse correcte','Réponse incorrecte','Autre notion','Aucune réponse'].forEach(x => { if(choices.length < (max || 4)) choices.push(x); });
    return choices.slice(0, max || 4);
  }
  function examToQcm(unit, max){
    const exam = Array.isArray(unit && unit.exam) ? unit.exam : [];
    return exam.slice(0, max || 6).map((q, i) => {
      if(!Array.isArray(q)) return null;
      const question = textOf(q[0]);
      const choices = Array.isArray(q[1]) ? q[1].map(textOf).filter(Boolean) : [];
      const correctIndex = Number(q[2] || 0);
      const answer = choices[correctIndex] || choices[0] || '';
      return question && answer ? {
        type:'QCM',
        notion: cleanTitle((lessonsOf(unit)[i % Math.max(1, lessonsOf(unit).length)] || {}).title || unit.title),
        question,
        choices: choicesWithAnswer(answer, choices, 4),
        answer
      } : null;
    }).filter(Boolean);
  }
  function lessonQcm(unit){
    const terms = unitTerms(unit);
    const termNames = terms.map(x => x.term);
    return lessonsOf(unit).map((lesson, i) => {
      const title = cleanTitle(lesson.title || `Notion ${i+1}`);
      if(Array.isArray(lesson.fill) && lesson.fill[0] && lesson.fill[1]){
        const prompt = String(lesson.fill[0]).replace('____', '…');
        const answer = textOf(lesson.fill[1]);
        const choices = choicesWithAnswer(answer, Array.isArray(lesson.fill[2]) ? lesson.fill[2] : termNames, 4);
        return {type:'QCM', notion:title, question:prompt, choices, answer};
      }
      const def = shortText(lessonDefinition(lesson), 150);
      return {
        type:'QCM',
        notion:title,
        question:`Quelle notion correspond à cette définition : « ${def} » ?`,
        choices: choicesWithAnswer(title, termNames.filter(x => x !== title), 4),
        answer:title
      };
    });
  }
  function allQcm(unit){
    const byLesson = lessonQcm(unit);
    const byExam = examToQcm(unit, 8);
    const out = [];
    [...byLesson, ...byExam].forEach(q => {
      const key = q.question.toLowerCase();
      if(!out.some(x => x.question.toLowerCase() === key)) out.push(q);
    });
    return out.slice(0, 12);
  }
  function trueFalse(unit){
    const terms = unitTerms(unit);
    const out = [];
    terms.forEach((item, i) => {
      out.push({type:'Vrai / Faux', notion:item.term, question:`${item.term} : ${item.def}.`, choices:['Vrai','Faux'], answer:'Vrai'});
      const other = terms[(i + 1) % Math.max(1, terms.length)] || item;
      if(other.term !== item.term){
        out.push({type:'Vrai / Faux', notion:item.term, question:`${item.term} signifie : ${other.def}.`, choices:['Vrai','Faux'], answer:'Faux'});
      }
    });
    return out.slice(0, 8);
  }
  function associations(unit){
    const out = [];
    lessonsOf(unit).forEach(lesson => {
      if(Array.isArray(lesson.drag)){
        lesson.drag.forEach(pair => {
          if(Array.isArray(pair) && pair[0] && pair[1]) out.push({term:textOf(pair[0]), def:shortText(pair[1], 180)});
        });
      }
    });
    if(!out.length){
      unitTerms(unit).forEach(x => out.push({term:x.term, def:x.def}));
    }
    const seen = new Set();
    return out.filter(x => {
      const key = x.term.toLowerCase();
      if(seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 8);
  }
  function orderSteps(unit){
    const orderedLesson = lessonsOf(unit).find(l => l && l.order && Array.isArray(l.order.steps) && l.order.steps.length >= 3);
    if(orderedLesson) return orderedLesson.order.steps.slice(0, 5).map(textOf).filter(Boolean);
    const titles = lessonsOf(unit).map(l => cleanTitle(l.title)).filter(Boolean).slice(0, 5);
    if(titles.length >= 3) return titles;
    return ['Lire la question','Identifier la notion','Choisir la réponse','Vérifier la correction'];
  }
  function questionCard(q, index, family){
    return `<article class="game v165-question-card v165-scored v162-choice-card" data-v165-answer="${h(q.answer)}" data-v165-notion="${h(q.notion || '')}" data-v165-family="${h(family || q.type || 'QCM')}">
      <div class="kine-fill-question v165-kine-question">
        <div class="kine-question-number">${index}</div>
        <div class="kine-question-body">
          <div class="v160-question-top"><span>${h(q.type || family || 'QCM')}</span><strong>${h(q.notion || 'Question de synthèse')}</strong></div>
          <p>${h(q.question)}</p>
          <div class="choice-row v165-choice-row">${(q.choices || []).map(c => `<button type="button" class="choice" data-fill-choice="${h(c)}" data-answer="${h(q.answer)}">${h(c)}</button>`).join('')}</div>
          <div class="question-feedback"></div>
        </div>
      </div>
    </article>`;
  }
  function associationBlock(items){
    if(!items.length) return '';
    return `<div class="v162-type-section v165-type-section">
      <h3>3) Association des connaissances</h3>
      <p class="subtle">Associe chaque notion à sa définition ou à son rôle.</p>
      <article class="game v162-block v165-association-block">
        <div class="drop-grid v60-drop-grid v162-drop-grid">
          <div class="drag-bank">${items.map(p => `<span class="drag-item" draggable="true" data-drag="${h(p.term)}">${h(p.term)}</span>`).join('')}</div>
          <div class="drop-zone">${items.map((p,i) => `<div class="drop-target" data-target="${h(p.term)}" data-definition="${h(p.def)}"><span class="drop-index">${i+1}</span>${h(p.def)}</div>`).join('')}</div>
        </div>
        <div class="feedback"></div>
      </article>
    </div>`;
  }
  function orderBlock(steps){
    if(!steps || steps.length < 3) return '';
    const expected = h(JSON.stringify(steps));
    const options = steps.slice().reverse();
    return `<div class="v162-type-section v165-type-section">
      <h3>4) Ordre logique</h3>
      <p class="subtle">Remets les étapes ou les notions dans l’ordre logique.</p>
      <article class="game v162-block v165-order-block">
        <div class="v60-order-box v162-order-box">
          ${steps.map((_, i) => `<label class="v60-order-line"><span>Étape ${i+1}</span><select><option value="">Choisir</option>${options.map(op => `<option value="${h(op)}">${h(op)}</option>`).join('')}</select></label>`).join('')}
          <button type="button" class="btn small" data-check-order='${expected}'>Vérifier l’ordre</button>
        </div>
        <div class="feedback"></div>
      </article>
    </div>`;
  }
  function score(scope){
    const cards = [...scope.querySelectorAll('.v165-scored')];
    let answered = 0, correct = 0;
    const weak = [];
    cards.forEach(card => {
      const selected = card.querySelector('.choice.selected');
      if(selected){
        answered++;
        if(selected.dataset.fillChoice === card.dataset.v165Answer) correct++;
        else if(card.dataset.v165Notion) weak.push(card.dataset.v165Notion);
      }
    });
    const orderButtons = [...scope.querySelectorAll('[data-check-order]')];
    let orderAnswered = 0, orderCorrect = 0;
    orderButtons.forEach(btn => {
      const game = btn.closest('.game');
      let expected = [];
      try{ expected = JSON.parse(btn.dataset.checkOrder || '[]'); }catch(e){}
      const values = [...(game ? game.querySelectorAll('select') : [])].map(s => s.value);
      if(values.some(Boolean)) orderAnswered++;
      if(expected.length && expected.every((v,i) => values[i] === v)) orderCorrect++;
    });
    const targets = [...scope.querySelectorAll('.drop-target')];
    const assocCorrect = targets.filter(t => t.classList.contains('correct')).length;
    const total = cards.length + orderButtons.length + targets.length;
    return {answered: answered + orderAnswered + assocCorrect, correct: correct + orderCorrect + assocCorrect, total, weak};
  }
  function renderIntegrationQuestions(unit){
    const title = cleanTitle(unit && unit.title);
    const qcm = allQcm(unit);
    const vf = trueFalse(unit);
    const assoc = associations(unit);
    const steps = orderSteps(unit);
    const covered = unitTerms(unit).map(x => `<li>${h(x.term)}</li>`).join('');
    return `<div class="section-head v165-integration-head">
      <div>
        <h2>Situation d’intégration — Questions de synthèse</h2>
        <p>Le contenu précédent est remplacé par des questions qui rassemblent toutes les connaissances de l’unité « ${h(title)} ».</p>
      </div>
      <span class="pill">Toute l’unité</span>
    </div>
    <section class="v162-production v165-integration" data-v165-integration="1">
      <div class="panel v165-covered-panel">
        <h3>Connaissances évaluées</h3>
        <ul class="task-list knowledge-list">${covered}</ul>
      </div>
      <div class="v162-type-section v165-type-section"><h3>1) QCM sur toute l’unité</h3><div class="v162-card-grid v165-card-grid">${qcm.map((q,i) => questionCard(q, i+1, 'QCM')).join('')}</div></div>
      <div class="v162-type-section v165-type-section"><h3>2) Vrai / Faux</h3><div class="v162-card-grid v165-card-grid">${vf.map((q,i) => questionCard(q, i+1, 'Vrai / Faux')).join('')}</div></div>
      ${associationBlock(assoc)}
      ${orderBlock(steps)}
      <div class="v162-submit-row v165-submit-row">
        <button type="button" class="btn" data-v165-submit-integration="1">Afficher le bilan de la situation d’intégration</button>
        <div id="integrationResult" class="v162-production-result v165-integration-result"></div>
      </div>
    </section>`;
  }

  if(typeof menu === 'function'){
    const oldMenu = menu;
    menu = function(unit){
      let html = oldMenu.apply(this, arguments);
      if(typeof html !== 'string') return html;
      return html
        .replace(/Situation de production/g, 'Situation d’intégration')
        .replace(/Production \+ questions fermées/g, 'Questions de synthèse');
    };
  }

  renderIntegration = function(unit){
    return renderIntegrationQuestions(unit);
  };

  document.addEventListener('click', function(e){
    const submit = e.target && e.target.closest ? e.target.closest('[data-v165-submit-integration]') : null;
    if(!submit) return;
    e.preventDefault();
    e.stopPropagation();
    const scope = submit.closest('[data-v165-integration]') || document;
    const r = score(scope);
    const ratio = r.total ? r.correct / r.total : 0;
    const level = ratio >= .75 ? 'Bonne maîtrise' : ratio >= .5 ? 'Maîtrise moyenne' : 'Notions à revoir';
    const advice = ratio >= .75
      ? 'L’élève maîtrise globalement les connaissances de l’unité.'
      : ratio >= .5
        ? 'L’élève comprend une partie des notions, mais il doit revoir les erreurs.'
        : 'L’élève doit reprendre les définitions et les exercices de base avant de continuer.';
    const weakList = [...new Set(r.weak || [])].slice(0, 8).map(x => `<li>${h(x)}</li>`).join('') || '<li>Aucune notion précise détectée.</li>';
    const box = scope.querySelector('#integrationResult');
    if(box){
      box.innerHTML = `<div class="result-box diagnostic-result v165-result-box"><h3>Bilan de la situation d’intégration : ${h(level)}</h3><p>Réponses traitées : <strong>${r.answered}/${r.total}</strong></p><p>Réponses correctes : <strong>${r.correct}/${r.total}</strong></p><p>${h(advice)}</p><h4>Notions à revoir</h4><ul>${weakList}</ul></div>`;
    }
  }, true);

  if(typeof renderLogin === 'function') renderLogin();
})();

/* =========================================================
   V166 — Situation d’intégration réelle + questions directes
   Demande : supprimer QCM/Vrai-Faux/association/ordre logique.
   Remplacer par une situation réelle et des questions directes couvrant toute l’unité.
========================================================= */
(function(){
  function h(value){
    if(typeof esc === 'function') return esc(value ?? '');
    return String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function attr(value){ return h(value).replace(/`/g,'&#96;'); }
  function cleanTitle(title){ return String(title || '').replace(/^Unité\s*\d+\s*:\s*/i,'').trim(); }
  function lessonsOf(unit){ return unit && Array.isArray(unit.lessons) ? unit.lessons : []; }
  function unitKind(unit){
    const id = String(unit && unit.id || '').toLowerCase();
    const title = String(unit && unit.title || '').toLowerCase();
    if(id.includes('tableur') || title.includes('tableur') || title.includes('feuille') || title.includes('excel')) return 'tableur';
    if(id.includes('logo') || title.includes('logo')) return 'logo';
    if(id.includes('systeme') || title.includes('système informatique') || title.includes('systeme informatique')) return 'systeme';
    if(id.includes('os') || title.includes('exploitation') || title.includes('bureau')) return 'os';
    return 'general';
  }
  function scenarioFor(unit){
    const kind = unitKind(unit);
    if(kind === 'tableur'){
      return "Dans une classe, le professeur veut préparer rapidement un petit bulletin des notes. Il demande à un élève d’ouvrir un tableur, de créer un tableau contenant les noms des élèves, leurs notes, la moyenne, le résultat final, puis de présenter les données avec une mise en forme claire et un graphique simple.";
    }
    if(kind === 'logo'){
      return "Pendant une séance d’informatique, le professeur demande aux élèves de réaliser un dessin géométrique avec LOGO pour décorer une affiche de classe. Le dessin doit utiliser des déplacements, des rotations, des couleurs, une répétition et une procédure afin d’éviter d’écrire plusieurs fois les mêmes instructions.";
    }
    if(kind === 'systeme'){
      return "Dans la salle informatique, un groupe d’élèves prépare un exposé. Ils utilisent un ordinateur, un clavier, une souris, un écran, une clé USB, une connexion Wi‑Fi et des logiciels. Le professeur leur demande d’expliquer comment ce poste forme un système informatique qui reçoit, traite, stocke et restitue des informations.";
    }
    if(kind === 'os'){
      return "Au début d’un TP, un élève ouvre sa session sur l’ordinateur de la salle. Il doit retrouver son dossier, ouvrir un logiciel, manipuler une fenêtre, enregistrer son travail au bon endroit, protéger sa session, puis arrêter correctement le poste à la fin de la séance.";
    }
    return `Dans une situation de classe, un élève doit utiliser les connaissances de l’unité « ${cleanTitle(unit && unit.title)} » pour expliquer les notions étudiées, résoudre une tâche simple et justifier ses choix.`;
  }
  function questionsFor(unit){
    const kind = unitKind(unit);
    if(kind === 'tableur') return [
      ['Quelles données l’élève doit-il saisir dans le tableau avant de commencer les calculs ?', 'Il doit saisir les noms des élèves, les notes et les titres des colonnes nécessaires comme moyenne, total ou résultat.'],
      ['Pourquoi faut-il utiliser une formule au lieu de calculer chaque moyenne à la main ?', 'Une formule permet de calculer automatiquement, rapidement et sans répéter le travail pour chaque élève.'],
      ['Par quel signe commence une formule dans un tableur ? Donne un exemple simple.', 'Une formule commence par le signe =. Exemple : =B2+C2 ou =MOYENNE(B2:D2).'],
      ['Comment utiliser la poignée de recopie dans cette situation ?', 'On écrit la formule dans la première cellule, puis on tire la poignée de recopie pour appliquer le même calcul aux autres lignes.'],
      ['Quelle fonction peut-on utiliser pour calculer la moyenne des notes ?', 'On peut utiliser la fonction MOYENNE, par exemple =MOYENNE(B2:D2).'],
      ['Comment rendre le tableau clair et lisible ?', 'On peut ajouter des bordures, mettre les titres en gras, ajuster la largeur des colonnes, aligner les données et utiliser une mise en forme simple.'],
      ['Quel graphique peut aider à comparer les moyennes des élèves ? Pourquoi ?', 'Un graphique en colonnes peut aider, car il permet de comparer visuellement les moyennes entre les élèves.'],
      ['Quelles étapes faut-il suivre avant de fermer le fichier ?', 'Il faut vérifier les calculs, enregistrer le classeur avec un nom clair, puis fermer correctement le fichier.']
    ];
    if(kind === 'logo') return [
      ['Que doit faire l’élève avant d’écrire les instructions LOGO ?', 'Il doit comprendre le dessin à réaliser, repérer les formes, choisir les déplacements, les rotations et l’ordre des instructions.'],
      ['À quoi servent les instructions AV et RE dans cette situation ?', 'AV sert à avancer la tortue et RE sert à la faire reculer. Elles permettent de tracer ou de déplacer la tortue selon le crayon.'],
      ['À quoi servent TD et TG dans le dessin ?', 'TD tourne la tortue vers la droite et TG la tourne vers la gauche avec un angle donné.'],
      ['Pourquoi peut-on utiliser REPETE dans ce dessin ?', 'REPETE permet d’exécuter plusieurs fois les mêmes instructions, par exemple pour tracer les côtés d’une figure régulière.'],
      ['Donne un exemple d’instruction LOGO permettant de dessiner un carré simple.', 'Exemple : REPETE 4 [AV 80 TD 90].'],
      ['À quoi sert une procédure dans LOGO ?', 'Une procédure permet de donner un nom à un ensemble d’instructions afin de les réutiliser facilement.'],
      ['Pourquoi faut-il organiser les instructions dans un ordre logique ?', 'L’ordre des instructions détermine le trajet de la tortue et donc la forme obtenue. Une erreur d’ordre peut changer le dessin.'],
      ['Comment l’élève peut-il corriger son dessin si la forme obtenue n’est pas correcte ?', 'Il doit observer le résultat, retrouver l’instruction responsable, modifier la distance, l’angle ou l’ordre, puis relancer le programme.']
    ];
    if(kind === 'systeme') return [
      ['Quels sont les éléments qui composent le système informatique dans cette situation ?', 'Le système informatique comprend l’utilisateur, le matériel comme l’ordinateur et les périphériques, ainsi que les logiciels.'],
      ['Classe le clavier, la souris, l’écran et la clé USB selon leur rôle.', 'Le clavier et la souris sont des périphériques d’entrée, l’écran est un périphérique de sortie, la clé USB est un périphérique de stockage.'],
      ['Quelle différence y a-t-il entre matériel et logiciel ?', 'Le matériel est la partie physique que l’on peut toucher. Le logiciel est un programme qui permet d’exécuter une tâche.'],
      ['Donne deux exemples d’informations que les élèves peuvent utiliser dans leur exposé.', 'Ils peuvent utiliser un texte, une image, un nombre, un son ou une vidéo.'],
      ['Explique le cycle de traitement de l’information dans cette situation.', 'Les élèves saisissent des données, l’ordinateur les traite avec un logiciel, puis il affiche, imprime ou sauvegarde le résultat.'],
      ['Pourquoi la connectivité Wi‑Fi ou USB est-elle utile ?', 'Elle permet de relier des appareils, de transférer des fichiers ou d’accéder à un réseau.'],
      ['Pourquoi le stockage est-il important dans le travail des élèves ?', 'Le stockage permet de conserver les fichiers et de les retrouver plus tard sans perdre le travail.'],
      ['Que doit faire l’élève pour utiliser correctement le poste informatique ?', 'Il doit identifier les composants, respecter leur rôle, utiliser les logiciels nécessaires et sauvegarder son travail.']
    ];
    if(kind === 'os') return [
      ['Quel est le rôle du système d’exploitation dans cette situation ?', 'Il permet d’ouvrir la session, de lancer les logiciels, de gérer les fenêtres, les fichiers, les dossiers et les périphériques.'],
      ['Que voit l’élève après l’ouverture de sa session ?', 'Il voit généralement le bureau avec les icônes, les dossiers, les raccourcis et la barre des tâches.'],
      ['Quelle différence y a-t-il entre un fichier et un dossier ?', 'Un fichier est un document numérique enregistré. Un dossier sert à ranger et organiser des fichiers.'],
      ['Pourquoi faut-il donner un nom clair au dossier de travail ?', 'Un nom clair permet de retrouver rapidement le travail et d’éviter la confusion avec d’autres fichiers.'],
      ['Cite trois actions possibles sur une fenêtre.', 'On peut réduire, agrandir, déplacer, fermer ou redimensionner une fenêtre.'],
      ['Pourquoi l’élève doit-il enregistrer son travail avant de quitter ?', 'L’enregistrement permet de conserver le travail et d’éviter sa perte.'],
      ['Quelle règle de sécurité doit être respectée pour la session ?', 'Le mot de passe doit rester secret et l’élève doit fermer sa session après utilisation.'],
      ['Quelles étapes faut-il suivre pour arrêter correctement l’ordinateur ?', 'Il faut enregistrer le travail, fermer les programmes, fermer la session si nécessaire, puis utiliser la commande Arrêter.']
    ];
    const lessons = lessonsOf(unit);
    const built = lessons.map((lesson, index) => {
      const title = cleanTitle(lesson && lesson.title || `Notion ${index + 1}`);
      return [`Explique la notion « ${title} » dans la situation proposée.`, `L’élève doit définir la notion « ${title} », donner son rôle et l’illustrer par un exemple simple.`];
    });
    return built.length ? built : [
      ['Quelles sont les notions principales de cette unité ?', 'Il faut citer les notions essentielles étudiées dans l’unité.'],
      ['Comment peut-on utiliser ces notions dans une situation réelle ?', 'Il faut relier chaque notion à une action ou à un exemple concret.'],
      ['Quelle est l’importance de cette unité pour l’élève ?', 'Elle permet de comprendre et d’utiliser correctement les outils informatiques étudiés.']
    ];
  }
  function knowledgeList(unit){
    const lessons = lessonsOf(unit);
    const items = lessons.map(l => cleanTitle(l && l.title)).filter(Boolean);
    if(items.length) return items;
    return questionsFor(unit).slice(0,5).map((q,i) => `Connaissance ${i+1}`);
  }
  function renderDirectIntegration(unit){
    const title = cleanTitle(unit && unit.title);
    const questions = questionsFor(unit);
    const knowledge = knowledgeList(unit).map(x => `<li>${h(x)}</li>`).join('');
    const qHtml = questions.map((q, i) => `<article class="v166-direct-question panel" data-v166-question="${i}">
      <h4>Question ${i + 1}</h4>
      <p>${h(q[0])}</p>
      <textarea class="v166-answer" rows="3" placeholder="Écris ta réponse ici..."></textarea>
      <div class="v166-correction" hidden><strong>Proposition de correction :</strong><p>${h(q[1])}</p></div>
    </article>`).join('');
    return `<div class="section-head v166-integration-head">
      <div>
        <h2>Situation d’intégration — ${h(title)}</h2>
        <p>Une situation réelle suivie de questions directes qui mobilisent toutes les connaissances de l’unité.</p>
      </div>
      <span class="pill">Situation réelle</span>
    </div>
    <section class="v166-integration" data-v166-integration="1">
      <div class="panel v166-real-scenario">
        <h3>1) Situation réelle</h3>
        <p>${h(scenarioFor(unit))}</p>
      </div>
      <div class="panel v166-knowledge">
        <h3>2) Connaissances à utiliser</h3>
        <ul class="task-list knowledge-list">${knowledge}</ul>
      </div>
      <div class="v166-question-zone">
        <h3>3) Questions directes</h3>
        <p class="subtle">Réponds avec tes propres phrases. Les questions ne sont pas des QCM.</p>
        ${qHtml}
      </div>
      <div class="v166-submit-row">
        <button type="button" class="btn" data-v166-show-correction="1">Afficher les propositions de correction</button>
        <div id="integrationResult" class="v166-integration-result"></div>
      </div>
    </section>`;
  }

  function addStyle(){
    if(document.getElementById('v166-direct-integration-style')) return;
    const style = document.createElement('style');
    style.id = 'v166-direct-integration-style';
    style.textContent = `
      .v166-integration{display:grid;gap:18px;}
      .v166-real-scenario{border-inline-start:6px solid rgba(99,102,241,.45);}
      .v166-real-scenario p{font-size:1.02rem;line-height:1.75;}
      .v166-question-zone{display:grid;gap:14px;}
      .v166-direct-question h4{margin:0 0 8px;}
      .v166-direct-question p{line-height:1.65;}
      .v166-answer{width:100%;box-sizing:border-box;border:1px solid rgba(30,41,59,.18);border-radius:16px;padding:12px 14px;font:inherit;line-height:1.5;background:#fff;resize:vertical;min-height:86px;}
      .v166-correction{margin-top:12px;padding:12px 14px;border-radius:16px;background:rgba(34,197,94,.10);border:1px solid rgba(34,197,94,.24);}
      .v166-correction p{margin:.35rem 0 0;}
      .v166-submit-row{display:flex;flex-wrap:wrap;gap:12px;align-items:center;}
      .v166-integration-result{font-weight:700;}
    `;
    document.head.appendChild(style);
  }

  if(typeof menu === 'function'){
    const oldMenu = menu;
    menu = function(unit){
      let html = oldMenu.apply(this, arguments);
      if(typeof html !== 'string') return html;
      return html
        .replace(/Situation de production/g, 'Situation d’intégration')
        .replace(/Questions de synthèse/g, 'Situation réelle + questions directes')
        .replace(/Production \+ questions fermées/g, 'Situation réelle + questions directes');
    };
  }

  renderIntegration = function(unit){
    addStyle();
    return renderDirectIntegration(unit);
  };

  document.addEventListener('click', function(e){
    const btn = e.target && e.target.closest ? e.target.closest('[data-v166-show-correction]') : null;
    if(!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const scope = btn.closest('[data-v166-integration]') || document;
    const answers = [...scope.querySelectorAll('.v166-answer')];
    const answered = answers.filter(a => String(a.value || '').trim().length > 0).length;
    scope.querySelectorAll('.v166-correction').forEach(c => c.hidden = false);
    const box = scope.querySelector('#integrationResult');
    if(box){
      box.innerHTML = `<div class="result-box v166-result-box">Réponses rédigées : <strong>${answered}/${answers.length}</strong>. Compare tes réponses avec les propositions de correction.</div>`;
    }
  }, true);

  if(typeof renderLogin === 'function') renderLogin();
})();


/* =========================================================
   V167 — Situation d’intégration = situation réelle + questions pratiques
   Demande : remplacer les questions trop théoriques par des questions qui peuvent être pratiques.
   Pas de QCM : l’élève réalise une tâche, écrit la formule/commande/résultat ou décrit l’action effectuée.
========================================================= */
(function(){
  function h(value){
    if(typeof esc === 'function') return esc(value ?? '');
    return String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function cleanTitle(title){ return String(title || '').replace(/^Unité\s*\d+\s*:\s*/i,'').trim(); }
  function lessonsOf(unit){ return unit && Array.isArray(unit.lessons) ? unit.lessons : []; }
  function unitKind(unit){
    const id = String(unit && unit.id || '').toLowerCase();
    const title = String(unit && unit.title || '').toLowerCase();
    if(id.includes('tableur') || title.includes('tableur') || title.includes('feuille') || title.includes('excel') || title.includes('classeur')) return 'tableur';
    if(id.includes('logo') || title.includes('logo') || title.includes('tortue')) return 'logo';
    if(id.includes('systeme') || title.includes('système informatique') || title.includes('systeme informatique') || title.includes('informatique')) return 'systeme';
    if(id.includes('os') || title.includes('exploitation') || title.includes('bureau') || title.includes('fichier') || title.includes('dossier')) return 'os';
    return 'general';
  }
  function scenarioFor(unit){
    const kind = unitKind(unit);
    if(kind === 'tableur'){
      return "Le professeur veut préparer un petit fichier de suivi des notes de 5 élèves. Tu dois créer un classeur, saisir les données, utiliser des formules, recopier les calculs, mettre en forme le tableau et produire un graphique simple.";
    }
    if(kind === 'logo'){
      return "La classe prépare une affiche numérique. Tu dois utiliser LOGO pour produire un dessin géométrique propre : tracer une figure, utiliser les déplacements et rotations, appliquer une répétition, puis créer une procédure réutilisable.";
    }
    if(kind === 'systeme'){
      return "Dans la salle informatique, tu dois vérifier un poste avant une activité : reconnaître les composants, classer les périphériques, expliquer le trajet d’une information et préparer le poste pour travailler correctement.";
    }
    if(kind === 'os'){
      return "Au début d’un TP, tu ouvres ta session. Tu dois organiser ton espace de travail : créer un dossier, manipuler une fenêtre, enregistrer un fichier, retrouver ton travail et fermer le poste correctement.";
    }
    return `Dans une activité pratique, tu dois utiliser les connaissances de l’unité « ${cleanTitle(unit && unit.title)} » pour réaliser une tâche concrète et expliquer brièvement ce que tu as fait.`;
  }
  function practicalQuestionsFor(unit){
    const kind = unitKind(unit);
    if(kind === 'tableur') return [
      ['Crée un nouveau classeur et renomme la première feuille : « Notes classe ».', 'La feuille doit porter un nom clair : Notes classe.'],
      ['Saisis un tableau avec les colonnes : Élève, Note 1, Note 2, Note 3, Moyenne, Résultat.', 'Le tableau contient des titres de colonnes et au moins 5 lignes d’élèves.'],
      ['Dans la colonne Moyenne, écris la formule qui calcule la moyenne du premier élève.', 'Exemple attendu : =MOYENNE(B2:D2) ou formule équivalente selon les cellules.'],
      ['Utilise la poignée de recopie pour appliquer la formule de moyenne aux autres élèves.', 'Les moyennes des autres élèves doivent être calculées automatiquement.'],
      ['Dans la colonne Résultat, écris une formule SI : si la moyenne est supérieure ou égale à 10, afficher « Admis », sinon « Non admis ».', 'Exemple attendu : =SI(E2>=10;"Admis";"Non admis") selon la langue du tableur.'],
      ['Mets en forme le tableau : titres en gras, bordures, alignement et largeur des colonnes.', 'Le tableau doit être lisible et bien organisé.'],
      ['Insère un graphique en colonnes pour comparer les moyennes des élèves.', 'Le graphique doit afficher les noms des élèves et leurs moyennes.'],
      ['Enregistre le fichier avec un nom clair.', 'Exemple : Notes_classe.xlsx.']
    ];
    if(kind === 'logo') return [
      ['Efface l’écran et place la tortue au point de départ.', 'L’espace de dessin est prêt avant de commencer.'],
      ['Écris une instruction pour faire avancer la tortue de 80 pas.', 'Exemple attendu : AV 80.'],
      ['Écris deux instructions pour avancer puis tourner à droite de 90 degrés.', 'Exemple attendu : AV 80 TD 90.'],
      ['Trace un carré en utilisant une répétition.', 'Exemple attendu : REPETE 4 [AV 80 TD 90].'],
      ['Change la couleur ou l’épaisseur du crayon avant de tracer une nouvelle figure.', 'Le dessin doit montrer une modification visible du crayon.'],
      ['Crée une procédure appelée CARRE qui trace un carré.', 'La procédure contient les instructions nécessaires pour dessiner le carré.'],
      ['Utilise la procédure CARRE au moins deux fois pour répéter le dessin sans réécrire toutes les instructions.', 'L’élève appelle la procédure pour réutiliser le même dessin.'],
      ['Corrige une erreur volontaire : change un angle incorrect pour obtenir une figure correcte.', 'L’élève observe l’erreur, modifie l’angle ou la distance, puis relance le programme.']
    ];
    if(kind === 'systeme') return [
      ['Observe le poste devant toi et écris le nom de 4 composants matériels.', 'Exemples : unité centrale, écran, clavier, souris, imprimante, haut-parleurs.'],
      ['Classe ces éléments dans un tableau : entrée, sortie, stockage.', 'Clavier/souris : entrée ; écran/imprimante : sortie ; clé USB/disque : stockage.'],
      ['Branche ou repère une clé USB, puis explique son rôle.', 'La clé USB sert à stocker et transporter des fichiers.'],
      ['Ouvre un logiciel simple et saisis une phrase courte.', 'L’élève utilise un logiciel pour introduire une donnée.'],
      ['Explique, à partir de cette phrase, les étapes : entrée → traitement → sortie → stockage.', 'Entrée : saisie ; traitement : logiciel/ordinateur ; sortie : affichage ; stockage : enregistrement.'],
      ['Donne un exemple de logiciel utilisé dans cette activité et précise son rôle.', 'Exemple : traitement de texte pour écrire un texte, navigateur pour rechercher une information.'],
      ['Indique deux règles pour utiliser correctement le poste informatique.', 'Exemples : ne pas débrancher sans autorisation, sauvegarder le travail, utiliser le matériel avec soin.'],
      ['Prépare une petite consigne destinée à un camarade pour utiliser le poste correctement.', 'La consigne doit être claire, courte et applicable en salle informatique.']
    ];
    if(kind === 'os') return [
      ['Ouvre ta session et repère les éléments du bureau : icônes, barre des tâches, fenêtres.', 'L’élève identifie les éléments principaux de l’espace de travail.'],
      ['Crée un dossier sur le bureau ou dans Documents avec le nom : TP_Unité.', 'Le dossier TP_Unité doit être créé au bon emplacement.'],
      ['Ouvre une application, puis réduis, agrandis et ferme sa fenêtre.', 'L’élève manipule correctement une fenêtre.'],
      ['Crée ou enregistre un fichier dans le dossier TP_Unité.', 'Le fichier doit être enregistré dans le dossier demandé.'],
      ['Renomme le fichier avec un nom clair.', 'Exemple : travail_informatique ou exercice_unite.'],
      ['Déplace ou copie le fichier dans un autre dossier, puis retrouve-le.', 'L’élève sait organiser et retrouver un fichier.'],
      ['Explique pourquoi il ne faut pas supprimer un fichier sans vérifier.', 'Pour éviter de perdre un travail important ou un fichier utile.'],
      ['Ferme les programmes et arrête correctement l’ordinateur.', 'L’élève enregistre, ferme les applications puis utilise la commande Arrêter.']
    ];
    const lessons = lessonsOf(unit);
    const fromLessons = lessons.slice(0, 8).map((lesson, index) => {
      const title = cleanTitle(lesson && lesson.title || `Notion ${index + 1}`);
      return [`Réalise une petite tâche pratique liée à la notion « ${title} », puis écris ce que tu as fait.`, `La production doit montrer que l’élève sait utiliser la notion « ${title} » dans une action concrète.`];
    });
    return fromLessons.length ? fromLessons : [
      ['Réalise une action pratique liée à la première notion de l’unité.', 'L’élève applique la notion dans une tâche simple.'],
      ['Écris le résultat obtenu après cette action.', 'Le résultat doit être clair et vérifiable.'],
      ['Explique brièvement la méthode utilisée.', 'L’explication doit montrer les étapes suivies.']
    ];
  }
  function knowledgeList(unit){
    const lessons = lessonsOf(unit).map(l => cleanTitle(l && l.title)).filter(Boolean);
    if(lessons.length) return lessons;
    return practicalQuestionsFor(unit).slice(0,5).map((_,i) => `Compétence pratique ${i+1}`);
  }
  function renderPracticalIntegration(unit){
    const title = cleanTitle(unit && unit.title);
    const questions = practicalQuestionsFor(unit);
    const knowledge = knowledgeList(unit).map(x => `<li>${h(x)}</li>`).join('');
    const qHtml = questions.map((q, i) => `<article class="v167-practical-question panel" data-v167-question="${i}">
      <div class="v167-question-top"><h4>Question pratique ${i + 1}</h4><span class="pill">À réaliser</span></div>
      <p>${h(q[0])}</p>
      <textarea class="v167-answer" rows="3" placeholder="Écris ici ce que tu as réalisé, la formule utilisée, la commande écrite ou le résultat obtenu..."></textarea>
      <div class="v167-expected" hidden><strong>Production attendue :</strong><p>${h(q[1])}</p></div>
    </article>`).join('');
    return `<div class="section-head v167-integration-head">
      <div>
        <h2>Situation d’intégration — ${h(title)}</h2>
        <p>Une situation réelle avec des questions pratiques à réaliser, sans QCM.</p>
      </div>
      <span class="pill">Questions pratiques</span>
    </div>
    <section class="v167-integration" data-v167-integration="1">
      <div class="panel v167-real-scenario">
        <h3>1) Situation réelle</h3>
        <p>${h(scenarioFor(unit))}</p>
      </div>
      <div class="panel v167-knowledge">
        <h3>2) Connaissances de l’unité à mobiliser</h3>
        <ul class="task-list knowledge-list">${knowledge}</ul>
      </div>
      <div class="v167-question-zone">
        <h3>3) Questions pratiques</h3>
        <p class="subtle">Chaque question demande une action concrète. L’élève peut répondre par une formule, une commande, une phrase courte ou le résultat obtenu.</p>
        ${qHtml}
      </div>
      <div class="v167-submit-row">
        <button type="button" class="btn" data-v167-show-expected="1">Afficher les productions attendues</button>
        <div id="integrationResult" class="v167-integration-result"></div>
      </div>
    </section>`;
  }
  function addStyle(){
    if(document.getElementById('v167-practical-integration-style')) return;
    const style = document.createElement('style');
    style.id = 'v167-practical-integration-style';
    style.textContent = `
      .v167-integration{display:grid;gap:18px;}
      .v167-real-scenario{border-inline-start:6px solid rgba(59,130,246,.48);}
      .v167-real-scenario p{font-size:1.02rem;line-height:1.75;}
      .v167-question-zone{display:grid;gap:14px;}
      .v167-practical-question{position:relative;}
      .v167-question-top{display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap;margin-bottom:8px;}
      .v167-question-top h4{margin:0;}
      .v167-practical-question p{line-height:1.65;}
      .v167-answer{width:100%;box-sizing:border-box;border:1px solid rgba(30,41,59,.18);border-radius:16px;padding:12px 14px;font:inherit;line-height:1.5;background:#fff;resize:vertical;min-height:86px;}
      .v167-expected{margin-top:12px;padding:12px 14px;border-radius:16px;background:rgba(14,165,233,.10);border:1px solid rgba(14,165,233,.24);}
      .v167-expected p{margin:.35rem 0 0;}
      .v167-submit-row{display:flex;flex-wrap:wrap;gap:12px;align-items:center;}
      .v167-integration-result{font-weight:700;}
    `;
    document.head.appendChild(style);
  }
  if(typeof menu === 'function'){
    const oldMenu = menu;
    menu = function(unit){
      let html = oldMenu.apply(this, arguments);
      if(typeof html !== 'string') return html;
      return html
        .replace(/Situation réelle \+ questions directes/g, 'Situation réelle + questions pratiques')
        .replace(/Questions de synthèse/g, 'Situation réelle + questions pratiques')
        .replace(/Situation de production/g, 'Situation d’intégration');
    };
  }
  renderIntegration = function(unit){
    addStyle();
    return renderPracticalIntegration(unit);
  };
  document.addEventListener('click', function(e){
    const btn = e.target && e.target.closest ? e.target.closest('[data-v167-show-expected]') : null;
    if(!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const scope = btn.closest('[data-v167-integration]') || document;
    const answers = [...scope.querySelectorAll('.v167-answer')];
    const answered = answers.filter(a => String(a.value || '').trim().length > 0).length;
    scope.querySelectorAll('.v167-expected').forEach(c => c.hidden = false);
    const box = scope.querySelector('#integrationResult');
    if(box){
      box.innerHTML = `<div class="result-box v167-result-box">Questions traitées : <strong>${answered}/${answers.length}</strong>. Compare la réalisation avec les productions attendues.</div>`;
    }
  }, true);
  if(typeof renderLogin === 'function') renderLogin();
})();

/* =========================================================
   V168 — Situation d’intégration sans espace de réponse
   Demande : annuler la zone où l’élève écrit ses réponses.
   Garder seulement la situation réelle, les questions pratiques et les productions attendues.
========================================================= */
(function(){
  function h(value){
    if(typeof esc === 'function') return esc(value ?? '');
    return String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function cleanTitle(title){ return String(title || '').replace(/^Unité\s*\d+\s*:\s*/i,'').trim(); }
  function lessonsOf(unit){ return unit && Array.isArray(unit.lessons) ? unit.lessons : []; }
  function kindOf(unit){
    const id = String(unit && unit.id || '').toLowerCase();
    const title = String(unit && unit.title || '').toLowerCase();
    if(id.includes('tableur') || title.includes('tableur') || title.includes('feuille') || title.includes('excel')) return 'tableur';
    if(id.includes('logo') || title.includes('logo')) return 'logo';
    if(id.includes('systeme') || title.includes('système informatique') || title.includes('systeme informatique')) return 'systeme';
    if(id.includes('os') || title.includes('exploitation') || title.includes('bureau')) return 'os';
    return 'general';
  }
  function scenario(unit){
    const kind = kindOf(unit);
    if(kind === 'tableur') return "Dans une classe, le professeur veut préparer rapidement un petit bulletin des notes. Il demande à un élève d’ouvrir un tableur, de créer un tableau contenant les noms des élèves, leurs notes, la moyenne, le résultat final, puis de présenter les données avec une mise en forme claire et un graphique simple.";
    if(kind === 'logo') return "Pendant une séance d’informatique, le professeur demande aux élèves de réaliser un dessin géométrique avec LOGO pour décorer une affiche de classe. Le dessin doit utiliser des déplacements, des rotations, des couleurs, une répétition et une procédure afin d’éviter d’écrire plusieurs fois les mêmes instructions.";
    if(kind === 'systeme') return "Dans la salle informatique, un groupe d’élèves prépare un exposé. Ils utilisent un ordinateur, un clavier, une souris, un écran, une clé USB, une connexion Wi‑Fi et des logiciels. Le professeur leur demande d’expliquer comment ce poste forme un système informatique qui reçoit, traite, stocke et restitue des informations.";
    if(kind === 'os') return "Au début d’un TP, un élève ouvre sa session sur l’ordinateur de la salle. Il doit retrouver son dossier, ouvrir un logiciel, manipuler une fenêtre, enregistrer son travail au bon endroit, protéger sa session, puis arrêter correctement le poste à la fin de la séance.";
    return `Dans une situation de classe, l’élève doit utiliser les connaissances de l’unité « ${cleanTitle(unit && unit.title)} » pour réaliser une tâche pratique et justifier ses choix oralement ou sur cahier.`;
  }
  function practicalQuestions(unit){
    const kind = kindOf(unit);
    if(kind === 'tableur') return [
      ['Crée un nouveau classeur tableur et nomme la feuille « Notes ».', 'Le fichier contient une feuille nommée clairement « Notes ».'],
      ['Construis un tableau avec les colonnes : Nom, Note 1, Note 2, Note 3, Moyenne, Résultat.', 'Le tableau est complet avec des titres de colonnes clairs.'],
      ['Saisis les données de 4 élèves dans le tableau.', 'Les noms et les notes sont saisis dans les bonnes cellules.'],
      ['Écris une formule pour calculer la moyenne du premier élève.', 'Exemple attendu : =MOYENNE(B2:D2).'],
      ['Recopie la formule de moyenne pour les autres élèves.', 'La même formule est appliquée aux autres lignes avec la poignée de recopie.'],
      ['Ajoute une formule de résultat : si la moyenne est supérieure ou égale à 10, afficher « Admis », sinon « Non admis ».', 'Exemple attendu : =SI(E2>=10;"Admis";"Non admis") selon la langue du tableur.'],
      ['Mets en forme le tableau : titres en gras, bordures, alignement et largeur des colonnes.', 'Le tableau doit être lisible et bien organisé.'],
      ['Insère un graphique en colonnes pour comparer les moyennes des élèves.', 'Le graphique doit afficher les noms des élèves et leurs moyennes.'],
      ['Enregistre le fichier avec un nom clair.', 'Exemple : Notes_classe.xlsx.']
    ];
    if(kind === 'logo') return [
      ['Efface l’écran et place la tortue au point de départ.', 'L’espace de dessin est prêt avant de commencer.'],
      ['Écris une instruction pour faire avancer la tortue de 80 pas.', 'Exemple attendu : AV 80.'],
      ['Écris deux instructions pour avancer puis tourner à droite de 90 degrés.', 'Exemple attendu : AV 80 TD 90.'],
      ['Trace un carré en utilisant une répétition.', 'Exemple attendu : REPETE 4 [AV 80 TD 90].'],
      ['Change la couleur ou l’épaisseur du crayon avant de tracer une nouvelle figure.', 'Le dessin doit montrer une modification visible du crayon.'],
      ['Crée une procédure appelée CARRE qui trace un carré.', 'La procédure contient les instructions nécessaires pour dessiner le carré.'],
      ['Utilise la procédure CARRE au moins deux fois pour répéter le dessin sans réécrire toutes les instructions.', 'L’élève appelle la procédure pour réutiliser le même dessin.'],
      ['Corrige une erreur volontaire : change un angle incorrect pour obtenir une figure correcte.', 'L’élève observe l’erreur, modifie l’angle ou la distance, puis relance le programme.']
    ];
    if(kind === 'systeme') return [
      ['Observe le poste devant toi et cite 4 composants matériels.', 'Exemples : unité centrale, écran, clavier, souris, imprimante, haut-parleurs.'],
      ['Classe ces éléments dans un tableau : entrée, sortie, stockage.', 'Clavier/souris : entrée ; écran/imprimante : sortie ; clé USB/disque : stockage.'],
      ['Branche ou repère une clé USB, puis explique son rôle oralement ou sur cahier.', 'La clé USB sert à stocker et transporter des fichiers.'],
      ['Ouvre un logiciel simple et saisis une phrase courte.', 'L’élève utilise un logiciel pour introduire une donnée.'],
      ['Explique, à partir de cette phrase, les étapes : entrée → traitement → sortie → stockage.', 'Entrée : saisie ; traitement : logiciel/ordinateur ; sortie : affichage ; stockage : enregistrement.'],
      ['Donne un exemple de logiciel utilisé dans cette activité et précise son rôle.', 'Exemple : traitement de texte pour écrire un texte, navigateur pour rechercher une information.'],
      ['Indique deux règles pour utiliser correctement le poste informatique.', 'Exemples : ne pas débrancher sans autorisation, sauvegarder le travail, utiliser le matériel avec soin.'],
      ['Prépare une petite consigne destinée à un camarade pour utiliser le poste correctement.', 'La consigne doit être claire, courte et applicable en salle informatique.']
    ];
    if(kind === 'os') return [
      ['Ouvre ta session et repère les éléments du bureau : icônes, barre des tâches, fenêtres.', 'L’élève identifie les éléments principaux de l’espace de travail.'],
      ['Crée un dossier sur le bureau ou dans Documents avec le nom : TP_Unité.', 'Le dossier TP_Unité doit être créé au bon emplacement.'],
      ['Ouvre une application, puis réduis, agrandis et ferme sa fenêtre.', 'L’élève manipule correctement une fenêtre.'],
      ['Crée ou enregistre un fichier dans le dossier TP_Unité.', 'Le fichier doit être enregistré dans le dossier demandé.'],
      ['Renomme le fichier avec un nom clair.', 'Exemple : travail_informatique ou exercice_unite.'],
      ['Déplace ou copie le fichier dans un autre dossier, puis retrouve-le.', 'L’élève sait organiser et retrouver un fichier.'],
      ['Explique pourquoi il ne faut pas supprimer un fichier sans vérifier.', 'Pour éviter de perdre un travail important ou un fichier utile.'],
      ['Ferme les programmes et arrête correctement l’ordinateur.', 'L’élève enregistre, ferme les applications puis utilise la commande Arrêter.']
    ];
    const lessons = lessonsOf(unit).slice(0, 8);
    if(lessons.length){
      return lessons.map((lesson, index) => {
        const title = cleanTitle(lesson && lesson.title || `Notion ${index + 1}`);
        return [`Réalise une petite tâche pratique liée à la notion « ${title} ».`, `La production doit montrer que l’élève sait utiliser la notion « ${title} » dans une action concrète.`];
      });
    }
    return [
      ['Réalise une action pratique liée à la première notion de l’unité.', 'L’élève applique la notion dans une tâche simple.'],
      ['Présente le résultat obtenu au professeur.', 'Le résultat doit être clair et vérifiable.'],
      ['Explique brièvement la méthode utilisée.', 'L’explication doit montrer les étapes suivies.']
    ];
  }
  function knowledge(unit){
    const lessons = lessonsOf(unit).map(l => cleanTitle(l && l.title)).filter(Boolean);
    if(lessons.length) return lessons;
    return practicalQuestions(unit).slice(0,5).map((_, i) => `Compétence pratique ${i + 1}`);
  }
  function addStyle(){
    if(document.getElementById('v168-no-answer-integration-style')) return;
    const style = document.createElement('style');
    style.id = 'v168-no-answer-integration-style';
    style.textContent = `
      .v168-integration{display:grid;gap:18px;}
      .v168-real-scenario{border-inline-start:6px solid rgba(59,130,246,.48);}
      .v168-real-scenario p{font-size:1.02rem;line-height:1.75;}
      .v168-question-zone{display:grid;gap:14px;}
      .v168-practical-question{position:relative;}
      .v168-question-top{display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap;margin-bottom:8px;}
      .v168-question-top h4{margin:0;}
      .v168-practical-question p{line-height:1.65;margin-bottom:0;}
      .v168-expected{margin-top:12px;padding:12px 14px;border-radius:16px;background:rgba(14,165,233,.10);border:1px solid rgba(14,165,233,.24);}
      .v168-expected p{margin:.35rem 0 0;}
      .v168-submit-row{display:flex;flex-wrap:wrap;gap:12px;align-items:center;}
      .v168-integration-result{font-weight:700;}
    `;
    document.head.appendChild(style);
  }
  if(typeof menu === 'function'){
    const oldMenu = menu;
    menu = function(unit){
      let html = oldMenu.apply(this, arguments);
      if(typeof html !== 'string') return html;
      return html
        .replace(/Situation réelle \+ questions pratiques/g, 'Situation réelle + questions pratiques')
        .replace(/Situation réelle \+ questions directes/g, 'Situation réelle + questions pratiques')
        .replace(/Questions de synthèse/g, 'Situation réelle + questions pratiques')
        .replace(/Situation de production/g, 'Situation d’intégration');
    };
  }
  renderIntegration = function(unit){
    addStyle();
    const title = cleanTitle(unit && unit.title);
    const qHtml = practicalQuestions(unit).map((q, i) => `<article class="v168-practical-question panel" data-v168-question="${i}">
      <div class="v168-question-top"><h4>Question pratique ${i + 1}</h4><span class="pill">À réaliser</span></div>
      <p>${h(q[0])}</p>
      <div class="v168-expected" hidden><strong>Production attendue :</strong><p>${h(q[1])}</p></div>
    </article>`).join('');
    const knowledgeHtml = knowledge(unit).map(x => `<li>${h(x)}</li>`).join('');
    return `<div class="section-head v168-integration-head">
      <div>
        <h2>Situation d’intégration — ${h(title)}</h2>
        <p>Une situation réelle avec des questions pratiques à réaliser, sans espace de réponse dans l’application.</p>
      </div>
      <span class="pill">Questions pratiques</span>
    </div>
    <section class="v168-integration" data-v168-integration="1">
      <div class="panel v168-real-scenario">
        <h3>1) Situation réelle</h3>
        <p>${h(scenario(unit))}</p>
      </div>
      <div class="panel v168-knowledge">
        <h3>2) Connaissances de l’unité à mobiliser</h3>
        <ul class="task-list knowledge-list">${knowledgeHtml}</ul>
      </div>
      <div class="v168-question-zone">
        <h3>3) Questions pratiques</h3>
        <p class="subtle">L’élève réalise les tâches sur l’ordinateur, oralement ou sur cahier. Il n’écrit pas sa réponse dans l’application.</p>
        ${qHtml}
      </div>
      <div class="v168-submit-row">
        <button type="button" class="btn" data-v168-show-expected="1">Afficher les productions attendues</button>
        <div id="integrationResult" class="v168-integration-result"></div>
      </div>
    </section>`;
  };
  document.addEventListener('click', function(e){
    const btn = e.target && e.target.closest ? e.target.closest('[data-v168-show-expected]') : null;
    if(!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const scope = btn.closest('[data-v168-integration]') || document;
    scope.querySelectorAll('.v168-expected').forEach(c => c.hidden = false);
    const box = scope.querySelector('#integrationResult');
    if(box){
      box.innerHTML = `<div class="result-box v168-result-box">Les productions attendues sont affichées pour guider la correction.</div>`;
    }
  }, true);
  if(typeof renderLogin === 'function') renderLogin();
})();
