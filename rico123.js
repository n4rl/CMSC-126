function palindromee(){
    
    var streng = document.getElementById("word").value;
    streng = streng.replace(/\s+/g, '');
    streng = streng.replace(/[^a-zA-Z0-9+]/g, ""); 
    streng = streng.toLowerCase();
    
    var streng1 = streng.split("").reverse().join("");
    
    var n = streng.localeCompare(streng1);
    
    if (n == 0){
         document.getElementById("palindrome").innerHTML = streng1 +" is a Palindrome";
    } else{
          document.getElementById("palindrome").innerHTML = streng1 + " is not a Palindrome";
    }  
}