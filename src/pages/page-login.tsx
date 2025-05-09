import { Button } from "@the0wl/ui";
import { useNavigate } from "react-router-dom";
import FormGenerator from "../components/form-generator";
import loginSchema from "../form-schema/login.json";

export default function PageLogin() {
  // const handleUsernameChange = (value, formData) => {
  //   // formData - monitora o estado anterior dos campos do formulário
  //   // value - monitora o valor atual do campo alterado
  //   return value
  // };

  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button variant="solid">Button</Button>
        <FormGenerator
          schema={loginSchema}
          onSubmit={async (formData) => {
            console.log(JSON.stringify(formData) + " Formulario enviado");
            navigate("/");
          }}
          inputHandlers={{
            handleUsernameFocus: () => console.log("Campo usuário focou"),
            handleUsernameBlur: () => console.log("Campo usuário perdeu foco"),
          }}
        />
      </div>
    </div>
  );
}
