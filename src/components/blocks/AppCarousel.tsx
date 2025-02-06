import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const AppCarousel = ({
  images = [],
  height,
}: {
  images: string[];
  height: string;
}) => (
  <Carousel autoplay>
    {images.map((image) => (
      <div key={image}>
        <h3 style={{ ...contentStyle, height }}>
          <img
            src={image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </h3>
      </div>
    ))}
  </Carousel>
);

export default AppCarousel;
