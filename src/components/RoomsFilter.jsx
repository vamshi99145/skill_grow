import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context';
import Title from '../components/Title';
//to get all unique value
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, Technical_Assistant, Live_Classes
    } = context;

    //get unique type
    let types = getUnique(rooms, 'type');
    //get all
    types = ['all', ...types];

    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <div className="container mt-5">
            <Title title="Search Courses" />
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label htmlFor="type">Course Tech Stack</label>
                        <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="capacity">{`Level (1->10 = Basic->Advanced)`}</label>
                        <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                            {people}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Course Price ₹{price}</label>
                        <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                    </div>
                </div>
                <div className="col-md-4 col-12 ml-auto">
                    <div className="custom-control custom-checkbox my-5">
                        <input type="checkbox" className="custom-control-input" name="Technical_Assistant" id="Technical_Assistant" checked={Technical_Assistant} onChange={handleChange} />
                        <label htmlFor="Technical_Assistant" className="custom-control-label">Technical Assistant</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="Live_Classes" id="Live_Classes" checked={Live_Classes} onChange={handleChange} />
                        <label htmlFor="Live_Classes" className="custom-control-label">Live Classes</label>
                    </div>
                    <div className="input-group my-5">
                        <label htmlFor="size" className="mr-3">Course Duration (days) </label>
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="form-control" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="form-control" />
                    </div>
                </div>
            </div>
        </div>
    )
}