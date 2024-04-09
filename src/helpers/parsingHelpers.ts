export const parseRequestBody = async (req) => {
  // parse the collected body as JSON
  const chunks = [];
  for await (const chunk of req.body) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString();

  const jsonData = JSON.parse(body);

  return jsonData;
};
