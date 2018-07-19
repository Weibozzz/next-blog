
/**
 * 获取区间内的一个随机值
 */
export const getRangeRandom = (low, high) =>  Math.floor(Math.random() * (high - low) + low );

/**
 *  随机生成一个0-30度正负值角度
 */
export const get30DegRandom = () =>  Math.floor(Math.random()*60-30);