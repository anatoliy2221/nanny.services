import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import css from './Filters.module.css';

const Filters = () => {
    const selectId = useId();

    return (
        <Formik>
            <Form className={css.form}>
                <label htmlFor={selectId} className={css.label}>Filters</label>
                <Field className={css.field} as="select" id={selectId}>
                    <option className={css.option} value="01">A to Z</option>
                    <option className={css.option} value="02">Z to A</option>
                    <option className={css.option} value="03">Less than 10$</option>
                    <option className={css.option} value="04">Greater than 10$</option>
                    <option className={css.option} value="05">Popular</option>
                    <option className={css.option} value="06">Not popular</option>
                    <option className={css.option} value="07">Show all</option>
                </Field>
            </Form>
        </Formik>
    );
};

export default Filters;




