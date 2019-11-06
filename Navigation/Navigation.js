import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from '../Components/Search.js'
import FilmDetail from '../Components/FilmDetail.js'

const SearchStackNavigator = createStackNavigator({
    Search : {
        screen : Search,
        navigationOptions : {
            title : "Rechercher"
        }
    },
    FilmDetail : {
        screen : FilmDetail,
        navigationOptions : {
            title : "FilmDetail"
        }
    }
})

export default createAppContainer(SearchStackNavigator)