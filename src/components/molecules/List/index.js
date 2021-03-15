import React from 'react'
import { ScrollView, View } from 'react-native'
import { Item } from '../../atom'

const List = ({ getData, mhss, setIsTambah, setIsUpdate, setId, ...rest }) => {
    return (
        <ScrollView >
            {
                mhss && mhss.map(mhs => {
                    return (
                        <Item setIsTambah={setIsTambah} setIsUpdate={setIsUpdate} getData={getData} key={mhs._id} setId={setId} {...mhs} />
                    )
                })
            }
        </ScrollView>
    )
}

export default List
