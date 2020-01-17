import React from 'react';

import ModalMail from './ModalMail';

class ArticleWedding extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className='container wedding'>
          <h1 className='articles__title'>MARIAGES</h1>
          <div className='ui equal width stackable grid'>
            <div className='stretched row'>
              <div className='six wide column'>
                <img
                  src='https://images.squarespace-cdn.com/content/v1/520be427e4b059321a30b21f/1474739688459-IL7CBQ4CW97HPBHNR1PC/ke17ZwdGBToddI8pDm48kBJuNgCxh-nc2WqSHSzBRqZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URLBDwJ6yxG3fhfBog-AypWrygs964GoKHiYjO7LbmKn6z9MUY0yd2njC85rKH5I0g/IMG_6138.JPG'
                  alt='Mariage'
                  className='ui image articles__img'
                />
              </div>
              <div className='column wedding'>
                <div className='wedding-flex'>
                  <div className='five wide column'>
                    <div className='ui segment'>
                      Alors comme ça vous vous mariez prochainement! Toutes nos
                      félicitations!
                    </div>
                  </div>
                  <div className='five wide column'>
                    <div className='ui segment'>
                      Nous nous ferons un plaisir de sublimer cette magnifique
                      journée remplie d’émotion et de partage.
                    </div>
                  </div>
                </div>
                <div className='ten wide column middle'>
                  <div className='ui segment middle'>
                    Un mariage élégant, champêtre ou moderne, nous vous
                    proposons une décoration sur mesure. Nous vous accompagnons
                    dans la scénographie et la décoration florale de votre
                    mariage.
                  </div>
                </div>
                <div className='ten wide column'>
                  <ModalMail text='Faites nous part de vos envies !' />
                </div>
              </div>
            </div>
          </div>
          <div className='ui four column stackable grid bouquets'>
            <div className='column'>
              <img
                className='ui image articles__img'
                src='https://images.squarespace-cdn.com/content/v1/57fe73e8d2b857dc0c054038/1554621897471-R084YK1KI2BATPVVQHQD/ke17ZwdGBToddI8pDm48kMSMspqi29JcQ05LSM5hkzJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbSTBh6IcLKvNH_DpUeQbKUqJH7P7IyYZ1WbS_9FACYx6kSrJ3a5Sgz-k5JEO5jghA/London+wedding+flowers?format=750w'
                alt='Bouquet de mariée'
              />
            </div>
            <div className='column'>
              <img
                className='ui image articles__img'
                src='https://images.squarespace-cdn.com/content/v1/57fe73e8d2b857dc0c054038/1554621931405-XAX4TIQ337CHHPZZ5RU4/ke17ZwdGBToddI8pDm48kMSMspqi29JcQ05LSM5hkzJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbSTBh6IcLKvNH_DpUeQbKUqJH7P7IyYZ1WbS_9FACYx6kSrJ3a5Sgz-k5JEO5jghA/London+wedding+flowers?format=750w'
                alt='Bouquet de mariée'
              />
            </div>
            <div className='column'>
              <img
                className='ui image articles__img'
                src='https://images.squarespace-cdn.com/content/v1/57fe73e8d2b857dc0c054038/1554621863822-Z9OT14VFNP2IIKV02ZX0/ke17ZwdGBToddI8pDm48kMSMspqi29JcQ05LSM5hkzJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbSTBh6IcLKvNH_DpUeQbKUqJH7P7IyYZ1WbS_9FACYx6kSrJ3a5Sgz-k5JEO5jghA/London+wedding+floristry?format=750w'
                alt='Bouquet de mariée'
              />
            </div>
            <div className='column'>
              <img
                className='ui image articles__img'
                src='https://images.squarespace-cdn.com/content/v1/57fe73e8d2b857dc0c054038/1554621807903-42T4EU4F1O9XUVJ0XAHM/ke17ZwdGBToddI8pDm48kMSMspqi29JcQ05LSM5hkzJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbSTBh6IcLKvNH_DpUeQbKUqJH7P7IyYZ1WbS_9FACYx6kSrJ3a5Sgz-k5JEO5jghA/London+wedding+floristry?format=750w'
                alt='Bouquet de mariée'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleWedding;
