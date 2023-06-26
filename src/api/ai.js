export const generatePropertyInfo = async (promptData) => {
  const response = await fetch(
    'http://real-estate-ai-server.vercel.app/openai/generateTextAndImage',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(promptData),
    }
  );
  const data = await response.json();
  return data;
};
