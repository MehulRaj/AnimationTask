import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default function TableView() {
    const tableHead = ["Header 1", "Header 2", "Header 3"];
    const tableData = [
        ["Row 1, Cell 1", "Row 1, Cell 2", "Row 1, Cell 3"],
        ["Row 2, Cell 1", "Row 2, Cell 2", "Row 2, Cell 3"],
        ["Row 3, Cell 1", "Row 3, Cell 2", "Row 3, Cell 3"],
    ];

    return (
        <View style={{ flex: 1, padding: 6, paddingTop: 30 }}>
            <Table borderStyle={{ borderColor: 'transparent' }}>
                <Row

                    data={tableHead}
                    style={{ height: 40, backgroundColor: "#f1f8ff" }}
                    textStyle={{ textAlign: "center", fontWeight: "bold" }}
                />
                <Rows data={tableData} style={{ height: 80 }} textStyle={{ textAlign: "center" }} />
            </Table>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
    },
    tableHeader: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#37C2D0",
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        height: 50,
        width: "100%",
    },
    tableRow: {
        flexDirection: "row",
        height: 40,
        alignItems: "center",
    },
    columnHeader: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center"
    },
    columnHeaderTxt: {
        color: "white",
        fontWeight: "bold",
    },
    columnRowTxt: {
        width: "20%",
        textAlign: "center",
    }
});
