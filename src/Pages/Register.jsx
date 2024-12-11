import { Typography, Input, Button } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import register from "../../public/register.json";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState("");
  console.log(error);
  const { emailRegister, googleLogin } = useContext(AuthContext);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    setError("");
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const regexPattern = /^(?=.*[A-Z])(?=.*\d).+$/;
    if (!regexPattern.test(password)) {
      setError("Invalid Password");
      return;
    }
    emailRegister(email, password).then((res) => {
      console.log(res);
      toast("user has been created");
    });
  };

  return (
    <div className="flex w-9/12 mx-auto items-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex-1">
        <section className="grid text-center min-h-[calc(100vh-110px)] items-center p-8 pt-0">
          <div>
            <Typography variant="h3" color="blue-gray" className="mb-2">
              Register
            </Typography>
            <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
              Please fill up the below information for creating an account
            </Typography>
            <form
              className="mx-auto max-w-[24rem] text-left"
              onSubmit={handleRegister}
            >
              <div className="mb-6">
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    className="mb-2 block font-medium text-gray-900"
                  >
                    Your Name
                  </Typography>
                </label>
                <Input
                  color="gray"
                  size="lg"
                  type="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
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
              {error && <p className="mt-6 text-red-600">{error}</p>}
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
                onClick={googleLogin}
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
        <Lottie
          className="w-10/12 mx-auto"
          animationData={register}
          loop={true}
        />
      </div>
    </div>
  );
};
