import MockAdapter from 'axios-mock-adapter';
import SocialPost from './../../../__mocks__/SocialPost'
import { getPostRequest } from './../../../apis/SocialPostApi'
import axios from 'axios';

describe('Unit Test SocialPost Api request ', () => {
  let mockAdapter: MockAdapter

  beforeAll(() => {
    mockAdapter = new MockAdapter(axios)
  })

  afterEach(() => {
    mockAdapter.reset()
  })

  test('#1 getPostResquest when call is success', async () => {
    SocialPost(mockAdapter, 'http://api.massrelevance.com/MassRelDemo/kindle.json')

    const result = await getPostRequest({ url: 'http://api.massrelevance.com/MassRelDemo/kindle.json' })

    const request = mockAdapter.history.get[0]
    const expected = {
      post: [
        {
          id: '1',
          created_at: '"Fri Dec 29 19:01:00 +0000 2017"',
          text: `Tempor esse excepteur veniam veniam fugiat qui cillum non. Ut ad sint ex amet ad eiusmod veniam. Enim ipsum eu ea ea Lorem non laborum non ullamco. Cupidatat quis aliqua deserunt fugiat duis sint fugiat et deserunt aliquip ea aute. Fugiat nisi officia sunt commodo laboris nisi adipisicing magna aliquip aute sint proident. Culpa mollit dolor fugiat ex. Ad ex sit commodo do duis elit pariatur occaecat.
Sunt aliquip pariatur mollit incididunt minim culpa culpa pariatur ullamco cillum adipisicing veniam fugiat.Cillum aliqua labore cillum commodo occaecat velit.Ea ullamco fugiat laborum qui sit consequat enim reprehenderit proident laborum irure elit mollit ullamco.Ut ex magna tempor minim id irure nostrud ex reprehenderit ex nisi adipisicing.Incididunt minim non duis et eiusmod consequat.Voluptate pariatur irure ipsum officia esse enim deserunt ipsum labore sit cupidatat dolore veniam veniam.`,
          user: {
            id: '1',
            name: 'Manuel'
          }
        }
      ]
    }

    expect(request.url).toEqual('http://api.massrelevance.com/MassRelDemo/kindle.json')
    expect(result).toEqual(expected)
  });

  test('#2 getPostResquest when call failed', async () => {
    mockAdapter.onGet('http://api.massrelevance.com/MassRelDemo/kindle.json').networkError()

    let result
    try {
      result = await getPostRequest({ url: 'http://api.massrelevance.com/MassRelDemo/kindle.json' })
    } catch (error) {
      result = error.message
    }

    const request = mockAdapter.history.get[0]
    const expected = 'Network Error'

    expect(request.url).toEqual('http://api.massrelevance.com/MassRelDemo/kindle.json')
    expect(result).toEqual(expected)
  });
});