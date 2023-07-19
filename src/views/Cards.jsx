const React = require('react');
const Layout = require('./Layout');

module.exports = function Cards({ login, category, cards }) {
  return (
    <Layout login={login}>
      <link rel="stylesheet" href="/css/cards.css" />
      <script defer src="/js/cards.js" />
      <h1>
        Practice,
        {category.name}
      </h1>
      <div className="container section-center blog-center">
        {cards.map((card) => (
          <div className="card-body scene scene--card">
            <div className="card" style={{ width: '355px' }}>
              {card.Progresses[0].dataValues.isLearned ? (
                <div className="card__face card__face--front card__face--learned">
                  <div className="card-info">
                    <h2 className="card-title">{card.question}</h2>
                    <div className="status">Learned</div>
                  </div>
                </div>
              ) : (
                <div className="card__face card__face--front">
                  <div className="card-info">
                    <h2 className="card-title">{card.question}</h2>
                    <div className="status">Not Learned</div>
                  </div>
                </div>
              )}
              <div className="card__face card__face--back">
                <h2 className="card-title">{card.answer}</h2>
                <button className="btn btn-learned" data-cardid={card.id}>Изучено</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
