import { createContext, useContext, useState } from 'react'
import Style from './App.module.css'
import logo from "./assets/logo.svg"
import profile from "./assets/profile.svg"
import Sidebar from './components/Sidebar/Sidebar'
import Section from './components/Section/Section'
import UpdateScoreModal from './components/UpdateScoreModal/UpdateScoreModal'

export const UserContext = createContext()

function App() {

  const [updateScoreModal, setUpdateScoreModal] = useState(false)

  const [userData, setUserData] = useState({ rank: 12890, percentile: 37, current_score: 7, total_score: 15 })



  return (
    <UserContext.Provider value={{ updateScoreModal, setUpdateScoreModal, userData, setUserData }}>

      <div className={Style.App}>

        <header>

          <img src={logo} alt="logo" className={Style.companyLogo} />

          <div className={Style.profileMenu}>
            <img src={profile} alt="profile-pic" />
            <h4>Siddharth Jain</h4>
          </div>

        </header>

        <main>
          <Sidebar />

          <Section setUpdateScoreModal={setUpdateScoreModal} userData={userData} />
        </main>

        {updateScoreModal && <UpdateScoreModal />}

      </div>
    </UserContext.Provider>
  )
}

export default App
