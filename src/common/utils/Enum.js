const Enum = (array)=>{
    var object = {};
    var index = 0
    array.forEach(element => {
        object[element] = index;
        index++
    });
    return object
}