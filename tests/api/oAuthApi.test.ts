import 'jest';

import { OAuthApi } from '../../api/apis';
import * as m from '../../model/models';
import {
  getFixtureData,
  setExpectedResponse,
  diffJson,
  toObj,
} from '../test_utils';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

describe('OAuthApiTest', () => {
  let mock: typeof MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  const api = new OAuthApi();
  api.rootFilePath = __dirname + '/../../oas/test_fixtures';
  api.instantiateFiles = true;

  it('testTokenGenerate', () => {
    const requestClass = 'OAuthTokenGenerateRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'OAuthTokenResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = toObj<m.OAuthTokenGenerateRequest>(requestData, requestClass);

    api.oauthTokenGenerate(obj).then(response => {
      const diff = diffJson(
        response.body,
        toObj<typeof response.body>(responseData, responseClass),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    });
  });

  it('testTokenRefresh', () => {
    const requestClass = 'OAuthTokenRefreshRequest';
    const requestData = getFixtureData(requestClass)['default'];

    const responseClass = 'OAuthTokenResponse';
    const responseData = getFixtureData(responseClass)['default'];

    setExpectedResponse(mock, responseData, 200);

    const obj = toObj<m.OAuthTokenRefreshRequest>(requestData, requestClass);

    api.oauthTokenRefresh(obj).then(response => {
      const diff = diffJson(
        response.body,
        toObj<typeof response.body>(responseData, responseClass),
      );

      expect(response.body.constructor.name).toBe(responseClass);
      expect(diff).toBeFalsy();
    });
  });
});
