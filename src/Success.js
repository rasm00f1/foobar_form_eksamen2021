import { Link } from "@reach/router";

export default function Success() {
  return (
    <section className="success">
      <h1>Payment Successful!</h1>
      <p className="order_p">
        Your order number is <span></span> follow your order by going back to
        menu.
      </p>
      <img src="./icons/check-circle.svg" alt="" className="check_icon" />
      {/* HOW TO BREAK? */}

      <button className="button_blue success_button">
        <Link to="/">Back to Menu</Link>
      </button>
    </section>
  );
}
