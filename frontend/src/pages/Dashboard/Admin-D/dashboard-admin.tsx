import React from "react";
import styles from "./dashboard-admin.module.css";
import { useNavigate } from "react-router-dom";
import Navbar_G from '../../../components/NavBars/Navbar_Globla';
import ActionCard from "../../../components/Cards/action_cards";
import StatCard from "../../../components/Cards/StatCard";
import { FaUsers, FaUserShield, FaBell } from "react-icons/fa";
import { AiOutlineTeam, AiOutlineHeart, AiOutlineHome, AiOutlineWarning, AiOutlineUser } from "react-icons/ai";
import PatientDistributionChart from "../../../components/Charts/PatientDistributionChart";
import MedicalStaffGrowthChart from "../../../components/Charts/MedicalStaffGrowthChart";

const DashAdmin: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.DashAdmin}>
            <Navbar_G
                profileText='Perfil'
                profileImg='public/user.png'
                centerText='¡Bienvenido, Nombre!'
                menuItems={[{ label: "Configuraciones", path: "/" }]}
                onLogout={() => { navigate('/login'); }}
            />

            <div className={styles.container}>
                <div className={styles.actionCardsContainer}>
                    <ActionCard
                        icon={<FaUsers />}
                        title="Usuarios"
                        onClick={() => navigate('/user_list_admin')}
                    />
                    <ActionCard
                        icon={<FaUserShield />}
                        title="Roles"
                        onClick={() => navigate('/manage_roles')}
                    />
                    <ActionCard
                        icon={<FaBell />}
                        title="Notificaciones"
                        onClick={() => navigate('/notifications_admin')}
                    />
                </div>

                <div className={styles.mainContent}>
                    <div className={styles.statsGrid}>
                        <StatCard
                            title="Total de Pacientes Registrados"
                            value="1,250"
                            icon={<AiOutlineUser />}
                            progress={100}
                            color="#3877ff"
                            onClick={() => navigate('/login')}
                        />
                        <StatCard
                            title="Pacientes Activos"
                            value="850"
                            icon={<AiOutlineHeart />}
                            progress={(850 / 1250) * 100}
                            color="#66b566"
                            onClick={() => navigate('/login')}
                        />
                        <StatCard
                            title="Pacientes Inactivos"
                            value="400"
                            icon={<AiOutlineUser />}
                            progress={(400 / 1250) * 100}
                            color="#f58220"
                            onClick={() => navigate('/login')}
                        />
                        <StatCard
                            title="Médicos Registrados"
                            value="75"
                            icon={<AiOutlineTeam />}
                            progress={(75 / 100) * 100}
                            color="#8a53ff"
                            onClick={() => navigate('/login')}
                        />
                        <StatCard
                            title="Centros de Salud Afiliados"
                            value="12"
                            icon={<AiOutlineHome />}
                            progress={(12 / 20) * 100}
                            color="#3fb27f"
                            onClick={() => navigate('/health_center_list')}
                        />
                        <StatCard
                            title="Alertas de Alto Riesgo"
                            value="5"
                            icon={<AiOutlineWarning />}
                            progress={(5 / 10) * 100}
                            color="#e74c3c"
                            onClick={() => navigate('/login')}
                        />
                    </div>

                    <div className={styles.chartsGrid}>
                        <div className={styles.chartCard}>
                            <h3 className={styles.chartTitle}>Distribución de Pacientes</h3>
                            <PatientDistributionChart active={850} inactive={400} /> {/* Add the props here */}
                        </div>
                        <div className={styles.chartCard}>
                            <h3 className={styles.chartTitle}>Crecimiento de Personal Médico</h3>
                            <MedicalStaffGrowthChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashAdmin;