const validURL = (formText) => {
  var res = formText.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  if (res == null) {
    alert("Please enter a valid URL !!");
    return false;
  } else {
    return true;
  }
};

export { validURL };
