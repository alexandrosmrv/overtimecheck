
// function starts
function suma(){
let hoursOvertime = document.getElementById("hoursOvertime-el").value; //grab the first input
let moneyOvertime = document.getElementById("moneyOvertime-el").value; //grab the second input
let restOFHoursOvertime = document.getElementById("restOFHoursOvertime-el").value; //grab the third input
let theEkApod = document.getElementById("theEkApod-el").value; //grab the fourth input
let finalMessage= document.getElementById("finalMessage-el"); // paragraph text show
let einaiSosto="'ΑΡΑ ΕΙΝΑΙ ΣΩΣΤΟ'" // message var

let singleHour=Number(moneyOvertime)/Number(hoursOvertime); //the math 
    let theTotalOf= Number(Math.floor(singleHour*restOFHoursOvertime));

//the logic 

if (hoursOvertime == null || hoursOvertime == "", moneyOvertime== null || moneyOvertime=="",restOFHoursOvertime==null || restOFHoursOvertime=="",theEkApod==null || theEkApod=="" ){
    alert("Παρακαλώ συμπληρώστε όλα τα πεδία")
}
    else if (theEkApod >= theTotalOf){
        finalMessage.innerText= ("Η ωρα σου πληρώνεται με " + Math.floor(singleHour)+"€" + " " +"Το ποσό που προκύπτει από τον υπολογισμό είναι " + theTotalOf +"€"+ " Χωρίς να έχει υπολογιστεί αν υπήρχε κάποια προσάύξηση" +" "+ einaiSosto)
    }else{
        finalMessage.innerText=("Επικοινωνήστε με το ROSTER τηλ.επικοιν. :2103534006");
    }

}



