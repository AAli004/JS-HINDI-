// ***** Dates *****
/*
JS Mein Date Ek Built-in-Object Hai 
Iska Kaam date+time Ko Store Aur handle Karna 
JS Stores dates as number of miliseconds since January 01,1970
*/

let myDate = new Date()
    /*
        // console.log(myDate);
        // console.log(myDate.toString()) // Note; Output according present date and time
    console.log(myDate.toDateString()); // Output = Thu Jan 08 2026 (*Note:Output according present date)
    // console.log(myDate.toISOString());
    // console.log(myDate.toLocaleString()); // output : 8/1/2026,8:58:36 pm
    // console.log(myDate.toLocaleDateString()); // output : 8/1/2026
    // console.log(myDate.toJSON());

    console.log(typeof myDate); // Output : object
    */


let myCreatedDate = new Date(2023, 0, 23)

// console.log(myCreatedDate); // Its output is difficult to read
//console.log(myCreatedDate.toDateString()); // output: Mon Jan 23 2023 , *Note: Months Start from Zero in JScript based on array

let myCreatedDate0 = new Date(2023, 1, 23)
    //console.log(myCreatedDate0.toDateString()); // Output : Thu Feb 23 2023  



let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
    // console.log(myCreatedDate1);
    /*
    console.log(myCreatedDate1.toLocaleDateString()); // Output : 23/1/2023
    console.log(myCreatedDate1.toDateString()); // Output : Mon Jan 23 2023
    console.log(myCreatedDate1.toLocaleString()); // Output : 23/1/2023, 5:03:00 am
    */



let myCreatedDate2 = new Date("2026-01-12")
    // console.log(myCreatedDate2); // Its output is difficult to read
    // console.log(myCreatedDate2.toLocaleString()); // Output : 12/1/2026, 5:30:00 am , *Note : Month satrts from 1 when you write YYMMDD

let myCreatedDate4 = new Date("01-14-2023")
    // console.log(myCreatedDate4.toLocaleString()); // Output : 14/1/2023, 12:00:00 am



// ***** Times *****



// let mytimeStamp = new Date.now() // Eshe Bhi Likh sakte hain 
let myTimeStamp = Date.now() // very important
    // console.log(myTimeStamp); // It provides output in milisecond from January 01,1970
    // console.log(myCreatedDate4.getTime()); // It is used To compare value in milisecond ,
    //  getTime() provides value in milisecond 
    // console.log(Math.floor(Date.now() / 1000)); // To Convert milisecon in second ; Date.now() provides exact date

let newDate = new Date()
    /*
    console.log(newDate);
    console.log(newDate.getDate()); // IT satrts Monday
    console.log(newDate.getMonth()); // It starts January=0
    console.log(newDate.getMonth() + 1); // output = 1 , Note ; to exact value 

    console.log(newDate.getFullYear()); // output = 2026

    */


// tolocaleString() ke andar object define kiya jata hai  iske ander iske ek se jyada properties define kar sakte hain 
console.log(newDate.toLocaleString('default', {
        weekday: "long"
    })) // output : Thursady