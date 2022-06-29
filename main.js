function startClassificatian(){
    navagator.mediaDevices.getUserMedia({ audio: true});
    classifier = mlk.soundClassifer('https://teachablemachine.withgoogle.com/models/N9JgzIQF8/', modelReady);
}

function modelReady(){
   classifier.classify(gotResults);
}