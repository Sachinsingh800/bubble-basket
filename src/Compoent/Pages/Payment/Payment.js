import React, { useState, useEffect } from "react";
import axios from "axios";
import browserInfo from "@smartbear/browser-info";

browserInfo.detect();

const APPLICATION_ID = "sandbox-sq0idb-lhuzqiKR6VIBNoMFKNfjMw";
const LOCATION_ID = "L40SZMBGKK61T";
const isSafari = browserInfo.name === "Safari";

const paymentRequestMock = {
  countryCode: "US",
  currencyCode: "USD",
  lineItems: [
    { amount: "1.23", label: "Cat", pending: false },
    { amount: "4.56", label: "Dog", pending: false },
  ],
  requestBillingContact: true,
  requestShippingContact: true,
  shippingContact: {
    addressLines: ["1 Test St", ""],
    city: "San Francisco",
    countryCode: "US",
    email: "test@squareup.com",
    familyName: "First Name",
    givenName: "Last Name",
    phone: "+12345678910",
    postalCode: "11111",
    state: "CA",
  },
  shippingOptions: [
    { amount: "0.00", id: "FREE", label: "Free" },
    { amount: "9.99", id: "XP", label: "Express" },
  ],
  total: { amount: "5.79", label: "Total", pending: false },
};

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
  const [validFields, setValidFields] = useState({
    cardNumber: false,
    cvv: false,
    expirationDate: false,
    postalCode: false,
  });
  const isCardFieldsValid = Object.values(validFields).every((v) => v);

  useEffect(() => {
    const existingScript = document.getElementById("webPayment");
    if (existingScript) setLoaded(true);
    else {
      const script = document.createElement("script");
      script.src = "https://sandbox.web.squarecdn.com/v1/square.js";
      script.id = "webPayment";
      document.body.appendChild(script);
      script.onload = () => {
        setLoaded(true);
      };
    }
  }, []);

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
    const headers = {
      "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjUzN2E1NTZmYWZjNTZlMDE0ZjA2NjQiLCJlbWFpbCI6InNhY2hpbnNpbmdoZ25jQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE2ODkzNjgyfQ.MPxOquogtTYCWLAcODyW-lFUjEzBKokaDyMwTjiOHSk", // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const isCard = paymentMethod?.element?.id === "card-container";
    if (isCard && !isCardFieldsValid) return;
    if (!isSubmitting) {
      if (isCard) setSubmitting(true);
      try {
        const token = await tokenizePaymentMethod(paymentMethod);
        const newtoken = typeof token;
        console.log(newtoken);
        await axios.post(
          `https://wine-rnlq.onrender.com/user/order/create/6655b89c4455f0c7acd87601`,
          {
            nonce: token,
            paymentMethod: {
              online: true,
            },
          },
          {headers}
        );
        console.log("TOKEN", token);
        alert("Payment successful!");
      } catch (error) {
        console.error("FAILURE", error);
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
    const paymentRequest = squarePayments.paymentRequest(paymentRequestMock);
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
    const paymentRequest = squarePayments.paymentRequest(paymentRequestMock);

    const paymentRequestUpdate = {
      lineItems: paymentRequestMock.lineItems,
      shippingOptions: paymentRequestMock.shippingOptions,
      total: paymentRequestMock.total,
    };

    paymentRequest.addEventListener("shippingcontactchanged", (contact) => {
      console.log({ contact });
      return paymentRequestUpdate;
    });

    paymentRequest.addEventListener("shippingoptionchanged", (option) => {
      console.log({ option });
      return paymentRequestUpdate;
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
              : `Pay ${paymentRequestMock.total.amount}`}
          </button>
        </div>
      </form>
      <div id="payment-status-container"></div>
    </div>
  );
}

export default Payment;
