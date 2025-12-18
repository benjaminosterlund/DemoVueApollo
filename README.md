# DemoVueApollo

A student demo project showcasing how to use **Vue Apollo** with Vue 3 to query GraphQL APIs. This project demonstrates both the **Options API** and **Composition API** approaches for integrating Apollo Client with Vue.

## 📚 What This Demo Covers

This demo uses the [JSONPlaceholder GraphQL API](https://graphqlzero.almansi.me/) to fetch posts and demonstrates:

- **Options API approach** with `@vue/apollo-option`
- **Composition API approach** with `@vue/apollo-composable`
- Setting up Apollo Client configuration
- Querying data with `gql` and `useQuery`
- Handling loading states and displaying data

## 🎓 Learning Objectives

Demo how to:
1. Set up Vue Apollo in a Vue 3 + Vite project
2. Configure an Apollo Client to connect to a GraphQL endpoint
3. Write GraphQL queries using the `gql` template literal tag
4. Use Vue Apollo with both Options API and Composition API
5. Handle reactive data, loading states, and errors from GraphQL queries

## 📁 Project Structure

- `src/client.js` - Apollo Client configuration
- `src/views/VueApolloOptionsView.vue` - Example using Options API
- `src/views/VueApolloCompositionView.vue` - Example using Composition API

## 🛠️ Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19.0+ or v22.12.0+)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:

```sh
npm install
```

### Run the Development Server

```sh
npm run dev
```

Open your browser and navigate to the local server URL (typically `http://localhost:5173`)


## 📖 Resources

- [Vue Apollo Documentation](https://v4.apollo.vuejs.org/)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Vue 3 Documentation](https://vuejs.org/)
- [GraphQLZero](https://graphqlzero.almansi.me/)

## 📝 Notes for Students

- Explore both view files to see the differences between [@vue/apollo-option](https://www.npmjs.com/package/@vue/apollo-option) and [@vue/apollo-composable](https://www.npmjs.com/package/@vue/apollo-composable)
- Read documentation, try modifying and play around
