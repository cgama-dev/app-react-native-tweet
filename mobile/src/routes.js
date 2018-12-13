import { createStackNavigator, createAppContainer } from 'react-navigation'

import Login from './screens/Login'
import TimeLine from './screens/TimeLine'
import Tweet from './screens/Tweet'
import New from './screens/New'

const RoutesNavigator = createStackNavigator({
    Login:{
        screen: Login
    },
    TimeLine:{
        screen: TimeLine
    },
    Tweet:{
        screen: Tweet
    },
    New:{
        screen: New
    }
})

const Routes = createAppContainer(RoutesNavigator);

export default Routes