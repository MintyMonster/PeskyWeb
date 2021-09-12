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

            $("#image_" + elementId).fadeOut(1000); // Fade image out
            setTimeout(() => { // Wait X seconds to allow for image to fully fade
                $("#image_" + elementId).css("background-image", "url(https://images.placeholders.dev/?width=200&bgColor=%23313131&height=200&text=" + newRandom + ")"); // Set image
                $("#image_" + elementId).fadeIn(1000); // Fade image in
            }, 1000); 
        }
    
    }
    updateImage()
}, 10000);