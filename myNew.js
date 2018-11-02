
function myNew(C, ...args) {
  const newObj = Object.create(C.prototype);

  C.apply(newObj, args);
  return newObj;
}

module.exports = myNew;