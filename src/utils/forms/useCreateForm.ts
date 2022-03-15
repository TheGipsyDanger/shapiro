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
      name: yup.string().required('Field is required'),
      day: yup.string().required('Field is required'),
      start: yup
        .string()
        .required('Field is required')
        .test('validate-hour', 'Please enter a valid time', final => {
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
          'Start must be earlier than the end',
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
        .required('Field is required')
        .test('validate-hour', 'Please enter a valid time', final => {
          if (final === undefined) return true;
          const justNumbers = final.replace(':', '');
          if (justNumbers?.length != 4) return false;
          return (
            parseInt(justNumbers.substr(0, 2)) < 24 &&
            parseInt(justNumbers.substr(2, 2)) < 60
          );
        })
        .test('pw-match', 'End has to be later than start', function (value) {
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
        }),
    }),
    onSubmit,
  });
};
