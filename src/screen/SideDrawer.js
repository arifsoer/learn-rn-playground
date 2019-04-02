import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class SideDrawer extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.drawerItem}>Item 1</Text>
				<Text style={styles.drawerItem}>Item 2</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		backgroundColor: "white",
		flex: 1
	},
	drawerItem: {
		flexDirection: "row",
		alignItems: "center"
	}
});

export default SideDrawer;
