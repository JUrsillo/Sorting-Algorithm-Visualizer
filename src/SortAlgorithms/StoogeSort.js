export function stoogeSort(array) {

    const animations = [];

    stooge(array, 0, array.length - 1, animations);

    return animations;

}

function stooge(array, left, right, animations) {

    //If we have 9 elements in the array, we need to add 1 since right - left would give us the wrong value
    //When we call parseInt() we would be recieving a value of 2 "(8 - 0)" instead of 3 "(8 - 0 + 1)"
    //By adding 1 to right - left, we are accounting for the total length of the array
    //This will give us the correct truncation when we call parseInt()
    var range = right - left + 1;

    if (left >= right) {

        return;

    }

    if (array[left] > array[right]) {

        swap(array, left, right, animations);

    }

    if (range > 2) {

        var shift = parseInt(range / 3);

        stooge(array, left, right - shift, animations);
        stooge(array, left + shift, right, animations);
        stooge(array, left, right - shift, animations);

    }


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