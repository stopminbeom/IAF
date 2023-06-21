import { Route, Routes } from "react-router-dom";
import DesktopNav from "./NaviBar"
import AllTable from "./AllTable"

export default function HomePage() {
	return (
		<>
		<DesktopNav />
		<Routes>
		<Route path="/" element={<AllTable />} />
		{/* <Route path="/profile" element={<MyPage />} />
		<Route path="/profile/:nickname" element={<UserProfile />} />
		<Route path="/chatting" element={<ChattingRoomPage />} />
		<Route path="/room/:roomName" element={<GamePage />} />
		<Route path="/*" element={<NotFound />} /> */}
		</Routes>
		</>
	);
}
