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

function createFareMultiplier(int){
    return function(fare) {
        const t = int * fare
        return t
    }
} 

const fareDoubler = (function(int){
    return createFareMultiplier(int)(2)
})

const fareTripler = (function(int){
    return createFareMultiplier(int)(3)
})

const selectDifferentDrivers = (driversArray,fn) => fn(driversArray)