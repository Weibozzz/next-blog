import React,{Component} from 'react';
import ReactMarkdown from 'react-markdown';
import marked from 'marked';
import hljs from 'highlight.js';
import './test.less';

const input = `
## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`
`;
const output = marked(input);

marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value,
});

class Test extends Component {
  constructor() {
    super();

  }
  render(){

    return (
     <div>
       <div dangerouslySetInnerHTML={{ __html: output }} />
     </div>


    );
  }
}
export default Test;