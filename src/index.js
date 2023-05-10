import Cities from './Cities/Cities'
import City from './Cities/City'
import AddCity from './AddCity/AddCity'

import { colors } from './theme'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Navi = createNativeStackNavigator();

// function CitiesNavi(){
//     return (
//         <NavigationContainer>
//             <Navi.Navigator
//             screenOptions={{
//                 headerTintColor: '#fff',
//                 headerStyle: {backgroundColor: colors.primary}}}>
//                 <Navi.Screen name="Cities" screen="Cities"/>
//                 <Navi.Screen name="City" screen="City"/>
//             </Navi.Navigator>
//         </NavigationContainer>
//     )
// }

const AppTabs = createBottomTabNavigator();

function returnTabs(){
    return (
        <NavigationContainer>
            <AppTabs.Navigator>
                <AppTabs.Screen name="CitiesNavi" component="CitiesNavi" />
                <AppTabs.Screen name="AddCity" component="AddCity" />
            </AppTabs.Navigator>
        </NavigationContainer>
    )
}

//const Tabs = creaeteNativeStackContainer(AppTabs)

//export default Tabs

//export default CitiesNavi;
export default returnTabs;