import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

import LayoutContainer from "../../components/LayoutContainer";
import Sessions from "../../components/Sessions";
import Camp from "../../components/Input";
import Button from "../../components/Button";

const Register = ({ setUser }) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "APenas letras"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    contact: yup
      .string()
      .required("Campo obrigarório")
      .matches(/(\(\d{2}\)\s)?(\d{4,5}\-\d{4})/, "Número inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Minímo 8 caracteres.")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha inválida"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const history = useHistory();

  const onSubmitHandle = (data) => {
    delete data.confirm_password;
    setUser(data);
    history.push("/user");
    toast.success("Usuário cadastro com sucesso");
    console.log(data);
  };

  return (
    <LayoutContainer>
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        <Sessions text="Cadastro">
          <div style={{ display: "flex" }}>
            <Camp
              placeholder="Nome completo"
              register={register}
              name="name"
              error={errors.name?.message}
              widthDiv={"60%"}
              marginRight={"20px"}
            />
            <Camp
              placeholder="Telefone"
              register={register}
              name="contact"
              error={errors.contact?.message}
              widthDiv={"40%"}
            />
          </div>
          <Camp
            placeholder="Email"
            type="email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <div style={{ display: "flex" }}>
            <Camp
              placeholder="Senha"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
              widthDiv={"50%"}
              marginRight={"20px"}
            />
            <Camp
              placeholder="Confirme sua senha"
              type="password"
              register={register}
              name="confirm_password"
              error={errors.confirm_password?.message}
              widthDiv={"50%"}
            />
          </div>
        </Sessions>
        <Button text="Enviar" type="submit" />
      </form>
    </LayoutContainer>
  );
};

export default Register;
