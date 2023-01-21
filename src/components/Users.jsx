import { useState } from 'react';
import React from 'react';

function Users() {
    function id(){}
    const initUsers=[
      {id: 1,
      name: 'Григорий',
      surname: 'Лэпсъ',
      age: '0' },
      
      {id:2,
      name: 'ПаркурКиллерБравлсСтарсТоп',
      surname: 'МегаКриппер2004',
      age: '108'},
      {id:3,
        name: 'Вова',
        surname: 'Пушкин',
        age: '35' },
    ]
    const [edit,setEdit]=useState(null)
    const [users,setUsers]=useState(initUsers)
    function usersBan(id){
    setUsers(users.filter(user=> user.id !== id))
    }
    const result = users.map(user=>{
      return <li key={user.id}><span>{user.name} </span><span>{user.surname} </span><span>{user.age} Лет</span><button onClick={()=>usersBan(user.id)}>Ban</button><button onClick={()=> setEdit(user.id)}>edit</button></li>
    })
    function getValue(prop){
    return users.reduce((res,user)=>user.id===edit ? user[prop]:res, '')
    }
    function changeItem(prop, event){
      setUsers(users.map(user=>
        user.id===edit ? {...user, [prop]: event.target.value}:user))
    }
      return (
        <div className="App">
          <ul>{result}</ul>
          <br/>
          <input value={getValue('name')} onChange={event=>changeItem('name',event)} id/>
          <input value={getValue('surname')} onChange={event=>changeItem('surname',event)} id/>
          <input value={getValue('age')} onChange={event=>changeItem('age',event)} id/>
          <button onClick={()=>setEdit(null)} id>save</button>
        </div>
      );
      }
    export default Users