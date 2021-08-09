const returnFirstTwoDrivers = (
    function(array){
        const driver1 = array[0]
        const driver2 = array[1]
        const newArray = [driver1, driver2]
        return newArray
    }
)

const returnLastTwoDrivers = (
    function(array){
        const driver1 = array[array.length - 2]
        const driver2 = array[array.length - 1]
        const newArray = [driver1, driver2]
        return newArray
    }
)

const selectingDrivers =[
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
]

/*
createFareMultiplier() — This is a higher-order function that takes in one argument,
an integer, and returns a function that will multiply a fare for a ride accordingly. 
For example, if createFareMultiplier() receives an argument of 4, it will return 
a function that takes in a fare as an argument and quadruples the fare
*/

function createFareMultiplier(int){
    return afunction(int)
} 