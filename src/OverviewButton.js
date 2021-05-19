import { useState } from "react";
export default function OverviewButton(props) {
  const buttonContainer = {
    display: "flex",
    boxShadow: "4px 4px 0px #896BFF",
    borderRadius: "4px",
    width: "8rem",
    justifyContent: "space-between",
  };

  const [amount, setAmount] = useState(0);
  const [queueCartItems, setQueueCartItems] = useState([]);

  function incClick() {
    setAmount((prevAmount) => prevAmount + 1);
    addToCartQueue(props);
  }

  function decClick() {
    setAmount((prevAmount) => prevAmount - 1);
    removeFromCartQueue(props);
  }

  function addToCartQueue(payload) {
    const inCart = queueCartItems.findIndex((item) => item.id === payload.id);
    if (inCart === -1) {
      //add
      const nextPayload = { ...payload };
      nextPayload.amount = 1;
      setQueueCartItems((prevState) => [...prevState, nextPayload]);
    } else {
      //it exists, modify amount
      const nextCart = queueCartItems.map((item) => {
        if (item.id === payload.id) {
          item.amount += 1;
        }
        return item;
      });
      setQueueCartItems(nextCart);
    }
  }

  function removeFromCartQueue(payload) {
    let nextCart = queueCartItems.map((item) => {
      if (item.id === payload.id) {
        item.amount -= 1;
        if (item.amount === 0) {
          console.log("No beers");
        }
      }
      return item;
    });
    setQueueCartItems(nextCart);
  }

  function addToCartForward() {
    console.log(queueCartItems[0]);
    props.setIsOpen(false);
    props.addToCart(queueCartItems[0]);
  }
  return (
    <div>
      <div style={buttonContainer}>
        <button disabled={amount === 0} className="indexButton" onClick={decClick} style={{ borderRadius: "4px 0px 0px 4px" }}>
          -
        </button>
        <p>{props.amount}</p>
        <button className="indexButton" onClick={incClick} style={{ borderRadius: "0px 4px 4px 0px" }}>
          +
        </button>
      </div>
    </div>
  );
}
