import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {books} from './books';
import SpecificBook from './Book';
import {greeting} from './testing/testing';
// function Greeting() {
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   )
// }

// const Greeting=()=>{
//   return React.createElement(
//     'div', 
//     {}, 
//     React.createElement('h1', {}, 'hellow world')
//   )
// }

// const names = ['john', 'peter', 'susan'];
// const newName = names.map((name) =>{
//   return <h1>{name}</h1>
// });
// console.log(newName);

function BookList() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {books.map((book,index) => {
        const {img, title, author} = book;
        return (
          <SpecificBook key={book.id} {...book}></SpecificBook>
        );
      })}
    </section>
  );
}
// const img = 'https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg';
// const author = 'Amelipa Hepworth';
// const title1 = 'EsLint';

// const Book = (props) =>{


// const Image = () => <img src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg" alt="" width="120px" />
// const Title = () => <h1>EsLint</h1>
// const Author = () => <h4 style={{color:'#555555', fontSize:'0.75rem', marginTop:'15px'}}>Amelipa Hepworth</h4>

ReactDom.render(<BookList/ >, document.getElementById('root'));