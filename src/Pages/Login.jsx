import { Typography, Input, Button } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import login from "../../public/login.json";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { emailLogin } = useContext(AuthContext);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    emailLogin(email, password)
      .then((res) => {
        console.log(res);
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="flex w-9/12 mx-auto items-center">
      <div className="flex-1">
        <section className="grid text-center min-h-[calc(100vh-110px)] items-center p-8 pt-0">
          <div>
            <Typography variant="h3" color="blue-gray" className="mb-2">
              Sign In
            </Typography>
            <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
              Enter your email and password to sign in
            </Typography>
            <form
              onSubmit={handleSignIn}
              className="mx-auto max-w-[24rem] text-left"
            >
              <div className="mb-6">
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    className="mb-2 block font-medium text-gray-900"
                  >
                    Your Email
                  </Typography>
                </label>
                <Input
                  color="gray"
                  size="lg"
                  type="email"
                  name="email"
                  placeholder="name@mail.com"
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password">
                  <Typography
                    variant="small"
                    className="mb-2 block font-medium text-gray-900"
                  >
                    Password
                  </Typography>
                </label>
                <Input
                  name="password"
                  size="lg"
                  placeholder="********"
                  labelProps={{
                    className: "hidden",
                  }}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  type={passwordShown ? "text" : "password"}
                  icon={
                    <i onClick={togglePasswordVisiblity}>
                      {passwordShown ? (
                        <EyeIcon className="h-5 w-5" />
                      ) : (
                        <EyeSlashIcon className="h-5 w-5" />
                      )}
                    </i>
                  }
                />
              </div>
              <Button
                type="submit"
                color="gray"
                size="lg"
                className="mt-6"
                fullWidth
              >
                sign in
              </Button>
              {error && <p className="text-red-600 mt-6">{error}</p>}
              <div className="!mt-4 flex justify-end">
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  variant="small"
                  className="font-medium"
                >
                  Forgot password
                </Typography>
              </div>
              <Button
                variant="outlined"
                size="lg"
                className="mt-6 flex h-12 items-center justify-center gap-2"
                fullWidth
              >
                <img
                  src={`https://www.material-tailwind.com/logos/logo-google.png`}
                  alt="google"
                  className="h-6 w-6"
                />{" "}
                sign in with google
              </Button>
              <Typography
                variant="small"
                color="gray"
                className="!mt-4 text-center font-normal"
              >
                Not registered?{" "}
                <a href="#" className="font-medium text-gray-900">
                  Create account
                </a>
              </Typography>
            </form>
          </div>
        </section>
      </div>
      <div className="flex-1">
        <Lottie className="" animationData={login} loop={true} />
      </div>
    </div>
  );
};
