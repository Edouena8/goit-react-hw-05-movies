import {  Suspense } from "react";
import { Outlet} from "react-router-dom";
import Loader from "components/Loader";
import { 
    AdditionalTilte, 
    AddInfoList, 
    AddInfoLink 
} from "./AdditionalInfo.styled";

const AdditionalInfo = () => {
    return (
        <div>
            <AdditionalTilte>Additional information</AdditionalTilte>
            <AddInfoList>
                <li>
                    <AddInfoLink to="cast">Cast</AddInfoLink>
                </li>
                <li>
                    <AddInfoLink to="reviews">Reviews</AddInfoLink>
                </li>
            </AddInfoList>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </div>
    );
};

export default AdditionalInfo;