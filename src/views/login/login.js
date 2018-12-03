import React, { Component } from 'react';
import {
    Alert,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ImageBackground,
    Image,
    TextInput
} from 'react-native';
import { observer, inject } from 'mobx-react/native';
import Icons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width; // 全屏宽高
const height = Dimensions.get('window').height; // 全屏宽高
const IMG = require('../../img/login/logo.png');

class Login extends Component {
    static navigationOptions =({ navigation }) => ({
        title: '登录',
        headerLeft: (
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={{
                    marginLeft: 5,
                    width: 20
                }}
            >
                <Icons name="ios-arrow-back" size={25} color="#FFF" />
            </TouchableOpacity>),
        headerTitleStyle: {
            alignSelf: 'center', fontSize: 18, color: '#fff', fontWeight: 'bold'
        },
        headerStyle: { height: 35, backgroundColor: '#292929' },
        headerRight: (
            <TouchableOpacity
                onPress={() => {
                    navigation.state.params.handleShare();
                }}
            >
                <Text style={{
                    fontSize: 18,
                    color: '#fff',
                    fontWeight: 'bold',
                    marginRight: 10
                }}
                >
                    注册
                </Text>
            </TouchableOpacity>)
    });

    constructor(props) {
        super(props);
        this.state = {};
        this.onActionSelected = this.onActionSelected.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({ handleShare: this.onActionSelected });
    }

    onActionSelected() {
        this.props.navigation.navigate(
            'Register'
        );
    }

    render() {
        return (
            <View style={LoginStyles.root}>
                <View style={LoginStyles.mainContainer}>
                    <View style={{
                        flex: 2
                    }}
                    />
                    <View style={{
                        flex: 6,
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                    >
                        <View style={{
                            // flex: 1
                            marginBottom: 50,
                            width,
                            alignItems: 'center'
                        }}
                        >
                            <Image
                                source={IMG}
                                style={{
                                    width: 70,
                                    height: 80
                                }}
                            />
                        </View>
                        <View style={{
                            width,
                            alignItems: 'center',
                            height: 55,
                            marginBottom: 30,
                        }}
                        >
                            <TextInput
                                style={{
                                    borderColor: '#EDF0F3',
                                    borderWidth: 1,
                                    borderRadius: 30,
                                    height: 55,
                                    width: '80%'
                                }}
                                placeholder="手机号"
                                // onChangeText={(text) => {
                                //     text.length > 0
                                // ? this.setState({ buttonColor: true })
                                // : this.setState({ buttonColor: false });
                                //     this._address = text;
                                // }}
                            />
                        </View>
                        <View style={{
                            width,
                            alignItems: 'center',
                            height: 55,
                            marginBottom: 35,
                        }}
                        >
                            <TextInput
                                style={{
                                    borderColor: '#EDF0F3',
                                    borderWidth: 1,
                                    borderRadius: 30,
                                    height: 55,
                                    width: '80%'
                                }}
                                placeholder="密码"
                                // onChangeText={(text) => {
                                //     text.length > 0
                                // ? this.setState({ buttonColor: true })
                                // : this.setState({ buttonColor: false });
                                //     this._address = text;
                                // }}
                            />
                        </View>
                        <View
                            style={{
                                width,
                                alignItems: 'center',
                                height: 55,
                                marginBottom: 10,
                            }}
                        >
                            <TouchableOpacity style={{
                                width: '80%',
                                backgroundColor: '#333',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                height: 55,
                                borderRadius: 30
                            }}
                            >
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}
                                >
                                    登录
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {/* 忘记密码
                           <View style={{
                            width,
                            alignItems: 'center',
                            height: 55,
                            marginBottom: 30,
                        }}
                        >
                            <TouchableOpacity
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    width: '50%',
                                    height: 35,
                                }}
                                onPress={
                                    () => {
                                        this.props.navigation.navigate(
                                            'Forget'
                                        );
                                    }}
                            >
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    color: '#4b4b4b'
                                }}
                                >
                                    忘记密码
                                </Text>
                            </TouchableOpacity>
                        </View>

                        */}
                    </View>
                    <View style={{ flex: 3 }} />
                </View>
            </View>
        );
    }
}

export default Login;

const LoginStyles = StyleSheet.create({
    root: {
        flex: 1,
        width,
        height,
        backgroundColor: '#fff'
    },
    mainContainer: {
        width,
        height,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});
