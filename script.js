let ism = prompt("Ismingizni kiriting: ");
let age = +prompt("Tugilgan yilingizni kiriting: ");
let year = +prompt("Hozirgi yilni kiriting: ");
function Year(c, d) {
  return c - d;
}
console.log(`Sizning ismingiz; ${ism} sizning yoshingiz: ${Year(year, age)} da`);