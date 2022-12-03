import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import "./Cardetail.css"

const Cardetail = () => {
const {id} = useParams();
const [car,setCar]= useState({})

useEffect(()=>{
    axios
    .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
    .then((res)=>{
        console.log(res);
        setCar(res.data);
    })
    .catch((err)=> console.log(err.message))
},[])

    return (
        <div>
            <Navbar/>
            <h1>ini car detail</h1>
            {Object.entries(car).length ? (
            <div className="car-cards">
                <div><img src={car.image}/></div>
                <div>
                    <h1>{car.name}</h1>
                    <p>{car.price}</p>
                </div>
            </div>) : <h1>Loading....</h1>

            }
        </div>
    )
}

export default Cardetail;