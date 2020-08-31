import React, { useEffect } from "react";
import RowHeader from "./RowHeader";
import ClientRow from "./ClientRow";
import { inject, observer } from "mobx-react";
import axios from "axios";

const Clients = inject("ClientStore")(
  observer((props) => {

    useEffect(() => {

    })

    let {
      pageNum,
      totalPages,
      setPageNum,
      setClientPopup,
      clientPopup,
      setInputUpdate,
    } = props.ClientStore;

    const movePage = (e) => {
      if (e.target.name === "next") {
        let updatedPageNum = pageNum + 1;
        pageNum < totalPages && setPageNum(updatedPageNum);
      } else {
        let updatedPageNum = pageNum - 1;
        pageNum > 1 && setPageNum(updatedPageNum);
      }
    };

    useEffect(() => {
      const getTotalPageNum = async () => {
        let allClients = await axios.get(`http://localhost:3000/clients`);
        props.ClientStore.setTotalPages(Math.ceil(allClients.data.length / 20));
      };
      getTotalPageNum();
    }, []);

    const getClients = async () => {  
      let clients = await axios.get(
        `http://localhost:3000/clients?pageNo=${pageNum}&size=20`
      );
      props.ClientStore.setClientList(clients.data);

    };

    useEffect(() => {
      getClients();
    }, [pageNum]);

    const saveChanges = async () => {
      // const clientId = clientPopup._id;
      await axios.put(`http://localhost:3000/client/`, clientPopup);
      clientPopupToggle()
      getClients();
    };

    const clientPopupToggle = (id) => {
      typeof id === "string" ? setClientPopup(id) : setClientPopup(null);
    };

    return (
      <div id="clients">
        <div id="clients-filter">
          <input
            className="filter-field"
            placeholder="Search"
            name="search"
            type="text"
            id="search-input"
          />
          <select
            className="filter-field"
            placeholder="Name"
            name="select-category"
            id="select-category"
          >
            <option value="name">Name</option>
            <option value="surname">Surname</option>
            <option value="country">Country</option>
            <option value="owner">Owner</option>
          </select>
          <span className="pagination">
            <a onClick={movePage} name="previous" id="previous-page">
              ❮
            </a>
            <span>
              {pageNum * 20 - 20} - {20 * pageNum}
            </span>
            <a onClick={movePage} name="next" id="next-page">
              ❯
            </a>
          </span>
        </div>
        <table id="customer-table">
          <thead>
            <RowHeader />
          </thead>
          <tbody>
            {props.ClientStore.clientList.map((c) => {
              return <ClientRow clientPopup={clientPopupToggle} client={c} />;
            })}
          </tbody>
        </table>
        {props.ClientStore.clientPopup.name && (
          <div id="update-popup">
            <div id="popup-close">
              <img
                src="https://www.seekpng.com/png/detail/52-521758_open-close-button-png-white.png"
                onClick={clientPopupToggle}
              />
            </div>
            <div className="input-row" id="popup-name">
              <label htmlFor="">Name:</label>
              <input
                onChange={setInputUpdate}
                value={clientPopup.name}
                name="name"
                type="text"
              />
            </div>
            <div className="input-row" id="popup-surname">
              <label htmlFor="">Surname:</label>
              <input
                onChange={setInputUpdate}
                value={clientPopup.surName}
                name="surName"
                type="text"
              />
            </div>
            <div className="input-row" id="popup-country">
              <label htmlFor="">Country:</label>
              <input
                onChange={setInputUpdate}
                value={clientPopup.country}
                name="country"
                type="text"
              />
            </div>
            <div id="popup-update">
              <button onClick={saveChanges}>Update</button>
            </div>
          </div>
        )}
      </div>
    );
  })
);

export default Clients;
