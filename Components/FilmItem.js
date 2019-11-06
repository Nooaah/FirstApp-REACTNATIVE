import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmItem extends React.Component {
    render() {
        const film = this.props.film
        return (
            <View style={[styles.main_container, { flex : 1, marginTop : 10, marginLeft : 5, marginRight : 5 }]}>
                <View style={{ flex : 1, flexDirection : 'row' }}>
                    <View style={{ flex : 1, backgroundColor : 'grey' }}></View>
                    <View style={{ flex : 2 }}>
                        <View style={{ flexDirection : 'row', flex : 1 }}>
                            <View style={[styles.container, { flex : 2 }]}>
                                <Text>{ film.title }</Text>
                            </View>
                            <View style={[styles.container, { flex : 1 }]}>
                                <Text>{ film.vote_average }</Text>
                            </View>
                        </View>
                        <View style={[styles.container, { flex : 2 }]}>
                            {/* Commentaire */}
                            <Text numberOfLines={5}>{ film.overview }</Text>
                        </View>
                        <View style={[styles.container, { flex : 1 }]}>
                            <Text style={{ textAlign : 'right' }}>Sortie le { film.release_date }</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container : {
        height : 190
    },
    container : {
        padding : 5
    },
    title_text : {
        marginLeft : 5
    },
    note : {
        
    }
})

export default FilmItem