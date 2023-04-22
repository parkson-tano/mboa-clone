import React from 'react'
import HeaderHome from '../components/HeaderHome'
import FirstTextCard from '../components/FirstTextCard'
import AgileCard from '../components/AgileCard'
import AutomationCard from '../components/AutomationCard'
function HomePage() {
  return (
    <div>
        <HeaderHome />
        <FirstTextCard />
        <AgileCard />
        <AutomationCard />
    </div>
  )
}

export default HomePage