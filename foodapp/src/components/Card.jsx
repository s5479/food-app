import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleCart = async () => {
    await dispatch({
      type: "ADD",
      id: props.foodData._id,
      name: props.foodData.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    console.log(data);
  };

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <div>
      <div className="card mb-5  text-center" style={{ width: "16rem" }}>
        <img
          src={props.foodData.img}
          className="card-img-top"
          alt="..."
          width="200px "
          height="180px"
        />
        <div className="card-body">
          <h6 className="card-title">
            <b>{props.foodData.name}</b>
          </h6>
          <p className="card-text"></p>
          <div className="container d-inline">
            <select
              name=""
              id=""
              className=" rounded  m-1"
              style={{ background: "orange" }}
              onChange={(e) => {
                setQty(e.target.value);
              }}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select
              name=""
              id=""
              className=" rounded  m-1"
              style={{ background: "orange" }}
              onChange={(e) => {
                setSize(e.target.value);
              }}
              ref={priceRef}
            >
              {priceOptions.map((data) => {
                return (
                  <>
                    <option key={data} value={data}>
                      {data}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="d-inline fw-bold">&#8377;{finalPrice} </div>
        </div>

        <button className="mb-2" onClick={handleCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
