// Linear O(n), this is optimized

function urlIfy(str) {
  let url = ''
    for(let i=0; i<str.length; i++){ 
      if(str[i] !== ' '){
        url += str[i]
      } else {
        url += '%20'
      }
    }
    console.log(url)
  }

urlIfy('www.thinkful.com /tauh ida par')
