export const mockAPISchedule = {
  "slots": [{
      "roomId": "a_hall",
      "notAllocated": false,
      "fromTimeMillis": 1524031200000,
      "break": {
          "id": "reg",
          "nameEN": "Registration",
          "nameFR": "Accueil",
          "room": {
              "id": "a_hall",
              "name": "Exhibition floor",
              "capacity": 2300,
              "setup": "special",
              "recorded": ""
          }
      },
      "roomSetup": "special",
      "talk": null,
      "fromTime": "08:00",
      "toTimeMillis": 1524036600000,
      "toTime": "09:30",
      "roomCapacity": 2300,
      "roomName": "Exhibition floor",
      "slotId": "reg_wednesday_18_8h0_9h30",
      "day": "wednesday"
  }, {
      "roomId": "b_amphi",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "java",
          "talkType": "University",
          "track": "Java, JVM, Javas SE/EE",
          "summaryAsHtml": "<p>Joshua Block just gifted us with the 3rd edition of \"Effective Java\", but almost 10 years have been past since the last edition. Now we have a whole generation of Java developers that could benefit from this knowledge - but lost the past wave. It's about time to revisit all of this wonderful content, and upgrade your skills to the latest versions of the Java platform. Join us on this deep dive session to check what is the updated Effective Java, and even add some more tips not included in the book!</p>\n",
          "id": "EUM-5192",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/d1e90191f15bcee27345f62c3942734d5efc4df1",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Edson Yanaga"
              },
              "name": "Edson Yanaga"
          }],
          "title": "Revisiting Effective Java in 2018",
          "lang": "en",
          "summary": "Joshua Block just gifted us with the 3rd edition of \"Effective Java\", but almost 10 years have been past since the last edition. Now we have a whole generation of Java developers that could benefit from this knowledge - but lost the past wave. It's about time to revisit all of this wonderful content, and upgrade your skills to the latest versions of the Java platform. Join us on this deep dive session to check what is the updated Effective Java, and even add some more tips not included in the book!"
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 826,
      "roomName": "Amphi Bleu",
      "slotId": "uni_b_amphi_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "c_maillot",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "bigd",
          "talkType": "University",
          "track": "Big Data, Machine Learning, IA & Analytics",
          "summaryAsHtml": "<p>La suite elastic (Elasticsearch, Logstash, Kibana, Beats, ...) est connue et reconnue lorsque nous désirons mettre en place soit une solution de recherche sur notre site d'e-commerce ou encore une plateforme centralisée de gestion des logs.</p>\n<p>Si vous n'avez jamais eu l'occasion de jouer avec ou de la mettre en place dans votre entreprise, cette université est pour vous. Nous allons mettre place, en partant from scratch, une plateforme complète de gestion des logs de vos applications et de vos serveurs : de  la récupération des logs, à sa visualisation en passant par sa transformation et son indexation...</p>\n<p>Nous en profiterons également pour aborder des produits moins connus comme X-PACK, Elastic APM ou encore Elastic Cloud.</p>\n",
          "id": "YGV-2073",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/4a822ea73a5cb708b3eb656ce77b48748c5cc7c7",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "David Pilato"
              },
              "name": "David Pilato"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/9a0499cb7699c4d6f32a5d248e814f423a7d611b",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Emmanuel DEMEY"
              },
              "name": "Emmanuel DEMEY"
          }],
          "title": "Mise en place d'une plateforme centralisée de gestion des logs avec la suite elastic",
          "lang": "fr",
          "summary": "La suite elastic (Elasticsearch, Logstash, Kibana, Beats, ...) est connue et reconnue lorsque nous désirons mettre en place soit une solution de recherche sur notre site d'e-commerce ou encore une plateforme centralisée de gestion des logs. \r\n\r\nSi vous n'avez jamais eu l'occasion de jouer avec ou de la mettre en place dans votre entreprise, cette université est pour vous. Nous allons mettre place, en partant from scratch, une plateforme complète de gestion des logs de vos applications et de vos serveurs : de  la récupération des logs, à sa visualisation en passant par sa transformation et son indexation...\r\n\r\nNous en profiterons également pour aborder des produits moins connus comme X-PACK, Elastic APM ou encore Elastic Cloud."
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 380,
      "roomName": "Maillot",
      "slotId": "uni_c_maillot_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "f_neu251",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "cldops",
          "talkType": "University",
          "track": "Cloud, Container et Scalabilité",
          "summaryAsHtml": "<p>Dealing with real-time, in-memory, streaming data is a unique challenge and with the advent of the smartphone and IoT (trillions of internet connected devices), we are witnessing an exponential growth in data at scale. Learning how to implement architectures that handle real-time streaming data, where data is flowing constantly, and combine it with analysis and instant search capabilities is key for developing robust and scalable services and applications. In this university session, we will look at how to implement an architecture like this, using reactive open source frameworks. An architecture based on the Swiss rail transport system will be used throughout the university.</p>\n<p>Technologies: Java (attendees must be comfortable with Java 8), Infinispan, Eclipse Vert.x, Apache Kafka, OpenShift.</p>\n",
          "id": "XSS-6450",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/e452d5162fbc8c0c94995c26312dec1e8fae9fc8",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Clement Escoffier"
              },
              "name": "Clement Escoffier"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/ba82dfb0cd56f32a8507cbb7c0a9677dabb4ce71",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Galder Zamarreño"
              },
              "name": "Galder Zamarreño"
          }],
          "title": "Introduction to Data Streaming",
          "lang": "en",
          "summary": "Dealing with real-time, in-memory, streaming data is a unique challenge and with the advent of the smartphone and IoT (trillions of internet connected devices), we are witnessing an exponential growth in data at scale. Learning how to implement architectures that handle real-time streaming data, where data is flowing constantly, and combine it with analysis and instant search capabilities is key for developing robust and scalable services and applications. In this university session, we will look at how to implement an architecture like this, using reactive open source frameworks. An architecture based on the Swiss rail transport system will be used throughout the university. \r\n\r\nTechnologies: Java (attendees must be comfortable with Java 8), Infinispan, Eclipse Vert.x, Apache Kafka, OpenShift."
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 220,
      "roomName": "Neuilly 251",
      "slotId": "uni_f_neu251_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "d_par241",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "archisec",
          "talkType": "University",
          "track": "Architecture, Performance et Securité",
          "summaryAsHtml": "<p>Keycloak est une solution Open Source qui permet d'externaliser facilement la gestion de l'identité de vos projets. Ceci inclue l'authentification,la mise en place de la couche d'autorisation.</p>\n<p>Le projet a gagné énormément en popularité ces 2 dernières années car il réponds réellement à un besoin.</p>\n<p>Keycloak permet de sécuriser des applications frontend, des applications backend de nature différente (Java EE, Spring Boot, NodeJS), il supporte différents protocoles comme OpenID Connect, SAML2 ... Bref la matrice des possibilités est importante et ce format université permettra tranquillement de traiter de manière concrète des cas d'usages principaux.</p>\n",
          "id": "RIT-5836",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/1454e2d0a6c2fa871454dab3dbf66f5e16b61980",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Sebastien Blanc"
              },
              "name": "Sebastien Blanc"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/01cfcf21ef199496b8940e6e853720ab00f981f9",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Lilian BENOIT"
              },
              "name": "Lilian BENOIT"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/38ca0fc0e4f713a192fc0ae89e8e9ebea0b54079",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Thomas Recloux"
              },
              "name": "Thomas Recloux"
          }],
          "title": "Maitriser sa gestion de l'identité avec Keycloak",
          "lang": "fr",
          "summary": "Keycloak est une solution Open Source qui permet d'externaliser facilement la gestion de l'identité de vos projets. Ceci inclue l'authentification,la mise en place de la couche d'autorisation.\r\n\r\nLe projet a gagné énormément en popularité ces 2 dernières années car il réponds réellement à un besoin.\r\n\r\nKeycloak permet de sécuriser des applications frontend, des applications backend de nature différente (Java EE, Spring Boot, NodeJS), il supporte différents protocoles comme OpenID Connect, SAML2 ... Bref la matrice des possibilités est importante et ce format université permettra tranquillement de traiter de manière concrète des cas d'usages principaux."
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 220,
      "roomName": "Paris 241",
      "slotId": "uni_d_par241_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "e_neu252",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "lang",
          "talkType": "University",
          "track": "Langages alternatifs",
          "summaryAsHtml": "<p>Comment aborder un nouveau langage ?\nLes uns répondent en codant, les autres en regardant son fonctionnement en détail.\nDans ce 'Deep Dive' nous vous proposons les deux !\nQuoi de mieux qu'un live-coding d'un exercice complet pour découvrir les idiomes du langage.\nPuis en regardant sous le capot, les fonctionnalités que nous n'avons pas (encore) en Java, ne resteront plus un mystère pour vous !</p>\n",
          "id": "PPE-6138",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/dad5f5b3a325c966d47456d2efa91db1385d3382",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Igor Laborie"
              },
              "name": "Igor Laborie"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/194b247983f7834ca758beb3593142ae644d1a09",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Emmanuel Vinas"
              },
              "name": "Emmanuel Vinas"
          }],
          "title": "Deep Dive Kotlin: du Hello World au Bytecode",
          "lang": "fr",
          "summary": "Comment aborder un nouveau langage ?\r\nLes uns répondent en codant, les autres en regardant son fonctionnement en détail.\r\nDans ce 'Deep Dive' nous vous proposons les deux !\r\nQuoi de mieux qu'un live-coding d'un exercice complet pour découvrir les idiomes du langage.\r\nPuis en regardant sous le capot, les fonctionnalités que nous n'avons pas (encore) en Java, ne resteront plus un mystère pour vous !"
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 380,
      "roomName": "Neuilly 252 AB",
      "slotId": "uni_e_neu252_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "par242AB",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "java",
          "talkType": "University",
          "track": "Java, JVM, Javas SE/EE",
          "summaryAsHtml": "<p>Cela fait un moment que vous entendez parler de Gradle. Vous êtes curieux mais ne savez pas par où commencer. En vaut-il le coup ?</p>\n<p>L’objectif de cette session est de vous donner une introduction solide à Gradle qui vous montrera sa modernité et sa maturité en tant qu’outil de build.</p>\n<p>Pour commencer, l'utilisateur: après tout, une partie du travail pour tout développeur passe par des interactions avec l’outil de build. Vous verrez donc comment tirer parti au mieux des tâches de build et obtenir ce feedback précieux en un temps record.</p>\n<p>Nous couvrirons ensuite les atouts majeurs de Gradle:</p>\n<ul>\n<li>Conventions et plugins de base</li>\n<li>Tâches incrémentales</li>\n<li>Configuration avancée</li>\n<li>Gestion des dépendances</li>\n<li>Intégration dans l’IDE</li>\n</ul>\n<p>Nous finirons avec la mise en place d'un cache distribué, permettant de réduire considérablement les temps de builds, pour l'intégration continue, mais aussi localement !</p>\n<p>A l'issu de cette session, vous devriez avoir toutes les clés en main pour comprendre fondamentalement ce que Gradle peut vous apporter, son modèle, comment gagner du temps, et tout simplement améliorer la qualité de votre logiciel en ayant un processus de build et de release à la hauteur.</p>\n",
          "id": "JTZ-0153",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/e4ea220ecbd3e39b726e1538e640a671f9e1298c",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Louis Jacomet"
              },
              "name": "Louis Jacomet"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/461c61f74a62966ae1a3fbb31bbfc1f85034eedb",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Cédric Champeau"
              },
              "name": "Cédric Champeau"
          }],
          "title": "Je passe à Gradle: maturité, performance et plaisir!",
          "lang": "fr",
          "summary": "Cela fait un moment que vous entendez parler de Gradle. Vous êtes curieux mais ne savez pas par où commencer. En vaut-il le coup ?\r\n\r\nL’objectif de cette session est de vous donner une introduction solide à Gradle qui vous montrera sa modernité et sa maturité en tant qu’outil de build.\r\n\r\nPour commencer, l'utilisateur: après tout, une partie du travail pour tout développeur passe par des interactions avec l’outil de build. Vous verrez donc comment tirer parti au mieux des tâches de build et obtenir ce feedback précieux en un temps record.\r\n\r\nNous couvrirons ensuite les atouts majeurs de Gradle:\r\n\r\n* Conventions et plugins de base\r\n* Tâches incrémentales\r\n* Configuration avancée\r\n* Gestion des dépendances\r\n* Intégration dans l’IDE\r\n\r\nNous finirons avec la mise en place d'un cache distribué, permettant de réduire considérablement les temps de builds, pour l'intégration continue, mais aussi localement !\r\n\r\nA l'issu de cette session, vous devriez avoir toutes les clés en main pour comprendre fondamentalement ce que Gradle peut vous apporter, son modèle, comment gagner du temps, et tout simplement améliorer la qualité de votre logiciel en ayant un processus de build et de release à la hauteur."
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 280,
      "roomName": "Paris 242-AB",
      "slotId": "uni_par242AB_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "par243_t",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "cldops",
          "talkType": "University",
          "track": "Cloud, Container et Scalabilité",
          "summaryAsHtml": "<p>Amazon Web Services offers a wide range of compute options for developers interested in deploying microservices-based applications. Developers interested in full control and responsibility of the stack can use EC2 and deploy all components from scratch. If you are interested in leveraging containers then you can deploy your applications using Amazon Elastic Container Service or EKS. Serverless applications can be deployed using AWS Lambda. AWS Fargate allows you to run containers without having to manage servers or clusters. The amount of effort, time and resources involved to address Ops concerns such as creating, managing, scaling and updating a cluster differ for each compute option. Similarly, Developer concerns such as application packaging, tooling, service discovery, monitoring, logging, and CI/CD also differ for each compute option. This session will walk you through what it takes to build, deploy and manage a simple microservices based application using these different compute options. You’ll learn when a particular option is well suited, or not for your application. Pros and cons of each option will be discussed as well.</p>\n",
          "id": "XZH-6845",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/935ae978e9c41b4053833ed8ac54be91255f884e",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Arun Gupta"
              },
              "name": "Arun Gupta"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/247b5bfde745e871c091e4c073709928a089f368",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Tiffany Jernigan"
              },
              "name": "Tiffany Jernigan"
          }],
          "title": "Compute options for Microservices on AWS",
          "lang": "en",
          "summary": "Amazon Web Services offers a wide range of compute options for developers interested in deploying microservices-based applications. Developers interested in full control and responsibility of the stack can use EC2 and deploy all components from scratch. If you are interested in leveraging containers then you can deploy your applications using Amazon Elastic Container Service or EKS. Serverless applications can be deployed using AWS Lambda. AWS Fargate allows you to run containers without having to manage servers or clusters. The amount of effort, time and resources involved to address Ops concerns such as creating, managing, scaling and updating a cluster differ for each compute option. Similarly, Developer concerns such as application packaging, tooling, service discovery, monitoring, logging, and CI/CD also differ for each compute option. This session will walk you through what it takes to build, deploy and manage a simple microservices based application using these different compute options. You’ll learn when a particular option is well suited, or not for your application. Pros and cons of each option will be discussed as well."
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 120,
      "roomName": "Paris 243",
      "slotId": "uni_par243_t_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "neu253_t",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "java",
          "talkType": "University",
          "track": "Java, JVM, Javas SE/EE",
          "summaryAsHtml": "<p>Le réactif a le vent en poupe ces dernières années, avec la popularité croissante de librairies de programmation réactives telles que <code>Reactor</code> et <code>RxJava</code> ou d'architecture réactive comme <code>Vert.x</code>, ainsi que l'introduction de la spécification Reactive Streams (qui rejoint même le JDK en Java 9 via les interfaces <code>Flow</code>).</p>\n<p>Dans cette université, nous partirons des principes de bases de la Programmation Réactive et de la spécification Reactive Streams, puis nous nous intéresserons à Reactor et le vocabulaire d'opérateurs qu'il propose.</p>\n<p>Ensuite, nous descendrons dans les profondeurs de la librairie pour regarder en détail l'implémentation concrète de différents opérateurs, pour en comprendre le fonctionnement et se faire une idée de ce que ça implique d'implémenter <code>Flow</code>.</p>\n<p>Cette session suppose que vous soyez familier avec Java 8 et ayez au moins entendu parler de programmation réactive.</p>\n",
          "id": "ZRQ-0586",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/93c4dea7-8b34-481d-8d92-703b60c1b389",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Simon BASLE"
              },
              "name": "Simon BASLE"
          }],
          "title": "Spéléo Reactor: dans les profondeurs de la programmation réactive",
          "lang": "fr",
          "summary": "Le réactif a le vent en poupe ces dernières années, avec la popularité croissante de librairies de programmation réactives telles que `Reactor` et `RxJava` ou d'architecture réactive comme `Vert.x`, ainsi que l'introduction de la spécification Reactive Streams (qui rejoint même le JDK en Java 9 via les interfaces `Flow`).\r\n\r\nDans cette université, nous partirons des principes de bases de la Programmation Réactive et de la spécification Reactive Streams, puis nous nous intéresserons à Reactor et le vocabulaire d'opérateurs qu'il propose.\r\n\r\nEnsuite, nous descendrons dans les profondeurs de la librairie pour regarder en détail l'implémentation concrète de différents opérateurs, pour en comprendre le fonctionnement et se faire une idée de ce que ça implique d'implémenter `Flow`.\r\n\r\nCette session suppose que vous soyez familier avec Java 8 et ayez au moins entendu parler de programmation réactive."
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 120,
      "roomName": "Neuilly 253",
      "slotId": "uni_neu253_t_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "par202_203",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "classroom",
      "talk": {
          "trackId": "java",
          "talkType": "Hands-on Labs",
          "track": "Java, JVM, Javas SE/EE",
          "summaryAsHtml": "<p>Spring 5 est sorti et avec ça tout un lot de nouveautés !! Reactor, intégration Kotlin, WebFlux &amp; Router Function. Comment s’y retrouver ?</p>\n<p>Vous découvrirez avec ce Hands-on labs les dernières nouveautés de Spring 5 &amp; Spring Boot 2 et vous serez capable de les intégrer sur tous vos projets.</p>\n<p>Au sein de ce Hands-on, vous développerez un Dashboard entre toutes vos instances Jenkins de votre SI.</p>\n",
          "id": "CAA-2373",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/cca99c2b60d5bb28b2969b51ba6d2137bedb489f",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Patrick Allain"
              },
              "name": "Patrick Allain"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/b8cfc2c5b0d9f98410ec6cc7b51c47419cb634dd",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "David Wursteisen"
              },
              "name": "David Wursteisen"
          }],
          "title": "Découvrir les nouveautés de Spring 5 & Spring Boot 2 par la pratique",
          "lang": "fr",
          "summary": "Spring 5 est sorti et avec ça tout un lot de nouveautés !! Reactor, intégration Kotlin, WebFlux & Router Function. Comment s’y retrouver ?\r\n\r\nVous découvrirez avec ce Hands-on labs les dernières nouveautés de Spring 5 & Spring Boot 2 et vous serez capable de les intégrer sur tous vos projets.\r\n\r\nAu sein de ce Hands-on, vous développerez un Dashboard entre toutes vos instances Jenkins de votre SI."
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 32,
      "roomName": "Paris 202-203 Lab",
      "slotId": "lab_par202_203_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "par221M-222M",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "classroom",
      "talk": {
          "trackId": "wm",
          "talkType": "Hands-on Labs",
          "track": "Web, JS, HTML5 et UX",
          "summaryAsHtml": "<p>Après des débuts un peu compliqués suite à une refonte complète, le framework et tout l’écosystème Angular ont maintenant acquis un niveau de maturité qui permet vraiment d’être très efficace. On peut créer un projet et commencer à coder en quelques minutes.</p>\n<p>Il est temps de s’y mettre, et de découvrir un framework qui, tout en conservant les principes qui ont fait le succès de la première version, a beaucoup gagné en élégance et en efficacité.</p>\n<p>Ce workshop de découverte s’adresse à des développeurs qui ne connaissent pas encore les versions 2 et suivantes d’Angular.</p>\n",
          "id": "WAQ-1672",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/7c0e3659c3e1946a39a7b45f633a3a6f52cab4c6",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Thierry Chatel"
              },
              "name": "Thierry Chatel"
          }],
          "title": "Initiation à Angular 5 par la pratique",
          "lang": "fr",
          "summary": "Après des débuts un peu compliqués suite à une refonte complète, le framework et tout l’écosystème Angular ont maintenant acquis un niveau de maturité qui permet vraiment d’être très efficace. On peut créer un projet et commencer à coder en quelques minutes.\r\n\r\nIl est temps de s’y mettre, et de découvrir un framework qui, tout en conservant les principes qui ont fait le succès de la première version, a beaucoup gagné en élégance et en efficacité.\r\n\r\nCe workshop de découverte s’adresse à des développeurs qui ne connaissent pas encore les versions 2 et suivantes d’Angular.\r\n"
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 32,
      "roomName": "Paris 221M-222M Lab",
      "slotId": "lab_par221M-222M_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "par224M-225M",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "classroom",
      "talk": {
          "trackId": "bigd",
          "talkType": "Hands-on Labs",
          "track": "Big Data, Machine Learning, IA & Analytics",
          "summaryAsHtml": "<p>Cela fait des années que l’humanité explore le ciel, rêvant de voyages intersidérales et de nouvelles colonies planétaires. Et toi, as-tu envie de partir 3h avec nous à la découverte de l'univers ?</p>\n<p>Il se trouve que la NASA possède un formidable jeu de données publiques, notamment celui qui est utilisé pour la recherche d’exoplanètes, c’est-à-dire de planètes situées en dehors de notre système solaire.</p>\n<p>Nous vous guiderons, au cours de ce Hands-on, dans les différentes étapes permettant de redécouvrir des exoplanètes en utilisant Warp10, une plateforme open-source de traitement de séries temporelles.</p>\n",
          "id": "GNW-3497",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/a6361f1ef8f413e2ee3e9a4e096cd92d02bf41bb",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Pierre Zemb"
              },
              "name": "Pierre Zemb"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/b793600cc58a8ad938864f2384c365011acabd2c",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Aurélien Hébert"
              },
              "name": "Aurélien Hébert"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/73ebde8b6affccfdd3cdfceebac253655a224f63",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Horacio Gonzalez"
              },
              "name": "Horacio Gonzalez"
          }],
          "title": "Redécouvrir l’univers connu avec le dataset de la NASA",
          "lang": "fr",
          "summary": "Cela fait des années que l’humanité explore le ciel, rêvant de voyages intersidérales et de nouvelles colonies planétaires. Et toi, as-tu envie de partir 3h avec nous à la découverte de l'univers ?\r\n\r\nIl se trouve que la NASA possède un formidable jeu de données publiques, notamment celui qui est utilisé pour la recherche d’exoplanètes, c’est-à-dire de planètes situées en dehors de notre système solaire.\r\n\r\nNous vous guiderons, au cours de ce Hands-on, dans les différentes étapes permettant de redécouvrir des exoplanètes en utilisant Warp10, une plateforme open-source de traitement de séries temporelles."
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 26,
      "roomName": "Paris 224M-225M Lab",
      "slotId": "lab_par224M-225M_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "neu_212_213",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "classroom",
      "talk": {
          "trackId": "lang",
          "talkType": "Hands-on Labs",
          "track": "Langages alternatifs",
          "summaryAsHtml": "<p>Rust est un langage conçus pour la programmation système, tout en utilisant des constructions haut niveau. Il se focus sur:</p>\n<ul>\n<li>performance: Un langage low level sans garbage collector mais pas de gestion mémoire manuelle.</li>\n<li>productivité: Multi-paradigme, inférence des types, <em>pattern matching</em>, généricité, macro</li>\n<li>sûreté: Eliminer des bugs liés à la mémoire pour être safe à runtime.</li>\n</ul>\n<p>Rust s’est montré comme une bonne alternative pour construire des services systèmes, et remplacer les extensions natives en C de différents langages dynamiques par du code sûr et lisible. Et se place aujourd'hui comme le langage pour web assembly et pour la création de services web qui demande de la performance.</p>\n<p>Venez découvrir Rust par vous-même avec des explications détaillées et des exercices pas-à-pas et concret.</p>\n<p><strong>NOTE IMPORTANTE !</strong> Afin d'offrir la meilleure expérience pour tout le monde, il est nécessaire de venir avec un environnement prêt ! Pour cela, veuillez suivre les instructions ici : https://github.com/loganmzz/rust-installation</p>\n",
          "id": "QAL-4376",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/26402eb4c1318de22f057efc254ef896635e45a4",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Logan MAUZAIZE"
              },
              "name": "Logan MAUZAIZE"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/bd42184e23f1ffa714dbbf8e97ac179158c75371",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Alessio Coltellacci"
              },
              "name": "Alessio Coltellacci"
          }],
          "title": "Atelier Rust",
          "lang": "fr",
          "summary": "Rust est un langage conçus pour la programmation système, tout en utilisant des constructions haut niveau. Il se focus sur: \r\n\r\n* performance: Un langage low level sans garbage collector mais pas de gestion mémoire manuelle.\r\n* productivité: Multi-paradigme, inférence des types, *pattern matching*, généricité, macro\r\n* sûreté: Eliminer des bugs liés à la mémoire pour être safe à runtime.\r\n\r\nRust s’est montré comme une bonne alternative pour construire des services systèmes, et remplacer les extensions natives en C de différents langages dynamiques par du code sûr et lisible. Et se place aujourd'hui comme le langage pour web assembly et pour la création de services web qui demande de la performance.\r\n\r\nVenez découvrir Rust par vous-même avec des explications détaillées et des exercices pas-à-pas et concret.\r\n\r\n**NOTE IMPORTANTE !** Afin d'offrir la meilleure expérience pour tout le monde, il est nécessaire de venir avec un environnement prêt ! Pour cela, veuillez suivre les instructions ici : https://github.com/loganmzz/rust-installation"
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 32,
      "roomName": "Neuilly 212-213M Lab",
      "slotId": "lab_neu_212_213_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "neu_232_232",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "classroom",
      "talk": {
          "trackId": "agTest",
          "talkType": "Hands-on Labs",
          "track": "DevOps, Agilité, Méthodologie & Tests",
          "summaryAsHtml": "<p>Vous venez d'être embauchés chez Paladin Inventories Company. Elle gagne beaucoup d'argent avec son logiciel. Mais le gobelin qui l'a écrit s'est fait dévorer par un dragon. Vous ne comprenez rien au code. Et bien sûr il n'y a pas de tests. Le problème : une horde de trolls se rue vers vous avec plein de nouvelles demandes pour ce logiciel, qui est maintenant le vôtre...</p>\n<p>Cette situation vous dit quelquechose ?</p>\n<p>Et si on se mettait dans cette situation, en équipes et en compétition ? Qui sera alors l'équipe la plus à même de faire évoluer le code legacy, tout en continuant à gagner de l'argent ?</p>\n<p>Venez relever le challenge, avec votre env de dev favori !</p>\n",
          "id": "MGH-2288",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/3e8dbfe0512140835fd80540e0733de9bba6ebe5",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Julien JAKUBOWSKI"
              },
              "name": "Julien JAKUBOWSKI"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/a86ce1631bddb7726b4d9e4f5716ebc69ff34271",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Clotilde Desquilbet"
              },
              "name": "Clotilde Desquilbet"
          }],
          "title": "Epic Legacy Code Challenge",
          "lang": "fr",
          "summary": "\r\n\r\nVous venez d'être embauchés chez Paladin Inventories Company. Elle gagne beaucoup d'argent avec son logiciel. Mais le gobelin qui l'a écrit s'est fait dévorer par un dragon. Vous ne comprenez rien au code. Et bien sûr il n'y a pas de tests. Le problème : une horde de trolls se rue vers vous avec plein de nouvelles demandes pour ce logiciel, qui est maintenant le vôtre...\r\n\r\nCette situation vous dit quelquechose ?\r\n\r\nEt si on se mettait dans cette situation, en équipes et en compétition ? Qui sera alors l'équipe la plus à même de faire évoluer le code legacy, tout en continuant à gagner de l'argent ?\r\n\r\nVenez relever le challenge, avec votre env de dev favori !\r\n"
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 32,
      "roomName": "Neuilly 231-232M Lab",
      "slotId": "lab_neu_232_232_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "neu_234_235",
      "notAllocated": false,
      "fromTimeMillis": 1524036600000,
      "break": null,
      "roomSetup": "classroom",
      "talk": {
          "trackId": "cldops",
          "talkType": "Hands-on Labs",
          "track": "Cloud, Container et Scalabilité",
          "summaryAsHtml": "<p>Quand on parle de Cloud, Amazon Web Services est incontournable. Grâce à ses API vous pouvez créer des architectures réseau, serveurs et services complexes en quelques minutes, pour un usage basique comme pour des sites à fort traffic. Toute la puissance de l’infrastructure Amazon au bout d’un script… Encore faut-il l’utiliser au mieux et ne pas se perdre en chemin !</p>\n<p>Dans cet atelier, nous verrons ensemble les concepts de base d’AWS et un outil de déploiement d’infrastructure qui monte ces derniers temps : Terraform. Avec Terraform, vous pourrez décrire votre stack infrastructure, la variabiliser, déployer, corriger, et effacer avec quelques commandes  simples. Je vous transmettrai tous les concepts de base qui vous permettront d'être autonome par la suite.\nVenez découvrir l’approche Infrastructure-As-Code par la pratique en construisant votre premier serveur web dans les bonnes pratiques (et dans le cadre de l’offre gratuite d’AWS).</p>\n<p><em>Pré-requis :</em> Disposer d’un compte AWS et d’un couple access key - secret key pour accéder aux API d’AWS.</p>\n",
          "id": "GNT-4914",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/d041e39a377c807ffcfad6cab4d73e8cc56c736c",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Aurélien Maury"
              },
              "name": "Aurélien Maury"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/b3caba31e4836c2b9ddf7f7ca06950a402967253",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Nicolas Diez"
              },
              "name": "Nicolas Diez"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/e2e255764944f4afe639111b48bba2434ea0dc4d",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Maxence Maireaux"
              },
              "name": "Maxence Maireaux"
          }],
          "title": "Terraformer la planète Amazon",
          "lang": "fr",
          "summary": "Quand on parle de Cloud, Amazon Web Services est incontournable. Grâce à ses API vous pouvez créer des architectures réseau, serveurs et services complexes en quelques minutes, pour un usage basique comme pour des sites à fort traffic. Toute la puissance de l’infrastructure Amazon au bout d’un script… Encore faut-il l’utiliser au mieux et ne pas se perdre en chemin ! \r\n\r\nDans cet atelier, nous verrons ensemble les concepts de base d’AWS et un outil de déploiement d’infrastructure qui monte ces derniers temps : Terraform. Avec Terraform, vous pourrez décrire votre stack infrastructure, la variabiliser, déployer, corriger, et effacer avec quelques commandes  simples. Je vous transmettrai tous les concepts de base qui vous permettront d'être autonome par la suite.\r\nVenez découvrir l’approche Infrastructure-As-Code par la pratique en construisant votre premier serveur web dans les bonnes pratiques (et dans le cadre de l’offre gratuite d’AWS).\r\n\r\n*Pré-requis :* Disposer d’un compte AWS et d’un couple access key - secret key pour accéder aux API d’AWS.\r\n"
      },
      "fromTime": "09:30",
      "toTimeMillis": 1524047400000,
      "toTime": "12:30",
      "roomCapacity": 32,
      "roomName": "Neuilly 234_234M Lab",
      "slotId": "lab_neu_234_235_wednesday_18_9h30_12h30",
      "day": "wednesday"
  }, {
      "roomId": "a_hall",
      "notAllocated": false,
      "fromTimeMillis": 1524047400000,
      "break": {
          "id": "lunch",
          "nameEN": "Lunch",
          "nameFR": "Pause déjeuner",
          "room": {
              "id": "a_hall",
              "name": "Exhibition floor",
              "capacity": 2300,
              "setup": "special",
              "recorded": ""
          }
      },
      "roomSetup": "special",
      "talk": null,
      "fromTime": "12:30",
      "toTimeMillis": 1524051000000,
      "toTime": "13:30",
      "roomCapacity": 2300,
      "roomName": "Exhibition floor",
      "slotId": "lunch_wednesday_18_12h30_13h30",
      "day": "wednesday"
  }, {
      "roomId": "b_amphi",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "java",
          "talkType": "University",
          "track": "Java, JVM, Javas SE/EE",
          "summaryAsHtml": "<p>Avec la version 9 sortie en septembre 2017, Java appuie sur la pédale ! Le rythme des livraisons passe à une version majeure tous les 6 mois. Java 10 est sorti en mars, prochaine version en septembre. Java 10 apporte le 'var' et l'inférence de type pour les variables locales. D'autres nouveautés sont en préparation : les constantes dynamiques, les classes de données, un nouveau switch à base de lambda, des interfaces fermées, de nouvelles choses du coté des génériques et bien plus encore.</p>\n<p>Cela viendra-t-il en 11, 12, 15 ? Ne spéculons pas, mais quand ces nouveautés seront prêtes, elles sortiront en quelques mois. On se propose de présenter ces nouveautés, celles qui sont presque prêtes, celles qui seront prêtes bientôt, et celles qui ne seront pas prêtes avant un moment. Quels seront les impacts sur le langage, sur la JVM et donc sur les performances ? Que cela va-t-il nous apporter au quotidien, en tant que développeurs ? Quels seront les nouveaux patterns ? Voici le programme de cette présentation, avec des slides, du code, de la joie et de la bonne humeur  !</p>\n",
          "id": "NXN-3956",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/70365c89d2a734da0d24d091f7ec0af77ba90701",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "José Paumard"
              },
              "name": "José Paumard"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/b967a0dc26fb6feaaa8795f375103b0d7aff319e",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Remi Forax"
              },
              "name": "Remi Forax"
          }],
          "title": "Java Fullthrottle",
          "lang": "fr",
          "summary": "Avec la version 9 sortie en septembre 2017, Java appuie sur la pédale ! Le rythme des livraisons passe à une version majeure tous les 6 mois. Java 10 est sorti en mars, prochaine version en septembre. Java 10 apporte le 'var' et l'inférence de type pour les variables locales. D'autres nouveautés sont en préparation : les constantes dynamiques, les classes de données, un nouveau switch à base de lambda, des interfaces fermées, de nouvelles choses du coté des génériques et bien plus encore.\r\n\r\nCela viendra-t-il en 11, 12, 15 ? Ne spéculons pas, mais quand ces nouveautés seront prêtes, elles sortiront en quelques mois. On se propose de présenter ces nouveautés, celles qui sont presque prêtes, celles qui seront prêtes bientôt, et celles qui ne seront pas prêtes avant un moment. Quels seront les impacts sur le langage, sur la JVM et donc sur les performances ? Que cela va-t-il nous apporter au quotidien, en tant que développeurs ? Quels seront les nouveaux patterns ? Voici le programme de cette présentation, avec des slides, du code, de la joie et de la bonne humeur  !"
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 826,
      "roomName": "Amphi Bleu",
      "slotId": "uni_b_amphi_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "c_maillot",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "cldops",
          "talkType": "University",
          "track": "Cloud, Container et Scalabilité",
          "summaryAsHtml": "<p>“It is not necessary to change. Survival is not mandatory.” -W. Edwards Deming</p>\n<p>Work takes time to flow through an organization and ultimately be deployed to production where it captures value. It’s critical to reduce time-to-production. Software - for many organizations and industries - is a competitive advantage.</p>\n<p>But velocity, for velocity’s sake, is dangerous. Microservices invite architectural complexity that few are prepared to address. In this updated talk, we'll look at centralized configuration, service registration and discovery, and reliability patterns, as before, but expand to also include new coverage of Kotlin, reactive programming with project Reactor and Spring Boot 2.0, updates in Spring Cloud Finchley, messaging with Apache Kafka, Micrometer.io-based observability, serverless with Spring Cloud Function and edge-services with Spring Cloud Gateway.</p>\n",
          "id": "MNG-5939",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/2dbb394783ed227a5fd8e7f19001a29f8c2d31c2",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Josh Long"
              },
              "name": "Josh Long"
          }],
          "title": "Cloud Native Spring, chapitre deux",
          "lang": "en",
          "summary": "“It is not necessary to change. Survival is not mandatory.” -W. Edwards Deming\r\n\r\nWork takes time to flow through an organization and ultimately be deployed to production where it captures value. It’s critical to reduce time-to-production. Software - for many organizations and industries - is a competitive advantage.\r\n\r\nBut velocity, for velocity’s sake, is dangerous. Microservices invite architectural complexity that few are prepared to address. In this updated talk, we'll look at centralized configuration, service registration and discovery, and reliability patterns, as before, but expand to also include new coverage of Kotlin, reactive programming with project Reactor and Spring Boot 2.0, updates in Spring Cloud Finchley, messaging with Apache Kafka, Micrometer.io-based observability, serverless with Spring Cloud Function and edge-services with Spring Cloud Gateway.\r\n"
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 380,
      "roomName": "Maillot",
      "slotId": "uni_c_maillot_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "f_neu251",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "archisec",
          "talkType": "University",
          "track": "Architecture, Performance et Securité",
          "summaryAsHtml": "<p>Rejoignez nous pour découvrir Kafka et son écosystème. Au programme Kafka, Kafka Connect, Kafka Streams, KSQL. Tout cela sous forme de live coding d’une application permettant de jouer de la musique collaborative ! Vous choisirez les sons à jouer et nous écouterons le résultat en temps (quasi) réel. Ce sera magnifique (ou pas).</p>\n",
          "id": "ZSG-1693",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/eec27b231d20ebc4d7e2e2899fb37ffa7e0bbbac",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Florian Garcia"
              },
              "name": "Florian Garcia"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/9f1c378df43199cd7ee9bbe2c1abf311fb777c61",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Paul Boutes"
              },
              "name": "Paul Boutes"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/0645e1c99c9e6f487a33add05f335a0dbb7dd0e5",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Vivien Maleze"
              },
              "name": "Vivien Maleze"
          }],
          "title": "De la musique collaborative avec Kafka !",
          "lang": "fr",
          "summary": "Rejoignez nous pour découvrir Kafka et son écosystème. Au programme Kafka, Kafka Connect, Kafka Streams, KSQL. Tout cela sous forme de live coding d’une application permettant de jouer de la musique collaborative ! Vous choisirez les sons à jouer et nous écouterons le résultat en temps (quasi) réel. Ce sera magnifique (ou pas)."
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 220,
      "roomName": "Neuilly 251",
      "slotId": "uni_f_neu251_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "d_par241",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "cldops",
          "talkType": "University",
          "track": "Cloud, Container et Scalabilité",
          "summaryAsHtml": "<p>Tout comme le <em>Cloud IaaS</em> avant lui, le <em>serverless</em> promet de faciliter le succès de vos projets en accélérant le <em>Time to Market</em> et en fluidifiant les relations entre Devs et Ops.</p>\n<p>Mais sa mise en œuvre au sein d'une entreprise reste complexe et coûteuse.</p>\n<p>Après 2 ans à mettre en place des plateformes managées de ce type, nous partagons nos expériences de ce qu’il faut faire pour mettre en œuvre du <em>serverless</em> en entreprise, en évitant les douleurs et en limitant les contraintes au maximum.</p>\n<p>Tout d’abord l’architecture technique, avec 2 implémentations très différentes : <code>Kubernetes</code> et <code>Helm</code> d'un côté, <em>Clever Cloud</em> <em>on-premise</em> de l'autre.</p>\n<p>Ensuite, la mise en place et l’utilisation d’<code>OpenFaaS</code> framework open source de <em>Function as a Service</em>. Comment tester et versionner des fonctions indépendantes. Mais aussi les problématiques de <em>blue/green deployment</em>, de <em>rolling update</em>, d’<em>A/B testing</em>.\nComment diagnostiquer rapidement les dépendances et les communications entre services.</p>\n<p>Enfin, en abordant les sujets chers à la production :</p>\n<ul>\n<li><em>vulnerability management</em> et <em>patch management</em>,</li>\n<li>hétérogénéïté du parc,</li>\n<li>monitoring et alerting,</li>\n<li>gestion des stacks obsolètes, etc.</li>\n</ul>\n",
          "id": "ZKK-0454",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/c0acf4078300a6a5874b4b4114a143fb567e0b91",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Ludovic Piot"
              },
              "name": "Ludovic Piot"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/03807b7dce87a8a29bd5c16b194717310861d5dd",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Laurent Doguin"
              },
              "name": "Laurent Doguin"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/4339329660c101f8f1a3755e856a1984c2dc54bf",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Adrien Blind"
              },
              "name": "Adrien Blind"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/14b836a9f03ba41155bf94b79511156db10827f3",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Laurent Grangeau"
              },
              "name": "Laurent Grangeau"
          }],
          "title": "#serverless - 🛳 mettez-le en œuvre dans votre entreprise et arrivez à bon port ",
          "lang": "en",
          "summary": "Tout comme le _Cloud IaaS_ avant lui, le _serverless_ promet de faciliter le succès de vos projets en accélérant le _Time to Market_ et en fluidifiant les relations entre Devs et Ops.\r\n\r\nMais sa mise en œuvre au sein d'une entreprise reste complexe et coûteuse.\r\n\r\nAprès 2 ans à mettre en place des plateformes managées de ce type, nous partagons nos expériences de ce qu’il faut faire pour mettre en œuvre du _serverless_ en entreprise, en évitant les douleurs et en limitant les contraintes au maximum.\r\n\r\nTout d’abord l’architecture technique, avec 2 implémentations très différentes : `Kubernetes` et `Helm` d'un côté, *Clever Cloud* _on-premise_ de l'autre.\r\n\r\nEnsuite, la mise en place et l’utilisation d’`OpenFaaS` framework open source de _Function as a Service_. Comment tester et versionner des fonctions indépendantes. Mais aussi les problématiques de _blue/green deployment_, de _rolling update_, d’_A/B testing_.\r\nComment diagnostiquer rapidement les dépendances et les communications entre services.\r\n\r\nEnfin, en abordant les sujets chers à la production :\r\n\r\n* _vulnerability management_ et _patch management_,\r\n* hétérogénéïté du parc,\r\n* monitoring et alerting,\r\n* gestion des stacks obsolètes, etc."
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 220,
      "roomName": "Paris 241",
      "slotId": "uni_d_par241_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "e_neu252",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "agTest",
          "talkType": "University",
          "track": "DevOps, Agilité, Méthodologie & Tests",
          "summaryAsHtml": "<p>Avec la montée en puissance de l'approche DEVOPS, le dev moyen se retrouve à devoir de plus en plus connaitre le fonctionnement de l'OS et la vie du manchot.\nDans cette université sur Linux moderne, on va apprendre tout des nouveautés introduites ces dernières années au sein des distribution, en se focalisant sur SystemD. Au long d'un exemple concret (le docker-compose de gitlab que l'on va convertir en full SystemD), nous allons aborder les sujets important du fonctionnement du système :\n- ordonnancement de processus et ordre de boot\n- gestion des logs\n- containers et isolation\n- monitoring de processus\n- sécurisation avec SElinux (au niveau process et isolation)\n- task et remplacement de cron\n- arbres de processus\n- mise à jour</p>\n",
          "id": "EDC-2296",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/a2eec3d78572a5e31b354127520841d753284c1d",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Pierre-Antoine Grégoire"
              },
              "name": "Pierre-Antoine Grégoire"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/e0ce87f40a638c59e9da24231ef05da65aa355f3",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Quentin Adam"
              },
              "name": "Quentin Adam"
          }],
          "title": "SystemD pro level ; linux des temps modernes : process management, containers, tâches...",
          "lang": "fr",
          "summary": "Avec la montée en puissance de l'approche DEVOPS, le dev moyen se retrouve à devoir de plus en plus connaitre le fonctionnement de l'OS et la vie du manchot.\r\nDans cette université sur Linux moderne, on va apprendre tout des nouveautés introduites ces dernières années au sein des distribution, en se focalisant sur SystemD. Au long d'un exemple concret (le docker-compose de gitlab que l'on va convertir en full SystemD), nous allons aborder les sujets important du fonctionnement du système :\r\n- ordonnancement de processus et ordre de boot\r\n- gestion des logs\r\n- containers et isolation\r\n- monitoring de processus\r\n- sécurisation avec SElinux (au niveau process et isolation)\r\n- task et remplacement de cron\r\n- arbres de processus\r\n- mise à jour\r\n\r\n"
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 380,
      "roomName": "Neuilly 252 AB",
      "slotId": "uni_e_neu252_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "par242AB",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "agTest",
          "talkType": "University",
          "track": "DevOps, Agilité, Méthodologie & Tests",
          "summaryAsHtml": "<p>Dans le monde des outils associés à la mouvance DevOps, ceux qui sortent des forges de la société HashiCorp sont de plus en plus populaires. Conçus pour être complémentaires, ils permettent de faciliter de nombreuses étapes dans la mise en place d’une infrastructure résiliente et scalable. Nous allons ici vous présenter ces outils, ainsi que la façon de les utiliser ensemble. La petite famille HashiCorp vous facilitera la vie, du Dev au Run.</p>\n",
          "id": "ING-2609",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/e3211d4946b186827b343771599efcdaef707d39",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Bastien Cadiot"
              },
              "name": "Bastien Cadiot"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/b3caba31e4836c2b9ddf7f7ca06950a402967253",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Nicolas Diez"
              },
              "name": "Nicolas Diez"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/d041e39a377c807ffcfad6cab4d73e8cc56c736c",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Aurélien Maury"
              },
              "name": "Aurélien Maury"
          }],
          "title": "La Galaxie HashiCorp",
          "lang": "fr",
          "summary": "Dans le monde des outils associés à la mouvance DevOps, ceux qui sortent des forges de la société HashiCorp sont de plus en plus populaires. Conçus pour être complémentaires, ils permettent de faciliter de nombreuses étapes dans la mise en place d’une infrastructure résiliente et scalable. Nous allons ici vous présenter ces outils, ainsi que la façon de les utiliser ensemble. La petite famille HashiCorp vous facilitera la vie, du Dev au Run."
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 280,
      "roomName": "Paris 242-AB",
      "slotId": "uni_par242AB_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "par243_t",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "agTest",
          "talkType": "University",
          "track": "DevOps, Agilité, Méthodologie & Tests",
          "summaryAsHtml": "<p>A l'aide de quelques-uns de ses concepts facilement applicables, le Domain Driven Design peut nous permettre de reprendre le contrôle (et du plaisir...) sur des applications Legacy bien pourries.</p>\n<p>Nous illustrerons ceci à travers une intense mais très vivante session de live-coding sur un exemple de code bien legacy... De l'écriture d'un harnais de tests lorsqu'on n'a zéro test et du code à priori non-testable au refactoring à la sauce DDD puis à la mise en place d'une architecture hexagonale, nous démontrerons tout ça par la pratique, en totale interaction avec le public.</p>\n<p>Que vous ayez des connaissances ou non à propos du Domain Driven Design, cette université vous permettra de repartir avec les idées claires, mais surtout pleins d'astuces concrètes pour pouvoir les appliquer dès le lendemain sur vos projets.</p>\n",
          "id": "GZW-0180",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/cf6b5629f6384fe3d0f87a27d88e4f2cf91661c8",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Thomas PIERRAIN"
              },
              "name": "Thomas PIERRAIN"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/67ea160024e7672655e185927a91cb13d3127c39",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Bruno BOUCARD"
              },
              "name": "Bruno BOUCARD"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/e5a23994c64f1c4d51f55c6891ecbfd078aa3777",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Jérémie Grodziski"
              },
              "name": "Jérémie Grodziski"
          }],
          "title": "Du DDD dans mon legacy ! (live coding)",
          "lang": "fr",
          "summary": "A l'aide de quelques-uns de ses concepts facilement applicables, le Domain Driven Design peut nous permettre de reprendre le contrôle (et du plaisir...) sur des applications Legacy bien pourries. \r\n\r\nNous illustrerons ceci à travers une intense mais très vivante session de live-coding sur un exemple de code bien legacy... De l'écriture d'un harnais de tests lorsqu'on n'a zéro test et du code à priori non-testable au refactoring à la sauce DDD puis à la mise en place d'une architecture hexagonale, nous démontrerons tout ça par la pratique, en totale interaction avec le public.\r\n\r\nQue vous ayez des connaissances ou non à propos du Domain Driven Design, cette université vous permettra de repartir avec les idées claires, mais surtout pleins d'astuces concrètes pour pouvoir les appliquer dès le lendemain sur vos projets."
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 120,
      "roomName": "Paris 243",
      "slotId": "uni_par243_t_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "neu253_t",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "archisec",
          "talkType": "University",
          "track": "Architecture, Performance et Securité",
          "summaryAsHtml": "<p>Vous songez à devenir architecte, ou vous l'êtes déjà sans avoir eu de formation ? Vous voulez approfondir vos compétences en architecture pour être plus performant-e dans votre équipe ? Cette université est pour vous et va vous donner les clés de l'architecture logicielle.</p>\n<p>Par une mise en situation concrète et ludique qui alterne entre l'échelle de l'application et celle du système en entier, vous découvrirez les enjeux essentiels de l'architecture et les principaux outils théoriques associés : définition des frontières, couplage &amp; contrats, autorité des données, styles d'implémentation, cohérence &amp; communication. Nous évoquerons aussi les modes d'échecs, les illusions perverses, et les évolutions de l'architecture.</p>\n",
          "id": "UTJ-8549",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/0499a99ad2f1d4c024bc3c433d9c05f0dbc55ea4",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Cyrille Martraire"
              },
              "name": "Cyrille Martraire"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/42802c232f1afcf5a3c14205aab4c39134f5c41b",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Arnauld Loyer"
              },
              "name": "Arnauld Loyer"
          }],
          "title": "Être architecte logiciel en 2018",
          "lang": "fr",
          "summary": "Vous songez à devenir architecte, ou vous l'êtes déjà sans avoir eu de formation ? Vous voulez approfondir vos compétences en architecture pour être plus performant-e dans votre équipe ? Cette université est pour vous et va vous donner les clés de l'architecture logicielle.\r\n\r\nPar une mise en situation concrète et ludique qui alterne entre l'échelle de l'application et celle du système en entier, vous découvrirez les enjeux essentiels de l'architecture et les principaux outils théoriques associés : définition des frontières, couplage & contrats, autorité des données, styles d'implémentation, cohérence & communication. Nous évoquerons aussi les modes d'échecs, les illusions perverses, et les évolutions de l'architecture."
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 120,
      "roomName": "Neuilly 253",
      "slotId": "uni_neu253_t_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "par202_203",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "classroom",
      "talk": {
          "trackId": "lang",
          "talkType": "Hands-on Labs",
          "track": "Langages alternatifs",
          "summaryAsHtml": "<p>Kotlin est un langage qui fait beaucoup parler de lui... mais vous n’avez encore jamais osé vous y mettre ou eu l’occasion de le pratiquer ? Cet atelier d’apprentissage du langage est fait pour vous !\nÀ travers des exercices de difficulté croissante vous aurez la possibilité d’apprendre les notions de base du langage mais aussi des fonctionnalités assez avancées. De niveau débutant à intermédiaire, à l’issue de cet atelier vous repartirez avec des bases solides pour progresser en Kotlin.</p>\n",
          "id": "VJD-2857",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/d45f58c66877d5f08400e646d30b4f72e8527c4c",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Fabian Gutierrez"
              },
              "name": "Fabian Gutierrez"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/66421be629dd2d05d627ac258c198d4eb127fbb9",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Sergio Dos Santos"
              },
              "name": "Sergio Dos Santos"
          }],
          "title": "Hands-On Kotlin",
          "lang": "fr",
          "summary": "Kotlin est un langage qui fait beaucoup parler de lui... mais vous n’avez encore jamais osé vous y mettre ou eu l’occasion de le pratiquer ? Cet atelier d’apprentissage du langage est fait pour vous !\r\nÀ travers des exercices de difficulté croissante vous aurez la possibilité d’apprendre les notions de base du langage mais aussi des fonctionnalités assez avancées. De niveau débutant à intermédiaire, à l’issue de cet atelier vous repartirez avec des bases solides pour progresser en Kotlin.\r\n"
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 32,
      "roomName": "Paris 202-203 Lab",
      "slotId": "lab_par202_203_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "par221M-222M",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "classroom",
      "talk": {
          "trackId": "bigd",
          "talkType": "Hands-on Labs",
          "track": "Big Data, Machine Learning, IA & Analytics",
          "summaryAsHtml": "<p>Apache Cassandra est une base de données NoSQL qui dispose de similarités avec les RDBMS permettant une transition en douceur pour tout développeur/dba maitrisant le SQL.\nComme tout système distribué, il introduit cependant des concepts nouveaux, permettant de gérer de manière fine la cohérence des données, le réseau et les incidents.</p>\n<p>Ce Hands On Lab se propose de vous apprendre Apache Cassandra et d'en découvrir les éléments principaux par la pratique, au travers d'expérimentations en local et sur un cluster multi-region AWS :<br  /></p>\n<ul>\n<li>Partitionnement et Réplication</li>\n<li>Niveaux de cohérence</li>\n<li>Syntaxe CQL (Cassandra Query Language)</li>\n<li>LightWeight Transactions (LWT)</li>\n<li>Tombstones</li>\n<li>Opérations</li>\n<li>Découverte et utilisation du driver Java</li>\n<li>requêtes asynchrones</li>\n<li>Compaction</li>\n<li>Simulation de pannes et reprise sur incident</li>\n</ul>\n<p>Pré-requis du Hands On :</p>\n<ul>\n<li>Disposer d'une IDE Java (Eclipse, IntelliJ, NetBeans) et de Maven 3.x</li>\n<li>De préférence, installation préalable de CCM (Cassandra Cluster Manager) : https://pypi.python.org/pypi/ccm</li>\n</ul>\n",
          "id": "GVY-2134",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/5f4b15ca15d4b5abea8c35832f28ab50efa40ec8",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Alexander DEJANOVSKI"
              },
              "name": "Alexander DEJANOVSKI"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/d37a342388b4402499ae201a6157c0005be51d41",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Maxence Lecointe"
              },
              "name": "Maxence Lecointe"
          }],
          "title": "Initiation à Apache Cassandra",
          "lang": "fr",
          "summary": "Apache Cassandra est une base de données NoSQL qui dispose de similarités avec les RDBMS permettant une transition en douceur pour tout développeur/dba maitrisant le SQL. \r\nComme tout système distribué, il introduit cependant des concepts nouveaux, permettant de gérer de manière fine la cohérence des données, le réseau et les incidents.\r\n\r\nCe Hands On Lab se propose de vous apprendre Apache Cassandra et d'en découvrir les éléments principaux par la pratique, au travers d'expérimentations en local et sur un cluster multi-region AWS :  \r\n\r\n- Partitionnement et Réplication\r\n- Niveaux de cohérence\r\n- Syntaxe CQL (Cassandra Query Language)\r\n- LightWeight Transactions (LWT)\r\n- Tombstones\r\n- Opérations\r\n- Découverte et utilisation du driver Java\r\n- requêtes asynchrones\r\n- Compaction\r\n- Simulation de pannes et reprise sur incident\r\n\r\nPré-requis du Hands On : \r\n\r\n- Disposer d'une IDE Java (Eclipse, IntelliJ, NetBeans) et de Maven 3.x\r\n- De préférence, installation préalable de CCM (Cassandra Cluster Manager) : https://pypi.python.org/pypi/ccm"
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 32,
      "roomName": "Paris 221M-222M Lab",
      "slotId": "lab_par221M-222M_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "par224M-225M",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "classroom",
      "talk": {
          "trackId": "cldops",
          "talkType": "Hands-on Labs",
          "track": "Cloud, Container et Scalabilité",
          "summaryAsHtml": "<p>A new pattern for building massively scalable and resilient applications has emerged over the past several years,  that is to completely decentralize the entire application architecture.  One of the biggest challenges for building a decentralized application is defining a common protocol that all services can use for communication. gRPC with protobuf solves this problem by providing the building blocks for creating a language neutral protocol. In this workshop we will start with the basics of creating a protocol with gRPC and protobuf. Then using gRPC building blocks we will build a basic decentralized application.  Along the way we will cover:</p>\n<ul>\n<li>Distributed Service Discovery</li>\n<li>Bootstrapping a Mesh Network</li>\n<li>gRPC Client Side Load Balancing</li>\n<li>Context Propagation with gRPC</li>\n<li>Advanced use of gRPC Interceptors</li>\n</ul>\n",
          "id": "PDL-6381",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/5610adf3f4ed3749abf15d8b525e298c7226d15f",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Ryan Knight"
              },
              "name": "Ryan Knight"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/df99375da7969259cf8d11aa131c9adfc5b06d9c",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Ray Tsang"
              },
              "name": "Ray Tsang"
          }],
          "title": "Building a Decentralized Application with gRPC",
          "lang": "en",
          "summary": "A new pattern for building massively scalable and resilient applications has emerged over the past several years,  that is to completely decentralize the entire application architecture.  One of the biggest challenges for building a decentralized application is defining a common protocol that all services can use for communication. gRPC with protobuf solves this problem by providing the building blocks for creating a language neutral protocol. In this workshop we will start with the basics of creating a protocol with gRPC and protobuf. Then using gRPC building blocks we will build a basic decentralized application.  Along the way we will cover:\r\n\r\n* Distributed Service Discovery\r\n* Bootstrapping a Mesh Network\r\n* gRPC Client Side Load Balancing\r\n* Context Propagation with gRPC\r\n* Advanced use of gRPC Interceptors\r\n"
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 26,
      "roomName": "Paris 224M-225M Lab",
      "slotId": "lab_par224M-225M_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "neu_212_213",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "classroom",
      "talk": {
          "trackId": "java",
          "talkType": "Hands-on Labs",
          "track": "Java, JVM, Javas SE/EE",
          "summaryAsHtml": "<p>La programmation réactive s’inspire de la programmation fonctionnelle et des flux de données. En d’autres termes, c’est déroutant…</p>\n<p>RX Java 2 est une librairie Java qui implémente les concepts de la programmation réactive.  Dans ce lab nous apprendrons à utiliser RX Java 2, les concepts, les opérateurs, et évidemment les bonnes pratiques. Nous verrons aussi comment RX Java 2 simplifie la concurrence, la tolérance aux pannes et la robustesse. Mais attention, RX Java 2 n’est pas une baguette magique. Nous parlerons aussi des limites et comment les contourner.<br  /></p>\n<p>Ce lab présente également la création de librairies réactives avec RX Java 2. Avec la mouvance réactive, de nombreuses librairies bloquantes et synchrones ne sont plus utilisables.</p>\n<p>Bref, ce lab couvre tout ce dont vous avez besoin pour commencer vos développements réactifs.  Que vous vouliez utiliser RxJava 2 dans vos applications ou fournir une version réactive de votre librairie, il est fait pour vous.</p>\n<p>Technologies utilisées : Java, RX Java 2, Eclipse Vert.x\nPrérequis : Connaissance de Java 8 (lambda, streams...), un IDE Java, git</p>\n",
          "id": "COM-8600",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/c2e17bc0fce547f7c950e16a2086f2e1bf9d8e19",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Julien Viet"
              },
              "name": "Julien Viet"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/db88cdaca327b515efc60bfc39c7892e0b9d1d59",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Stéphane Épardaud"
              },
              "name": "Stéphane Épardaud"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/e452d5162fbc8c0c94995c26312dec1e8fae9fc8",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Clement Escoffier"
              },
              "name": "Clement Escoffier"
          }],
          "title": "Applications et librairies réactives avec RX Java 2",
          "lang": "fr",
          "summary": "La programmation réactive s’inspire de la programmation fonctionnelle et des flux de données. En d’autres termes, c’est déroutant… \r\n\r\nRX Java 2 est une librairie Java qui implémente les concepts de la programmation réactive.  Dans ce lab nous apprendrons à utiliser RX Java 2, les concepts, les opérateurs, et évidemment les bonnes pratiques. Nous verrons aussi comment RX Java 2 simplifie la concurrence, la tolérance aux pannes et la robustesse. Mais attention, RX Java 2 n’est pas une baguette magique. Nous parlerons aussi des limites et comment les contourner.  \r\n\r\nCe lab présente également la création de librairies réactives avec RX Java 2. Avec la mouvance réactive, de nombreuses librairies bloquantes et synchrones ne sont plus utilisables. \r\n\r\nBref, ce lab couvre tout ce dont vous avez besoin pour commencer vos développements réactifs.  Que vous vouliez utiliser RxJava 2 dans vos applications ou fournir une version réactive de votre librairie, il est fait pour vous.\r\n\r\nTechnologies utilisées : Java, RX Java 2, Eclipse Vert.x\r\nPrérequis : Connaissance de Java 8 (lambda, streams...), un IDE Java, git"
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 32,
      "roomName": "Neuilly 212-213M Lab",
      "slotId": "lab_neu_212_213_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "neu_232_232",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "classroom",
      "talk": {
          "trackId": "wm",
          "talkType": "Hands-on Labs",
          "track": "Web, JS, HTML5 et UX",
          "summaryAsHtml": "<p>Quels sont les concepts de base pour la cartographie ? Où trouver les données ? Venez construire avec nous un site de cartographie, avec un plan, des itinéraires et des points d'intérêt, le tout avec uniquement des briques open source.</p>\n<p>Pré-requis : un ordinateur avec docker</p>\n",
          "id": "WJU-4345",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/f8155905ca51f443550cc5ef0dd485d9639c7937",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Ulrich VACHON"
              },
              "name": "Ulrich VACHON"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/7130cb0dc29859594074946c9104d26ad1a4eb3c",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Rogelio Canedo"
              },
              "name": "Rogelio Canedo"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/516794326b1d9c160bd572c40ae353f86dd7b478",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Guillaume Rose"
              },
              "name": "Guillaume Rose"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/43094674f4188c5e4a121d85ed52edc83ea9b97d",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Eric Lefevre-Ardant"
              },
              "name": "Eric Lefevre-Ardant"
          }],
          "title": "Reconstruire Google Maps en moins de 3 heures",
          "lang": "fr",
          "summary": "Quels sont les concepts de base pour la cartographie ? Où trouver les données ? Venez construire avec nous un site de cartographie, avec un plan, des itinéraires et des points d'intérêt, le tout avec uniquement des briques open source.\r\n\r\nPré-requis : un ordinateur avec docker"
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 32,
      "roomName": "Neuilly 231-232M Lab",
      "slotId": "lab_neu_232_232_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "neu_234_235",
      "notAllocated": false,
      "fromTimeMillis": 1524051000000,
      "break": null,
      "roomSetup": "classroom",
      "talk": {
          "trackId": "agTest",
          "talkType": "Hands-on Labs",
          "track": "DevOps, Agilité, Méthodologie & Tests",
          "summaryAsHtml": "<p>Votre vie est un gros bordel, vous oubliez des sujets importants, vous procastrinez à tombeau ouvert et <strong>vous vous sentez dépassés</strong>. Non seulement professionnellement, mais votre vie personnelle est encore pire. Ça nous est arrivé aussi. Nous avons trouvé des <strong>techniques pour reprendre le contrôle</strong>. Et nous aimerions partager avec vous ce que nous avons appris. Nous ne sommes pas des gourous ni des experts de la productivité, seulement comme vous des professionnels de l’âge de l’information et des hackers. On s’est juste mis à <strong>hacker notre vie</strong>.</p>\n<p><strong>Getting Things Done, Personal Kanban, Inbox Zero</strong>. Ces techniques partagent toutes une fondation commune. Venez dans ce lab pour faire l’expérience de ces techniques et peut être faire votre premier pas vers une vie plus organisée et plus zen.</p>\n",
          "id": "INR-2511",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/419d72a808d490afdf5721dc44e29c64fa02524c",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Emmanuel Bernard"
              },
              "name": "Emmanuel Bernard"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/70cd7d11368e12156748bebc1600c8b50eeac233",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Guillaume LOURS"
              },
              "name": "Guillaume LOURS"
          }],
          "title": "Lab productivité personnelle: l’optimisation de soi",
          "lang": "fr",
          "summary": "Votre vie est un gros bordel, vous oubliez des sujets importants, vous procastrinez à tombeau ouvert et **vous vous sentez dépassés**. Non seulement professionnellement, mais votre vie personnelle est encore pire. Ça nous est arrivé aussi. Nous avons trouvé des **techniques pour reprendre le contrôle**. Et nous aimerions partager avec vous ce que nous avons appris. Nous ne sommes pas des gourous ni des experts de la productivité, seulement comme vous des professionnels de l’âge de l’information et des hackers. On s’est juste mis à **hacker notre vie**.\r\n\r\n**Getting Things Done, Personal Kanban, Inbox Zero**. Ces techniques partagent toutes une fondation commune. Venez dans ce lab pour faire l’expérience de ces techniques et peut être faire votre premier pas vers une vie plus organisée et plus zen."
      },
      "fromTime": "13:30",
      "toTimeMillis": 1524061800000,
      "toTime": "16:30",
      "roomCapacity": 32,
      "roomName": "Neuilly 234_234M Lab",
      "slotId": "lab_neu_234_235_wednesday_18_13h30_16h30",
      "day": "wednesday"
  }, {
      "roomId": "a_hall",
      "notAllocated": false,
      "fromTimeMillis": 1524061800000,
      "break": {
          "id": "coffee",
          "nameEN": "Coffee Break",
          "nameFR": "Pause café",
          "room": {
              "id": "a_hall",
              "name": "Exhibition floor",
              "capacity": 2300,
              "setup": "special",
              "recorded": ""
          }
      },
      "roomSetup": "special",
      "talk": null,
      "fromTime": "16:30",
      "toTimeMillis": 1524064200000,
      "toTime": "17:10",
      "roomCapacity": 2300,
      "roomName": "Exhibition floor",
      "slotId": "coffee_wednesday_18_16h30_17h10",
      "day": "wednesday"
  }, {
      "roomId": "b_amphi",
      "notAllocated": false,
      "fromTimeMillis": 1524064200000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "java",
          "talkType": "Tools-in-Action",
          "track": "Java, JVM, Javas SE/EE",
          "summaryAsHtml": "<p>L'un des objectifs principaux de JHipster 5 était la migration à Spring Boot 2. Cela nous a pris plusieurs mois, car Spring Boot 2 propose de nombreuses nouvelles fonctionnalités, et ajoute aussi son lot de changements d'APIs.</p>\n<p>La plupart de ces évolutions semblent simples, mais si on les combine toutes sur une vraie application, la tâche devient subitement très ardue!</p>\n<p>Cette session est un retour d'expérience de la migration de plusieurs applications: du monolithe simple à une architecture \"full microservices\" avec OpenID Connect.</p>\n<p>Nous y verrons les gains et les pertes, mais aussi les nouvelles fonctionnalités et améliorations de performance auxquelles vous pouvez vous attendre sur vos propres applications.</p>\n",
          "id": "WUB-6095",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/de3da7575830a16e641d43204cab18b671809dec",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Julien Dubois"
              },
              "name": "Julien Dubois"
          }],
          "title": "Migrer à Spring Boot 2 lorsque l'on a une \"vraie\" application",
          "lang": "fr",
          "summary": "L'un des objectifs principaux de JHipster 5 était la migration à Spring Boot 2. Cela nous a pris plusieurs mois, car Spring Boot 2 propose de nombreuses nouvelles fonctionnalités, et ajoute aussi son lot de changements d'APIs.\r\n\r\nLa plupart de ces évolutions semblent simples, mais si on les combine toutes sur une vraie application, la tâche devient subitement très ardue!\r\n\r\nCette session est un retour d'expérience de la migration de plusieurs applications: du monolithe simple à une architecture \"full microservices\" avec OpenID Connect.\r\n\r\nNous y verrons les gains et les pertes, mais aussi les nouvelles fonctionnalités et améliorations de performance auxquelles vous pouvez vous attendre sur vos propres applications."
      },
      "fromTime": "17:10",
      "toTimeMillis": 1524066000000,
      "toTime": "17:40",
      "roomCapacity": 826,
      "roomName": "Amphi Bleu",
      "slotId": "tia_b_amphi_wednesday_18_17h10_17h40",
      "day": "wednesday"
  }, {
      "roomId": "f_neu251",
      "notAllocated": false,
      "fromTimeMillis": 1524064200000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "cldops",
          "talkType": "Tools-in-Action",
          "track": "Cloud, Container et Scalabilité",
          "summaryAsHtml": "<p>Ca vous arrive parfois de lutter sur du code d’un de vos collègues ? Combien de fois avez vous cherché a pair-programmer avec votre IDE comme dans un Google Docs ?\nCette session présentera les nouvelles fonctionnalités de collaboration entre Eclipse Che, Atom et d’autres éditeurs. L’extension de pair-programming basée sur la toute récente library Atom Teletype permet de connecter plusieurs utilisateurs Che et Atom sur le même fichier et en temps réel.\nPréparez vos navigateurs pour rejoindre notre session live de pair-programming !!!</p>\n",
          "id": "TCG-9626",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/9cc1f709d50990edc85681aa75b397d11062d76f",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Sun TAN"
              },
              "name": "Sun TAN"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/3102bb500b44d7043b3f063ab6076716978f3746",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Stévan Le Meur"
              },
              "name": "Stévan Le Meur"
          }],
          "title": "Pair Programming dans le cloud avec Eclipse Che et Atom Teletype ￼",
          "lang": "fr",
          "summary": "Ca vous arrive parfois de lutter sur du code d’un de vos collègues ? Combien de fois avez vous cherché a pair-programmer avec votre IDE comme dans un Google Docs ?\r\nCette session présentera les nouvelles fonctionnalités de collaboration entre Eclipse Che, Atom et d’autres éditeurs. L’extension de pair-programming basée sur la toute récente library Atom Teletype permet de connecter plusieurs utilisateurs Che et Atom sur le même fichier et en temps réel.\r\nPréparez vos navigateurs pour rejoindre notre session live de pair-programming !!!"
      },
      "fromTime": "17:10",
      "toTimeMillis": 1524066000000,
      "toTime": "17:40",
      "roomCapacity": 220,
      "roomName": "Neuilly 251",
      "slotId": "tia_f_neu251_wednesday_18_17h10_17h40",
      "day": "wednesday"
  }, {
      "roomId": "d_par241",
      "notAllocated": false,
      "fromTimeMillis": 1524064200000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "wm",
          "talkType": "Tools-in-Action",
          "track": "Web, JS, HTML5 et UX",
          "summaryAsHtml": "<p>Nous verrons comment utiliser les <em>Json Web Token</em> et les <em>Macaroons</em> pour réaliser un mécanisme d'authentification et d'autorisation décentralisée.</p>\n",
          "id": "OOE-8681",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/cb7161e4ff7b47af2cbc4a31f48b2d1cb93248ed",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Julien Tanguy"
              },
              "name": "Julien Tanguy"
          }],
          "title": "Authentification et autorisation décentralisée avec JWT et Macaroons",
          "lang": "fr",
          "summary": "Nous verrons comment utiliser les _Json Web Token_ et les _Macaroons_ pour réaliser un mécanisme d'authentification et d'autorisation décentralisée."
      },
      "fromTime": "17:10",
      "toTimeMillis": 1524066000000,
      "toTime": "17:40",
      "roomCapacity": 220,
      "roomName": "Paris 241",
      "slotId": "tia_d_par241_wednesday_18_17h10_17h40",
      "day": "wednesday"
  }, {
      "roomId": "e_neu252",
      "notAllocated": false,
      "fromTimeMillis": 1524064200000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "agTest",
          "talkType": "Tools-in-Action",
          "track": "DevOps, Agilité, Méthodologie & Tests",
          "summaryAsHtml": "<p>Concourse est un outil de continuous integration &amp; delivery, créé pour le monde \"cloud native\", en s'appuyant sur des outils et des pratiques modernes. A vous les containers, les jobs stateless et l'intégration de ressources externes. L'intégration continue nous a donné des <em>reproducible builds</em>, place maintenant à la <em>reproducible CI</em>.</p>\n<p>Concourse a été créé chez Pivotal en 2014, pour les besoins de CI des équipes développant Cloud Foundry. Elles sont reparties de zéro pour dépasser les problèmes des solutions existantes, comme Jenkins ou Travis CI. C'est aujourd'hui la solution de CI #1 en interne comme chez nos clients, pour l'intégration comme pour le déploiement continu sur de multiples IaaS (AWS, GCP, Azure…). Pour se faire une idée, voici <a href=\"https://wings.concourse-ci.org/teams/topher-concourse/pipelines/%F0%9F%8D%95PIZZA%F0%9F%8D%95\">un petit exemple de pipeline</a>.</p>\n",
          "id": "CGV-7812",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/ac20fd9e72c85b7e9cc244cbc0a370982fafbe9a",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Daniel Garnier-Moiroux"
              },
              "name": "Daniel Garnier-Moiroux"
          }],
          "title": "Concourse, l'intégration continue Cloud Native",
          "lang": "fr",
          "summary": "Concourse est un outil de continuous integration & delivery, créé pour le monde \"cloud native\", en s'appuyant sur des outils et des pratiques modernes. A vous les containers, les jobs stateless et l'intégration de ressources externes. L'intégration continue nous a donné des *reproducible builds*, place maintenant à la *reproducible CI*.\r\n\r\nConcourse a été créé chez Pivotal en 2014, pour les besoins de CI des équipes développant Cloud Foundry. Elles sont reparties de zéro pour dépasser les problèmes des solutions existantes, comme Jenkins ou Travis CI. C'est aujourd'hui la solution de CI #1 en interne comme chez nos clients, pour l'intégration comme pour le déploiement continu sur de multiples IaaS (AWS, GCP, Azure…). Pour se faire une idée, voici [un petit exemple de pipeline](https://wings.concourse-ci.org/teams/topher-concourse/pipelines/%F0%9F%8D%95PIZZA%F0%9F%8D%95)."
      },
      "fromTime": "17:10",
      "toTimeMillis": 1524066000000,
      "toTime": "17:40",
      "roomCapacity": 380,
      "roomName": "Neuilly 252 AB",
      "slotId": "tia_e_neu252_wednesday_18_17h10_17h40",
      "day": "wednesday"
  }, {
      "roomId": "par242AB",
      "notAllocated": false,
      "fromTimeMillis": 1524064200000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "archisec",
          "talkType": "Tools-in-Action",
          "track": "Architecture, Performance et Securité",
          "summaryAsHtml": "<p>Avant, tout était simple. On lançait toutes nos application sur la même machine. Tout le monde écoutait sur localhost:808X et on était content. Maintenant, ton CTO te demande de tout mettre dans des conteneurs, parce que « ça va plus vite à packager et c’est microservices-ready ! »</p>\n<p>Et là, tu commences à flipper parce qu’il faut faire du réseau. Et toi, pendant les cours sur IPv4 et TCP, bah tu dormais, bercé·e par le ballet des trames ethernet.</p>\n<p>Dans ce Tools In Action, nous allons décortiquer différents outils. Voir comment les utiliser ensemble pour que les paquets aillent où on veut qu’ils aillent.</p>\n",
          "id": "WPK-5684",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/7eeec7105233342959a698c0aeedb4aa3395ec0b",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Julien Durillon"
              },
              "name": "Julien Durillon"
          }],
          "title": "À tables ! Router efficacement avec Iproute et Netfilter !",
          "lang": "fr",
          "summary": "Avant, tout était simple. On lançait toutes nos application sur la même machine. Tout le monde écoutait sur localhost:808X et on était content. Maintenant, ton CTO te demande de tout mettre dans des conteneurs, parce que « ça va plus vite à packager et c’est microservices-ready ! »\r\n\r\nEt là, tu commences à flipper parce qu’il faut faire du réseau. Et toi, pendant les cours sur IPv4 et TCP, bah tu dormais, bercé·e par le ballet des trames ethernet.\r\n\r\nDans ce Tools In Action, nous allons décortiquer différents outils. Voir comment les utiliser ensemble pour que les paquets aillent où on veut qu’ils aillent."
      },
      "fromTime": "17:10",
      "toTimeMillis": 1524066000000,
      "toTime": "17:40",
      "roomCapacity": 280,
      "roomName": "Paris 242-AB",
      "slotId": "tia_par242AB_wednesday_18_17h10_17h40",
      "day": "wednesday"
  }, {
      "roomId": "par243_t",
      "notAllocated": false,
      "fromTimeMillis": 1524064200000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "mobile",
          "talkType": "Tools-in-Action",
          "track": "Mobile, IoT",
          "summaryAsHtml": "<p>L'autonomie est un critère important pour les utilisateurs mobiles.  Mais elle est très rarement mesurée par les développeurs d'application ou même de site web. On ne découvre des problèmes que trop tard (ou jamais).</p>\n<p>Même si le constructeur n’est pas directement responsable, l’utilisateur associera la faible autonomie de son appareil avec la marque et le modèle du téléphone : “71% des utilisateurs considèrent que la qualité d’une application peut influencer sur l’image de la marque” (Source : baromètre des usages mobiles ,Juin 2017, EBG)</p>\n<p>Il est donc de l’intérêt des constructeurs d’encourager les éditeurs d’applications à maîtriser la consommation de batterie de leurs apps. De même, il est de l’intérêt de Google de promouvoir des applications vertueuses sur le Play Store, afin de donner une image positive de l’écosystème Android face à celui d’Apple… et réciproquement. C'est pourquoi les applications énergivores sont notifier à l'utilisateur.</p>\n<p>Nous verrons lors de cette session comment mesurer et limiter la consommation d'énergie de vos applications Android avec les outils du SDK (Battery historian, API de mesure) et éviter que l'utilisateur soit notifié d'une surconsommation !</p>\n",
          "id": "OFE-3784",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/a65e879f5f6ebd30bd6cbf2b09785dfd3c817527",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Olivier Philippot"
              },
              "name": "Olivier Philippot"
          }],
          "title": "Mesurer et optimiser la consommation d'énergie de votre application mobile",
          "lang": "fr",
          "summary": "L'autonomie est un critère important pour les utilisateurs mobiles.  Mais elle est très rarement mesurée par les développeurs d'application ou même de site web. On ne découvre des problèmes que trop tard (ou jamais). \r\n\r\nMême si le constructeur n’est pas directement responsable, l’utilisateur associera la faible autonomie de son appareil avec la marque et le modèle du téléphone : “71% des utilisateurs considèrent que la qualité d’une application peut influencer sur l’image de la marque” (Source : baromètre des usages mobiles ,Juin 2017, EBG)\r\n\r\nIl est donc de l’intérêt des constructeurs d’encourager les éditeurs d’applications à maîtriser la consommation de batterie de leurs apps. De même, il est de l’intérêt de Google de promouvoir des applications vertueuses sur le Play Store, afin de donner une image positive de l’écosystème Android face à celui d’Apple… et réciproquement. C'est pourquoi les applications énergivores sont notifier à l'utilisateur.\r\n\r\nNous verrons lors de cette session comment mesurer et limiter la consommation d'énergie de vos applications Android avec les outils du SDK (Battery historian, API de mesure) et éviter que l'utilisateur soit notifié d'une surconsommation !"
      },
      "fromTime": "17:10",
      "toTimeMillis": 1524066000000,
      "toTime": "17:40",
      "roomCapacity": 120,
      "roomName": "Paris 243",
      "slotId": "tia_par243_t_wednesday_18_17h10_17h40",
      "day": "wednesday"
  }, {
      "roomId": "neu253_t",
      "notAllocated": false,
      "fromTimeMillis": 1524064200000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "mobile",
          "talkType": "Tools-in-Action",
          "track": "Mobile, IoT",
          "summaryAsHtml": "<p>Au début il y'avait .Net Framework, puis vinrent entre autre Silverlight (paix à son âme) .Net Core, UWP, Xamarin and so on ...<br  />\n<strong>.Net Standard 2.0</strong> permet de standardiser les API et nous sort de l'enfer des <strong>PCL</strong>.<br  />\nNous verrons dans un premier temps ce qu'est .Net Standard et pourquoi vous devez aujourd'hui vous y intéresser de trés trés prés !<br  />\nEnsuite, au travers d'un projet OSS, <strong>Dotmim.Sync</strong> nous parlerons de synchronisation de base de données.<br  />\nOu comment, en 4 lignes de codes, vous pouvez synchroniser une base de données serveur (comme <strong>SQL Server</strong> ou <strong>MySQL</strong>) avec une base de données cliente (comme <strong>SQLite</strong>) embarquée dans une application mobile, avec une gestion fine des changements ou des conflits.<br  />\nEt comme nous sommes sous <strong>.Net Standard</strong>, vous pourrez utiliser ce framework un peu partout ;)</p>\n",
          "id": "KMN-4999",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/0f290b7af448fc1401eee1921e06fc60e1ce3b77",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Sébastien Pertus"
              },
              "name": "Sébastien Pertus"
          }],
          "title": ".Net Standard 2.0 : Késako ? et retour d'expériences d'un projet OSS de synchronisation de BDD relationnelles: Dotmim.Sync ",
          "lang": "fr",
          "summary": "Au début il y'avait .Net Framework, puis vinrent entre autre Silverlight (paix à son âme) .Net Core, UWP, Xamarin and so on ...     \n**.Net Standard 2.0** permet de standardiser les API et nous sort de l'enfer des **PCL**.   \nNous verrons dans un premier temps ce qu'est .Net Standard et pourquoi vous devez aujourd'hui vous y intéresser de trés trés prés !     \nEnsuite, au travers d'un projet OSS, **Dotmim.Sync** nous parlerons de synchronisation de base de données.    \nOu comment, en 4 lignes de codes, vous pouvez synchroniser une base de données serveur (comme **SQL Server** ou **MySQL**) avec une base de données cliente (comme **SQLite**) embarquée dans une application mobile, avec une gestion fine des changements ou des conflits.   \nEt comme nous sommes sous **.Net Standard**, vous pourrez utiliser ce framework un peu partout ;)\n"
      },
      "fromTime": "17:10",
      "toTimeMillis": 1524066000000,
      "toTime": "17:40",
      "roomCapacity": 120,
      "roomName": "Neuilly 253",
      "slotId": "tia_neu253_t_wednesday_18_17h10_17h40",
      "day": "wednesday"
  }, {
      "roomId": "b_amphi",
      "notAllocated": false,
      "fromTimeMillis": 1524066900000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "agTest",
          "talkType": "Tools-in-Action",
          "track": "DevOps, Agilité, Méthodologie & Tests",
          "summaryAsHtml": "<p>On ne discute plus aujourd’hui le besoin de collecter, analyser et grapher les métriques issues de nos applications.</p>\n<p>Que ce soit mon application Java, le système, un serveur web ou même une solution custom, Prometheus propose des solutions simples à mettre en place afin de pouvoir exploiter ces informations et réagir. Dans ce tools in action, je vous propose un aperçu des possibilités de cet outil : en quoi diffère-t-il des autres solutions ? Comment l’installer ? comment monitorer ? Et comment exploiter ses métriques notamment via Grafana ?</p>\n",
          "id": "UKH-5807",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/b47a61591a2f2f83a28cee8f0c65337b6f749046",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Ivan Beauvais"
              },
              "name": "Ivan Beauvais"
          }],
          "title": "Prometheus un outil pour les monitorer tous",
          "lang": "fr",
          "summary": "On ne discute plus aujourd’hui le besoin de collecter, analyser et grapher les métriques issues de nos applications.\r\n\r\nQue ce soit mon application Java, le système, un serveur web ou même une solution custom, Prometheus propose des solutions simples à mettre en place afin de pouvoir exploiter ces informations et réagir. Dans ce tools in action, je vous propose un aperçu des possibilités de cet outil : en quoi diffère-t-il des autres solutions ? Comment l’installer ? comment monitorer ? Et comment exploiter ses métriques notamment via Grafana ?"
      },
      "fromTime": "17:55",
      "toTimeMillis": 1524068700000,
      "toTime": "18:25",
      "roomCapacity": 826,
      "roomName": "Amphi Bleu",
      "slotId": "tia_b_amphi_wednesday_18_17h55_18h25",
      "day": "wednesday"
  }, {
      "roomId": "f_neu251",
      "notAllocated": false,
      "fromTimeMillis": 1524066900000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "cldops",
          "talkType": "Tools-in-Action",
          "track": "Cloud, Container et Scalabilité",
          "summaryAsHtml": "<p>Pourquoi, quand vous demandez à mettre en production une application java containérisée avec docker, vos ops font soudain la grimace ? Pourquoi vos containers, qui marchaient si bien sur votre PC, crashent si souvent en production ; et aussi pourquoi la RAM des noeuds se met-elle à swaper autant ?</p>\n<p>Ces problèmes nous les avons rencontrés et nous vous proposons de partager ensemble nos découvertes et nos réflexions sur l'utilisation combinée de java et de docker.</p>\n<p>Ensemble creusons la RAM, le CPU et les différentes options de gestion de memoire de la JVM pour obtenir le bon fonctionnement de notre application dans un containeur.</p>\n",
          "id": "GJX-5094",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/0867c4e2182ef84e2dfcd412e33e01a9bc98dac2",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Charles Sabourdin"
              },
              "name": "Charles Sabourdin"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/69b4032195e405af7ad127ec72cc0b0c3243a6bb",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Jean-Christophe Sirot"
              },
              "name": "Jean-Christophe Sirot"
          }],
          "title": "Java dans Docker : Bonnes pratiques",
          "lang": "fr",
          "summary": "Pourquoi, quand vous demandez à mettre en production une application java containérisée avec docker, vos ops font soudain la grimace ? Pourquoi vos containers, qui marchaient si bien sur votre PC, crashent si souvent en production ; et aussi pourquoi la RAM des noeuds se met-elle à swaper autant ? \r\n\r\n\r\nCes problèmes nous les avons rencontrés et nous vous proposons de partager ensemble nos découvertes et nos réflexions sur l'utilisation combinée de java et de docker.\r\n\r\n\r\nEnsemble creusons la RAM, le CPU et les différentes options de gestion de memoire de la JVM pour obtenir le bon fonctionnement de notre application dans un containeur."
      },
      "fromTime": "17:55",
      "toTimeMillis": 1524068700000,
      "toTime": "18:25",
      "roomCapacity": 220,
      "roomName": "Neuilly 251",
      "slotId": "tia_f_neu251_wednesday_18_17h55_18h25",
      "day": "wednesday"
  }, {
      "roomId": "d_par241",
      "notAllocated": false,
      "fromTimeMillis": 1524066900000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "java",
          "talkType": "Tools-in-Action",
          "track": "Java, JVM, Javas SE/EE",
          "summaryAsHtml": "<p>async-profiler est un profileur peu connu et pourtant terriblement efficace pour rechercher les problèmes de performance dans des applications java aussi bien lors des tests qu’en production.\nIl permet d’analyser la consommation cpu, la pression réalisée sur le GC, la contention dûe à des locks et de visualiser les résultats sous forme de flamgraph.\nOn regardera sous le capot, et on expliquera dans les grandes lignes son fonctionnement, cela permettra de mieux appréhender les résultats qu'il nous renvoie.\nEnfin, nous verrons comment l'intégrer dans jmh de manière à pouvoir en profiter dans les phases de développement.</p>\n",
          "id": "TLE-8752",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/d780703b65a05868bb5ee6fd0b518fa653a30d49",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Nicolas Peters"
              },
              "name": "Nicolas Peters"
          }],
          "title": "async-profiler, le profiler qu'il vous faut !",
          "lang": "fr",
          "summary": "async-profiler est un profileur peu connu et pourtant terriblement efficace pour rechercher les problèmes de performance dans des applications java aussi bien lors des tests qu’en production.\r\nIl permet d’analyser la consommation cpu, la pression réalisée sur le GC, la contention dûe à des locks et de visualiser les résultats sous forme de flamgraph.\r\nOn regardera sous le capot, et on expliquera dans les grandes lignes son fonctionnement, cela permettra de mieux appréhender les résultats qu'il nous renvoie.\r\nEnfin, nous verrons comment l'intégrer dans jmh de manière à pouvoir en profiter dans les phases de développement. \r\n"
      },
      "fromTime": "17:55",
      "toTimeMillis": 1524068700000,
      "toTime": "18:25",
      "roomCapacity": 220,
      "roomName": "Paris 241",
      "slotId": "tia_d_par241_wednesday_18_17h55_18h25",
      "day": "wednesday"
  }, {
      "roomId": "e_neu252",
      "notAllocated": false,
      "fromTimeMillis": 1524066900000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "bigd",
          "talkType": "Tools-in-Action",
          "track": "Big Data, Machine Learning, IA & Analytics",
          "summaryAsHtml": "<p>Apache Kafka ne se résume pas aux brokers, il y a tout un écosystème open-source qui gravite autour.\nJe vous propose ainsi de découvrir les principaux composants comme Kafka Streams, KSQL, Kafka Connect, Rest proxy, Schema Registry, MirrorMaker, Interceptors, etc.</p>\n",
          "id": "AXL-6356",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/eb1223f6cde5906f7ac2fb5efd83375a56880ad8",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Florent Ramière"
              },
              "name": "Florent Ramière"
          }],
          "title": "Au delà des brokers : un tour de l'environnement Kafka",
          "lang": "fr",
          "summary": "Apache Kafka ne se résume pas aux brokers, il y a tout un écosystème open-source qui gravite autour.\r\nJe vous propose ainsi de découvrir les principaux composants comme Kafka Streams, KSQL, Kafka Connect, Rest proxy, Schema Registry, MirrorMaker, Interceptors, etc."
      },
      "fromTime": "17:55",
      "toTimeMillis": 1524068700000,
      "toTime": "18:25",
      "roomCapacity": 380,
      "roomName": "Neuilly 252 AB",
      "slotId": "tia_e_neu252_wednesday_18_17h55_18h25",
      "day": "wednesday"
  }, {
      "roomId": "par242AB",
      "notAllocated": false,
      "fromTimeMillis": 1524066900000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "wm",
          "talkType": "Tools-in-Action",
          "track": "Web, JS, HTML5 et UX",
          "summaryAsHtml": "<p>Lorsqu'on commence à travailler avec des Web Components, on regarde souvent webcomponents.org, agréablement surpris pour la quantité (et la qualité) des composants disponibles. On assemble ces composants et on construit des applis un peu comme on construit un château avec des pièces de LEGO.</p>\n<p>Ce n'est que lorsqu'on approfondit et on commence à créer des applications plus exigeantes, avec des fonctionnalités plus exotiques,  qu'on se rend compte qu'il y a quand même des lacunes, et que des fois il n'y a pas de web component pour faire ça. Ou plutôt il n'y en a pas encore…</p>\n<p>Dans ce talks je vais vous montrer comment il est facile de créer un composant web enveloppant une bibliothèque JavaScript quelconque, et comment ce web component est aussi simple à utiliser que n'importe quel autre élément dans le catalogue. Et pour y parvenir, je vais me baser sur deux vrais exemples.</p>\n",
          "id": "ZWV-9031",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/73ebde8b6affccfdd3cdfceebac253655a224f63",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Horacio Gonzalez"
              },
              "name": "Horacio Gonzalez"
          }],
          "title": "Mais il n'y a pas de composant pour ça !",
          "lang": "fr",
          "summary": "Lorsqu'on commence à travailler avec des Web Components, on regarde souvent webcomponents.org, agréablement surpris pour la quantité (et la qualité) des composants disponibles. On assemble ces composants et on construit des applis un peu comme on construit un château avec des pièces de LEGO.\r\n\r\nCe n'est que lorsqu'on approfondit et on commence à créer des applications plus exigeantes, avec des fonctionnalités plus exotiques,  qu'on se rend compte qu'il y a quand même des lacunes, et que des fois il n'y a pas de web component pour faire ça. Ou plutôt il n'y en a pas encore…\r\n\r\nDans ce talks je vais vous montrer comment il est facile de créer un composant web enveloppant une bibliothèque JavaScript quelconque, et comment ce web component est aussi simple à utiliser que n'importe quel autre élément dans le catalogue. Et pour y parvenir, je vais me baser sur deux vrais exemples.\r\n"
      },
      "fromTime": "17:55",
      "toTimeMillis": 1524068700000,
      "toTime": "18:25",
      "roomCapacity": 280,
      "roomName": "Paris 242-AB",
      "slotId": "tia_par242AB_wednesday_18_17h55_18h25",
      "day": "wednesday"
  }, {
      "roomId": "par243_t",
      "notAllocated": false,
      "fromTimeMillis": 1524066900000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "lang",
          "talkType": "Tools-in-Action",
          "track": "Langages alternatifs",
          "summaryAsHtml": "<p>L'outillage c'est fondamental, et outiller un processus avec un petit exécutable c'est super efficace.\nAprès avoir beaucoup utilisé Bash, python et node, il est temps de passer à plus robuste (mais tout aussi rapide à coder). On va voir comment faire un petit outil en ligne de commande avec Rust, vite et bien.</p>\n<ul>\n<li>parsing des arguments &amp; flags</li>\n<li>requêtes HTTP</li>\n<li>shell out</li>\n<li>compilation et distribution</li>\n</ul>\n",
          "id": "XPB-8554",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/76606cd0-6261-44b2-ad0e-3518a0e66995",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Clément Delafargue"
              },
              "name": "Clément Delafargue"
          }],
          "title": "Créer un outil CLI en 2-2 avec Rust",
          "lang": "fr",
          "summary": "L'outillage c'est fondamental, et outiller un processus avec un petit exécutable c'est super efficace.\r\nAprès avoir beaucoup utilisé Bash, python et node, il est temps de passer à plus robuste (mais tout aussi rapide à coder). On va voir comment faire un petit outil en ligne de commande avec Rust, vite et bien.\r\n\r\n- parsing des arguments & flags\r\n- requêtes HTTP\r\n- shell out\r\n- compilation et distribution"
      },
      "fromTime": "17:55",
      "toTimeMillis": 1524068700000,
      "toTime": "18:25",
      "roomCapacity": 120,
      "roomName": "Paris 243",
      "slotId": "tia_par243_t_wednesday_18_17h55_18h25",
      "day": "wednesday"
  }, {
      "roomId": "neu253_t",
      "notAllocated": false,
      "fromTimeMillis": 1524066900000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "future",
          "talkType": "Tools-in-Action",
          "track": "Future, Robotique",
          "summaryAsHtml": "<p>Il existe un certain nombre d'outils permettant de développer un bot, la plupart sont gratuits mais peu sont open-source.</p>\n<p>Pourtant il est assez simple de développer un bot en moins d'une demi-heure, tournant sur <a href=\"https://developers.facebook.com/docs/messenger-platform\">Facebook Messenger</a> et <a href=\"https://developers.google.com/actions/\">Google Assistant</a> , en utilisant uniquement des outils open-source.</p>\n<p>Le live coding sera effectué en Kotlin à l'aide de la brique open-source <a href=\"https://voyages-sncf-technologies.github.io/tock/fr/\">Tock</a> qui a notamment été utilisé pour développer le <a href=\"https://www.oui.sncf/bot/\">OUIbot</a>.</p>\n",
          "id": "ABR-6811",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/27d14e81b6b86fa3e2900504df80a173e4755551",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Julien Buret"
              },
              "name": "Julien Buret"
          }],
          "title": "Code ton bot - développer un bot sur Messenger et Google Assistant en 30 min avec Tock",
          "lang": "fr",
          "summary": "Il existe un certain nombre d'outils permettant de développer un bot, la plupart sont gratuits mais peu sont open-source.\r\n\r\nPourtant il est assez simple de développer un bot en moins d'une demi-heure, tournant sur [Facebook Messenger](https://developers.facebook.com/docs/messenger-platform) et [Google Assistant](https://developers.google.com/actions/) , en utilisant uniquement des outils open-source. \r\n\r\nLe live coding sera effectué en Kotlin à l'aide de la brique open-source [Tock](https://voyages-sncf-technologies.github.io/tock/fr/) qui a notamment été utilisé pour développer le [OUIbot](https://www.oui.sncf/bot/).\r\n"
      },
      "fromTime": "17:55",
      "toTimeMillis": 1524068700000,
      "toTime": "18:25",
      "roomCapacity": 120,
      "roomName": "Neuilly 253",
      "slotId": "tia_neu253_t_wednesday_18_17h55_18h25",
      "day": "wednesday"
  }, {
      "roomId": "b_amphi",
      "notAllocated": false,
      "fromTimeMillis": 1524069600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "agTest",
          "talkType": "Tools-in-Action",
          "track": "DevOps, Agilité, Méthodologie & Tests",
          "summaryAsHtml": "<p>Vous avez une application distribuée? des microservices? Du JSON ? Du REST? Du Kafka? Du Kubernetes? Du Docker? Savez-vous qu’il existe une discipline qui n’a qu’un seul but: Casser votre application.</p>\n<p>Dans cette discipline tous les coups sont permis : tuer des parties de l’application, couper le réseau, injecter des mauvaises réponses, modifier la latence, démarrer des milliers de faux clients… Dans cette présentation, nous vous montrons comment appliquer le Chaos Engineering pour « tenter » de casser votre application, les outils, les méthodes, l’exploitation des résultats, et évidemment l’amélioration de votre application. A la fin de cette présentation, vous n’aurez qu’une question : Mais pourquoi est-il aussi méchant?</p>\n",
          "id": "QKX-8185",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/e452d5162fbc8c0c94995c26312dec1e8fae9fc8",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Clement Escoffier"
              },
              "name": "Clement Escoffier"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/c2e17bc0fce547f7c950e16a2086f2e1bf9d8e19",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Julien Viet"
              },
              "name": "Julien Viet"
          }],
          "title": "Chaos Engineering – L’art de tout casser",
          "lang": "fr",
          "summary": "Vous avez une application distribuée? des microservices? Du JSON ? Du REST? Du Kafka? Du Kubernetes? Du Docker? Savez-vous qu’il existe une discipline qui n’a qu’un seul but: Casser votre application. \r\n\r\nDans cette discipline tous les coups sont permis : tuer des parties de l’application, couper le réseau, injecter des mauvaises réponses, modifier la latence, démarrer des milliers de faux clients… Dans cette présentation, nous vous montrons comment appliquer le Chaos Engineering pour « tenter » de casser votre application, les outils, les méthodes, l’exploitation des résultats, et évidemment l’amélioration de votre application. A la fin de cette présentation, vous n’aurez qu’une question : Mais pourquoi est-il aussi méchant?\r\n"
      },
      "fromTime": "18:40",
      "toTimeMillis": 1524071400000,
      "toTime": "19:10",
      "roomCapacity": 826,
      "roomName": "Amphi Bleu",
      "slotId": "tia_b_amphi_wednesday_18_18h40_19h10",
      "day": "wednesday"
  }, {
      "roomId": "f_neu251",
      "notAllocated": false,
      "fromTimeMillis": 1524069600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "wm",
          "talkType": "Tools-in-Action",
          "track": "Web, JS, HTML5 et UX",
          "summaryAsHtml": "<p>L'idée de ce talk en duo est de présenter une série de bonnes pratiques / tips and tricks pour améliorer la performance d'un site web grâce à l'outil open source lighthouse:\n- performance\n- progressive web app\n- accessibilité\n- autres bonnes pratiques.\nLa présentation démarre par la génération d'un blog statique , le lancement d'un audit et un score de performance médiocre. Puis une série d'améliorations en mode \"ping pong\"/\"pair programming\" entre Sara et Philippe. Le talk se termine par un résumé des techniques utilisées et bien sûr un excellent score dans lighthouse.</p>\n",
          "id": "WVQ-5236",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/36c9861b3e426178a64609b189f01163ba0ea3b7",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "SARA HARKOUSSE"
              },
              "name": "SARA HARKOUSSE"
          }, {
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/6dd4408eea453917089be404a1233df22818424b",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Philippe Antoine"
              },
              "name": "Philippe Antoine"
          }],
          "title": "Lighthouse: mesurer et améliorer votre performance web",
          "lang": "fr",
          "summary": "L'idée de ce talk en duo est de présenter une série de bonnes pratiques / tips and tricks pour améliorer la performance d'un site web grâce à l'outil open source lighthouse:\r\n- performance\r\n- progressive web app\r\n- accessibilité\r\n- autres bonnes pratiques.\r\nLa présentation démarre par la génération d'un blog statique , le lancement d'un audit et un score de performance médiocre. Puis une série d'améliorations en mode \"ping pong\"/\"pair programming\" entre Sara et Philippe. Le talk se termine par un résumé des techniques utilisées et bien sûr un excellent score dans lighthouse.\r\n"
      },
      "fromTime": "18:40",
      "toTimeMillis": 1524071400000,
      "toTime": "19:10",
      "roomCapacity": 220,
      "roomName": "Neuilly 251",
      "slotId": "tia_f_neu251_wednesday_18_18h40_19h10",
      "day": "wednesday"
  }, {
      "roomId": "d_par241",
      "notAllocated": false,
      "fromTimeMillis": 1524069600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "mobile",
          "talkType": "Tools-in-Action",
          "track": "Mobile, IoT",
          "summaryAsHtml": "<p>En hackant une clé USB de réception TNT, La Radio Logicielle (ou SDR) est à la portée de tous. Il est alors possible d'écouter les balises de positionnement des avions de lignes sur un rayon de plusieurs dizaines de km avec une simple antenne. Voulez vous connaitre le fonctionnement du projet comme <a href=\"https://www.flightradar24.com\">flightradar24</a> ? Nous verrons comment mettre en oeuvre un tel projet avec du matériel grand public et accessible comme un Raspberry Pi.</p>\n",
          "id": "IZZ-7977",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/d52143f1acb50cff49d9b247f46cca3feef17903",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Guillaume Membré"
              },
              "name": "Guillaume Membré"
          }],
          "title": "Suivre les avions avec un raspberry",
          "lang": "fr",
          "summary": "En hackant une clé USB de réception TNT, La Radio Logicielle (ou SDR) est à la portée de tous. Il est alors possible d'écouter les balises de positionnement des avions de lignes sur un rayon de plusieurs dizaines de km avec une simple antenne. Voulez vous connaitre le fonctionnement du projet comme [flightradar24](https://www.flightradar24.com) ? Nous verrons comment mettre en oeuvre un tel projet avec du matériel grand public et accessible comme un Raspberry Pi."
      },
      "fromTime": "18:40",
      "toTimeMillis": 1524071400000,
      "toTime": "19:10",
      "roomCapacity": 220,
      "roomName": "Paris 241",
      "slotId": "tia_d_par241_wednesday_18_18h40_19h10",
      "day": "wednesday"
  }, {
      "roomId": "e_neu252",
      "notAllocated": false,
      "fromTimeMillis": 1524069600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "agTest",
          "talkType": "Tools-in-Action",
          "track": "DevOps, Agilité, Méthodologie & Tests",
          "summaryAsHtml": "<p>Finally the award-winning EclEmma code coverage plug-in for Eclipse became an Eclipse Foundation project and available by default in Java IDE starting from Oxygen! This is a good opportunity to summarize experiences and best practices, such as continuous inspection, for efficient use of the most popular open-source tool to measure Java code coverage that EclEmma integrates into Eclipse IDE - JaCoCo ( http://www.jacoco.org/jacoco/index.html ).</p>\n<p>The presentation will present different use cases and guide you through different integration points that exist beside the Eclipse IDE. We will also talk about interoperability with other tools, common pitfalls and how to prevent them.</p>\n<p>And all this is for you exclusively firsthand by the insiders of the world of code quality - developers of SonarQube, JaCoCo and Eclipse EclEmma.</p>\n",
          "id": "AUN-1366",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/833372482851f0bb8ce5e2055053bae8574a800a",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Evgeny Mandrikov"
              },
              "name": "Evgeny Mandrikov"
          }],
          "title": "Java Code Coverage in Practice",
          "lang": "en",
          "summary": "Finally the award-winning EclEmma code coverage plug-in for Eclipse became an Eclipse Foundation project and available by default in Java IDE starting from Oxygen! This is a good opportunity to summarize experiences and best practices, such as continuous inspection, for efficient use of the most popular open-source tool to measure Java code coverage that EclEmma integrates into Eclipse IDE - JaCoCo ( http://www.jacoco.org/jacoco/index.html ).\r\n\r\nThe presentation will present different use cases and guide you through different integration points that exist beside the Eclipse IDE. We will also talk about interoperability with other tools, common pitfalls and how to prevent them.\r\n\r\nAnd all this is for you exclusively firsthand by the insiders of the world of code quality - developers of SonarQube, JaCoCo and Eclipse EclEmma."
      },
      "fromTime": "18:40",
      "toTimeMillis": 1524071400000,
      "toTime": "19:10",
      "roomCapacity": 380,
      "roomName": "Neuilly 252 AB",
      "slotId": "tia_e_neu252_wednesday_18_18h40_19h10",
      "day": "wednesday"
  }, {
      "roomId": "par242AB",
      "notAllocated": false,
      "fromTimeMillis": 1524069600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "agTest",
          "talkType": "Tools-in-Action",
          "track": "DevOps, Agilité, Méthodologie & Tests",
          "summaryAsHtml": "<p>Assez naturellement, les microservices s’installent dans le paysage informatique moderne.\nSi Docker s’est imposé, du moins pour le moment, la guerre des orchestrateurs fait rage avec en tête Kubernetes qui domine, fort de soutiens solides, mais cela ne veut pas dire que les autres solutions ne sont pas valables, loin de là, Nomad en est un parfait exemple.\nChez Jin nous avons expérimenté Kubernetes en prod comme premier choix, puis nos compétences devops venant à s’enrichir, nous avons été amenés à vouloir comprendre les rouages de nos outils pour mieux gérer nos infrastructure, et capitaliser nos connaissances sur des ressources réutilisables. C’est ainsi que la suite Hashicorp s’est présentée à nous.\nCe talk explique la mise en place de notre cluster construit sur AWS avec la suite Hashicorp (Nomad/Consul/Vault/Terraform), ainsi que les difficultés que nous avons eu pour stabiliser notre système pour fonctionner sur un environnement de production à haute disponibilité.</p>\n",
          "id": "XFJ-2455",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/dfc9a12d0eb4f61fc6f1e24c9c62999f63514fb4",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Jérôme Devoucoux"
              },
              "name": "Jérôme Devoucoux"
          }],
          "title": "Hashicorp Nomad - Une architecture microservices lean en Prod",
          "lang": "fr",
          "summary": "Assez naturellement, les microservices s’installent dans le paysage informatique moderne.\r\nSi Docker s’est imposé, du moins pour le moment, la guerre des orchestrateurs fait rage avec en tête Kubernetes qui domine, fort de soutiens solides, mais cela ne veut pas dire que les autres solutions ne sont pas valables, loin de là, Nomad en est un parfait exemple.\r\nChez Jin nous avons expérimenté Kubernetes en prod comme premier choix, puis nos compétences devops venant à s’enrichir, nous avons été amenés à vouloir comprendre les rouages de nos outils pour mieux gérer nos infrastructure, et capitaliser nos connaissances sur des ressources réutilisables. C’est ainsi que la suite Hashicorp s’est présentée à nous.\r\nCe talk explique la mise en place de notre cluster construit sur AWS avec la suite Hashicorp (Nomad/Consul/Vault/Terraform), ainsi que les difficultés que nous avons eu pour stabiliser notre système pour fonctionner sur un environnement de production à haute disponibilité."
      },
      "fromTime": "18:40",
      "toTimeMillis": 1524071400000,
      "toTime": "19:10",
      "roomCapacity": 280,
      "roomName": "Paris 242-AB",
      "slotId": "tia_par242AB_wednesday_18_18h40_19h10",
      "day": "wednesday"
  }, {
      "roomId": "par243_t",
      "notAllocated": false,
      "fromTimeMillis": 1524069600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "java",
          "talkType": "Tools-in-Action",
          "track": "Java, JVM, Javas SE/EE",
          "summaryAsHtml": "<p>Dans cette séance, je voudrais montrer comment refactoriser un code monolithique en une structure modulaire en utilisant des outils comme :</p>\n<ul>\n<li>IDE capable de faire automatique refactoring : Intellij (https://www.jetbrains.com/idea/download/) ,</li>\n<li>Analyseur de structure : stan4j (http://stan4j.com/),</li>\n<li>Gestion des modules et des dépendances : Apache Maven (https://maven.apache.org/).</li>\n</ul>\n<p>Le refactoring ne dépend pas de la modularité Java 9 (Jigsaw).\nVous pouvez donc l'utiliser même si vous n'êtes pas en Java 9.\nUne fois qu'ils sont dans une structure modulaire, le code devrait être facile à migrer vers la modularité de Java 9.</p>\n",
          "id": "GNB-0331",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/9ac7a6c1aec6e6628c4bfd8325c8fedfda392696",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Bowie Brotosumpeno"
              },
              "name": "Bowie Brotosumpeno"
          }],
          "title": "Du monolithe à la structure modulaire en utilisant Maven, IntelliJ et Stan4J",
          "lang": "fr",
          "summary": "Dans cette séance, je voudrais montrer comment refactoriser un code monolithique en une structure modulaire en utilisant des outils comme :\r\n\r\n* IDE capable de faire automatique refactoring : Intellij (https://www.jetbrains.com/idea/download/) , \r\n* Analyseur de structure : stan4j (http://stan4j.com/), \r\n* Gestion des modules et des dépendances : Apache Maven (https://maven.apache.org/).\r\n\r\nLe refactoring ne dépend pas de la modularité Java 9 (Jigsaw).\r\nVous pouvez donc l'utiliser même si vous n'êtes pas en Java 9.\r\nUne fois qu'ils sont dans une structure modulaire, le code devrait être facile à migrer vers la modularité de Java 9."
      },
      "fromTime": "18:40",
      "toTimeMillis": 1524071400000,
      "toTime": "19:10",
      "roomCapacity": 120,
      "roomName": "Paris 243",
      "slotId": "tia_par243_t_wednesday_18_18h40_19h10",
      "day": "wednesday"
  }, {
      "roomId": "neu253_t",
      "notAllocated": false,
      "fromTimeMillis": 1524069600000,
      "break": null,
      "roomSetup": "theatre",
      "talk": {
          "trackId": "bigd",
          "talkType": "Tools-in-Action",
          "track": "Big Data, Machine Learning, IA & Analytics",
          "summaryAsHtml": "<p>Apache Spark est à l'origine une plateforme généraliste de traitement des données en batch. Mais aujourd'hui grâce au stockage des données en colonnes, la gestion de la mémoire off-heap, la génération de code et le push des prédicats, Spark a beaucoup en commun avec les grands systèmes OLAP optimisés pour l'analyse interactive.</p>\n<p>Le projet Sparkube vient d'être lancé pour explorer cette idée, une extension Spark pour exposer les datasets comme des cubes multidimensionnels, sans rien avoir à configurer, et sans déplacer les données. Cette nouvelle stack (qui incorpore le moteur MDX d'ActiveViam) permet à des utilisateurs métier d'analyser les données d'un datalake directement dans une Pivot Table Excel, ou dans Tableau, en déléguant les hiérarchies, les filtres et les agrégations au moteur Spark.</p>\n<p>Pendant la conférence nous expliquerons en détail comment Sparkube marche et nous ferons tourner un prototype en live pour illustrer les analyses et les expériences utilisateur qui deviennent possibles. Nous terminerons sur une analyse des performances du moteur Spark sur ces workloads OLAP.</p>\n",
          "id": "DOK-6562",
          "speakers": [{
              "link": {
                  "href": "http://cfp.devoxx.fr/api/conferences/DevoxxFR2018/speakers/20e7e142ae2a22724a17eb06f1d8220f629f8e5c",
                  "rel": "http://cfp.devoxx.fr/api/profile/speaker",
                  "title": "Antoine Chambille"
              },
              "name": "Antoine Chambille"
          }],
          "title": "Projet Sparkube: Transformer Apache Spark en cube OLAP",
          "lang": "fr",
          "summary": "Apache Spark est à l'origine une plateforme généraliste de traitement des données en batch. Mais aujourd'hui grâce au stockage des données en colonnes, la gestion de la mémoire off-heap, la génération de code et le push des prédicats, Spark a beaucoup en commun avec les grands systèmes OLAP optimisés pour l'analyse interactive.\r\n\r\nLe projet Sparkube vient d'être lancé pour explorer cette idée, une extension Spark pour exposer les datasets comme des cubes multidimensionnels, sans rien avoir à configurer, et sans déplacer les données. Cette nouvelle stack (qui incorpore le moteur MDX d'ActiveViam) permet à des utilisateurs métier d'analyser les données d'un datalake directement dans une Pivot Table Excel, ou dans Tableau, en déléguant les hiérarchies, les filtres et les agrégations au moteur Spark.\r\n\r\nPendant la conférence nous expliquerons en détail comment Sparkube marche et nous ferons tourner un prototype en live pour illustrer les analyses et les expériences utilisateur qui deviennent possibles. Nous terminerons sur une analyse des performances du moteur Spark sur ces workloads OLAP."
      },
      "fromTime": "18:40",
      "toTimeMillis": 1524071400000,
      "toTime": "19:10",
      "roomCapacity": 120,
      "roomName": "Neuilly 253",
      "slotId": "tia_neu253_t_wednesday_18_18h40_19h10",
      "day": "wednesday"
  }]
};
