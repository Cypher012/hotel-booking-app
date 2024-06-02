import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, loginType } from "../schema/user.schema";
import axios, { AxiosError } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ErrorResponse = {
  message: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });

  // const mutation = useMutation()

  const onSubmit = async (value: loginType) => {
    try {
      const res = await axios.post("/api/login", value);
      console.log(res.data);
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      if (err.response) {
        toast.error(err.response.data.message);
        console.error(err.response.data.message);
      } else {
        toast.error(err.message);
        console.error(err.message);
      }
    }
  };

  const email = watch("email");
  const password = watch("password");

  return (
    <div className="overflow-hidden py-20 mx-auto w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800">
      <ToastContainer />
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Welcome Back
        </h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
          Login or create account
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 w-full">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              className="block px-4 py-2 mt-2 w-full placeholder-gray-500 text-gray-700 bg-white rounded-lg border dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              id="email"
              placeholder="Email Address"
              aria-label="Email Address"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mt-4 w-full">
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input
              className="block px-4 py-2 mt-2 w-full placeholder-gray-500 text-gray-700 bg-white rounded-lg border dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              id="password"
              placeholder="Password"
              aria-label="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-between items-center mt-4">
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
            >
              Forget Password?
            </a>

            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize bg-blue-500 rounded-lg transition-colors duration-300 transform disabled:bg-blue-300 disabled:cursor-not-allowed hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              disabled={!email || !password}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center items-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Don't have an account?{" "}
        </span>

        <Link
          to={"/register"}
          className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
