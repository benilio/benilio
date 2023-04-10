import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavHighlight() {
  const location = useLocation();
  const pageYOffset = window.pageYOffset;

  let newActiveElement: any;

  const [activeElement, setActiveElement] = useState("projects");

  useEffect(() => {
    let element = document.getElementById(location.hash.slice(1));

    if (element) {
      const elementOffsetTop = element.offsetTop;
      const elementOffsetHeight = element.offsetHeight;

      if (
        pageYOffset >= elementOffsetTop &&
        pageYOffset < elementOffsetTop + elementOffsetHeight
      ) {
        newActiveElement = element;
      }
    }

    setActiveElement(newActiveElement);
  }, [location]);

  return { activeElement };
}
