import { View } from "@tarojs/components";

interface ListProps {
  dataSource: User[];
}

export default (props: ListProps) => {
  const { dataSource } = props;
  return (
    <View className="list-container">
      {dataSource.map(({ name, gender, tel }) => (
        // TODO 样式
        <View key={`${name}${gender}${tel}`} className="list-item-container">
          <View>
            <View>姓名：{name}</View>
            <View>性别：{gender === "MALE" ? "男" : "女"}</View>
            <View>联系方式：{tel}</View>
          </View>
        </View>
      ))}
    </View>
  );
};
