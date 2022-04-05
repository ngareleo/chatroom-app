const cleanData = (data) => {
    var finalData = []
    for (var item of data){
        if (item != undefined && item.content != undefined){
            finalData.push(item);
        }
    }
}