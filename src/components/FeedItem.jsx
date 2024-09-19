import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { RiPencilFill } from 'react-icons/ri'

const FeedItem = () => {
  return (
    <li className='border-t border-churead-gray-300 border-opacity-15 px-6 py-3'>
      <div className='flex items-start gap-3'>
        <div className='w-10 rounded-full overflow-hidden mt-1'>
          <img src="./images/Link.svg" alt="사용자 프로필 이미지" />
        </div>

        <div className='w-full'>
          <div className='flex items-center'>
            <span className='font-bold'>churtzrit</span>
            <div className='ml-auto flex gap-1'>

              {/* 수정 삭제 버튼 영역 */}
              <button type='button' className='max-w-6 p-1'>
                <RiPencilFill size={'18px'} />
              </button>
              <button type='button' className='max-w-6 p-1'>
                <FaTrash size={"14px"} />
              </button>
            </div>
          </div>
          <p className='pt-1'>
            The subway is not fancy—in fact, riding it
            can suck with rat, smells and all lol—but
            there’ll never be anything more iconic?
            and effective for getting around the city,
            especially during NYFW.
          </p>
          <div className='flex items-center'>
            <button type='button' className='text-churead-gray-400'>
              좋아요 아이콘 <span>5</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default FeedItem