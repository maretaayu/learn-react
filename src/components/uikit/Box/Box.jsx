/* eslint-disable react/prop-types */
import "./Box.css";
function Box({ urlImage, title, description }) {
  return (
    <div className="box">
      <img src={urlImage} alt="" />
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}
export { Box };
