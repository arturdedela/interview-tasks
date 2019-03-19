

function canWin(arr, pos = 0) {
    if (pos === arr.length - 1) {
        return true;
    }

    let maxStep = arr[pos];
    for (let i = pos + maxStep; i > pos; --i) {
        if (canWin(arr, i)) {
            return true;
        }
    }

    return false;
}


function canWinNoRecursion(arr) {
    let furthest = 0, lastIndex = arr.length - 1;

    for (let i = 0; i <= furthest && furthest < lastIndex; ++i) {
        furthest = Math.max(furthest,  i + arr[i]);
    }

    return furthest >= lastIndex;
}
