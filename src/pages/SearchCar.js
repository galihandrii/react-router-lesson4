import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Searchcar.css"
import { Link } from "react-router-dom";

const Searchcar = () => {
    const [carData,setCardata] = useState([]);
    const [fName,setFname] = useState("");


    useEffect(()=>{
        axios
        .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
        .then((res)=>{
            //console.log(res);
            setCardata(res.data.cars);
        })
        .catch((err)=> console.log(err.message))
    },[]);
    //console.log(carData);

    const handleChangeName = (e) => {
        setFname(e.target.value);
    };
    //console.log(fName);
    const handleFilter = (e) => {
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${fName}`)
        .then((res)=>{
            //console.log(res);
            setCardata(res.data.cars);
        })
        .catch((err)=> console.log(err.message))
    }
    

    return (
        <div>
            <Navbar/>
            <h1>ini search car</h1>
            <div className="filter-section">
                <div><label>Nama Mobil</label></div>
                <div>
                    <input onChange={handleChangeName} placeholder="masukan mobil"/>
                    <button onClick={handleFilter}>EDIT</button>
                </div> 
            </div>
            
            <div className="card-wraper">
            {
                !!carData.length ? carData.map(function(item){
                    return(
                        
                            <div className="card-car" >
                            <div className="img-con"><img src={item.image}/></div>
                            <div className="item-con">
                                <p>id : {item.id}</p>
                            <h1>{item.name}</h1>
                            <p>{item.price}/hari</p>
                            <Link to={`/Detailmobil/${item.id}`}>
                            <button>
                                Pilih Mobil
                            </button>
                            </Link>
                            
                            </div>
                            
                            </div>
                        
                        
                    )
                }) : null
            }
            </div>
            
        </div>
    )
}

export default Searchcar;