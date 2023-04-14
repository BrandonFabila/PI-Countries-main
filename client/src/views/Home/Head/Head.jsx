import style from './Head.module.css'
import { ReactComponent as WorldIcon } from '../../../modules/extra/w1.svg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getActivities, getAllDB } from '../../../redux/actions';


const Head = () => {
    const styles = {
        width: '50px',
        height: '50px'
      };

    const dispatch = useDispatch();
    const [ name, setName ] = useState('');
    
    //input
    function handleInputChange(e) {
      e.preventDefault();
      setName(e.target.value);
    }

    //action
    function handleSubmit(e) {
        e.preventDefault();
        let found = getAllDB(name);
        if (!name) {
            return alert('Debe ingresar el nombre');
        } else {
            dispatch(found)
        }
    }

    //actualizar
    function handleClick(e) {
        e.preventDefault();
        dispatch(getAllDB())
        dispatch(getActivities())
    }

    return (
        <div className={style.contPrincipal}>
            <div className={style.contTitle} >
                <div className={style.contImg} >
                    <WorldIcon style={styles} />
                </div>
                <h1 className={style.contText} >
                    Countries Tour
                </h1>
            </div>
            <div>
                <button 
                    className={style.button} 
                    onClick={e =>{ handleClick(e)}} >actualizar</button>
            </div>
            <div className={style.inputcontainer}>
                <input 
                    type="text" 
                    name="search" 
                    className={style.input} 
                    placeholder="SEARCH BY NAME" 
                    onChange={e => handleInputChange(e)}
                    onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}
                />
                <span 
                    className={style.icon} 
                    onClick={e => handleSubmit(e)} 
                > 
                    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
                            <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> 
                            <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path> 
                        </g>
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default Head;