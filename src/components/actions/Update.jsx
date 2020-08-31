import React from "react";
import { inject, observer } from "mobx-react";
const axios = require("axios");

const Update = inject("ClientStore")(
  observer((props) => {
    const {
      actionData,
      clientId,
      setUpdateInputs,
      updateInputs,
      setActionData
    } = props.ClientStore;

    const clientAction = async (e) => {
      const prop = e.target.id;
      const value = updateInputs[prop];
      console.log(prop, value, clientId);
      await axios.put("http://localhost:3000/update", {
        id: clientId,
        prop: prop,
        value: value
      });   
      await props.getActionsData()
      
    };

    return (
      <div className="actions-section-container">
        <div className="actions-update-row">
          <label htmlFor="">Transfer ownership to</label>

          <input
            value={updateInputs.owner}
            name="owner"
            list="owners"
            className="actions-update-input"
            placeholder="Owner"
            onChange={setUpdateInputs}
          ></input>
          <datalist id="owners">
            <option value="" disabled selected hidden>
              Owners
            </option>
            {actionData.map((c) => (
              <option value={c.owner} />
            ))}
          </datalist>

          <span id="owner" className="action-button" onClick={clientAction}>
            TRANSFER
          </span>
        </div>
        <div className="actions-update-row">
          <label htmlFor="">Send email</label>
          <input
            name="emailType"
            value={updateInputs.emailType}
            list="email"
            className="actions-update-input"
            placeholder="Email type"
            onChange={setUpdateInputs}
          ></input>
          <datalist id="email">
            <option value="A" />
            <option value="B" />
            <option value="C" />
            <option value="D" />
          </datalist>
          <span id="emailType" onClick={clientAction} className="action-button">
            SEND
          </span>
        </div>
        <div className="actions-update-row">
          <label htmlFor="">Declare Sale</label>
          <span></span>
          <span id="declare" onClick={clientAction} className="action-button">
            DECLARE
          </span>
        </div>
      </div>
    );
  })
);

export default Update;
