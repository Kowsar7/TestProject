import React from "react";

import classes from './Question.module.css'
import './Question.module.css'

const question = (props) => {
    let optionClass= [
        [classes.Option], [classes.Option], [classes.Option], [classes.Option]
    ];
    if (props.optionClass === 'Correct') {
        optionClass[props.answerId]= [classes.Option, classes.Correct].join(' ');
    } else if (props.optionClass === 'Wrong') {
        optionClass[props.answerId]= [classes.Option, classes.Wrong].join(' ');
        optionClass[props.rightAnswerId]= [classes.Option, classes.Correct].join(' ');
    }

    return (
        <div className={classes.Question}>
            <h3>Question Number {props.id} </h3>
            <h2>{props.question}</h2>
            < hr />
            <div className={classes.Options}>
                <p 
                    className= {optionClass[0]} 
                    onClick= {() => props.onAnswer(props.answers[0], 0)}>
                    {props.answers[0]}
                </p>
                <p 
                    className= {optionClass[1]} 
                    onClick= {() => props.onAnswer(props.answers[1], 1)}>
                    {props.answers[1]}
                </p>
                <p 
                    className= {optionClass[2]} 
                    onClick= {() => props.onAnswer(props.answers[2], 2)}>
                    {props.answers[2]}
                </p>
                <p 
                    className= {optionClass[3]} 
                    onClick= {() => props.onAnswer(props.answers[3], 3)}>
                    {props.answers[3]}
                </p>
            </div>
        </div>
    )
}

export default question