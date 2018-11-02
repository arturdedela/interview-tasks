

function compressString(s) {
  const arr = s.split('');

  let compressed = '', cnt = 1;
  arr.forEach((v, i) => {
    if (compressed[[compressed.length] - 1] === v) {
      cnt++;

      if (i === arr.length - 1) {
        compressed += cnt;
      }
      return;
    }

    if (cnt > 1) {
      compressed += cnt;
      cnt = 1;
    }

    compressed += v;
  });

  return compressed;
}

module.exports = compressString;