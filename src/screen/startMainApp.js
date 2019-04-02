import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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

const startApp = () => {
	Promise.all([
		Icon.getImageSource("menu", 30, "red"),
		Icon.getImageSource("map", 30, "red")
	]).then(sources => {
		Navigation.setRoot({
			root: {
				sideMenu: {
					left: {
						component: {
							name: "navigation.playground.SideDrawer",
							passProps: {
								text: "This Main Tab"
							}
						}
					},
					center: {
						stack: {
							children: [
								{
									component: {
										name: "navigation.playground.WelcomeScreen",
										options: {
											topBar: defTopBar(sources)
										}
									}
								}
							]
						}
					}
				}
			}
		});
	});
};

export default startApp;
