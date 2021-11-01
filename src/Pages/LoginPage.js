import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "../Config/firebase";
import EcommerceContext from "../Context/EcommerceContext";

function LoginPage() {
  const context = useContext(EcommerceContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const style = {
    margin: {
      margin: "50px 30px",
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responseUser = await firebase.authentication.signInWithEmailAndPassword(form.email, form.password);
      const userInfo = await firebase.db.collection("users").where("userId", "==", responseUser.user.uid).get();
      context.loginUser();
      alert("Welcome " + userInfo.docs[0]?.data().fullName);
    } catch (e) {
      if (e.code == "auth/user-not-found") {
        alert("User not found");
      }
    }
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleLogout = () => {
    context.logoutUser();
  };

  if (context.userLogin !== true) {
    return (
      <Form style={style.margin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control label="email" name="email" type="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control label="password" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        </Form.Group>

        <Button variant="secondary" type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    );
  } else {
    return (
      <div style={style.margin}>
        <h2>You are already Logged in</h2>
        <Button variant="secondary" type="submit" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    );
  }
}

export default LoginPage;
