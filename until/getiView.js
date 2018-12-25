export const getView = (rest = {}) => {
  const { date = '', history = '' } = rest;
  if (date) {
    try {
      const viewListData = JSON.parse(date);
      const his = JSON.parse(history)[0].history;
      let { t_view: curView } = viewListData[0];
      let { t_view: yesView } = viewListData[1];
      return { curView, yesView, his };
    } catch (err) {
      return {};
    }
  }
  return {};
};
