/* eslint-disable react/destructuring-assignment */
import InputRegister from '../../Register/components/InputRegister';

function Controlled({ touched, errors, values }, name) {
  return (
    <InputRegister
      touched={props.touched.firstName}
      errors={props.errors.firstName}
      fieldDescription="Nome"
      errorColor="var(--red)"
      fieldname="firstName"
      props={props}
      value={name}
      type="text"
    />
  );
}

export default Controlled;
