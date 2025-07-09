// const removeFromArray = function(arr, ...unwanteds) {
//     for(i=0;i < unwanteds.length; i++){
//         let unwanted = unwanteds[i];
//         while (arr.includes(unwanted)) {
//             arr.splice(arr.findIndex(value => value === unwanted), 1);
//         }
//     }
//     return arr;

// };

function removeFromArray(arr, ...unwanted){
    return arr.filter(T => !unwanted.includes(T))
}

// Do not edit below this line
module.exports = removeFromArray;
