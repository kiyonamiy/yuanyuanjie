export const mockUserList: User[] = [
  {
    name: "kiyonamiy",
    gender: "MALE",
    tel: "110"
  },
  {
    name: "ymf",
    gender: "FEMALE",
    tel: "120"
  },
  {
    name: "zzp",
    gender: "MALE",
    tel: "1233"
  }
];

for (let i = 0; i < 30; i += 1) {
  mockUserList.push({
    name: "测试人" + i,
    gender: i % 2 === 0 ? "FEMALE" : "MALE",
    tel: new Array(8).fill(i).join("")
  });
}

export const mockGenderDataSource: Selector[] = [
  {
    value: "MALE",
    name: "男"
  },
  {
    value: "FEMALE",
    name: "女"
  }
];
