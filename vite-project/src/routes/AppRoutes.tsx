import AboutUs from "@/components/Company/AboutUs"
import Awards from "@/components/Company/Awards"
import Team from "@/components/Company/Team"
import Events from "@/components/EventsMedia/Events"
import Media from "@/components/EventsMedia/Media"
import Publications from "@/components/EventsMedia/Publications"
import Home from "@/components/Home/Home"
import General from "@/components/Portfolio/General"
import International from "@/components/Portfolio/International"
import Layout from "@/Layout.tsx/Layout"
import Blogs from "@/pages/Blogs"
import Contact from "@/pages/Contact"
import GeoAi from "@/pages/GeoAi"
import Services from "@/pages/Services"
import { createRoutesFromElements, Route } from "react-router-dom"
import Portfolio from "@/components/Portfolio/Portfolio"
import Company from "@/components/Company/Company"
import WorkWithUs from "@/components/Company/WorkWithUs"
import EventsMedia from "@/components/EventsMedia/EventsMedia"
import Form from "@/components/Home/Form"
import Map from "@/components/Home/Map"

const AppRoutes = createRoutesFromElements(
    <Route element={<Layout />}>

      <Route path="/" element={<Home />} />

      <Route path="/services" element={<Services />} />
      <Route path="/geoai" element={<GeoAi />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />

      
      <Route path="/portfolio" element={<Portfolio />}>
        <Route path="general" element={<General />} />
        <Route path="international" element={<International />} />
      </Route>

      <Route path="/company" element={<Company />}>
        <Route path="about-us" element={<AboutUs />} />
        <Route path="team" element={<Team />} />
        <Route path="work-with-us" element={<WorkWithUs />} />
        <Route path="awards" element={<Awards />} />
      </Route>
      
      <Route path="/events-media" element={<EventsMedia />}>
      <Route path="events" element={<Events />} />
      <Route path="media" element={<Media />} />
      <Route path="publications" element={<Publications />} />
      </Route>

       <Route path="/form" element={<Form />} />
       <Route path="/map" element={<Map />} />
    </Route>

)

export default AppRoutes;