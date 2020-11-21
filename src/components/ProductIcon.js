import { GiMonclerJacket, GiPoloShirt, GiJesterHat } from 'react-icons/gi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const ProductIcon = ({type}) => {
    switch (type) {
        case 'jackets':
            return <GiMonclerJacket />
        case 'accessories':
            return <GiJesterHat />
        case 'shirts':
            return <GiPoloShirt />
        default:
            return <AiOutlineQuestionCircle />
    }
}

export default ProductIcon