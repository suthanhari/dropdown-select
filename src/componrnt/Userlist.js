import { Button, Link } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Userlist() {

    const [user, setUser] = useState([]);
    const WAIT_TIME = 1000;




    useEffect(() => {

        let ids = setInterval(() => {

            let fetchData = async () => {
                try {
                    let reasponse = await axios.get("https://6278f6666ac99a9106601019.mockapi.io/subcategory");
                    setUser(reasponse.data)
                } catch (error) {
                    console.log(error);
                }
            }
            fetchData()
        }, WAIT_TIME)
        return () => clearInterval(ids)


    }, [])



    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://6278f6666ac99a9106601019.mockapi.io/subcategory/${id}`);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Select </th>
                        <th scope="col">Sub</th>
                        <th scope="col">SubCategory</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((data, index) => {
                            return <tr>
                                <td>{index}</td>
                                <td>{data.select}</td>
                                <td>{data.sub}</td>
                                <td>{data.subCategoryName}</td>
                                <td>
                                    <Link to={`/edit/${data.id}`}>
                                        <button className='btn btn-primary'>Edit</button>
                                    </Link>

                                    <button className='btn btn-primary' onClick={() => handleDelete(data.id)}>Delete</button>
                                </td>
                            </tr>

                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Userlist