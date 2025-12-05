import './style/main.css'
import maskot from './assets/swarm_maskot.png'
import ad from './assets/ad.jpg'
import { MainWelcome } from './sections/MainWelcome'
import { MainBanner } from './sections/MainBanner'
import { MainChats } from './sections/MainChats'

export function MainContent() {
  return (
    <main>
      <MainWelcome maskotSrc={maskot}></MainWelcome>
      <MainBanner adSrc={ad}></MainBanner>
      <MainChats></MainChats>
    </main>
  )
}
