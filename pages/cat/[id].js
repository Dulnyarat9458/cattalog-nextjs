import React from "react";

export default function Cat({ cat }) {
  console.log(cat);
  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="p-8 bg-white text-sm rounded-lg drop-shadow-xl">
        <p>Bleed: {cat.name}</p>
        <p>Origin: {cat.origin}</p>
        <p>Temperament: {cat.temperament}</p>
        <p>Life Span: {cat.life_span}</p>
        <p>Description: {cat.description}</p>
        <p>
        Wikipedia: <a href={cat.wikipedia_url} className="text-[#51C894]">{cat.wikipedia_url}</a>
        </p>
      </div>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://api.thecatapi.com/v1/breeds",{
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "live_jEGQJ7EX0TPQwwl6IgODgbTgkNkDTge8Kak0wC2d14ij8Y9Ndt3LEZwofhFQgBy9'",
    },
  });
  const cats = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = cats.map((cat) => ({
    params: { id: cat.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://api.thecatapi.com/v1/breeds/${params.id}`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "live_jEGQJ7EX0TPQwwl6IgODgbTgkNkDTge8Kak0wC2d14ij8Y9Ndt3LEZwofhFQgBy9'",
    },
  });
  const cat = await res.json();
  // console.log(cat.id)
  // Pass post data to the page via props
  return { props: { cat } };
}
