import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifts(category);
    setTimeout(() => {
      setImages(newImages);
      setIsLoading(false);
    },1000)
  };

  useEffect(() => {
    getImages();
  }, []);


  return {
    images,
    isLoading,
    setImages,
  };
};

export default useFetchGifs;
