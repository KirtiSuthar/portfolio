import {useState} from 'react';
import secpic from '../assest/aboutme.jpg';
//import secpic2 from '../assest/second.jpg';
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
        <div className="flex flex-col lg:flex-row bg-red-100 mx-auto px-6 md:px-12 lg:px-24 py-14 pt-20" id={props.idaboutme}>
            <div className="mb-8 lg:mb-0 lg:mr-9 w-full lg:w-1/3 flex justify-center" >
                <img src={secpic} className="rounded-lg ring-2 shadow-2xl shadow-pink-400 ring-offset-8 ring-red-200  max-w-full lg:max-w-sm" alt="second pic"/>
            </div>
            <div className="w-full lg:w-2/3">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-700">
                    About me 
                </h1>
                <p className="text-base md:text-lg mb-4 text-gray-700">I was born and raised in Jodhpur and am currently pursuing my Bachelor's degree. With a passion for reading, writing, and painting, I also enjoy playing volleyball. As a developer, I am driven by the goal of using my skills to create innovative solutions that make a meaningful impact on the world</p>
                <div className="border-b-2 border-slate-900 mb-4" >
                    <button onClick={Handleskill} className={`text-lg md:text-xl font-semibold mr-6 mb-2 ${
              skillin ? 'text-slate-900' : 'text-gray-600 hover:text-slate-900'
            }`}>Skills</button>
                    <button onClick={Handleexp} className={`text-lg md:text-xl font-semibold mr-6 mb-2 ${
              exp ? 'text-slate-900' : 'text-gray-600 hover:text-slate-900'
            }`}>Experience</button>
                    <button onClick={Handleeduc} className={`text-lg md:text-xl font-semibold mr-6 mb-2 ${
              educ ? 'text-slate-900' : 'text-gray-600 hover:text-slate-900'
            }`}>Education</button>
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