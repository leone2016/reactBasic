import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
describe('UNIT TEST GifGrid.test.js ', () => {
   const category = 'Goku';

   test('debe de mostrar correctamente', () => {
      useFetchGifs.mockReturnValue({
         data: [],
         loading: true
      });
      const wrapper = shallow(<GifGrid category={category} />);
      expect(wrapper).toMatchSnapshot();
   });

   test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
      const gifs = [{
         id: 'ABC',
         url: 'https://localhost/cualquierCosa/test.jpg',
         title: 'Cualquier Cosa'
      }]
      useFetchGifs.mockReturnValue({
         data: gifs,
         loading: true
      });
      const wrapper = shallow(<GifGrid category={category} />);
      expect(wrapper).toMatchSnapshot();

      expect(wrapper).toMatchSnapshot();
   });
});
