window.addEventListener("load", function(){

    // variables
    var id = "none";
    var spanId = "none";
    var counter = 60;
    var stopper = 0;
    var scores = 0;
    var displayStopper = 0;
    var pointer = true;
    var node = document.getElementsByTagName("img");
    var play = true; // to avoid multiple instances of function running at the same time.
    
    // onstart event
    document.getElementById("startButton").addEventListener("click", function(){
        if(play){
            play = false;
            scores = 0;
            displayStopper = setInterval(randomImageDisplayer, 1500);
            stopper = setInterval(timer, 1000);
        }
    });

    
    // helping functions
    function randomImageDisplayer(){
        var randomNumber = parseInt(Math.random() * 12 + 1);
        var randomImageChooser = Math.random();
        checker = randomImageChooser;

        // getting id from random number generated.
        switch(randomNumber){
            case 1:
                id = "one";
                spanId = "span1";
                break;
            case 2:
                id = "two";
                spanId = "span2";
                break;
            case 3:
                id = "three";
                spanId = "span3";
                break;
            case 4:
                id = "four";
                spanId = "span4";
                break;
            case 5: 
                id = "five";
                spanId = "span5";
                break;
            case 6:
                id="six";
                spanId = "span6";
                break;
            case 7:
                id = "seven";
                spanId = "span7";
                break;
            case 8:
                id = "eight";
                spanId = "span8";
                break;
            case 9:
                id = "nine";
                spanId = "span9";
                break;
            case 10:
                id = "ten";
                spanId = "span10";
                break;
            case 11: 
                id = "eleven";
                spanId = "span11";
                break;
            case 12:
                id="twelve";
                spanId = "span12";
                break; 
            }

            // changing the source of the file that will be visible.
            if(randomImageChooser > 0.6){
                document.getElementById(id).src = "images of js game/34493201-evil-rat.png";
                pointer = false;
            }
            else{
                document.getElementById(id).src = "images of js game/Bugs Bunny Whisper.png";
                pointer = true;
            }

            // making a particular image appear on screen
            document.getElementById(id).style.visibility = "visible";
            node[id].addEventListener("click", pointGiver);
            document.getElementById("scoreOutput").innerHTML = "Score: " + scores;
            setTimeout(imageRemover, 1000);                                                 
    }


    // to give points on the basis of correct image visibility
    function pointGiver(event){
        if(pointer && event.target.style.visibility == "visible"){
            document.getElementById(spanId).style.border = "2px solid darkgreen"; 
            scores++;
        }
        else{
            document.getElementById(spanId).style.border = "2px solid red";
            scores--;
        }
    }


    // remove image before another image is displayed
    function imageRemover(){
        document.getElementById(spanId).style.border = "2px solid lightblue";
        document.getElementById(id).style.visibility = "hidden";
    }

    
    // timer function.
    function timer(){
        counter--;
        document.getElementById("timerDisplay").innerHTML = counter;
        if(counter == 0){
            counter = 60;
            document.getElementById("timerDisplay").innerHTML = "Time's Up!";
            clearInterval(stopper);
            clearInterval(displayStopper);
            play = true;
        }
    }

});
