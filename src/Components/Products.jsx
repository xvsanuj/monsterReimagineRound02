const Products = () => {
  return (
    <div className='min-h-screen relative mb-[10vh] w-full px-10 lg:px-20 pt-20'>
      <p className='px-6 py-2 text-sm rounded-full bg- border-[1px] border-white w-fit'>Products</p>
      <h1 className='w-0 whitespace-nowrap pt-5 font-[Monument] text-2xl lg:text-4xl monument'>Newly Launched</h1>
      <div className='pt-20 flex flex-col lg:flex-row gap-6'>
        <div className='h-96 w-72 rounded-xl bg-zinc-200 overflow-hidden'>
          <img className='h-[70%] rounded-xl w-full object-cover' src="https://cdn.dxomark.com/wp-content/uploads/medias/post-171171/bdc0df40e7c3983b73802b3d47dd20c4600x60085.jpg" alt="" />
          <h1 className='w-0 whitespace-nowrap text-black font-semibold text-xl bg-zinc-200 px-6 pt-5 leading-none'>Xiaomi 14 Ultra</h1>
          <div className='flex bg-zinc-200 gap-7'>
            <h1 className='w-0 whitespace-nowrap text-black font-semibold text-sm bg-zinc-200 px-6 pt-2 leading-none'>₹ 99,999</h1>
            <h1 className='w-0 whitespace-nowrap text-black font-semibold text-sm bg-zinc-200 px-6 pt-2 leading-none'><del className='bg-zinc-200 text-black opacity-65'>₹ 99,999</del></h1>
          </div>
          <p className='bg-orange-600 text-white font-medium text-sm tracking-normal ml-4 mt-2 w-fit px-5 py-1 rounded-full'>Launch offers applied</p>
        </div>
        <div className='h-96 w-72 rounded-xl bg-zinc-200 overflow-hidden'>
          <img className='h-[70%] rounded-xl w-full object-cover' src="https://xiaomistoreph.com/cdn/shop/files/Redmi_Watch3Active_WBG_Black_1_1200x1200.jpg?v=1717642292" alt="" />
          <h1 className='w-0 whitespace-nowrap text-black font-semibold text-lg bg-zinc-200 px-6 pt-5 leading-none'>Redmi Watch 3 Active</h1>
          <div className='flex bg-zinc-200 gap-7'>
            <h1 className='w-0 whitespace-nowrap text-black font-semibold text-sm bg-zinc-200 px-6 pt-2 leading-none'>₹ 2,999</h1>
            <h1 className='w-0 whitespace-nowrap text-black font-semibold text-sm bg-zinc-200 px-6 pt-2 leading-none'><del className='bg-zinc-200 text-black opacity-65'>₹ 5,999</del></h1>
          </div>
          <p className='bg-orange-600 text-white font-medium text-sm tracking-normal ml-4 mt-2 w-fit px-5 py-1 rounded-full'>Launch offers applied</p>
        </div>
        <div className='h-96 w-72 rounded-xl bg-zinc-200 overflow-hidden'>
          <img className='h-[70%] rounded-xl w-full object-cover' src="https://techden.co.za/cdn/shop/products/VXN4305GL_wr_02.jpg" alt="" />
          <h1 className='w-0 whitespace-nowrap text-black font-semibold text-lg bg-zinc-200 px-6 pt-5 leading-none'>10,000Mah PowerBank</h1>
          <div className='flex bg-zinc-200 gap-7'>
            <h1 className='w-0 whitespace-nowrap text-black font-semibold text-sm bg-zinc-200 px-6 pt-2 leading-none'>₹ 2,199</h1>
            <h1 className='w-0 whitespace-nowrap text-black font-semibold text-sm bg-zinc-200 px-6 pt-2 leading-none'><del className='bg-zinc-200 text-black opacity-65'>₹ 3,499</del></h1>
          </div>
          <p className='bg-orange-600 text-white font-medium text-sm tracking-normal ml-4 mt-2 w-fit px-5 py-1 rounded-full'>Launch offers applied</p>
        </div>
        <div className='h-96 w-72 rounded-xl bg-zinc-200 overflow-hidden'>
          <img className='h-[70%] rounded-xl w-full object-cover' src="https://i.gadgets360cdn.com/products/large/xiaomi-pad-6-db-709x800-1681897490.jpg" alt="" />
          <h1 className='w-0 whitespace-nowrap text-black font-semibold text-lg bg-zinc-200 px-6 pt-5 leading-none'>Xiaomi Pad 6</h1>
          <div className='flex bg-zinc-200 gap-7'>
            <h1 className='w-0 whitespace-nowrap text-black font-semibold text-sm bg-zinc-200 px-6 pt-2 leading-none'>₹ 28,198</h1>
            <h1 className='w-0 whitespace-nowrap text-black font-semibold text-sm bg-zinc-200 px-6 pt-2 leading-none'><del className='bg-zinc-200 text-black opacity-65'>₹ 42,998</del></h1>
          </div>
          <p className='bg-orange-600 text-white font-medium text-sm tracking-normal ml-4 mt-2 w-fit px-5 py-1 rounded-full'>Launch offers applied</p>
        </div>
        <div className='h-96 w-72 rounded-xl bg-zinc-200 overflow-hidden'>
          <img className='h-[70%] rounded-xl w-full object-cover' src="https://directdealz.lk/wp-content/uploads/2024/01/Xiaomi-Redmi-Buds-5.jpg" alt="" />
          <h1 className='w-0 whitespace-nowrap text-black font-semibold text-lg bg-zinc-200 px-6 pt-5 leading-none'>Redmi Buds 5</h1>
          <div className='flex bg-zinc-200 gap-7'>
            <h1 className='w-0 whitespace-nowrap text-black font-semibold text-sm bg-zinc-200 px-6 pt-2 leading-none'>₹ 2,999</h1>
            <h1 className='w-0 whitespace-nowrap text-black font-semibold text-sm bg-zinc-200 px-6 pt-2 leading-none'><del className='bg-zinc-200 text-black opacity-65'>₹ 4,499</del></h1>
          </div>
          <p className='bg-orange-600 text-white font-medium text-sm tracking-normal ml-4 mt-2 w-fit px-5 py-1 rounded-full'>Launch offers applied</p>
        </div>
      </div>
    </div>
  )
}

export default Products