export function bubbleSort(array) {

    var temp = 0;
    var sorted = false;
    const animations = [];

    //Checks if the array is sorted
    while (sorted !== true) {

        sorted = true;

        //Swaps the values at index i and i-1 using a temp variable
        //Uses the animations array to store the values that will be used to change the height and color of the bars
        for (let i = 1; i < array.length; i++) {

            if (array[i] < array[i - 1]) {
                animations.push([i - 1, i]);
                animations.push([i - 1, i]);

                temp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = temp;

                animations.push([i - 1, array[i - 1]]);
                animations.push([i, array[i]]);


                sorted = false;
            }


        }

    }

    return animations;
}
