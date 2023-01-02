import Image from "next/image";
import React from "react";

const Avatar = ({ url }) => {
  return (
    <Image
      src={url}
      alt="Display pic"
      className="rounded-full"
      width={25}
      height={25}
    />
  );
};

export default Avatar;
