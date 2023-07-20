const React = require('react');
const Layout = require('./Layout');

module.exports = function Cards({ login, category, cards }) {
  // console.log('CARDS ===> ', cards[0].Progresses[0].dataValues);
  return (
    <Layout login={login}>
      <link rel="stylesheet" href="/css/cards.css" />
      <script defer src="/js/cards.js" />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Домой</a></li>
          <li className="breadcrumb-item"><a href="/home">Темы</a></li>
          <li className="breadcrumb-item active" aria-current="page">Карты</li>
        </ol>
      </nav>
      {/* <h1>
        Practice,
        {category.name}
      </h1> */}
      <div className="container section-center blog-center">
        {cards.map((card) => (
          <div className="card-body scene scene--card" key={card.id}>
            <div className="card" style={{ width: '355px' }}>
              {card.Progresses.length > 0 ? (
                card.Progresses[0].dataValues.isLearned ? (
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
                )
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
