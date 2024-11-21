import { ScrollToTop } from "@/Components/ScrollTop";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const LayoutShell = ({ children, auth }) => {
    return (
        <>
            <Navbar auth={auth} />
            {children}
            <Footer />
            <ScrollToTop />
        </>
    );
};
export default LayoutShell;
