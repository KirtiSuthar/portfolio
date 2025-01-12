import {useState} from 'react';
import secpic from '../assest/contactus.jpeg';
import secpic2 from '../assest/second.jpg';
import { Education } from './Education';
import { Skill } from './Skill';
import { Experience } from './Experience';

export const Aboutme=(props)=>{
    const [skillin ,setskillin]= useState(true);
    const [educ,seteduc]=useState(false);
    const  [exp,setexp]=useState(false);
    const Handleskill=()=>{
        setskillin(true);
        seteduc(false);
        setexp(false);
    }
    const Handleeduc=()=>{
        setskillin(false);
        seteduc(true);
        setexp(false);
    }
    const Handleexp=()=>{
        setskillin(false);
        seteduc(false);
        setexp(true);
    }

    return(
        <div className="flex bg-red-100 mx-auto px-24 py-14 pt-20" id={props.idaboutme}>
            <div className="m-9" >
                <img src={secpic} className="rounded-lg ring-2 shadow-2xl shadow-pink-400 ring-offset-8 ring-red-200" alt="second pic"/>
            </div>
            <div className="max-w-3xl m-9">
                <h1 className="text-5xl font-extrabold mb-8 text-gray-700">
                    About me 
                </h1>
                <p className="text-lg mb-4">I was born and raised in Jodhpur and am currently pursuing my Bachelor's degree. With a passion for reading, writing, and painting, I also enjoy playing volleyball. As a developer, I am driven by the goal of using my skills to create innovative solutions that make a meaningful impact on the world</p>
                <div className="border-b-2 border-slate-900" >
                    <button onClick={Handleskill} className="text-xl  text-gray-600 font-semibold  mr-6   hover:text-slate-900 mb-2 active">Skills</button>
                    <button onClick={Handleexp} className="text-xl text-gray-600 font-semibold  mr-6  hover:text-slate-900 mb-2 ">Experience</button>
                    <button onClick={Handleeduc} className="text-xl text-gray-600 font-semibold  mr-6   hover:text-slate-900 mb-2 ">Education</button>
                </div>
                <div >
                   
                    {skillin && <Skill/>}
                    {educ && <Education/>}
                    {exp && <Experience/>}
                   
                </div>
            </div>
        </div>
    );
}