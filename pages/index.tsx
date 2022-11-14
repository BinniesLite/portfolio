import Navbar from '../components/Navbar'
import Main from '../components/Main'
import NavButton from '../components/NavButton'
import { useMenu } from '../context/state-context'
import MansoryGrid from '../components/MansoryGrid'

export default function Home() {
  const {activeMenu, setActiveMenu} = useMenu(); 

  return (
  <div className='bg-black w-full h-full'>
    
    <Main activeMenu={activeMenu}/>
    
    <Navbar activeMenu={activeMenu} />
    <NavButton activeMenu={activeMenu} setActiveMenu={setActiveMenu} />  
  </div>
  )
}
