import './topnav.css'
import { BsChevronDown } from 'react-icons/Bs'
import {MdOutlinePublishedWithChanges} from 'react-icons/Md'
import {BiSolidHeart} from 'react-icons/Bi'
import {BsPersonBoundingBox} from 'react-icons/Bs'
const TopNav = () => {
    return (
        <>
            <div className="topnav">
                <div className="container-nav">
                    <ul>
                        <li><a href="#">Accounts <BsChevronDown /></a></li>
                        <li><a href="#">Compare <MdOutlinePublishedWithChanges /></a></li>
                        <li><a href="#">Wish List <BiSolidHeart /></a></li>
                        <li><a href="#">Login <BsPersonBoundingBox /></a></li>
                        <li><a href="#">Need Help?</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TopNav