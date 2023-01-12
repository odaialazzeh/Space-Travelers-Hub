import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Dragons from '../Pages/DRAGONS';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const dragons = renderer
    .create(
      <Provider store={store}><Dragons /></Provider>,
    )
    .toJSON();
  expect(dragons).toMatchSnapshot();
});
