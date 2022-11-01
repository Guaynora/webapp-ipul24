import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import FormMovements from '../../components/form/FormMovements';
import TopComponent from '../../components/navTop/TopComponent'
import AuthContext from '../../context/AuthContext';
import useData from '../../hooks/useData';

const AddMovements = () => {
  const { token } = useContext(AuthContext);

  const { data } = useData("http://localhost:1337/movements");

  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <section className="container">
      <TopComponent back={true} />
      <FormMovements data={data} />
    </section>
  )
}

export default AddMovements