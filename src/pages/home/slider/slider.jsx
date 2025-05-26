// import React from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export function SimpleSlider({products}) {

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="slider">
//       <h3>BESTSELLERS</h3>
//           <Slider {...settings}>
//       {
//         products.map((prod) => {
//           return <div>
//             <img src={prod.image} alt="" />
//             </div>
//         })
//       }
//     </Slider>
//     </div>
//   );
// }