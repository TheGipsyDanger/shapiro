import moment from 'moment';

import { useFormik } from 'formik';
import * as yup from 'yup';

export const useCreateForm = (onSubmit: any, event: any) => {
  return useFormik({
    initialErrors: {},
    initialValues: {
      name: event?.name ? event.name : '',
      day: moment().format('dddd').toLowerCase(),
      start: event?.initial ? event.initial : '',
      final: event?.final ? event.final : '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Este campo é obrigatório'),
      day: yup.string().required('Este campo é obrigatório'),
      start: yup
        .string()
        .required('Este campo é obrigatório')
        .test('validate-hour', 'Entre um horário válido', final => {
          if (final === undefined) return true;
          const justNumbers = final.replace(':', '');
          if (justNumbers?.length != 4) return false;
          return (
            parseInt(justNumbers.substr(0, 2)) < 24 &&
            parseInt(justNumbers.substr(2, 2)) < 60
          );
        })
        .test(
          'pw-match',
          'Inicio tem que ser menor que o final',
          function (value) {
            if (
              value &&
              this.parent.final &&
              value.length === 5 &&
              this.parent.final.length === 5
            ) {
              const startValue = Number(value.replace(':', ''));
              const finalValue = Number(this.parent.final.replace(':', ''));

              return startValue < finalValue;
            } else {
              return true;
            }
          }
        ),
      final: yup
        .string()
        .required('Este campo é obrigatório')
        .test('validate-hour', 'Entre um horário válido', final => {
          if (final === undefined) return true;
          const justNumbers = final.replace(':', '');
          if (justNumbers?.length != 4) return false;
          return (
            parseInt(justNumbers.substr(0, 2)) < 24 &&
            parseInt(justNumbers.substr(2, 2)) < 60
          );
        })
        .test(
          'pw-match',
          'Final tem que ser maior que o inicio',
          function (value) {
            if (
              value &&
              this.parent.start &&
              value.length === 5 &&
              this.parent.start.length === 5
            ) {
              const startValue = Number(this.parent.start.replace(':', ''));
              const finalValue = Number(value.replace(':', ''));

              return finalValue > startValue;
            } else {
              return true;
            }
          }
        ),
    }),
    onSubmit,
  });
};
