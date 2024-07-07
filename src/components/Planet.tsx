import { IPlanet } from "../models";

interface PlanetProps {
  planet: IPlanet;
}

export function Planet(props: PlanetProps) {
  return (
    <div>
      <h3>
        <strong>Name:</strong> {props.planet.name}
      </h3>
      <p>
        <strong>Short Description:</strong>
      </p>
      <p>
        <strong>rotation_period</strong>: <i>{props.planet.rotation_period}</i>,
        <strong>orbital_period</strong>: <i>{props.planet.orbital_period}</i>,
        <strong>diamete</strong>: <i>{props.planet.diameter}</i>,
        <strong>climate</strong>: <i>{props.planet.climate}</i>,
        <strong>gravity</strong>: <i>{props.planet.gravity}</i>,
        <strong>terrain</strong>: <i>{props.planet.terrain}</i>,
        <strong>surface_water</strong>: <i>{props.planet.surface_water}</i>,
        <strong>population</strong>: <i>{props.planet.population}</i>
      </p>
    </div>
  );
}
