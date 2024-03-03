
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
    productName: "Espresso",
    price: 150.0,
    productImage: product1,
    description: "Espresso je jaka kafa napravljena pod visokim pritiskom vruće vode kroz fino mlevenu kafu.",
    size: {
      sizeS: 0.0,
      sizeM: 20.0,
      sizeL: 35.0
    },
    extra: {
      milk: 'Mleko',
      almond: 'Bademovo mleko',
      soy: 'Sojino mleko'
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 2,
    productName: "Americano",
    price: 180.0,
    productImage: product2,
    description: "Americano je napravljen dodavanjem vruće vode jednoj šolji espressa, obično u jednakim količinama.",
    size: {
      sizeS: 0.0,
      sizeM: 20.0,
      sizeL: 35.0
    },
    extra: {
      milk: 'Mleko',
      almond: 'Bademovo mleko',
      soy: 'Sojino mleko'
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 3,
    productName: "Macchiato",
    price: 150.0,
    productImage: product3,
    description: "Macchiato je espresso kafa sa malo penastog mleka, što znači da je 'maknut' odnosno mrljast.",
    size: {
      sizeS: 0.0,
      sizeM: 20.0,
      sizeL: 35.0
    },
    extra: {
      milk: 'Mleko',
      almond: 'Bademovo mleko',
      soy: 'Sojino mleko'
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 4,
    productName: "Cappuccino",
    price: 210.0,
    productImage: product4,
    description: "Cappuccino je espresso sa jednakim delovima pene, mleka i mlevene kafe.",
    size: {
      sizeS: 0.0,
      sizeM: 20.0,
      sizeL: 35.0
    },
    extra: {
      milk: 'Mleko',
      almond: 'Bademovo mleko',
      soy: 'Sojino mleko'
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 5,
    productName: "Latte",
    price: 160.0,
    productImage: product5,
    description: "Latte je espresso sa puno mleka i malo pene, obično se služi u velikim šoljama.",
    size: {
      sizeS: 0.0,
      sizeM: 20.0,
      sizeL: 35.0
    },
    extra: {
      milk: 'Mleko',
      almond: 'Bademovo mleko',
      soy: 'Sojino mleko'
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 6,
    productName: "Mocha",
    price: 180.0,
    productImage: product6,
    description: "Mocha je mešavina espressa, toplog mleka i čokolade.",
    size: {
      sizeS: 0.0,
      sizeM: 20.0,
      sizeL: 35.0
    },
    extra: {
      milk: 'Mleko',
      almond: 'Bademovo mleko',
      soy: 'Sojino mleko'
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 7,
    productName: "Turkish Coffee",
    price: 120.0,
    productImage: product7,
    description: "Turska kafa je tradicionalna metoda pravljenja kafe, koja se pravi od sitno samlevene kafe i vode.",
    size: {
      sizeS: 0.0,
      sizeM: 20.0,
      sizeL: 35.0
    },
    extra: {
      milk: 'Mleko',
      almond: 'Bademovo mleko',
      soy: 'Sojino mleko'
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
  {
    id: 8,
    productName: "Ice Coffee",
    price: 230.0,
    productImage: product8,
    description: "Ice coffee je kafa koja se služi hladna, često uz dodatak leda, mleka i sirupa.",
    size: {
      sizeS: 0.0,
      sizeM: 20.0,
      sizeL: 35.0
    },
    extra: {
      milk: 'Mleko',
      almond: 'Bademovo mleko',
      soy: 'Sojino mleko'
    },
    beans: {
      brasil: 'Brazil',
      cuba: 'Kuba',
      ethiopia: 'Etiopija'
    }
  },
];
