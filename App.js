import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//import screen
import MainScreen from "./src/screen/MainScreen";
import SideDrawer from "./src/screen/SideDrawer";
import topBar from "./src/layouts/topBar";
import authPage from "./src/screen/authPage";

Navigation.registerComponent(
	"navigation.playground.WelcomeScreen",
	() => MainScreen
);
Navigation.registerComponent(
	"navigation.playground.SideDrawer",
	() => SideDrawer
);
Navigation.registerComponent("navigation.playground.topBar", () => topBar);
Navigation.registerComponent("navigation.playground.authPage", () => authPage);

const defTopBar = icons => {
	return {
		leftButtons: [
			{
				id: "buttonOne",
				icon: icons[0]
			}
		],
		noBorder: true,
		visible: true,
		drawBehind: true,
		transparent: true,
		translucent: true,
		background: { color: "transparent" },
		elevation: 0
	};
};

export default () => {
	Navigation.events().registerAppLaunchedListener(() => {
		Navigation.setRoot({
			root: {
				component: {
					name: "navigation.playground.authPage"
				}
			}
		});
	});
};
