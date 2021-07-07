import React,{useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { saveTodo  } from '../features/todoSlice';

const Container = styled.div`
height:50px;
width: 90%;
margin:auto;
border-radius: 12px;
background-color: white;
display:flex;
align-items:center;
justify-content:center;
`;

const InputList = styled.input`
    background:none;
    width:70%;
    border:none;
    margin-left:12px;
    flex:1;
    &:focus{
        outline:red;
    }
`;

const Button = styled.button`
    margin-right:8px;
    font-weight: bold;
    font-size: 0.7rem;
    border:none;
    border-radius: 10px;
    padding: 15px auto;
    height: 30px;
    width: 15%;
    background:linear-gradient(45deg, #42f5ef, #4269f5);;
`;


function Input() {

    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addToDo =() =>{
     dispatch(saveTodo({
         item:input,
         done: false,
         id: Date.now()
     }))
    }
    return (
        <Container>
            <InputList value={input} onChange={e=>setInput(e.target.value)}></InputList>
            <Button onClick={addToDo}>Add!!</Button>
        </Container>
    )
}

export default Input
