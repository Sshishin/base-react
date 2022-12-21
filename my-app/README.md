Компонент по старому подходу на использовании классов

```
class Field extends React.Component {
  render() {
    const holder = 'Enter here!';
    return <input placeholder={holder} type="text"/>
  }
}
```

Компоненты это функции которые могут возвращать JSX элементы
Компоненты создаются когда могут переиспользоваться в других участках (как блоки в бэм)
Компоненты могут состоять из компонентов

Strict Mode
Позволяет подсвечивать устаревшие конструкции и небезопасный код
Можно использовать выборочно для каждого компонента

```
root.render(
<StrictMode>
    <App/>
</StrictMode>
);
```

Свойства компонентов (props)
Props это объект со свойтсвами которые мы передадим

```
const WhoAmI = (props) => {   //Длаее указывае значения для props при передаче компонента с помощью атрибутов
  return (
    <div>
      <h1> My name is {props.name}, surname {props.surname} - </h1>
        <a href="{props.link}">My profile</a>
    </div>
  )
}
```
Вызов 
```
<WhoAmI 
        name="Sergey"
        surname="Shishin"
        link="google.com"
      />

```

Деструктуризация Props (всегда присутствует у компонентов даже без объявления)
```
const WhoAmI = ({name, surname, link}) => {   
  return (
    <div>
      <h1> My name is {name}, surname - {surname} </h1>
        <a href="{link}">My profile</a>
    </div>
  )
}
```

В качестве Props можем передавать все что угодно
```
const WhoAmI = ({name, surname, link}) => {   
  return (
    <div>
      <h1> My name is {name.firstName}, surname - {surname} </h1>
        <a href="{link}">My profile</a>
    </div>
  )
}

<WhoAmI 
        name={{firstName: 'John'}}
        surname="Shishin"
        link="google.com"
      />

```

Состояние компонента это динамические изменения, например при клике на сладйер или счетчик состояние компонента изменяется

SetState запускает перерисовку всего компонента, а именно метода render при использовании состояний в классах

Обертка в скобки может заменть слово return