import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import Modal from './components/ui/Modal'
import { formInputsList, productList } from './data'
import Button from './components/ui/Button'
import Input from './components/ui/Input'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const renderProductList = productList.map((product) => <ProductCard key={product.id} product={product} />)
  const renderFormInputList = formInputsList.map((input) => (
    <div className='flex flex-col'>
      <label htmlFor={input.id} className='mb-[1px] text-sm font-medium text-gray-700'>{input.label}</label>
      <Input type={input.type} name={input.name} placeholder={input.placeholder} id={input.id} />
    </div>
  ))
  return (
    <>
      <main className='container'>
        <Button onClick={open} className="bg-indigo-700">OPEN</Button>
        <div className='m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md'>
          {renderProductList}
        </div>
        <Modal isOpen={isOpen} close={close} title='ADD A NEW PRODUCT'>
          <form className='space-y-3'>
            {renderFormInputList}
            <div className="flex items-center justify-between my-4 space-x-2">
              <Button onClick={close} className="bg-indigo-700">Submit</Button>
              <Button onClick={close} className="bg-gray-300">Close</Button>
            </div>
          </form>
        </Modal>
      </main>
    </>
  )
}

export default App
