import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./CartePage.css";

const CartPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const sendEmail = () => {
    const Item = cartItems.map(
      (item) =>
        `${item.name} - Qte: ${item.quantity}, Prix: $${item.price.toFixed(
          2
        )}, Total: $${(item.price * item.quantity).toFixed(2)}`
    ).join("\n");

    const templateParams = {
      user_name: "User",
      user_email: "client@email.com",
      message: Item + `\nTotal : $${total.toFixed(2)}`
    };

    emailjs
      .send(
        "service_g990vnf",
        "template_25jlles",
        templateParams,
        "7c3QScS6N7Cqt4vWv"
      )
      .then(() => {
        setShowAlert(true);
        clearCart(); // Vider le panier
        setTimeout(() => {
          setShowAlert(false);
          navigate("/"); // Rediriger vers la page d'accueil
        }, 3000);
      })
      .catch((error) => {
        alert("Erreur lors de l'envoi de l'email.");
        console.error(error);
      });
  };

  return (
    <div className="cart-container">
      {showAlert && (
        <div className="success-alert">Commande envoyée avec succès !</div>
      )}

      <h1>Votre facture</h1>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Produit</th>
                <th>Quantité</th>
                <th>Prix</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Total : ${total.toFixed(2)}</h2>
          <button className="confirm-btn" onClick={sendEmail}>
            Valider la commande
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
