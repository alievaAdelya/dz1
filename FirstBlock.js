import React from 'react'
import img from '../../img/Banff-National-Park-Canada-in-Albertas-Rocky-Mountains-Peaceful-lake-pine-forest-snowy-mountains.jpg'
import './First.css'

const FirstBlock = () => {
  return (
    <div>
        <img src= {img}/>
        <h2>DOM-дерево
Основой HTML-документа являются теги.

В соответствии с объектной моделью документа («Document Object Model», коротко DOM),каждый HTML-тег является объектом.
 Вложенные теги являются «детьми» родительского элемента.
Текст, который находится внутри тега, также является объектом.
Все эти объекты доступны при помощи JavaScript, мы можем использовать их для изменения страницы.</h2>

<p> При помощи JavaScript, мы можем использовать их для изменения страницы.</p>
    </div>
  )
}

export default FirstBlock