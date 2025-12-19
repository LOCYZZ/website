/* ==========================
  DATA (À COMPLÉTER PAR TOI)
  ========================== */

const libraryData = [
// FILMS
{title: "Le Chant du Loup", type: "Film", year: 2020, rating: 5, comment: "Un de mes films préférés, juste un pur chef-d'œuvre", image: "https://fr.web.img5.acsta.net/pictures/18/12/10/09/46/3892829.jpg", category: "films"},
{title: "La Saga Harry Potter", type: "Film", year: 2001, rating: 5, comment: "Toujours aussi captivant à regarder et aussi magique", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyG1dNA8IKXxvUznf_gJDzQAjQQZtbvDhyA&s", category: "films"},
{title: "La Saga Star Wars", type: "Film", year: 1977, rating: 5, comment: "", image: "https://i.ebayimg.com/images/g/5ycAAOSwIe1gQZFT/s-l400.jpg", category: "films"},
{title: "Dune 1", type: "Film", year: 2021, rating: 5, comment: "", image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg", category: "films"},
{title: "Dune 2", type: "Film", year: 2024, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/pictures/24/01/26/10/18/5392835.jpg", category: "films"},
{title: "Seul", type: "Film", year: 2023, rating: 4, comment: "", image: "https://fr.web.img4.acsta.net/pictures/16/12/20/09/53/114160.jpg", category: "films"},
{title: "Mission : Noël - Les aventures de la famille Noël", type: "Film", year: 2011, rating: 5, comment: "Un très bon film vu durant mon enfance", image: "https://fr.web.img6.acsta.net/medias/nmedia/18/85/52/66/19834029.jpg", category: "films"},
{title: "Minecraft : Le Film", type: "Film", year: 2025, rating: 3, comment: "", image: "https://fr.web.img5.acsta.net/img/3e/61/3e619c6423fd2c82be9ec8b727aa217b.jpg", category: "films"},
{title: "13 jours, 13 nuits", type: "Film", year: 2024, rating: 4, comment: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_MxMyPy0p68w6Gn8aFJS5g3u-IpBmc5vNQ&s", category: "films"},
{title: "Mufasa : Le Roi Lion", type: "Film", year: 2024, rating: 4, comment: "", image: "https://www.filmspourenfants.net/wp-content/uploads/2025/02/mufasa-le-roi-lion-a-346x500.jpg", category: "films"},
{title: "Havoc", type: "Film", year: 2023, rating: 3, comment: "", image: "https://fr.web.img2.acsta.net/img/52/ba/52baffc9161c67d10aa89d79dde8ee00.jpg", category: "films"},
{title: "Le Dernier Jaguar", type: "Film", year: 2024, rating: 4, comment: "", image: "https://fr.web.img2.acsta.net/pictures/23/11/28/11/27/1028805.jpg", category: "films"},
{title: "E.T. l'extra-terrestre", type: "Film", year: 1982, rating: 5, comment: "", image: "https://m.media-amazon.com/images/M/MV5BY2RmOWVkOWQtZmJlMi00NmFmLTkxYmItNzkzMDNiMTBhMWVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", category: "films"},
{title: "Ténor", type: "Film", year: 2022, rating: 4, comment: "", image: "https://fr.web.img6.acsta.net/pictures/22/03/21/14/50/4272885.jpg", category: "films"},
{title: "Regarde", type: "Film", year: 2023, rating: 4, comment: "", image: "https://drj9an6msil3r.cloudfront.net/large_197_REGARDE_KA_LR_120x160_v3_72_ab59fbd1cb.jpg", category: "films"},
{title: "Avatar", type: "Film", year: 2009, rating: 5, comment: "", image: "https://m.media-amazon.com/images/I/91N1lG+LBIS._AC_UF894,1000_QL80_.jpg", category: "films"},
{title: "Avatar : La Voie de l'eau", type: "Film", year: 2022, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/pictures/22/11/02/14/49/4565071.jpg", category: "films"},
{title: "Avatar : de Feu et de Cendres", type: "Film", year: 2025, rating: 5, comment: "Vue au cinéma en 3D, un réel chef-d'oeuvre", image: "https://fr.web.img5.acsta.net/c_310_420/img/52/fb/52fb8f0345af2b0940557aa049ca19fd.jpg", category: "films"},
{title: "Bastion 36", type: "Film", year: 2025, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/img/3c/d3/3cd3becc98358527178183e8df5e4c7e.jpg", category: "films"},
{title: "Élémentaire", type: "Film", year: 2023, rating: 4, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/23/06/07/14/09/5709179.jpg", category: "films"},
{title: "La Petite Sirène", type: "Film", year: 2023, rating: 4, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/pictures/23/03/13/10/44/5295339.jpg", category: "films"},
{title: "La Petite Sirène (Animation)", type: "Film", year: 1989, rating: 4, comment: "", image: "https://m.media-amazon.com/images/I/41jQdLiPpwL._AC_UF1000,1000_QL80_.jpg", category: "films"},
{title: "Cars", type: "Film", year: 2006, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/pictures/17/08/01/16/24/309645.jpg", category: "films"},
{title: "Cars 2", type: "Film", year: 2011, rating: 5, comment: "", image: "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/71/72/07/19770156.jpg", category: "films"},
{title: "Cars 3", type: "Film", year: 2017, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/pictures/17/04/12/14/42/499210.jpg", category: "films"},
{title: "Monstres & Cie", type: "Film", year: 2001, rating: 4, comment: "", image: "https://fr.web.img4.acsta.net/medias/nmedia/00/02/36/12/affcie.jpg", category: "films"},
{title: "Toy Story", type: "Film", year: 1995, rating: 5, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/pictures/14/03/17/10/20/509771.jpg", category: "films"},
{title: "Toy Story 2", type: "Film", year: 1999, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/64/42/85/18778483.jpg", category: "films"},
{title: "Toy Story 3", type: "Film", year: 2010, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/63/96/06/19415330.jpg", category: "films"},
{title: "Toy Story 4", type: "Film", year: 2019, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/19/06/12/17/42/4485647.jpg", category: "films"},
/* {title: "Toy Story 5", type: "Film", year: 2026, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/img/67/de/67deb83751c63a4150d652f0c496f54a.jpg", category: "films"}, */
{title: "WALL·E", type: "Film", year: 2008, rating: 4, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/93/01/18948378.jpg", category: "films"},
{title: "Les Nouveaux Héros", type: "Film", year: 2014, rating: 4, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/pictures/14/11/26/17/15/278188.jpg", category: "films"},
{title: "Zootopie", type: "Film", year: 2016, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/15/12/11/14/34/280851.jpg", category: "films"},
{title: "Zootopie 2", type: "Film", year: 2025, rating: 4, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/img/45/ac/45ac77474bfae505033a30909e4eda41.jpg", category: "films"},
{title: "Les Mondes de Ralph", type: "Film", year: 2012, rating: 5, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/90/32/01/20271941.jpg", category: "films"},
{title: "Ralph 2.0", type: "Film", year: 2018, rating: 4, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/18/10/29/15/09/3689644.jpg", category: "films"},
{title: "Vaiana, la légende du bout du monde", type: "Film", year: 2016, rating: 3, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/16/09/14/09/17/148002.jpg", category: "films"},
{title: "Vaiana 2", type: "Film", year: 2024, rating: 3, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/img/9e/c9/9ec9a076d8516b78e1923dd76806f13e.jpg", category: "films"},
{title: "Gran Turismo", type: "Film", year: 2023, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/pictures/23/05/03/10/55/2291595.jpg", category: "films"},
{title: "Dragons", type: "Film", year: 2010, rating: 5, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/73/01/74/19343191.jpg", category: "films"},
{title: "Dragons 2", type: "Film", year: 2014, rating: 4, comment: "", image: "https://fr.web.img3.acsta.net/c_310_420/pictures/14/06/05/15/47/538891.jpg", category: "films"},
{title: "Dragons 3", type: "Film", year: 2019, rating: 4, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/18/12/13/23/29/4823925.jpg", category: "films"},
{title: "Dragons (Live action)", type: "Film", year: 2025, rating: 5, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/img/e8/20/e820c5f3bfaf56d2eee911834bf46955.jpg", category: "films"},
{title: "La Fée Clochette", type: "Film", year: 2008, rating: 5, comment: "", image: "https://static.fnac-static.com/multimedia/images_produits/ZoomPE/4/4/6/9782014632644/tsp20130831185729/La-fee-Clochette.jpg", category: "films"},
{title: "Clochette et la Pierre de Lune", type: "Film", year: 2009, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/pictures/20/03/17/16/50/4462049.jpg", category: "films"},
{title: "Clochette et l’Expédition Féerique", type: "Film", year: 2010, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/79/45/36/19538955.jpg", category: "films"},
{title: "Clochette et le Tournoi des Fées", type: "Film", year: 2012, rating: 5, comment: "", image: "https://m.media-amazon.com/images/I/51h4zYBHgZL._AC_UF894,1000_QL80_.jpg", category: "films"},
{title: "Clochette et le Secret des Fées", type: "Film", year: 2012, rating: 5, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/90/97/94/20183973.jpg", category: "films"},
{title: "Clochette et la Fée Pirate", type: "Film", year: 2014, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/14/01/15/17/47/475648.jpg", category: "films"},
{title: "Clochette et la Créature Légendaire", type: "Film", year: 2015, rating: 5, comment: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMh_OhJw0INUyULe5ryn5SDXHHDbWk75K3eGmpn5kFTOObA9YbBri6F_W6X4GuXaxUGVvKRHb0cb_UrBslnK9uaPsKabQJTnib_Vczjg&s=10", category: "films"},
{title: "Niko le Petit Renne", type: "Film", year: 2008, rating: 4, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/67/20/10/18999661.jpg", category: "films"},
{title: "Niko le Petit Renne 2", type: "Film", year: 2012, rating: 4, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/93/29/94/20248999.jpg", category: "films"},
{title: "Niko : Mission Père Noël", type: "Film", year: 2024, rating: 4, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/img/01/ef/01ef3db776a88ed6cd1b73ccc32f6e10.jpg", category: "films"},
{title: "Paddington", type: "Film", year: 2014, rating: 5, comment: "", image: "https://fr.web.img3.acsta.net/c_310_420/pictures/14/12/05/10/53/508053.jpg", category: "films"},
{title: "Paddington 2", type: "Film", year: 2017, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/17/11/14/10/08/1496521.jpg", category: "films"},
{title: "Paddington au Pérou", type: "Film", year: 2015, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/img/3d/88/3d888f3f864049f77bc99b83f246312d.jpg", category: "films"},
{title: "Turbo", type: "Film", year: 2013, rating: 5, comment: "Un de mes films préférés de mon enfance", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/210/240/21024051_20130802102929359.jpg", category: "films"},
{title: "Titanic", type: "Film", year: 1998, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/23/01/10/16/06/0622119.jpg", category: "films"},
{title: "Le Comte de Monte-Cristo", type: "Film", year: 2024, rating: 4, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/img/29/eb/29eb8341475fdb0b19b1d7b995b70e17.jpg", category: "films"},
{title: "Les Minions", type: "Film", year: 2015, rating: 4, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/pictures/15/06/11/09/20/080813.jpg", category: "films"},
{title: "Les Minions 2 : Il était une fois Gru", type: "Film", year: 2022, rating: 4, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/22/04/29/12/09/2431585.jpg", category: "films"},
{title: "Moi, Moche et Méchant", type: "Film", year: 2010, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/73/23/03/19494202.jpg", category: "films"},
{title: "Moi, Moche et Méchant 2", type: "Film", year: 2013, rating: 4, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/89/40/05/20532087.jpg", category: "films"},
{title: "Moi, Moche et Méchant 3", type: "Film", year: 2017, rating: 4, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/pictures/17/06/26/15/36/527507.jpg", category: "films"},
{title: "Les Croods", type: "Film", year: 2013, rating: 4, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/95/10/55/20502139.jpg", category: "films"},
{title: "Les Croods 2 : une nouvelle ère", type: "Film", year: 2021, rating: 4, comment: "", image: "https://fr.web.img3.acsta.net/c_310_420/pictures/21/06/01/15/59/1028095.jpg", category: "films"},
{title: "Gladiator", type: "Film", year: 2000, rating: 3, comment: "", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Gladiator_%282000_film_poster%29.png/250px-Gladiator_%282000_film_poster%29.png", category: "films"},
{title: "Gladiator 2", type: "Film", year: 2024, rating: 4, comment: "", image: "https://fr.web.img3.acsta.net/c_310_420/img/d6/5b/d65be9c3a6f9dc13a987f71c59351855.jpg", category: "films"},
{title: "Vice versa", type: "Film", year: 2015, rating: 5, comment: "", image: "https://fr.web.img3.acsta.net/c_310_420/pictures/15/04/16/13/58/571071.jpg", category: "films"},
{title: "Vice versa 2", type: "Film", year: 2024, rating: 4, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/img/f5/4c/f54c3310f101fe8ae4bba9e566bca1b5.jpg", category: "films"},
{title: "Sous la Seine", type: "Film", year: 2023, rating: 3, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/img/63/9a/639a5ebe313496018137c91152b1b914.jpg", category: "films"},
{title: "SOS Fantômes", type: "Film", year: 1984, rating: 4, comment: "", image: "https://fr.web.img3.acsta.net/medias/nmedia/18/63/95/37/19681642.jpg", category: "films"},
{title: "SOS Fantômes 2", type: "Film", year: 1989, rating: 4, comment: "", image: "https://www.sonypictures.ca/sites/canada/files/2024-05/DP_6037682_Ghostbusters2_1989_EST_2000x3000_CAN-FR_1333x2000_thumbnail.jpg", category: "films"},
{title: "SOS Fantômes : L'Héritage", type: "Film", year: 2021, rating: 5, comment: "", image: "https://www.sonypictures.fr/sites/france2/files/2022-03/SOSF-affiche-450x600.jpg", category: "films"},
{title: "SOS Fantômes : La Menace de Glace", type: "Film", year: 2022, rating: 5, comment: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AmgNZ3_cLbQsPOkXvLLJwyis4ZHGoF54gg&s", category: "films"},
{title: "Wonka", type: "Film", year: 2023, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/pictures/23/12/05/14/56/1249162.jpg", category: "films"},
{title: "Aquaman", type: "Film", year: 2018, rating: 3, comment: "", image: "https://fr.web.img6.acsta.net/pictures/18/12/13/12/12/2738771.jpg", category: "films"},
{title: "Les Aventuriers de l'arche perdue", type: "Film", year: 1981, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/medias/nmedia/00/02/49/18/affiche.jpg", category: "films"},
{title: "Indiana Jones et le Temple maudit", type: "Film", year: 1984, rating: 5, comment: "", image: "https://images.epagine.fr/513/3701432012513_vid.jpg", category: "films"},
{title: "Indiana Jones et la Dernière Croisade", type: "Film", year: 1989, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/medias/nmedia/18/65/88/40/18895516.jpg", category: "films"},
{title: "Indiana Jones et le Royaume du crâne de cristal", type: "Film", year: 2008, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/medias/nmedia/18/63/95/41/18927494.jpg", category: "films"},
{title: "Indiana Jones et le Cadran de la destinée", type: "Film", year: 2023, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/23/06/07/14/33/5787419.jpg", category: "films"},
{title: "Super Mario Bros le film", type: "Film", year: 2023, rating: 4, comment: "", image: "https://fr.web.img5.acsta.net/pictures/23/03/20/14/57/4979368.jpg", category: "films"},
{title: "Ant-Man", type: "Film", year: 2015, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/pictures/15/05/06/16/05/305731.jpg", category: "films"},
{title: "Ant-Man et la Guêpe", type: "Film", year: 2018, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/pictures/18/06/08/14/35/0842353.jpg", category: "films"},
{title: "Ant-Man et la Guêpe : Quantumania", type: "Film", year: 2023, rating: 5, comment: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-oamOgxNWaBJnXZYm2z_1W0-OnBL21XFXg&s", category: "films"},
{title: "Luck", type: "Film", year: 2022, rating: 3, comment: "", image: "https://fr.web.img3.acsta.net/pictures/22/07/07/10/19/0454872.jpg", category: "films"},
{title: "Buzz L'Eclair", type: "Film", year: 2022, rating: 4, comment: "", image: "https://lumiere-a.akamaihd.net/v1/images/image_ca7aaaa2.jpeg?region=0,0,540,810", category: "films"},
{title: "Sonic le film", type: "Film", year: 2020, rating: 5, comment: "", image: "https://fr.web.img3.acsta.net/pictures/20/02/10/17/16/0746079.jpg", category: "films"},
{title: "Sonic 2 le film", type: "Film", year: 2022, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/pictures/22/03/14/15/39/4137538.jpg", category: "films"},
{title: "Uncharted", type: "Film", year: 2022, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/pictures/22/01/18/10/13/5983633.jpg", category: "films"},
{title: "Les Animaux fantastiques", type: "Film", year: 2016, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/16/10/11/09/32/205295.jpg", category: "films"},
{title: "Les Animaux fantastiques : Les Crimes de Grindelwald", type: "Film", year: 2018, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/pictures/18/10/10/11/16/4794693.jpg", category: "films"},
{title: "Les Animaux fantastiques : Les Secrets de Dumbledore", type: "Film", year: 2022, rating: 5, comment: "", image: "https://fr.web.img2.acsta.net/pictures/22/03/16/15/20/0170262.jpg", category: "films"},
{title: "Black Panther", type: "Film", year: 2018, rating: 5, comment: "", image: "https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0,0,540,810", category: "films"},
{title: "Black Panther : Wakanda Forever", type: "Film", year: 2022, rating: 5, comment: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUF2dec5DRdDtisjNyDZvfb0ui7kvfwAcwvw&s", category: "films"},
{title: "Tempête de boulettes géantes", type: "Film", year: 2009, rating: 5, comment: "Un de mes films preferes de mon enfance", image: "https://fr.web.img6.acsta.net/medias/nmedia/18/68/38/96/19133443.jpg", category: "films"},
{title: "L'Île des Miam-nimaux - Tempête de boulettes géantes 2", type: "Film", year: 2013, rating: 4, comment: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTwMGjfb6zLXcS4nq_HFWpEWcV7UJlwWW7XQ&s", category: "films"},
{title: "Tad l'explorateur : À la recherche de la cité perdue", type: "Film", year: 2012, rating: 5, comment: "Un de mes film prefere de mon enfance", image: "https://fr.web.img5.acsta.net/medias/nmedia/18/94/31/73/20336223.jpg", category: "films"},
{title: "Tad l'explorateur et le Secret du Roi Midas", type: "Film", year: 2016, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/pictures/18/03/23/17/13/1622249.jpg", category: "films"},
{title: "Tad l'explorateur et la table d'émeraude", type: "Film", year: 2019, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/pictures/22/07/19/17/38/1534398.jpg", category: "films"},
{title: "1001 pattes", type: "Film", year: 1998, rating: 5, comment: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUL5DoQ1iYjBSJFjSIu2Xq7LmU8sJS_c1PA&s", category: "films"},
{title: "Le Petit Monde des Borrowers", type: "Film", year: 1997, rating: 4, comment: "", image: "https://m.media-amazon.com/images/I/51VMG15FH8L._AC_UF1000,1000_QL80_.jpg", category: "films"},
{title: "Arthur et les Minimoys", type: "Film", year: 2006, rating: 5, comment: "", image: "https://fr.web.img2.acsta.net/medias/nmedia/18/35/85/13/18684533.jpg", category: "films"},
{title: "Arthur et la Vengeance de Maltazard", type: "Film", year: 2009, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/medias/nmedia/18/65/88/32/19168999.jpg", category: "films"},
{title: "Arthur 3 : La Guerre des deux mondes", type: "Film", year: 2010, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/medias/nmedia/18/78/43/40/19493858.jpg", category: "films"},
{title: "Shang-Chi et la Légende des Dix Anneaux", type: "Film", year: 2021, rating: 3, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/21/08/25/11/54/3128925.jpg", category: "films"},
{title: "Free Guy", type: "Film", year: 2021, rating: 4, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/pictures/21/06/23/18/09/1919284.jpg", category: "films"},
{title: "Jumanji", type: "Film", year: 1995, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/14/08/14/12/20/198981.jpg", category: "films"},
{title: "Jumanji : Bienvenue dans la jungle", type: "Film", year: 2017, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/pictures/17/11/07/13/40/0517792.jpg", category: "films"},
{title: "Jumanji : Next Level", type: "Film", year: 2019, rating: 5, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/pictures/19/11/07/12/52/2054035.jpg", category: "films"},
{title: "Spider-Man : Homecoming", type: "Film", year: 2017, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/17/05/30/13/13/145510.jpg", category: "films"},
{title: "Spider-Man : Far From Home", type: "Film", year: 2019, rating: 5, comment: "", image: "https://fr.web.img3.acsta.net/c_310_420/pictures/19/06/13/15/28/4575985.jpg", category: "films"},
{title: "Spider-Man : No Way Home", type: "Film", year: 2021, rating: 5, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/pictures/21/11/16/10/01/4860598.jpg", category: "films"},
{title: "Jungle Cruise", type: "Film", year: 2021, rating: 4, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/pictures/21/05/27/15/44/2102945.jpg", category: "films"},
{title: "Kingsman : Services secrets", type: "Film", year: 2014, rating: 5, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/pictures/15/01/08/15/02/290347.jpg", category: "films"},
{title: "Kingsman : Le Cercle d'or", type: "Film", year: 2017, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/17/09/19/15/26/1229952.jpg", category: "films"},
{title: "The King's Man : Première mission", type: "Film", year: 2021, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/pictures/21/12/14/14/34/1861024.jpg", category: "films"},
{title: "En avant", type: "Film", year: 2020, rating: 3, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/20/01/06/14/00/1992182.jpg", category: "films"},
{title: "Rango", type: "Film", year: 2011, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/78/46/81/19678966.jpg", category: "films"},
{title: "Les Indestructibles", type: "Film", year: 2004, rating: 5, comment: "", image: "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/35/23/97/18391267.jpg", category: "films"},
{title: "Les Indestructibles 2", type: "Film", year: 2018, rating: 4, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/pictures/18/04/13/15/09/0323902.jpg", category: "films"},
{title: "Taxi", type: "Film", year: 1998, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/medias/nmedia/00/02/49/22/affiche.jpg", category: "films"},
{title: "Taxi 2", type: "Film", year: 2000, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/24/72/18962752.jpg", category: "films"},
{title: "Taxi 3", type: "Film", year: 2003, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/00/02/57/84/affiche.jpg", category: "films"},
{title: "Taxi 4", type: "Film", year: 2007, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/63/73/33/18723066.jpg", category: "films"},
{title: "Taxi 5", type: "Film", year: 2018, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/18/03/09/12/16/2548759.jpg", category: "films"},
{title: "Bumblebee", type: "Film", year: 2018, rating: 4, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/pictures/18/11/12/10/02/5168605.jpg", category: "films"},
{title: "Yéti & Compagnie", type: "Film", year: 2018, rating: 3, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/pictures/18/07/24/10/49/2195759.jpg", category: "films"},
{title: "Les Tuche", type: "Film", year: 2011, rating: 4, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/79/51/22/19732939.jpg", category: "films"},
{title: "Les Tuche 2 : Le Rêve américain", type: "Film", year: 2016, rating: 4, comment: "", image: "https://fr.web.img3.acsta.net/c_310_420/pictures/15/11/30/15/05/193488.jpg", category: "films"},
{title: "Les Tuche 3 : Liberté, Égalité, Fraternité", type: "Film", year: 2018, rating: 4, comment: "", image: "https://fr.web.img3.acsta.net/c_310_420/pictures/17/11/30/10/40/0534331.jpg", category: "films"},
{title: "Interstellar", type: "Film", year: 2014, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/pictures/14/09/24/12/08/158828.jpg", category: "films"},
{title: "Le Monde secret des Emojis", type: "Film", year: 2017, rating: 4, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/pictures/17/08/24/10/15/324652.jpg", category: "films"},
{title: "À fond", type: "Film", year: 2016, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/pictures/16/11/15/18/20/182883.jpg", category: "films"},
{title: "Baby Boss", type: "Film", year: 2017, rating: 4, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/pictures/17/01/19/10/11/597368.jpg", category: "films"},
{title: "Baby Boss 2 : Une affaire de famille", type: "Film", year: 2021, rating: 4, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/20/11/24/17/40/3566872.jpg", category: "films"},
{title: "Coco", type: "Film", year: 2017, rating: 4, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/17/09/15/12/42/0056825.jpg", category: "films"},
{title: "Le BGG : Le Bon Gros Géant", type: "Film", year: 2016, rating: 4, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/pictures/16/06/02/17/14/167530.jpg", category: "films"},
{title: "Comme des bêtes", type: "Film", year: 2016, rating: 4, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/16/06/06/11/30/391424.jpg", category: "films"},
{title: "Comme des bêtes 2", type: "Film", year: 2019, rating: 4, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/19/01/16/13/55/1979607.jpg", category: "films"},
{title: "Le Voyage extraordinaire de Samy", type: "Film", year: 2010, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/77/51/73/19457428.jpg", category: "films"},
{title: "Samy 2", type: "Film", year: 2012, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/90/20/73/20160667.jpg", category: "films"},
{title: "L'Âge de glace", type: "Film", year: 2002, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/00/02/47/01/affiche.jpg", category: "films"},
{title: "L'Âge de glace 2", type: "Film", year: 2006, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/82/41/18603091.jpg", category: "films"},
{title: "L'Âge de glace 3 : Le Temps des Dinosaures", type: "Film", year: 2009, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/66/21/19/19099924.jpg", category: "films"},
{title: "L'Âge de glace 4 : La Dérive des continents", type: "Film", year: 2012, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/86/68/30/20093574.jpg", category: "films"},
{title: "L'Âge de glace : Les Lois de l'Univers", type: "Film", year: 2016, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/pictures/16/06/06/17/22/067515.jpg", category: "films"},
{title: "La Planète des singes : Les Origines", type: "Film", year: 2011, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/84/60/29/19765980.jpg", category: "films"},
{title: "La Planète des singes : L'Affrontement", type: "Film", year: 2014, rating: 5, comment: "", image: "https://fr.web.img4.acsta.net/c_310_420/pictures/14/07/03/16/07/192966.jpg", category: "films"},
{title: "La Planète des singes : Suprématie", type: "Film", year: 2017, rating: 5, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/pictures/17/04/28/09/41/203328.jpg", category: "films"},
{title: "La Planète des singes : Le Nouveau Royaume", type: "Film", year: 2024, rating: 5, comment: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9d2NBtSLFJiH5gHpuvCc_oht-RFrYUqPxvw&s", category: "films"},
{title: "Angry Birds: Le film", type: "Film", year: 2016, rating: 5, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/pictures/17/04/28/09/41/203328.jpg", category: "films"},
{title: "Le Livre de la jungle", type: "Film", year: 2016, rating: 5, comment: "", image: "https://fr.web.img2.acsta.net/c_310_420/pictures/16/01/08/09/35/538779.jpg", category: "films"},
{title: "Encanto", type: "Film", year: 2021, rating: 3, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/pictures/21/09/29/10/15/0378531.jpg", category: "films"},
{title: "Rio", type: "Film", year: 2011, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/78/25/22/19699752.jpg", category: "films"},
{title: "Rio 2", type: "Film", year: 2014, rating: 5, comment: "", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/13/12/09/12/44/212843.jpg", category: "films"},

// SERIES
{title: "Sweet Tooth", type: "Série", year: 2021, rating: 5, comment: "L'une des premières séries que j'ai pu regarder, un grand coup de cœur", image: "https://fr.web.img4.acsta.net/pictures/21/05/17/17/15/1119525.jpg", category: "series"},
{title: "Lupin", type: "Série", year: 2021, rating: 5, comment: "Magnifique série avec toujours beaucoup de suspens", image: "https://fr.web.img6.acsta.net/pictures/20/12/02/16/24/1535547.jpg", category: "series"},
{title: "The Rain", type: "Série", year: 2018, rating: 4, comment: "Très bonne série mais peut-être trop longue je pense", image: "https://fr.web.img5.acsta.net/pictures/18/04/23/16/28/2584964.jpg", category: "series"},
{title: "Mercredi", type: "Série", year: 2022, rating: 4, comment: "Bonne série avec une bonne histoire", image: "https://fr.web.img4.acsta.net/pictures/22/09/23/15/11/2942764.jpg", category: "series"},
{title: "Lost : Les Disparus", type: "Série", year: 2004, rating: null, comment: "En cours (Saison 2, Episode 2)", image: "https://m.media-amazon.com/images/M/MV5BZmZhY2ViYzYtMTQ0NS00NDcyLWIxZTYtMGUyODE0NDA0NmNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", category: "series"},

// JEUX
{title: "R.E.P.O.", type: "Jeu", year: 2020, rating: 4, comment: "De très bons moments passés entre potes", image: "https://static-cdn.jtvnw.net/ttv-boxart/1294658629_IGDB-272x380.jpg", category: "jeux"},
{title: "Minecraft", type: "Jeu", year: 2011, rating: 5, comment: "Le jeu de mon enfance, j'y ai passé beaucoup de temps dont mon confinement", image: "https://static.actugaming.net/media/2016/02/minecraft-jaquette-1.jpg", category: "jeux"},
{title: "Fornite", type: "Jeu", year: 2017, rating: 5, comment: "De très bons moments passés régulièrement", image: "https://gamewave.fr/static/images/games/a5685-fortnite.jpg", category: "jeux"},
{title: "My Dream Setup", type: "Jeu", year: 2021, rating: 3, comment: "Jeu éphémère et bien réaliste et complet", image: "https://media.senscritique.com/media/000022085936/0/my_dream_setup.jpg", category: "jeux"},
{title: "Among Us", type: "Jeu", year: 2018, rating: 5, comment: "Parfait pour s'amuser à plusieurs", image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg", category: "jeux"},
{title: "Hogwarts Legacy", type: "Jeu", year: 2023, rating: null, comment: "", image: "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S2_1200x1600-bb9f789b6628ff2aa935f06f5e0f218a", category: "jeux"},
{title: "Paddle Paddle Paddle", type: "Jeu", year: 2022, rating: 4, comment: "Bon jeu", image: "https://cdn.cdkeys.com/media/catalog/product/p/a/paddle_paddle_paddle_cdkeys.png", category: "jeux"},
{title: "Peak", type: "Jeu", year: 2021, rating: 5, comment: "Coup de cœur même si je n'ai pas encore réussi à le finir sans bug", image: "https://cdn.cdkeys.com/496x700/media/catalog/product/p/e/peak_pc.png", category: "jeux"},
{title: "Bronze Beards Tavern", type: "Jeu", year: 2020, rating: 3, comment: "Bon jeu mais on arrive rapidement à la fin", image: "https://howlongtobeat.com/games/141804_Bronzebeards_Tavern.jpg", category: "jeux"},
{title: "Trackmania", type: "Jeu", year: 2020, rating: 4, comment: "", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/Trackmania_Royal_KeyArt_1200x1600_1200x1600-baf0e1c64be7ae2fefa18ba9e845f4c2", category: "jeux"},
{title: "Fall Guys", type: "Jeu", year: 2020, rating: 4, comment: "", image: "https://cdn1.epicgames.com/offer/50118b7f954e450f8823df1614b24e80/FGSS04_KeyArt_OfferImagePortrait_1200x1600_1200x1600-4bd46574e78464352e1f2c55714701f7", category: "jeux"},
{title: "Farming Simulator 22", type: "Jeu", year: 2021, rating: 3, comment: "", image: "https://cdn1.epicgames.com/salesEvent/salesEvent/725818d8-9768-4a6a-a723-3039aaee1e23_1200x1600-3b6116d3fc1b566b71251d04bce27938", category: "jeux"},
{title: "Gang Beasts", type: "Jeu", year: 2014, rating: 4, comment: "", image: "https://media.senscritique.com/media/000020995012/150/gang_beasts.png", category: "jeux"},
{title: "Valorant", type: "Jeu", year: 2020, rating: 4, comment: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8zdT9tgQOQwqY0MN2ZtpFeqw55LwkKFNvA&s", category: "jeux"},

// LIVRES
{title: "Seul Tome 1 - La disparition", type: "Livre", year: 2006, rating: 5, comment: "", image: "https://static.fnac-static.com/multimedia/Images/FR/NR/2d/f5/1a/1766701/1507-1/tsp20141003094538/La-disparition.jpg", category: "livres"},
{title: "Seul Tome 2 - Le maître des couteaux", type: "Livre", year: 2007, rating: 5, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/f5/7a/1d/1932021/1507-1/tsp20250425082914/Seuls-Tome-2-Le-maitre-des-couteaux.jpg", category: "livres"},
{title: "Seul Tome 3 - Le clan du requin", type: "Livre", year: 2008, rating: 5, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/1d/33/22/2241309/1507-1/tsp20250425082933/Seuls-Tome-3-Le-clan-du-requin.jpg", category: "livres"},
{title: "Seul Tome 4 - Les Cairns rouges", type: "Livre", year: 2009, rating: 5, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/01/00/28/2621441/1507-1/tsp20250425082933/Seuls-Tome-4-Les-Cairns-rouges.jpg", category: "livres"},
{title: "Seul Tome 5 - Au coeur du Maelström", type: "Livre", year: 2010, rating: 5, comment: "", image: "https://m.media-amazon.com/images/I/71x0e8NWRyL._AC_UF1000,1000_QL80_.jpg", category: "livres"},
{title: "Seul Tome 6 - La quatrième dimension et demie", type: "Livre", year: 2011, rating: 5, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/37/df/31/3268407/1507-1/tsp20250425083026/Seuls-Tome-6-La-quatrieme-dimension-et-demie.jpg", category: "livres"},
{title: "Seul Tome 7 - Les terres basses", type: "Livre", year: 2012, rating: 5, comment: "", image:"https://m.media-amazon.com/images/I/714DdnH5u2L._AC_UF1000,1000_QL80_.jpg", category:"livres"},
{title: "Seul Tome 8 - Les Arènes", type: "Livre", year: 2013, rating: 5, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/46/c2/51/5358150/1507-1/tsp20250428101135/Seuls-Tome-8-Les-Arenes.jpg", category: "livres"},
{title: "Seul Tome 9 - Avant l'Enfant-Minuit", type: "Livre", year: 2015, rating: 5, comment: "", image: "https://m.media-amazon.com/images/I/71orCRuofRL.jpg", category: "livres"},
{title: "Seul Tome 10 - La machine à démourir", type: "Livre", year: 2016, rating: 5, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/ea/e0/7e/8315114/1507-1/tsp20250428075733/Seuls-Tome-10-La-machine-a-demourir.jpg", category: "livres"},
{title: "Seul Tome 11 - Les cloueurs de nuit", type: "Livre", year: 2018, rating: 5, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/99/49/8e/9324953/1507-1/tsp20250428091621/Seuls-Tome-11-Les-cloueurs-de-nuit.jpg", category: "livres"},
{title: "Seul Tome 12 - Les révoltés de Néosalem", type: "Livre", year: 2020, rating: 5, comment: "", image: "https://m.media-amazon.com/images/I/7151MqRVJBL.jpg", category: "livres"},
{title: "Seul Tome 13 - Les âmes tigrées", type: "Livre", year: 2021, rating: 5, comment: "", image: "https://m.media-amazon.com/images/I/811pBUwnJZS._AC_UF1000,1000_QL80_.jpg", category: "livres"},
{title: "Seul Tome 14 - Les Protecteurs", type: "Livre", year: 2024, rating: 5, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/ea/fa/f3/15989482/1507-1/tsp20251128082559/Seuls-T14-Les-Protecteurs.jpg", category: "livres"},
{title: "Seul Tome 15 - L'hôtel au bord du monde", type: "Livre", year: 2024, rating: 5, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/50/d5/14/18142544/1507-1/tsp20251128081310/Seuls-T15-L-hotel-au-bord-du-monde.jpg", category: "livres"},
{title: "Klaw Tome 1 - Éveil", type: "Livre", year: 2013, rating: 4, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/da/60/45/4546778/1507-1/tsp20250607074341/Klaw-Tome-1-Eveil.jpg", category: "livres"},
{title: "Klaw Tome 2 - Tabula Rasa", type: "Livre", year: 2013, rating: 4, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/db/60/45/4546779/1507-1/tsp20250428084323/Klaw-Tome-2-Tabula-Rasa.jpg", category: "livres"},
{title: "Klaw Tome 3 - Unions", type: "Livre", year: 2013, rating: 4, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/8a/57/50/5265290/1507-1/tsp20250428084330/Klaw-Tome-3-Unions.jpg", category: "livres"},
{title: "Klaw Tome 4 - Rupture", type: "Livre", year: 2014, rating: 4, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/f8/d6/5b/6018808/1507-1/tsp20250428113543/Klaw-Tome-4-Rupture.jpg", category: "livres"},
{title: "Klaw Tome 5 - Monkey", type: "Livre", year: 2015, rating: 4, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/e2/d2/66/6738658/1507-1/tsp20250428075948/Klaw-Tome-5-Monkey.jpg", category: "livres"},
{title: "Klaw Tome 6 - Les Oubliés", type: "Livre", year: 2016, rating: 4, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/71/75/78/7894385/1507-1/tsp20250428084652/Klaw-Tome-6-Les-Oublies.jpg", category: "livres"},
{title: "Klaw Tome 7 - Opération Mayhem", type: "Livre", year: 2017, rating: 4, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/a4/ea/81/8514212/1507-1/tsp20250428110223/Klaw-Tome-7-Operation-Mayhem-version-normale.jpg", category: "livres"},
{title: "Klaw Tome 8 - Riposte", type: "Livre", year: 2017, rating: 4, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/2f/a2/87/8888879/1507-1/tsp20250428103345/Klaw-Tome-8-Riposte-nouveaute.jpg", category: "livres"},
{title: "Klaw Tome 9 - Panique à Détroi", type: "Livre", year: 2018, rating: 4, comment: "", image: "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/e1/58/8e/9328865/1507-1/tsp20250428091614/Klaw-Tome-9-Panique-a-Detroit-nouveaute.jpg", category: "livres"},
{title: "Bleak Tome 1", type: "Livre", year: 2022, rating: 5, comment: "", image: "bleak1.png", category: "livres"},
{title: "Bleak Tome 2", type: "Livre", year: 2023, rating: 5, comment: "", image: "bleak2.png", category: "livres"},
{title: "Minecraft – Les Witherables Tome 1", type: "Livre", year: 2020, rating: 5, comment: "", image: "https://www.bdweb.fr/images/photolib/370x520c/559010/559010.jpg", category: "livres"},
{title: "Minecraft – Les Witherables Tome 2", type: "Livre", year: 2021, rating: 5, comment: "", image: "https://www.bdweb.fr/images/photolib/370x520c/601309/601309.jpg", category: "livres"},
{title: "Minecraft – Chasse à l’Ender Dragon Tome 1", type: "Livre", year: 2019, rating: 5, comment: "", image: "https://www.bdweb.fr/images/photolib/370x520c/270687/270687.jpg", category: "livres"},
{title: "Minecraft – Le monument au fond de l’océan Tome 2", type: "Livre", year: 2021, rating: 5, comment: "", image: "https://www.bdweb.fr/images/photolib/370x520c/519711/519711.jpg", category: "livres"},
{title: "Minecraft – Portail vers l’inconnu Tome 3", type: "Livre", year: 2022, rating: 5, comment: "", image: "https://www.bdweb.fr/images/photolib/370x520c/518806/518806.jpg", category: "livres"},
{title: "Minecraft – Histoires en blocs", type: "Livre", year: 2020, rating: 4, comment: "", image: "https://www.bdweb.fr/images/photolib/370x520c/261742/261742.jpg", category: "livres"},
// ===== FUZE & DIDIER =====
{title: "Fuze et Didier Tome 1", type: "Livre", year: 2019, rating: 4, comment: "", image: "", category: "livres"},
{title: "Fuze et Didier Tome 2", type: "Livre", year: 2020, rating: 4, comment: "", image: "", category: "livres"},
{title: "Fuze et Didier Tome 3", type: "Livre", year: 2020, rating: 4, comment: "", image: "", category: "livres"},
{title: "Fuze et Didier Tome 4", type: "Livre", year: 2021, rating: 4, comment: "", image: "", category: "livres"},
{title: "Fuze et Didier Tome 5", type: "Livre", year: 2022, rating: 4, comment: "", image: "", category: "livres"},
{title: "Fuze et Didier Tome 6", type: "Livre", year: 2023, rating: 4, comment: "", image: "", category: "livres"},

// ===== AUTRES BD =====
{title: "Team Craft face au Tri-Enderdragon", type: "Livre", year: 2019, rating: 3, comment: "", image: "", category: "livres"},

// ===== ROMANS MINECRAFT =====
{title: "Chroniques de l’Épée de Bois Tome 1", type: "Livre", year: 2015, rating: 5, comment: "", image: "", category: "livres"},
{title: "Chroniques de l’Épée de Bois Tome 2", type: "Livre", year: 2015, rating: 5, comment: "", image: "", category: "livres"},
{title: "Chroniques de l’Épée de Bois Tome 3", type: "Livre", year: 2016, rating: 5, comment: "", image: "", category: "livres"},
{title: "Chroniques de l’Épée de Bois Tome 4", type: "Livre", year: 2016, rating: 5, comment: "", image: "", category: "livres"},
{title: "Chroniques de l’Épée de Bois Tome 5", type: "Livre", year: 2017, rating: 5, comment: "", image: "", category: "livres"},
{title: "Chroniques de l’Épée de Bois Tome 6", type: "Livre", year: 2017, rating: 5, comment: "", image: "", category: "livres"},

{title: "Chroniques de l’Épée de Pierre Tome 1", type: "Livre", year: 2018, rating: 5, comment: "", image: "", category: "livres"},
{title: "Chroniques de l’Épée de Pierre Tome 2", type: "Livre", year: 2019, rating: 5, comment: "", image: "", category: "livres"},

{title: "Journal d’un Noob – Intégrale Volume 1", type: "Livre", year: 2016, rating: 5, comment: "", image: "", category: "livres"},
{title: "Journal d’un Noob – Intégrale Volume 2", type: "Livre", year: 2018, rating: 5, comment: "", image: "", category: "livres"},

// ===== DIVERS =====
{title: "Les disparus de l’île aux Moines – Vick et Vicky", type: "Livre", year: 2014, rating: 5, comment: "", image: "", category: "livres"},

{title: "Toto Tome 2", type: "Livre", year: 2005, rating: 4, comment: "", image: "", category: "livres"},
{title: "Toto Tome 5", type: "Livre", year: 2008, rating: 4, comment: "", image: "", category: "livres"},
{title: "Toto Tome 6", type: "Livre", year: 2009, rating: 4, comment: "", image: "", category: "livres"},
{title: "Toto Tome 10", type: "Livre", year: 2014, rating: 4, comment: "", image: "", category: "livres"},
{title: "Toto – Le carnet", type: "Livre", year: 2016, rating: 4, comment: "", image: "", category: "livres"},

{title: "Les Légendaires Parodia Tome 1", type: "Livre", year: 2015, rating: 5, comment: "Magnifique, les easter eggs dans la BD", image: "", category: "livres"},
{title: "Le Collège Tome 3", type: "Livre", year: 2019, rating: 5, comment: "", image: "", category: "livres"},
{title: "Chocapic présente les aventures de Pico", type: "Livre", year: 2012, rating: 4, comment: "", image: "", category: "livres"},
{title: "5 Mondes – Le Guerrier de sable Tome 1", type: "Livre", year: 2017, rating: 4, comment: "", image: "", category: "livres"},
{title: "Le Grand Méchant Renard", type: "Livre", year: 2015, rating: 4, comment: "", image: "", category: "livres"},

{title: "Frigiel et Fluffy Roman 1", type: "Livre", year: 2016, rating: 2, comment: "", image: "", category: "livres"},
{title: "Frigiel et Fluffy Roman 2", type: "Livre", year: 2017, rating: 2, comment: "", image: "", category: "livres"},
{title: "Frigiel et Fluffy Roman 4", type: "Livre", year: 2019, rating: 2, comment: "", image: "", category: "livres"},

// ===== MANGAS =====
{title: "Pokémon – La grande aventure Tome 1", type: "Livre", year: 1997, rating: 5, comment: "", image: "", category: "livres"},
{title: "Pokémon Soleil et Lune Tome 1", type: "Livre", year: 2017, rating: 4, comment: "", image: "", category: "livres"},
{title: "Pokémon Soleil et Lune Tome 2", type: "Livre", year: 2018, rating: 4, comment: "", image: "", category: "livres"},
{title: "Pokémon Instinct Tome 1", type: "Livre", year: 2020, rating: null, comment: "", image: "", category: "livres"},
{title: "Pokémon Instinct Tome 2", type: "Livre", year: 2021, rating: null, comment: "", image: "", category: "livres"},

// ===== SANS NOTE =====
{title: "Le guide de l’urbex – Juj Urbex", type: "Livre", year: 2022, rating: null, comment: "", image: "", category: "livres"},
{title: "Le journal de Samuel", type: "Livre", year: 2021, rating: null, comment: "", image: "", category: "livres"},
{title: "Hugo Décrypte en Russie", type: "Livre", year: 2023, rating: null, comment: "", image: "", category: "livres"},

];


/* ==========================
  RENDER DES CARDS
  ========================== */
function renderLibrary(data) {
// vider toutes les grilles
document.querySelectorAll('.library-grid').forEach(grid => {
  grid.innerHTML = '';
});

data.forEach(item => {
  const container = document.getElementById(`${item.category}-grid`);
  if (!container) return;

  const card = document.createElement('div');
  card.className = 'library-card glass';

  let starsHTML = '';
  if (item.rating !== null && item.rating !== undefined) {
    starsHTML =
      '<div class="rating">' +
      '★'.repeat(item.rating) +
      '☆'.repeat(5 - item.rating) +
      '</div>';
  }

  card.innerHTML = `
    <div class="poster-wrapper">
      <img src="${item.image}" alt="${item.title}">
    </div>

    <div class="library-body">
      <h3>${item.title}</h3>
      <span class="badge">${item.type} • ${item.year}</span>
      ${starsHTML}
      ${item.comment ? `<p class="muted">${item.comment}</p>` : ''}
    </div>
  `;

  container.appendChild(card);
});
}


/* ==========================
  NAVIGATION PAR NAVBAR
  ========================== */
const sections = document.querySelectorAll('.library-section');

function showSection(id) {
sections.forEach(sec => (sec.style.display = 'none'));
const target = document.getElementById(id);
if (target) target.style.display = 'block';
}

// section par défaut
showSection('films-section');

document.querySelectorAll('.nav-links a[data-target]').forEach(link => {
link.addEventListener('click', e => {
  e.preventDefault();
  showSection(link.dataset.target);

  // fermer menu mobile
  navLinks.classList.remove('active');
  menuToggle.classList.remove('open');
});
});


/* ==========================
  MENU HAMBURGER (MOBILE)
  ========================== */
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
menuToggle.classList.toggle('open');
navLinks.classList.toggle('active');
});



/* ==========================
  RECHERCHE PAR SECTION
  ========================== */
document.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('.search-input').forEach(input => {
  const gridId = input.dataset.target;
  const grid = document.getElementById(gridId);

  if (!grid) return;

  input.addEventListener('input', () => {
    const value = input.value.toLowerCase();

    grid.querySelectorAll('.library-card').forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(value) ? 'flex' : 'none';
    });
  });
});
});




/* ==========================
  FOOTER (ANNÉE)
  ========================== */
const yearEl = document.getElementById('year');
if (yearEl) {
yearEl.textContent = new Date().getFullYear();
}


/* ==========================
  INIT
  ========================== */
document.addEventListener('DOMContentLoaded', () => {
if (typeof libraryData === 'undefined') {
  console.error('❌ libraryData est manquant');
  return;
}
renderLibrary(libraryData);
});
