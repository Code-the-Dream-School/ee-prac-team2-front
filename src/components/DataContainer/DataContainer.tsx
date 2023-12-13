// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { getAllData } from "@utils";
import React, { ReactElement, useEffect, useState } from "react";

const URL = import.meta.env.VITE_BACKEND_URL;

export default function DataContainer(): ReactElement {
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
