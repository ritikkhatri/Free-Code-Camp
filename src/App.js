import React from 'react'
import ReactDOM from 'react-dom'
import { Provider ,connect} from 'react-redux'

import { createStore, combineReducers} from 'redux';
import marked from 'marked';
import "./App.sass"


const renderer =  marked.Renderer();
const EDIT ="EDIT"

const reducer = (state=init,action)=>{
  switch (action.type){
    case EDIT:
      return action.text
     default : 
      return state
      
  }
}
const editing = (text) =>{
  return {
    type :EDIT ,
    text : text
  }
}
const init =`# Welcome to my React Markdown Previewer! 

## This is a sub-heading...   
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const mapStateToProps = (state) =>{
  return {
    text :state
  }
}
const mapDispatchToProps =(dispatch) =>{
  return {
    edit : (text)=>{
      dispatch(editing(text))
    }
  }
}
const store = createStore(reducer)
class App extends React.Component{
  handleChange (e){
    this.props.edit(e.target.value)
  }
  render(){
    console.log(this.props.text)
    return (
    <div>
        <h1>Hello Testing </h1> <br />
        <div className="markdownSection">
          <div className="editorWrapper">
            <Header text="Editor" />
        <textarea 
          id = 'editor'
      type ="text"
      onChange ={this.handleChange.bind(this)}
      value={this.props.text}>
      
    </textarea>
          </div>
          <div className="previewWrapper">
            <Header text="Preview" />
       <div id='preview' dangerouslySetInnerHTML={{__html: marked(`${this.props.text}`)}} /> 
        </div> 
        </div>
      </div>
    )
  }
}

const Header = ({text})=>{
  return (
 <div className="Header"> {text}</div>
  )
}
const Container = connect(mapStateToProps, mapDispatchToProps)(App);
class Show extends React.Component {
  render(){
    return(
     <Provider store={store} >
        <Container />
     </Provider>   
    )
  }
}


export default Show