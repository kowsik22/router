/*import React from "react";
import { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

const Github = () => {
  let data = useRouteLoaderData();
  return (
    <div className="bg-gray-700 text-center text-4xl px-4 py-4 text-white">
      Welcome To Github
      <img src={data.https://github.com/account} />
    </div>

  );
};

export default Github;
*/

import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = React.useState([])
  // useEffect(() => {
  //     fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then((response) => response.json())
  //     .then(data => {
  //         console.log(data)
  //         setData(data)
  //     })
  // }, [])

  return (
    <div
      className="text-center m-4 bg-gray-600 text-white p-4 sm:text-3xl text-2xl flex  "
      style={{ "flex-direction": "column" }}
    >
      <h1 className="m-4"> Github followers: {data.followers} </h1>
      <h1 className="m-4"> Github following: {data.following} </h1>
      <h1 className="m-4"> Repositries: {data.public_repos} </h1>
      <h1 className="m-4"> Location: {data.location} </h1>
      <div className="flex justify-center">
        <img
          className="min-w-4  sm:w-64 "
          src={data.avatar_url}
          alt=""
          width={150}
          style={{ "border-radius": "50%" }}
        />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/kowsik22");
  return response.json();
};
