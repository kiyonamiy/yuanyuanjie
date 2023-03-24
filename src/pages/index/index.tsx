import { Component, PropsWithChildren } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!?</Text>
        <Button
          onClick={() => {
            Taro.navigateTo({
              // TODO @kiyonamiy 路由常量列表（减少 url 拼错、 url 改动需要改动代码的问题）
              url: "/pages/user-list/index"
            });
          }}
        >
          跳转至“用户列表”
        </Button>
      </View>
    );
  }
}
