import { createSelector } from 'reselect'

const newsSelector = createSelector(state => state.app.news, news => news || [])

export const newsCount = createSelector(newsSelector,
  (news) => {
    return news.length
  }
)

export const photosSelector = createSelector(newsSelector,
  (news) => {
    return news.filter(
      (article) => !!article.image
    ).map((article) => ({
      src: `https://meduza.io${article.image.large_url}`,
      width: article.image.original_width,
      height: article.image.original_height
    }))
  }
)
