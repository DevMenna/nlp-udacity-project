import { postData } from "./postData";

async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  const returnedData = await postData("http://localhost:8080/nlp", {
    topic: formText,
    key: "hello",
  });
  console.log(returnedData);
  console.log("::: Form Submitted :::");
}

export { handleSubmit };
