import axios from "axios";

const BASE_URL = "https://wine-rnlq.onrender.com";

// Register

export const RegisterUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/auth/register`,
      userData
    );
    const { status, message, data, token } = response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      alert(errorMessage);
      // Log the error message as a string
    } else {
      // Network error (e.g., no internet connection)
      alert("Something went wrong");
    }
  }
};

// verifyEmail

export const verifyEmail = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/auth/verifyEmail`,
      userData
    );
    const { status, message, data, token } = response.data;
    if (status) {
      window.location.href = "/Login";
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      alert(errorMessage);
      // Log the error message as a string
      localStorage.removeItem("cartData");
    } else {
      // Network error (e.g., no internet connection)
      alert("Something went wrong");
    }
  }
};
// resendOtp

export const resendOtp = async (email) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/auth/resendOtp`,
     email
    );
    const { status, message, data, token } = response.data;
    if (status) {
      // window.location.href = "/Login";
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      alert(errorMessage);
      // Log the error message as a string
      localStorage.removeItem("cartData");
    } else {
      // Network error (e.g., no internet connection)
      alert("Something went wrong");
    }
  }
};

//forgetPassword

export const forgetPassword = async (email) => {
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();

  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.post(
      `${BASE_URL}/user/auth/forgetPass`,
      {
        email: email,
      },
      { headers }
    );

    const { status, message, data } = response.data;
    // console.log(response);

    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      alert(errorMessage);
      // Log the error message as a string
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

//resetPassword

export const resetPassword = async (passwordData) => {
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();

  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.post(
      `${BASE_URL}/user/auth/resetPass`,
      passwordData,
      { headers }
    );

    const { status, message, data } = response.data;
    // console.log(response);

    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      alert(errorMessage);
      // Log the error message as a string
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

//Add to Cart

export const AddtoCart = async (productId) => {
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();

  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.put(
      `${BASE_URL}/user/cart/addProduct`,
      {
        productId: productId,
      },
      { headers }
    );

    const { status, message, data } = response.data;
    // console.log(response);

    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      // alert(errorMessage);
      // Log the error message as a string
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

//removeFromCart

export const removeFromCart = async (id) => {
  // Function to retrieve token from cookies
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();

  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.put(
      `${BASE_URL}/user/cart/removeProduct`,

      {
        productId: id,
        removeProduct: "0",
      },
      { headers }
    );

    const { status, message, data } = response.data;
    // console.log(response);

    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      // alert(errorMessage);
      // Log the error message as a string
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

//updateItemQuatity

export const updateItemQuantity = async (id,quantity) => {
  // Function to retrieve token from cookies
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();

  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.put(
      `${BASE_URL}/user/cart/incQuantity/${id}`,
      {
        incQuantity: quantity,
      },
      { headers }
    );

    const { status, message, data } = response.data;
    // console.log(response);

    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      // alert(errorMessage);
      // Log the error message as a string
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

//removeFromCart

export const updateFromCart = async (id, quantity) => {
  // Function to retrieve token from cookies
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();

  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.put(
      `${BASE_URL}/user/cart/removeProduct`,

      {
        productId: id,
        removeProduct: quantity,
      },
      { headers }
    );

    const { status, message, data } = response.data;
    // console.log(response);

    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      // alert(errorMessage);
      // Log the error message as a string
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

//createReview

export const createReview = async (id, reviewData) => {
  // Function to retrieve token from cookies
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();

  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.put(
      `${BASE_URL}/user/reviews/create/${id}`,
      reviewData,
      { headers }
    );

    const { status, message, data } = response.data;
    // console.log(response);

    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      // alert(errorMessage);
      // Log the error message as a string
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

//createReview

export const getAllReview = async (id) => {
  // Function to retrieve token from cookies
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();

  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.get(`${BASE_URL}/user/reviews/getAll/${id}`, {
      headers,
    });

    const { status, message, data } = response.data;
    localStorage.setItem("review", JSON.stringify(response.data));

    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      // alert(errorMessage);
      // Log the error message as a string
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

// addAddress

export const addAddress = async (formData) => {
  // Function to retrieve token from cookies
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();

  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.post(
      `${BASE_URL}/user/address/create`,
      formData,
      { headers }
    );

    const { status, message, data } = response.data;
    localStorage.setItem("address", JSON.stringify(data));

    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      // alert(errorMessage);
      // Log the error message as a string
      alert(errorMessage);
      console.error("Axios Error:", errorMessage);
      // window.location.href = "/Login";
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

// getAddress

export const getAddress = async () => {
  // Function to retrieve token from cookies
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();

  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.get(`${BASE_URL}/user/address/getAll`, {
      headers,
    });

    const { status, message, data } = response.data;
    if(status){
      localStorage.setItem("allAdress", JSON.stringify(data) || []);
      localStorage.setItem("selectedAddress", JSON.stringify(data[0]));
    }

    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      // alert(errorMessage);
      // Log the error message as a string
      localStorage.setItem("allAdress", JSON.stringify([]) );
      // alert(errorMessage);
      console.error("Axios Error:", errorMessage);
      // window.location.href = "/Login";
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

// deleteAddress

export const deleteAddress = async (id) => {
  // Function to retrieve token from cookies
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();

  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.delete(
      `${BASE_URL}/user/address/delete/${id}`,
      {
        headers,
      }
    );

    const { status, message, data } = response.data;
    localStorage.setItem("allAdress", JSON.stringify(data));
    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      // alert(errorMessage);
      // Log the error message as a string
      alert(errorMessage);
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

// updateAddress

export const updateAddress = async (addressData, addressId) => {
  // Function to retrieve token from cookies
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();
  const id = addressId;
  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.put(
      `${BASE_URL}/user/address/update/${id}`,
      addressData,
      { headers }
    );

    const { status, message, data } = response.data;

    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      // alert(errorMessage);
      // Log the error message as a string
      alert(errorMessage);
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

// oderPlace

export const orderPlace = async (orderData) => {
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();
  const address = JSON.parse(localStorage.getItem("address")) || {};
  const selectedAddress = JSON.parse(localStorage.getItem("selectedAddress")) || {};
  const ad_id = JSON.parse(localStorage.getItem("ad_id")) || false;

  const id =  ad_id  ? selectedAddress?._id : address?._id;

  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.post(
      `${BASE_URL}/user/order/create/${id}`,
      orderData,
      { headers }
    );

    const { status, message, data } = response.data;
    if (status) {
      alert("Order placed successfully");
      localStorage.setItem("orderData", JSON.stringify(data));
      localStorage.removeItem("cartData");
      window.location.href = "/ThankYouPage";
    }
    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      const errorMessage = response.data.message;
      alert(errorMessage);
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      console.error("Network Error:", error.message);
    }
  }
};

// getOrderHistory

export const getOrderHistory = async () => {
  // Function to retrieve token from cookies
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  // Retrieve token
  const token = getToken();
  try {
    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };
    const response = await axios.get(`${BASE_URL}/user/order/orderHistory`, {
      headers,
    });

    const { status, message, data } = response.data;
    console.log(response);

    // Handle response data as needed
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      // alert(errorMessage);
      // Log the error message as a string
      alert(errorMessage);
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

// LOG IN USER

export const loginUser = async (userData, rememberMe) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/auth/logIn`, {
      email: userData.email,
      password: userData.password,
      items: userData.items,
      totalPrice: userData.totalPrice,
      totalItems: userData.totalItems,
    });
    const { status, message, data, token } = response.data;
    console.log(response.data.token);
    if (status) {
      // If "Remember Me" is checked, save token to local storage
      document.cookie = `token=${response.data.token}; path=/`;

      // Save login status to local storage
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/";

      if (rememberMe) {
        localStorage.setItem("token", JSON.stringify(token));
      }
      return { status, message, data, token };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      // alert(errorMessage);
      // Log the error message as a string
      alert(errorMessage);
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

// getAllProduct

export const getAllProduct = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/product/getAll`);
    const { status, message, data, token } = response.data;
    console.log(response);
    if (status) {
      // If "Remember Me" is checked, save token to local storage
      return { status, message, data, token };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      const errorMessage = response.data.message;
      throw new Error(errorMessage);
    } else {
      throw new Error("Network Error");
    }
  }
};

export const getCheckout = async (promoCode) => {
  // Function to retrieve token from cookies
  function getToken() {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }

  try {
    // Retrieve token
    const token = getToken();

    const headers = {
      "x-auth-token": token, // Pass the token in the header
      "Content-Type": "application/json", // Set content type to JSON
    };

    // Append promo code to the endpoint if provided
    const url = promoCode
      ? `${BASE_URL}/user/cart/checkout?promoCode=${promoCode}`
      : `${BASE_URL}/user/cart/checkout`;

    const response = await axios.get(url, { headers });
    const { status, message, data } = response.data;
   localStorage.setItem("cartData",JSON.stringify(data.productsData))
    localStorage.setItem("checkout", JSON.stringify(response?.data?.data));
    const login = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
    const checkoutStatus = JSON.parse(localStorage.getItem("checkoutStatus"));

    if (checkoutStatus) {
      window.location.href = "/CheckoutPage";
    }

    if (login) {
      // If "Remember Me" is checked, save token to local storage
    } else {
      // window.location.href = "/Login";
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      const errorMessage = response.data.message;
      // alert(errorMessage);
    } else {
      console.error("Network Error:", error.message);
    }
  }
};
