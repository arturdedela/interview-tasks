

function partition(arr, left, right) {
    const midIndex = Math.floor((left + right) / 2)
    const pivot = arr[midIndex];

    while (left <= right) {
        while (arr[left] < pivot) left++;
        while (arr[right] > pivot) right--;

        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    return left;
}

function quicksort(arr, left, right) {
    if (left >= right) {
        return;
    }

    let index = partition(arr, left, right);
    quicksort(arr, left, index - 1);
    quicksort(arr, index, right);
    
    return arr;
}

function swap(items, a, b){
    const temp = items[a];
    items[a] = items[b];
    items[b] = temp;
}