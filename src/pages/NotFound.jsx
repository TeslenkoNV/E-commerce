import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className='m-10 flex-col justify-center'>
            <p className='text-5xl mb-2'>Uh oh, that page no longer exists...</p>
            <p>We are very sorry, the page you have requested could not be found or the URL has been typed incorrectly.</p>
            <p>Here are some helpful links:</p>
            <Link className='underline underline-offset-8 text-lg' to='/'>Home</Link><br />
            <Link className='underline underline-offset-8 text-lg' to='/collection'>Collection</Link><br />
            <Link className='underline underline-offset-8 text-lg' to='/stores'>Store Locator</Link><br />
        </div>
    )
}