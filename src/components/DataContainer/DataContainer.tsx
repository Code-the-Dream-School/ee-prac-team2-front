import { getAllData } from "@utils";
import React, { useEffect, useState } from "react";

const URL = "http://localhost:8000/api/v1/";

export default function DataContainer() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getAllData(URL).then((response) => {
      setMessage(response.data);
    });

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <>
      <h1>{`Data fetched from API: "${message}"`}</h1>
    </>
  );
}
