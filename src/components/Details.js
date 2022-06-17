import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import '../components/Details.css';

const Details = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);

            setLoginData(user);
            

            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <>
                    < h1 className='EmployeeHeader'>Employee Directory</h1>
                    <table>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Contact Number</th>
                    <th>Email</th>
                    <tr>
                        <td>{logindata[0].name}</td>
                        <td>{logindata[0].image}</td>
                        <td>{logindata[0].contact}</td>
                        <td>{logindata[0].email}</td>
                    </tr>
                    {/* <tr>
                        <td>{logindata[1].name}</td>
                        <td>{logindata[1].image}</td>
                        <td>{logindata[1].contact}</td>
                        <td>{logindata[1].email}</td>
                    </tr> */}
                    {/* <tr>
                        <td>{logindata[0].name}</td>
                        <td>{logindata[0].image}</td>
                        <td>{logindata[0].contact}</td>
                        <td>{logindata[0].email}</td>
                    </tr> */}
                    {/* <tr>
                        <td>{logindata[0].name}</td>
                        <td>{logindata[0].image}</td>
                        <td>{logindata[0].contact}</td>
                        <td>{logindata[0].email}</td>
                    </tr>
                    <tr>
                        <td>{logindata[0].name}</td>
                        <td>{logindata[0].image}</td>
                        <td>{logindata[0].contact}</td>
                        <td>{logindata[0].email}</td>
                    </tr> */}
                    </table>
                        <br></br>
                        <Button onClick={userlogout}>LogOut</Button>

            
                     
                    </>
            }
        </>
    )
}

export default Details






















