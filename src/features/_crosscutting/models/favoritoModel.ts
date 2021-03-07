import { HobbyTypeEnum } from "../utils/enum/hobbyTypeEnum";

export default class FavoritoModel {
  constructor(public id: number,public tipoHobby: HobbyTypeEnum) {}
}
