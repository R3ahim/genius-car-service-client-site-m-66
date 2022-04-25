import { useEffect, useState } from "react";

const useServices = ()=>{
    const [services,setService] = useState([])
    useEffect(()=>{
        const url =`http://localhost:5000/service`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[]);
    return [services,setService]
}
export default useServices;