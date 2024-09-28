// src/PaymentGuest.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import browserInfo from "@smartbear/browser-info";

// Set up sample data in sessionStorage for demo purposes
const setSampleData = () => {
  const billingDetails = {
    id: "1727435737340",
    firstName: "Sachin",
    lastName: "Singh",
    company: "School",
    address1: "Dhanbad",
    address2: "",
    city: "Dhanbad",
    postCode: "828116",
    country: "United States",
    state: "California",
    mobile: "07254801625",
    email: "sachin.singh@example.com", // Ensure email is included
    setAsDefault: true,
  };

  const cartData = [
    {
      productBlog: {
        intro: "Veuve Clicquot Brut Yellow Label is an iconic champagne...",
        detailedOverview: "Alcohol is a psychoactive substance found in beverages...",
        experienceOfTesting: "Alcohol is a psychoactive substance found in beverages...",
        comparison: "Alcohol is a psychoactive substance found in beverages...",
      },
      productExtra: {
        winery: "USA",
        country: "USA",
        region: "USA",
        year: "1998",
        grapeVarietal: "Bordeaux Red Blend",
        size: "750ml",
        aBV: "14.5%",
        wineStyle: "Red Wine",
      },
      _id: "665054e2bca8deb4c5316b5a",
      title: "Veuve Clicquot Brut Yellow Label- 750 ML",
      description:
        "<p>Alcohol is a psychoactive substance found in beverages like beer...</p>",
      unit: 2,
      measureUnit: "mL",
      dimension: "20 x 30 x 30 x 20 cm",
      price: 89.99,
      productImg: [
        {
          public_id: "wineProducts/u1ttxqwnyhsitguodcme",
          url: "https://res.cloudinary.com/dnolz4gzn/image/upload/v1724165247/wineProducts/u1ttxqwnyhsitguodcme.webp",
          _id: "66c4ac84c288ff841e8e11bf",
        },
        {
          public_id: "wineProducts/d8fgj1dqz9v5aazf9tis",
          url: "https://res.cloudinary.com/dnolz4gzn/image/upload/v1724165250/wineProducts/d8fgj1dqz9v5aazf9tis.png",
          _id: "66c4ac84c288ff841e8e11c0",
        },
        {
          public_id: "wineProducts/vankfrcoxsgofagi4kzh",
          url: "https://res.cloudinary.com/dnolz4gzn/image/upload/v1724165252/wineProducts/vankfrcoxsgofagi4kzh.png",
          _id: "66c4ac84c288ff841e8e11c1",
        },
      ],
      category: "CHAMPAGNE",
      Stock: 0,
      productStatus: "Available",
      setAs: "none",
      sku: "LUX017",
      tag: "Champagne",
      brand: "Veuve Clicquot",
      createdAt: "2024-05-24T08:50:42.150Z",
      updatedAt: "2024-09-16T07:22:25.466Z",
      __v: 0,
      Meta_Description:
        "Discover the elegant taste of Veuve Clicquot Brut Yellow Label 750ml...",
      Meta_Title: "Buy Veuve Clicquot Brut Yellow Label 750ml",
      quantity: 1,
    },
  ];

  sessionStorage.setItem("address", JSON.stringify(billingDetails));
  sessionStorage.setItem("cartData", JSON.stringify(cartData));
  sessionStorage.setItem("promocode", JSON.stringify("DEMO10"));
};

