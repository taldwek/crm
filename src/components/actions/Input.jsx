import React, { useEffect } from "react";
import { inject, observer, PropTypes } from "mobx-react"
const Input = inject("ClientStore")(

    observer((props) => {

        const { setClientId, setActionsInput, actionData } = props.ClientStore      


        const setInput = (e) =>{
            let { value } = e.target
            setActionsInput(value)
            setClientId(value)    
            }

  return (


<div className="actions-input">
        <label htmlFor="">Client: </label>
        <input onChange={setInput} value={props.actionsInput} list="clients" name="clients" id="clientsInput" placeholder="Client Name"></input>
        <datalist id="clients">
            {actionData.map(c => <option  value={c.name} />)}
        </datalist>
    </div>
  );
}))

export default Input;
