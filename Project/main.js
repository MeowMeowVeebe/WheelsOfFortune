
const wheeloffortune = document.getElementById("ImageWheel");
var bool = true
var degrees1 = 0
var numberofconsolelog = 0
var hasilmenentukan1 = 0

var plusnumber = 0;
let oldplusnumber = 0;
var hasil = 0;
let stoploop = true;
var hasiljadinumbah = 0;

var wheel = new Audio('wheel.WAV');

var winning = new Audio('jackspot.MP3');

var numberadd = 0;


changingrainbow()


var randomloop = Math.floor(Math.random() * (7 - 3) + 3 * 360)
console.log("randomloop" + randomloop )
var table1 = [
    "NULL" , "Truth" , "Dare" , "Truth" , "Dare" , "Truth" , "Dare" , "Truth" , "Dare"
    ] 

    const HASILPOSISI = [
        "NULL" , 0 , 45 , 90 , 135 , 180 , 225 , 270 , 315
        ] 


function calculatemathrandomeANDfindingdegree() {
    if (bool == true){
        bool = false 
let degrees = Math.ceil(Math.random() * 360 )

// let hasilmenentukan = Math.ceil(degrees / 45);
//console.log(hasilmenentukan);
//hasilmenentukan1 = hasilmenentukan

document.getElementById("Start").style.visibility = "hidden" 
degrees1 = degrees;
console.log("YOU PRESSED!")
wheelspinning()

    }

}

function returningtovalueanimation() {

  

    wheel.pause()
    wheel.currentTime = 0;

    console.log("HASILJADI= "+hasil)
    hasiljadinumbah = (HASILPOSISI[hasil])
    
    console.log("jadiposisisekitar" + hasiljadinumbah)
    oldplusnumber = plusnumber
    plusnumber = hasiljadinumbah - 5

    if (0 > plusnumber){
        plusnumber = 0;
    }
    
    document.documentElement.style
   .setProperty('--change1', wheeloffortune.style.transform = "rotate("+hasiljadinumbah+"deg)");

   var wheeloffortune1 = document.querySelector("#ImageWheel"); 
   wheeloffortune1.setAttribute("style","animation-name: backintoposition;" + "  animation-duration: 4s;");


console.log(wheeloffortune1);


    }

    const animated = document.querySelector("#ImageWheel");


    animated.onanimationend = () => {
        winning.play()
        flashinglight = true
      if (stoploop) 
      {
        console.log("stop now")
        stoploop = false;
        AnimationTimes()
      }
      };
function hmmm() {
if (degrees1 > 0 && degrees1 <= 45 ) 
{

    console.log(table1[1]);
    console.log("finally");
      hasil = 1;
      returningtovalueanimation()
}
else if (degrees1 > 45 && degrees1 <= 90 ) 
    {

        console.log(table1[2]);
        console.log("finally");
        hasil = 2;
        returningtovalueanimation()
    }
    else if (degrees1 > 90 && degrees1 <= 135) 
        {
   
            console.log(table1[3]);
            console.log("finally");
            hasil = 3;
            returningtovalueanimation()
        }
        else if (degrees1 > 135 && degrees1 <= 180 ) 
            {
  
                console.log(table1[4]);
                console.log("finally");
           
                hasil = 4;
                returningtovalueanimation()
            }
            else if (degrees1 > 180 && degrees1 <= 225 ) 
                {
                    console.log(table1[5]);
                    console.log("finally");
                    hasil = 5;
                    returningtovalueanimation()
                }
                else if (degrees1 > 225 && degrees1 <= 270 ) 
                    {
         
                        console.log(table1[6]);
                        console.log("finally");
                        hasil = 6;
                        returningtovalueanimation()
                    }
                    else if (degrees1 > 270 && degrees1 <= 315 ) 
                        {
                            
                            console.log(table1[7]);
                            console.log("finally");
                            hasil = 7;
                            returningtovalueanimation()
                        }
                        else if (degrees1 > 315 && degrees1 <= 360 ) 
                            {
                             
                                console.log(table1[8]);
                                console.log("finally");
                                hasil = 8;
                                returningtovalueanimation()
                            }
}




const  wheelspinning = async () => {


wheel.loop = true

for (let i = 1; i < randomloop ; i++)
{
 
    console.log(i);                 
    wheel.play()
   
    if (i == randomloop - 1 ) {
        console.log("passed");       
        plusnumber = 0;

        for (let b = 1; b < degrees1 ; b++)
        {
            if (b > degrees1 ||  b ==  degrees1 || b >  degrees1 - 10){
                console.log("finally");
                hmmm()
                break
       }
       console.log(b);
            console.log("hello the degree is "+degrees1);
            plusnumber = plusnumber + 1;
            await sleep(1)
            wheeloffortune.style.transform = "rotate("+plusnumber+"deg)";
          
        }
      
    }


 
   

   

        await sleep(1)
    numberofconsolelog = numberofconsolelog + 1

    plusnumber = plusnumber + 5;
    numberadd = plusnumber + 1 


    wheeloffortune.style.transform = "rotate("+plusnumber+"deg)";  
   // var wheelofnooo = wheeloffortune.style.transform;

}




}

function returnfalseintotrue() {





}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


// wheeloffortune.style.transform = "rotate("+degrees+"deg)";