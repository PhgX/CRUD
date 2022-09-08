import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router";
import AppContext from "../../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

export default function ListProduct() {
    
    const [list, setList] = useState(useContext(AppContext))
    let navigate = useNavigate();


    const handleDelete = (index) => {
        let newList = [];
        for(let i = 0; i< list.length; i ++){
            if(i !== index) {
                newList.push(list[i])
            }
        }
        setList(newList)
    }

    const handleEdit = (index) => {
        navigate(`/edit/${index}`);
    }

    return (
        <>
            <Link to="/">Home</Link>
            <h2>List Products:</h2>
            <Link to="/create"><button >Create</button></Link>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col" colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr class="table-active" key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                {/* <Link to={`/edit/${index}`}><button>Edit</button></Link> */}
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </>
    )

}
