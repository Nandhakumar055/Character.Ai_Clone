

import './index.css'

const TryTheseListItems = props => {
    const {tryTheseItems} = props
    const {profileImage1,profileImage2, heading1, heading2, description1, description2} = tryTheseItems

    return (
        <li className='tryTheseItem'>
            <div className='tryThese-card'>
                <img src={profileImage1} className='profile-image' alt={heading1} />
                <div>
                    <p className='profile-heading'>{heading1}</p>
                    <p className='profile-descripton'>{description1}</p>
                </div>
            </div>
            <div className='tryThese-card'>
                <img src={profileImage2} className='profile-image' alt={heading2}/>
                <div>
                    <p className='profile-heading'>{heading2}</p>
                    <p className='profile-descripton'>{description2}</p>
                </div>
            </div>
        </li>
    )
}

export default TryTheseListItems