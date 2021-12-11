// классовый компанент устаревший подход
import React from 'react';

class ClassCounter extends React.Component {  //наследование 

constructor(props) {       //синтаксис класса
    super(props);
    this.state = {
        count: 0
    }

this.increment = this.increment.bind (this)    // обращение к increment через bind
this.decrement = this.decrement.bind (this)    // обращение через bind
}


    increment () { //это начало функции то само слово function писать не надо так как мы работаем в классе
    this.setState({count: this.state.count +1})    //прибовление 1
        }
        
    decrement() {
        this.setState({count: this.state.count -1})   // отнимание 1
        }
        
        
    render () {
        return (
            <div>
                <h1>{this.state.count}</h1>   //сам счётчик
                <button onClick={this.increment}>Increment</button>  //кнопка добавления
                <button onClick= {this.decrement}>Decrement</button>  // кнопка отнимания
            </div>
        )
    }
}

export default ClassCounter;