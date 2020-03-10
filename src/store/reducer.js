// 笔记本
// state： 整个store存储的数据

const defaultState = {
  tags: [
    {
      id: 0,
      name: "前端"
    },
    {
      id: 1,
      name: "JavaScript"
    },
    {
      id: 2,
      name: "webpack"
    },
    {
      id: 3,
      name: "node"
    }
  ]
}

// state: 上一次存储的数据
// reducer 可以接收state 但是不能修改state
export default (state = defaultState, action) => {
  // 深拷贝
  const newState = JSON.parse(JSON.stringify(state))
  
  return state
}