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

export const savePropertyToDb = async (propertyData) => {
  const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/properties`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(propertyData),
  });
  const data = await response.json();
  return data;
}