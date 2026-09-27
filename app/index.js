import { useState, useMemo } from "react";
import { View, FlatList, TextInput, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import StudentCard from "../components/StudentCard";
import { students } from "../data/students";

export default function DirectoryScreen() {
    const router = useRouter();
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return students;
        return students.filter((s) => s.name.toLowerCase().includes(q));
    }, [query]);

    return (
        <View style={styles.container}>
            <View style={styles.intro}>
                <Text style={styles.eyebrow}>CAMPUS DIRECTORY</Text>
                <Text style={styles.heading}>Meet the students</Text>
                <Text style={styles.subheading}>
                    Browse the student community and find someone quickly.
                </Text>
            </View>

            <TextInput
                style={styles.search}
                placeholder="Search students"
                placeholderTextColor="#b47b91"
                value={query}
                onChangeText={setQuery}
                autoCapitalize="none"
                clearButtonMode="while-editing"
            />

            <FlatList
                key="single-column"
                data={filtered}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <StudentCard
                        item={item}
                        onPress={() => router.push(`/students/${item.id}`)}
                    />
                )}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Text style={styles.emptyText}>No students match "{query}"</Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff5f8",
        paddingTop: 18,
    },
    intro: {
        paddingHorizontal: 20,
        paddingBottom: 18,
    },
    eyebrow: {
        fontSize: 11,
        fontWeight: "700",
        letterSpacing: 1.6,
        color: "#c2185b",
        marginBottom: 8,
    },
    heading: {
        fontSize: 30,
        fontWeight: "800",
        color: "#35131f",
        letterSpacing: -0.5,
    },
    subheading: {
        maxWidth: 310,
        marginTop: 6,
        fontSize: 14,
        lineHeight: 20,
        color: "#8f5269",
    },
    search: {
        marginHorizontal: 16,
        marginBottom: 12,
        paddingHorizontal: 14,
        paddingVertical: 13,
        borderRadius: 14,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#f3c6d5",
        fontSize: 15,
        color: "#35131f",
    },
    list: {
        paddingHorizontal: 8,
        paddingBottom: 24,
    },
    empty: {
        marginTop: 48,
        alignItems: "center",
    },
    emptyText: {
        fontSize: 15,
        color: "#9b6679",
    },
});