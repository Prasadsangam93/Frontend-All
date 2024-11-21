
let heading = React.createElement(
'h1',{
    id:'bg-blue'
},
"this is React js demo heading tag"
)
let para= React.createElement(
    'p',{

    },
    " this is React paragraph1 tag"
)
let wrapper= React.createElement(
    'div',{

    },
    [heading,para]

)
let ele= document.getElementById('root');
let root =ReactDOM.createRoot(ele);
root.render(wrapper)