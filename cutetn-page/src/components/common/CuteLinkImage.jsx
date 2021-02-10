import { openInNewTab } from "../../utils/openInNewTab";

const CuteLinkImage = ({propsA, propsImg, isOpenInNewTab}) => {
    let handleClick = isOpenInNewTab? 
        () => {
            openInNewTab(propsA.href);
        }
        : undefined;


    return ( 
        <a 
            {...propsA} 
            href={isOpenInNewTab? undefined:propsA.href}
            style={{
                ...propsA.style,
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            <img {...propsImg}/>
        </a>
     );
}
 
export default CuteLinkImage;