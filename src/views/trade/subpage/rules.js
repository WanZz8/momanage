import React, { Component } from 'react';
import {
    Alert,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    ImageBackground,
    Image,
    TextInput
} from 'react-native';
import { observer, inject } from 'mobx-react/native';
import Icons from 'react-native-vector-icons/Ionicons';
import RulesItems from '../../../constant/rules';

const width = Dimensions.get('window').width; // 全屏宽高
const height = Dimensions.get('window').height; // 全屏宽高
// const IMG = require('../../img/login/logo.png');

class Rules extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '交易规则',
        tabBarIcon: ({ tintColor }) => (
            <Icons name="md-information-circle" size={25} color={tintColor} />
        ),
        headerTitleStyle: {
            alignSelf: 'center', fontSize: 18, color: '#fff', fontWeight: 'bold'
        },
        headerStyle: { height: 35, backgroundColor: '#292929' }
    });

    constructor(props) {
        super(props);
        this.state = {
            info: RulesItems
        };
        this.selectInfo = this.selectInfo.bind(this);
    }

    selectInfo(index) {
        let that = this;
        const tempInfo = that.state.info;
        const element = tempInfo[index];
        element.show = !element.show;
        this.setState({
            info: tempInfo
        });
    }

    renderInfo() {
        const content = this.state.info.map((item, i) => {
            if (item.show) {
                return (
                    <View key={i} style={RulesStyles.infoCellRoot}>
                        <TouchableHighlight onPress={() => this.selectInfo(i)}>
                            <View>
                                <View style={RulesStyles.descWrap}>
                                    <Text style={RulesStyles.leftDesc}>{item.title}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <Text style={RulesStyles.infoContent}>{item.content}</Text>
                    </View>
                );
            }
            return (
                <View key={i} style={RulesStyles.infoCellRoot}>
                    <TouchableHighlight onPress={() => this.selectInfo(i)}>
                        <View>
                            <View style={RulesStyles.descWrap}>
                                <Text style={RulesStyles.leftDesc}>{item.title}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            );
        });
        return content;
    }

    render() {
        return (
            <View style={RulesStyles.root}>
                <ScrollView style={RulesStyles.swiperContainer}>
                    <View style={RulesStyles.part1}>
                        <View style={{
                            width,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            height: 55,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 0.5,
                            paddingHorizontal: 15
                        }}
                        >
                            <Text
                                style={{
                                    textAlign: 'left',
                                    flex: 1,
                                    color: '#999',
                                    fontSize: 16
                                }}
                            >
                                交易品种
                            </Text>
                            <Text
                                style={{
                                    textAlign: 'right',
                                    flex: 1,
                                    fontSize: 16
                                }}
                            >
                                小道指
                            </Text>
                        </View>
                        <View style={{
                            width,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            height: 55,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 0.4,
                            paddingHorizontal: 15
                        }}
                        >
                            <Text style={{
                                textAlign: 'left',
                                flex: 1,
                                color: '#999',
                                fontSize: 16
                            }}
                            >
                                货币单位
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                flex: 1,
                                fontSize: 16
                            }}
                            >
                                美元
                            </Text>
                        </View>
                        <View style={{
                            width,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            height: 55,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 0.4,
                            paddingHorizontal: 15
                        }}
                        >
                            <Text style={{
                                textAlign: 'left',
                                flex: 1,
                                color: '#999',
                                fontSize: 16
                            }}
                            >
                                交易单位
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                flex: 1,
                                fontSize: 16
                            }}
                            >
                                每点5美元
                            </Text>
                        </View>
                        <View style={{
                            width,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            height: 55,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 0.4,
                            paddingHorizontal: 15
                        }}
                        >
                            <Text style={{
                                textAlign: 'left',
                                flex: 1,
                                color: '#999',
                                fontSize: 16
                            }}
                            >
                                最小波动
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                flex: 1,
                                fontSize: 16
                            }}
                            >
                                1个指数点
                            </Text>
                        </View>
                        <View style={{
                            width,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            height: 55,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 0.4,
                            paddingHorizontal: 15
                        }}
                        >
                            <Text style={{
                                textAlign: 'left',
                                flex: 1,
                                color: '#999',
                                fontSize: 16
                            }}
                            >
                                波动盈亏
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                flex: 1,
                                fontSize: 16
                            }}
                            >
                                波动一次 = 5 美元
                            </Text>
                        </View>
                        <View style={{
                            width,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            height: 150,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 0.4,
                            paddingHorizontal: 15
                        }}
                        >
                            <Text style={{
                                textAlign: 'left',
                                flex: 0.75,
                                color: '#999',
                                fontSize: 16
                            }}
                            >
                                交易时间
                            </Text>
                            <View style={{ flex: 1 }}>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                }}
                                >
                                    <Text style={{ fontSize: 16 }}>【买入时间】</Text>
                                    <Text style={{ fontSize: 14 }}>上午06：00：00 - 次04：15:00</Text>
                                    <Text style={{ fontSize: 14 }}>上午04：30：00 - 次04：50:00</Text>
                                </View>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                }}
                                >
                                    <Text style={{ fontSize: 16 }}>【买出时间】</Text>
                                    <Text style={{ fontSize: 14 }}>上午06：00：00 - 次04：15:00</Text>
                                    <Text style={{ fontSize: 14 }}>上午04：30：00 - 次04：50:00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            width,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            height: 55,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 0.4,
                            paddingHorizontal: 15
                        }}
                        >
                            <Text style={{
                                textAlign: 'left',
                                flex: 1,
                                color: '#999',
                                fontSize: 16
                            }}
                            >
                                清仓时间
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                flex: 1,
                                fontSize: 16
                            }}
                            >
                                次日04:55:00
                            </Text>
                        </View>
                        <View style={{
                            width,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            height: 55,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 0.4,
                            paddingHorizontal: 15
                        }}
                        >
                            <Text style={{
                                textAlign: 'left',
                                flex: 1,
                                color: '#999',
                                fontSize: 16
                            }}
                            >
                                交易综合费
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                flex: 1,
                                fontSize: 16
                            }}
                            >
                                158元 / 手
                            </Text>
                        </View>
                        <View style={{
                            width,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            height: 55,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 0.4,
                            paddingHorizontal: 15
                        }}
                        >
                            <Text style={{
                                textAlign: 'left',
                                flex: 1,
                                color: '#999',
                                fontSize: 16
                            }}
                            >
                                汇率
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                flex: 1,
                                fontSize: 16
                            }}
                            >
                                1美元=7.0人命币 (汇率波动较大时，将会进行调整)
                            </Text>
                        </View>
                        <View style={{
                            width,
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            height: 70,
                            paddingHorizontal: 15
                        }}
                        >
                            <Text style={{
                                textAlign: 'left',
                                flex: 1,
                                fontSize: 16
                            }}
                            >
                                交易综合费
                            </Text>
                        </View>
                    </View>
                    <View style={RulesStyles.part2}>
                        {this.renderInfo()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Rules;

const RulesStyles = StyleSheet.create({
    root: {
        flex: 1,
        width,
        backgroundColor: '#fff'
    },
    swiperContainer: {
        width
    },
    part1: {
        width,
    },
    part2: {
        width,
        justifyContent: 'space-around'
    },
    infoCellRoot: {
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1'
    },
    descWrap: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    leftDesc: {},
    rightDesc: {
        color: '#F7C5B6',
    },
    infoContent: {
        backgroundColor: '#fff',
        padding: 10
    },
});
