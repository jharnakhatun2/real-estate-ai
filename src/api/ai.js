export const generatePropertyInfo = async (promptData) => {
  const response = await fetch('http://localhost:5000/openai/generateTextAndImage', {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(promptData),
  });
  const data = await response.json();
  return data;
};