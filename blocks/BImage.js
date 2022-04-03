import React from "react";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import Image from "next/image";
function BImage({ slideClass }) {
  return (
    <>
      <div class="c">
        <div class={slideClass}>
          <Image className="ma" src={img1} width={400} height={250}></Image>
          <Image className="ma" src={img2} width={400} height={250}></Image>
          <Image className="ma" src={img3} width={400} height={250}></Image>
          <Image className="ma" src={img4} width={400} height={250}></Image>
          <Image className="ma" src={img5} width={400} height={250}></Image>

          {/* <!-- copy the number of spans displayed at the beggining onto the end --> */}
          <Image className="ma" src={img1} width={400} height={250}></Image>
          <Image className="ma" src={img2} width={400} height={250}></Image>
          <Image className="ma" src={img3} width={400} height={250}></Image>
        </div>
      </div>
    </>
  );
}

export default BImage;

// <div className="slider bg-red-800">
//   <div className="slide-track">

//     <div className="slide">
//       <h6>CARD1</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD2</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD3</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD4</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD5</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD6</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD7</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD8</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD9</h6>
//     </div>

//     <div className="slide">
//       <h6>CARD1</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD2</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD3</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD4</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD5</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD6</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD7</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD8</h6>
//     </div>
//     <div className="slide">
//       <h6>CARD9</h6>
//     </div>

//   </div>
// </div>;
