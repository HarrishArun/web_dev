import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../components/spinners';
import { Link } from 'react-router-dom';
import{AiOutlineEdit} from'react-icons/ai';
import{BsInfoCircle} from'react-icons/bs';
import{MdOutlineAddBox,MdOutlineDelete} from'react-icons/md';
import BooksTable from '../../components/home/BooksTable';
import BooksCard from '../../components/home/BooksCard';
const Home = () => {
    const[books,setBooks]=useState([]);
    const[loading,setLoading]=useState(false);
    const[showtype,setShowType]=useState('table');

    useEffect(()=>{
        setLoading(true);
        axios
        .get('http://localhost:5555/books')
        .then((response)=>{
            setBooks(response.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        });
    },[])
  return (
    <div className='p-4'>
        <div className='flex justify-center items-center'><button className='bg-sky-300 px-4 py-1 rounded-lg'onClick={() => setShowType('card')} >Table</button>
        <button className='bg-sky-300 px-4 py-1 rounded-lg'onClick={() => setShowType('card')}>card</button></div>
        <div className=' flex justify-between items-center'>
            <h3 className='text-3xl my-8'>Books List</h3>
            <Link to='/books/create'>
                <MdOutlineAddBox className='text-sky-800 text-4xl'/>
            </Link>
        </div>
        {
            loading?(<Spinner/>):(showtype=='table'?<BooksTable books={books}/>:<BooksCard books={books}/>)
        }
    </div>
  )
}

export default Home