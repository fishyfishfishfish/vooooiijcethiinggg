https://teachablemachine.withgoogle.com/models/2wKu5MsFu/
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function takepicture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2wKu5MsFu/model.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}
function identify(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("name_of_object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
