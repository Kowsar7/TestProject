import React, { Component } from 'react'

import classes from './Quiz.module.css'
import {Questions} from './Questions'
import Question from './Question/Question'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

class Quiz extends Component {
    state = {
        questionNum: 0,
        rightAnswer: ["GRYFFINDOR", 1],
        rightAnswers: 0,
        optionClass: '',
        answerId: 0,
        showResults: false
    }

    answerHandler = (value, id) => {
        if (value === this.state.rightAnswer[0]) {
            this.setState(prevState => ({
                ...prevState,
                rightAnswers: prevState.rightAnswers + 1,
                optionClass: 'Correct',
                answerId: id
            }))
        } else (
            this.setState(prevState => ({
                ...prevState,
                optionClass: 'Wrong',
                answerId: id
            }))
        )
        if (this.state.questionNum <= 8) {
            setTimeout( () => (
                this.setState(prevState => ({
                    ...prevState,
                    questionNum: prevState.questionNum + 1,
                    rightAnswer: Questions[prevState.questionNum + 1].RA,
                    optionClass: ''
                }))
            ), 1000)
        } else {
            setTimeout ( () => (
                this.setState({showResults: true})
            ), 1000)
        }
    }

    render () {
        const Data = Questions.map(item => {
            return(
                <Question
                    key={item.id}
                    id={item.id}
                    question={item.Ques}
                    answers={item.Answ}
                    setRightAnswer={this.setRightAnswer}
                    onAnswer={this.answerHandler}
                    optionClass={this.state.optionClass}
                    rightAnswerId={this.state.rightAnswer[1]}
                    answerId={this.state.answerId} />
            )
        })

        let page;
        if(!this.state.showResults) {
            page= <div className={classes.Quiz}>
                {Data[this.state.questionNum]}
                <p>Correct Answers: {this.state.rightAnswers} of 10</p>
            </div>
        } else {
            if(this.state.rightAnswers === 0) {
                page= <p className={classes.Result}>
                    Unfortunately, you did not answer any of the questions correctly.</p>
            } else if (this.state.rightAnswers <= 5) {
                page= <p className={classes.Result}>
                    Good job. You answered {this.state.rightAnswers} questions Correctly.</p>
            } else if (this.state.rightAnswers <= 9) {
                page= <p className={classes.Result}>
                    Well done. You answered {this.state.rightAnswers} questions Correctly.</p>
            } else {
                page= <p className={classes.Result}>
                    Excellent. You answered all of the questions Correctly.</p>
            }
        }
        
        return(
            <Auxiliary>
                {page}
            </Auxiliary>
        )
    }
}

export default Quiz