import { About } from "@/Components/Home/About";
import { Cta } from "@/Components/Home/Cta";
import { FAQ } from "@/Components/Home/FAQ";
import { Features } from "@/Components/Home/Features";
import { Hero } from "@/Components/Home/Hero";
import { HowItWorks } from "@/Components/Home/HowItWorks";
import { Newsletter } from "@/Components/Home/Newsletter";
import { Services } from "@/Components/Home/Services";
import { Sponsors } from "@/Components/Home/Sponsors";
import { Team } from "@/Components/Home/Team";
import { Testimonials } from "@/Components/Home/Testimonials";
import LayoutShell from "@/Layouts/AppShell/LayoutShell";

const Home = (props) => {
    return (
        <LayoutShell auth={props.auth}>
            <Hero />
            {/* <Sponsors /> */}
            <About />
            <HowItWorks />
            <Features />
            {/* <Services /> */}
            <Cta />
            <Testimonials />
            {/* <Team />
            <FAQ /> */}
            <Newsletter />
        </LayoutShell>
    );
};
export default Home;
