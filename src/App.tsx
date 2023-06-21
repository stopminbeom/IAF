import * as React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ChakraProvider,
} from "@chakra-ui/react"
import HomePage from './components/pages/HomePage'


export const App = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
      <Route path="IAF" index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)


{/* <Routes>
<Route path="/home" element={Mydata?.is_first ? <SignUp /> : <ChoicePage />} />
  <Route path="/profile" element={<MyPage />} />
  <Route path="/profile/:nickname" element={<UserProfile />} />
  <Route path="/chatting" element={<ChattingRoomPage />} />
  <Route path="/room/:roomName" element={<GamePage />} />
  <Route path="/*" element={<NotFound />} />
</Routes> */}