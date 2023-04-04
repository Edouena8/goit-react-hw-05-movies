import {  Suspense } from "react";
import { Link, Outlet} from "react-router-dom";

const AdditionalInfo = () => {
    return (
        <div>
            <p>Additional information</p>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </div>
    );
};

export default AdditionalInfo;