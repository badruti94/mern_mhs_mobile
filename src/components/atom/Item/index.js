import axios from 'axios'
import React from 'react'
import { Text, Image, View, Button, Alert } from 'react-native'
import styles from './item-style'

const Item = ({ setIsTambah, setIsUpdate, getData, setId, ...mhs }) => {
    const hapusHandler = () => {
        Alert.alert(
            'Hapus Data ',
            'Apa anda yakin ingin menghapus data ini?',
            [
                {
                    text: "Ya",
                    onPress: () => {
                        axios.delete(`http://192.168.43.203:4000/mhs/${mhs._id}`)
                            .then(data => {
                                getData()
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                },
                {
                    text: 'tidak',
                    onPress: () => { }
                }
            ]
        )
    }
    const ubahHandler = () => {
        setId(mhs._id)
        setIsTambah(true)
        setIsUpdate(true)
    }
    return (
        <View style={styles.itemWrapper} >
            <View >
                <Image style={styles.img} source={{ uri: `http://192.168.43.203:4000/public/assets/images/${mhs.foto}` }} />
            </View>
            <View style={styles.infoWrapper} >
                <View>
                    <Text>{`${mhs.nim} ${mhs.nama} ${mhs.kelas}`}</Text>
                </View>
                <View>
                    <Text>{mhs.motto}</Text>
                </View>
            </View>
            <View style={styles.buttonWrapper} >
                <Button color="orange" title="ubah" onPress={ubahHandler} />
                <Button color="red" title="hapus" onPress={hapusHandler} />
            </View>
        </View>
    )
}

export default Item
