export const getView = (rest={}) => {
  const {date=''} = rest;
  if (date) {
    try {
      const viewListData = JSON.parse(date);
      let { t_view: curView } = viewListData[0];
      let { t_view: yesView } = viewListData[1];
      return { curView, yesView };
    } catch (err) {
      return {};
    }
  }
  return {};
};
