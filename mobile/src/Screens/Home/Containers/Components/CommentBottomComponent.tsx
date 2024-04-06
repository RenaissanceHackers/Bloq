import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import theme from '@/Assets/theme'
import { SCREEN_WIDTH } from '@/Utils/common'
import { Texts } from '@/Constants'

const CommentBottomComponent = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.frame629397}>
      <View style={styles.tabBarButton}>
        <View style={styles.inputContainer}>
          {/* <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Enter text here"
          /> */}
        </View>
        <TouchableOpacity>
          <View style={styles.iconArea}>
            <Text style={styles.send}>
              {Texts.CommentSend}
            </Text>
          </View>
        </TouchableOpacity>
      </View >
    </View >
  )
}

export default CommentBottomComponent

const styles = StyleSheet.create({
  frame629397: {
    backgroundColor: theme.global.Semi.usage.bg['--color-bg-0'].value,
    borderWidth: 1,
    borderColor: theme.global.Semi.usage.border['--color-border'].value,
    width: SCREEN_WIDTH,
    height: 83,
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "flex-end",
  },
  inputContainer: {
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 8,
    width: SCREEN_WIDTH - 8 - 68 - 16 - 16,
    backgroundColor: theme.global.Semi.usage.disabled['--color-disabled-fill'].value
  },
  // textInput: {
  //   height: 40,
  //   width: '100%',
  //   borderWidth: 1,
  //   borderColor: 'gray',
  //   paddingHorizontal: 10,
  // },
  tabBarButton: {
    width: SCREEN_WIDTH,
    height: 52,
    marginTop: 7,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    gap: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  send: {
    fontFamily: theme.global.fontFamilies.poppins.value,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 20,
    color: theme.global.Semi.usage.white['--color-white'].value,
  },
  iconArea: {
    backgroundColor: theme.global.Semi.usage.primary['--color-primary'].value,
    borderRadius: 999,
    width: 68,
    height: 36,
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
  }
})