import { FaRegComment } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";


import './index.css'

const FeaturedListItems = props => {
    const {featuredItems} = props
    const {imageUrl, heading, name, description, commentsCount, likesCount} = featuredItems

    const isDisableLike = likesCount === undefined ? 'not-display-like-count' : 'like-count-container' 

    return(
        <li className='featured-item-card'>
            <img src={imageUrl} className='featured-image' alt={name} />
            <div className='featured-details'>
                <div>
                    <h4  className='featured-heading'>{heading}</h4>
                    <p className='featured-name'>{name}</p>
                    <p className='featured-description'>{description}</p>
                </div>
                <div className='comment-and-like-container'>
                    <div className='comment-count-container'>
                        <FaRegComment size={20} color="rgb(87, 84, 84)" />
                        <p className="count-text" >{commentsCount}</p>
                    </div>
                    <div className={isDisableLike}>
                        <AiOutlineLike size={20} color="rgb(87, 84, 84)"/>
                        <p className="count-text" >{likesCount}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default FeaturedListItems