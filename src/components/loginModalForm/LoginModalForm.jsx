import { useForm } from 'react-hook-form';
import css from './LoginModalForm.module.css';
import Button from '../button/Button';

const LoginModalForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form className={css.formContainer} onSubmit={handleSubmit((data) => console.log(data))}>
            <h2 className={css.formTitle}>Log In</h2>
            <p className={css.formText}>Welcome back! Please enter your credentials to access your account and continue your babysitter search.</p>
            <div className={css.inputBox}>
                <input className={css.inputField} {...register('Email')} />
                <input className={css.inputField} {...register('Password', { required: true })} />
            </div>
            {errors.lastName && <p> Email is required.</p>}
            {errors.age && <p> Please enter Password.</p>}
            <Button className={css.btn} type="submit" >Log In</Button>
        </form>
    );
};

export default LoginModalForm;

