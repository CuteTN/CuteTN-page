const CuteFooterBriefInfo = ({texts, color, font}) => {
    return ( 
        <div className="mb-1">
            {texts.map(t => (
                <p className="m-0" style={{color}}>
                    {t}
                </p>
            ))
            }
        </div>
    )
}
 
export default CuteFooterBriefInfo;