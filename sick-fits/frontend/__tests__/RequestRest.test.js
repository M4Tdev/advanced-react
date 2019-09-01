import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import RequestReset, { REQUEST_RESET_MUTATION } from '../components/RequestReset';

const mocks = [
  {
    request: {
      query: REQUEST_RESET_MUTATION,
      variables: { email: 'mateuszek@gmail.com' },
    },
    result: {
      data: { requestReset: { message: 'success', __typename: 'message' } },
    },
  },
];
