/*function startClassificatian() {
    navagator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifer("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}
function startClassification(){
    navagator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/N9JgzIQF8/model.json', modelReady);
}*/
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
   classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear _ ' +
            results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
            (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb("
            + ramdom_number_r + "," + ramdom_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb("
            + ramdom_number_r + "," + ramdom_number_g + "," + random_number_b + ")";

        img = document.getElementById('cat');
        img1 = document.getElementById('dog');
        img2 = document.getElementById('moo');
        img3 = document.getElementById('roar');

        if (results[0].label == "Cat") {
            img.src = 'https://media0.giphy.com/media/jUKBVRKJwoB9fC8g8p/giphy.gif';
            img1.src = 'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg';
            img2.src = 'https://images.takeshape.io/eec0d9cd-dc81-4ba8-ac20-50da147f43d2/dev/da13834b-1915-4f60-9d71-e7875ddadd95/African%20People%20%26%20Wildlife%3ALaly%20Lichtenfeld..jpeg?auto=compress%2Cformat';
            img3.src = 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg';
        } else if (results[0].label == "Dog") {
            img.src = 'https://cattalesinc.org/wp-content/uploads/slider2/DSC_0029-scaled.jpeg';
            img1.src = 'https://i0.wp.com/images.onwardstate.com/uploads/2015/05/oie_14175751vZSQRLEn.gif?fit=650%2C408&ssl=1.gif';
            img2.src = 'https://images.takeshape.io/eec0d9cd-dc81-4ba8-ac20-50da147f43d2/dev/da13834b-1915-4f60-9d71-e7875ddadd95/African%20People%20%26%20Wildlife%3ALaly%20Lichtenfeld..jpeg?auto=compress%2Cformat';
            img3.src = 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg';
        } else if (results[0].label == "moo") {
            img.src = 'https://cattalesinc.org/wp-content/uploads/slider2/DSC_0029-scaled.jpeg';
            img1.src = 'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg';
            img2.src = 'https://media3.giphy.com/media/jrAgdPqTiz2Ew/giphy.gif';
            img3.src = 'ahttps://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg';
        } else {
            img.src = 'https://cattalesinc.org/wp-content/uploads/slider2/DSC_0029-scaled.jpeg';
            img1.src = 'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg';
            img2.src = 'https://images.takeshape.io/eec0d9cd-dc81-4ba8-ac20-50da147f43d2/dev/da13834b-1915-4f60-9d71-e7875ddadd95/African%20People%20%26%20Wildlife%3ALaly%20Lichtenfeld..jpeg?auto=compress%2Cformat';
            img3.src = 'https://media1.giphy.com/media/OqFpgF7bet1sRoCmpb/200.gif';
        }
    }
}