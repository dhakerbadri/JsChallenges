function palindrome(str) {
    let newStr = str.replace(/\s+/g, '').toLowerCase();;
    newStr = newStr.replace(/[^a-z0-9]/gi, '');
    let j=newStr.length-1;
    let pal=true;
    for (let i=0;i<=newStr.length/2;i++){
      if(newStr[i]!=newStr[j]){
        pal=false;
      }
      j--;
    }
  return pal;
  }
  
  palindrome("eye");