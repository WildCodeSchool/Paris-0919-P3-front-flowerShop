import React from 'react';
import PropTypes from 'prop-types';
import _find from 'lodash/find';

import ArticleForm from './ArticleForm';
import ArticlesList from './ArticlesList';
import LoadingMsg from './LoadingMsg';
import AdminRoute from './AdminRoute';
import api from '../api';

import './App.css';

const articleTypes = [
  {
    _id: '1',
    name: 'Mariages'
  },
  {
    _id: '2',
    name: 'Entreprises'
  },
  {
    _id: '3',
    name: 'Ateliers DIY'
  }
];

class ArticlesPage extends React.Component {
  state = {
    articles: [],
    loading: true
  };

  componentDidMount() {
    api.articles
      .fetchAll()
      .then(articles => this.setState({ articles: articles, loading: false }));
  }

  toggleFeatured = articleId => {
    const article = _find(this.state.articles, { _id: articleId });
    return this.updateArticle({
      ...article,
      featured: !article.featured
    });
  };

  toggleDescription = articleId =>
    this.setState({
      articles: this.state.articles.map(article =>
        articleId === article._id
          ? { ...article, described: !article.described }
          : article
      )
    });

  saveArticle = article =>
    // History object possible because update & addArticle are promises. Replace a redirect component
    (article._id
      ? this.updateArticle(article)
      : this.addArticle(article)
    ).then(() => this.props.history.push('/articles'));

  addArticle = articleData =>
    api.articles.create(articleData).then(article =>
      this.setState({
        articles: [...this.state.articles, article],
        showArticleForm: false
      })
    );

  updateArticle = articleData =>
    api.articles.update(articleData).then(article =>
      this.setState({
        articles: this.state.articles.map(item =>
          item._id === article._id ? article : item
        ),
        showArticleForm: false
      })
    );

  deleteArticle = article =>
    api.articles.delete(article).then(() =>
      this.setState({
        articles: this.state.articles.filter(item => item._id !== article._id)
      })
    );

  render() {
    const { articles, loading } = this.state;
    const numberOfColumns =
      this.props.location.pathname === '/articles' ? 'sixteen' : 'ten';
    const editPath =
      this.props.location.pathname === '/articles/new' ? 'Créer' : 'Editer';

    return (
      <div className='ui container'>
        <div className='ui stackable grid'>
          <AdminRoute
            path='/articles/new'
            user={this.props.user}
            render={() => (
              <div className='six wide column'>
                <ArticleForm
                  articleTypes={articleTypes}
                  submit={this.saveArticle}
                  article={{}}
                  editPath={editPath}
                />
              </div>
            )}
          />
          <AdminRoute
            path='/articles/edit/:_id'
            user={this.props.user}
            render={props => (
              <div className='six wide column'>
                <ArticleForm
                  articleTypes={articleTypes}
                  submit={this.saveArticle}
                  article={
                    _find(this.state.articles, {
                      _id: props.match.params._id
                    }) || {}
                  }
                  editPath={editPath}
                />
              </div>
            )}
          />

          <div className={`${numberOfColumns} wide column`}>
            {loading ? (
              <LoadingMsg />
            ) : (
              <ArticlesList
                articles={articles}
                toggleFeatured={this.toggleFeatured}
                toggleDescription={this.toggleDescription}
                deleteArticle={this.deleteArticle}
                user={this.props.user}
                editPath={editPath}
              />
            )}
          </div>
        </div>

        <br />
      </div>
    );
  }
}

ArticlesPage.defaultProps = {
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

export default ArticlesPage;
