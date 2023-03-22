import React from 'react'
import './index.css'
import FooterList from '../FooterList'
import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Youtube } from "../../images/youtube.svg";
import { ReactComponent as Appstore } from "../../images/appstore.svg";
import { ReactComponent as Playstore } from "../../images/playstore.svg";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import { ReactComponent as Flag } from "../../images/flag.svg";
import Ending from '../Ending';

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
    const listItemsB1 = [
        { item: 'Trucks' },
        { item: 'Vans' },
        { item: 'Exotic & Luxury' },
        { item: 'Convertibles' },
        { item: 'Sport' },
        { item: 'Classics' },
        { item: 'Minivans' },
        { item: 'SUVs' },
        { item: 'Electric vehicles' },
        { item: 'Cars' },]
    const listItemsB2 = [
        { item: 'Tesla' },
        { item: 'Lamborghini' },
        { item: 'Jeep' },
        { item: 'Rolls-Royce' },
        { item: 'Mercedes-Benz' },
        { item: 'Ferrari' },
        { item: 'Porsche' },
        { item: 'BMW' },
        { item: 'Subaru' },
        { item: 'Maserati' },
    ]
    const listItemsB3 = [
        { item: 'Atlanta' },
        { item: 'Austin' },
        { item: 'Boston' },
        { item: 'Charlotte' },
        { item: 'Chicago' },
        { item: 'Dallas' },
        { item: 'Denver' },
        { item: 'Fort Lauderdale' },
        { item: 'Honolulu' },
        { item: 'Houston' },
    ]
    const listItemsB4 = [
        { item: 'Jersey City' },
        { item: 'Las Vegas' },
        { item: 'London' },
        { item: 'Los Angeles' },
        { item: 'Miami' },
        { item: 'Montréal' },
        { item: 'New York' },
        { item: 'Orlando' },
        { item: 'Philadelphia' },
        { item: 'Phoenix' },
    ]
    const listItemsB5 = [
        { item: 'Portland' },
        { item: 'Sacramento' },
        { item: 'San Diego' },
        { item: 'Los San Francisco' },
        { item: 'Seattle' },
        { item: 'Tampa' },
        { item: 'Toronto' },
        { item: 'Vancouver' },
        { item: 'Washington DC' },
        { item: 'Sydney' },
    ]
    return (
        <div className='footer'>
            <div className='footerSectionA'>
                <div className='footerSection1'>
                    <FooterList heading='Turo' listItems={[...listItems1]} />
                    <FooterList heading='Locations' listItems={[...listItems2]} />
                    <FooterList heading='Explore' listItems={[...listItems3]} />
                    <FooterList heading='Hosting' listItems={[...listItems4]} />

                </div>
                <div className='footerSection2'>
                    <div className='section5'>
                        <div className='sectionA'>

                            <Facebook />
                            <Twitter />
                            <Instagram />
                            <Youtube />
                            <p className='blogPara'>blog</p>
                        </div>
                        <div className='sectionB'>

                            <Appstore />
                        </div>
                        <div className='sectionC'>

                            <Playstore />
                        </div>
                        <div className='sectionD'>
                            <Arrow />
                            <Flag />
                            <p className='sectionDPara'>English</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='footerSectionB'>
                <div className='footerSection3'>
                    <div className='footerSection3A'>
                        <FooterList heading='Vehicle types' listItems={[...listItemsB1]} />
                        <FooterList heading='Makes' listItems={[...listItemsB2]} />
                        <FooterList heading='Top cities' listItems={[...listItemsB3]} />

                    </div>
                    <div className='footerSection3B'>
                        <FooterList heading='' listItems={[...listItemsB4]} />
                        <FooterList heading='' listItems={[...listItemsB5]} />

                    </div>
                </div>


            </div>
            <Ending />
        </div>
    )
}
