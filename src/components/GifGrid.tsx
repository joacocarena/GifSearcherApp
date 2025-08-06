import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

type GifGridProps = {
    category: string
}

const GifGrid = ({ category }: GifGridProps) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading ?? <h2>Loading...</h2> // No ejecuta el bloque "else"
        }
        <div className="card-grid">
          {images.map( ( image ) => (
            <GifItem key={image.id} { ...image } />
          ) )}
        </div>
    </>
  )
}

export default GifGrid;