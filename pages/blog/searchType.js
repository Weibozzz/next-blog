const typeArr = ['title', 'article', 'handSearch'];
export const getType = (type, searchType) => {
  if (type === 'handSearch') {
    return searchType;
  }
  if (type === '全部文章') {
    return 'all';
  }
  return type;
}
export const isHighLightAll = (type) => {
  return type === 'all';
}
export const tagHighLight = (type) => {
  if(!type.startsWith('timeRange') && typeArr.indexOf(type) === -1){
    return type;
  }
  return false;
}
export const getTimeIndex = (type) => {
  if (!type.startsWith('timeRange')) {
    return -1;
  }
}
