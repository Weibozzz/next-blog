import React,{Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Layout, Menu, Breadcrumb, Row, Col,
  List, Avatar, Icon, Pagination, Alert,
  Input, Button, Radio, Tooltip, Spin
} from 'antd'
import marked from 'marked';
import hljs from 'highlight.js';
// import './t.css';
import  './test.less';
const {Content} = Layout;

const input = `

## js

\`\`\`js
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="$\{cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export  $initHighlight;

\`\`\`
## hljs

\`\`\` json
[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]
\`\`\`
\`\`\` css
@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}
\`\`\`
\`\`\` html
<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>
\`\`\`

\`\`\` bash

cnpm i vue -g
npm run build
npm start
npm run dev


\`\`\`


`;

marked.setOptions({
  highlight: (code,js) => hljs.highlightAuto(code).value,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

const output = marked(input);
class Test extends Component {
  constructor() {
    super();

  }
  render(){

    return (
     <div>
       <Layout>
         <Content style={{padding: '0 50px'}}>
           <div style={{background: '#fff', padding: 24, minHeight: 380}}>

             <div dangerouslySetInnerHTML={{ __html: output }} />

           </div>
         </Content>
       </Layout>
     </div>


    );
  }
}
export default Test;