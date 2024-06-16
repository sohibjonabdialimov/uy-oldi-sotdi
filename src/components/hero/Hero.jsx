import React from 'react'
import uy from "../../assets/uy.jpg"
import "./hero.css"
const Hero = () => {
  return (
    <section id="main-container">
    <div>
      <h2 className='common_subtitle'>E-ko'chmas mulk</h2>
      <p>
        E-ko'chmas mulk sizga qulay joylashuvga ega, shinam va mustahkan qurilgan uylarni taqdim etadi. Bizning ko’p qavatli turar-joy binolarimizda va yaqin atrofda
        joylashgan hududlarda xavfsizlikni ta’minlash bir xil darajada
        muhimdir. Bizning uylar mavjud rivojlanish, transport tarmoqlari va kommunal
        xizmatlar, infratuzilma (kasalxonalar, klinikalar, savdo tarmoqlari,
        ta’lim va maktabgacha ta’lim muassasalari) xususiyatlarini hisobga
        olgan holda qurilgan.
      </p>
    </div>
    <img src={uy} alt="uy" />
  </section>
  )
}

export default Hero