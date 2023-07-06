export const generatePropertyInfo = async (promptData) => {
  const response = await fetch(
    `${import.meta.env.VITE_REACT_API_URL}/openai/generateTextAndImage`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(promptData),
    }
  );
  const data = await response.json();
  return data;
};

export const fetchProducts = async () => {
  const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/properties`);
  const data = await response.json();
  return data;
};
