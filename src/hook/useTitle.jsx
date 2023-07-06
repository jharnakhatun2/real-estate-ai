import { useEffect } from "react";

export default function useTitle(title) {
  return (
    useEffect(()=>{
        document.title = `${title} - RealEstate Genius`;
    },[title])
  )
}
