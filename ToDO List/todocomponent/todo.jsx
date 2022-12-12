import React from 'react'
import { useState } from 'react';
import todo from "../Images/todo.svg";


const Todo = () => {

    // CREATE A HOOK
    const [inputData,setInputData] = useState("");
    const [items, setItems] = useState([]);
    //add items
    const addItems = () =>{

        if(!inputData)
        {
            // <p>Do not add items.</p>
        }
        else{
           setItems([...items, inputData]);
           setInputData('')
       }
    }

     //dlete element
    const deleteItem = (id) =>{
         console.log(id);
         const updateditems = items.filter((elem,inde) => {
               return inde != id;
           

         });
         setItems(updateditems);
    }


    //Remove All
    const removeAll = ()  =>{

      setItems([]);
    }

  return (
     <>  
         <div className='main-div'>
           <div className='child-div'>

               <figure>
                  <img src={todo} alt=" todologo"/>
                  <figcaption>Add Your List Here 🤞 </figcaption>
               </figure>


               <div className='addItems'>
                  <input type="test" placeholder=' ✍ Add Items...' 
                    value={inputData}
                    onChange = {(e) => setInputData(e.target.value)}    
                    />
                  <i className='fa fa-plus add-btn'title="add Items" onClick={addItems}> </i>  
                </div>

                <div className='showItems'>

                 {
                    items.map((elem, inde) => 
                     {
                      
                      return(  
                             <div className="eachItem" key={inde}>
                              <h3> {elem} </h3>
                              <i className="far fa-trash-alt add-btn" title="Delete Items" onClick= {() => deleteItem(inde)}> </i>
                             </div>
                            )
                     })
                 }
                  
                </div>

                {/* clear all button */}

                <div className='showItems'>
                  <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>   <span> CHECK LIST </span></button>
                </div>
           </div>
         </div>
     </>
  );
  
}


export default Todo;