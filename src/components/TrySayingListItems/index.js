

import './index.css'


const TrySayingListItems = props => {
    const {trySayingItems} = props
    const {imageUrl, name, idName, chatsCount, likesCount, bioTextItems } = trySayingItems

    return (
        <li className='try-saying-card-item'>
            <div className='user-profile-container'>
                <img src={imageUrl} className='profile-image' alt={name} />
                <div>
                    <h4  className='user-profile-name'>{name}</h4>
                    <ul className='user-profile-details'>
                        <li className='user-id-text'>{idName}</li>
                        <li className='user-profile-details-text'>{chatsCount}</li>
                        <li className='user-profile-details-text'>{likesCount}</li>
                    </ul>
                </div>
            </div>
            <ul className='user-bio-text-container'>
                <li className='user-bio-text'>{bioTextItems.text1}</li>
                <li className='user-bio-text'>{bioTextItems.text2}</li>
                <li className='user-bio-text'>{bioTextItems.text3}</li>
            </ul>
        </li>
    )
}

export default TrySayingListItems