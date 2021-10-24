import React, {useState} from 'react';
import validation from './validation';
import { Container } from '../styles/Container.styled';
import { Appwrapper } from '../styles/Appwrapper.styled';
import { Formwrapper } from '../styles/formwrapper.styled';
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

import Input from '../component/input';


const Form = () => {

    const [selected, setSelected] = useState("Select your ticketing system");

    const [inputs, setInput] = useState ({
        businessname: "",
        businesswebsite: "",
        ticketingsystem: "",
        email: "",
        password: "",
        termofservice: "",
    });

    const changeHandler = (e) => {
        setInput({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const [errors, setErrors] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(inputs));
    };

    const stylesError = {
        fontSize: '16px',
        color: 'red',
        marginTop: '2px',
        fontFamily: 'sans-serif',
    }


    const styleTitle = {
        fontFamily: 'sans-serif',
        textAlign: 'center',
        fontSize: '30px !important',
        color: '#22386f',

    }

    const fieldWrapper= {
        marginTop: '10px',
        marginBottom: '15px',
    }

    const terms = {
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: '18px',
        color: '#33487a',
        marginTop: '65px',


    }


    const btn = {
        fontSize: '18px',
        width: '100%',
        height: '80px',
        backgroundColor: 'rgb(113, 211, 238)',
        color: '#FFF',
        marginTop: '24px',
        border: 'none',
        borderBottomRightRadius: '6px',
        borderBottomLeftRadius: '6px',
    }



    return (
        <Container>
            <Appwrapper>
                <Formwrapper>
                <header style={styleTitle}>
                    <span className="header-icon">
                        <FontAwesomeIcon icon={faCommentAlt} />
                    </span>
                    <h2 className="title">Tell us about <br/> yourself</h2>
                </header>
                
                <form>
                    <div className="name" style={fieldWrapper}>
                        <Input label="What is the name of your business" type="text" name="businessname" value={inputs.businessname} onChange={changeHandler} placeholder="Enter name of your business"/>
                        {errors.businessname && <p  style={stylesError} className="errors">{errors.businessname}</p>}
                    </div>
                    <div className="name" style={fieldWrapper}>
                        <Input label="Business website" type="text" name="businesswebsite" value={inputs.businesswebsite} onChange={changeHandler} placeholder="Enter Business website"/>
                        {errors.businesswebsite && <p style={stylesError} className="errors">{errors.businesswebsite}</p>}
                    </div>
                    <div className="name" style={fieldWrapper}>
                        
                        <Dropdown selected={selected} setSelected={setSelected} />
                        {errors.ticketingsystem && <p style={stylesError} className="errors">{errors.ticketingsystem}</p>}
                    </div>
                    <div className="name" style={fieldWrapper}>
                        <Input label="Your email" type="email" name="email" value={inputs.email} onChange={changeHandler} placeholder="Enter an Email"/>   
                        {errors.email && <p style={stylesError} className="errors">{errors.email}</p>}
                    </div>
                    <div className="name" style={fieldWrapper}>
                        <Input label="Password" type="password" name="password" value={inputs.password} onChange={changeHandler} placeholder="Enter Password"/>
                        {errors.password && <p  style={stylesError} className="errors">{errors.password}</p>}
                    </div>
                    <div style={terms}>
                    <input type="checkbox" id="termofservice" name="termofservice" value={inputs.termofservice} onChange={changeHandler}/>
                    <label for="termofservice"> I accept to the <u>Terms of Service</u></label>                    
                    </div>
                    
                </form>
                </Formwrapper>
                <div>
                        <button style={btn} className="submit" onClick={handleFormSubmit}>Sign Up</button>
                </div>
            </Appwrapper>
        </Container>
    )
}

export default Form;