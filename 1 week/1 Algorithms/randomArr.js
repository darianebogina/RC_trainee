function generateArray(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 1000) + 1);
}

module.exports = generateArray;
