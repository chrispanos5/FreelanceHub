export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";

export const signout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: SIGN_OUT,
  });
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        dispatch({
          type: "SET_ERROR_MESSAGE",
          payload: errorData.message || "Sign-in failed",
        });
        return false;
        // throw new Error(errorData.message || "Sign-in failed");
      }

      const data = await response.json();
      const { user, token } = data;

      dispatch({
        type: SIGN_IN,
        payload: { user, token },
      });

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: "CLEAR_ERROR_MESSAGE",
      });
      console.log("Sign-in successful:", data.message);
      return true;
    } catch (error) {
      console.error("Sign-in error:", error.message);
    }
  };
};

export const signUp = (submitData) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Sign-up failed");
      }

      const data = await response.json();
      const { user, token } = data;

      dispatch({
        type: SIGN_UP,
        payload: { user, token },
      });
      localStorage.setItem("token", token);
      console.log("Sign-up successful:", data.message);
    } catch (error) {
      console.error("Sign-up error:", error.message);
    }
  };
};
