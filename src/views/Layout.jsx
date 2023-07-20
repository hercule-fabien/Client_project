const React = require('react');

module.exports = function Layout({ children, login }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <link rel="stylesheet" href="/stylesheets/application.css" /> */}

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />

        {/* <script defer src="/js/application.js" /> */}

        <title>TITLE</title>
      </head>

      <body>
        <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
          <div className="max-w-700 center wrap-float">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                {login? ( <a className="navbar-brand" href="/home">
                  <img src='/img/image.png' alt='#' style={{width:'100px', height:'100px'}}/>
                </a>) : 
                <a className="navbar-brand" href="/">
                  <img src='/img/image.png' alt='#' style={{width:'100px', height:'100px'}}/>
                </a> }
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {login ? (
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <span className="nav-link">
                          Hi,
                          {' '}
                          <a href="/account">{login}</a>
                        </span>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/logout">
                          Logout
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="/login">
                          Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/register">
                          Registration
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </nav>

            <div className="logo-container" style={{ marginTop: '20px' }}>
              {/* <img className="logo center block" src="/images/logo.png" alt="logo" /> */}
              <h1 className="projName">PROJECT NAME</h1>
            </div>
          </div>
        </header>
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center mainContentPage">
            {children}
          </div>
        </div>
      </body>

    </html>
  );
};
