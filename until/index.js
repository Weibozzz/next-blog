
let format = require('date-format');
export const updateHtml=str=>{
    return str.replace(/'|"|:|\.|\[|\]|\\/g,function(str){

        if(str==='"'){
            return '@quot;'
        }else if(str==="'") {
            return '@apos;'
        }else if(str===':') {
            return  '&#58;'
        }else if(str==='[') {
            return  '&#91;'
        }else if(str==='[') {
            return  '&#93;'
        }else if(str==='\\') {//自定义的 找不到
            return  '&#43;'
        }else {
            return '&#183;'
        }
    });
}
export const spaceAdd = str=>str&&str.replace(/\+/g,'&nbsp;')
export const getPathName = props=>props.location&&props.location.pathname&&props.location.pathname.substring(1);
export const NbspToSpace = str=>str&&str.replace(/&nbsp;/g,'　')
export const formatTime = time=>{
    let zh = ["日","一","二","三","四","五","六"];
    let date = new Date(time*1000);
    return format.asString('yyyy-MM-dd hh:mm', date)+' 星期'+zh[date.getDay()]
}
export const getArticleInfo = detailArr=>{
    let {...rest}=detailArr&&detailArr[0]?detailArr[0]:{};
    /*{
        content,
            createTime,
            id,
            img,
            lastModify,
            like,
            modifyCount,
            recommend,
            short,
            title,
            type,
            url,
            user,
            visitor,
            week
    }*/
    return rest
}
export const OldTime = 1526625828;  // 2018-05-18 14:43 星期五
export const getHtml=(str,newTime)=>{
    if(OldTime>newTime){ //这是曾经的文章
        return str? str
            :null
    }else {
        return str? str.replace(/@quot;|@apos;/g,function(str){
                if(str==='@quot;'){
                    return '"'
                }else if(str==="@apos;") {
                    return "'"
                }
            })
            :null
    }
}