export default {
  ...require('./Foods').default,
  ...require('./Stories').default,
  ...require('./StoryContent').default,
  ...require('./Blog').default,
  ...require('./User').default,
}