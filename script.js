let quoteList =["I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.","If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.", "Believe you can and you're halfway there.", "Learn the rules like a pro, so you can break them like an artist.", "Do one thing every day that scares you.", "I didn't get there by wishing for it or hoping for it, but by working for it.", " If you can dream it, you can do it.", "Even if you are on the right track, you'll get run over if you just sit there.", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "Strength does not come from physical capacity. It comes from an indomitable will."]
console.log(quoteList.length);
const random = Math.floor(Math.random() * quoteList.length);
console.log(random, quoteList[random])

let quote = document.querySelector(".quote")

function showRandomQuote (){
    quote.innerHTML = quoteList[random]
}

showRandomQuote ()



// quoteList.forEach(function(quoteElm){
//     console.log(quote);
//     quote.textContent = quoteElm
// })


