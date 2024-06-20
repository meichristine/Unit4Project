let bedSadEnd=document.querySelector(".bedSad");
let publicSadEnd=document.querySelector(".publicSad");
let quietSadEnd=document.querySelector(".quietSad");
let thugitoutSadEnd=document.querySelector(".thugitoutSad");
let resultButton=document.querySelector(".results");
let numError=document.querySelector(".numerror");
let locError=document.querySelector(".locerror");
// make functions to have values

resultButton.onclick=function(){
  let num = document.querySelector(".number").value;
  let loc = document.querySelector(".place").value;

  if(num > 4 && num < 11){
    if(loc == "Bedroom"){
      bedSadEnd.style.display="block";
    } else if(loc == "Nature"){
      quietSadEnd.style.display="block";
    } else if(loc == "Friends"){
      publicSadEnd.style.display="block";
    } else if(loc == "Party"){
      thugitoutSadEnd.style.display="block";
    }
  }
  
  if(num < 5 && num > 0){
    if(loc == "Bedroom"){
      quietSadEnd.style.display="block";
    } else if(loc == "Friends"){
      publicSadEnd.style.display="block";
    } else if(loc == "Party"){
      thugitoutSadEnd.style.display="block";
    } else if(loc == "Nature"){
      quietSadEnd.style.display="block";
    }
  }
  
  //Error messages
  if(num > 10 || num < 1){
    numError.style.display="block";
  }
  if(loc !== "Bedroom" && loc !== "Friends" && loc !== "Party" && loc !== "Nature"){
    locError.style.display="block";
  }
  
};