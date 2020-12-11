import FmeasLayout from 'src/layouts/FmeasLayout'
import FmeaCell from 'src/components/FmeaCell'

const FmeaPage = ({ id }) => {
  return (
    <FmeasLayout>
      <FmeaCell id={id} />
    </FmeasLayout>
  )
}

export default FmeaPage
