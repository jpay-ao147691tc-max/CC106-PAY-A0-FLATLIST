import { Pressable, Image, Text, View, StyleSheet } from "react-native";

export default function StudentCard({ item, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        >
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name} numberOfLines={1}>
                    {item.name}
                </Text>
                <Text style={styles.course}>{item.course}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 6,
        marginVertical: 5,
        padding: 10,
        borderRadius: 18,
        backgroundColor: "#ffffff",
        shadowColor: "#c2185b",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    cardPressed: {
        opacity: 0.7,
    },
    image: {
        width: 76,
        height: 76,
        borderRadius: 14,
        backgroundColor: "#fce4ec",
    },
    info: {
        flex: 1,
        marginLeft: 14,
        marginRight: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: "700",
        color: "#35131f",
    },
    course: {
        fontSize: 13,
        color: "#8f5269",
        marginTop: 4,
    },
    arrow: {
        position: "absolute",
        top: 14,
        right: 14,
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: "rgba(255, 255, 255, 0.88)",
        textAlign: "center",
        fontSize: 22,
        lineHeight: 24,
        color: "#c2185b",
    },
});