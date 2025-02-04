import React from 'react'
import CarDs from './CarDs'
// import ProductImage1 from "../assets/images/تصميمات-مكاتب-1.jpg";
// import ProductImage2 from "../assets/images/مكتب-غاية-في-الجمال.jpeg";
// import ProductImage3 from "../assets/images/صور-مكاتب.jpg";

// const products =[
//        {
//               id: 1,
//               desc: "Car1lkfhwsklfhls;g",
//               price: 1000,
//               image: ProductImage1 
//        },
//        {
//               id: 2,
//               desc: "Car1lkfhwsklfhls;g",
//               price: 1000,
//               image: ProductImage2,
//        },
//        {
//               id: 3,
//               desc: "Car1lkfhwsklfhls;g",
//               price: 1000,
//               image: ProductImage3,

//        },

export default function Products() {
  return (
<div className='d-flex w-100 justify-content-center align-items-center gap-4 flex-wrap'>

          <CarDs title={"t-shirt"}
       desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ullam"}
       btntext={'check'}/>
                 <CarDs title={"t-shirt"}
       desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ullam"}
       btntext={'check'}/>
                 <CarDs title={"t-shirt"}
       desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ullam"}
       btntext={'check'}/>
</div>
  )
}
