import { redirect } from "react-router-dom";
import AuthForm from "./AuthForm";

function AuthPage() {
  return <AuthForm />;
}

export default AuthPage;

export function action() {
  const isLogin = localStorage.getItem("Login");
  if (!isLogin) {
    localStorage.setItem(
      "Login",
      new Date(new Date().setHours(new Date().getHours() + 1))
    );
  }
  return redirect("/home");
}
