import { useForm } from 'react-hook-form';
import css from './RegistrationModalForm.module.css';
import { Button } from '../button/Button';

export const RegistrationModalForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form className={css.formContainer} onSubmit={handleSubmit((data) => console.log(data))}>
            <h2 className={css.formTitle}>Registration</h2>
            <p className={css.formText}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
            <div className={css.inputBox}>
                <input className={css.inputField} {...register('Name')} />
                <input className={css.inputField} {...register('Email')} />
                <input className={css.inputField} {...register('Password', { required: true })} />
            </div>
            {errors.lastName && <p> Email is required.</p>}
            {errors.age && <p> Please enter Password.</p>}
            <Button className={css.btn} type="submit" >Sign up</Button>
        </form>
    );
}