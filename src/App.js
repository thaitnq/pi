import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./index.css";

const aa;
const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  website: yup.string().url()
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <label>Website</label>
        <input {...register("website")} />
        {errors.website && <p>{errors.website.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
}

export default App