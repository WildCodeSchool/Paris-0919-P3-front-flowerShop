import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ArticleSection extends React.Component {
  state = {
    showConfirmation: false
  };

  showConfirmation = () => this.setState({ showConfirmation: true });
  hideConfirmation = () => this.setState({ showConfirmation: false });

  render() {
    const { article, deleteArticle, user } = this.props;
    const adminActions = (
      <div className='extra content'>
        {this.state.showConfirmation ? (
          <div className='ui two buttons'>
            <button
              className='ui red basic button'
              onClick={() => deleteArticle(article)}
            >
              <i className='ui icon check' /> YES
            </button>
            <button
              className='ui grey basic button'
              onClick={this.hideConfirmation}
            >
              <i className='ui icon close' /> NO
            </button>
          </div>
        ) : (
          <div className='ui two buttons'>
            <Link
              to={`/articles/edit/${article._id}`}
              className='ui green basic button'
            >
              <i className='ui icon edit' />
            </Link>
            <button
              className='ui red basic button'
              onClick={this.showConfirmation}
            >
              <i className='ui icon trash' />
            </button>
          </div>
        )}
      </div>
    );

    return (
      <div className='ui card'>
        {!article.described ? (
          <div className='image'>
            <img src={article.thumbnail} alt='Bouquet' />
          </div>
        ) : (
          <div className='ui justified container description'>
            <p>{article.description}</p>
          </div>
        )}
        <div className='content'>
          <Link to={`/article/${article._id}`} className='header' {...user}>
            {article.name}
          </Link>

          <div className='meta caption ArticleSection__caption'>
            <div className='article__icon'>
              <i className='icon sort' /> <strong>Tailles :</strong>{' '}
              {article.size}
            </div>
          </div>
        </div>

        {user.token && user.role === 'admin' && adminActions}
      </div>
    );
  }
}

ArticleSection.propTypes = {
  article: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
    //duration: PropTypes.number.isRequired,
    //featured: PropTypes.bool.isRequired
  }).isRequired,
  deleteArticle: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

export default ArticleSection;
