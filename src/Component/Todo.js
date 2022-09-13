import React, { useEffect, useState } from 'react'
import '../Style/Todo.css'
import {AiOutlinePlus} from  'react-icons/ai'



const LocalItem = ()=>{


const list = localStorage.getItem('lists')

console.log(list)

if(list){

return JSON.parse(localStorage.getItem('lists'))

}else{
return [];

}
}



const Todo = () => {
 const [InputData , SetinputData]= useState('')
const [items ,setitems] = useState(LocalItem())


const addItem =()=>{

if(!InputData){


}else{
setitems([...items , InputData])
console.log(InputData)
SetinputData('')
}

}


const deleteItems = (id)=>{

const updateItems = items.filter((elem,ind)=>{
return ind !== id


})
setitems(updateItems)  
}

const Remove = ()=>{

setitems([  ])

}










useEffect(()=>{

localStorage.setItem('lists',JSON.stringify(items))




},[items])  




 return (
  <>    <div className='main-div'>

<h1>Todo In React </h1>
<div className='dataContainer'>

</div>
<div className='inputContainer'>
  
 
<input placeholder='add... ' value={InputData} onChange={(e) => SetinputData(e.target.value)} /> 

<button onClick={addItem}>add item</button>
</div>

{


  items.map((e,i)=>{
return(<div className='Item'> <h3>{e}</h3> 
<button onClick={()=>deleteItems(i)}>Delete </button>
</div>
)
 })
}

<div><button onClick={Remove} style={{marginTop:'33px', width:'12rem'}}>Remove All</button>
    </div>

</div>
    </>

  )
}

export default Todo