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
{title: "Toy Story 5", type: "Film", year: 2026, rating: 5, comment: "", image: "https://fr.web.img5.acsta.net/c_310_420/img/67/de/67deb83751c63a4150d652f0c496f54a.jpg", category: "films"},

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
