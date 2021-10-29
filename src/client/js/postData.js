const postData = async (url = "", data = {}) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    const response = await res.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};

export { postData };
