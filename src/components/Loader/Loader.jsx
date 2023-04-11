import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

const Loader = () => {
    return (
        <LoaderWrap>
            <RotatingLines strokeColor="#808080"/>
        </LoaderWrap>
    )
};

export default Loader;