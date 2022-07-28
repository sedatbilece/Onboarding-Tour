import '../styles/Welcome.css'


function Welcome({setShow,setStep}){

const setHandler = () => {
    setShow(1);
    setStep(-1); 
}

return (<div className='fixed'>

    <div className='welcome'>

       <div className='upper'>
        pic
       </div>
       <div className='lower'>
       <button className='btn' onClick={()=>setShow(1)} >Get Started</button>
       <button className='notnow' onClick={setHandler} >Not Now</button>
       
       </div>
       
        </div>



</div>)

}


export default Welcome;