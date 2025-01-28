import { useState } from 'react'

function App() {

  return (
    <>
      <div>
        <ToggleMessage/>

        </div>
    </>
  )
}
function ToggleMessage(){

  let [isvisible,setvisible]=useState(false);

  function toggle(){
    setvisible(!isvisible);
  }

  return <div>
    <button onClick={toggle}>Toggle message</button>

    {isvisible ?<p>This is the Toggle message</p>:<div></div>}

  </div>

}
export default App
