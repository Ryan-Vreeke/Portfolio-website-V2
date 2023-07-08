import Home from "./components/Home/Home";
import About from "./components/About/About";
import ProjectPage from "./components/Projects/ProjectPage"

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/projectPage',
    element: <ProjectPage />
  }
];

export default AppRoutes;
