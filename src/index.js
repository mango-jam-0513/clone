import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const firstBook = {
  img : '/images/hero.jpg',
  title : 'Final Fantasy',
  author : 'John Sammie',
};
const secondBook = {
  img :'https://imgd.aeplcdn.com/1056x594/cw/ec/36756/MG-Hector-Right-Front-Three-Quarter-166301.jpg?wm=0&q=85',
  title : 'Our class is my family.',
  author : 'Mangojam',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        <p>dfakldjflajldfjlajsdlfjalsdjflakjdslfjakljdsflkajsdflj</p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = ({img,title,author,children}) => {
  return(
    <article className="book">
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}









ReactDom.render(<BookList />,document.getElementById('root'));
