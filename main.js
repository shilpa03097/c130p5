prediction_1 ="";

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
    });
    camera = document.getElementById("camera");
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Mgfd9F_M8/model.json', modelLoaded)
    Webcam.attach('#camera');
    
    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        });
    }
     console.log('ml5 version:', ml5.version);
    
     function modelLoaded(){
     console.log("model Loaded!");
     }
     
     function check(){
        img = document.getElementById('captured_image');
        classifier.classify(img, gotResults);
     }
    
     function gotResults(error, results){
        if(error){
            console.error(error);
        } else {
                console.log(results);
                document.getElementById("result_emoji_name").innerHTML = results[0].label;
                prediction_1 = results[0].label;
                if(results[0].label== "with_mask"){
                    document.getElementById("update_emoji").innerHTML = "&#128567;";
                }
                if(results[0].label == "without_mask"){
                    document.getElementById("update_emoji").innerHTML = "&#128522;";
                }
        }
     }