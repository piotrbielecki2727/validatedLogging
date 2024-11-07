import { MdLock, MdEmail } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema } from "./schema";
import { CREDENTIALS } from "./constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { FormData } from "./schema";
import { LoginButton } from "../ui";
import { BiLogIn } from "react-icons/bi";
import { showSuccessToast } from "../../utils/toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "user@example.com",
      password: "password123",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = ({ email, password }) => {
    if (password !== CREDENTIALS.PASSWORD || email !== CREDENTIALS.EMAIL) {
      setError("root", { message: "Email or password is incorrect!" });
      return;
    }
    dispatch(login());
    showSuccessToast("Logged in successfully!");
    navigate("/users", { replace: true });
  };

  return (
    <S.FormContainer>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormElement>
          <S.InputLabel>YOUR E-MAIL</S.InputLabel>
          <S.InputWithIcon>
            <S.Icon>
              <MdEmail size={20} />
            </S.Icon>
            <S.Input placeholder="Your e-mail" {...register("email")} />
          </S.InputWithIcon>
          {errors.email && <S.Error>{errors.email.message}</S.Error>}
        </S.FormElement>
        <S.FormElement>
          <S.InputLabel>PASSWORD</S.InputLabel>
          <S.InputWithIcon>
            <S.Icon>
              <MdLock size={20} />
            </S.Icon>
            <S.Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </S.InputWithIcon>
          {errors.password && <S.Error>{errors.password.message}</S.Error>}
        </S.FormElement>
        {errors.root && <S.Error>{errors.root.message}</S.Error>}
        <LoginButton type="submit">
          <BiLogIn size={25} />
          Login
        </LoginButton>
      </S.Form>
      <S.ForgotPassword>Forgot password?</S.ForgotPassword>
    </S.FormContainer>
  );
};

export default Login;
