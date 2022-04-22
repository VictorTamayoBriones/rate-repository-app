import { Image, View, StyleSheet } from 'react-native';
import { StyledText } from './StyleText';
import { RepositoryStats } from './RepositoryStats';
import { theme } from '../theme';

export const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
        <StyledText fontSize='subheading' fontWeight='bold' >{props.fullName}</StyledText>
        <StyledText >{props.description}</StyledText>
        <StyledText style={styles.language} >{props.language}</StyledText>
        <RepositoryStats {...props} />
    </View>
)

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    language:{
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden'
    },
    image:{
        width: 48,
        height: 48,
        borderRadius: 4
    }
})