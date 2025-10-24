import React, { useEffect, useState } from 'react';
import { View, Button, Text, ImageBackground, ScrollView } from 'react-native';
import { ThemeConsumer, Theme, Input } from '@rneui/themed';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { Badge, Image } from '@rneui/base';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import taskList from "../../taskList.json"
import { FlatList } from 'react-native-gesture-handler';


export default function Dashboard() {
    let data = [
        {
            id: 1,
            name: "In Progress"
        },
        {
            id: 2,
            name: "In Review"
        },
        {
            id: 3,
            name: "In Progress"
        },
        {
            id: 4,
            name: "four"
        },
        {
            id: 5,
            name: "five"
        },
        {
            id: 6,
            name: "six"
        },
        {
            id: 7,
            name: "seven"
        },
    ]

    const [inProgress, setInProgress] = useState([]);
    const [pending, setPending] = useState([]);
    const [completed, setCompleted] = useState([]);

    const [highPriority, setHighPriority] = useState([]);
    const [mediumPriority, setMediumPriority] = useState([]);
    const [lowPriority, setLowPriority] = useState([]);

    useEffect(() => {
        const tasks = taskList?.userId123?.tasks || [];

        const grouped = tasks.reduce(
            (acc, item) => {
                // Group by state
                switch (item?.state) {
                    case "in_progress":
                        acc.inProgress.push(item);
                        break;
                    case "pending":
                        acc.pending.push(item);
                        break;
                    case "completed":
                        acc.completed.push(item);
                        break;
                }

                // Group by priorityLabel
                switch (item?.priorityLabel) {
                    case "High":
                        acc.highPriority.push(item);
                        break;
                    case "Medium":
                        acc.mediumPriority.push(item);
                        break;
                    case "Low":
                        acc.lowPriority.push(item);
                        break;
                }

                return acc;
            },
            {
                inProgress: [],
                pending: [],
                completed: [],
                highPriority: [],
                mediumPriority: [],
                lowPriority: [],
            }
        );

        setInProgress(grouped.inProgress);
        setPending(grouped.pending);
        setCompleted(grouped.completed);

        setHighPriority(grouped.highPriority);
        setMediumPriority(grouped.mediumPriority);
        setLowPriority(grouped.lowPriority);
    }, [taskList]);



    const convertDateTime = (vale) => {
        const dateObj = new Date(vale);

        const date = dateObj.toLocaleDateString(); // "10/24/2025"
        const time = dateObj.toLocaleTimeString(); // "6:30:00 AM"

        return [date, " ", time]
    }

    const renderItemList = (item) => {
        return (
            <View style={{ height: 100, width: 100, backgroundColor: "red", marginLeft: 10 }}>
                <Text style={{ color: "black" }}>{item?.item?.title}</Text>
            </View>
        )
    }

    return (
        <ThemeConsumer>
            {({ theme }) => {
                return (
                    <View style={{ flex: 1, backgroundColor: "white" }}>
                        <View style={{ height: 100, paddingBottom: 10, alignItems: "flex-end", flexDirection: "row", justifyContent: "space-between", }}>
                            <View style={{ width: "40%", height: "40%", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                                <View style={{ borderWidth: 0.1, width: 60, height: 60, borderRadius: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <Image source={require('../assets/dp.png')} style={{ height: 50, width: 50, borderRadius: 50 }} />
                                </View>
                                <View style={{ width: "50%", height: "auto", }}>
                                    <Text style={{ fontSize: 16, fontFamily: theme?.medium, color: theme?.lightDark }}>Hello Abu!</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                                        <Feather name='calendar' />
                                        <Text style={{ fontSize: 12, fontFamily: theme?.medium, color: theme?.lightDark, height: 16, marginLeft: 5 }}>20 Oct 2025</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: "20%", height: "40%", alignItems: "center", justifyContent: "center" }}>
                                <View style={{ borderWidth: 0.1, width: 60, height: 60, borderRadius: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: 30, height: 30 }}>
                                        <Feather name='bell' size={24} />
                                        <Badge status='error' containerStyle={{ position: "absolute", top: 0, right: 7 }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <ScrollView contentContainerStyle={{ paddingBottom: 10 }} showsVerticalScrollIndicator={false}>
                            <View style={{ height: 100, width: "100%", flexDirection: "row", alignItems: "center" }}>
                                <View style={{ height: 80, width: 60, backgroundColor: theme?.lighterBackground, marginLeft: 10, borderRadius: 40, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                                    <MaterialIcons name='menu' size={26} color={theme?.lightDark} />
                                </View>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ height: "100%", flexDirection: "row", alignItems: "center", paddingRight: 10 }}>
                                    <View style={{ height: 60, width: "auto", backgroundColor: theme?.lighterBackground, marginLeft: 10, borderRadius: 40, flexDirection: "row", alignItems: "center", paddingHorizontal: 20, justifyContent: "space-between" }}>
                                        <Text style={{ fontSize: 16, fontFamily: theme?.medium, color: theme?.lightDark }}>In Progress</Text>
                                        <View style={{ height: 40, width: 40, backgroundColor: theme?.lightGrey, borderRadius: 20, marginLeft: 20, justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ fontSize: 16, height: "auto", fontFamily: theme?.medium, color: theme?.lightDark }}>{inProgress.length}</Text>
                                        </View>
                                    </View>
                                    <View style={{ height: 60, width: "auto", backgroundColor: theme?.lighterBackground, marginLeft: 10, borderRadius: 40, flexDirection: "row", alignItems: "center", paddingHorizontal: 20, justifyContent: "space-between" }}>
                                        <Text style={{ fontSize: 16, fontFamily: theme?.medium, color: theme?.lightDark }}>Pending</Text>
                                        <View style={{ height: 40, width: 40, backgroundColor: theme?.lightGrey, borderRadius: 20, marginLeft: 20, justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ fontSize: 16, height: "auto", fontFamily: theme?.medium, color: theme?.lightDark }}>{pending?.length}</Text>
                                        </View>
                                    </View>
                                    <View style={{ height: 60, width: "auto", backgroundColor: theme?.lighterBackground, marginLeft: 10, borderRadius: 40, flexDirection: "row", alignItems: "center", paddingHorizontal: 20, justifyContent: "space-between" }}>
                                        <Text style={{ fontSize: 16, fontFamily: theme?.medium, color: theme?.lightDark }}>Completed</Text>
                                        <View style={{ height: 40, width: 40, backgroundColor: theme?.lightGrey, borderRadius: 20, marginLeft: 20, justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ fontSize: 16, height: "auto", fontFamily: theme?.medium, color: theme?.lightDark }}>{completed?.length}</Text>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={{ height: 260, width: "100%", paddingHorizontal: 10, justifyContent: "space-between" }}>
                                <View style={{ height: "60%", width: "100%", backgroundColor: theme?.lightDark, borderRadius: 30, paddingVertical: 20, paddingHorizontal: 20, justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                        <Text style={{ fontSize: 18, width: "70%", fontFamily: theme?.light, color: "white" }}>{highPriority[0]?.title}</Text>
                                        <View style={{ height: 50, width: 50, borderRadius: 25, borderWidth: 0.2, borderColor: "white", alignItems: "center", justifyContent: "center" }}>
                                            <Feather name='arrow-up-right' size={26} color={"white"} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", width: "50%" }}>
                                            <MaterialIcons name='access-time' size={20} color={"white"} />
                                            <Text style={{ fontSize: 12, height: 18, fontFamily: theme?.light, color: "white", marginLeft: 10 }}>{convertDateTime(highPriority[0]?.createdAt)}</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end", width: "50%" }}>
                                            <Badge status='success' containerStyle={{ top: -1 }} />
                                            <Text style={{ fontSize: 12, height: 18, fontFamily: theme?.medium, color: "white", marginLeft: 5 }}>Hight Priority</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: "36%", width: "100%", borderWidth: 0.1, backgroundColor: theme?.lighterBackground, borderRadius: 30, paddingHorizontal: 30, padding: 10, justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ fontSize: 16, fontFamily: theme?.medium, color: theme?.colors?.lightDark, marginLeft: 5 }}>Today Your Xp</Text>
                                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                            <View style={{ height: 30, width: 30, borderRadius: 30, backgroundColor: theme?.colors?.lightDark, justifyContent: "center", alignItems: "center" }}>
                                                <Text style={{ fontSize: 14, fontFamily: theme?.medium, color: theme?.lightDark, height: 19 }}>6</Text>
                                            </View>
                                            <Text style={{ fontSize: 14, height: 18, fontFamily: theme?.medium, color: theme?.colors?.lightDark, marginLeft: 5 }}>Task left</Text>
                                        </View>
                                    </View>
                                    <Text style={{ fontSize: 14, height: 18, fontFamily: theme?.medium, color: theme?.colors?.lightDark, marginLeft: 5 }}>50%</Text>
                                    <ProgressBar progress={0.9} style={{ height: 20, borderRadius: 20, marginHorizontal: 0 }} color={"green"} />
                                </View>
                            </View>
                            <Text style={{ fontSize: 16, fontFamily: theme?.medium, color: theme?.colors?.lightDark, marginLeft: 10, marginVertical: 10 }}>Vist Task</Text>
                            <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingHorizontal: 10 }}>
                                {
                                    taskList?.userId123?.tasks.map((item, index) => {
                                        return (
                                            <View key={index} style={{ height: 150, width: "48%", borderWidth: 0.2, marginBottom: 10, borderRadius: 20, padding: 10, justifyContent: "space-between" }}>
                                                <Text style={{ fontSize: 16, fontFamily: theme?.medium, color: theme?.colors?.lightDark, flexWrap: "wrap" }}>{item?.title}</Text>
                                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                    <View>
                                                        <Text style={{ fontSize: 12, fontFamily: theme?.medium, color: theme?.colors?.lightDark, }}>Date / Time</Text>
                                                        <Text style={{ fontSize: 10, fontFamily: theme?.medium, color: theme?.colors?.lightDark, }}>{convertDateTime(item?.createdAt)}</Text>
                                                    </View>
                                                    <View style={{ height: 50, width: 50, borderRadius: 25, borderWidth: 0.2, borderColor: theme?.lightDark, alignItems: "center", justifyContent: "center" }}>
                                                        <Feather name='arrow-up-right' size={26} color={theme?.lightDark} />
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })
                                }

                            </View>
                        </ScrollView>
                    </View>
                )
            }}
        </ThemeConsumer >
    );
}
