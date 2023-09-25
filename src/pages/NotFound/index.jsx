
import {Link} from 'react-router-dom'
import "./NotFound.css"

const NotFound = () => {
  return (
    <>
    <h1>
      404 - Page Not Found: Looks like we&apos;re out of season! 
      </h1>
    <h2>
      Oops! The page you&apos;re looking for has gone on its own flavorful adventure in our seasonal orchard. Don&apos;t worry; it&apos;ll be back in season soon to delight your taste buds!
      </h2>
    <Link to="/" className="home_link"> Back to Home &rarr;</Link>
    </>
  )
}

export default NotFound;
