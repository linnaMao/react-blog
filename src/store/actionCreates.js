import axios from 'axios'

const requestData = (type, data) => ({
  type,
  data
})

export const getArticle = () => {
  return (dispatch) => {
    axios.get('/api/articleData.json').then((res) => {
      const list = res.data.data
      dispatch(requestData('get_article_data', list))
    })
  }
}

export const getTags = () => {
  return (dispatch) => {
    axios.get('/api/tagData.json').then(res => {
      const tags = res.data.data
      dispatch(requestData('get_tags_data', tags))
    })
  }
}