/* eslint-disable no-nested-ternary */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Cards({ login, category, cards }) {
  // console.log('CARDS ===> ', cards[0].Progresses[0].dataValues);
  return (
    <Layout login={login}>
      <link href="https://unpkg.com/css.gg@2.0.0/icons/css/check-o.css" rel="stylesheet" />
      <link rel="stylesheet" href="/css/cards.css" />
      <script defer src="/js/cards.js" />
      <script defer src="/js/deleteCard.js" />
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
      <div className="container section-center blog-center deleteDiv">
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
                {login === 'admin' ? (
                  <button type="button" className="btn btn-learned btn-success btn-delete" id={card.id} data-cardid={card.id}>Удалить</button>
                ) : (
                  <button type="button" className="btn btn-learned btn-success " data-cardid={card.id}>Сменить статус</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
