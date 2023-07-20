const React = require('react');
const Layout = require('./Layout');

module.exports = function Cards({ login, category, cards }) {
  return (
    <Layout login={login}>
      <link href="https://unpkg.com/css.gg@2.0.0/icons/css/check-o.css" rel="stylesheet" />
      <link rel="stylesheet" href="/css/cards.css" />
      <script defer src="/js/cards.js" />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Домой</a></li>
          <li className="breadcrumb-item"><a href="/home">Темы</a></li>
          <li className="breadcrumb-item active" aria-current="page">Карты</li>
        </ol>
      </nav>
      <h1 className="cards-title">
        Вы изучаете - <span>{category.name}</span>
      </h1>
      <div className="cards-container section-center blog-center">
        {cards.map((card) => (
          <div className="card-body scene scene--card" key={card.id}>
            <div className="card">
              {card.Progresses.length > 0 ? (
                card.Progresses[0].dataValues.isLearned ? (
                  <div className="card__face card__face--front card__face--learned">
                    <div className="card-info">
                      <h2 className="card-title">{card.question}</h2>
                      <div className="checkmark-container"><i className="gg-check-o" /></div>
                    </div>
                  </div>
                ) : (
                  <div className="card__face card__face--front">
                    <div className="card-info">
                      <h2 className="card-title">{card.question}</h2>
                      <div className="checkmark-container" />
                    </div>
                  </div>
                )
              ) : (
                <div className="card__face card__face--front">
                  <div className="card-info">
                    <h2 className="card-title">{card.question}</h2>
                    <div className="checkmark-container" />
                  </div>
                </div>
              )}

              <div className="card__face card__face--back">
                <h2 className="card-title">{card.answer}</h2>
                <button type="button" className="btn btn-learned btn-success" data-cardid={card.id}>Я выучил</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
