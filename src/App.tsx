import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import {lazy} from "react";

const MainPage = lazy(() => import("./pages/Main.tsx"))


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App