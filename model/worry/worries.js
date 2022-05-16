export function getMockArticleList(baseID = 0, length = 10) {
  const { fetchMockArticleList } = require('./worry');
  return new Array(length)
    .fill(0)
    .map((_, idx) => fetchMockArticleList(idx + baseID));
}

export async function getExplicitArticleList(offset = 0, limit = 10) {
  const { fetchExplicitArticleList } = require('./worry');
  const request = await fetchExplicitArticleList(offset, limit);
  return request.data.results;
}
