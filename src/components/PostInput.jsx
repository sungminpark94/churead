import React from 'react'

const PostInput = () => {
  return (
    <div className=''>
      <div className='flex items-start gap-3'>

        {/* start : 프로필 이미지 영역 */}
        <div className='w-10 rounded-full overflow-hidden mt-1'>
          <img src="./images/link.svg" alt="사용자 프로필 이미지" />
          {/* end : 프로필 이미지 영역 */}
        </div>

        {/* start 콘텐츠 영역 */}
        <div className='w-full'>
          <div className='flex items-center'>
            <span className='font-bold'>churtzrit</span>
          </div>
          <div className='pt-1 text-sm'>
            <textarea rows={4} placeholder='문구를 작성하세요'
              className='w-full placeholder-gray-300 placeholder-opacity-60 text-gray-400 bg-transparent outline-none resize-none' />

          </div>

        </div>
      </div>

    </div>
  )
}

export default PostInput