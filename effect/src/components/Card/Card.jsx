const Card = ({ title, img }) => {
  return (
    <div className="img">
      <p>{title}</p>
      <img src={img} alt="x" />
    </div>
  );
};

export default Card;
