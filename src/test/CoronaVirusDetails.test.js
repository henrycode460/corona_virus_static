import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import CoronaVirusDetails from '../Components/CoronaVirus';
import store from '../Redux/Store';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <CoronaVirusDetails />
      </Provider>,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});