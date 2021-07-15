import { Alert } from 'react-bootstrap';

function AlertDismissible({alertSwitch}){
  return (
    <Alert variant="danger" onClose={alertSwitch} dismissible>
      <Alert.Heading>Ups, Ha ocurrido un error.</Alert.Heading>
    </Alert>
  );
}

export default AlertDismissible;