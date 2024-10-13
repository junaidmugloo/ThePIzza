/***************Counter***************/

    function countdown() {
      var seconds = 59;
      function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML =
        "" + (seconds < 10 ? " " : " ") + String(seconds);
        if (seconds > 0) {
          setTimeout(tick, 1000);
        } else {
          document.getElementById("counter").innerHTML = "";
        }
      }
      tick();
    }
    countdown();