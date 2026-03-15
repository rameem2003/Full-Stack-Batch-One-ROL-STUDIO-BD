import { ref, remove, update } from "firebase/database";
import React, { useState } from "react";
import { database } from "../config/firebase.config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../validator/form.schema";

const Card = ({ item }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: item.name,
      phone: item.phone,
      email: item.email,
    },
  });
  const deleteData = async (id) => {
    try {
      await remove(ref(database, `/users/${id}`));
    } catch (error) {
      console.log(error);
    }
  };

  const updateStudent = async (data) => {
    let updatedData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
    };

    try {
      await update(ref(database, `/users/${item.id}`), updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mb-5">
      <p className=" text-xl text-blue-300 font-semibold">{item.name}</p>
      <p>{item.phone}</p>
      <p>{item.email}</p>

      <button
        onClick={() => setIsUpdate(true)}
        className="bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md shadow-md hover:bg-blue-700 active:scale-95 active:shadow-sm transition-all duration-150"
      >
        Update
      </button>
      <button
        onClick={() => deleteData(item.id)}
        className="bg-red-600 text-white font-medium py-2.5 px-4 rounded-md shadow-md hover:bg-red-700 active:scale-95 active:shadow-sm transition-all duration-150"
      >
        Delete
      </button>

      {isUpdate && (
        <form
          className=" mt-5"
          onSubmit={handleSubmit(updateStudent)}
          action=""
        >
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
      )}
    </div>
  );
};

export default Card;
