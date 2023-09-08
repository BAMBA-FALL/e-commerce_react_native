import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES} from '../../constants/index'
import styles from './welcom.style'
import { Feather, Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'




const Welcom = () => {
const navigation = useNavigation();
  return (

    <View>
    
    <View style={styles.welcomTxt(COLORS.black, SIZES.xSmall)}>
    <Text style={styles.welcomTxt}>
          {" "} 
      Find the most
    </Text>
    <Text style={styles.welcomTxt(COLORS.primary, 0)}>
          {" "} 
      Luxurious Furniture
      </Text>
    </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
        <Feather name='search' size={24} style={styles.searchIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.searchInput}
          value=''
          onPressIn={()=>navigation.navigate("Search")}
          placeholder='lan ngay weur ?'
          />
        </View>
        <View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite}/>
        </TouchableOpacity>
      </View>

      </View>

    </View>
  )
}

export default Welcom