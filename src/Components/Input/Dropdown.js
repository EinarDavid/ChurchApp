import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Images from '../../Config/Images';

export const DropdownInput = ({data, value, itemChange}) => {
  const renderItem = (item = '') => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          // <AntDesign
          //     style={styles.icon}
          //     color="black"
          //     name="Safety"
          //     size={20}
          // />

          <Image style={{width: 24, height: 24}} source={Images.CHECKICON} />
        )}
      </View>
    );
  };
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      // inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      // search
      maxHeight={170}
      labelField="label"
      valueField="value"
      placeholder="Selecciona estado"
      // searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        itemChange(item.value);
      }}
      renderLeftIcon={() => (
        // <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        
        <Image style={{width: 20, height: 20}} source={Images.CHECKICON} />
      )}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    // margin: 16,
    // marginRight: 15,
    height: 30,
    width: 170,
    backgroundColor: 'white',
    borderRadius: 25,
    //   border: 1px solid ,
    borderWidth: 1,
    borderColor: '#00796B',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    color: '#00796B',
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    color: '#00796B',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: '#00796B',
  },
  placeholderStyle: {
    fontSize: 12,
    //   backgroundColor: 'blue',
    color: '#00796B',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#00796B',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
