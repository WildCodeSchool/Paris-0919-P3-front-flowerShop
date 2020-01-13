import React from 'react';
import PropTypes from 'prop-types';

import ArticleSection from './ArticleSection';
import Message from './Message';
import ModalMail from './ModalMail';

const ArticlesList = ({
  articles,
  toggleFeatured,
  toggleDescription,
  deleteArticle,
  user
}) => (
  <div className='ui container articleList__shop'>
    <h1>FLOWER SHOP / LA BOUTIQUE</h1>
    <p>
      Éclosion vous propose des bouquets frais{' '}
      <strong>renouvelés chaque mercredi</strong> à 9h.
    </p>
    <p>Des bouquets délicats, poétiques, un brin sauvage.</p>
    <div role='list' className='ui bulleted list'>
      <div role='listitem' className='item'>
        3 choix
      </div>
      <div role='listitem' className='item'>
        2 tailles
      </div>
    </div>
    <p>La livraison est incluse dans le prix du bouquet affiché.</p>

    <div className='ui stackable grid three cards'>
      {articles.length === 0 ? (
        <Message header='header' content='message' />
      ) : (
        articles.map(article => (
          <ArticleSection
            article={article}
            key={article._id}
            toggleFeatured={toggleFeatured}
            toggleDescription={toggleDescription}
            deleteArticle={deleteArticle}
            user={user}
          />
        ))
      )}
    </div>

    <h3 className='articleList__ask'>Vous avez une demande particulière ?</h3>
    <div className='articleList__contact'>
      <ModalMail />
    </div>
  </div>
);

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  toggleDescription: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

ArticlesList.defaultProps = {
  articles: []
};

export default ArticlesList;
