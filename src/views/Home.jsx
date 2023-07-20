const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ login, categories }) {
  return (
    <Layout login={login}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Домой</a></li>
          <li className="breadcrumb-item active" aria-current="page">Темы</li>
        </ol>
      </nav>
      <h1 style={{ textAlign: 'center', margin: '30px' }}>Choose a category!</h1>
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center',
      }}
      >
        {categories.map((category) => (
          <div className="card w-40" style={{ width: '355px', heigth: '27rem' }}>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <h1 className="card-title">{category.name.toUpperCase()}</h1>
              <a href={`/categories/${category.id}`} className="btn btn-outline-warning oneCategory">
                Learn
                {' '}
                <strong>{category.name}</strong>
                {' '}
                now!
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
