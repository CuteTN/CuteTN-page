import cuteTNLogo from '../../assets/images/CuteTN/CuteTNLogo.png'

export const CuteHeaderLogo = (props) => {
    return (  
        <img
            className = "mt-1"
            src={cuteTNLogo} 
            style={{
                height : "45px",
            }}
        />
    );
}