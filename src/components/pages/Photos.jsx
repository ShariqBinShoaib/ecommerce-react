import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import Image from "../Image";

function Photos() {
  const { photos } = useContext(AppContext);

  return (
    <div className="row">
      {photos.map((photo) => (
        <Image img={photo} key={photo.id} />
      ))}
    </div>
  );
}

export default Photos;
