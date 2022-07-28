import React from "react";
import './SortVisualizer.css'
import { merged } from "../SortAlgorithms/MergeSort";
import { bubbleSort } from "../SortAlgorithms/BubbleSort";
import { quickSort } from "../SortAlgorithms/QuickSort";
import { stoogeSort } from "../SortAlgorithms/StoogeSort";

const TOTAL_BARS = 310;

export default class SortVisualizer extends React.Component {

    constructor() {
        super();

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    //Calls merge sort algorithm and animates the sorting process
    mergeSorted() {

        const animations = merged(this.state.array);

        //Loops through the animations array and uses the values stored to affect color and height of the bars
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChanging = i % 3 !== 2;

            if (isColorChanging) {
                const [barOne, barTwo] = animations[i];
                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                const color = i % 3 === 0 ? "red" : "turquoise";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;


                }, i * 3);
            } else {
                setTimeout(() => {
                    const [barOne, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOne].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 3);

            }

        }

    }

    //Populates the array with new random values for the height of the bars
    resetArray() {

        const array = [];

        for (let i = 0; i < TOTAL_BARS; i++) {

            array.push(randomInt(10, 700));

        }

        this.setState({ array });

    }

    resetColor() {

        for (let i = 0; i < TOTAL_BARS; i++) {

            const arrayBars = document.getElementsByClassName("array-bar");
            const barOneStyle = arrayBars[i].style;
            const color = "darkblue";
            barOneStyle.backgroundColor = color;

        }
    }

    //Calls bubble sort algorithm and animates the sorting process
    bubbleSorted() {

        var a = 1;


        const animations = bubbleSort(this.state.array);

        //Loops through the animations array and uses the values stored to affect color and height of the bars
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChanging = i % 4 !== 2;

            if (isColorChanging && a == 1) {

                const [barOne, barTwo] = animations[i];

                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                const color = i % 4 === 0 ? "red" : "turquoise";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 1);
            } else {

                if (a == 1) {
                    setTimeout(() => {
                        const [barOne, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOne].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, i * 1);

                    a = 0;

                } else {
                    setTimeout(() => {
                        const [barSecond, newHeightTwo] = animations[i];
                        const barTwoStyle = arrayBars[barSecond].style;
                        barTwoStyle.height = `${newHeightTwo}px`;

                    }, i * 1);

                    a = 1;

                }

            }

        }

    }

    //Calls quick sort algorithm and animates the sorting process
    quickSorted() {

        var a = 1;

        const animations = quickSort(this.state.array);

        //Loops through the animations array and uses the values stored to affect color and height of the bars
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChanging = i % 4 !== 2;

            if (isColorChanging && a == 1) {

                const [barOne, barTwo] = animations[i];

                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                const color = i % 4 === 0 ? "red" : "turquoise";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 3);
            } else {

                if (a == 1) {
                    setTimeout(() => {
                        const [barOne, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOne].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, i * 3);

                    a = 0;

                } else {
                    setTimeout(() => {
                        const [barSecond, newHeightTwo] = animations[i];
                        const barTwoStyle = arrayBars[barSecond].style;
                        barTwoStyle.height = `${newHeightTwo}px`;

                    }, i * 3);

                    a = 1;

                }

            }

        }

    }

    //Calls stooge sort algorithm and animates the sorting process
    stoogeSorted() {

        var a = 1;

        const animations = stoogeSort(this.state.array);
        console.log(animations);

        //Loops through the animations array and uses the values stored to affect color and height of the bars
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChanging = i % 4 !== 2;

            if (isColorChanging && a == 1) {

                const [barOne, barTwo] = animations[i];

                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                const color = i % 4 === 0 ? "red" : "turquoise";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 3);
            } else {

                if (a == 1) {
                    setTimeout(() => {
                        const [barOne, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOne].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, i * 3);

                    a = 0;

                } else {
                    setTimeout(() => {
                        const [barSecond, newHeightTwo] = animations[i];
                        const barTwoStyle = arrayBars[barSecond].style;
                        barTwoStyle.height = `${newHeightTwo}px`;

                    }, i * 3);

                    a = 1;

                }

            }

        }

    }

    //The value at the given index becomes the height of the bar
    render() {
        const { array } = this.state;

        return (
            <div className="container">
                {array.map((value, index) => (
                    <div className="array-bar"
                        key={index}
                        style={{ height: `${value}px` }}>

                    </div>
                ))}
                <button onClick={() => (this.resetArray(), this.resetColor())}>Generate New Array</button>
                <button onClick={() => this.mergeSorted()}>Merge Sort</button>
                <button onClick={() => this.bubbleSorted()}>Bubble Sort</button>
                <button onClick={() => this.quickSorted()}>Quick Sort</button>
                <button onClick={() => this.stoogeSorted()}>Stooge Sort</button>

            </div>


        );
    }

}

//Creates random integers ranging from 1 to the value of high
function randomInt(low, high) {

    return Math.floor(Math.random() * (high - low + 1) + low);

}

//Checks if two arrays are equal
function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
        console.log("Not equal");
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}