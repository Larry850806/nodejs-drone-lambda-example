exports.handler = async function(event, context) {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello World Demo'),
  }
  return response
}
