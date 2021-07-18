import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function RegisterPage() {
  const style = {
    margin: {
      margin: '50px 30px'
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div style={style.margin}>
      <Form>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNickname">
          <Form.Label>Nickname</Form.Label>
          <Form.Control type="text" placeholder="Enter a Nickname" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="secondary" type="submit" onClick={handleSubmit}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default RegisterPage;
