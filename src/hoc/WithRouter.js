import { useParams, useLocation } from 'react-router-dom'

export default function WithRouter(Child) {
  return function WithRouter(props) {
    const params = useParams()
    const location = useLocation()

    return <Child {...props} params={params} location={location} />
  }
}