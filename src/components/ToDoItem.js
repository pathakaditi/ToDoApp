import React from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox'

import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const Item = styled.p`
    flex:1; 
`
const Container = styled.div`
    display: inline-flex;
    flex:1;
    align-items: center;
    padding: 5px auto;
    display:flex;
    align-items:center;
    margin: 6px 4px ;
    background-color:white;
    width:80%;
    height:40px;
    border-radius:12px;

`

function ToDoItem({name,done,id}) {

    const dispatch = useDispatch()
    const handleCheck =()=>{
        dispatch(setCheck(id))
    }

    return (
        <Container>
            <Checkbox checked={done}
            color="primary"
            onChange={handleCheck}
            inputProps={{'aria-label':'secondary checkbox'}}
            />
        <Item>{name}</Item>
        </Container>
    )
}

export default ToDoItem
