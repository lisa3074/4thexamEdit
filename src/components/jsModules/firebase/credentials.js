export function credentials() {
  let email;
  document.querySelector(".email")
    ? document.querySelector(".email").addEventListener("keyup", (e) => {
        email = e.target.value;
        return email;
      })
    : (email = "");
}
