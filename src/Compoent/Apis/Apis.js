import axios from "axios";

// const BASE_URL = "https://www.backend.luxurybubblebasket.com";
const BASE_URL = "https://modifiedllb.onrender.com";

// Register

export const RegisterUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/auth/register`,
      userData
    );
    // Directly return the data from axios response
    return response.data;
  } catch (error) {
    console.error("Error in getAllCategory function:", error);
    alert("user already register");
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
      alert("register successfully");
      document.cookie = `token=${response.data.token}; path=/`;
      const checkoutStatus = JSON.parse(
        sessionStorage.getItem("checkoutStatus")
      );
      if (checkoutStatus) {
        getCheckout();
      } else {
        window.location.href = "/";
      }
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
    const response = await axios.post(`${BASE_URL}/user/auth/resendOtp`, email);

    // Directly return the data from axios response
    return response.data;
  } catch (error) {
    console.error("Error in getAllCategory function:", error);
  }
};

//forgetPassword

export const forgetPassword = async (email) => {
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
    // Directly return the data from axios response
    return response.data;
  } catch (error) {
    console.error("Error in getAllCategory function:", error);
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
    alert(message);
    // Handle response data as needed
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
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};
//updatePassword

export const updatePassword = async (passwordData) => {
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
      `${BASE_URL}/user/auth/changePassword`,
      passwordData,
      { headers }
    );

    const { status, message, data } = response.data;
    alert(message);
    // Handle response data as needed
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
      console.error("Axios Error:", errorMessage);
    } else {
      // Network error (e.g., no internet connection)
      // alert("Something went wrong");
      console.error("Network Error:", error.message);
    }
  }
};

//Add to Cart

export const AddtoCart = async (productId, quantity) => {
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
        items: [
          {
            productId: productId,
            quantity: quantity,
          },
        ],
      },
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

export const updateItemQuantity = async (id, quantity) => {
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

export const createReview = async (id, name, email, rating, reviewText) => {
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
      { name, email, rating, reviewText },
      { headers }
    );

    const { status, message, data } = response.data;
    // Handle response data as needed
    if (status) {
      alert(message);
      sessionStorage.setItem("Product_review", JSON.stringify(data));
      window.location.reload();
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error (HTTP error)
      const { response } = error;
      // Set the error message
      const errorMessage = response.data.message;
      // alert(errorMessage);
      // Log the error message as a string
      console.error("Axios Error:", errorMessage);
      alert(errorMessage);
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
    sessionStorage.setItem("address", JSON.stringify(data));
    // Directly return the data from axios response
    return response.data;
  } catch (error) {
    console.error("Error in getAllCategory function:", error);
  }
};

// getAllAddress

export const getAllAddress = async () => {
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

    // Directly return the data from axios response
    return response.data;
  } catch (error) {
    console.error("Error in getAllCategory function:", error);
  }
};


// getAllBanner

export const getAllBanner= async () => {
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
    const response = await axios.get(`${BASE_URL}/admin/banner/getAll`, {
      headers,
    });

    // Directly return the data from axios response
    return response.data;
  } catch (error) {
    console.error("Error in getAllCategory function:", error);
  }
};

// getAllCategory

export const getAllCategory = async () => {
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
    const response = await axios.get(`${BASE_URL}/admin/category/getAll`, {
      headers,
    });
    // Directly return the data from axios response
    return response.data;
  } catch (error) {
    console.error("Error in getAllCategory function:", error);
  }
};

// getTop1Category

export const getTop1Category = async (cate) => {
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
    const response = await axios.get(
      `${BASE_URL}/admin/category/getAll?catTypeUp=${cate}`,
      {
        headers,
      }
    );
    // Directly return the data from axios response
    return response.data;
  } catch (error) {
    console.error("Error in getAllCategory function:", error);
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
    alert(message);
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
  const address = JSON.parse(sessionStorage.getItem("address")) || {};
  const id = address?._id;

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
      sessionStorage.setItem("orderData", JSON.stringify(data));
      sessionStorage.removeItem("cartData");
      window.location.href = "/ThankYou";
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
    });
    const { status, message, data, token } = response.data;
    if (status) {
      // If "Remember Me" is checked, save token to local storage
      document.cookie = `token=${response.data.token}; path=/`;
      alert(message);
      // Save login status to local storage
      const checkoutStatus = JSON.parse(
        sessionStorage.getItem("checkoutStatus")
      );
      if (checkoutStatus) {
        getCheckout();
      } else {
        window.location.href = "/";
      }

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

export const getAllProduct = async (category) => {
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
    let url = `${BASE_URL}/admin/product/getAll`;
    if (category) {
      url += `?category=${encodeURIComponent(category)}`;
    }
    const response = await axios.get(url, {
      headers,
    });

    // Directly return the data from axios response
    return response.data;
  } catch (error) {
    console.error("Error in getAllCategory function:", error);
  }
};

// getAllOrdersHistory

export const getAllOrdersHistory = async () => {
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
    // Directly return the data from axios response
    return response.data;
  } catch (error) {
    console.error("Error in getAllCategory function:", error);
  }
};

//sendSubscribtion

export const sendSubscribtion = async (data) => {
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
      `${BASE_URL}/user/subscribe/subscribeForNewsletter`,
      data,
      {
        headers,
      }
    );
    // Directly return the data from axios response
    return response.data;
  } catch (error) {
    console.error("Error in getAllCategory function:", error);
  }
};

// getAllBrandProduct

export const getAllBrandProduct = async (category) => {
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
    let url = `${BASE_URL}/admin/product/getAll`;
    if (category) {
      url += `?brand=${encodeURIComponent(category)}`;
    }
    const response = await axios.get(url, {
      headers,
    });
    // Directly return the data from axios response
    return response.data;
  } catch (error) {
    // console.error("Error in getAllCategory function:", error);
  }
};

//getCheckout

export const getCheckout = async () => {
const promoCode =JSON.parse(sessionStorage.getItem("promocode"))
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

    // Append promo code to the endpoint if provided
    const url = promoCode
      ? `${BASE_URL}/user/cart/checkout?promoCode=${promoCode}`
      : `${BASE_URL}/user/cart/checkout`;

    const response = await axios.get(url, { headers });
    const { status, message, data } = response.data;
    if (status) {
      sessionStorage.setItem(
        "cartData",
        JSON.stringify(response?.data?.data?.productsData) || []
      );
      sessionStorage.setItem(
        "checkout",
        JSON.stringify(response?.data?.data) || []
      );
      const checkoutStatus = JSON.parse(
        sessionStorage.getItem("checkoutStatus")
      );

      if (checkoutStatus) {
        window.location.href = "/Checkout";
      } else {
      }
    }
    // Directly return the data from axios response
    return response.data;
  } catch (error) {
    // console.error("Error in getAllCategory function:", error);
  }
};

//getCheckoutCoupon

export const getCheckoutCoupon = async (promoCode) => {
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

    // Append promo code to the endpoint if provided
    const url = `${BASE_URL}/user/cart/checkout?promoCode=${promoCode}`;
    const response = await axios.get(url, { headers });
    const { status, message, data } = response.data;
    if (status) {
      alert(message)
      sessionStorage.setItem("promocode", JSON.stringify(promoCode));
      sessionStorage.setItem(
        "cartData",
        JSON.stringify(response?.data?.data?.productsData) || []
      );
      sessionStorage.setItem(
        "checkout",
        JSON.stringify(response?.data?.data) || []
      );
    }
    // Directly return the data from axios response
    return response.data;
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

// getAllBlog

export const getAllBlog = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/blog/getAll`);
    const { status, message, data } = response.data;
    return { status, message, data };
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
