import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback';
import FormInlineMessage from './FormInlineMessage';

const initialData = {
  name: '',
  description: '',
  size: '',
  articleType: '0',
  thumbnail: ''
};

class ArticleForm extends Component {
  state = {
    data: initialData,
    errors: {},
    loading: false,
    redirect: false
  };

  componentDidMount() {
    if (this.props.article._id) {
      this.setState({ data: this.props.article });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.article._id &&
      nextProps.article._id !== this.state.data._id
    ) {
      this.setState({ data: nextProps.article });
    }
    if (!nextProps.article._id) {
      this.setState({ data: initialData });
    }
  }

  // Pas une arrow fonction parce qu'on n'aura pas besoin d'accéder à cette variable ici
  validate(data) {
    const errors = {};

    if (!data.name) errors.name = 'Champ requis';
    if (!data.description) errors.description = 'Champ requis';
    if (!data.size) errors.size = 'Champ requis';
    if (!data.articleType) errors.articleType = 'Champ requis';
    if (!data.thumbnail) errors.thumbnail = 'Champ requis';
    return errors;
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = {};
    this.setState({ errors });

    // Check si l'objet est vide, pas d'erreur donc les datas sont valides
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  handleChange = e =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]:
          e.target.type === 'number'
            ? parseInt(e.target.value, 10)
            : e.target.value
      }
    });

  render() {
    const { data, errors, loading } = this.state;
    const formClassNames = loading ? 'ui form loading' : 'ui form';
    return (
      <form className={formClassNames} onSubmit={this.handleSubmit}>
        <div className='ui grid ArticleForm__container'>
          <div className='twelve wide column'>
            <div className={errors.name ? 'field error' : 'field'}>
              <label htmlFor='name'>Nom du produit</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Nom du produit'
                value={data.name}
                onChange={this.handleChange}
              />
              <FormInlineMessage content={errors.name} type='error' />
            </div>

            <div className={errors.description ? 'field error' : 'field'}>
              <label htmlFor='description'>Description du produit</label>
              <textarea
                type='text'
                id='description'
                name='description'
                placeholder='Description du produit'
                value={data.description}
                onChange={this.handleChange}
              />
              <FormInlineMessage content={errors.description} type='error' />
            </div>
          </div>

          <div className='four wide column'>
            <ReactImageFallback
              src={data.thumbnail}
              fallbackImage='http://via.placeholder.com/250x250'
              alt='Thumbnail'
              className='ui image'
            />
          </div>
        </div>

        <div className={errors.thumbnail ? 'field error' : 'field'}>
          <label htmlFor='thumbnail'>Image</label>
          <input
            type='text'
            id='thumbnail'
            name='thumbnail'
            placeholder='Image URL'
            value={data.thumbnail}
            onChange={this.handleChange}
          />
          <FormInlineMessage content={errors.thumbnail} type='error' />
        </div>

        <div className='two fields'>
          <div className={errors.size ? 'field error' : 'field'}>
            <label htmlFor='size'>Taille</label>
            <input
              type='text'
              id='size'
              name='size'
              value={data.size}
              onChange={this.handleChange}
            />
            <FormInlineMessage content={errors.size} type='error' />
          </div>
        </div>

        <div className={errors.articleType ? 'field error' : 'field'}>
          <label>Type de produit</label>
          <select
            name='articleType'
            value={this.state.articleType}
            onChange={this.handleChange}
            className='ui dropdown'
          >
            <option value=''>Choisir un type</option>
            {this.props.articleTypes.map(articleType => (
              <option value={articleType._id} key={articleType._id}>
                {articleType.name}
              </option>
            ))}
          </select>
          <FormInlineMessage content={errors.articleType} type='error' />
        </div>

        <div className='ui fluid buttons'>
          <button className='ui primary button' type='submit'>
            {this.props.editPath}
          </button>
          <div className='or' data-text='ou'></div>
          <Link to='/articles' className='ui button'>
            Annuler
          </Link>
        </div>
      </form>
    );
  }
}

ArticleForm.propTypes = {
  articleTypes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  submit: PropTypes.func.isRequired,
  article: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    size: PropTypes.string,
    featured: PropTypes.bool
  }).isRequired
};

ArticleForm.defaultProps = {
  articleTypes: []
};

export default ArticleForm;
