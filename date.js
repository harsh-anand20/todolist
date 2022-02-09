// ***** CREATING MODULES TO EXPORT ***** //

exports.getDate = function() {
    const today = new Date();

    const optiions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    return today.toLocaleDateString("en-US", optiions);
}

exports.getDay =  function() {
    const today = new Date();

    const optiions = {
        weekday: 'long',
    }

    return today.toLocaleDateString("en-US", optiions);
}




// ***** BEFORE CODE REFACTOR ***** //
// ***** FOR UNDERSTANDING ***** //

// module.exports.getDate = getDate;
// module.exports.getDay = getDay;

// function getDate() {
//     const today = new Date();

//     const optiions = {
//         weekday: 'long',
//         day: 'numeric',
//         month: 'long'
//     }

//     return today.toLocaleDateString("en-US", optiions);
// }

// function getDay() {
//     const today = new Date();

//     const optiions = {
//         weekday: 'long',
//     }

//     return today.toLocaleDateString("en-US", optiions);
// }