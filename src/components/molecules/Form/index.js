import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Image, Text, TextInput, View } from 'react-native'
import DocumentPicker from 'react-native-document-picker'

const Form = ({update, setIsTambah, setIsUpdate, id, getData, ...rest}) => {
    const [nim, setNim] = useState('')
    const [nama, setNama] = useState('')
    const [kelas, setKelas] = useState('')
    const [motto, setMotto] = useState('')
    const [foto, setFoto] = useState('')
    const [srcImg, setSrcImg] = useState(null)

    const filePickerHandler = () => {
        DocumentPicker.pick({
            type : [DocumentPicker.types.images]
        }).then( res => {
            console.log(res);
            setSrcImg(res.uri)
            setFoto(res)
        }).catch(err => {
            if(DocumentPicker.isCancel(err)){

            }else{
                throw err
            }
        })
    }
    const submitHandler = () => {
        console.log(nim);
        const data = new FormData()
        data.append('nim', nim)
        data.append('nama', nama)
        data.append('kelas', kelas)
        data.append('motto', motto)
        data.append('foto', foto)

        if(!update){
            axios.post(`https://mern-mhs-api-badruti94.vercel.app/mhs`, data, {
                headers: {
                    'content-type' : 'multipart/form-data'
                }
            })
            .then(data => {
                setIsTambah(false)
                getData()
            })
            .catch(err => {console.log(err)})
        }else{
            axios.put(`https://mern-mhs-api-badruti94.vercel.app/mhs/${id}`, data, {
                headers:{
                    'content-type' : 'multipart/form-data'
                }
            })
            .then(data => {
                setIsTambah(false)
                setIsUpdate(false)
                getData()
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    useEffect(()=>{
        if(update){
            console.log(id);
            axios.get(`https://mern-mhs-api-badruti94.vercel.app/mhs/${id}`)
            .then(data => {
                const mhs = data.data
                console.log(mhs);
                setNim(mhs.nim)
                setNama(mhs.nama)
                setKelas(mhs.kelas)
                setMotto(mhs.motto)
            })
            .catch(err => {
                console.log(err);
            })
        }
    },[])

    return (
        <View>
            <Text>{update ? 'update' : 'tambah'} </Text>
            <TextInput value={nim} onChangeText={setNim} placeholder="Masukan nim" />
            <TextInput value={nama} onChangeText={setNama} placeholder="Masukan Nama"/>
            <TextInput value={kelas} onChangeText={setKelas} placeholder="Masukan Kelas"/>
            <TextInput value={motto} onChangeText={setMotto} placeholder="Masukan Motto"/>
            <Image style={{height:50, width:50}} source={{uri: srcImg}} />
            <Button title="Pilih Foto" onPress={filePickerHandler} />
            <Button title="OK" onPress={submitHandler} />
        </View>
    )
}

export default Form
