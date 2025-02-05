import React from 'react'
import Productss from './Productss'
import image1 from "..//assets/images/mobile.jpeg"
import image2 from "..//assets/images/watch.jpeg"
import image3 from "..//assets/images/chair.jpeg"
import image4 from "..//assets/images/coat.jpeg"
import image5 from "..//assets/images/bag.jpeg"
import image6 from "..//assets/images/book.jpeg"
const Product =[
    {
        id: 1,
        name: "samsung mobile",
        price: 750,
        image: image1
      },
        {
            id: 2,
            name: "watch",
            price: 150,
            image: image2
          },
            {
                id: 3,
                name: "wing chair",
                price: 120,
                image: image3
               },
                {
                    id: 4,
                    name: "Men Jacket",
                    price: 50,
                    image: image4
                   },
                    {
                        id: 5,
                        name: "laides hand bag",
                        price: 135,
                        image: image5
                       },
                        {
                            id: 6,
                            name: "white stog book",
                            price: 5,
                            image: image6
                           },
]
export default function ProductCard() {
  return (
    <div className='p-5 d-flex justify-content-center align-items-center gap-5 flex-wrap'>
      {Product.map((item) => (
        <Productss
          key={item.id} // مهم جدًا في React
          title={item.name}
          btntext={item.price}
          ProductImage={item.image}
        />
      ))}
    </div>
  );
}
