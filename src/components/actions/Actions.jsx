import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import axios from "axios";
import Update from "./Update";
import Input from "./Input";
import Add from "./Add";

const Actions = inject("ClientStore")(
  observer((props) => {

    const getActionsData = async () => {
      const tempArray = [];
      const clients = await axios.get(`http://localhost:3000/clients`);

      clients.data.map((c) => {
        tempArray.push({
          id: c._id,
          name: c.name + " " + c.surName,
          owner: c.owner,
        });
      });

      props.ClientStore.setActionData(tempArray);
    };

    useEffect(() => {
      getActionsData();
    }, []);



    return (
      <div id="actions">
        <div id="update-section">
          <div className="action-header">Update</div>
          <Input />
          <Update getActionsData={getActionsData} />  
        </div>
        <hr></hr>
        <div id="add-section">
          <div className="action-header">Add Client</div>
          <Add />
        </div>
      </div>
    );
  })
);

export default Actions;
