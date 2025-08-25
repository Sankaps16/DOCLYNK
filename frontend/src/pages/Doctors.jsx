import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { doctors } from '../assets/assets'

const Doctors = () => 
{
 // IT HELPS TO LOCATE WHICH EXACT SEPCIALITY TO SHOW BY SENSING THE ADDRESS
    const { speciality } = useParams()

    const [filterDoc,setFilterDoc] = useState([])//to make changes like selecting and putting things in a box
    const [showFilter,setShowFilter] = useState(false)
    const navigate = useNavigate()//for moving to different page

    const {Doctors} = useContext(AppContext)// from the appcontext..we require the information about doctors only

    const applyFilter = () => {
        if(speciality) {
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
        } else{
            setFilterDoc(doctors)

        }

        }
        useEffect(()=>{
            applyFilter()


        },[doctors,speciality])
    

    
  return (

    <div>
        <p className='text-gray-600'>Navigate through all the specialist doctors</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
            <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev=> !prev)}>Fliters</button>
            <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}> 
            
                <p onClick={()=>speciality === 'GENERAL PHYSICIAN ' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-300 text-black" : ""} `}>GENERAL PHYSICIAN</p>
                <p onClick={()=>speciality === 'GYNECOLOGIST' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-300 text-black" : ""} `}>GYNECOLOGIST</p>
                <p onClick={()=>speciality === 'DERMATOLOGIST' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-300 text-black" : ""}`}>DERMATOLOGIST</p>
                <p onClick={()=>speciality === 'PEDIATRICIANS ' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-300 text-black" : ""}`}>PEDIATRICIANS</p>
                <p onClick={()=>speciality === 'NEUROLOGIST' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-300 text-black" : ""}`}>NEUROLOGIST</p>
                <p onClick={()=>speciality === 'GASTROENTEROLOGIST' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-300 text-black" : ""}`}>GASTROENTEROLOGIST</p>
                
            </div>
            <div className='w-full grid grid-cols-auto gap-4 gap-y-6 '>
                {
                    filterDoc.map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ' key={index}>
                    <img className='bg-primary ' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>AVAILABLE</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
                


            ))



                }
            </div>
        </div>

    </div>
  )
}

export default Doctors