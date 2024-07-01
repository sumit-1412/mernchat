import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import { useHistory } from "react-router";
const HomePage = () => {

  const history = useHistory();
  useEffect(() => {
     const user = JSON.parse(localStorage.getItem("userInfo"));
     if (user) {
       history.push("/chats");
     }
  }, [history]);
  

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={"lavender"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="black"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
          ----Chat-Corner----
        </Text>
      </Box>
      <Box p={4} bg={"lavender"} w="100%" borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab w="50%" bg="white">
              Login
            </Tab>
            <Tab w="50%" bg="white">
              Signup
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default HomePage;
