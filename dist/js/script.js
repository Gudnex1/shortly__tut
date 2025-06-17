const input = document.getElementById("link-input");
const linkform = document.getElementById("link-form");
const errmsg = document.getElementById("err-msg");

linkform.addEventListener("submit", formsubmit);

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

function formsubmit(e) {
  e.preventDefault()

    if (input.value === '') {
      errmsg.innerHTML = "Enter your URl First";
      input.classList.add("border-red");
    } else if (!validURL(input.value)) {
      errmsg.innerHTML = "Please enter a valid URL";
      input.classList.add("border-red");
    } else {
      errmsg.innerHTML = '';
      input.classList.remove("border-red");
      alert("done");
    }
}
