const React = require('react');
const Layout = require('./Layout');

module.exports = function Account({ login }) {
  return (
    <Layout login={login}>
      <link rel="stylesheet" href="css/progress.css" />
      <script defer src="/js/progress.js" />
      <script defer src="/js/addCard.js" />

      <div className="mainDiv container">
        <div className="row">
          <div id="body" className="col-sm">
            {/* <div className="progress-circle">
          <div className="progress-count" />
        </div> */}
          </div>
          <div className="modalDiv col-sm ">
            <h5>Сделай свой словарь богаче! Редактируй профиль или добавь свои слова!</h5>
            <div
              className="buttons"
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'space-around', gap: '15px',
              }}
            >
              <a href="/editProfile">
                <button
                  style={{ width: '250px' }}
                  type="button"
                  className="btn btn-outline-warning"
                >
                  Редактировать профиль
                </button>

              </a>
              <button
                type="button"
                className="btn btn-outline-warning"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
                style={{ width: '250px' }}
              >
                Добавить карточку
              </button>
            </div>
            <div
              className="modal fade bd-example-modal-lg"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="myLargeModalLabel">
                      Добавить карточку
                    </h5>
                    <button
                      type="button"
                      className="close btn btn-warning"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form className="newCard">
                      <div className="form-group">
                        <select className="custom-select">
                          <option selected>путешествия</option>
                          <option>животные</option>
                          <option>приветствия</option>
                          <option>развлечения</option>
                          <option>общие фразы</option>
                          <option>дом</option>
                          <option>еда</option>
                          <option>природа</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="question">Вопрос</label>
                        <input
                          type="text"
                          className="form-control"
                          id="question"
                          name="question"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="answer">Ответ</label>
                        <input
                          type="text"
                          className="form-control"
                          id="answer"
                          name="answer"
                        />
                      </div>
                      <div className="modal-footer">
                        <button type="submit" className="btn  btn-outline-warning">
                          Добавить
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" />
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" />
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" />
    </Layout>
  );
};
