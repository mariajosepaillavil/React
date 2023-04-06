//Los componentes siempre tienen que partir con mayúsculas.
import React from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const CursorEnSuperposicion= () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Aquí se detalla la pista solicitada :D 
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="success">Descubre la pista secreta, que te ayudará en el desafío</Button>
    </OverlayTrigger>
  );
}

export default CursorEnSuperposicion;