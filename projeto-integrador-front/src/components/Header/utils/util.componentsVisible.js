import useComponentVisible from '../../../hooks/useComponentVisible';

class ComponentsVisible {
  inputCity;

  inputCalendar;

  constructor(inputCity, inputCalendar) {
    this.inputCity = useComponentVisible(false);
    this.inputCalendar = useComponentVisible(false);
  }
}

export default ComponentsVisible;
