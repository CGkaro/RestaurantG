import React from "react"
import InfoSection from "./infoSection"
import ExtrainfoSection from "./extraInfoSection"
import { PageHeader, Banner } from "../../utils"
import abImg from "../../images/candles-catering-celebration.jpg"

export default function ReservationsSection() {
  return (
    <div>
      <ExtrainfoSection />
      <PageHeader img={abImg}>
        <Banner title="Salon" subtitle="Salones de fiesta" />
      </PageHeader>
      <InfoSection />
    </div>
  )
}
