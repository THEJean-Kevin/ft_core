const Enum = (t)=>{
    if(Array.isArray(t)){
        var object = {};
        var index = 0
        t.forEach(element => {
            object[element] = index;
            index++
        });
        return Object.freeze(object)
    }else{
        return Object.freeze(t)
    }
}