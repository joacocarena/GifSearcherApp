import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

type Gif = {
    id: string;
    title: string;
    url: string;
}

export const useFetchGifs = (category: string) => {
  
  const [images, setImages] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    getGifs(category)
      .then( (newImages) => {
        setImages(newImages);
        setIsLoading(false);
      } )
  }, [category] )
  
    return { 
    images,
    isLoading
  }
}
