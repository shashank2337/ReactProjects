import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = (props) => {
    return (
        <>
            <h2>404 - Page Not Found</h2>
            <p>
                <Link to="/">Back to Home Page</Link>
            </p>
        </>
    )
}

export default PageNotFound