import {Suspense} from 'react';
import {Outlet} from "react-router-dom";
import classes from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={classes['layoutS']}>
            <div className={classes['page_wrapper']}>
                
                <div className={classes['page']}>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Outlet/>
                    </Suspense>
                </div>
            </div>

        </div>
    );
};

export default Layout;