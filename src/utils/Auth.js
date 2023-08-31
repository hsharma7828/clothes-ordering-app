import { redirect } from "react-router-dom";

export function getTokenDuration() {
  if (localStorage.getItem("Login")) {
    const storedExpirationDate = localStorage.getItem("Login");
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
  } else {
    return redirect("/auth");
  }
}
export function getAuthToken() {
  const token = localStorage.getItem("Login");

  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function validateAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth");
  }
  return null;
}
