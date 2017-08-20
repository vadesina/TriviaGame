



     // var second = document.getElementsByName("question1");
     // var third = document.getElementsByName("question2");
        var one = document.getElementsByName("question1");
     var two = document.getElementsByName("question2");
     var three = document.getElementsByName("question3");
      var four = document.getElementsByName("question4");
     var five = document.getElementsByName("question5");
     var six = document.getElementsByName("question6");
      var seven = document.getElementsByName("question7");
     var eight = document.getElementsByName("question8");
     var nine = document.getElementsByName("question9");
      var ten = document.getElementsByName("question10");
     var eleven = document.getElementsByName("question11");
     var twelve = document.getElementsByName("question12");
     var arr = [one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve];
     var missed =0;
     var correct=0;
     var unanswered=0;

     function submitted() {
       for(var i = 0; i< arr.length; i++){
          if(arr[i].value ===  "true" && arr[i].checked ===
               false){   unanswered = unanswered + 1; }

          for(var o = 0; o< arr[i].length; o++){
           if(arr[i][o].value === "true" && arr[i][o].checked === true){
             correct = correct + 1;
           }
             if(arr[i][o].value === "false" && arr[i][o].checked === true){
                 missed = missed + 1;
             }
             
          }  

        }
        console.log(missed);
        console.log(correct);
        console.log(unanswered);
        $("#correct").html("Correct: " + correct );
        $("#Incorrect").html("Incorrect: " + missed );
        } 


   var number = 31;

    var intervalId;

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#time").text("Time Remaining: " + number + " seconds");

      if (number === 0) {

        alert("Time Up!");
        stop();
      }
    }
     function stop() {

      clearInterval(intervalId);
    }

    run();
