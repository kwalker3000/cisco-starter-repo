import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ClientIP from "./ClientIP";
import ClientSocket from "./ClientSocket";

const Exhibit = () => {
  return (
    <div>
      <div>
        <Tabs className="Tabs">
          <TabList>
            <Tab>IPv4</Tab>
            <Tab>IPv6</Tab>
            <Tab>Latency</Tab>
          </TabList>
          <TabPanel>
            <ClientIP path="api" />
          </TabPanel>
          <TabPanel>
            <ClientIP path="api64" />
          </TabPanel>
          <TabPanel>
            <ClientSocket />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Exhibit;
