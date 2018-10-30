
// ('AAABbbbBcCCC') => 'A3Bb3BcC3'
function compressString(s) {
    let repeatCount = 1;

    return Array.prototype.reduce.call(s, (compressed, cur, i) => {
        if (compressed[compressed.length - 1] == cur) {
            ++repeatCount;
            if (i == s.length - 1) {
                compressed += repeatCount;
            }

            return compressed;
        } 

        if (repeatCount > 1) {
            compressed += repeatCount;
            repeatCount = 1; 
        }
        
        return compressed += cur;
    })
}
