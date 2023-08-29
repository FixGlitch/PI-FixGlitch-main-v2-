import { useState } from "react";
import validation from "../validation/validation";
import style from "./Login.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
  <div className={style.container}>
  <img className={style.img} src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" loading="lazy"/>
    <form  onSubmit={handleOnSubmit}>
      <label htmlFor="email"></label>
      <input
        onChange={handleChange}
        value={userData.email}
        type="email"
        placeholder="Email"
        name="email"
      />
      {errors.email && <p>{errors.email}</p>}
      <label htmlFor="password"></label>
      <input
        onChange={handleChange}
        value={userData.password}
        type="password"
        placeholder="Password"
        name="password"
      />
      {errors.password && <p>{errors.password}</p>}
      |
      <div className={style.btn}>
      <button
        disabled={
          !userData.email ||
          !userData.password ||
          errors.email ||
          errors.password
        }
      >
        Login!
      </button>
      </div>
    </form>
    </div>
  );
};

export default Form;