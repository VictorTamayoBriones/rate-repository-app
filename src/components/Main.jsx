import { View, Text } from "react-native";
import { Route, Routes } from "react-router-native";
import { RepositoryList } from './RepositoryList';
import { AppBar } from "./Appbar";

export const Main = () =>{
    return(
        <View style={{ flex: 1 }}>
            <AppBar/>
            <Routes>
                <Route path="/" element={<RepositoryList/>} />
                <Route path="/sigin" element={ <Text>Working on in</Text> } />
            </Routes>
        </View>
    )
}