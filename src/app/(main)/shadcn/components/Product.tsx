"use client";
import { Heart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Product() {
  const product = ["spiderman", "amazing", "venom"];
  const [likes, setLikes] = useState([0, 0, 0]);

  const onClickLikesCount = (index: any) => {
    let copy = [...likes];
    copy[index]++;
    setLikes(copy);
  };
  return (
    <>
      <div>
        <h1 className="font-spider text-3xl text-white text-center pt-[20px]">Vote</h1>
        {product.map((product, idx) => (
          <div className="w-[250px] bg-white text-black p-[20px] rounded-[5px] my-[20px] mx-[auto]" key={idx}>
            <Image src={`/img/product${idx + 1}.jpg`} alt="" width={400} height={400} className="w-full h-[auto]" />
            <div className="flex justify-center items-center">
              <h1 className="text-center font-spider mt-3 text-xl flex items-center">
                {product}
                <button
                  className="ml-3"
                  onClick={() => {
                    onClickLikesCount(idx);
                  }}
                >
                  <Heart fill="red" stroke="red" />
                </button>
              </h1>
            </div>
            <h1 className="mt-[30px] text-center">좋아요 받은 개수 : {likes[idx]}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
