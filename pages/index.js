import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "./component/catcard";
import { useState } from "react";

export default function Home({ data }) {
  const [filteredList, setFilteredList] = new useState(data);

  var contentElements = filteredList.map((value, index) => {
    return <Card key={index} contentData={value} />;
  });

  const filterBySearch = (event) => {
    const searchInput = event.target.value;
    console.log(searchInput)
    var updatedList = [...data];
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };

  return (
    <div className="container mx-auto">
      <div className="bg-panel-body drop-shadow-xl">
        <div className="p-8 flex justify-center">
          <form className="mx-auto ">
            <input
              id="search-input"
              type="text"
              placeholder="Search for breed.."
              className="bg-white p-2"
              onChange={filterBySearch}
            ></input>
          </form>
        </div>

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
