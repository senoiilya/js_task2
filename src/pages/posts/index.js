import './mycss.css'
import React, { useEffect, useState } from 'react';
import {HeaderForm, H1, Navigate, Button, PostsBackgroundColor, TextHead} from '../style.js'
import { Box } from '@mui/material';
import { Card, Row } from 'antd'
import { useNavigate } from 'react-router-dom';

export const Posts = () => {
  const [users, setUsers] = useState([])
  const [userPosts, setPosts] = useState([])
	const [clickButton, setButton] = useState(['Загрузить список пользователей'])
  
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(user => user.json())
      .then(user => {
        if (user && Array.isArray(user) && user.length > 0) {
          setUsers(user)
        }
      })
		loadButton('Обновить данные')
  }

  const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(posts => posts.json())
    .then(posts => {
      if (posts && Array.isArray(posts) && posts.length > 0) {
        setPosts(posts)
      }
    })
  }

  const loadTogether = () => {
    getData()
    getPost()
  }

	const loadButton = (name) => {
		setButton(name)
	}
	
  useEffect(()=>{
    getPost()
  }, [])

  const stylePad = {
    color: "#8f10d4",
    fontSize: "20px",
  }

  const navigate = useNavigate();

  return(
  <>
  <HeaderForm>
      <H1>Второе задание по JS</H1>
      <Navigate>
        <ul>
          <li><Button onClick={() => navigate("/")}>Главная</Button></li>
          <li><Button onClick={() => navigate("/login")}>Войти</Button></li>
          <li><Button onClick={() => navigate("/signin")}>Зарегистрироваться</Button></li>
        </ul>
      </Navigate>
    </HeaderForm>
    <PostsBackgroundColor>
        <Box>
            <TextHead className="common">Нажмите на кнопку, чтобы загрузить список пользователей</TextHead>
            <p></p>
            <button type="" onClick={() => {loadTogether()}} className='classButton common'>{clickButton}</button>
        </Box>
        
        <h2 className="common">Список пользователей:</h2>

        <div className="div common">
            {users.length > 0 && users.map(user => {
            return <Card title={user.name} key={Math.random()} className='card'>
                <p style={stylePad}>
                Email: <span>{user.email}</span>
                </p>
                <p style={stylePad}>
                Номер телефона: <span>{user.phone}</span> 
                </p>
                <p style={stylePad}>
                Email: <span>{user.email}</span>
                </p>
                <p style={stylePad}>
                Веб-сайт: <span>{user.website}</span>
                </p>

                <div style={{border: '1px solid #000', borderRadius: 2}}>
                <details>
                    <summary>
                    Нажми, чтобы увидеть посты пользователя
                    </summary>
                    
                    <Row gutter={10}>
                    {
                        userPosts.filter(post => post.userId === user.id).map(post => {
                        return <Card title={post.title} key={Math.random()} className='card cardPost'>

                            <h4><span style={stylePad}>Пост номер {post.id % 10 !== 0 ? post.id % 10 : 10}</span> </h4>
                            <p className='bodyP'>{post.body}</p>
                        </Card>
                        })
                    }
                    </Row>
                </details>
                </div>
                </Card>
            })
            }
        </div>
    </PostsBackgroundColor>
  </>
  )
  
}

export default Posts;

