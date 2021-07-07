import React from 'react';
import styled from 'styled-components';
import Input from './components/Input.js';
import ToDoItem from './components/ToDoItem.js';

import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'

function App() {
  
 const todoList = useSelector(selectTodoList)

const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 80%;
  margin: 30px auto;
  padding: 25px 0;
  font-size: 16px;
  border: 1px solid gray;
  align-items: center;
  background-color: #3a3f52;
`;

const Tag = styled.h1`
  align-text: center;
  display:block;
  font-size:2rem;
  padding: 5px 0;
  background-image: linear-gradient(45deg, #42f5ef, #4269f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const ListContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 70%;
  align-items:center;
  margin: auto;
  border: 1px solid white;
  box-shadow: gray 2px 2px 10px;
  padding: 32px auto;
  background-color: rgb(232,234,237);
  margin-top: 5px;
`

  return (
    <Container >
      <Tag>To Do List</Tag>
      <Input/>
      <br/>
      <ListContainer>
        {todoList.map(item=>{
         return <ToDoItem name={item.item} done={item.done} id={item.id}/>
        })}
      </ListContainer>
    </Container>
  );
}

export default App;
