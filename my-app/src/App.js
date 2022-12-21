import React, {StrictMode} from 'react';
import './App.css';


// Логики следующая 
// Создаем главный компонент (App) который будем в дальнейшем импортировать в index.js
// Пишем компоненты которые передаем в App
//App рендериться в index.js

const Header = () => {    //Пишем свой компонент
  return <h2>Hello World!</h2>
}

// const Field = () => {    //Пишем свой компонент
//   const holder = 'Enter here'
//   return <input placeholder={holder} type="text"/>
// }

// Компонент по старому подходу на использовании классов

class Field extends React.Component {
  render() {
    const holder = 'Enter here!';
    return <input placeholder={holder} type="text"/>
  }
}

function Button() {
  const text = 'Push me'
  // const res = () => {
  //   return 1+2;
  // }
  // return <button>{text} {res()} take</button>
  const logged = true;
  return <button>{logged ? 'Good' : text}</button>
}

// Свойства компонентов (props)
// Props это объект со свойтсвами которые мы передадим

// const WhoAmI = (props) => {   //Длаее указывае значения для props при передаче компонента с помощью атрибутов
//   return (
//     <div>
//       <h1> My name is {props.name()}, surname - {props.surname} </h1>
//         <a href="{props.link}">My profile</a>
//     </div>
//   )
// }

class WhoAmI extends React.Component {      //Использование классов для демонстрации работы с состояниями
    constructor(props) {     //Конструктор в данном случае лушче не использовать где нет каких-то дополнительных действий
       super(props)
       this.state = {   //Как раз таки объект состояния
            years: 27,
            text: '+++'
       }
    }

    // Такая запись используется если новый state не зависит от предыдущего

    // nextYear = () => {      //Здесь можно применять только стрелочную функцию
    //     console.log('+++')
    //     this.setState({     //Изменяем состояние 
    //         years: this.state.years + 1
    //     })
    // }


    // Такая запись используется если новый state ЗАВИСИТ от предыдущего
    // Такой вариант не допускает того чтобы счетчик сбился и всегда успевает подрисовывать новые данные (потому что ждет выполнения предыдущей операции так как это асинхронная операция)
    // Меняет только указанные значения и не трогает которые указаны не были

    nextYear = () => {      //Здесь можно применять только стрелочную функцию
        this.setState(state => ({       //Здесь обертка в скобки заменяет return
            years: state.years + 1,
        
        }))
    }

    render() {
        const {name, surname, link} = this.props    //Вытаскиваем деструктуризированные элементы из объекта пропс
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
              <h1> My name is {name}, surname - {surname}, age - {this.state.years} </h1>
                <a href={link}>My profile</a>
            </div>
          )
    }
}

function App() {
  return (    //Вставляем ниже свой компонент чтобы передать его на index.js и отрендерить
    <div className="App">
      <StrictMode>
          <Header/>
      </StrictMode>
      <Field/>
      <Button/>
      {/* <WhoAmI 
        name={() => {return 'Sergey'}}
        surname="Shishin"
        link="google.com"
      />
      <WhoAmI 
        name={() => {return 'John'}}
        surname="Not Shishin"
        link="yandex.com"
      /> */}


      {/* Тестируем пропсы для классовых компонентов */}

      <WhoAmI 
        name='Sergey'
        surname="Shishin"
        link="google.com"
      />
      <WhoAmI 
        name='John'
        surname="Not Shishin"
        link="yandex.com"
      />

    </div>
  );
}


export default App;
