import React from "react";

const ProductCard = ({data}) => {
  return (
    <div className="w-full p-6 mt-5  border text-center  rounded-lg shadow-md bg-gray-800 border-gray-700">
      
      <h5 className="mb-2 text-2xl font-normal text-white">
        Product Name : {data['name']?.split('/',1)}
      </h5>
      <h5 className="mb-2 text-2xl font-normal text-white">
        Manufacturer Name : {data['name']?.split('/',2)[1]}
      </h5>
      {data['descriptions']?.map((item)=>{
                      return (
                        <div>
                    <h5 className="mb-2 text-2xl font-normal text-white">Date : {item?.split('/',1)}</h5>
                    <h5 className="mb-2 text-2xl font-normal text-white"> Location : {item?.split('/',2)[1]}</h5>
                        </div>
                      )
                    })}
   
    </div>
  );
};

export default ProductCard;
