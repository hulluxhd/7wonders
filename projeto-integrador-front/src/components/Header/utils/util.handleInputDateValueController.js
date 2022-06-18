function handleInputDateValueController(dateArray) {
  if (dateArray !== null) {
    const [checkin, checkout] = dateArray;
    return `${checkin.getDate()}/${
      checkin.getMonth() + 1
    } - ${checkout.getDate()}/${checkout.getMonth() + 1}`;
  }

  return '';
}

export default handleInputDateValueController;
