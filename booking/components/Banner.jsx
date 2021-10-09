import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div>
      <Image
                    src={"https://wallpaperaccess.com/full/4012619.jpg"}
                    className="object-contain"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
      
    </div>
  );
}
export default Banner;
