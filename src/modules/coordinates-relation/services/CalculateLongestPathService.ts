import { Collaborator } from "modules/collaborator/entities/Collaborator";
import { ICollaboratorRepository } from "modules/collaborator/repositories/interfaces/ICollaboratorRepository";
import { Coordinates } from "modules/coordinates/entities/Coordinates";
import { ICoordinatesRepository } from "modules/coordinates/repositories/interfaces/ICoordinatesRepository";
import { TSPCalculatorService } from "../../tsp/TSPCalculatorService";

class CalculateLongestPathService {
  total: number;
  DAYS_IN_MONTH = 30;
  AVERAGE_GASOLINE_CONSUMPTION = 13;
  GASOLINE_AVERAGE_PRICE = 5.27;

  constructor(
    private collaboratorRepository: ICollaboratorRepository,
    private coordinatesRepository: ICoordinatesRepository
  ) {
    this.total = 0;
  }

  async perform(collaboratorId: number): Promise<any> {
    const collaborator = await this.findCollaborator(collaboratorId);
    const coordinates = await this.getUserCoordinates(collaborator);
    const points = this.getPoints(coordinates);
    const solver = new TSPCalculatorService();

    const distanceGraph = this.calculateDistances(coordinates, points);
    const solved = solver.solve(points, distanceGraph);

    this.calculateMonetaryValue(solved, coordinates);
    const finalValue = ((this.total/this.AVERAGE_GASOLINE_CONSUMPTION) * this.GASOLINE_AVERAGE_PRICE) * this.DAYS_IN_MONTH;
    const route = this.routeGenerator(solved, coordinates);

    await this.collaboratorRepository.updateBalance(collaborator, finalValue);

    return {finalValue: finalValue, route: route};
  }

  private routeGenerator(solved: any, coordinates: Coordinates[]) {
    return solved.result.map(element => {
      let coordinate = coordinates.find(item => item.id == element.baseId);
      return [coordinate.x, coordinate.y];
    });
  }

  private async findCollaborator(collaboratorId: number): Promise<Collaborator> {
    return this.collaboratorRepository.findById(collaboratorId);
  }

  private async getUserCoordinates(collaborator: Collaborator): Promise<Coordinates[]> {
    return this.coordinatesRepository.findAll(collaborator);
  }

  private getPoints(coordinates: Coordinates[]) {
    return coordinates.map((item, index) => {
      return { id: index, baseId: item.id}
    });
  }

  private calculateDistances(coordinates: Coordinates[], points: any) {
    let result = [];

    for(let i = 0; i < coordinates.length; i++){
      for(let j = i + 1; j < coordinates.length; j++) {
        result.push({
          set: [points.find(item => item.baseId == coordinates[i].id).id, points.find(item => item.baseId == coordinates[j].id).id],
          value: this.getDistanceFromLatLonInKm(
            Number(coordinates[i].x),
            Number(coordinates[i].y),
            Number(coordinates[j].x),
            Number(coordinates[j].y)
          )
        });
      }
    }

    return result;
  }

  private getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371;
    const dLat = this.deg2rad(lat2-lat1);
    const dLon = this.deg2rad(lon2-lon1);
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    return d;
  }

  private deg2rad(deg: number) {
    return deg * (Math.PI/180);
  }

  private calculateMonetaryValue(data: any, coordinates: Coordinates[]) {
    for(let i = 0; i < data.result.length; i++) {
      if(!data.result[i+1]) return;
      let firstCoordinate = coordinates.find(item => item.id == data.result[i].baseId);
      let secondCoordinate = coordinates.find(item => item.id == data.result[i+1].baseId);
      this.total += this.getDistanceFromLatLonInKm(
        Number(firstCoordinate.x),
        Number(firstCoordinate.y),
        Number(secondCoordinate.x),
        Number(secondCoordinate.y)
      );
    }
  }
}

export { CalculateLongestPathService };
