import { cuteFooterStyle } from '../../styles/components/CuteFooterStyle'
import { palletes } from '../../styles/pallete/allPalletes';
import { createStyleGetter } from '../../utils/getStyle';
import CuteLinkImage from './CuteLinkImage';
import CuteFooterCuteTNLinks from './CuteFooterCuteTNLinks';
import CuteFooterBriefInfo from './CuteFooterBriefInfo';

const CuteFooter = (props) => {
    let getStyle = createStyleGetter(props, cuteFooterStyle);

    return (
        <footer 
            className = 'footer'
            style={{
                backgroundColor: getStyle('backgroundColor'),
            }}
        >
            <div className="text-center mt-2">
                <h5 
                    className="mb-0"
                    style={{color: getStyle("textColor")}}
                >
                    Visit me for more!
                </h5>
                <CuteFooterCuteTNLinks/>
                <CuteFooterBriefInfo
                    color = {getStyle("textColor")}
                    texts = {[
                        "© 2020, Quản Tiến Nghĩa - CuteTN, Ho Chi Minh city, Vietnam",
                        "Email: quantiennghia001@gmail.com",
                    ]}
                />
            </div>
        </footer>
    )
}

export default CuteFooter;