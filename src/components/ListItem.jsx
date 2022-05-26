import React from 'react'
import '../styles/ListItem.css'
import styled, { css } from 'styled-components'

const Item = styled.div`
display: flex;
width: 85%;
height: 2em;
align-items: center;
gap: 1em;
justify-content: space-between;
border-bottom: solid 1px grey;
border-left: solid 1px grey;
border-bottom-left-radius: 5px;
padding: 3px;
padding-left: 10px;
// background-color: rgba(255, 255, 255, 0.6)

`

const TaskText = styled.p`

`

const Button = styled.button`
border: none;
padding: 8px;
cursor: pointer;
border-radius: 4px;
font-size: 0.6em;
color: white;

${props => props.completed && css`
    background-color: green;

`}

${props => props.delete && css`
    background-color: crimson;
    
`}

`

const BtnCont = styled.div`
display: flex;
gap: 0.5em;
`

export default function ListItem({ task }) {
    return (
        <Item>
            <TaskText>{task.text}</TaskText>
            <BtnCont>
                <Button completed>Completed</Button>
                <Button delete>Delete</Button>
            </BtnCont>

        </Item>
    )
}
