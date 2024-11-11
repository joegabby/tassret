import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import VideoDetail from '../screens/VideoDetails';
import Categories from '../screens/categories';
const stack = createNativeStackNavigator();

export default function StackNav() {
    return (
        <NavigationContainer independent={true}>
            <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>        
                <stack.Screen name="Home" component={Home} />
                <stack.Screen name="VideoDetails" component={VideoDetail} />
                <stack.Screen name="Categories" component={Categories} />
            </stack.Navigator>
        </NavigationContainer>
    )
}