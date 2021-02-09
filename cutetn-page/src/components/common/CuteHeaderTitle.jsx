import { palletes } from '../../styles/pallete/allPalletes';

export const CuteHeaderTitle = () => {
    return ( 
        <div className="mt-1">
            <div className="row mt-n1 ml-n4">
                <p style={{fontFamily:palletes.fonts.roundHeavy, fontSize:'25px', color:palletes.colors.purple0}}>
                    CuteTN
                </p>
            </div>
            <div className="row mt-n4 ml-n4 mb-n2">
                <p style={{fontFamily:palletes.fonts.code, fontSize:'12px'}}>
                    // The variables namer
                </p>
            </div>
        </div>
     );
}