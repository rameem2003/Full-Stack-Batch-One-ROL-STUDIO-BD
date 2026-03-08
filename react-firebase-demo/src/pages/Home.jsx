import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../validator/form.schema";
import { ref, set } from "firebase/database";
import { database } from "../config/firebase.config";

function generateId(length = 10) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return id;
}

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const createStudent = async (data) => {
    let id = generateId();
    try {
      await set(ref(database, `/users/${id}`), {
        name: data.name,
        phone: data.phone,
        email: data.email,
      });

      console.log("Ok");
    } catch (error) {
      console.log(error);
    }
  };

  // let navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>

      {/* <button onClick={() => navigate("/contact")}>Go to Contact</button> */}

      <form onSubmit={handleSubmit(createStudent)} action="">
        <div className="relative w-full max-w-sm mb-8">
          <input
            {...register("name")}
            // type={type}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            className="peer w-full border-2 border-gray-300 rounded-md px-3 pt-5 pb-2 outline-none focus:border-blue-500"
            placeholder=" "
          />

          <label
            className="
        absolute left-3 bg-white px-1 text-gray-500 text-sm
        transition-all
        peer-placeholder-shown:top-3
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-400
        peer-focus:-top-2
        peer-focus:text-sm
        peer-focus:text-blue-500
        -top-2
      "
          >
            Student Name
          </label>

          {errors.name && (
            <p class="mt-2 text-sm text-red-600 bg-red-50 border border-red-300 rounded-md px-3 py-2">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="relative w-full max-w-sm mb-8">
          <input
            {...register("phone")}
            // type={type}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            className="peer w-full border-2 border-gray-300 rounded-md px-3 pt-5 pb-2 outline-none focus:border-blue-500"
            placeholder=" "
          />

          <label
            className="
        absolute left-3 bg-white px-1 text-gray-500 text-sm
        transition-all
        peer-placeholder-shown:top-3
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-400
        peer-focus:-top-2
        peer-focus:text-sm
        peer-focus:text-blue-500
        -top-2
      "
          >
            Student Phone
          </label>

          {errors.phone && (
            <p class="mt-2 text-sm text-red-600 bg-red-50 border border-red-300 rounded-md px-3 py-2">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="relative w-full max-w-sm mb-8">
          <input
            {...register("email")}
            // type={type}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            className="peer w-full border-2 border-gray-300 rounded-md px-3 pt-5 pb-2 outline-none focus:border-blue-500"
            placeholder=" "
          />

          <label
            className="
        absolute left-3 bg-white px-1 text-gray-500 text-sm
        transition-all
        peer-placeholder-shown:top-3
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-400
        peer-focus:-top-2
        peer-focus:text-sm
        peer-focus:text-blue-500
        -top-2
      "
          >
            Student Email
          </label>

          {errors.email && (
            <p class="mt-2 text-sm text-red-600 bg-red-50 border border-red-300 rounded-md px-3 py-2">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          class="w-auto bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md shadow-md hover:bg-blue-700 active:scale-95 active:shadow-sm transition-all duration-150"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
