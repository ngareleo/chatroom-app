  function badword(){
        var text = document.getElementById("text").value;
        var arraynames = ['fuck','cunt','bitch','shit'];
        
        var badText = fieldValue.split(" ");
        for (var name of badText){
                for (var bdt of arraynames ){
                    if(arraynames[i] != "" && name === bdt){
                        alert("profanity detected");
                        return false;
                    }
                }
        }
                
    }
           