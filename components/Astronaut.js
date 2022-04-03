import React from "react";

function Astronaut() {
  return (
    <>
      <div className="container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0"
          y="0"
          className="rocketManSVG"
          viewBox="0 0 600 600"
        >
          <defs>
            <path
              id="rocketClip"
              d="M300 465.7c-13.8 0-25-11.3-25-25V249.4c0-13.7 11.3-25 25-25s25 11.2 25 25v191.3c0 13.8-11.2 25-25 25z"
            ></path>
            <clipPath id="rainbowClip">
              <use overflow="visible" xlinkHref="#rocketClip"></use>
            </clipPath>
            <symbol id="badge">
              <circle
                cx="319.6"
                cy="288.9"
                r="8.7"
                fill="#1668B2"
                stroke="#EF3D43"
                strokeMiterlimit="10"
                strokeWidth="1.439"
              ></circle>
              <path
                fill="#FFF"
                d="M319.6 294.7c-1.7 0-2.8-.9-2.6-1.9.5-2.6.9-5.2 1.4-7.8.2-1 .4-2.8 1.2-2.8.8 0 1 1.8 1.2 2.8.5 2.6.9 5.2 1.4 7.8.3 1-.9 1.8-2.6 1.9z"
              ></path>
              <path
                fill="#FFF"
                d="M316.4 294.2c-.4 0-.8-.3-.8-.8v-3.3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v3.3c0 .5-.3.8-.8.8zM322.8 294.2c-.4 0-.7-.3-.7-.7v-3.3c0-.4.3-.7.7-.7.4 0 .7.3.7.7v3.3c.1.4-.3.7-.7.7z"
              ></path>
              <g fill="#FFF">
                <circle cx="314" cy="288.3" r="0.7"></circle>
                <ellipse cx="314" cy="288.3" rx="0.1" ry="1.2"></ellipse>
                <ellipse cx="314" cy="288.3" rx="1.3" ry="0.1"></ellipse>
              </g>
              <g fill="#FFF">
                <circle cx="324.8" cy="286.4" r="0.7"></circle>
                <ellipse cx="324.8" cy="286.4" rx="0.1" ry="1.2"></ellipse>
                <ellipse cx="324.8" cy="286.4" rx="1.3" ry="0.1"></ellipse>
              </g>
            </symbol>
          </defs>
          <path
            fill="#ECB447"
            d="M1.2 0L1.6 0.8 2.4 0.9 1.8 1.5 1.9 2.3 1.2 1.9 0.5 2.3 0.6 1.5 0 0.9 0.8 0.8z"
            className="star"
            opacity="0.5"
          ></path>
          <g className="satellite">
            <g stroke="#2d2d2d" className="satellitePulses">
              <path
                fill="none"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.581"
                d="M156.3 131.8c-2.8 2.8-7.2 2.8-10 0"
                className="satellitePulse1"
              ></path>
              <path
                fill="none"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.581"
                d="M158.6 134c-4 4-10.5 4-14.4 0"
                className="satellitePulse2"
              ></path>
              <path
                fill="none"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.581"
                d="M160.8 136.3c-5.2 5.2-13.7 5.2-18.9 0"
                className="satellitePulse3"
              ></path>
            </g>
            <path
              fill="#2d2d2d"
              d="M106.7 91.3h-8.2v-8.2h8.2v8.2zm10.1-8.2h-8.2v8.2h8.2v-8.2zm10 0h-8.2v8.2h8.2v-8.2zm10.1 0h-8.2v8.2h8.2v-8.2zm-30.2 10.1h-8.2v8.2h8.2v-8.2zm10.1 0h-8.2v8.2h8.2v-8.2zm10 0h-8.2v8.2h8.2v-8.2zm10.1 0h-8.2v8.2h8.2v-8.2zm-30.2 10.1h-8.2v8.2h8.2v-8.2zm10.1 0h-8.2v8.2h8.2v-8.2zm10 0h-8.2v8.2h8.2v-8.2zm10.1 0h-8.2v8.2h8.2v-8.2zm36.8-20.2h-8.2v8.2h8.2v-8.2zm10.1 0h-8.2v8.2h8.2v-8.2zm10 0h-8.2v8.2h8.2v-8.2zm10.1 0h-8.2v8.2h8.2v-8.2zm-30.2 10.1h-8.2v8.2h8.2v-8.2zm10.1 0h-8.2v8.2h8.2v-8.2zm10 0h-8.2v8.2h8.2v-8.2zm10.1 0h-8.2v8.2h8.2v-8.2zm-30.2 10.1h-8.2v8.2h8.2v-8.2zm10.1 0h-8.2v8.2h8.2v-8.2zm10 0h-8.2v8.2h8.2v-8.2zm10.1 0h-8.2v8.2h8.2v-8.2zm-42.1 9.8V81c0-2.6-2.1-4.7-4.7-4.7h-11.7c-2.6 0-4.7 2.1-4.7 4.7v32.1c0 2.6 2.1 4.7 4.7 4.7h11.7c2.6 0 4.7-2.1 4.7-4.7zm3.8-16.8h-28.7v2.1h28.7v-2.1zm-13.3 21.5h-2.2v12.1h2.2v-12.1z"
            ></path>
          </g>
          <g
            fill="none"
            stroke="#3e3e3e"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            className="speedLines"
          >
            <path id="speedLine0" d="M252.5 324L252.5 566"></path>
            <path id="speedLine1" d="M299.5 500L299.5 557"></path>
            <path id="speedLine2" d="M347.5 324L347.5 529"></path>
            <path id="speedLine3" d="M74.5 45L74.5 500"></path>
            <path id="speedLine4" d="M544.5 29L544.5 574"></path>
            <path id="speedLine5" d="M415.5 8L415.5 440"></path>
            <path id="speedLine6" d="M165.5 142L165.5 574"></path>
          </g>
          <path
            fill="#CC583F"
            d="M275 263.3H285V476H275z"
            clipPath="url(#rainbowClip)"
          ></path>
          <path
            fill="#ECB447"
            d="M285 263.3H295V476H285z"
            clipPath="url(#rainbowClip)"
          ></path>
          <path
            fill="#75C095"
            d="M295 263.3H305V476H295z"
            clipPath="url(#rainbowClip)"
          ></path>
          <path
            fill="#5991AA"
            d="M305 263.3H315V476H305z"
            clipPath="url(#rainbowClip)"
          ></path>
          <path
            fill="#7D6AAD"
            d="M315 263.3H325V476H315z"
            clipPath="url(#rainbowClip)"
          ></path>
          <g className="astronaut">
            <g stroke="#ededed" className="pulseSVG" opacity="0.2">
              <path
                fill="none"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M289.9 188.7c5.2-5.2 13.7-5.2 18.9 0"
                className="pulse1"
              ></path>
              <path
                fill="none"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M285.6 184.5c7.6-7.6 19.8-7.6 27.4 0"
                className="pulse2"
              ></path>
              <path
                fill="none"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M281.4 180.3c9.9-9.9 26-9.9 35.9 0"
                className="pulse3"
              ></path>
            </g>
            <g className="astronaut1">
              <path
                fill="#CCC"
                d="M265 320.7h.5v-16.1h-21.4c.9 3.7 2.8 6.9 5.6 9.8 4.3 4.2 9.4 6.3 15.3 6.3m69.9 0h.1c5.9 0 11-2.1 15.2-6.3 2.9-2.9 4.7-6.1 5.6-9.8h-21.4v16.1h.5m-63.1-96.3c-4.3.9-8.1 2.9-11.4 6.2-4.5 4.5-6.7 9.9-6.7 16.2v13.6c3.3-2.1 7.1-3.2 11.3-3.2.9 0 1.7 0 2.6.1-1.5-3.9-2.3-8.2-2.3-12.7 0-7.6 2.2-14.3 6.5-20.2m74.5 36v-13.6c0-6.3-2.2-11.7-6.7-16.2-3-3-6.5-5.1-10.4-6l-.2.8c3.9 5.6 5.8 12 5.8 19.2 0 4.2-.7 8.1-2 11.8l.1.8c.7-.1 1.4-.1 2.2-.1 4.1.1 7.8 1.2 11.2 3.3z"
              ></path>
              <path
                fill="#FFF"
                d="M299.9 210.1h-.1c-9.5 0-17.6 3.4-24.3 10.1-1.3 1.3-2.5 2.7-3.6 4.2-4.3 5.9-6.5 12.6-6.5 20.3 0 4.6.8 8.8 2.3 12.7.2.6.5 1.2.8 1.8 1.7 3.6 4 6.9 7.1 9.9 3.3 3.3 6.8 5.7 10.7 7.4.1 0 .2.1.2.1.8.3 1.6.7 2.5.9 3.4 1.1 7.1 1.7 11 1.7 9.5 0 17.7-3.4 24.4-10.1 3.6-3.6 6.2-7.5 7.9-11.8l.3-.9c1.3-3.6 1.9-7.6 1.9-11.7 0-7.2-1.9-13.5-5.7-19.1l-.2-.2s0-.1-.1-.1l-.1-.1-.1-.1-.1-.1c0-.1-.1-.1-.1-.2 0 0 0-.1-.1-.1-1.1-1.5-2.3-2.9-3.7-4.3-6.8-6.9-14.9-10.3-24.4-10.3m50.2 53.4c-1.2-1.2-2.5-2.3-3.9-3.1-3.3-2.1-7.1-3.2-11.3-3.2-.7 0-1.5 0-2.2.1h-.3-.1l-.3-.1c-1.7 4.3-4.3 8.3-7.9 11.8-6.7 6.7-14.9 10.1-24.4 10.1-3.9 0-7.6-.6-11-1.7-.8-.3-1.7-.6-2.5-.9-.1 0-.2-.1-.2-.1-3.9-1.7-7.5-4.2-10.7-7.4-3-3-5.4-6.3-7.1-9.9-.3-.6-.5-1.2-.8-1.8-.8-.1-1.7-.1-2.6-.1-4.2 0-8 1.1-11.3 3.2-1.4.9-2.7 1.9-3.9 3.1-4.2 4.2-6.3 9.2-6.3 15.2v20.6c0 1.9.2 3.7.6 5.4h21.4v-22.6V338c.6 3.3 2.2 6.2 4.7 8.7 3.3 3.4 7.3 5 12 5s8.9-1.8 12.7-5.3c2.8-2.6 4.5-5.5 5-8.7v-15.9H287h26-13v15.9c.5 3.2 2.2 6.1 5 8.7 3.8 3.5 8 5.3 12.7 5.3 4.7 0 8.7-1.7 12-5 2.5-2.5 4-5.4 4.7-8.7V282v22.6h21.4c.4-1.7.6-3.5.6-5.4v-20.6c0-5.8-2.1-10.9-6.3-15.1M300 311.1V281v30.1z"
              ></path>
              <path
                fill="#2D2D2D"
                d="M299.7 195.5c-1.1 0-2 .4-2.7 1.1-.7.7-1.1 1.6-1.1 2.7s.4 2 1.1 2.7c.7.7 1.6 1.1 2.7 1.1s2-.4 2.7-1.1c.7-.7 1.1-1.6 1.1-2.7s-.4-2-1.1-2.7c-.7-.8-1.6-1.1-2.7-1.1z"
              ></path>
              <path
                fill="none"
                stroke="#2D2D2D"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M355.8 304.6c.4-1.7.6-3.5.6-5.4v-20.6c0-5.9-2.1-11-6.3-15.2-1.2-1.2-2.5-2.3-3.9-3.1-3.3-2.1-7.1-3.2-11.3-3.2h0c-.7 0-1.5 0-2.2.1h-.3-.1m-.2.1c-1.7 4.3-4.3 8.3-7.9 11.8-6.7 6.7-14.9 10.1-24.4 10.1-3.9 0-7.6-.6-11-1.7-.8-.3-1.7-.6-2.5-.9-.1 0-.2-.1-.2-.1-3.9-1.7-7.5-4.2-10.7-7.4-3-3-5.4-6.3-7.1-9.9-.3-.6-.5-1.2-.8-1.8-.8-.1-1.7-.1-2.6-.1h0c-4.2 0-8 1.1-11.3 3.2-1.4.9-2.7 1.9-3.9 3.1-4.2 4.2-6.3 9.2-6.3 15.2v20.6c0 1.9.2 3.7.6 5.4h21.4v-22.6m80.9-21.8v-13.6c0-6.3-2.2-11.7-6.7-16.2-3-3-6.5-5.1-10.4-6m-.3.8c3.9 5.6 5.8 12 5.8 19.2 0 4.2-.7 8.1-2 11.8m-33-53.3c-1.1 0-2-.4-2.7-1.1-.7-.7-1.1-1.6-1.1-2.7s.4-2 1.1-2.7c.7-.7 1.6-1.1 2.7-1.1s2 .4 2.7 1.1c.7.7 1.1 1.6 1.1 2.7s-.4 2-1.1 2.7c-.7.7-1.6 1.1-2.7 1.1v7.1h.1c9.5 0 17.7 3.4 24.4 10.1 1.4 1.4 2.6 2.8 3.7 4.3 0 0 0 .1.1.1 0 .1.1.1.1.2l.1.1s0 0 0 0l.1.1s0 0 0 0 0 0 0 0l.1.1h0l.1.1.2.2c3.8 5.6 5.7 12 5.7 19.1 0 4.2-.6 8.1-1.9 11.7l-.3.9m-3-32.6h0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.3-.1-.6-.1-.8-.2h-.2s0 .1.1.1v.1c.1.1.2.3.3.4 0 0 0 0 0 0h0c.1.1.2.3.3.4 0 0 0 0 0 0m-57.1-1c1.1-1.4 2.3-2.8 3.6-4.2 6.7-6.7 14.8-10.1 24.3-10.1m-46 50.3v-13.6c0-6.3 2.2-11.7 6.7-16.2 3.3-3.3 7.1-5.4 11.4-6.2-4.3 5.9-6.5 12.6-6.5 20.3 0 4.6.8 8.8 2.3 12.7m65.1-.9s0 0 0 0h0v.2l-.2.5c0 .1-.1.1-.1.2m2.3 63.3H335c5.9 0 11-2.1 15.2-6.3 2.9-2.9 4.7-6.1 5.6-9.8h-21.4v16.1h.2m0 0h0m-47.3 1.1H313m-13 16c.5 3.2 2.2 6.1 5 8.7 3.8 3.5 8 5.3 12.7 5.3 4.7 0 8.7-1.7 12-5 2.5-2.5 4-5.4 4.7-8.7v-17.3m-68.8-.1V338c.6 3.3 2.2 6.2 4.7 8.7 3.3 3.4 7.3 5 12 5s8.9-1.8 12.7-5.3c2.8-2.6 4.5-5.5 5-8.7v-15.9m-34.4-1.1s0 0 0 0h-.3s0 0 0 0h-.2-.1c-5.9 0-11-2.1-15.2-6.3-2.9-2.9-4.7-6.1-5.6-9.8m21.4 0v16.1m68.8-38.6v22.6m-34.4 6.4V281"
              ></path>
            </g>
            <path
              fill="#7592A0"
              d="M324.5 261.6c6.8-4.3 10.2-9.5 10.2-15.5 0-5.1-2.4-9.6-7.2-13.4H272c-4.8 3.8-7.3 8.3-7.3 13.4 0 6.1 3.4 11.2 10.2 15.5 6.8 4.3 15.1 6.4 24.7 6.4 9.8 0 18-2.1 24.9-6.4z"
              className="0"
            ></path>
            <path
              fill="none"
              stroke="#2D2D2D"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M334.7 246.1c0 6.1-3.4 11.2-10.2 15.5-6.8 4.3-15.1 6.4-24.7 6.4-9.7 0-17.9-2.1-24.7-6.4-6.8-4.3-10.2-9.5-10.2-15.5 0-5.1 2.4-9.6 7.3-13.4h55.5c4.6 3.8 7 8.3 7 13.4z"
              className="astronautglass"
            ></path>
            <path
              fill="none"
              stroke="#E6E6E6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M323.5 240.6c2.4 3.5 2.4 7.8 0 12.7m-47.7-12.7c-2.4 3.5-2.4 7.8 0 12.7"
              className="astronautglass"
            ></path>
            <g className="jetBubbles">
              <g id="greyJets" fill="#2d2d2d">
                <circle
                  cx="289"
                  cy="489"
                  r="23"
                  className="jetBubble1"
                ></circle>
                <circle
                  cx="270"
                  cy="470"
                  r="20"
                  className="jetBubble1"
                ></circle>
                <circle
                  cx="319"
                  cy="483"
                  r="21"
                  className="jetBubble1"
                ></circle>
              </g>
              <g id="colorJets" stroke="#3d3d3d" strokeWidth="0">
                <circle
                  cx="312"
                  cy="449"
                  r="8"
                  fill="#ECB447"
                  className="jetBubble2"
                ></circle>
                <circle
                  cx="320"
                  cy="480"
                  r="10"
                  fill="#7D6AAD"
                  className="jetBubble2"
                ></circle>
                <circle
                  cx="290"
                  cy="460"
                  r="10"
                  fill="#7D6AAD"
                  className="jetBubble2"
                ></circle>
                <circle
                  cx="329"
                  cy="453"
                  r="11"
                  fill="#ECB447"
                  className="jetBubble2"
                ></circle>
                <circle
                  cx="286"
                  cy="463"
                  r="7"
                  fill="#CC583F"
                  className="jetBubble"
                ></circle>
                <circle
                  cx="289"
                  cy="469"
                  r="24"
                  fill="#ECB447"
                  className="jetBubble2"
                ></circle>
                <circle
                  cx="260"
                  cy="450"
                  r="20"
                  fill="#7D6AAD"
                  className="jetBubble2"
                ></circle>
                <circle
                  cx="319"
                  cy="463"
                  r="10"
                  fill="#5991AA"
                  className="jetBubble3"
                ></circle>
                <circle
                  cx="290"
                  cy="463"
                  r="18"
                  fill="#CC583F"
                  className="jetBubble1"
                ></circle>
                <circle
                  cx="312"
                  cy="443"
                  r="21"
                  fill="#75C095"
                  className="jetBubble3"
                ></circle>
                <circle
                  cx="275"
                  cy="443.4"
                  r="12"
                  fill="#5991AA"
                  className="jetBubble3"
                ></circle>
              </g>
              <use xlinkHref="#badge" className="0"></use>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}

export default Astronaut;
