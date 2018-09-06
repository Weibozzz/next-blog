export const getMyCommenData = (COMMENT_MOCK_DATA_ORIGIN) => {
  const mapping = { answerId: [] };
  const grande_one = COMMENT_MOCK_DATA_ORIGIN.filter(v => {
    const { answerId = '' } = v;
    if (answerId) {
      mapping[answerId] = [];
    }
    return answerId === '' || answerId == null || answerId === 0;
  });
  COMMENT_MOCK_DATA_ORIGIN.forEach(v => {
    const { answerId = '' } = v;
    if (answerId in mapping) {
      mapping[answerId].push(v);
    }
  });
  /* eslint no-param-reassign: "error" */
  return grande_one.map(v => {
    const { id } = v;
    if (id in mapping) {
      v.answerArr = mapping[id];
    }
    return v;
  });
};
