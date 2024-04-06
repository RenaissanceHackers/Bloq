import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '@/Utils/common'
import { SvgProps } from 'react-native-svg'
import theme from '@/Assets/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Frame629351Props = {
  icon1: React.FC<SvgProps> | null
  text: string,
  icon2: React.FC<SvgProps>
  isNew: boolean
  onPress?: () => void;
}

const Frame629350Component: React.FC<{ data: Frame629351Props[] }> = ({ data }) => {
  return (
    <View style={styles.frame629350}>
      {data.map((item, index) => (
        <TouchableOpacity onPress={item.onPress} key={index}>
          <View style={styles.frame629351}>
            <View style={styles.frame629419}>
              {item.icon1 === null ? null : <item.icon1 />}
              <Text style={styles.text}>{item.text}</Text>
              {item.isNew ? (
                <View style={styles.tags}>
                  <Text style={styles.tagsText}>New!</Text>
                </View>
              ) : null}
            </View>
            <item.icon2 />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};


export default Frame629350Component

const styles = StyleSheet.create({
  frame629351: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 24,
    width: SCREEN_WIDTH - 16 - 16 - 16 - 16,
  },
  frame629419: {
    flexDirection: "row",
    gap: 16,
    height: 24
  },
  text: {
    fontFamily: theme.global.fontFamilies.poppins.value,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    color: "#000000"
  },
  tags: {
    paddingTop: 4,
    paddingRight: 8,
    paddingBottom: 4,
    paddingLeft: 8,
    gap: 8,
    backgroundColor: theme.global.Semi.usage.primary['--color-primary'].value,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 24,
    width: 46
  },
  tagsText: {
    lineHeight: 16,
    fontSize: 12,
    fontFamily: theme.global.fontFamilies.poppins.value,
    fontWeight: "400",
    color: "#FFFFFF"

  },
  frame629350: {
    width: SCREEN_WIDTH - 16 - 16,
    borderRadius: 16,
    gap: 24,
    backgroundColor: theme.global.Semi.usage.bg['--color-bg-0'].value,
    padding: 16
  },
})