function PaymentGuest() {
  const [loaded, setLoaded] = useState(false);
  const [squarePayments, setSquarePayments] = useState(undefined);
  const [squareCard, setSquareCard] = useState(undefined);
  const [applePay, setApplePay] = useState(undefined);
  const [googlePay, setGooglePay] = useState(undefined);
  const [isSubmitting, setSubmitting] = useState(false);
  const [checkoutData, setCheckoutData] = useState({});
  const [address, setAddress] = useState({});
  const [validFields, setValidFields] = useState({
    cardNumber: false,
    cvv: false,
    expirationDate: false,
    postalCode: false,
  });

  const isCardFieldsValid = Object.values(validFields).every((v) => v);

  useEffect(() => {
    // Set sample data on component mount
    setSampleData();

    const handleGetCheckoutData = async () => {
      try {
        const response = await getCheckout();
        setCheckoutData(response?.data || {});
      } catch (error) {
        console.log("Error fetching checkout data:", error);
      }
    };

    handleGetCheckoutData();
    setAddress(JSON.parse(sessionStorage.getItem("address")) || {});

    // Load Square's Payment SDK
    const existingScript = document.getElementById("webPayment");
    if (existingScript) {
      setLoaded(true);
    } else {
      const script = document.createElement("script");
      // For sandbox testing
      script.src = "https://sandbox.web.squarecdn.com/v1/square.js";
      script.id = "webPayment";
      document.body.appendChild(script);
      script.onload = () => {
        setLoaded(true);
      };
      script.onerror = () => {
        console.error("Failed to load Square.js");
      };
    }
  }, []);

  const APPLICATION_ID = "sandbox-sq0idb-lhuzqiKR6VIBNoMFKNfjMw"; // Sandbox Application ID
  const LOCATION_ID = "L40SZMBGKK61T"; // Sandbox Location ID
  const isSafari = browserInfo.name === "Safari";

  // Mock function to simulate fetching checkout data
  async function getCheckout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const cartData = JSON.parse(sessionStorage.getItem("cartData")) || [];
        const totalPrice = cartData.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ).toFixed(2);
        resolve({ data: { productsData: cartData, totalPrice } });
      }, 500);
    });
  }

  // Function to tokenize payment method
  async function tokenizePaymentMethod(paymentMethod) {
    try {
      const tokenResult = await paymentMethod.tokenize();
      if (tokenResult.status === "OK") {
        return tokenResult.token;
      }
      let errorMessage = `Tokenization failed - status: ${tokenResult.status}`;
      if (tokenResult.errors) {
        errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
      }
      throw new Error(errorMessage);
    } catch (error) {
      console.error("Tokenization Error:", error);
      throw error;
    }
  }

  // Initialize Square Payments
  useEffect(() => {
    if (loaded && !squarePayments) {
      if (!window?.Square) {
        console.error("Square.js failed to load properly");
        return;
      }
      setSquarePayments(window.Square?.payments(APPLICATION_ID, LOCATION_ID));
    }
  }, [loaded, squarePayments]);

  // Handle payment submission
  const handlePaymentMethodSubmission = async (paymentMethod) => {
    const promoCode = JSON.parse(sessionStorage.getItem("promocode")) || "";

    // Retrieve token if present (for authenticated users, not needed for guest)
    function getToken() {
      return document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
    }

    const token = getToken();
    const userId = address?.id || "guest"; // Use 'guest' if no user ID
    const headers = {
      "Content-Type": "application/json",
      ...(token && { "x-auth-token": token }),
    };

    const isCard = paymentMethod?.element?.id === "card-container";
    if (isCard && !isCardFieldsValid) return;

    if (!isSubmitting) {
      if (isCard) setSubmitting(true);
      try {
        const nonce = await tokenizePaymentMethod(paymentMethod);

        // Simulate backend call with a timeout
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Mock response
        const mockResponse = {
          status: 200,
          data: {
            orderId: "ORDER123456",
            amount: checkoutData.totalPrice,
            status: "COMPLETED",
          },
        };

        if (mockResponse.status === 200 || mockResponse.status === 201) {
          alert("Payment successful!");
          sessionStorage.setItem("orderData", JSON.stringify(mockResponse.data));
          sessionStorage.removeItem("cartData");
          sessionStorage.removeItem("promocode");
          window.location.href = "/"; // Redirect to home page
        } else {
          throw new Error("Payment failed due to server error.");
        }
      } catch (error) {
        console.error("Payment FAILURE", error);
        // Enhanced error messages
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          alert(`Payment failed! ${error.response.data.message || "Please try again."}`);
        } else if (error.request) {
          // Request was made but no response received
          console.error("Request data:", error.request);
          alert("Payment failed! No response from server.");
        } else {
          // Something else happened
          console.error("Error message:", error.message);
          alert(`Payment failed! ${error.message}`);
        }
      } finally {
        if (isCard) setSubmitting(false);
      }
    }
  };

  // Handle card field events to validate inputs
  const handleCardEvents = ({ detail }) => {
    if (detail) {
      const {
        currentState: { isCompletelyValid } = {},
        field,
      } = detail;
      if (field) {
        setValidFields((prevState) => ({
          ...prevState,
          [field]: isCompletelyValid,
        }));
      }
    }
  };

  // Initialize Apple Pay
  const initializeApplePay = async () => {
    try {
      const paymentRequest = squarePayments.paymentRequest(paymentRequestMock);
      const aPay = await squarePayments.applePay(paymentRequest);
      setApplePay(aPay);
    } catch (error) {
      console.error("Apple Pay initialization failed", error);
    }
  };

  // Attach Google Pay button
  const attachGooglePay = (gPay) => {
    const googlePayObject = gPay || googlePay;
    googlePayObject.attach("#google-pay", {
      buttonColor: "white",
      buttonSizeMode: "fill",
      buttonType: "long",
    });
  };

  // Initialize Google Pay
  const initializeGooglePay = async () => {
    try {
      const paymentRequest = squarePayments.paymentRequest(paymentRequestMock);

      const paymentRequestUpdate = {
        lineItems: paymentRequestMock.lineItems,
        shippingOptions: paymentRequestMock.shippingOptions,
        total: paymentRequestMock.total,
      };

      paymentRequest.addEventListener("shippingcontactchanged", (contact) => {
        return paymentRequestUpdate;
      });

      paymentRequest.addEventListener("shippingoptionchanged", (option) => {
        return paymentRequestUpdate;
      });

      const gPay = await squarePayments.googlePay(paymentRequest);
      setGooglePay(gPay);
      attachGooglePay(gPay);
    } catch (error) {
      console.error("Google Pay initialization failed", error);
    }
  };

  // Attach Card Element
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

  // Initialize Square Card
  const initializeSquareCard = async () => {
    try {
      const card = await squarePayments.card();
      setSquareCard(card);
      attachCard(card);
    } catch (error) {
      console.error("Square Card initialization failed", error);
    }
  };

  // Manage Square Payment Methods
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squarePayments]);

  // Define Payment Request
  const paymentRequestMock = {
    countryCode: "US",
    currencyCode: "USD",
    lineItems:
      checkoutData?.productsData?.map((product) => ({
        amount: (product.price * product.quantity).toFixed(2),
        label: product.title,
        pending: false,
      })) || [],
    requestBillingContact: true,
    requestShippingContact: true,
    shippingContact: {
      addressLines: [address?.address1 || "", address?.address2 || ""],
      city: address?.city || "",
      countryCode: "US",
      email: address?.email || "", // Include email
      familyName: address?.lastName || "",
      givenName: address?.firstName || "",
      phone: address?.mobile || "",
      postalCode: address?.postCode || "",
      state: address?.state || "",
    },
    shippingOptions: [
      { amount: "0.00", id: "FREE", label: "Free" },
      { amount: "9.99", id: "XP", label: "Express" },
    ],
    total: {
      amount: checkoutData?.totalPrice || "0.00",
      label: "Total",
      pending: false,
    },
  };

  // Styles for the card button
  let cardButtonStyles = {
    backgroundColor: "#ddd",
    color: "white",
    padding: "16px",
    fontFamily: "sans-serif",
    fontSize: "1rem",
    marginBottom: "16px",
    borderRadius: "8px",
    borderWidth: "0",
    cursor: isCardFieldsValid ? "pointer" : "not-allowed",
    width: "100%",
  };
  if (isCardFieldsValid) {
    cardButtonStyles = {
      ...cardButtonStyles,
      backgroundColor: "black",
    };
  }

  return (
    <div
      className="App"
      style={{ maxWidth: 600, margin: "0 auto", padding: 20, fontFamily: "Arial, sans-serif" }}
    >
      {isSafari && applePay && (
        <div
          id="apple-pay"
          onClick={() => handlePaymentMethodSubmission(applePay)}
          style={{
            backgroundColor: "white",
            padding: "11px",
            borderColor: "#bbb",
            borderWidth: "1px",
            boxShadow: "0px 2px 4px #00000033",
            fontFamily: "sans-serif",
            fontSize: "0.9rem",
            marginBottom: "16px",
            borderRadius: "3px",
            cursor: "pointer",
            maxWidth: "100%",
            textAlign: "center",
          }}
        >
          Pay with Apple Pay
        </div>
      )}
      <div style={{ marginBottom: 24 }}>
        {googlePay && <div id="google-pay" />}
      </div>
      <form id="payment-form">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div id="card-container" style={{ width: "100%", marginBottom: 16 }}></div>
          <button
            id="card-button"
            type="button"
            style={cardButtonStyles}
            disabled={!isCardFieldsValid || isSubmitting}
            onClick={() => handlePaymentMethodSubmission(squareCard)}
          >
            {isSubmitting ? "Processing..." : `Pay $${paymentRequestMock.total.amount}`}
          </button>
        </div>
      </form>
      <div id="payment-status-container"></div>
    </div>
  );
}

export default PaymentGuest;
