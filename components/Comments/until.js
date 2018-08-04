export const getMyCommenData=(COMMENT_MOCK_DATA_ORIGIN)=> {
  let mapping = {answerId: []}
  let grande_one = COMMENT_MOCK_DATA_ORIGIN.filter(v => {
    let {answerId = ''} = v;
    if (answerId) {
      mapping[answerId] = []
    }
    return answerId === '' || answerId==null||answerId===0;
  })
  COMMENT_MOCK_DATA_ORIGIN.forEach(v => {
    let {answerId = ''} = v;
    if (answerId in mapping) {
      mapping[answerId].push(v)
    }
  })
  return grande_one.map(v => {
    let {id} = v;
    if (id in mapping) {
      v.answerArr = mapping[id]
    }
    return v;
  });
}