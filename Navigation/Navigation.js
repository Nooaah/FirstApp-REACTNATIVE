import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Components/Login.js'
import Search from '../Components/Search.js'
import FilmDetail from '../Components/FilmDetail.js'

const SearchStackNavigator = createStackNavigator({
    Login : {
        screen : Login,
        navigationOptions : {
            title : "Connexion"
        }
    },
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