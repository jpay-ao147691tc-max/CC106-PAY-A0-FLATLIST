import { View, Image, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { students } from "../../data/students";

export default function StudentDetailScreen() {
    const { id } = useLocalSearchParams();

    const studentId = Array.isArray(id) ? id[0] : id;
    const student = students.find((s) => String(s.id) === String(studentId));

    if (!student) {
        return (
            <View style={styles.centered}>
                <Text style={styles.notFound}>Student not found.</Text>
                <Pressable style={styles.backButton} onPress={() => router.back()}>
                    <Text style={styles.backButtonText}>‹ Back</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.screen}>
            <Stack.Screen
                options={{
                    title: student.name,
                    headerTitleStyle: { fontWeight: "600", color: "#ad1457" },
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: "#fff0f5" },
                }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}
            >
                <View style={styles.headerCard}>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={student.image}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>

                    <Text style={styles.name}>{student.name}</Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{student.course}</Text>
                    </View>
                </View>

                <View style={styles.detailsCard}>
                    <Text style={styles.sectionTitle}>Student Information</Text>

                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Student ID</Text>
                        <Text style={styles.detailValue}>{student.id}</Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Course</Text>
                        <Text style={styles.detailValue}>{student.course}</Text>
                    </View>

                    {student.email && (
                        <>
                            <View style={styles.divider} />
                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Email</Text>
                                <Text style={styles.detailValue}>{student.email}</Text>
                            </View>
                        </>
                    )}

                    {student.yearLevel && (
                        <>
                            <View style={styles.divider} />
                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Year Level</Text>
                                <Text style={styles.detailValue}>{student.yearLevel}</Text>
                            </View>
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff5f8",
    },
    container: {
        padding: 20,
        gap: 16,
    },
    centeredContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff5f8",
        padding: 24,
    },

    notFoundCard: {
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: 32,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#f3c6d5",
        width: "100%",
    },

    notFoundTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#35131f",
        marginBottom: 6,
    },
    notFoundSubtext: {
        fontSize: 14,
        color: "#8f5269",
        textAlign: "center",
    },

    headerCard: {
        backgroundColor: "#ffffff",
        borderRadius: 24,
        paddingVertical: 28,
        paddingHorizontal: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#f3c6d5",
        shadowColor: "#c2185b",
        shadowOpacity: 0.05,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 6 },
        elevation: 2,
    },
    imageWrapper: {
        position: "relative",
        marginBottom: 16,
        borderRadius: 60,
        padding: 4,
        backgroundColor: "#f8bbd0",
    },
    image: {
        width: 104,
        height: 104,
        borderRadius: 52,
        backgroundColor: "#fce4ec",
    },
    name: {
        fontSize: 22,
        fontWeight: "700",
        color: "#35131f",
        textAlign: "center",
        letterSpacing: -0.3,
    },
    badge: {
        marginTop: 10,
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: "#fce4ec",
    },
    badgeText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#ad1457",
    },

    detailsCard: {
        backgroundColor: "#ffffff",
        borderRadius: 24,
        padding: 20,
        borderWidth: 1,
        borderColor: "#f3c6d5",
        shadowColor: "#c2185b",
        shadowOpacity: 0.05,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 6 },
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: "#c2185b",
        textTransform: "uppercase",
        letterSpacing: 0.8,
        marginBottom: 16,
    },
    detailRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 6,
    },
    detailLabel: {
        fontSize: 15,
        color: "#8f5269",
        fontWeight: "500",
    },
    detailValue: {
        fontSize: 15,
        fontWeight: "600",
        color: "#35131f",
    },
    divider: {
        height: 1,
        backgroundColor: "#f8dce6",
        marginVertical: 12,
    },
});