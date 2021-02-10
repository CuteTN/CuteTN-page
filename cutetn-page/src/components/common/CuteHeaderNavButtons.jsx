import { CuteHeaderButton } from './CuteHeaderButton'
import { useHistory } from 'react-router-dom'

export const CuteHeaderNavButtons = () => {
    let history = useHistory();

    let routeToHandler = (url) => {
        return () => history.push(url);
    }

    let handleHomeButtonClicked = routeToHandler(`/`);
    let handleBlogsButtonClicked = routeToHandler(`/blogs`);
    let handlePlaygroundsButtonClicked = routeToHandler(`/playgrounds`)

    return (
        <ul className="navbar-nav mr-auto d-flex align-items-stretch">
            <li className="nav-item active">
                <CuteHeaderButton onClick={handleHomeButtonClicked}>Home</CuteHeaderButton>
            </li>
            <li className="nav-item">
                <CuteHeaderButton onClick={handleBlogsButtonClicked}>Blogs</CuteHeaderButton>
            </li>
            <li className="nav-item">
                <CuteHeaderButton onClick={handlePlaygroundsButtonClicked}>Playgrounds</CuteHeaderButton>
            </li>
        </ul>
    )
}