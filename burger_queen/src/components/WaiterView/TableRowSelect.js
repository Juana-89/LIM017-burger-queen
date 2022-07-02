import React, { useEffect, useState } from 'react';
import '../../stylesheets/WaiterView/TableMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faMessage } from '@fortawesome/free-solid-svg-icons';

export function TableRowSelect (props) {
    const [renderInput, setRenderInput] = useState(false);
    const [commentInput, setCommentInput] = useState('');
  
    const onSetComment = (event) => {
    const comment = event.target.value;
    updateCommentOnProduct(comment);
    };
  
    const updateCommentOnProduct = (comment) => {
    setCommentInput(comment);
    props.setCommentOnProduct(comment, props.index);
    };
  
    useEffect(() => {
    if (renderInput) { updateCommentOnProduct('')}}, [renderInput]);
  
    const onTap = () => {
    setRenderInput(!renderInput);
    };
  
    return (
    <tr key={props.key}>
    <td onClick={onTap} >
    <FontAwesomeIcon className="comment" icon={faMessage}></FontAwesomeIcon>
    </td>
    <td className="productColumn">
    {props.producto}
    <br></br>
    {renderInput === true && <input type="text" defaultValue={commentInput} onBlur={onSetComment} />}
    </td>
    <td>{props.cantidad}</td>
    <td>$ {props.precio}</td>
    <td onClick={props.deleteProduct}>
    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
    </td>
    </tr>
    );
  }
  