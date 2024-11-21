import React from 'react'
import Header from '../header/Header';
import {useLocation} from 'react-router-dom';
import { blogs } from '../data/blogs';
export default function BlogDetails() {
    let uselocation=useLocation();
    let currentid=uselocation.pathname.split('/')[2];
    let currentData=blogs.filter((v)=>v.id==currentid)[0];
  return (
    <div>
        <Header/>
        <h3>
            {currentData.title}
        </h3>
    </div>
  )
}
