import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatesDoctors from '../components/RelatesDoctors'

const Appointment = () => {
  const {docId} = useParams()
  const {doctors,currencySymbol} = useContext(AppContext)
  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

  const [docInfo,setDocInfo] = useState(null)
  const [docSlots,setDocSlots] = useState([])
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime,setSlotTime] = useState('')


  const fetchDocInfo = async ()=>{
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async ()=>{
    setDocSlots([])

    let today = new Date()

    for(let i=0 ; i<7; i++)
    {
      let currentDate= new Date(today)
      currentDate.setDate(today.getDate()+i)

      let endTime = new Date()
      endTime.setDate(today.getDate()+ i)
      endTime.setHours(21,0,0,0)

      if(today.getDate()=== currentDate.getDate())
      {
        currentDate.setHours(currentDate.getHours() > 10? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30? 30 : 0 )
      }
      else
      {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      while(currentDate < endTime)
      {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

      currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSlots(prev => ([...prev,timeSlots]))
      
    }


  }

  useEffect(()=>{
    fetchDocInfo()},[doctors,docId]
  )//will execute when there is a change in doctor id or doctor information

  useEffect(()=>{
    getAvailableSlots()

  },[docInfo])

  useEffect(()=>{
    console.log(docSlots)
    
  },[docSlots])


  return docInfo && (
    <div>
      <div className='flex flex-col itmes-start sm:flex-row gap-4  '>
        <div>
          <img className='flex flex-col bg-primary w-full sm:max-w-72 rounded-4xl' src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-500 rounded-4xl p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0  '>
        {/* doctor information */}
        <p className='flex itmes-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name}
           <img className='w-5' src={assets.verified_icon} alt="" /></p> 

        <div className='flex itmes-cen
         gap-2 text-sm mt-1 text-gray-600'>
          <p>{docInfo.degree} - {docInfo.speciality}</p>
          <button className='py-0.5 px-2 border text-xs rounded-full '>{docInfo.experience}</button>
        </div>
        {/* ABOUT DETAILS */}
        <div>
          <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
          <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
        </div>
        <p className='text-gray-500 font-medium mt-4'>Appointment Fee : <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
      </div>
      </div>

      {/* BOOKING THE SLOTS */}

      <div  className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>BOOK YOUR SLOT</p>
        <div  className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length>0 && docSlots.map((item,index)=>{
              return(<div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index // Use selectedDayIndex, not slotIndex, for day headers
        ? 'bg-primary text-white shadow-md' // Classes for selected state
        : 'border border-gray-400 text-gray-700 bg-gray-100 hover:bg-gray-200' // Classes for unselected state
}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>

              </div>)
            })
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4
        '>
          {docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slotTime? 'bg-primary text-white' : 'text-gray-700 border border-gray-400 ' }   `} key={index}>
              {item.time.toLowerCase()}


            </p>

          ))}

        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>BOOK AN APPOINTMENT</button>



      </div>

      <RelatesDoctors docId={docId} speciality={docInfo.speciality} />




    </div>
  )
}

export default Appointment