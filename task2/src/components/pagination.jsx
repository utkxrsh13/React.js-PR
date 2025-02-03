import React from 'react'

function Pagination({ currentPage, totalPages = 10, onPageChange }) {

  const generateNoOfPages = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }


  return (
    <div className=''>
      <button
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className='first-letter:text-orange-500 mr-2 border-lime-600 border-3 rounded-sm mx-1 p-1 mt-2 bg-cyan-400 text-black disabled:bg-gray-400 disabled:cursor-not-allowed'>
        Prev
      </button>
      {generateNoOfPages().map((pageNo) => (
        <button key={pageNo}
          onClick={() => onPageChange(pageNo)}
          className=' border-black border-2 mx-[1px] bg-cyan-400 p-2 rounded-sm'>{pageNo}</button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='first-letter:text-red-500 ml-2 border-purple-500 border-3 mx-1 p-1 bg-cyan-400 disabled:cursor-not-allowed rounded-sm disabled:bg-gray-400'>
        Next
      </button>
    </div>
  )
}

export default Pagination