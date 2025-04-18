import React from 'react'
import styles from "./dashboard-doctor.module.css" // Importar estilos de Login modules
import { useNavigate } from "react-router-dom";
import Navbar_G from '../../../components/NavBars/Navbar_Globla';
import Calendarcomponent from '../../../components/Calendar/Calendar';

const Ddoctor: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.DashDoctor}>
            <Navbar_G 
                profileText='Perfil'
                profileImg='public/user.png'
                centerText='¡Bienvenido, Nombre!'
                menuItems={[{label: "Configuraciones", path: "/"}]}
                onLogout={()  => navigate('/login')}
            />

            <h1 className={styles.title}> Aca podras ver todo lo que necesitas </h1>
            
            <div className={styles.container}>
                    <div className={styles.important}>
                        <h1 className={styles.importantTitle}> Novedades Importantes </h1>
                        <div className={styles.contentContainer}>
                            <div className={styles.cards}>

                            </div>
                            <div className={styles.calendar}>
                                {/* CALENDAR */}
                                <h1 className={styles.calendarTitle}> Proximos Eventos </h1>
                                <Calendarcomponent />
                            </div>
                        </div>
                    </div>
                
                    <div className={styles.sidebar}>
                        <h1 className={styles.subtitle}> Menú </h1>
                        <button type='submit' className={styles.button} onClick={() => navigate("/list_patients_doctor")}> Pacientes </button>
                        <button type='submit' className={styles.button} onClick={() => navigate("/")}> Notificaciones </button>
                    </div>
            </div>
        </div>
    )
}

export default Ddoctor