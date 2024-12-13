/* eslint-disable react/prop-types */

import { Button } from "../Button/Button";
import "./Card.css";
function Card({ title, description, label, source, onClick }) {
  return (
    <div className="card">
      <img src={source} className="img-style" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button label={label} variant="secondary" onClick={onClick} />
    </div>
  );
}

export { Card };
