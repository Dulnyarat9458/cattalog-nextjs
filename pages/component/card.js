import React from "react";
import Link from "next/link";

export default function card(props) {
  const { contentData } = props;
  var imgUrl;
  var linker = "../cat/" + contentData.id;
  if (contentData.image?.url === null || contentData.image?.url == null) {
    imgUrl = "/notav.jpg";
  } else {
    imgUrl = contentData.image?.url;
  }

  return (
    <Link href={linker}>
      <div className="text-sm card p-4 m-8 rounded-lg bg-card-body drop-shadow-xl hover:drop-shadow-sm hover:bg-[#51C894] hover:text-white ease-in-out duration-300 cursor-pointer">
        <div className="rounded-md bg-white border-neutral-500 drop-shadow-xl">
          <img className="max-h-[160px] mx-auto" src={imgUrl}></img>
        </div>
        <div className="my-4">
          <h3 className="font-bold">Bleed: {contentData.name}</h3>
          <p>Origin: {contentData.origin}</p>
        </div>
      </div>
    </Link>
  );
}
