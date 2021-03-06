
//method to filter words
filterWords = (ArrayOfWords, word) => {
    if (ArrayOfWords.includes(word)) {
        return word = "***"
    } else {
        return word
    }
}

const { Observable } = require('rxjs');


String.prototype.filterWords3=function(wordsToFilter){
   return Observable.create((observer)=>{
       observer.next(this.split(' ').map((word) => filterWords(wordsToFilter, word)).join(' '));
       observer.complete();
   })
}

const T= "this house is nice!".filterWords3(["house", "nice!"]);
T.subscribe(data=>console.log(data),()=>console.log("complete"));





// String.prototype.filterWords2=async function(wordsToFilter){
    
//      const result=  await(this.split(' ').map((word)=>filterWords(wordsToFilter,word)).join(' '));
//      console.log(result);
   
// }
// const result= "this house is nice!".filterWords2(["house", "nice!"]);


//console.log("this house is nice!".filterWords(["house", "nice!"]));
// // //simple filter Word 
// String.prototype.filterWords = function (wordsToFilter) {
//     return this.split(' ').map((word) => filterWords(wordsToFilter, word)).join(' ');
// }
// console.log("this house is nice!".filterWords(["house", "nice!"]));


// // //filter words using Promise
// String.prototype.filterWords = function (wordsToFilter) {
//     const str = this;
//     return new Promise(function (resolve, reject) {
//         resolve(str.split(' ').map((word) => filterWords(wordsToFilter, word)).join(' '));
//     }
//     );
// };
// "this house is nice!".filterWords(["house", "nice!"]).then(data => console.log(data));


// // //filter words using async and await
// String.prototype.filterWords = async function (wordsToFilter) {
//     try {
//         return await this.split(' ').map((word) => filterWords(wordsToFilter, word)).join(' ');
//     } catch (error) {
//         console.log(error);
//     }
// }

// "this house is nice!".filterWords(["house", "nice!"]).then(data => console.log(data));


// // //filter words using Observable.
// const { Observable } = require('rxjs');

// String.prototype.filterWords = function (wordsToFilter) {
//     return obs$ = Observable.create((observer) => {
//         const result = this.split(' ').map((word) => filterWords(wordsToFilter, word)).join(' ');
//         observer.next(result);
//     })

// }

// const subsciption = "this house is nice!".filterWords(["house", "nice!"]);
// subsciption.subscribe(
//     function (result) {
//         console.log(result);
//     }
// )