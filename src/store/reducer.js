// 笔记本
// state： 整个store存储的数据

const defaultState = {
  tags: [],
  list: [],
  pageSize: 4,
  totalPage: 0,
  num: 1
}

// state: 上一次存储的数据
// reducer 可以接收state 但是不能修改state
export default (state = defaultState, action) => {
  // 深拷贝
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'get_article_data') {
    newState.list = action.data
    newState.totalPage = action.totalPage
    return newState
  }
  if (action.type === 'get_tags_data') {
    newState.tags = action.data
    return newState
  }
  return state
}