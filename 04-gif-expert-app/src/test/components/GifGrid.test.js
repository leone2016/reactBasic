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
         loading: false
      });
      const wrapper = shallow(<GifGrid category={category} />);
      // clase 97
      // si loading esta en false, no debe mostar cargando ...
      expect( wrapper.find('p').exists()).toBe(false);
      // validar si existe GifGridItem
       expect( wrapper.find('GifGridItem').length).toBe( gifs.length);

   });
});
