import { useState } from 'react';
import style from './Form.module.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postActivity } from '../../../redux/actions';

const Form = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //estado para inputs gracias al hook use state
    const [ form, setForm] = useState({
        name: "",
        idpais: "",
        dificultad: "",
        duracion: "",
        temporada: "",
    });

    const [ errors, setErrors ] = useState({
        name: "",
        idpais: "",
        dificultad: "",
        duracion: "",
        temporada: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
      
        setForm((prevForm) => ({
        //utiliza el estado anterior
          ...prevForm,
          [name]: value,
        }));
      
        validarFormulario({
          ...form,
          [name]: value,
        });
      };
      
    const validarFormulario = (form) => {
        setErrors((prevErrors) => ({
        //utiliza el estado anterior
          ...prevErrors,
          name: !form.name ? "El nombre de la actividad es obligatorio" : "",
          idpais: !form.idpais
            ? "Inserta al menos un ID"
            : form.idpais.length <= 2
            ? "Cada ID proporcionado debe contener 3 caracteres"
            : "",
          duracion: !form.duracion
            ? "Inserta la duracion"
            : form.duracion.length <= 5
            ? "Especifica la duracion con: horas, días ó semanas"
            : "",
          dificultad: !form.dificultad ? "Selecciona la dificultad" : "",
          temporada: !form.temporada ? "Selecciona la temporada" : "",
        }));
      };

      const handleFormSubmit = (event) => {
        event.preventDefault();
        validarFormulario(form);
        if (Object.values(errors).every((value) => value === "")) {
          dispatch(postActivity(form));
          alert('Actividad Creada')
          setForm({
            name: "",
            idpais: "",
            dificultad: "",
            duracion: "",
            temporada: "",
          });
          navigate("/home");
        }
      };
    
      

  console.log(errors)


    return (
        <div className={style.contPrincipal} >
            
            <form className={style.contForm} onSubmit={handleFormSubmit} >
            
            <div className={style.inputbox}>
                <input required="required" type="text" value={form.name} name='name' onChange={handleInputChange} />
                <span>Actividad</span>
                <i></i>
            </div>
            <div className={style.inputbox}>
                <input required="required" type="text" value={form.idpais} name='idpais' onChange={handleInputChange} />
                <span>ID's de paises | ejemplo: MEX, atf, aRG</span>
                <i></i>
            </div>
            <div className={style.inputbox}>
                <input required="required" type="text" value={form.duracion} name='duracion' onChange={handleInputChange} />
                <span>Duración</span>
                <i></i>
            </div>
            

            <div className={style.puntuacion} >
                <h2>Puntua la dificultad:</h2>
            </div>

            <div className={style.contstars} >    
                <div className={style.rating} value={form.name}>
                    <input 
                        type="radio" 
                        id="star5" 
                        name="dificultad" 
                        value="5"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="star5" title="text"></label>
                    <input 
                        type="radio" 
                        id="star4" 
                        name="dificultad" 
                        value="4" 
                        onChange={handleInputChange}
                    />
                    <label htmlFor="star4" title="text"></label>
                    <input 
                        type="radio" 
                        id="star3" 
                        name="dificultad" 
                        value="3" 
                        onChange={handleInputChange}
                    />
                    <label htmlFor="star3" title="text"></label>
                    <input 
                        type="radio" 
                        id="star2" 
                        name="dificultad" 
                        value="2" 
                        onChange={handleInputChange}
                    />
                    <label htmlFor="star2" title="text"></label>
                    <input 
                        type="radio" 
                        id="star1" 
                        name="dificultad" 
                        value="1" 
                        onChange={handleInputChange}
                    />
                    <label htmlFor="star1" title="text"></label>
                </div>
            </div>

            <div className={style.seasons} >
                <div className={style.seasonstile} >
                <div className={style.radioinputs}>
		            <label>
		            	<input 
                            className={style.radioinput} 
                            type="radio" 
                            name="temporada" 
                            value="Primavera" 
                            onChange={handleInputChange}  
                        />
		            		<span className={style.radiotile}>
		            			<span className={style.radioicon}>
		            			</span>
		            			<h4 className={style.radiolabel}>Primavera</h4>
		            		</span>
		            </label>
		            <label>
                        <input 
                            className={style.radioinput} 
                            type="radio" 
                            name="temporada" 
                            value="Verano" 
                            onChange={handleInputChange}  
                        />
		            	<span className={style.radiotile}>
		            		<span className={style.radioicon}>
		            		</span>
		            		<h4 className={style.radiolabel}>Verano</h4>
		            	</span>
		            </label>
		            <label>
                        <input 
                            className={style.radioinput} 
                            type="radio" 
                            name="temporada" 
                            value="Otoño" 
                            onChange={handleInputChange}  
                        />
		            	<span className={style.radiotile}>
		            		<span className={style.radioicon}>
		            		</span>
		            		<h4 className={style.radiolabel}>Otoño</h4>
		            	</span>
		            </label>
                    <label>
                        <input 
                            className={style.radioinput} 
                            type="radio" 
                            name="temporada" 
                            value="Invierno" 
                            onChange={handleInputChange}  
                        />
		            	<span className={style.radiotile}>
		            		<span className={style.radioicon}>
		            		</span>
		            		<h4 className={style.radiolabel}>Invierno</h4>
		            	</span>
		            </label>
                </div>
                    <h2>Selecciona una estacion</h2>
                </div>
            </div>

            <div>
                <button type="submit" className={style.submit} >
                    <strong>Crear</strong>
                </button>
            </div>
            
            </form>
            
        </div>
    )
};

export default Form;