import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import firebase from "../Config/firebase";

function RegisterPage() {
  const [form, setForm] = useState({ fullName: "", nickname: "", email: "", password: "" });
  const style = {
    margin: {
      margin: "50px 30px",
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responseUser = await firebase.authentication.createUserWithEmailAndPassword(form.email, form.password);
      const document = await firebase.db.collection("users").add({
        fullName: form.fullName,
        nickname: form.nickname,
        userId: responseUser.user.uid,
      });
      alert("Registration Successfull");
    } catch (e) {
      console.log("error" + e);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };
  return (
    <div style={style.margin}>
      <Form>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control label="fullName" name="fullName" type="text" value={form.fullName} onChange={handleChange} placeholder="Enter your Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNickname">
          <Form.Label>Nickname</Form.Label>
          <Form.Control label="nickname" name="nickname" type="text" value={form.nickname} onChange={handleChange} placeholder="Enter a Nickname" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control label="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control label="password" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        </Form.Group>

        <Button variant="secondary" type="submit" onClick={handleSubmit}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default RegisterPage;
