import OurServices from '@layouts/partials/OurServices'
import Services from "@config/our-servieces.json"

export default function Page({params}) {
  const { service } = params
  const data = Services[service]
  return (
    <>
      <OurServices {...data}/>
    </>
  )
}
