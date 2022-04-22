import { View, StyleSheet } from "react-native"
import { StyledText } from './StyleText';
import Constants from 'expo-constants';
import { theme } from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: theme.appBar.textPrimary
    }
})

const AppBarTap = ({active, to, children}) =>{
    return(
        <Link to={to}>
            <StyledText fontWeight='bold' style={styles.text} >{children}</StyledText>
        </Link>
    )
}

export const AppBar = () => {
    return(
        <View style={styles.container} >
            <AppBarTap active to="/" >Repos</AppBarTap>
            <AppBarTap active to="/sigin" >SigIN</AppBarTap>
        </View>
    )
}