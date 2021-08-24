import { GraphQLClient } from 'graphql-request';

const API_ENDPOINT = 'https://graphql-pokeapi.graphcdn.app';

const client = new GraphQLClient(API_ENDPOINT);

export default client;
