import { View, StyleSheet, ScrollView, TouchableWithoutFeedback } from "react-native"
import { StyledText } from './StyleText';
import Constants from 'expo-constants';
import { theme } from "../theme";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        flexDirection: 'row',
    },
    text: {
        color: theme.appBar.textsecondary,
        paddingHorizontal: 10
    },
    scroll: {
        paddingBottom: 15
    },
    active:{
        color: theme.appBar.textPrimary
    }
})

const AppBarTap = ({to, children}) =>{
    const { pathname } = useLocation();
    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return(
        <Link to={to} component={TouchableWithoutFeedback} >
            <StyledText fontWeight='bold' style={textStyles} >{children}</StyledText>
        </Link>
    )
}

export const AppBar = () => {
    return(
        <View style={styles.container} >
            <ScrollView horizontal style={styles.scroll} >
                <AppBarTap to="/" >Repos</AppBarTap>
                <AppBarTap to="/sigin" >Sigin</AppBarTap>
            </ScrollView>
        </View>
    )
}