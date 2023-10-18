let array = [1, 2, "apple", "geni"];


function lengthInsideArray(arr) {
    let length=[];
    for (let i = 0; i < arr.length; i++) {
        
        if (typeof arr[i] === 'string') {
            length.push(arr[i].length);
        } else {
            length.push(0);
        }
    }
    return length; 
}

console.log(lengthInsideArray(array));
