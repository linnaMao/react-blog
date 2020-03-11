import moment from 'moment'

const formateTime = (time) => {
  return moment(time).format('YYYY-MM-DD')
}

export default formateTime