// DENNE ER NY ETTER Å FØLGE OLIVER PÅ YOUTUBE
import { login } from "../../api/auth/login.mjs";

export function loginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
  form.addEventListener("submit", (event) => {
      event.preventDefault()
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries())


      // sent to the API
      
      login(profile)
      })
    }

}

