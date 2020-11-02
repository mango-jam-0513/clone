import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books = [
  {
    img : '/images/hero.jpg',
    title : 'Final Fantasy',
    author : 'John Sammie',
  },
  {
    img :'https://imgd.aeplcdn.com/1056x594/cw/ec/36756/MG-Hector-Right-Front-Three-Quarter-166301.jpg?wm=0&q=85',
    title : 'Our class is my family.',
    author : 'Mangojam',
  }
]

function BookList() {
  return (
    <section className='booklist'>
      {books}
    </section>
  );
}

const Book = (props) => {
  const {img,title,author} = props;
  return(
    <article className="book">
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}









ReactDom.render(<BookList />,document.getElementById('root'));
