

const  validation = (inputs) => {
    let errors={};

    if(!inputs.businessname){
        errors.businessname="Business Name Required."
    }
    if(!inputs.businesswebsite){
        errors.businesswebsite="Business Website Required."
    }
    if(!inputs.ticketingsystem){
        errors.ticketingsystem="Ticketing System Required."
    }
     if(!/\S+@\S+\.\S+/.test(inputs.email)){
        errors.email="Please Enter a Valid Email"
    }
    if(inputs.password.length <= 8){
        errors.password="Password most be at least 8 characters"
    }

    return errors;
}

export default validation;
