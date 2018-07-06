import React,{Component} from 'react';
import Lowlight from 'react-lowlight';
import shallowCompare from 'react-addons-shallow-compare';
import js from 'highlight.js/lib/languages/javascript';



Lowlight.registerLanguage('js', js);

class CodeBlock extends Component {
  constructor(props) {
    super(props);

  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  render(){
    return (
      <Lowlight
        language={this.props.language || 'js'}
        value={this.props.literal}
        inline={this.props.inline}
      />
    );
  }
}
/*const CodeBlock = React.createClass({
  displayName: 'CodeBlock',

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  },

  render: function() {
    return (
      <Lowlight
        language={this.props.language || 'js'}
        value={this.props.literal}
        inline={this.props.inline}
      />
    );
  }
});*/

export default CodeBlock;