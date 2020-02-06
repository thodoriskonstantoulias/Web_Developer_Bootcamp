//Learn how to export modules 
//Refactoring of code -- We need to clear up the main app.js because some things does not belong there such as the date formatting for example
//For our module to be visible to the outside world we must module.export it 
//Also we could drop the module keyword

module.exports.getDate = getDate;

function getDate(){
    const today = new Date();

    const options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };
    
    return today.toLocaleDateString("en-US", options);
}

//Another way to export is : 
// module.exports.getDate = function(){
//     const today = new Date();

//     const options = {
//         weekday : "long",
//         day : "numeric",
//         month : "long"
//     };
    
//     return today.toLocaleDateString("en-US", options);
// }


module.exports.getDay = getDay;

function getDay(){
    const today = new Date();

    const options = {
        weekday : "long"
    };
    
    return today.toLocaleDateString("en-US", options);
}
