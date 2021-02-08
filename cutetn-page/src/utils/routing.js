import { useHistory } from 'react-router-dom';

// cant work :)
export const RouteTo = ({to, state}) => {
    let hist = useHistory();
    if(hist)
        hist.push(to, state);

    return null
}