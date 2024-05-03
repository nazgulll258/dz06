import React from "react";
import { useForm } from "react-hook-form";

const UserForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input {...register("name", { required: "Name is required" })} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}
      <input {...register("username", { required: "Username is required" })} placeholder="Username" />
      {errors.username && <p>{errors.username.message}</p>}
      <input {...register("email", { required: "Email is required" })} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register("phone", { required: "Phone is required" })} placeholder="Phone" />
      {errors.phone && <p>{errors.phone.message}</p>}
      <input {...register("website")} placeholder="Website" />
      <button type="submit">Создать</button>
    </form>
  );
};

export default UserForm;