import { createApp } from "vue";
import "./style.css";
import "inter-ui/inter.css";
import App from "./App.vue";
import "./samples/node-api";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import ElectricalDiagrams from "./pages/technical-specifications/ElectricalDiagrams.vue";
import RobotDetails from "./pages/technical-specifications/RobotDetails.vue";
import RobotImages from "./pages/technical-specifications/RobotImages.vue";
import ProgrammingOutline from "./pages/technical-specifications/ProgrammingOutline.vue";
import ControlsDiagram from "./pages/technical-specifications/ControlsDiagram.vue";
import aboutVue from "./pages/team-overview/about.vue"; 
import RobotHistory from "./pages/team-overview/RobotHistory.vue";
import RobotHistory2009 from "./pages/team-overview/robot-history/RobotHistory2009.vue";
import RobotHistory2010 from "./pages/team-overview/robot-history/RobotHistory2010.vue";
import RobotHistory2011 from "./pages/team-overview/robot-history/RobotHistory2011.vue";
import RobotHistory2012 from "./pages/team-overview/robot-history/RobotHistory2012.vue";
import RobotHistory2013 from "./pages/team-overview/robot-history/RobotHistory2013.vue";
import RobotHistory2014 from "./pages/team-overview/robot-history/RobotHistory2014.vue";
import RobotHistory2015 from "./pages/team-overview/robot-history/RobotHistory2015.vue";
import RobotHistory2016 from "./pages/team-overview/robot-history/RobotHistory2016.vue";
import RobotHistory2017 from "./pages/team-overview/robot-history/RobotHistory2017.vue";
import RobotHistory2018 from "./pages/team-overview/robot-history/RobotHistory2018.vue";
import RobotHistory2019 from "./pages/team-overview/robot-history/RobotHistory2019.vue";
import RobotHistory2020 from "./pages/team-overview/robot-history/RobotHistory2020.vue";
import RobotHistory2021 from "./pages/team-overview/robot-history/RobotHistory2021.vue";
import RobotHistory2022 from "./pages/team-overview/robot-history/RobotHistory2022.vue";
import RobotHistory2023 from "./pages/team-overview/robot-history/RobotHistory2023.vue";
import OutreachPrograms from "./pages/team-overview/OutreachPrograms.vue";
import SubteamBreakdown from "./pages/team-overview/SubteamBreakdown.vue";
import BusinessPlan from "./pages/BusinessPlan.vue";
import CitrusService from "./pages/team-overview/outreach-programs/CitrusService.vue";
import DavisYouthRobotics from "./pages/team-overview/outreach-programs/DavisYouthRobotics.vue";
import FarmersMarket from "./pages/team-overview/outreach-programs/FarmersMarket.vue";
import FallWorkshops from "./pages/team-overview/outreach-programs/FallWorkshops.vue";
import ShelterFinderApp from "./pages/team-overview/outreach-programs/ShelterFinderApp.vue";
import WiSE from "./pages/team-overview/outreach-programs/WiSE.vue";
import RoboCamps from "./pages/team-overview/outreach-programs/RoboCamps.vue";
import TheCompassAlliance from "./pages/team-overview/outreach-programs/TheCompassAlliance.vue";
import CitrusForChange from "./pages/team-overview/outreach-programs/CitrusForChange.vue";
import CitrusForChangeResources from "./pages/team-overview/outreach-programs/CitrusForChangeResources.vue";

const routes: RouteRecordRaw[] = [
    { path: "/", component: Home },
    { path: "/pages/home", component: Home },
    { path: "/technical-specifications/electrical-diagrams", component: ElectricalDiagrams },
    { path: "/technical-specifications/robot-details", component: RobotDetails },
    { path: "/technical-specifications/robot-images", component: RobotImages },
    { path: "/technical-specifications/programming-outline", component: ProgrammingOutline },
    { path: "/technical-specifications/controls-diagram", component: ControlsDiagram },
    { path: "/team-overview/robot-history", component: RobotHistory },
    { path: "/team-overview/about", component:aboutVue},
    { path: "/team-overview/robot-history/robot-history-2009", component: RobotHistory2009},
    { path: "/team-overview/robot-history/robot-history-2010", component: RobotHistory2010},
    { path: "/team-overview/robot-history/robot-history-2011", component: RobotHistory2011},
    { path: "/team-overview/robot-history/robot-history-2012", component: RobotHistory2012 },
    { path: "/team-overview/robot-history/robot-history-2013", component: RobotHistory2013 },
    { path: "/team-overview/robot-history/robot-history-2014", component: RobotHistory2014 },
    { path: "/team-overview/robot-history/robot-history-2015", component: RobotHistory2015 },
    { path: "/team-overview/robot-history/robot-history-2016", component: RobotHistory2016 },
    { path: "/team-overview/robot-history/robot-history-2017", component: RobotHistory2017 },
    { path: "/team-overview/robot-history/robot-history-2018", component: RobotHistory2018 },
    { path: "/team-overview/robot-history/robot-history-2019", component: RobotHistory2019 },
    { path: "/team-overview/robot-history/robot-history-2020", component: RobotHistory2020 },
    { path: "/team-overview/robot-history/robot-history-2021", component: RobotHistory2021 },
    { path: "/team-overview/robot-history/robot-history-2022", component: RobotHistory2022 },
    { path: "/team-overview/robot-history/robot-history-2023", component: RobotHistory2023 },
    { path: "/team-overview/outreach-programs", component: OutreachPrograms },
    { path: "/team-overview/subteam-breakdown", component: SubteamBreakdown },
    { path: "/business-plan", component: BusinessPlan },
    { path: "/team-overview/outreach-programs/citrus-service", component: CitrusService },
    { path: "/team-overview/outreach-programs/davis-youth-robotics", component: DavisYouthRobotics },
    { path: "/team-overview/outreach-programs/farmers-market", component: FarmersMarket },
    { path: "/team-overview/outreach-programs/fall-workshops", component: FallWorkshops },
    { path: "/team-overview/outreach-programs/shelter-finder-app", component: ShelterFinderApp },
    { path: "/team-overview/outreach-programs/wise", component: WiSE },
    { path: "/team-overview/outreach-programs/robocamps", component: RoboCamps },
    { path: "/team-overview/outreach-programs/the-compass-alliance", component: TheCompassAlliance },
    { path: "/team-overview/outreach-programs/citrus-for-change", component: CitrusForChange },
    { path: "/team-overview/outreach-programs/citrus-for-change-resources", component: CitrusForChangeResources }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        document.body.scrollTop = 0;
    }
});

createApp(App)
    .use(router)
    .mount("#app")
    .$nextTick(() => {
        postMessage({ payload: "removeLoading" }, "*");
    });


