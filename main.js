Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera")

Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(
        function (data_uri){
           document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'">'
        }
    )
}

console.log("ml5 version",ml5.version)

classifier  = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/S24TsOIqd/model.json',modalLoaded)

function modalLoaded(){
    console.log('modalLoaded')
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}

function check(){
img = document.getElementById("captured_image")
classifier.classify(img,gotResult)
}

function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_hand_gesture_name").innerHTML = results[0].label;
  
      if(results[0].label == "super")
      {
          document.getElementById("update_hand_gesture").innerHTML = "&#128076;";
      }
      if(results[0].label == "Best")
      {
          document.getElementById("update_hand_gesture").innerHTML = "&#128077;";
      }
      if(results[0].label == "Victory")
      {
          document.getElementById("update_hand_gesture").innerHTML = "&#9996;";
      }
      if(results[0].label == "Yo")
      {
          document.getElementById("update_hand_gesture").innerHTML = ">&#129304;";
      }
  
    }
  }