import React from "react";
import { View, Text, StyleSheet } from "react-native";

const tasks = [
  { key: 1, name: 'Take A Shower' },
  { key: 2, name: 'Make Breakfast' },
  { key: 3, name: 'Head To Gym' },
  { key: 4, name: 'Upload Due YouTube Video' },
  { key: 5, name: 'Make Smoothie' },
  { key: 6, name: 'Review Code' },
  { key: 7, name: 'Watch Game Of Thrones' },
  { key: 8, name: 'Have Lunch And Make Dinner' },
  { key: 9, name: 'Watch Game Of Thrones' },
  { key: 10, name: 'Review Code Again' },
  { key: 11, name: 'Have Dinner' }

];

export default function CategoryList() {
    return (
        <View style={styles.container}>
            <Text style={styles.biggerText}>Must Do</Text>
            <View style={styles.listContainer}>
                {tasks.map(task => (
                    <View style={styles.itemTaskContainer} key={task.key}>
                        <Text style={styles.bigText}>{task.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    listContainer: {
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-between",
    },
    itemTaskContainer: {
        width: "125%", 
        marginBottom: 20,
        padding: 25,
        backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: '#E8D1BA',
        borderRadius: 20,
    },
    bigText: {
        fontWeight: "bold",
        fontSize: 15,
    },
    biggerText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 6,
    },
});
