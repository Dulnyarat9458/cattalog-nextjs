import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "./component/card";

export default function Home({ data }) {
  console.log(data);

  
  const contentElements = data.map((value, index) => {
    return <Card key={index} contentData={value} />;
  });


  return (
    <div className="container mx-auto">
      <div className="bg-panel-body drop-shadow-xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {contentElements}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.thecatapi.com/v1/breeds`);
  const data = await res.json();
  return { props: { data } };
}
