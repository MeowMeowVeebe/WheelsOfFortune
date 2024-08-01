let show1 = document.getElementById("BoardShow")
let Information1 = document.getElementById("Information")

let c = "no"

let flashinglight = false
let boolorfalse = true
show1.style.visibility = "hidden"
Information1.style.visibility = "hidden"


var randomtabletruth = Truth.length

var randomtabledare = Dare.length


console.log(randomtabletruth)

var m = 0;



const rainbow = [
  "#9400D3",
  "#4B0082",
  "#0000FF",
  "#00FF00",
  "#FFFF00",
  "#FF7F00",
  "#FF0000",
];

var currentColor = 0;


function changingrainbow(){
  setInterval(() => {

    currentColor++; 

    document.getElementById("titleofgame").style.color = rainbow[currentColor]

    if (currentColor == rainbow.length-1) {
    currentColor = 0;
    }
  }, 1000);

  
}



function show()
{

show1.style.visibility = "visible"
    
}




const  AnimationTimes = async () => {

  document.getElementById("Information").setAttribute("style","-webkit-animation: InvisibleToVisible 4s ease-in alternate;" + "  -moz-animation: InvisibleToVisible 4s ease-in alternate;" +  "animation: InvisibleToVisible 4s ease-in alternate");


Information1.style.visibility = "visible"

 show()

 var minimum = 0;

 if ("Truth" == table1[hasil]){

  document.getElementById("Text1").style.color = "white"

document.getElementById("Sign").style.color = "blue"
document.getElementById("Sign").style.left = "-10px"

m = randomtabletruth
 minimum = Math.floor(Math.random() * (m - 0) + 0 )


 document.getElementById("Text1").innerHTML = Truth[minimum];
 console.log(Truth[minimum])

 }
  else
  {
  document.getElementById("Text1").style.color = "white"
   m = randomtabledare
     minimum = Math.floor(Math.random() * (m - 0) + 0)


     document.getElementById("Text1").innerHTML = Dare[minimum];
     console.log(Dare[minimum])

document.getElementById("Sign").style.color = "red"

  }



 document.getElementById("Sign").innerHTML = table1[hasil];



while(true)
{

    
    if (flashinglight)
    {
   
     
        if (boolorfalse)
        {
          
          await wait(200)
          boolorfalse = false
      show1.src = " Asset/light_2.png  "
        }
       else
       {
        boolorfalse = true
        await wait(200)
      show1.src = " Asset/light_1.png  "

       }
    


        }

}



}



const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));