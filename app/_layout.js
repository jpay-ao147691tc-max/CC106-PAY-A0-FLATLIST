import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Student List",
                    headerStyle: { backgroundColor: "#fff0f5" },
                    headerTintColor: "#ad1457",
                }}
            />
            <Stack.Screen
                name="students/[id]"
                options={{
                    title: "Student Details",
                    headerStyle: { backgroundColor: "#fff0f5" },
                    headerTintColor: "#ad1457",
                }}
            />
        </Stack>
    );
}
