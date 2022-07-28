export function quickSort(array) {

    const animations = [];
    quick(array, 0, array.length - 1, animations);
    return animations;

}

function quick(array, low, high, animations) {

    if (low < high) {

        var part = partition(array, low, high, animations);

        quick(array, low, part - 1, animations);
        quick(array, part + 1, high, animations);

    }
}

function partition(array, low, high, animations) {

    var point = array[high];
    var i = low;

    for (let j = low; j <= high - 1; j++) {

        if (array[j] < point) {

            swap(array, i, j, animations);
            i++;

        }

    }
    swap(array, i, high, animations);
    return i;

}

//Swaps the values at index i and j using a temp variable
//Uses the animations array to store the values that will be used to change the height and color of the bars
function swap(array, i, j, animations) {

    animations.push([i, j]);
    animations.push([i, j]);

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    animations.push([i, array[i]]);
    animations.push([j, array[j]]);

}