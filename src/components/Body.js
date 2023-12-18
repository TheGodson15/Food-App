import React from "react";

export default function Body(props) {

  let options = props.options;
  let priceOptions = Object.keys(options);

  const handleAddToCart =  ()=>{
    
  }


  return (
    <div className="m-3">
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={props.imgSrc} className="card-img-top" alt="..." style={{height:"220px", objectFit:"fill"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          {/* <p className="card-text">This is information about product</p>  */}
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded" id="">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}{" "}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded" id="">
              {priceOptions.map((data)=>{
                return <option key={data} value={data}>{data}</option>
              })}
            </select>
            <div className="d-inline h-100 fs-5">Total Price:</div>
          </div>
        </div>
        <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add+</button>
      </div>
    </div>
  );
}
