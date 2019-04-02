import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "red",
		width: "100%"
	}
});

class topBar extends Component {
	render() {
		return <View style={styles.container} />;
	}
}

export default topBar;
