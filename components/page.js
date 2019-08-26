import Link from 'next/link'
import { connect } from 'react-redux'


function Page ({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  config,
  title
}) {
  return (
    <div>
      <h1>{title}</h1>
      
    </div>
  )
}

export default connect(state => state)(Page)
