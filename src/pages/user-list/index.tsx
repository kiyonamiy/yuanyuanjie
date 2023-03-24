import React, { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import SearchPanel from "./search-panel";
import List from "./list";
import "./index.scss";
import { mockUserList } from "./mock-data";

export default () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [genderFilter, setGenderFilter] = useState<"MALE" | "FEMALE">();
  const [nameFilter, setNameFilter] = useState<string>();
  useEffect(() => {
    // TODO @kiyonamiy 根据筛选条件，向后端请求，拿到列表
    Promise.resolve<User[]>(
      mockUserList.filter(
        ({ name, gender }) =>
          (nameFilter != null ? name.includes(nameFilter) : true) &&
          (genderFilter != null ? gender === genderFilter : true)
      )
    ).then(result => {
      setUserList(result);
    });
  }, [genderFilter, nameFilter]);

  return (
    <View className="page-container">
      <SearchPanel
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
      />
      <List dataSource={userList} />
    </View>
  );
};
