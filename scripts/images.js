let currentImages = []
let todo = 16

function randomNumber(){
    let random = Math.floor(Math.random() * 100);
    
    if(!currentImages.includes(random)){
        currentImages.push(random)
        todo--
    }
}

function onload() {
    
    while (todo >= 1)  {
      randomNumber()
    }
    currentImages.forEach((e,i) => {
        console.log(i)
        document.getElementById("image_" + i).style.backgroundImage = "url(https://images.placeholders.dev/?width=200&bgColor=%23313131&height=200&text=" + e + ")";
    });
}
onload()



setInterval(() => {
    function updateImage(){
        let elementId = Math.floor(Math.random() * 16);
        let newRandom = Math.floor(Math.random() * 100);
        
        if(currentImages.includes(newRandom)){
           updateImage();
        
        }else{

            $("#image_" + elementId).fadeOut(function(){
                $("#image_" + elementId).css("background-image", "url(https://images.placeholders.dev/?width=200&bgColor=%23313131&height=200&text=" + newRandom + ")");
                $("#image_" + elementId).fadeIn(1500);
            })
        }
    
    }
    updateImage()
}, 10000);