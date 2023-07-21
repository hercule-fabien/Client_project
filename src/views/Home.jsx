const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ login, categories }) {
  return (
    <Layout login={login}>
      <h1 style={{ textAlign: 'center', margin: '30px' }}>Выбери категорию!</h1>
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center',
      }}
      >
        {categories.map((category) => (
          <div className="card w-40" style={{ width: '355px', height: '15rem' }}>
            <div className="card-body" id={`category_${category.id}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <h1 className="card-title">{category.name.toUpperCase()}</h1>
              <a href={`/categories/${category.id}`} className="btn btn-warning oneCategory">
                Изучать
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
