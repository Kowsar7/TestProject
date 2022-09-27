import React, { useEffect, useState } from "react";
import axios from 'axios'

import PaginationItems from "./PaginationItems/PaginationItems";

function Posts() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        let fetchedData = [];
        for ( let id in res.data ) {
          fetchedData.push({
              ...res.data[id],
              id: id
          })
        }
        setData(fetchedData)
      })
  }, [])

  return(
    <PaginationItems data={data} />
  )
}

export default Posts