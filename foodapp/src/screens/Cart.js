import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import DeleteIcon from "@mui/icons-material/Delete";
function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  if (data.length === 0) {
    return (
      <div>
        <h2 className=" h-50 text-center mt-5">The Cart is empty</h2>
      </div>
    );
  }
  return (
    <div className="container">
      <table className="table mt-5 table-responsive-lg table-responsive-md table-responsive-sm table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Options</th>
            <th scope="col">Amount</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => {
            return (
              <>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>
                  <td>{food.size}</td>
                  <td>{food.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <div>
        <h3>&#8377;{totalPrice}/-</h3>
      </div>
      <button type="button">CheckOut</button>
    </div>
  );
}

export default Cart;
