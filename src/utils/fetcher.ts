export const fetchData = async (url: RequestInfo | URL) => {
  const response = await fetch(url, { cache: "no-cache" });
  const data = await response.json();
  return data;
}
