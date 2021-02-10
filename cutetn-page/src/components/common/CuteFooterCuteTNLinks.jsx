import facebookLogo from '../../assets/images/Logos/FacebookLogo.png'
import twitterLogo from '../../assets/images/Logos/TwitterLogo.png'
import LinkedInLogo from '../../assets/images/Logos/LinkedInLogo.png'
import githubLogo from '../../assets/images/Logos/GithubLogo.png'

import CuteLinkImage from './CuteLinkImage'

const links = {
    facebook: {
        url: 'https://www.facebook.com/nghia.quantien/',
        logo: facebookLogo,
    },
    twitter: {
        url: 'https://twitter.com/QunTinNgha1',
        logo: twitterLogo,
    },
    linkedIn: {
        url: 'https://www.linkedin.com/in/tiến-nghĩa-quản-209874175/',
        logo: LinkedInLogo,
    },
    github: {
        url: 'https://github.com/CuteTN',
        logo: githubLogo,
    },
}

const CuteFooterCuteTNLinks = (props) => {
    return ( 
        <div>
            {Object.entries(links).map(l => (
                <CuteLinkImage
                    key={l[0]}
                    propsA={{
                        className: "px-1 py-2",
                        href: l[1].url,
                        style: {
                            display: 'inline-block',
                        }
                    }}
                    propsImg={{
                        src: l[1].logo,
                        style: {
                            width: '45px',
                            height: '45px',
                            borderRadius: '20%',
                        }
                    }}
                    isOpenInNewTab={true}
                />
            ))
            }
        </div>
     );
}
 
export default CuteFooterCuteTNLinks;