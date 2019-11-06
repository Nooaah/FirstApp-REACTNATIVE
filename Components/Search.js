import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText} from '../API/TMDB.js'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            films : [],
            searchedText : ""
        }
    }

    _loadFilms() {
        getFilmsFromApiWithSearchedText(this.state.searchedText).then(data => this.setState({ films : data.results }))
    }

    _searchTextInputChange(text) {
        this.setState({ searchedText : text })
    }

    render() {
        return (
            <View style={ styles.mainContainer}>
                <TextInput onChangeText={(text) => this._searchTextInputChange(text)} placeholder="Titre du film" style={styles.textInput}/>
                <Button style={ styles.button } title="Rechercher" onPress={() => this._loadFilms()}/>
                <FlatList
                    data={this.state.films}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1, 
        marginTop: 25,
    },
    textInput : {
        marginLeft : 5,
        marginRight : 5,
        marginBottom : 10,
        marginTop : 10,
        borderColor : '#000000',
        borderWidth : 1,
        paddingLeft : 5
    },
    button : {
        backgroundColor : 'blue'
    }
})

export default Search