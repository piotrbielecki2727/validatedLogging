import { MdLock, MdEmail } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { createSchema } from "./schema";
import { CREDENTIALS } from "./constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../lib/store/authSlice";
import { FormData } from "./schema";
import { BiLogIn } from "react-icons/bi";
import { showSuccessToast } from "../../lib/utils/toast";
import { BlueButton } from "../ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "../../i18n";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const schema = createSchema();

  const {
    register,
    handleSubmit,
    setError,
    trigger,
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
      setError("root", { message: t("wrongCredentials") });
      return;
    }
    dispatch(login());
    showSuccessToast(t("successLogin"));
    navigate("/users", { replace: true });
  };

  useEffect(() => {
    const handleLanguageChange = () => {
      trigger();
    };
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [trigger]);

  return (
    <S.FormContainer>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormElement>
          <S.InputLabel>{t("yourEmail")}</S.InputLabel>
          <S.InputWithIcon>
            <S.Icon>
              <MdEmail size={20} />
            </S.Icon>
            <S.Input
              placeholder={t("emailPlaceholder")}
              {...register("email")}
            />
          </S.InputWithIcon>
          {errors.email && <S.Error>{errors.email.message}</S.Error>}
        </S.FormElement>
        <S.FormElement>
          <S.InputLabel>{t("yourPassword")}</S.InputLabel>
          <S.InputWithIcon>
            <S.Icon>
              <MdLock size={20} />
            </S.Icon>
            <S.Input
              type="password"
              placeholder={t("passwordPlaceholder")}
              {...register("password")}
            />
          </S.InputWithIcon>
          {errors.password && <S.Error>{errors.password.message}</S.Error>}
        </S.FormElement>
        {errors.root && <S.Error>{errors.root.message}</S.Error>}
        <BlueButton type="submit">
          <BiLogIn size={25} />
          {t("loginButtonText")}
        </BlueButton>
      </S.Form>
      <S.ForgotPassword>{t("forgotPassword")}</S.ForgotPassword>
    </S.FormContainer>
  );
};

export default Login;
