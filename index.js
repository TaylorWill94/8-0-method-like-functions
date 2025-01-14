/**
 * Appends an element or multiple elements to the end of an array. Do not use the push method.
 * @param {Array[]} array - an array of with any kind of elements.
 * @returns {number} the new length of the array.
 */

function myPushFunction(array, element) {
  array[array.length] = element;
  return array.length;
}

/**
 * Removes the last element of the array and returns the removed element or undefined if the array is empty. Do not use the pop method.
 * @param {Array[]} array - an array of with any kind of elements.
 * @returns {number} the new length of the array .
 */
function myPopFunction(array) {
  if (array.length === 0) {
    return undefined;
  }

  let removedElement = array[array.length - 1];
  array.length = array.length - 1;

  return removedElement;
}

/**
 * Determine whether an array includes a specific value within its entries. Do not use the includes method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @returns {boolean} returns true or false if the searchElement is found in the array.
 */
function myIncludesFunction(array, searchElement) {
  //let found = false;
  for (const arr of array) {
    if (arr === searchElement) {
      return true;
    }
  }
  return false;
}

/**
 * Return the first index in an array where a specified value is found. Do not use the indexOf method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @returns {number} returns the index at which the searchElement is found or -1.
 */
function myIndexOfFunction(array, searchElement) {
  for (let i = 0; i < array.length; i++) {
    const arr = array[i];
    if (arr === searchElement) {
      return i;
    }
  }
  return -1;
}

/**
 * Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
 * where start and end represent the index of items in that array. The original array will not be modified. Do not use the slice method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {number} [startIdx] - an optional number representing the starting index of the extraction. The startIdx can be negative.
 * @param {number} [endIdx] - an optional number representing the ending index of the extraction (non-inclusive). The endIdx can be negative.
 * @returns {Array[*]} returns a new array containing the extracted elements.
 */
function mySliceFunction(array, startIdx, endIdx) {
  let newArr = [];

  if (!startIdx || !endIdx) {
    newArr = array;
    return newArr;
  }

  if (startIdx || endIdx) {
    for (let i = 0; i < array.length; i++) {
      //i = startIdx;
      newArr = array;
      return newArr;
    }
  }
  let i = startIdx;
  while (i < endIdx) {
    newArr[i] = array[i];
    i++;
  }
  return newArr;
}

//if (startIdx && endIdx) {
//return newArr;
//}

/**
 * Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. Do not use the join method.
 * @param {Array[*]} array - an array of with any kind of elements
 * @param {string} [separator] - an optional string to separate each pair of adjacent elements of the array. If no separator is specific the default separator should be a comma (",")
 * @returns {string} returns a new array containing the extracted elements
 */
function myJoinFunction() {}

/**
 * Returns an array with the elements reverse. The first array element becomes the last, and the last array element becomes the first. Do not use the reverse method.
 * @param {Array[*]} array - an array of with any kind of elements
 * @returns {Array[*]} returns the array with the elements reversed.
 */
function myReverseFunction() {}

/**
 * Returns an array with one or more elements added to the front of the array followed by the original elements. Do not use the unshift method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} newElement - an element of any type to add to the front of the array.
 * @returns {number} returns the new length of the array.
 */
function myUnshiftFunction() {}

module.exports = {
  myPushFunction,
  myPopFunction,
  myIncludesFunction,
  myIndexOfFunction,
  mySliceFunction,
  myJoinFunction,
  myReverseFunction,
  myUnshiftFunction,
};
