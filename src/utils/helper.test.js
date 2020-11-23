/* eslint-disable no-undef */
import { listManufacturers, getAvailabilityInfo, cleanUpAvailability } from './helper';
import { productData } from './testData';

test('listManufacturers', () => {
  const manufacturers = listManufacturers(productData);

  expect(manufacturers).toStrictEqual(['reps', 'abiplos', 'nouke', 'derp', 'xoon']);
});

test('getAvailability', () => {
  const a = '<AVAILABILITY>\n  <INSTOCKVALUE>INSTOCK</INSTOCKVALUE>\n</AVAILABILITY>';
  expect(getAvailabilityInfo(a)).toStrictEqual('IN STOCK');

  const b = '';
  expect(getAvailabilityInfo(b)).toStrictEqual('AVAILABILITY UNKNOWN');
});

test('cleanUpAvailability', () => {
  const a = [
    {
      id: '30D2D9F3851621D5A3CD9',
      DATAPAYLOAD: '<AVAILABILITY>\n  <INSTOCKVALUE>OUTOFSTOCK</INSTOCKVALUE>\n</AVAILABILITY>',
    },
    {
      id: '368B8C44A7C9ABF33E1E',
      DATAPAYLOAD: '<AVAILABILITY>\n  <INSTOCKVALUE>LESSTHAN10</INSTOCKVALUE>\n</AVAILABILITY>',
    },
    {
      id: 'EBCD17468CF0CF0F90F',
      DATAPAYLOAD: '<AVAILABILITY>\n  <INSTOCKVALUE>INSTOCK</INSTOCKVALUE>\n</AVAILABILITY>',
    }];
  expect(cleanUpAvailability(a)).toEqual([{ availability: 'OUT OF STOCK', id: '30d2d9f3851621d5a3cd9' }, { availability: 'LESS THAN 10', id: '368b8c44a7c9abf33e1e' }, { availability: 'IN STOCK', id: 'ebcd17468cf0cf0f90f' }]);

  const b = [];
  expect(cleanUpAvailability(b)).toEqual([]);
});
