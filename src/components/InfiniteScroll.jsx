import React from "react";
import "./styles/infi.css";

function InfiniteScroll() {
  const images = [
    {
      src: "https://res.cloudinary.com/dv3qynfuf/image/upload/v1718892509/z72ps3vfk8dcak5nqsjx.png",
      alt: "Image 1",
    },
    {
      src: "https://res.cloudinary.com/dv3qynfuf/image/upload/v1718892509/othxv25irz1pavfjodtr.jpg",
      alt: "Image 2",
    },
    {
      src: "https://res.cloudinary.com/dv3qynfuf/image/upload/v1718892509/gntazzs2t0pjw8obe6uc.png",
      alt: "Image 3",
    },
    {
      src: "https://res.cloudinary.com/dv3qynfuf/image/upload/v1718892510/wqphty0draoojdzdnur7.jpg",
      alt: "Image 4",
    },
    {
      src: "https://res.cloudinary.com/dv3qynfuf/image/upload/v1718892513/wk3prgefoeyorf6dssha.jpg",
      alt: "Image 5",
    },
    {
      src: "https://res.cloudinary.com/dv3qynfuf/image/upload/v1718892513/cgcpfkwrd6taqysajsn2.jpg",
      alt: "Image 6",
    },
    {
      src: "https://res.cloudinary.com/dv3qynfuf/image/upload/v1718892514/oww73evhojpw4qxnrt6h.jpg",
      alt: "Image 7",
    },
    {
      src: "https://res.cloudinary.com/dv3qynfuf/image/upload/v1718892515/mzprfcvpacgzcttdmpgi.jpg",
      alt: "Image 8",
    },
  ];

  return (
    <div className="scroller flex overflow-hidden space-x-10 group bg-transparent">
      <div className="flex space-x-16 animate-loop-scroll">
        {images.map((image, index) => (
          <div key={index} className="">
            {" "}
            {/* Wrapper with opacity */}
            <img
              loading="lazy"
              src={image.src}
              className="max-w-none object-cover h-36 w-auto"
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      <div
        className="flex space-x-16 animate-loop-scroll bg-transparent"
        aria-hidden="true"
      >
        {images.map((image, index) => (
          <div key={index} className="">
            {" "}
            {/* Duplicate wrapper with opacity */}
            <img
              loading="lazy"
              src={image.src}
              className="max-w-none object-cover h-36 w-auto"
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteScroll;
