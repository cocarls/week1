
import "./QuoteCard.css"

const QuoteCard = ({quote,handleChangeQuote}) => {

   
    

  return (
    <section className="quoteCard">

        <article className="quoteCard__container">
            <h1 className="quoteCard__title">infogalax</h1>
              <div className="back quoteCard__phrase">
              <p className="quoteCard__phrase">{quote.phrase}</p>
              </div>
            

            <button className="quoteCard__btn" onClick={handleChangeQuote}>probando</button>
        </article>

        <footer className="quoteCard__footer">
            Author: {quote.author}
        </footer>
    </section>
  )
}
export default QuoteCard