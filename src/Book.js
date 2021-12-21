import React from "react";

const Book = ({ img, title, author}) =>{
    // console.log(props);
    // const {img, title, author} = props.book;
    const clickHandler = (e) =>{
      console.log(e);
      console.log(e.target)
      alert('hello world');
    };
    const complexExample = (author ) =>{
      console.log(author);
    }
    return (
      <article className='book' onMouseOver={()=>{
        console.log(title);
      }}>
      <img src={img} alt="" />
        {/* <Image></Image> */}
        {/* <Title/> */}
        <h1 onClick={()=> console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        {/* {children} */}
        {/* <p>{props.job}</p>
        <p>{props.title}</p>
        <p>{props.number}</p> */}
        {/* <Author></Author> */}
        {/* <p>{6 + 6}</p> */}
        {/* {console.log(props)} */}
        <button type="button" onClick={clickHandler}>Reference Example</button>
  
        <button type="button" onClick={complexExample(author)}>more complex example</button>
      </article>
    );
  }

export default Book