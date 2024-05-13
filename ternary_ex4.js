function dayType(numOfDays) {
    return numOfDays === 0 ? "sunday" :
           numOfDays === 1 ? "monday" :
           numOfDays === 2 ? "tuesday" :
           numOfDays === 3 ? "wednesday" :
           numOfDays === 4 ? "thursday" :
           numOfDays === 5 ? "friday" :
           numOfDays === 6 ? "saturday" : "invarit day number" 
};

console.log(dayType(7));