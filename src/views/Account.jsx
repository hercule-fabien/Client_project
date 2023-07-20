const React = require('react');
const Layout = require('./Layout');

module.exports = function Account({ login }) {
  return (
    <Layout login={login}>
      <link rel="stylesheet" href="css/progress.css" />
      <script defer src="/js/progress.js" />
      <script defer src="/js/addCard.js" />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Домой</a></li>
          <li className="breadcrumb-item active" aria-current="page">Личный кабинет</li>
        </ol>
      </nav>
      <div id="mainDiv">
        <div id="body" className="row">
          {/* <div className="progress-circle">
          <div className="progress-count" />
        </div> */}
        </div>
        <div id="modalDiv">
          <h5>Расширь свой словарный запас! Добавь новую карточку со словом!</h5>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            Добавить карточку
          </button>
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
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="newCard">
                    <div className="form-group">
                      <select name="categoryName">
                        <option selected>travel</option>
                        <option>animal</option>
                        <option>greetings</option>
                        <option>entertainment</option>
                        <option>common phrases</option>
                        <option>home</option>
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
                      <button type="submit" className="btn btn-primary">
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

      <div className="changeProfile">
          <a href='/editProfile'><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Редактировать профиль
          </button></a>
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Изменить пароль</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form name="changePassword">
                    <div className="form-group">
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="старый пароль" />
                    </div>
                    <br />
                    <div className="form-group">
                      <input type="password" className="form-control" id="exampleInputPassword2" placeholder="новый пароль" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                  <button type="submit" className="btn btn-primary">Сохранить</button>
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
