const M = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')
const moment = MomentRange.extendMoment(M)

//Will create the year
let year = moment().range('year')

//For each month of the year, print the days
_.forEach(Array.from(year.by('months')), month => {

//prints the days of week
console.log(_.pad(month.format('MMMM'), 26, ' - '))
console.log('S   M   T   W   Th  F   S   ')

let monthRange = month.range('month')
let firstDay = monthRange.start.day()


//Create an array of  days in the month - use Array.from(monthRange.by('days'))
let days = Array.from(monthRange.by('days'))


// Then, we'll perform several operations on this array of days

let paddedDays = _.map(days, day => 
    { // Transforms items in the array


    // TODO: Change this to output a two-digit date use day.format()
        let date = day.format('DD');

    // TODO: Highlight September 10th in color 
    if (day.month() == 8 && day.date() == 10) 
    {
        date = chalk.bgBlue(date);
    }
    // TODO: Highlight YOUR birthday in color! - August 31st
            
    else if (day.month() == 7 && day.date() == 31)
    {
        date = chalk.bgGreen(date);
            
    }
    
    return _.padEnd(date, 2)
    
})

//TODO: create a for() loopthat loops through month.day()
for (i = 0; i < month.day(); i++)

{
    //TODO: Append blank spaces (using paddedDays.unshift('  ')) so that the 1st ends up under the right day column 
   paddedDays.unshift('  ')     
    
}

// Changes the array of days to be an array of weeks, each week containing 7 items from the days array [["  ","  ","  ",01,02,03,04],[05,06...]]
paddedDays = _.chunk(paddedDays, 7) 


paddedDays.forEach(week => 
    {
        [00, 01, 02, 03, 05, 06, 07,]
        //[ , , , 01, 02] 

        // TODO: Join the days together to form one string representing the week
        console.log(week.join('  '));   // this tic marks set space between the calendar date
    })

console.log('') // Puts a blank line between each month

})

