import { FormEvent, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import Modal from './components/ui/Modal'
import { formInputsList, productList } from './data'
import Button from './components/ui/Button'
import Input from './components/ui/Input'
import { IProduct } from './interfaces'
import { vaildateProduct } from './validation'
import ErrorMessage from './components/ErrorMessage'

function App() {
  const defaultProduct = {
    title: '',
    description: '',
    imageUrl: '',
    category: {
      name: '',
      imageUrl: ''
    },
    price: '',
    colors: []
  }
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState<IProduct>(defaultProduct)
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    price: '',
    imageUrl: ''
  })

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProduct((prev) => ({ ...prev, [name]: value }))

    setErrors({
      ...errors,
      [name]: ''
    })
  }

  function handelSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { title, description, price, imageUrl } = product
    const errors = vaildateProduct({
      title,
      description,
      price,
      imageUrl,
    });
    const hasErrorMsg = Object.values(errors).some((error) => error == "") && Object.values(errors).every((error) => error == "");
    if (!hasErrorMsg) {
      setErrors(errors);
      console.log(errors);
      return;
    }
    console.log("No errors found!");
    console.log(product);
    // if (errors.length > 0) {
    //   console.log(errors);
    //   return;
    // }
    // const newProduct = { ...product, id: Date.now().toString() }
    // productList.push(newProduct)
    // setProduct(defaultProduct)
    // close()
  }


  const renderProductList = productList.map((product) => <ProductCard key={product.id} product={product} />)
  const renderFormInputList = formInputsList.map((input) => (
    <div className='flex flex-col' key={input.id}>
      <label htmlFor={input.id} className='mb-[1px] text-sm font-medium text-gray-700'>{input.label}</label>
      <Input type={input.type} name={input.name} placeholder={input.placeholder} id={input.id} value={product[input.name]} onChange={handleChange} />
      <ErrorMessage msg={errors[input.name]} />
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
          <form className='space-y-3' onSubmit={handelSubmit}>
            {renderFormInputList}
            <div className="flex items-center justify-between my-4 space-x-2">
              <Button className="bg-indigo-700">Submit</Button>
              <Button onClick={() => {
                setProduct(defaultProduct)
                close()
              }} className="bg-gray-300">Close</Button>
            </div>
          </form>
        </Modal>
      </main>
    </>
  )
}

export default App
