import React from 'react'
import Pagination from './pagination'

function Test() {

  const dummyData = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
  }));
  // console.log(dummyData)

  const itemPerPage = 10;
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentListOfItems, indexOfFirstItem, indexOfLastItem)
  return (
    <div className=''>
      <h2 className='text-xl font-semibold underline my-1'>Pagination</h2>
      <ul className='grid grid-cols-3 max-w-[500px] items-center justify-center gap-2'>
        {currentListOfItems.map((item) => (
          <li className='mb-1 flex bg-fuchsia-500 border-2 p-2 items-center justify-center' key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
      </div>
  )
}

export default Test