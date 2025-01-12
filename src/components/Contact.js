import resume from '../assest/KirtiSuthar_Jaipur_Student_20-02-2002.pdf';

export const Contact=(props)=>{
    return(
        <div className=" bg-red-100 p-36 pt-20 pb-12 flex flex-col " id={props.idcontact}>
        <h2 className=" text-4xl font-bold text-gray-900 mb-8 shadow-xl shadow-red-200  w-11/12  border-b-4 border-red-300 ">Contact me</h2>
           <div className="flex flex-row max-w-3xl ">
           <div className="mr-40 flex flex-col w-full">
            <span className="mb-2"><i class="bi bi-envelope-arrow-down p-2 mb-4"></i>kirtisuthar2002@gmail.com</span>
            <span className="mb-4"><i class="bi bi-telephone p-2 "></i>1234567890</span>
            <div className="flex mb-6">
            <i class="bi bi-linkedin p-2 "></i>
            <i class="bi bi-twitter p-2 "></i>
            <i class="bi bi-facebook p-2 "></i>
            <i class="bi bi-whatsapp p-2 "></i>
            <i class="bi bi-instagram p-2 "></i>
            </div>
            <a href={resume} className="ring-2 ring-red-300 hover:focus:ring-offset-2 text-lg hover:focus:ring-4 hover:focus:ring-red-300 rounded bg-red-200 hover:bg-red-300 place-self-start px-4" download="resume">Download CV</a>
            </div>
               <form className="flex flex-col gap-8 w-full">
                   <input type="text" className="outline-none ring-1 ring-red-300 focus:ring-4  focus:ring-red-400  h-8 rounded-md" placeholder="Your Name"></input>
                   <input type="text" className="outline-none ring-1 ring-red-300 focus:ring-4  focus:ring-red-400  h-8 rounded-md" placeholder="Your Email"></input>
                   <input type="text" className="outline-none ring-1 ring-red-300 focus:ring-4  focus:ring-red-400  h-24 rounded-md" placeholder="Your Message"></input>
                    <button className="ring-2 ring-red-300 hover:focus:ring-offset-2 text-lg hover:focus:ring-4 hover:focus:ring-red-300 rounded bg-red-200 hover:bg-red-300 place-self-start px-4 ">Submit</button>
               </form>
            </div>
        </div>
    );
}