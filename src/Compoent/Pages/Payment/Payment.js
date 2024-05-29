import React, { useState, useEffect } from "react";
import axios from "axios";
import browserInfo from "@smartbear/browser-info";
import { getCheckout } from "../../Apis/Apis";

browserInfo.detect();

const APPLICATION_ID = "sandbox-sq0idb-lhuzqiKR6VIBNoMFKNfjMw";
const LOCATION_ID = "L40SZMBGKK61T";
const isSafari = browserInfo.name === "Safari";

async function tokenizePaymentMethod(paymentMethod) {
  const tokenResult = await paymentMethod.tokenize();
  if (tokenResult.status === "OK") {
    return tokenResult.token;
  }
  let errorMessage = `Tokenization failed-status: ${tokenResult.status}`;
  if (tokenResult.errors) {
    errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
  }
  throw new Error(errorMessage);
}

function Payment() {
  const [loaded, setLoaded] = useState(false);
  const [squarePayments, setSquarePayments] = useState(undefined);
  const [squareCard, setSquareCard] = useState(undefined);
  const [applePay, setApplePay] = useState(undefined);
  const [googlePay, setGooglePay] = useState(undefined);
  const [isSubmitting, setSubmitting] = useState(false);
  const [payableAmount, setPayableAmount] = useState("");
  const [validFields, setValidFields] = useState({
    cardNumber: false,
    cvv: false,
    expirationDate: false,
    postalCode: false,
  });
  const isCardFieldsValid = Object.values(validFields).every((v) => v);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    handleGetCheckoutData();
    const existingScript = document.getElementById("webPayment");
    if (existingScript) {
      setLoaded(true);
    } else {
      const script = document.createElement("script");
      script.src = "https://sandbox.web.squarecdn.com/v1/square.js";
      script.id = "webPayment";
      document.body.appendChild(script);
      script.onload = () => {
        setLoaded(true);
      };
    }
  }, []);

  const handleGetCheckoutData = async () => {
    try {
      const response = await getCheckout();
      setPayableAmount(response?.data?.totalPrice);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loaded && !squarePayments) {
      if (!window?.Square) {
        console.error("Square.js failed to load properly");
        return;
      }
      setSquarePayments(window.Square?.payments(APPLICATION_ID, LOCATION_ID));
    }
  }, [loaded, squarePayments]);

  const handlePaymentMethodSubmission = async (paymentMethod) => {
    const getToken = () =>
      document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

    const token = getToken();
    const address = JSON.parse(localStorage.getItem("address")) || {};
    const selectedAddress =
      JSON.parse(localStorage.getItem("selectedAddress")) || {};
    const ad_id = JSON.parse(localStorage.getItem("ad_id")) || false;
    const id = ad_id ? selectedAddress?._id : address?._id;

    const headers = {
      "x-auth-token": token,
      "Content-Type": "application/json",
    };

    const isCard = paymentMethod?.element?.id === "card-container";
    if (isCard && !isCardFieldsValid) return;
    if (!isSubmitting) {
      if (isCard) setSubmitting(true);
      try {
        const token = await tokenizePaymentMethod(paymentMethod);
        await axios.post(
          `https://wine-rnlq.onrender.com/user/order/create/${id}`,
          {
            nonce: token,
            paymentMethod: {
              online: true,
            },
          },
          { headers }
        );
        alert("Payment successful!");
      } catch (error) {
        console.error("Payment failed:", error);
        alert("Payment failed!");
      } finally {
        isCard && setSubmitting(false);
      }
    }
  };

  const handleCardEvents = ({ detail }) => {
    if (detail) {
      const { currentState: { isCompletelyValid } = {}, field } = detail;
      if (field) {
        setValidFields((prevState) => ({
          ...prevState,
          [field]: isCompletelyValid,
        }));
      }
    }
  };

  const initializeApplePay = async () => {
    const paymentRequest = squarePayments.paymentRequest({
      countryCode: "US",
      currencyCode: "USD",
      total: { amount: payableAmount, label: "Total" },
    });
    const aPay = await squarePayments.applePay(paymentRequest);
    setApplePay(aPay);
  };

  const attachGooglePay = (gPay) => {
    const googlePayObject = gPay || googlePay;
    googlePayObject.attach("#google-pay", {
      buttonColor: "white",
      buttonSizeMode: "fill",
      buttonType: "long",
    });
  };

  const initializeGooglePay = async () => {
    const paymentRequest = squarePayments.paymentRequest({
      countryCode: "US",
      currencyCode: "USD",
      total: { amount: payableAmount, label: "Total" },
    });

    const gPay = await squarePayments.googlePay(paymentRequest);
    setGooglePay(gPay);
    attachGooglePay(gPay);
  };

  const attachCard = (card) => {
    const cardObject = card || squareCard;
    cardObject.attach("#card-container");
    cardObject.addEventListener("submit", () =>
      handlePaymentMethodSubmission(cardObject)
    );
    cardObject.addEventListener("focusClassAdded", handleCardEvents);
    cardObject.addEventListener("focusClassRemoved", handleCardEvents);
    cardObject.addEventListener("errorClassAdded", handleCardEvents);
    cardObject.addEventListener("errorClassRemoved", handleCardEvents);
    cardObject.addEventListener("cardBrandChanged", handleCardEvents);
    cardObject.addEventListener("postalCodeChanged", handleCardEvents);
    setLoading(false);
  };

  const initializeSquareCard = async () => {
    const card = await squarePayments.card();
    setSquareCard(card);
    attachCard(card);
  };

  useEffect(() => {
    if (squarePayments) {
      if (!squareCard) initializeSquareCard();
      if (!applePay && isSafari) initializeApplePay();
      if (!googlePay) initializeGooglePay();
      else attachGooglePay();
    } else {
      if (squareCard) {
        squareCard.destroy();
        setSquareCard(undefined);
      }
      if (applePay) {
        applePay.destroy();
        setApplePay(undefined);
      }
      if (googlePay) {
        googlePay.destroy();
        setGooglePay(undefined);
      }
    }
  }, [squarePayments]);

  let cardButtonStyles = {
    backgroundColor: "#ddd",
    color: "white",
    padding: 16,
    fontFamily: "sans-serif",
    fontSize: "1rem",
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 0,
  };
  if (isCardFieldsValid) {
    cardButtonStyles = {
      ...cardButtonStyles,
      backgroundColor: "black",
    };
  }

  return (
    <div className="App">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {isSafari && (
            <div
              id="apple-pay"
              onClick={() => handlePaymentMethodSubmission(applePay)}
              style={{
                backgroundColor: "white",
                padding: 11,
                borderColor: "#bbb",
                borderWidth: 1,
                boxShadow: "0px 2px 4px #00000033",
                fontFamily: "sans-serif",
                fontSize: "0.9rem",
                marginBottom: 16,
                borderRadius: 3,
                cursor: "pointer",
              }}
            >
              <span>Buy with Apple Pay</span>
            </div>
          )}
          <div style={{ marginBottom: 24 }}>
            <div
              id="google-pay"
              onClick={() => handlePaymentMethodSubmission(googlePay)}
            />
          </div>
          <form id="payment-form">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div id="card-container"></div>
              <button
                id="card-button"
                type="button"
                style={cardButtonStyles}
                disabled={!isCardFieldsValid || isSubmitting}
                onClick={() => handlePaymentMethodSubmission(squareCard)}
              >
                {isSubmitting
                  ? "Processing..."
                  : `Pay $${payableAmount}`}
              </button>
            </div>
          </form>
          <div id="payment-status-container"></div>
        </>
      )}
    </div>
  );
}

export default Payment;
