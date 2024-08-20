import React from 'react';
import homeLogo from '../../assets/swift.png'
import './Home.css';
import ListaPostagens from '../../Components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../Components/postagens/modalPostagem/ModalPostagem';



function Home() {
    return (
        <>
        <div className="bg-pink-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Boas Vindas!</h2>
              <p className='text-xl'>Fique por dentro de tudo que acontece na The Eras Tour!</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className='rounded bg-white text-pink-800 py-2 px-4'>Ver postagens</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;