import devStar from "../mapa/DevStar.svg";

export const Footer = () => {
  return (
    <footer
      className="bg-dark text-light border-dark border-bottom border-5 d-flex justify-content-center align-items-center"
      style={{ height: "25vh" }}
    >
      <div className="container row d-flex justify-content-center  " style={{ scale: ".5" }}>
        <img
          src={devStar}
          className="pb-4 "
          alt="aaa"
          style = {{width:"15vw"}}
        />

        <h3 className="fs-2 text-center">
          Ing de Software, FrontEnd, Administración de Base de Datos
        </h3>
        <h3 className="fs-6 text-center">
          Alex Arreola, Alberto Jímenez, Elian Gerard, Jesús Melero, Edgar
          Anderson, Alexis Montes, Adan Salazar, Vannessa Gil, Samantha Martinez
        </h3>
      </div>
    </footer>
  );
};
