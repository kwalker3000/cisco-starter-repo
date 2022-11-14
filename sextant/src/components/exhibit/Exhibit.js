import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ClientIP from "./ClientIP";

const Exhibit = () => {
  return (
    <div>
      <div>
        <Tabs className="Tabs">
          <TabList>
            <Tab>ipv4</Tab>
            <Tab>iPv6</Tab>
            <Tab>Tab 3</Tab>
          </TabList>
          <TabPanel>
            <ClientIP path="api" />
          </TabPanel>
          <TabPanel>
            <ClientIP path="api64" />
          </TabPanel>
          <TabPanel>
            <p>Tab 3 works!</p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Exhibit;
