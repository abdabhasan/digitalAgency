export const parseRequestBody = async (req) => {
  // parse the collected body as JSON
  const chunks = [];
  for await (const chunk of req.body) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString();

  // if the body is empty and return an empty object
  if (!body.trim()) {
    return {};
  }

  const jsonData = JSON.parse(body);

  return jsonData;
};
