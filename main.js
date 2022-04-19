var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
    bio=Img;

    bio.scaleToWidth(600);
    bio.scaleToHeight(400);

    bio.set({top:0, left:0});

    canvas.add(bio);
});	
	
}

function playSound(){
    x.play();
}
