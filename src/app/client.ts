import { ApolloClient, createNetworkInterface } from 'apollo-client';

// replace `__SIMPLE_API_ENDPOINT__` with the your custom endpoint,
// e.g. https://api.graph.cool/simple/v1/abc123def456hij789klm123n
const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj0p9c06ah99n01023k6hbvvh' })

// The x-graphcool-source header is to let the server know that the example app has started.
// (Not necessary for normal projects)
networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      // Create the header object if needed.
      req.options.headers = {};
    }
    req.options.headers['x-graphcool-source'] = 'example:angular-apollo-todo';
    next();
  },
}]);

const client = new ApolloClient({ networkInterface });

export function provideClient(): ApolloClient {
  return client;
}