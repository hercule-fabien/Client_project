const React = require("react");
const Layout = require("./Layout");

module.exports = function Account({ login }) {
  return (
    <Layout login={login}>
      <link rel="stylesheet" href="css/progress.css" />
      <script defer src="/js/progress.js" />
      <script defer src="/js/addCard.js" />
      <div id="body">
        {/* <div className="progress-circle">
          <div className="progress-count" />
        </div> */}
      </div>
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
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Закрыть
              </button> */}
            </div>
              </form>
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
