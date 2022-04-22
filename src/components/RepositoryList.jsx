import { Text, FlatList } from "react-native";
import repositories from '../data/repositories';
import { RepositoryItem } from "./RepositoryItem";

export const RepositoryList = () =>{
    return(
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={()=> <Text> </Text>}
            renderItem={({item: repo})=>(
                <RepositoryItem {...repo} />
            )}
        />
    )
}