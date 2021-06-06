// eslint-disable-next-line
import React from 'react';

const Buttons = (props) => {    
    const quote = props.quote;
    const author = props.author;
    const handleClick = props.handleClick;
    return (
        <div className="buttons">
              <a
                className="button"
                id="tweet-quote"
                title="Tweet this quote!"
                target="_top"
                href={"https://twitter.com/intent/tweet?hashtags=quotes&text=" +
      encodeURIComponent('"' + quote + '" ' + author)}
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="button"
                id="tumblr-quote"
                title="Post this quote on tumblr!"
                target="_blank"
                rel="noreferrer"
                href={'https://www.tumblr.com/widgets/share/tool?   posttype=quote&tags=quotes&caption=' +
      encodeURIComponent(author) +
      '&content=' +
      encodeURIComponent(quote) +      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'}
              >
                <i className="fa fa-tumblr"></i>
              </a>              
            <button id="new-quote" onClick={handleClick} className="button">New Quote</button>
          
          </div>              
    );
};

export default Buttons;