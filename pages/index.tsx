import Navbar from '../components/nav/Navbar'
import Main from '../components/main/Main'
import NavButton from '../components/nav/NavButton'
import { useMenu } from '../context/state-context'
import MansoryGrid from '../components/main/MansoryGrid'

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
