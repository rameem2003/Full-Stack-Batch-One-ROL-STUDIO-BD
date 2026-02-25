import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationShchema } from "../validator/registration.schema";
import { useEffect } from "react";
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationShchema),
  });

  const onSubmit = (data) => {
    console.log(errors);

    // console.log("Data uploaded");
    // console.log(data);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <main className=" bg-slate-800 h-dvh flex items-center justify-center">
      <div className="bg-white max-w-[1200px] w-full">
        <div className="grid md:grid-cols-2 items-center gap-8 h-full">
          <div className="max-md:order-1 p-4">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
              alt="login-image"
            />
          </div>
          <div className="flex items-center lg:p-12 p-8 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-lg w-full mx-auto"
            >
              <div className="mb-12">
                <h1 className="text-3xl font-semibold text-purple-400">
                  Create an account
                </h1>
              </div>
              <div>
                <label className="text-white text-xs block mb-2">
                  Full Name
                </label>
                <div className="relative ">
                  <div>
                    <input
                      {...register("name")}
                      name="name"
                      type="text"
                      required=""
                      className="w-full bg-transparent text-sm text-white border-b border-slate-500 focus:border-white pl-2 pr-8 py-3 outline-none"
                      placeholder="Enter name"
                    />
                    {errors.name && (
                      <p className=" text-red-600 mt-5">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <label className="text-white text-xs block mb-2">Email</label>
                <div className="relative ">
                  <input
                    {...register("email")}
                    name="email"
                    type="text"
                    required=""
                    className="w-full bg-transparent text-sm text-white border-b border-slate-500 focus:border-white pl-2 pr-8 py-3 outline-none"
                    placeholder="Enter email"
                  />

                  {errors.email && (
                    <p className=" text-red-600 mt-5">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="mt-8">
                <label className="text-white text-xs block mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    {...register("password")}
                    name="password"
                    type="password"
                    required=""
                    className="w-full bg-transparent text-sm text-white border-b border-slate-500 focus:border-white pl-2 pr-8 py-3 outline-none"
                    placeholder="Enter password"
                  />

                  {errors.password && (
                    <p className=" text-red-600 mt-5">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center mt-8">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="text-slate-300 ml-3 block text-sm"
                >
                  I accept the{" "}
                  <a
                    href="javascript:void(0);"
                    className="text-purple-400 font-medium hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-max shadow-xl py-3 px-6 min-w-32 text-sm text-white font-medium rounded-sm bg-purple-600 hover:bg-purple-500 focus:outline-none cursor-pointer"
                >
                  Register
                </button>
                <p className="text-sm text-slate-300 mt-8">
                  Already have an account?{" "}
                  <a
                    href="javascript:void(0);"
                    className="text-purple-400 font-medium hover:underline ml-1"
                  >
                    Login here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
