import faq from "@config/faq.json"
import Faq from "@layouts/partials/Faq"

export default function Page() {
  return (
    <Faq data={faq} />
  )
}
