import {
  View,
  Input,
  Picker,
  BaseEventOrig,
  PickerSelectorProps,
  InputProps
} from "@tarojs/components";
import { useCallback, useState, useEffect } from "react";
import { mockGenderDataSource } from "./mock-data";

interface SearchPanelProps {
  genderFilter: "FEMALE" | "MALE" | undefined;
  setGenderFilter: React.Dispatch<
    React.SetStateAction<"FEMALE" | "MALE" | undefined>
  >;
  nameFilter?: string;
  setNameFilter: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default (props: SearchPanelProps) => {
  const { nameFilter, setNameFilter, genderFilter, setGenderFilter } = props;
  const [genderDataSource, setGenderDataSource] = useState<Selector[]>([]);
  // TODO @kiyonamiy 请求接口拿到
  useEffect(() => {
    Promise.resolve(mockGenderDataSource).then(result => {
      setGenderDataSource(result);
    });
  }, []);

  const nameInputOnChange = useCallback(
    (e: BaseEventOrig<PickerSelectorProps.ChangeEventDetail>) => {
      setNameFilter(e.detail.value as string);
    },
    []
  );

  const genderPickerOnChange = useCallback(
    (e: BaseEventOrig<InputProps.inputEventDetail>) => {
      setGenderFilter(genderDataSource[e.detail.value]?.value);
    },
    [genderDataSource]
  );

  return (
    <View className="search-container">
      <Input
        type="text"
        placeholder="姓名"
        value={nameFilter}
        onInput={nameInputOnChange}
      />
      <View>
        <Picker
          mode="selector"
          range={genderDataSource.map(s => s.name)}
          onChange={genderPickerOnChange}
        >
          <View>
            {genderDataSource.find(({ value }) => value === genderFilter)
              ?.name || "性别"}
          </View>
        </Picker>
      </View>
    </View>
  );
};
