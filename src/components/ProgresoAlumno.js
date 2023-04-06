//Los componentes siempre tienen que partir con mayúsculas.
import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgresoAlumno = () => {
  return (
    <ProgressBar animated now={22} variant="dark" label={`${2}/10`} />
  );
}

export default ProgresoAlumno;