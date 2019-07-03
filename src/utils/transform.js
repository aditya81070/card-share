import * as _ from 'lodash';

const reqFields = [
  'name',
  'email',
  'username',
  'contact',
  'alternateContact',
  'variant',
  'picture',
  'addressOffice',
  'addressHome',
  'company',
  'designation',
  'website'
];

export const transform = reqObj => {
  return _.pick(reqObj, reqFields)
};
