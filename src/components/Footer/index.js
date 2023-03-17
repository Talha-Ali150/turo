import React from 'react'
import './index.css'
import FooterList from '../FooterList'
import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Youtube } from "../../images/youtube.svg";
import { ReactComponent as Appstore } from "../../images/appstore.svg";
import { ReactComponent as Playstore } from "../../images/playstore.svg";

export default function Footer() {
    const listItems1 = [
        { item: 'About' },
        { item: 'Team' },
        { item: 'Policies' },
        { item: 'Careers' },
        { item: 'Press' },
        { item: 'OpenRoad' },
        { item: 'Turo shop' },
    ]
    const listItems2 = [
        { item: 'USA (EN)' },
        { item: 'Australia (EN)' },
        { item: 'Canada (EN)' },
        { item: 'Canada (FR)' },
        { item: 'UK (EN)' },
    ]
    const listItems3 = [
        { item: 'Book a car' },
        { item: 'Weddings' },
        { item: 'Trust & safety' },
        { item: 'Sustainability' },
        { item: 'FAQs' },
        { item: 'Get help' },
    ]
    const listItems4 = [
        { item: 'List your car' },
        { item: 'Carculator' },
        { item: 'All-Star Hosts' },
        { item: 'Host tools' },
        { item: 'Insurance & protection' },
        { item: 'FAQs' },
    ]
    return (
        <div className='footer'>
            <FooterList heading='Turo' listItems={[...listItems1]} />
            <FooterList heading='Locations' listItems={[...listItems2]} />
            <FooterList heading='Explore' listItems={[...listItems3]} />
            <FooterList heading='Hosting' listItems={[...listItems4]} />
            <div className='section5'>
                <div className='sectionA'>

                    <Facebook />
                    <Twitter />
                    <Instagram />
                    <Youtube />
                </div>
                <div className='sectionB'>

                    <Appstore />
                </div>
                <div className='sectionC'>

                    <Playstore />
                </div>
            </div>

        </div>
    )
}
