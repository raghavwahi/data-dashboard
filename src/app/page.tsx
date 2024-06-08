import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <>
      <Header />
      <SideMenu />
      <Dashboard />
    </>
  );
}
