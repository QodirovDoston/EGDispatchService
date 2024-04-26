import React from 'react'

const Dropdown = ({accardion}) => {
  return (
    <div>
         <div className="grid mx-auto mt-1">
              {accardion.map((item, index)=>{
              return(
              <div key={index} className="py-[3px]">
                <details className="group border-2 bg-white border-gray-200 px-8 py-4 gap-4">
                  <summary className="flex gap-5 items-center font-medium cursor-pointer list-none">
                    <span className="transition group-open:rotate-180">
                      <svg
                        className='group-hover:text-primary'
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                    <span className="text-primary font-extrabold"> {item.title}</span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn duration-700 transition-all">
                  {item.paragrow}
                  </p>
                </details>
              </div>
               )
              })}
            </div>
    </div>
  )
}

export default Dropdown
