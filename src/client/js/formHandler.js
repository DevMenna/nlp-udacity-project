import { postData } from "./postData";
/* import { validURL } from "./urlChecker"; */

async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  const urlRes = Client.validURL(formText);

  if (urlRes) {
    const returnedData = await postData("http://localhost:8080/nlp", {
      topic: formText,
    });
    document.getElementById("agr").innerHTML =
      "Agreement : " + returnedData.agreement;
    document.getElementById("conf").innerHTML =
      "Confidence : " + returnedData.confidence + "%";
    document.getElementById("ir").innerHTML = "Irony : " + returnedData.irony;
    document.getElementById("subj").innerHTML =
      "Subjectivity : " + returnedData.subjectivity;
    console.log("::: Form Submitted :::");
    console.log(returnedData);
  }
}

export { handleSubmit };
