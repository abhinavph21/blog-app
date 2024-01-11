// import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin, login } from "@/lib/action";
import styles from "./login.module.css";

const LoginPage = async () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={login}>
          <input type="text" placeholder="username" name="username"></input>
          <input type="password" placeholder="password" name="password"></input>
          <button >Login with credentials</button>
        </form>
        {/* <LoginForm /> */}
      </div>
    </div>
  );
};

export default LoginPage;