import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";

import startApp from "./startMainApp";

class authPage extends Component {
	state = {
		username: "",
		password: ""
	};

	loginHandler = () => {
		startApp();
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.contentContainer}>
					<Text style={styles.textHeader}>Login</Text>
					<TextInput
						value={this.state.username}
						placeholder="Username"
						style={styles.textInput}
						onChangeText={text => this.setState({ username: text })}
					/>
					<TextInput
						value={this.state.password}
						placeholder="Password"
						style={styles.textInput}
						onChangeText={text => this.setState({ password: text })}
					/>
					<Button title="Login" color="#009dff" onPress={this.loginHandler} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		justifyContent: "flex-end",
		padding: 30
	},
	contentContainer: {
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		width: "100%",
		marginBottom: 60,
		alignItems: "center",
		padding: 10
	},
	inputContainer: {
		margin: 20,
		backgroundColor: "red",
		borderWidth: 1,
		borderColor: "black"
	},
	textInput: {
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		padding: 5
	},
	textHeader: {
		fontWeight: "bold",
		fontSize: 30,
		color: "#000000",
		margin: 5
	},
	textInput: {
		borderWidth: 1,
		borderRadius: 3,
		width: "90%",
		margin: 10
	},
	buttonLogin: {
		width: "90%"
	}
});

export default authPage;
