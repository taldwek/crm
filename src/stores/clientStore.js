import { observable, computed, action } from "mobx";
import { act } from "react-dom/test-utils";

export class ClientStore {
  @observable clientList = [];
  @observable clientListAll = [];
  @observable pageNum = 1;
  @observable TotalPages = 1;
  @observable clientPopup = {};
  @observable actionData = [];
  @observable clientId = null;
  @observable actionsInput = "";
  @observable updateInputs = {
    owner: "",
    emailType: "",
  };

  @action setUpdateInputs = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.updateInputs[name] = value;
  };

  @action setClientId = (name) => {
    let client = this.actionData.find((c) => c.name === name);
    this.clientId = client && client.id;
  };

  @action setActionsInput = (value) => {
    this.actionsInput = value;
  };

   @computed get actionsDataOwners() {
    const owners = [];
    this.actionData.forEach((c) => {
      owners.push(c.owner);
    });
    return owners;
  }

  @computed get actionsDataNames() {
    const clientNames = [];
    this.clientList.forEach((c) => {
      clientNames.push(c.name + " " + c.surName);
    });
    return clientNames;
  }

  @action setActionData = (clients) => {
      console.log(clients)
    this.actionData = [...clients];
  };

  @action setClientList = (clients) => {
    this.clientList = [...clients];
  };

  @action setClientListAll = (clients) => {
    this.clientList = [...clients];
  };

  @action setTotalPages = (num) => {
    this.totalPages = num;
  };

  @action setClientPopup = async (id) => {
    if (id) {
      const client = this.clientList.find((c) => c._id === id);
      this.clientPopup = { ...client };
    } else {
      this.clientPopup = {};
    }
  };

  @action setInputUpdate = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.clientPopup[name] = value;
  };

  @action setPageNum = (num) => {
    this.pageNum = num;
  };
}
