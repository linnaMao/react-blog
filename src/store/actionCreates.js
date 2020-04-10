import axios from 'axios'

const requestData = (type, data, totalPage) => ({
  type,
  data,
  totalPage
})

export const getArticle = () => {
  return (dispatch) => {
    axios.get('/api/articleData.json').then((res) => {
      const list = res.data.data
      dispatch(requestData('get_article_data', list, list.length))
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

export const getPrevPage = (num, pageSize, totalPage) => {
  if (num <= 1 && totalPage <= pageSize) {
    return
  }
  return {
    type: 'get_prev_num',
    num: num - 1
  }
}