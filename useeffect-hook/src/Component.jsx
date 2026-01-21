import React, { useEffect } from 'react'

const Component = () => {


    useEffect(() => {

        let timer =  setInterval(() => {
            console.log("Do something");
            
        }, 1000);


        return () => {
clearInterval(timer)
        }


    }, [])

    
  return (
    <div>
      <h1>Component Mount</h1>
    </div>
  )
}

export default Component
