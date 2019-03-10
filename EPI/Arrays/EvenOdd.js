// Input is an array of integers. Reorder its entries so that the even entries appear first.

function EvenOdd(arr) {
    let p1 = 0, p2 = arr.length - 1;

    while (p1 < p2) {
        if (arr[p1] % 2 === 0) {
            p1++;
        } else {
            arr[p1] = [arr[p2], arr[p2] = arr[p1]][0];
            p2--;
        }
    }

    return arr;
}