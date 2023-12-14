import React from "react";

export default function Body() {
  return (
    <div className="m-3">
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src="https://media.istockphoto.com/id/1403309689/photo/paneer-tikka.jpg?s=612x612&w=0&k=20&c=uId3C6OiAhomzkeIjHULig7yDY9H3HjE6hjhmVsIkJw=" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is information about product</p>
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
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price:</div>
          </div>
        </div>
      </div>
    </div>
  );
}
