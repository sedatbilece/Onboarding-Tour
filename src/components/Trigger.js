import '../styles/Trigger.css';
function Trigger ({content,setStep,step}){



const item = document.getElementsByClassName(content.target)[0];

item.classList.add('clickable');

item.addEventListener('click', () => {
    item.classList.remove('clickable');
    setStep(step+1);
    
});


    return (<div >


    </div>)
}

export default Trigger;