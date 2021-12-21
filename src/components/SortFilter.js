import React, {useState} from 'react'

const SortFilter = ({dataSort,dataFilColor,dataFilBrand,dataFilDiscount}) => {
    const [selectVS, setSelectV] = useState("");
    const [selectVFC, setSelectVFC] = useState("");
    const [selectVFD, setSelectVFD] = useState("");
    const [selectVFB, setSelectVFCB] = useState("");

    return (
        <div className='sf-container'>
            <div className='sort sort-by'>
                <select value = {selectVS} onChange = {dataSort} className='sort-list' >
                    <option value = "all"> Sort by Price: </option>
                    <option value = "descsort"> Sort by Price: High to Low</option>
                    <option value = "ascsort"> Sort by Price: Low to High</option>
                </select>
            </div>

            <div className='filter filter-by' >
                <select value = {selectVFC} onChange = {dataFilColor} className='sort-list' >
                    <option value = "allColor" > Filter by: Color </option>
                    <option value = "Blue"> Blue</option>
                    <option value = "Green"> Green</option>
                    <option value = "Pink"> Pink</option>
                </select>
            </div>

            <div className='filter filter-by' >
                <select value = {selectVFB} onChange = {dataFilBrand} className='sort-list' >
                    <option value = "all" > Filter by: Brand </option>
                    <option value = "Tokyo Talkies"> Tokyo Talkies</option>
                    <option value = "Dennis Lingo"> Dennis Lingo</option>
                    <option value = "MARC LOUIS"> MARC LOUIS</option>
                </select>
            </div>

            <div className='filter filter-by' >
                <select value = {selectVFD} onChange = {dataFilDiscount} className='sort-list' >
                    <option value = "all" > Filter by: Discount </option>
                    <option value = "(83% OFF)"> 83%</option>
                    <option value = "(81% OFF)"> 81%</option>
                    <option value = "(85% OFF)"> 85%</option>
                </select>
            </div>
        </div>
    )
}

export default SortFilter
