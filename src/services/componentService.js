export const searchComponents = async (query) => {
  // const res = await fetch(`http://localhost:5050/api/search/components?q=${encodeURIComponent(query)}`);
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/search/components?q=${encodeURIComponent(query)}`);
  return await res.json();
};

