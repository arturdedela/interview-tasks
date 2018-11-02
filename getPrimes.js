
// Via Sieve of Eratosthenes
function getPrimes(n) {
  let sieve = [, false]; // 1 - not prime
  for (let i = 2; i < n; i++) {
    sieve[i] = true;
  }

  for (let i = 2; i * i < sieve.length; i++) {
    if (sieve[i]) { // Simple
      for (let k = i * i; k < n; k += i) {
        sieve[k] = false;
      }
    }
  }

  return sieve.reduce((primes, isSimple, i) => {
    if (isSimple) {
      primes.push(i);
    }
    return primes;
  }, []);
}


module.exports = getPrimes;