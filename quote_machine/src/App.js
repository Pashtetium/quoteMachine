// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import Buttons from './Buttons';


class App extends React.Component {     
  constructor(props) {
    super(props);
    this.state = {      
      error: null,
      isLoaded: false,
      quote: 'When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.',
      author: 'Kevin Kruse',
      quotes: null,      
      currentColor: '22, 160, 133',
      colors: [
          '22, 160, 133','39, 174, 96','44, 62, 80','243, 156, 18','231, 76, 60','155, 89, 182', '251, 105, 100', '52, 34, 36',  '71, 46, 50',  '189, 187, 153',  '119, 177, 169',  '115, 168, 87'
      ]    
    };
    this.handleClick = this.handleClick.bind(this);
    this.nextQuote = this.nextQuote.bind(this);
    this.colorPicker = this.colorPicker.bind(this);
      
  }
  
  nextQuote() {
    const { quotes } = this.state;
    let nextQuoteIndex = () => {
        return Math.floor(Math.random() * quotes.quotes.length);
    }    
    const currentQuote = quotes.quotes[nextQuoteIndex()];
    this.setState({
        quote: currentQuote.quote,
        author: currentQuote.author
    });
  }
  
  componentDidMount() {      
      fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then(res => {          
        return res.json();
      })
      .then(data => {        
        this.setState({
          isLoaded: true,
          quotes: data          
        }) 
            
      }, 
       (error) => {
        this.setState({
          isLoaded: true,
          error
        });
        }
       )   
      
      this.colorPicker();
    }
  
  colorPicker() {   
    const { colors } = this.state;      
    this.setState({
        currentColor: colors[Math.floor(Math.random() * colors.length)]
    });    
  }
    
  handleClick() {
      this.nextQuote();  
      this.colorPicker();      
  }
  render() {    
    const { error, isLoaded, quote, author, currentColor } = this.state;   
      
    document.body.style.backgroundColor = `rgba(${currentColor}, 1)`;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="quote-wrapper">              
          <blockquote className="text">
                <p style={{color: `rgba(${currentColor}, 1)`}}>{quote}</p>
                <footer style={{color: `rgba(${currentColor}, 1)`}}>– {author}</footer>
          </blockquote>      
          <Buttons quote={quote} author={author} handleClick={this.handleClick} color={currentColor} />
        </div>
    )}
  }  
} 

export default App;
