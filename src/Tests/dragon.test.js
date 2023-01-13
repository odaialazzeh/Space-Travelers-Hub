import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Dragon from '../component/dragon';

test('renders correctly', () => {
  const dragon = {
    id: 'dragon1',
    dragonsName: 'Dragon 1',
    description: 'Dragon is a reusable spacecraft',
    flickr_images: 'img',
  };

  const { getByText } = render(
    <Provider store={store}>
      <Dragon
        key={dragon.id}
        dragonsName={dragon.name}
        imgURL={dragon.flickr_images}
        description={dragon.description}
        type={dragon.type}
        reserved={!!dragon.reserved}
        id={dragon.id}
      />
    </Provider>,
  );

  expect(getByText(/Reserve/i)).toBeInTheDocument();
});
