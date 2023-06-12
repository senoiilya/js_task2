import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, H1, MainLayout, HeaderForm, Navigate } from "../style";

const User = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState(false);

    const getInitialData = () => {
        let user = localStorage.getItem("user_imitation_token")
        if (user) {
            setUser(JSON.parse(user).login)
        } else {
            navigate("/")
        }        
    }

    useEffect(() => {
        getInitialData()
    }, [])

  return (
    <>
        <HeaderForm>
            <H1>Второе задание по JS</H1>
            <Navigate>
                <ul>
                    <li><Button onClick={() => navigate("/")}>Главная</Button></li>
                    <li style={{visibility: 'hidden'}}><Button onClick={() => navigate("/")}>Войти</Button></li>
                    <li style={{visibility: 'hidden'}}><Button onClick={() => navigate("/")}>Зарегистрироваться</Button></li>
                </ul>
            </Navigate>
        </HeaderForm>
        <MainLayout>
            {user &&
            <>
                <H1>
                    Вы вошли в аккаунт под именем: {user}
                </H1>
                <Button onClick={() => navigate("/")}>
                    Выйти
                </Button>            
            </>
            }
        </MainLayout>
    </>
  );
}

export default User;
