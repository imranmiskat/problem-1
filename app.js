// Problem solve = 1
function describeValue(value) {
    const name1 = "Imran";
    const name2 = value ? "truthy" : "falsy";

    return `${name1} | ${name2}`;
}


// Problem Solve = 2
function getDayType(day){

    const dayname = day.toLowerCase()

    switch(dayname){
        case "friday":
        case "saturday" :
            return "Weekend"
        case "sunday": 
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday" :  
            return "Working Day"

        default:
            return "Invalid Day"    
    }
}

