function inclick(sub){
    var che=document.getElementsByName("skills")
    che.forEach(
        (submitt) => {
            if(submitt !==sub) 
            submitt.checked=false
        }
    )
}