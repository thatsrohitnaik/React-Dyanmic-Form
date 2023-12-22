export const config = {
  age: {
    label: 'Age',
    type: 'text',
    defaultValue: null,
    readOnly: false,
    hidden: false,
  },
  address: {
    city: {
      label: 'City',
      type: 'text',
      defaultValue: null,
      readOnly: false,
      hidden: false,
    },
    pincode: {
      label: 'Pincode',
      type: 'number',
      defaultValue: null,
      readOnly: false,
      hidden: false,
    },
    group: {
      name: 'Address',
    },
  },
  group: {
    name: 'Employee Details',
    maxColumns: 4,
  },
};



