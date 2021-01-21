enum sides {
  base = 5,
  height,
}

function area(side1 = sides.base, side2 = sides.height) {
  console.log((1 / 2) * side1 * side2);
}

area();
