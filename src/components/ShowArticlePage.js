import React from 'react';
import ArticleSection from './ArticleSection';
import LoadingMsg from './LoadingMsg';
import api from '../api';

class ShowArticlePage extends React.Component {
  state = {
    article: {},
    loading: true
  };

  componentDidMount() {
    api.articles
      .fetchById(this.props.match.params._id)
      .then(article => this.setState({ article, loading: false }));
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <LoadingMsg />
        ) : (
          <ArticleSection article={this.state.article} user={this.props.user} />
        )}
      </div>
    );
  }
}

export default ShowArticlePage;
