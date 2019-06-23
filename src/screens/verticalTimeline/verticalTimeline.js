import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import StepIndicator from 'react-native-step-indicator'
import dummyData from './data'

const stepIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: '#fe7013',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#aaaaaa',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#000000',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 15,
    currentStepLabelColor: '#fe7013'
}

export default class VerticalStepIndicator extends Component {
    constructor() {
        super()

        this.state = {
            currentPage: 0,
            max: 6
        }
        this.viewabilityConfig = { itemVisiblePercentThreshold: 40 }
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        this.setState({ currentPage: this.state.currentPage - 1 })
                    }}>
                        <Text style={{ fontSize: 15, fontWeight: '600' }}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.state.currentPage < this.state.max ?
                            this.setState({ currentPage: this.state.currentPage + 1 }) : this.setState({ currentPage: this.state.max })
                        }}>
                        <Text style={{ fontSize: 15, fontWeight: '600' }}>Done</Text>
                    </TouchableOpacity>


                </View>
                <View style={styles.stepIndicator}>
                    <StepIndicator
                        customStyles={stepIndicatorStyles}
                        stepCount={this.state.max}
                        direction='vertical'
                        currentPosition={this.state.currentPage}
                        labels={dummyData.data.map(item => item.title)}
                    />
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    stepIndicator: {
        flex: 9,
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    header: {
        backgroundColor: '#7fffd4',
        height: 40,
        flex: 1,
        marginTop: Platform.OS === "ios" ? 34 : 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 20,
        paddingLeft: 20

    },
    title: {
        flex: 1,
        fontSize: 20,
        color: '#333333',
        paddingVertical: 16,
        fontWeight: '600'
    },
    body: {
        flex: 1,
        fontSize: 15,
        color: '#606060',
        lineHeight: 24,
        marginRight: 8
    }
})