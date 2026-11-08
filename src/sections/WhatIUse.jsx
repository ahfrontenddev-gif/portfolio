import Desc from '../components/WhatIUse/Desc'
import Tools from '../components/WhatIUse/Tools'

const WhatIUse = () => {
  return (
    <section className='what w-full h-full opacity-0 -z-10'>
        <div className="pt-0 pb-0 p-[3vw] w-full h-full flex max-md:flex-col">
         <Desc />
         <Tools />
        </div>
    </section>
  )
}

export default WhatIUse