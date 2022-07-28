export function merged(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const secondaryArray = array.slice();
    mergeSort(array, 0, array.length - 1, secondaryArray, animations);
    return animations;

}

export function merge(arr, left, mid, right, secondaryArray, animations) {

    var i = left;
    var j = mid + 1;
    var k = left;

    while (i <= mid && j <= right) {

        animations.push([i, j]);
        animations.push([i, j]);


        if (secondaryArray[i] <= secondaryArray[j]) {
            animations.push([k, secondaryArray[i]]);
            arr[k++] = secondaryArray[i++];
        } else {
            animations.push([k, secondaryArray[j]]);
            arr[k++] = secondaryArray[j++];
        }
    }

    while (i <= mid) {

        animations.push([i, i]);
        animations.push([i, i]);

        animations.push([k, secondaryArray[i]]);
        arr[k++] = secondaryArray[i++];
    }

    while (j <= right) {
        animations.push([j, j]);
        animations.push([j, j]);

        animations.push([k, secondaryArray[j]]);
        arr[k++] = secondaryArray[j++];
    }
}

export function mergeSort(arr, left, right, secondaryArray, animations) {

    if (left === right) {
        return;
    }
    var mid = left + parseInt((right - left) / 2);
    mergeSort(secondaryArray, left, mid, arr, animations);
    mergeSort(secondaryArray, mid + 1, right, arr, animations);
    merge(arr, left, mid, right, secondaryArray, animations);
    return animations;

}

