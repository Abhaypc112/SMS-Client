export const RegistrationValidation = (formData) => {
    const newErrors = {
        name :'',
        email: '',
        password: '',
    };
    if(!formData.name?.trim()){
        newErrors.name = 'Name is required';
    }
    if (!formData.email?.trim()) {
        newErrors.email = 'Email is required';
    }else if (!/^[\w-.]+@[\w-]+\.+[\w-]{2,4}$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
    }
    if (!formData.password?.trim()) {
        newErrors.password = 'Password is required';
    }else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
    }    
    return newErrors;        
}