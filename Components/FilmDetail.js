import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator, Image } from 'react-native'
import { getDetailFromApi, getBanImageFromApi } from '../API/TMDB';
import { ScrollView } from 'react-native-gesture-handler';

class FilmDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            film : 'undefined',
            isLoading : true
        }
    }

    componentDidMount() {
        getDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
            this.setState({
                film : data,
                isLoading : false
            })
        })
    }

    displayFilm() {
        const film = this.state.film
            return (
                <ScrollView>
                    <Image
                        style={{ height : 169, flex : 1, backgroundColor : 'grey' }}
                        source={{ uri: getBanImageFromApi(film.backdrop_path) }}
                    />
                    <Text style={{ flex : 1, fontSize : 20, textAlign : 'center', marginTop : 20  }}>{ film.title }</Text>
                    <Text style={{ flex : 1, marginTop : 20, marginLeft : 5, marginRight : 5  }}>{ film.overview }</Text>
                    <Text style={{ flex : 1, fontWeight : 'bold', marginTop : 20, marginLeft : 5, marginRight : 5 }}>Sorti le { film.release_date }</Text>
                </ScrollView>
            )
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

    render() {
        const idFilm = this.props.navigation.state.params.idFilm
        return (
            <View style={{ flex : 1 }}>
                {this.displayFilm()}
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loader : {
        position : 'absolute',
        top : 100,
        left : 0,
        right : 0,
        bottom : 0,
        alignItems : 'center',
        justifyContent : 'center',
    }
})

export default FilmDetail