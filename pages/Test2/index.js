import React,{Component} from 'react';
import Markdown from 'react-markdown';
import TestComponent from '../../components/TestComponent';
import {style} from 'react-syntax-highlighter/styles/hljs';
// import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBright } from 'react-syntax-highlighter/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';

const input = `
# h1
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

`

class Test2 extends Component {
  constructor() {
    super();

  }
  render(){
    const codeString = '(num) => num + 1';
    return (
      <div>


        <SyntaxHighlighter language='javascript' style={dark}>{input}</SyntaxHighlighter>;
      </div>
    );
  }
}
export default Test2;