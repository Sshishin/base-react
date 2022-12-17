import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// const elem = <h2>Hello World!</h2>

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!'); //Так можно создавать элементы без JSX (2-ой аргумент это класс)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   elem
// );

// Старая версия
// Куда помещаем 2 аргумента

// ReactDOM.render( 
//   <React.StrictMode> 
//     <App />
//   </React.StrictMode>,  //Что будет рендериться
//   document.getElementById('root')   //Где будет рендериться
// );

// Импорты React нужны были в старых версиях в каждый файл

// const text = 'Hello World'    //Можно помещаться все кроме объектов
// const elem = (  //Всегда нужно оборачиать в родительский блок
//   <div>
//     <h2>Текст: {text}, сложение: {2+3}</h2>
//     <input type="text" />
//     <button tabIndex={0}>Click</button>
//   </div>    //Всегда у одиночных тегов есть самозакрывающийся тег
//   // Атрибуты пишутся в камел кейсе
//   // Классы пишутся как className
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   elem
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);


