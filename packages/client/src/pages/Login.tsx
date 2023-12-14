import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

import CustomInput from "../components/custom/CustomInput";

const defaultValues = {
  email: "admin@demo.com",
  password: "admin",
};

type ErrorsType = {
  email?: string;
  password?: string;
};

const Login: React.FC = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<ErrorsType>({});

  useEffect(() => {
    if (auth?.email) navigate("/", { replace: true });
  }, [auth]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;

    const errorObj: ErrorsType = {
      email: email.trim() ? "" : "Email is required!",
      password: password.trim() ? "" : "Password is required!",
    };

    if (Object.values(errorObj).filter((e) => e).length > 0)
      return setErrors({ ...errorObj });

    if (email === defaultValues.email && password === defaultValues.password)
      setAuth({ email });
    else
      setErrors({
        email: "Invalid credentials!",
        password: "Invalid credentials!",
      });
  };

  return (
    <div className="min-h-screen flex items-stretch">
      <div className="hidden lg:block w-2/3"></div>
      <div className="w-full lg:w-1/3 border-s border-solid border-s-gray-600 flex justify-center items-center">
        <div className="w-[min(85%,450px)]">
          <div className="text-2xl mb-2">Welcome to BlackCoffer! 👋</div>

          <div className="mb-4">
            Please sign-in to your account ans start the adventure
          </div>

          <div className="mb-5 p-4 bg-gray-400 text-gray-800 rounded-lg text-sm">
            <p>
              Admin Email: <b>admin@demo.com</b> / Pass: <b>admin</b>
            </p>
          </div>

          <form className="mb-6" onSubmit={handleFormSubmit}>
            <CustomInput
              id="email"
              label="Email"
              placeholder="johndoe@demo.com"
              className="mb-3"
              defaultValue={defaultValues.email}
              error={errors.email}
            />

            <CustomInput
              type="password"
              id="password"
              label="Password"
              placeholder="********"
              className="mb-7"
              defaultValue={defaultValues.password}
              error={errors.password}
            />

            <button
              type="submit"
              className="w-full p-2 bg-gray-400 hover:bg-gray-500 text-black font-bold rounded-md"
            >
              Login
            </button>
          </form>

          <div>
            <p className="text-center">
              New on our platform?{" "}
              <Link to="/" className="text-gray-300">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
