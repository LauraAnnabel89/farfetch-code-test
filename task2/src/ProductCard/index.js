import React, { useState, useRef, useEffect, useHover } from "react";
import "./style.css";

function ProductCard(props) {
  const [hoverRef, isHovered] = useHover();

  function useHover() {
    const [value, setValue] = useState(false);
    const ref = useRef(null);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    }, [ref.current]);
    return [ref, value];
  }

  return (
    <div className="ProductCard" key={props.id} ref={hoverRef}>
      <a href={props.link} className="ProductCard__link">
        <div>
          {isHovered ? (
            <img
              src={props.imageModel}
              alt={props.shortDescription}
              className="ProductCard__image ProductCard__image--hover"
            />
          ) : (
            <img
              src={props.imageProduct}
              alt={props.shortDescription}
              className="ProductCard__image"
            />
          )}
        </div>
        <div className="ProductCard__info">
          <span className="ProductCard__label">{props.merchandiseLabel}</span>
          <h2 className="ProductCard__brand">{props.brand}</h2>
          <p className="ProductCard__description">{props.shortDescription}</p>
          <p className="ProductCard__price">{props.price}</p>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
