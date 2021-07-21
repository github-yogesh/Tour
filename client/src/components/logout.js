import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {userLOGOUT} from '../actions/index'
import {  useDispatch } from 'react-redux'


const Logout =  () => {

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect( async () => {

        try{

            const res = await fetch('/logout', {
                method:'GET',
                headers:{
                    Accept:'application/json',
                    "Content-Type":"application/json",
                    "Authorization" : `Bearer ` + ""

                }
    
            })
    
            const data = await res.json()
            
            if(!res.status === 200 || !data){

                alert("Logged Out UNsucesfully")
               

            }else{

                sessionStorage.setItem("token", "")
                dispatch(userLOGOUT())
                alert("Logged Out sucesfully")
                history.push('/login')
            }

    
        }catch(err){
            
            console.log(err)
            history.push('/login')
        }
       
    }, [])

  
    return (
        <div>
           
        </div>
    )
}

export default Logout
