

import './index.css'


const CategoriesListItems = props => {
    const {categoryItems} = props 

    return(
        <li className='category-card-item'>
            {categoryItems.categoryName}
        </li>
    )
}

export default CategoriesListItems