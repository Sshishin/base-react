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

function App() {
  return (    //Вставляем ниже свой компонент чтобы передать его на index.js и отрендерить
    <div className="App">
      <StrictMode>
          <Header/>
      </StrictMode>
      <Field/>
      <Button/>
    </div>
  );
}

export default App;
