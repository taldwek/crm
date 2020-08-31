import React from "react";

function ClientRow(props) {
  const clientPopup = (e) => {
    props.clientPopup(e.target.closest("tr").id);
  };

  return (
    <tr onClick={clientPopup} id={props.client._id}>
      <td>{props.client.name}</td>
      <td>{props.client.surName}</td>
      <td>{props.client.country}</td>
      <td>{props.client.firstContact.slice(0, 10)}</td>
      <td>{props.client.emailType ? props.client.emailType : "-"}</td>
      <td>
        {props.client.sold ? (
          <img src="https://i7.uihere.com/icons/152/896/1017/v-79bed091d5af60087186b3949906a534.png" />
        ) : (
          "-"
        )}
      </td>
      <td>{props.client.owner}</td>
    </tr>
  );
}

export default ClientRow;
