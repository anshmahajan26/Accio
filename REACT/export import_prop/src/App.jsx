

//import './App.css'
import Card from './Component/Card.jsx'

import MyName from './Component/MyName.jsx'
//import Inner from './Component/MyCompo'

const products=[
  {
    title:"laptop",
    description:"this is my laptop"
  },
  {
    title:"mobile",
    description:"this is my mobile"
  }
];

function App() {


  return (
    <>
    <div>
      {
        products.map((item,index)=>(
          <Card 
          title={item.title}
          description={item.description}/>
        ))
      }
    </div>
    
    <MyName name = "OM"/>
    </>
  )
}

export default App


