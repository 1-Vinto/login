import React, {useState} from "react";
import { Container, Form } from "./styles";
import Input from "../../Components/Input/index";
import Button from "../../Components/Button/index";
import { validarEmail, validarSenha } from '../../Utils/validadores'
import fazerPostDeJSON from "../Services/UserService";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fazerPostDeJSON(form);
      console.log("response do login", response);
      if (response.usuarioAutenticado === true) {
        navigate("/home"); // navegar para home
      } else {
        alert("Usuário ou senha inválidos.");
      }
      setLoading(false);
    } catch (err) {
      alert("Algo deu errado com o Login" + err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const validadorInput = () => {
    const inputValido = validarEmail(form.email) && validarSenha(form.password);
    return inputValido;
  };

  return (
    <Container>
      <Form>
        <h1>Efetue o Login</h1>
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          onChange={handleChange}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        >
          Entrar
        </Button>
        <div>
          <p>Não possui conta?</p>
          <a>Cadastrar</a>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
