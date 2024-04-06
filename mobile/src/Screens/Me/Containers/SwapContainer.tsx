import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CloseComponent from '@/Components/CloseComponent'
import TabComponent from '@/Components/TabComponent'
import { CommonStyles, Texts } from '@/Constants'
import TokenChoseCard from './Components/TokenChoseCard'
import PopUpBottomButton from '@/Components/PopUpBottomButton'
import { TouchableOpacity } from 'react-native'
import { Icons } from '@/Assets'
import theme from '@/Assets/theme'
type PopUpProps = {
    visible: boolean,
    onClose: () => void
    setNextVisibleTrue: () => void
}
const SwapContainer = ({ visible, onClose, setNextVisibleTrue }: PopUpProps) => {
    const handlePress = () => {
        onClose()
        setNextVisibleTrue()
    }
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={CommonStyles.rectangle56}>
                <View style={CommonStyles.rectangle54}>
                    <View>
                        <View style={CommonStyles.frame629473}>
                            <TabComponent text={Texts.WalletSwap} />
                            <CloseComponent handleClose={onClose} />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <TokenChoseCard tokenName={"SOL"} text1={"From"} text2={"Amount"} />
                        </View>
                        <View style={[CommonStyles.icon32, { backgroundColor: theme.global.Semi.usage.primary['--color-primary'].value, width: 40, height: 40, alignSelf: "center", marginTop: 10 }]}>
                            <Icons.SwapArrayDown />
                        </View>
                        <TokenChoseCard tokenName={"USDC"} text1={"To"} text2={"Amount"} />
                    </View>
                    <TouchableOpacity onPress={handlePress}>
                        <PopUpBottomButton text={"Next"} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default SwapContainer

const styles = StyleSheet.create({

})