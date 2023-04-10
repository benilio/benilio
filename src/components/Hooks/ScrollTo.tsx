import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollTo() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let element = document.getElementById(location.hash.slice(1));

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
}
