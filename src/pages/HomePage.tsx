import React from 'react'
import HeaderHome from '../components/HeaderHome'
import FirstTextCard from '../components/FirstTextCard'
import AgileCard from '../components/AgileCard'
import AutomationCard from '../components/AutomationCard'
import ServiceCard from '../components/ServiceCard'
import ProductMosst from '../components/ProductMosst'
function HomePage() {
  return (
    <div>
        <HeaderHome />
        <FirstTextCard />
        <AgileCard />
        <AutomationCard />
        <ServiceCard />
        <ProductMosst />
    </div>
  )
}

export default HomePage