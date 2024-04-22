import { useEffect, useRef, useState } from "react"


const AddMovie = ()=>{

    const titleRef = useRef('');
    const popularityRef = useRef('');
    const ratingRef = useRef('');

    
    const handleAddMovie = () =>{

        console.log(titleRef)
        console.log(popularityRef.current)
        console.log(ratingRef.current.value)

    }

    useEffect(()=>{
                console.log('re-render');
            })

    return(

        <div className = "addMovie">
            <h1> Add New Movie</h1>
            <div className ="row">
                <label> Title</label>
                <input ref={titleRef} type='text'/>
            </div>
            
            <div className ="row">
                <label> Popularity</label>
                <input ref={popularityRef} type='text'/>
            </div>
            
            <div className ="row">
                <label> Rating</label>
                <input ref={ratingRef} type='text'/>
            </div>
            <button onClick={handleAddMovie}>Add</button>
        </div>
    )
}

export default AddMovie;






// const AddMovie = ()=>{

//     const [formData , setFormData] = useState({

//         title: '',
//         popularity:'',
//         rating:''

//     })
 
//     const handleTitle = (e)=>{

//         setFormData( (preVal)=>{

//             //setTitle(e.target.value)
//             console.log(formData)
//             return {
//                 ...preVal,
//                 title : e.target.value
//             }
//         })
//     }

//     const handlePopularity = (e)=>{
//             //setPopularity(e.target.value)

//         setFormData ( (preVal)=>{
//             return {
//                 ...preVal,
//                 popularity : e.target.value
//         }
//     })

//     }

//     useEffect(()=>{
//         console.log('re-render');
//     })

//     const handleRating = (e)=>{
//             //setRating(e.target.value)

//         setFormData( (preVal) =>{

//             return {
//                 ...preVal,
//                 rating : e.target.value

//             }
//         })

//     } 

//     const handleSubmit = () =>{

//         console.log(formData)
//     }

//     return(

//         <div className = "addMovie">
//             <h1> Add New Movie</h1>
//             <div className ="row">
//                 <label> Title</label>
//                 <input onChange={handleTitle} type='text'/>
//             </div>
            
//             <div className ="row">
//                 <label> Popularity</label>
//                 <input onChange={handlePopularity} type='text'/>
//             </div>
            
//             <div className ="row">
//                 <label> Rating</label>
//                 <input onChange={handleRating} type='text'/>
//             </div>
//             <button onClick={handleSubmit}>Add</button>
//         </div>
//     )
// }