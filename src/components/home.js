import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import logo from '../img/logo2.png';
import load from '../img/loader.gif';
import './css/bg.css';
import './css/home.css';

export default function Home() {

  const [pokemons, setPokemons] = useState([]);
  const [display, setDisplay] = useState('none');
  const [displayMensagge, setDisplayMensagge] = useState("none");

  const randomNumber = function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  };

  const timerMessage = ()=> {
    setTimeout(() => {
    setDisplayMensagge('block');
   }, 3000); 
  };
 
const clearMessage = ()=> {
  clearTimeout(timerMessage);
};

  const getAllPoke = async (min, max) => {


    let arr = [];
    setPokemons([]);

    for (let i = min; i < max; i++) {
      setDisplay("block");
      timerMessage();
      
      try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`); //los await sirve para que se vuelva sincrono,osea que lo que sigue despuesde await espere hasta que termine de ejecutar
        const pokemons = await data.json();
        arr.push(pokemons);
      } catch (error) {
        alert(error);
      }

    }
    clearMessage();
    setDisplayMensagge('none');
    setDisplay('none');
    setPokemons(arr);

  };

  useEffect(() => {
    getAllPoke(randomNumber(153, 200), randomNumber(201, 250)); //pokemons randmon that are between 153 and 250
  }, []);

  return (
    <div>

      <Navbar className='navBg' variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">PokeApi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item><Button variant="outline-success" size="sm" onClick={() => getAllPoke(0, 151)}>Kanto</Button></Nav.Item>
            <Nav.Item><Button variant="outline-dark" size="sm" onClick={() => getAllPoke(152, 201)}>Johto</Button></Nav.Item>
            <Nav.Item><Button variant="outline-warning" size="sm" onClick={() => getAllPoke(251, 301)}>Honnen</Button></Nav.Item>
            <Nav.Item><Button variant="outline-danger" size="sm" onClick={() => getAllPoke(386, 436)}>Sinnoh</Button></Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <div className="home">
        <img src={logo} />
        <p className="text-center text-dark">
          Esta app sirve como buscador de Pokémon según su región,
          todo esto funciona gracias a pokeApi que es una base de datos de Pokémon creada por paul hallett y otros colaboradores  en todo el mundo, gracias a pokeApi esta app consume toda su información.
        </p>
      </div>

      <h3 className={displayMensagge}>¡Espera tus pokemon ya llegan🐾!</h3>

      <div className={'loader ' + display}>
        <img src={load} />
      </div>

      <div className='list' id="list">
        {
          pokemons.map((data) => {
            return (
              <div className="card " key={data.id} >
                <div className={"card-img-top " + data.types[0].type.name} id="card">
                  <img className="" src={data.sprites.front_default} alt="Card image cap" id="imgPoke" />
                </div>
                <div className="card-body" >
                  <h4 className="card-title text-center text-card" id="namePokemon">{data.name}</h4>
                  <p className="card-text text-center text-card " id="idPokemon">{data.id}</p>
                  <p className="card-text text-center text-card " id="abilityPokemon">{data.abilities[0].ability.name}</p>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
};