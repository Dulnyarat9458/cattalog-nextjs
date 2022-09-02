import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function catcard(props) {
  const { contentData } = props;
  var imgUrl;
  var linker = "../cat/" + props.id;
  if (contentData?.image?.url == null) {
    imgUrl = "/notav.jpg";
  } else {
    imgUrl = contentData?.image?.url;
  }
  return (
    <Link href={linker}>
      <div className="text-sm card p-4 m-8 rounded-lg bg-card-body drop-shadow-xl hover:drop-shadow-sm hover:bg-[#51C894] hover:text-white ease-in-out duration-300 cursor-pointer">
        <div className="rounded-md bg-white border-neutral-500 drop-shadow-xl relative h-[160px]">
          <Image layout="fill" className="the-cat-img" src={imgUrl}></Image>
        </div>
        <div className="my-4">
          <h3 className="font-bold">Bleed: {contentData?.name}</h3>
          <p>Origin: {contentData?.origin}</p>
        </div>
      </div>
    </Link>
  );
}
