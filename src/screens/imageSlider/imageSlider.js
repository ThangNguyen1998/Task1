import React, { Component } from 'react'
import { StyleSheet, View, Platform, Text, Image, Modal, TouchableHighlight, Dimensions } from 'react-native';
import Slideshow from 'react-native-slideshow'
import Lightbox from 'react-native-lightbox'
SCREEN_WIDTH = Dimensions.get('window').width
SCREEN_HIGHT = Dimensions.get('window').height
export default class SlideshowTest extends Component {
    constructor() {

        super();

        this.state = {
            modalVisible: false,
            position: 0,
            interval: null,
            dataSource: [
                {
                    title: 'Title 1',
                    caption: 'Caption 1',
                    url: 'https://i.ytimg.com/vi/FN7ALfpGxiI/maxresdefault.jpg',
                }, {
                    title: 'Title 2',
                    caption: 'Caption 2',
                    url: 'https://2sao.vietnamnetjsc.vn/images/2019/01/13/21/33/sontung1.jpg',
                }, {
                    title: 'Title 3',
                    caption: 'Caption 3',
                    url: 'https://cdn.baogiaothong.vn/files/baogiay1/2015/04/09/20141029-so-tien-son-tung-m-tp-2159-9055-1416216673_490x294-0641.jpg',
                },
            ],
        };

    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length - 1 ? 0 : this.state.position + 1
                });
            }, 3000)
        });
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                

                    <Slideshow
                        dataSource={this.state.dataSource}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })}
                        onPress={() => {
                            clearInterval(this.state.interval);
                            this.setModalVisible(true);
                        }}
                    />
             
                <Modal 
                        visible={this.state.modalVisible}
                    >
                        <View style={{ flex: 1, backgroundColor: 'rgb(4,4,4)'}} >
                            <TouchableHighlight style={{ paddingLeft: 10, paddingBottom: 50 }}
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                    this.setState({
                                        interval: setInterval(() => {
                                            this.setState({
                                                position: this.state.position === this.state.dataSource.length - 1 ? 0 : this.state.position + 1
                                            });
                                        }, 3000)
                                    });
                                }}>
                                <Image style={{ height: 20, width: 20 }}
                                    source={require('../../data/ic-remove.png')} />
                            </TouchableHighlight>
                        </View>
                        <View style={{ alignItems: "center",backgroundColor: 'rgb(4,4,4)',paddingBottom:100 }}>
                        <Image style={{ height:SCREEN_HIGHT*4/6, width: SCREEN_WIDTH*4/5, resizeMode:"contain" }}
                                source={{ uri: this.state.dataSource[this.state.position].url }}
                            />
                        </View>
                    </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        backgroundColor: 'white'

    },

});
