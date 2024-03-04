
// products.js


import product1 from "./assets/products/1.svg";
import product2 from "./assets/products/2.svg";
import product3 from "./assets/products/3.svg";
import product4 from "./assets/products/4.svg";
import product5 from "./assets/products/5.svg";
import product6 from "./assets/products/6.svg";
import product7 from "./assets/products/7.svg";
import product8 from "./assets/products/8.svg";

export const PRODUCTS = [
  {
    id: 1,
    productName: "Espresso kratki",
    price: 120.0,
    productImage: product1,
    description: "Koncentrisani udarac ukusa, idealan za jutarnji podstrek. Svojom bogatom aromom i punim ukusom, ova mala ali moćna kafica čini savršen početak dana.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 2,
    productName: "Espresso dugi",
    price: 130.0,
    productImage: product2,
    description: "Espresso dugi je produžena verzija klasičnog espressa, pružajući isti ukus i karakter, ali sa malo više vode, što rezultira nešto blažom notom i produženim uživanjem u kafi.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 3,
    productName: "Espresso kratki sa mlekom",
    price: 140.0,
    productImage: product3,
    description: "Intenzivna kafa obogaćena kremastim dodatkom mleka. Ovaj spoj espressa i mleka donosi savršenu ravnotežu između snažne kafe i kremastog mleka, stvarajući zadovoljavajući i bogat ukus koji osvaja srca ljubitelja kafe.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 4,
    productName: "Espresso dugi sa mlekom",
    price: 150.0,
    productImage: product4,
    description: "Produženi espresso obogaćen mlekom za savršenu harmoniju arome i ukusa. Produženi espresso sa mlekom nudi istu jačinu i kompleksnost kao i klasični espresso, ali sa dodatkom mleka koji pruža nežnu i kremastu teksturu, čineći ga idealnim izborom za one koji vole blaži ukus.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 5,
    productName: "Americano",
    price: 150.0,
    productImage: product5,
    description: "Osvežavajući spoj espresso kafe i vruće vode, idealan za laganije uživanje. Americano je klasičan izbor za one koji traže osveženje uz lagani udarac kafe, napitak koji nudi uravnoteženu aromu i blagu gorčinu, idealnu za bilo koje doba dana.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 6,
    productName: "Americano sa mlekom",
    price: 160.0,
    productImage: product6,
    description: "Lagani američki espresso upotpunjen toplim mlekom za blaži kremasti ukus. Americano sa mlekom kombinuje lagani osvežavajući ukus americana sa kremastim mlekom, stvarajući izvanredno uravnotežen napitak koji će vas osvojiti svojom mekoćom i toplinom.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 7,
    productName: "Macchiato",
    price: 150.0,
    productImage: product7,
    description: "Izražajna kombinacija espresa sa malo mleka za blagu kremastu notu. Macchiato je elegantan i sofisticiran napitak, sastavljen od espressa i malog dodatka mleka koji mu daje nežniji ukus. Ova balansirana kombinacija nudi savršeno iskustvo za one koji vole osetiti punoću espressa uz blagi dodir mleka.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 8,
    productName: "Espresso Macchiato",
    price: 140.0,
    productImage: product8,
    description: "Čisto zadovoljstvo ukusa espressa obogaćeno sa malo mleka. Espresso Macchiato je jednostavan, ali izrazito ukusan napitak, koji kombinuje čist, jak ukus espressa sa malo mleka, pružajući izvanredno uravnoteženo iskustvo za prave ljubitelje kafe.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 9,
    productName: "Cappuccino",
    price: 150.0,
    productImage: product8,
    description: "Bogatstvo arome i ukusa u spoju espressa, mleka i mlečne pene. Cappuccino je klasični italijanski napitak koji spaja intenzivnu aromu espressa sa kremastim mlekom i bogatom mlečnom penom na vrhu. Ovaj balansirani spoj pruža savršenu harmoniju ukusa i teksture, idealan za uživanje u svakom trenutku.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 10,
    productName: "Latte",
    price: 160.0,
    productImage: product8,
    description: "Lagana kombinacija espresso kafe i toplog mleka. Latte je neodoljivo kremasti napitak koji kombinuje intenzivan ukus espressa sa nežnom teksturom mleka. Ovaj napitak je savršen izbor za one koji vole da uživaju u nežnoj i kremastoj kafi sa blagim dodatkom mleka.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 11,
    productName: "Mocha Bela Čokolada",
    price: 170.0,
    productImage: product8,
    description: "Savršeni spoj bele čokolade, espresso kafe i kremaste mlečne pene. Mocha Bela Čokolada je slatka i osvežavajuća poslastica koja spaja bogati ukus bele čokolade sa intenzivnom aromom espressa i kremastom teksturom mlečne pene. Ovaj napitak će vas očarati svojom slatkoćom i bogatstvom ukusa, pružajući pravo zadovoljstvo za sva vaša čula.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 12,
    productName: "Mocha Crna Čokolada",
    price: 170.0,
    productImage: product8,
    description: "Intenzivna kombinacija tamne čokolade, espressa i kremaste pene. Mocha Crna Čokolada je napitak za prave ljubitelje tamne čokolade i espressa. Ovaj bogati i zavodljivi napitak kombinuje intenzivan ukus tamne čokolade sa klasičnom aromom espressa i kremastom teksturom mlečne pene, pružajući savršenu harmoniju slatkoće i gorčine.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 13,
    productName: "Mocha Lešnik",
    price: 170.0,
    productImage: product8,
    description: "Osvežavajuća kombinacija lešnika, espressa i kremaste mlečne pene. Mocha Lešnik je napitak koji spaja intenzivan ukus lešnika sa aromatičnim espressom i kremastom mlečnom penom. Ovaj slatki i osvežavajući napitak pruža neodoljivu kombinaciju bogatstva ukusa, savršenu za uživanje u svakom trenutku.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 14,
    productName: "Flat White",
    price: 170.0,
    productImage: product8,
    description: "Balansirani spoj espressa i mleka sa tankim slojem pene na vrhu. Flat White je elegantan i sofisticiran napitak koji kombinuje intenzivnu aromu espressa sa svilenkasto glatkom teksturom mleka. Ovaj uravnoteženi spoj pruža bogato i kremasto iskustvo, uz diskretan sloj pene na vrhu koji dodatno obogaćuje ukus.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 15,
    productName: "Lungo Ristretto",
    price: 150.0,
    productImage: product8,
    description: "Dugi espresso sa koncentrisanim ukusom i blagom, kremastom notom. Lungo Ristretto je produžena verzija klasičnog espressa, ali sa malo intenzivnijim ukusom. Ovaj napitak pruža savršenu ravnotežu, idealnu za one koji traže nešto više od uobičajene kafe.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 16,
    productName: "Affogato",
    price: 180.0,
    productImage: product8,
    description: "Egzotična poslastica koja spaja espressso sa sladoledom za savršen spoj topline i osveženja. Affogato je jednostavna ali izuzetno ukusna poslastica koja spaja intenzivan ukus espressa sa osvežavajućom slatkoćom sladoleda. Ovaj spoj topline i osveženja pruža nezaboravno iskustvo za sva vaša čula.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 17,
    productName: "Affogato sa sladoledom",
    price: 190.0,
    productImage: product8,
    description: "Ukusni espresso zaliven preko sladoleda za neodoljivu kombinaciju kafe i slatkoće. Affogato sa sladoledom je slatka i osvežavajuća poslastica koja spaja intenzivan ukus espressa sa kremastom slatkoćom sladoleda. Ovaj neodoljivi spoj pruža savršeno zadovoljstvo za sva vaša čula, idealan za uživanje u svakom trenutku.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 18,
    productName: "Frappuccino",
    price: 200.0,
    productImage: product8,
    description: "Osvežavajući miks ledenog espresso napitka, mleka i sladoleda. Frappuccino je osvežavajući napitak koji spaja intenzivan ukus espressa sa kremastom slatkoćom mleka i sladoleda. Ovaj osvežavajući spoj pruža savršenu ravnotežu između kafe i slatkoće, idealan za uživanje u toplim danima.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 19,
    productName: "Turkish Coffee",
    price: 120.0,
    productImage: product8,
    description: "Tradicionalna turska kafa, bogata i aromatična. Turska kafa je tradicionalni napitak koji se priprema na poseban način, pružajući intenzivan ukus i bogatu aromu. Ova tradicionalna poslastica je idealna za one koji traže autentično i nezaboravno iskustvo kafe.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 20,
    productName: "Turkish Coffee sa mlekom",
    price: 130.0,
    productImage: product8,
    description: "Turska kafa, tradicionalni napitak koji se priprema na poseban način, obogaćena kremastim mlekom za blagi dodir mekoće. Turska kafa sa mlekom kombinuje tradicionalnu aromu turske kafe sa kremastim mlekom, pružajući uravnoteženo i neodoljivo iskustvo za prave ljubitelje kafe.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 21,
    productName: "Cold Brew",
    price: 200.0,
    productImage: product8,
    description: "Osvežavajuća kafa pripremljena hladnim procesom, idealna za tople dane. Cold Brew je osvežavajući napitak koji se priprema na poseban način, pružajući glatku i osvežavajuću kafu bez gorčine. Ovaj napitak je idealan izbor za tople dane, pružajući trenutke osveženja i uživanja u svakom gutljaju.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 22,
    productName: "Cold Brew sa mlekom",
    price: 210.0,
    productImage: product8,
    description: "Ledena osvežavajuća hladna kafa obogaćena kremastim mlekom. Cold Brew sa mlekom je osvežavajući napitak koji spaja glatku i osvežavajuću kafu sa kremstim mlekom. Ovaj napitak pruža savršenu ravnotežu između osveženja, snažne kafe i kremastog mleka. Idealna za uživanje u toplim danima.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 23,
    productName: "Ice Coffee",
    price: 210.0,
    productImage: product8,
    description: "Osvežavajući napitak od kafe sa ledom, savršen za trenutke potpunog osveženja. Ice Coffee je osvežavajući napitak koji spaja intenzivan ukus kafe sa osvežavajućim ledom, pružajući trenutke potpunog osveženja i uživanja u svakom gutljaju. Ovaj napitak je idealan izbor za tople dane, pružajući osveženje i energiju kad vam je najpotrebnije.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 24,
    productName: "Ice Coffee sa sladoledom",
    price: 220.0,
    productImage: product8,
    description: "Ukusna kombinacija hladne kafe i sladoleda za dodatnu slatkoću i osveženje. Ice Coffee sa sladoledom je osvežavajući napitak koji spaja intenzivan ukus kafe sa kremastom slatkoćom sladoleda, pružajući neodoljivu kombinaciju osveženja i slatkoće. Ovaj napitak je savršen izbor za uživanje u toplim danima, pružajući trenutke osveženja i zadovoljstva.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 25,
    productName: "Ice Coffee sa mlekom",
    price: 220.0,
    productImage: product8,
    description: "Kremasti, osvežavajući, ledeni napitak od kafe obogaćen mlekom. Ice Coffee sa mlekom je osvežavajući napitak koji spaja intenzivan ukus kafe sa kremastim mlekom, pružajući savršenu ravnotežu između osveženja i punog intenziteta kafe. Ovaj napitak je idealan izbor za tople dane, pružajući trenutke osveženja i uživanja u svakom gutljaju.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 26,
    productName: "Topla čokolada",
    price: 270.0,
    productImage: product8,
    description: "Topla poslastica koja pruža trenutke čistog užitka u svakom gutljaju. Topla čokolada je neodoljiva poslastica koja predstavlja spoj najukusnije belgijske čokolade i mleka. Sa svojom bogatom i kremastom teksturom, ova poslastica je savršen izbor za hladne dane, pružajući trenutke čistog užitka i zadovoljstva.",
    size: {
      sizeS: 0.0,
      sizeM: 10.0,
      sizeL: 20.0
    },
    extra: {
      milk: 10,
      almond: 20,
      soy: 30
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
];
