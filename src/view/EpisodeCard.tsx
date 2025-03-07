import { Emby } from "@api/emby";
import { Episode } from "@model/Episode";
import { StyleSheet, Text, TouchableOpacity, View, ViewProps, ViewStyle } from "react-native";
import { Image } from '@view/Image';

const style = StyleSheet.create({
    root: {

    },
    basic: {
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
    },
    cover: {
        width: "35%",
        marginLeft: 10,
        borderRadius: 5,
        flexShrink: 0,
        flexGrow: 0,
    },
    text: {
        flex: 1,
        textAlign: "center",
        paddingLeft: 5,
        paddingRight: 2.5
    },
    title: {
        fontWeight: "600"
    },
    overview: {
        color: "gray",
        maxHeight: 100
    }
});

export interface EpisodeCardProps {
    style?: Partial<ViewStyle>
    emby?: Emby|null;
    episode: Episode;
    onPress?: (episode: Episode) => void;
}

export function EpisodeCard({style: extraStyle, emby, episode, onPress}: EpisodeCardProps) {
    return (
        <TouchableOpacity activeOpacity={1.0} onPress={() => onPress?.(episode)}>
        <View style={{...style.basic, ...extraStyle}}>
            <Image style={{...style.cover, aspectRatio: episode.PrimaryImageAspectRatio}}
                source={{uri: emby?.imageUrl?.(episode.Id, episode.ImageTags.Primary)}} />
            <View style={style.text}>
                <Text style={style.title}>{episode.Name}</Text>
                <Text style={style.overview}
                    numberOfLines={10} 
                    ellipsizeMode="tail"
                    >
                    {episode.Overview}
                </Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}