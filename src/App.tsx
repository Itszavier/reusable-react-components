import Tabs, { Tab } from "./component/tab";

export default function App() {
  return (
    <div>
      <Tabs headerClassName={'header'}>
        <Tab label="Profile">hello people am still working</Tab>
        <Tab label="Billing" />
      </Tabs>
    </div>
  );
}
