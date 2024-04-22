import { useEffect, useState } from 'react';

const Lifecycle = () => {


    const [count, setcount] = useState(0)

    const [buttonclick , setbuttonclick] = useState(0)

    useEffect(() => {

        console.log('component did mount')

        const interval = setInterval(() => {
            setcount((prevVal) => { return prevVal + 1 })


            console.log('h1')
        } , 1000)
        
        return () => {
            console.log("component will unmount")

            clearInterval(interval)
            // clearInterval(timer)
        }
    }, [])

    useEffect ( () =>{

        console.log('component did update ' )
    })

    useEffect ( ()=>{
        console.log('button did update')
     } , [buttonclick]) 

    return (
        <>
            <h1> React Life Cycle</h1>
            <h1>Count: {count}</h1>
            <div>
                <button onClick = { ()=> setbuttonclick( buttonclick +1)}>
                     ADD</button>
                      {buttonclick}
            </div>
        </>
    )
}

export default Lifecycle;