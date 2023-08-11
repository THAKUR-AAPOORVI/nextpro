import Image from 'next/image'
import Header from './src/components/Header'
import CallBanner from './src/components/CallBanner'
import Abc from './src/components/Slider'
export default function Home() {
  return (
    <>
    <div className='main'>
    * <Header/> 
     <CallBanner/>
    <Abc/> 
    
        </div>
    </>
  )
}
