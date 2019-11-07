import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText} from '../API/TMDB.js'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.page = 0,
        this.totalPages = 0,
        this.state = { 
            films : [],
            searchedText : "",
            isLoading : false
        }
    }

    _displayDetailForFilm = (idFilm) => {
        this.props.navigation.navigate("FilmDetail", { idFilm : idFilm })
    }

    _displayLoading() {
        if (this.state.isLoading === true) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large"></ActivityIndicator>
                </View>
            )
        }
    }

    _loadFilms() {
        this.setState({ isLoading : true })
        getFilmsFromApiWithSearchedText(this.state.searchedText, this.page + 1).then(data => {
            this.page = data.page,
            this.totalPages = data.total_pages,
            this.setState({
                films : this.state.films.concat(data.results),
                isLoading : false 
            })
    })
    }

    _searchFilm() {
        this.page = 0
        this.totalPages = 0
        this.setState({ films : [] },
            this._loadFilms()
        )
    }

    _searchTextInputChange(text) {
        this.setState({ searchedText : text })
    }

    render() {
        return (
            <View style={ styles.mainContainer}>
                <TextInput onSubmitEditing={() => this._searchFilm()} onChangeText={(text) => this._searchTextInputChange(text)} placeholder="Titre du film" style={styles.textInput}/>
                <Button style={ styles.button } title="Rechercher" onPress={() => this._searchFilm()}/>
                <FlatList
                    data={this.state.films}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} DisplayDetailForFilm={this._displayDetailForFilm}/>}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.page < this.totalPages)
                        {
                            this._loadFilms();
                        }
                    }}
                />
                { this._displayLoading() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1
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
    },
    loader : {
        position : 'absolute',
        left : 0,
        right : 0,
        top : 100,
        bottom : 0,
        alignItems : 'center',
        justifyContent : 'center'
    }
})

export default Search