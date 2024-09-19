import { useEffect, useState } from "react";
import data from "../data/imagesData";


export function useInterval() {
    const [index, setIndex] = useState(0);


    useEffect(() => {
        if (index < 0) {
          setIndex(data.length - 1);
        } else if (index > data.length - 1) {
          setIndex(0);
        }
      }, [index]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => clearInterval(interval);
      }, [index]);

      useEffect(() => {
        const interval = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => clearInterval(interval);
      }, [index]);

      return index

}