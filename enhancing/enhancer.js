module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement <= 19) {
    item.enhancement += 1;
  } else {
    item.enhancement = 20;
  };
  return { ...item };
}

function fail(item) {
  if (item.enhancement > 16) {
    item.enhancement -= 1;
  };
  if (item.enhancement < 15) {
    item.durability -= 5;
  } else {
    item.durability -= 10;
  };
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
