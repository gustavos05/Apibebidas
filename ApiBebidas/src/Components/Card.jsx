const Card = ({data}) => {
    return  (
    <div className="card">
        <img src={data.strDrinkThumb} alt="" />
        <h2>{data.strDrink}</h2>
        <h3>{data.strInstructions}</h3>
    </div>);
  };
  export default Card 
