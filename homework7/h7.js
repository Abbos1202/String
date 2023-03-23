/**
 * @param {number} year 
 */

function Year(year) {
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        return `${year}-Kabisa yili`
    }else {
        return `${year}-Kabisa yili emas`
    }
}

[2017,2020].forEach(year=> console.log(Year(year)))