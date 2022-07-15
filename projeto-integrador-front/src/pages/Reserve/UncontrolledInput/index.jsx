import InputRegister from '../../Register/components/InputRegister';

function Uncontrolled(
  { errors, touched, values },
  fieldDescription,
  fieldname
) {
  return (
    <InputRegister
      touched={touched.firstName}
      errors={errors.firstName}
      fieldDescription={fieldDescription}
      errorColor="var(--red)"
      fieldname={fieldname}
      props={props}
      value={values.fieldname}
      type="text"
    />
  );
}

export default Uncontrolled;
