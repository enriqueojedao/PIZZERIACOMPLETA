import React from 'react';
import './Profile.css';
import profilePhoto from '../../assets/images/Perfil_example.jpg';

const Profile = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <img
        src={profilePhoto}
        alt="Foto de usuario"
        className="profile-img"
      />
      <h2>Perfil de usuario</h2>
      <p>Email: usuario@example.com</p>
      {/* <button className="btn btn-danger">Cerrar sesión</button> */}
    </div>
  );
};

export default Profile;
