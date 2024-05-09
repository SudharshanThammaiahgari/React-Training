import harry from './harry1.jpg';
import background from './background.jpg';
import './cardStyles.css';
import { FaStar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiSuitcaseSimpleFill } from "react-icons/pi";

const ContactCard = () => {
    return <div className="contact_card">
        <div>
            <img src={background} className='back_image' alt='back_image'></img>
        </div>
        <div>
            <img src={harry} className="profile_pic" alt = "profile_pic"></img>
        </div>
        <p className="profile_name">Harry Potter</p>
        <p className="designation">Freelance Web Designer</p>
        <div className="row">
            <div className="column">
                <FaStar className='icon_color' />
                <p className='count_value'>2k</p>
            </div>
            <div className="column">
                <FaPeopleGroup className='icon_color'/>
                <p className='count_value'>10k</p>
            </div>
            <div className="column">
                <PiSuitcaseSimpleFill className='icon_color' />
                <p className='count_value'>15</p>
            </div>
        </div>
    </div>
}

export default ContactCard;