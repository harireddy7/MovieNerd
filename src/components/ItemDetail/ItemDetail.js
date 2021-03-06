import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

import formatName from '../../Helpers/FormatName';

const ItemDetail = ({ item: { name, image }, deleteItem, goToList }) => {
	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image} />
			<Text style={styles.nameText}> {formatName(name)} </Text>
			<View style={styles.buttonsContainer}>
				<Icon.Button
					size={20}
					name="delete"
					backgroundColor="transparent"
					style={{ ...styles.actionBtn, ...styles.bgRed }}
					borderRadius={10}
					onPress={deleteItem}
				>
					<Text style={styles.deleteTxt}>Delete</Text>
				</Icon.Button>
				<View style={{ height: 10 }} />
				<Icon.Button
					size={20}
					name="cancel"
					backgroundColor="transparent"
					style={{ ...styles.actionBtn, ...styles.bgIndigo }}
					borderRadius={10}
					onPress={goToList}
				>
					<Text style={styles.deleteTxt}>Watchlist</Text>
				</Icon.Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	nameText: {
		fontWeight: 'bold',
		fontSize: 25,
		marginTop: 20,
		marginBottom: 20,
		color: '#222831'
	},
	image: {
		width: '100%',
		height: 300
	},
	buttonsContainer: {
		width: '90%',
		justifyContent: 'center'
	},
	actionBtn: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	bgRed: {
		backgroundColor: 'red'
	},
	bgIndigo: {
		backgroundColor: 'indigo'
	},
	deleteTxt: {
		color: 'white'
	}
});

export default ItemDetail;
