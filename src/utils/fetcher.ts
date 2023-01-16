export const fetchData = async (url: RequestInfo | URL) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
