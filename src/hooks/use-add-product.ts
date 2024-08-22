
import { useState, useEffect } from 'react';
import axios from "axios"
const useFetcher = (url:string) => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(url); 
        console.log("successfully")
        
      } catch (err) {
        console.error(err as Error);
    };
}

    fetchData();
  }, [url]);
};

export default useFetcher;
