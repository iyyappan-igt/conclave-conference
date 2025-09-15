import React from 'react'
import styles from './styles.module.css'
// import { useFormik } from 'formik';
// import * as Yup from "yup";
// import { useAuth } from '@/redux/selectors/auth/authSelector';

const JoinOphthall = ({ data }) => {
    // const { token } = useAuth();
    // const Formik = useFormik({
    //     initialValues: {
    //         your_name: "",
    //         hospital_name: "",
    //         mobile_number: "",
    //         email: ""
    //     },
    //     validationSchema: Yup.object().shape({
    //         new_password: Yup.string()
    //             .required("Password required")
    //             .matches(
    //                 /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //                 "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character"
    //             ),

    //         confirm_password: Yup.string()
    //             .required("confirm password required")
    //             .oneOf([Yup.ref("new_password"), null], "Passwords must match"),
    //     }),

    //     onSubmit: (value) => {
    //         console.log("knk", value);
    //         const sendData = {
    //             your_name: localStorage.getItem("your_name"),
    //             hospital_name: localStorage.getItem("hospital_name"),
    //             password: value?.new_password,
    //         };

    //         useResetPasswordMutation(
    //             { values: sendData },
    //             {
    //                 onSuccess: () => {
    //                     Router.replace("/login");
    //                 },
    //             }
    //         );
    //     },
    // });

    return (
        <section className={`${styles.container} container-fluid`}>
            <div className={`${styles.contentContainer} container`}>
                <h2 className={styles.title}>{data?.title}</h2>           
                <div className={`d-flex flex-column align-items-center justify-content-center gap-4 mt-4`}>
                    <div className={`text-end ${styles.content}`}>
                        <p className={styles.description1}>
                          {data?.description}
                        </p>
                    </div>
                    <div className={`${styles.buttonGroup} d-flex gap-3`}>
                        <a><button className={`btn fw-bold bg-black text-white ${styles.button}`}>{data?.buttonText1}</button></a>
                        <a href='/login'><button className={`btn fw-bold bg-black text-white ${styles.button}`}>{data?.buttonText2}</button></a>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default JoinOphthall
