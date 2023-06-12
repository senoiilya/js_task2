import "../../App.css"
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../functions/changeLocalStorage";
import { Button, MainLayout, H1, MainText, HeaderForm, Navigate } from "../style";

export const Main = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const deleteCookie = () => {
      changeLocalStorage("delete");
    }

    deleteCookie()
  }, [])

  return (
    <>
    <HeaderForm>
      <H1>Второе задание по JS</H1>
      <Navigate>
        <ul>
          <li><Button onClick={() => navigate("/")}>Главная</Button></li>
          <li><Button onClick={() => navigate("/login")}>Войти</Button></li>
          <li><Button onClick={() => navigate("/signin")}>Зарегистрироваться</Button></li>
          <li><Button onClick={() => navigate("/posts")}>Посты пользователей</Button></li>
          <li><Button style={{visibility: 'hidden'}}></Button></li>
          <li><Button style={{visibility: 'hidden'}}></Button></li>
        </ul>
      </Navigate>
    </HeaderForm>
    <MainLayout>
      <Box>
        <MainText>
          Приветствуем! Нажмите на кнопку "Зарегистрироваться", если раньше не регистрировались, иначе, кнопку "Войти".
        </MainText>
      </Box>
    </MainLayout>
   </>
  );
}