import React from 'react'
import assets, { messagesDummyData } from '../assets/assets'

const ChatContainer = ({selectedUser, setSelectedUsers}) => {
  return selectedUser ?(
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
        {/* Header Section */}
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img src={assets.profile_martin} alt="" className='w-8 rounded-full' />
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
            Martin jhonson
            <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <img onClick={()=>setSelectedUsers(null)}src={assets.arrow_icon} alt="" className='md:hidden max-w-7'/>
        <img src={assets.help_icon} alt="" className='max-md:hidden max-w-5' />
      </div>
        {/* Chat Section */}
        <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
            {messagesDummyData.map((msg,index)=> (
                <div key={index} className={`flex items-end gap-2 justify-end
                ${msg.senderId !== '680f50e4f10f3cd28382ecf9' && 'flex-row-reverse'}`}> 
                    {msg.image?(
                        <img src={msg.image} alt="" className='max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8'/>
                    ):(<p>
                        {msg.message}
                    </p>)}
                </div>
            ))}
        </div>
    </div>
  ):(
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 h-full bg-white/10 max-md:hidden'> 
        <img src={assets.logo_icon} className='max-w-16' alt=""/>
        <p className='text-white text-lg font-medium'>Chat anytime, anywhere</p>
        <p className='text-sm'>Created by Sai Harish Adithiya</p>
    </div>
  )
}

export default ChatContainer
