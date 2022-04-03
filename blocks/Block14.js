import React, { useEffect } from "react";
import Head from "next/head";

function Block14() {
  useEffect(() => {
    var theCount;
    var alarm = document.getElementById("alarm");
    var panel = document.getElementById("panel");
    var turnOff = document.getElementById("turn-off");
    var turnOffHor = document.getElementById("closing");
    var detonate = document.getElementById("detonate");
    alarm.volume = 0.25; //volume level

    var time = document.getElementById("time");
    function showCountDown() {
      time.innerText = time.innerText - 1;
      if (time.innerText == 0) {
        clearInterval(theCount);
        time.classList.add("crono");
        abort.classList.add("hide");
        detonate.classList.add("show");
        setTimeout(function () {
          window.location.replace("https://twitter.com/neemble");
          alarm.pause();
        }, 1500);
      }
    }

    var cover = document.getElementById("cover");
    cover.addEventListener("click", function () {
      if (this.className == "box") this.classList.add("opened");
      else this.classList.remove("opened");
    });

    var btn = document.getElementById("activate");
    activate.addEventListener("click", function () {
      this.classList.add("pushed");
      alarm.load();
      alarm.currentTime = 10.1;
      alarm.play();
      setTimeout(function () {
        panel.classList.add("show");
        theCount = setInterval(showCountDown, 1000);

        alarm.load();
        alarm.play();
      }, 500);
    });

    var abort = document.getElementById("abort");
    abort.addEventListener("click", function () {
      btn.classList.remove("pushed");
      panel.classList.remove("show");
      clearInterval(theCount);
      time.innerText = 9;
      alarm.pause();
      alarm.currentTime = 10;
      alarm.play();
    });

    var reload = document.getElementById("restart");
    reload.addEventListener("click", function () {
      panel.classList.remove("show");
      turnOff.classList.remove("close");
      turnOffHor.classList.remove("close");
      abort.classList.remove("hide");
      detonate.classList.remove("show");
      cover.classList.remove("opened");
      btn.classList.remove("pushed");
      this.classList.remove("show");
      time.classList.remove("crono");
      time.innerText = 9;
    });

    setTimeout(function () {
      cover.classList.remove("opened");
    }, 100);

    var mute = document.getElementById("mute");
    mute.addEventListener("click", function () {
      if (this.className == "muted") {
        alarm.muted = false;
        this.classList.remove("muted");
      } else {
        alarm.muted = true;
        this.classList.add("muted");
      }
    });
  }, []);
  return (
    <div className="three">
      <div className="lines"></div>

      <div className="warning"></div>

      <div className="base">
        <button id="activate">
          <span></span>
        </button>
      </div>

      <div className="box opened" id="cover">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <span></span>
        <span></span>
      </div>

      <div className="hinges"></div>

      <div className="text">NEEMBLE-&thinsp;DEMO</div>

      <div id="panel">
        <div id="msg">LAUNCHING NEEMBLE-DEMO </div>
        <div id="time">10</div>
        <span id="abort">ABORT</span>
        <span id="detonate">DETONATE</span>
      </div>

      <div id="restart">
        <button id="reload"></button>
      </div>

      <div id="mute"></div>

      <audio id="alarm">
        <source
          src="https://josetxu.com/demos/sounds/self-destruct-count.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default Block14;
