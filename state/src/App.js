import React,{useState} from 'react';
import "./styles.css" ;


function App(){


    let [score, setScore] = useState(0);
    return( 
        <div className="div1">
         <h1>
            Counter Application
        </h1>
        
           <button className="btn1" onClick={()=>(score>=25)?setScore(25):setScore(score+1)}>Increment</button>
           <button  onClick={()=>(score>0)?setScore(score-1):""}>Decrement</button>
           <button onClick={()=>{setScore(0)}}>Reset</button>
           <h3> 
         The value of score is : {score}
         </h3>
        </div>
    );

}
//setScore(score+1)

export default App;