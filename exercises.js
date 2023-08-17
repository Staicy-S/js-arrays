const products = [
  {
    name: "iPhone",
    price: 1200,
  },
  {
    name: "console",
    price: 350,
  },
  {
    name: "toothbrush",
    price: 5,
  },
  {
    name: "sticky notes",
    price: 5,
  },
  {
    name: "fork",
    price: 5,
  },
];

products.push({ name: "heatable shoes", price: 50 });
products.push({ name: "tupperware", price: 15 });
// console.log(products);

const lastItem = products.pop(); // entfert immer den letzten Eintrag des arrays
// console.log(products);
// console.log("lastitem: " + lastItem);

// um einen Eintrag als allererstes zu einem bereits existierenden array hinzuzufügen, nutzt man array.unshift()
products.unshift({ name: "laptop", price: 1500 });
// console.log(products);

// array.shift() entfernt den allerersten Eintrag des arrays

// array.slice(x) schneidet das array ab x ab
// array.slice(x,y) schneidet das array von x bis y ab (x ist beinhaltet, y aber nicht mehr!)
console.log(products.slice(3, 5)); // der vierte (3) Eintrag ist dabei, der sechste (5) aber nicht! Ändert nichts an dem existierenden array

// array.splice(an welchen index wollen wir gehen, wie viele elemente wollen wir löschen, womit ersetzen wir es)
products.splice(
  2,
  0,
  { name: "new product", price: 99 },
  { name: "newest product", price: 999 }
);
console.log(products);
